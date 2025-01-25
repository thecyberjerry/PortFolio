export const revalidate = 60;
import prisma from "../../../../lib/prisma";
export async function POST(request: Request) {
  try {
    const saveContactToDatabase = await request.json();
    await prisma.contact.create({
      data: saveContactToDatabase,
    });
    return Response.json({ status: true, code: 201 });
  } catch (error) {
    return Response.json({ status: false, message: error });
  }
}
