
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET all products
export async function GET() {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

// CREATE a product
export async function POST(req: Request) {
  const body = await req.json();

  const product = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
      image: body.image,
    },
  });

  return NextResponse.json(product);
}
