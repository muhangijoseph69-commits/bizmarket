import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch posts" });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const newPost = await prisma.post.create({
      data: {
        product_name: body.product_name,
        price: body.price,
        country: body.country,
        whatsapp_number: body.whatsapp_number,
        image_url: body.image_url,
        userId: body.userId,
      },
    });

    return NextResponse.json(newPost);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create post" });
  }
}
