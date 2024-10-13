import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
    return NextResponse.redirect(new URL("/home", request.url));
};

export const config = {
    matcher: "/dashboard/:path*",
};
