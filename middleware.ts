// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function checks if the user is authenticated by looking for a session-token cookie
function isAuthenticated(request: NextRequest) {
	const sessionToken = request.cookies.get("session-token")?.value;

	// Return true if a session-token exists (authenticated user)
	return !!sessionToken;
}

// Main middleware function that checks authentication and protects the /translate route
export function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// If the requested path is /translate (protected)
	if (pathname === "/translate") {
		// Check if the user is authenticated by the presence of the session token
		if (!isAuthenticated(request)) {
			// If not authenticated, redirect the user to the login page (or register if they need to create an account)
			const url = new URL("/register", request.url); // or `/register` based on your flow

			// Optionally, include a query parameter to send the user back to the protected route after successful login
			url.searchParams.set("from", pathname);

			return NextResponse.redirect(url);
		}
	}

	// Allow the request to continue if the user is authenticated or the path is not protected
	return NextResponse.next();
}

// Export the config object to specify the matcher (to only apply middleware to /translate path)
export const config = {
	matcher: ["/translate"],
};
