
import { promises as fs } from "fs";
import path from "node:path";

const SRC_ROOT = path.join(process.cwd(), "src");
const CONTENT_ROOT = path.join(SRC_ROOT, "content");
const OUTPUT_DIR = path.join(CONTENT_ROOT, "generated");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "metaRegistry.ts");

function toAliasImportPath(fullPath: string): string {
    const relativePath = path
        .relative(SRC_ROOT, fullPath)
        .replaceAll("\\", "/");

    return `@/${relativePath}`;
}

async function walk(dir: string): Promise<string[]> {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files: string[] = [];

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            files.push(...await walk(fullPath));
        }

        if (entry.isFile() && entry.name === "meta.json") {
            files.push(fullPath);
        }
    }

    return files;
}

async function generateMetaIndex() {
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    const metaFiles = await walk(CONTENT_ROOT);

    const imports: string[] = [];
    const indexEntries: string[] = [];

    metaFiles.forEach((file, index) => {
        const importName = `meta${index}`;
        const importPath = toAliasImportPath(file);

        imports.push(`import ${importName} from "${importPath}";`);
        indexEntries.push(`  [${importName}.slug]: ${importName} as BaseMeta,`);
    });

    const fileContent = `// AUTO-GENERATED FILE. DO NOT EDIT MANUALLY.

import { BaseMeta } from "@/Interfaces/types";

${imports.join("\n")}

export const META_INDEX: Record<string, BaseMeta> = {
${indexEntries.join("\n")}
};

export const META_LIST: BaseMeta[] = Object.values(META_INDEX);
`;

    await fs.writeFile(OUTPUT_FILE, fileContent, "utf-8");

    console.log(`Generated meta index with ${metaFiles.length} entries.`);
}

generateMetaIndex().catch(error => {
    console.error("Failed to generate meta index:", error);
    process.exit(1);
});