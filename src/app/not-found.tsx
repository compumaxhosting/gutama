import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">404</p>
        <h1 className="mt-3 font-serif text-4xl font-bold text-foreground">Page Not Found</h1>
        <p className="mt-4 text-muted-foreground">The page you are looking for does not exist.</p>
        <Button asChild className="mt-6">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </main>
  );
}
