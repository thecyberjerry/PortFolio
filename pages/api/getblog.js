import * as fs from 'fs';
export default function handler(req, res) {

    fs.readFile(`blogs/${req.query.blog}.json`,'utf-8',(err,data)=>
    {
        if(data)
        {
          res.status(200).json(JSON.parse(data))
        }
        else
        {
          res.status(404).json({error:"Blog Not Found"}) 
        }
    })
  }