"use client";

import { useState, useEffect } from "react";

export function useAuth() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const res = await fetch(`/api/auth/me`, {
					credentials: "include",
				});
				const data = await res.json();
				setIsAuthenticated(data.authenticated);
			} catch (err) {
				console.error("Auth check failed", err);
				setIsAuthenticated(false);
			}
		};

		checkAuth();
	}, []);

	return { isAuthenticated, setIsAuthenticated };
}
