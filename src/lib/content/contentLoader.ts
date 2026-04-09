import { BaseMeta } from '@/Interfaces/types';
import { promises as fs } from 'fs'
import path from "node:path";

const CONTENT_ROOT = path.join(process.cwd(), "src", "content");

export async function getMetaFiles(): Promise<BaseMeta[]| undefined> {
    try {

        const entries = await fs.readdir(CONTENT_ROOT, { withFileTypes: true, recursive: true });
        const result = [];
        for (const entry of entries) {
            if (entry.isFile() && entry.name === "meta.json") {
                const fullPath = path.join(entry.path, entry.name);
                const content = await fs.readFile(fullPath, "utf-8");
                 
                if(!content){        
                    continue;
                }
                const metaData: BaseMeta = JSON.parse(content);
                result.push(metaData);
            }
        }
        return result;
    }
    catch (err) {
        console.log("There is an error while working with fs:", err)
    }

}


