"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

interface CtaButtonProps {
  href?: string;
  children: React.ReactNode;
  floating?: boolean;
  className?: string;
}

export default function CtaButton({
  href = SITE_CONFIG.checkoutUrl,
  children,
  floating,
  className = "",
}: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={`btn-cta ${floating ? "btn-cta-floating" : ""} ${className}`}
    >
      <span>{children}</span>
    </Link>
  );
}
