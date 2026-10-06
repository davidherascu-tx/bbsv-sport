"use client";

import { usePathname } from "next/navigation";

// Das Studio unter /studio läuft ohne Header und Footer der Website.
export default function SiteShell({ header, footer, children }: { header: React.ReactNode; footer: React.ReactNode; children: React.ReactNode }) {
  if (usePathname().startsWith("/studio")) return <>{children}</>;
  return (
    <>
      {header}
      <main className="flex-1">{children}</main>
      {footer}
    </>
  );
}
