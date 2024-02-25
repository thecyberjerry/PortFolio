import * as fs from 'fs';
import path from 'path';
export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'blogs',`${req.query.blog}.json`);
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (data) {
      console.log(data)
      res.status(200).json(JSON.parse(data))
    }
    else {
      res.status(404).json({ error: "Blog Not Found" })
    }
  })
}