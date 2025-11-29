import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
	if (request.nextUrl.pathname === "/translate") {
		const rewriteUrl = new URL("/register", request.url);
		return NextResponse.rewrite(rewriteUrl);
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/translate"],
};
