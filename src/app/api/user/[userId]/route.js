import { NextResponse } from "next/server";
import data from "@/data.json";
export async function GET(Request, context) {
  const { params } = context;
  const user = data.filter((x) => params.userId === x.Id.toString());
  return NextResponse.json({
    user,
  });
}
