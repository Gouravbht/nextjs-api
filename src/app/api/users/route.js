import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    Name: "Gourav",
    Age: 25,
  });
}

export async function POST(Request) {
  const data = await Request.json();
  return NextResponse.json({
    data,
  });
}
