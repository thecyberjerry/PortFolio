import * as fs from 'fs';
export default async function handler(req, res) {
    // if (req.method == 'POST') {
    //     let file = await fs.promises.readdir(`ContactsData/`)
    //     await fs.promises.writeFile(`ContactsData/User${file.length + 1}.json`, req.body)
    //     res.status(200).json({ status: "success" })
    // }
    // else {

        res.status(200).json({ status: "This Endpoint is not supported please goto link provided here", url:"https://himanshu-folio.vercel.app/contact" });
    // }
}
