import prisma from "../../../../lib/prisma";
import nodemailer from "nodemailer";
export async function POST(request: Request) {
  try {
    const getContactData = await request.json();
    const transporter = nodemailer.createTransport({
      host: process.env.MAILER_HOST,
      port: 587,
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },

      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS,
      },
    });
    const saveContactToDB = await prisma.contact.create({
      data: getContactData,
    });
    if (saveContactToDB) {
      try {
        await transporter.sendMail({
          from: process.env.MAILER_FROM,
          to: process.env.MAILER_TO,
          replyTo: process.env.MAILER_REPLY_TO,
          subject: `Someone contacted from your portfolio contact form`,
          html: `
          <p>Name: ${getContactData?.name} </p>
          <p>Email:  ${getContactData?.email}</p>
          <p>Message: ${getContactData?.message} </p>
          `,
        });
      } catch (error) {}
    }
    return Response.json({ status: true, code: 201 });
  } catch (error) {
    return Response.json({ status: false, message: error });
  }
}
