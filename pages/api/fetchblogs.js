import * as fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
    const filePath = path.join(process.cwd(),'/blogs');
    let filedata = []
    let dirtitle = []
    let dirs = await fs.promises.readdir(filePath)
    for (let index = 0; index < dirs.length; index++) {
        const element = dirs[index];
        dirtitle.push(element)
    }
    for (let index = 0; index < dirtitle.length; index++) {
        const element = dirtitle[index];
        let files = await fs.promises.readFile(`blogs/${element}`, 'utf-8')
        filedata.push(JSON.parse(files))
    }
    res.status(200).json(filedata)
}