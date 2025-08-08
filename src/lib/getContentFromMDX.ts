import path from "path";
import fs from 'fs'

export default function getContentFromMDX(folderName:string, slug:string){
    const filePath = path.join(process.cwd(), 'src', 'content', folderName, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        throw new Error(`Review file not found: ${filePath}`);
      }

    const source = fs.readFileSync(filePath, 'utf-8');
    return source;
}