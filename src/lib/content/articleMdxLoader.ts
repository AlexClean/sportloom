import path from "path";
import fs from 'fs/promises'
import { cache } from "react";

async function _getArticleMDXPage(contentPath:string){
    const filePath = path.join(process.cwd(), 'src', 'content', `${contentPath}`, 'content.mdx');
    const source = await fs.readFile(filePath, 'utf-8');
    return source;
}

export const getArticleMDXPageV2 = cache(_getArticleMDXPage);