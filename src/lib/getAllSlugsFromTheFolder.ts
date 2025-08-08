import fs from 'fs'
import path from 'path'

export default function getAllSlugsFromTheFolder(folderName:string){
    const reviewsDir = path.join(process.cwd(), 'src', 'content', folderName)

    if (!fs.existsSync(reviewsDir)) return [];
      return fs
        .readdirSync(reviewsDir)
        .filter(f => f.endsWith('.mdx'))
        .map(f => f.replace(/\.mdx$/i, ''));
}