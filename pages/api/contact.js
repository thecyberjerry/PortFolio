import Contact from "@/model/Contact";
import connectDB from "../lib/connectDB"

export default async function handler(req, res) {
    await connectDB()
    const { name, phone, email, msg, subject } = JSON.parse(req.body);
    const contact = new Contact({
        name: name,
        phone: phone,
        email: email,
        msg: msg,
        subject: subject
    })
    await contact.save()
    res.status(200).json({ status: true })
}