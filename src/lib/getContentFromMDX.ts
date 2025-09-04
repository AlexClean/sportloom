import path from "path";
import fs from 'fs/promises'

export default async function getContentFromMDX(folderName:string, slug:string){
    const filePath = path.join(process.cwd(), 'src', 'content', folderName, `${slug}.mdx`);

    const source = await fs.readFile(filePath, 'utf-8');
    return source;
}