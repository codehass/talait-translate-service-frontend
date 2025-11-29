// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function checks for a valid authentication state
function isAuthenticated(request: NextRequest) {
	// 💡 This is the part you'll update with your real auth logic.
	const sessionToken = request.cookies.get("session-token")?.value;

	// For demonstration, checks if a session-token cookie exists.
	return !!sessionToken;
}

// 1. The main middleware function MUST be exported.
export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// Define the protected path
	if (pathname === "/translate") {
		// Check if the user is authenticated
		if (!isAuthenticated(request)) {
			const url = new URL("/register", request.url);

			// Redirect the user to the login page
			url.searchParams.set("from", pathname);

			return NextResponse.redirect(url);
		}
	}

	// Allow the request to continue if the path is not protected or the user is authenticated
	return NextResponse.next();
}

// 2. The config object MUST be exported (if used to define the matcher).
export const config = {
	// Only run middleware on the /translate path
	matcher: ["/translate"],
};
