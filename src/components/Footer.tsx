"use client";

import { FOOTER, SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="pb-24 pt-12">
      <div className="mx-auto max-w-[800px] px-6 text-center">
        <p className="mb-6 text-sm text-gray-text">{FOOTER.cta}</p>

        <div className="mb-4 flex items-center justify-center gap-4 text-xs text-gray-text/50">
          <a href="#" className="transition-colors hover:text-gold">Privacidade</a>
          <span>·</span>
          <a href="#" className="transition-colors hover:text-gold">Termos</a>
          <span>·</span>
          <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="transition-colors hover:text-gold">Suporte</a>
        </div>

        <p className="mb-4 text-[10px] leading-relaxed text-gray-text/30">{FOOTER.legal}</p>
        <p className="text-[10px] text-gray-text/20">{FOOTER.copyright}</p>
      </div>
    </footer>
  );
}
