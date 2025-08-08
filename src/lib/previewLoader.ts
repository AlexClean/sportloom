import path from "path";
import fs from 'fs';


export default function getAllPreviews(sectionName: string){
    const previewDir = path.join(process.cwd(), 'src', 'content', 'previews', sectionName);
    
    if(!fs.existsSync(previewDir)) return [];

    return fs.readdirSync(previewDir)
    .filter(f=>f.endsWith('.mdx'))
}

