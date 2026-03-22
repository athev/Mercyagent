"use client";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * AuthGuard handles global redirection:
 * 1. If user is logged in but has no DNA -> Always redirect to /onboarding
 * 2. If user is NOT on /onboarding and has no DNA -> Redirect to /onboarding
 */
export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Only run logic when session status is finalized
        if (status === "authenticated") {
            const hasDNA = (session?.user as any)?.hasDNA;
            
            // Critical logic: If NO DNA and not on allowed pages (onboarding, profile)
            if (hasDNA === false && pathname !== "/onboarding" && pathname !== "/profile" && pathname !== "/") {
                console.log("AuthGuard: Missing DNA. Redirecting to /onboarding...");
                router.push("/onboarding");
            }
        }
    }, [session, status, pathname, router]);

    // Optional: Show loading state or nothing while checking
    if (status === "loading") {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
            </div>
        );
    }

    return <>{children}</>;
}
