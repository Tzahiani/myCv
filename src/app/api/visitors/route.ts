import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  getVisitorCount,
  incrementVisitorCount,
} from "@/lib/visitors";

const COOKIE_NAME = "portfolio_visitor";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year — unique visitors

export async function GET() {
  try {
    const count = await getVisitorCount();
    if (count == null) {
      return NextResponse.json(
        { count: null, configured: false },
        { status: 200 },
      );
    }
    return NextResponse.json({ count, configured: true });
  } catch {
    return NextResponse.json(
      { count: null, configured: false, error: true },
      { status: 200 },
    );
  }
}

export async function POST() {
  try {
    const jar = await cookies();
    const alreadyCounted = jar.get(COOKIE_NAME)?.value === "1";

    if (alreadyCounted) {
      const count = await getVisitorCount();
      return NextResponse.json({
        count,
        configured: count != null,
        counted: false,
      });
    }

    const count = await incrementVisitorCount();
    if (count == null) {
      return NextResponse.json(
        { count: null, configured: false, counted: false },
        { status: 200 },
      );
    }

    const response = NextResponse.json({
      count,
      configured: true,
      counted: true,
    });

    response.cookies.set(COOKIE_NAME, "1", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: COOKIE_MAX_AGE,
      path: "/",
    });

    return response;
  } catch {
    return NextResponse.json(
      { count: null, configured: false, counted: false, error: true },
      { status: 200 },
    );
  }
}
