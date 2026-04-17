import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const posts = await prisma.post.findMany();
  return Response.json(posts);
}

export async function POST(req: Request) {
  const body = await req.json();

  const post = await prisma.post.create({
    data: {
      name: body.name,
      price: body.price,
      image: body.image || "",
    },
  });

  return Response.json(post);
}
