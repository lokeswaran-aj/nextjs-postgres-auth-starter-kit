/* eslint-disable check-file/filename-naming-convention */
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { auth } from "@/auth";

export const middleware = async (request: NextRequest) => {
    const session = await auth();
    if (!session) return NextResponse.redirect(new URL("/", request.nextUrl));
    return NextResponse.next();
};

export const config = {
    matcher: ["/dashboard/:path*", "/profile/:path*"],
};
