import path from "path";
import fs from 'fs/promises'
import { cache } from 'react';

async function _getMDXPage(folderName:string, slug:string){
    const filePath = path.join(process.cwd(), 'src', 'content', folderName, `${slug}.mdx`);
    const source = await fs.readFile(filePath, 'utf-8');
    return source;
}

export const getMDXPage = cache(_getMDXPage);

async function _getArticleMDXPage(slug:string){
    const filePath = path.join(process.cwd(), 'src', 'content', 'articles', `${slug}`, 'content.mdx');
    const source = await fs.readFile(filePath, 'utf-8');
    return source;
}

export const getArticleMDXPage = cache(_getArticleMDXPage);