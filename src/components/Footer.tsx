import React, { useState } from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  onOpenCountryDialog: () => void;
  onOpenAccount?: () => void;
  onOpenTracking?: () => void;
  onNavigateToProduct?: () => void;
  onNavigateToHome?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCountryDialog,
  onOpenAccount,
  onOpenTracking,
  onNavigateToProduct,
  onNavigateToHome,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [openCol, setOpenCol] = useState<number | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  const toggleCol = (idx: number) => {
    setOpenCol(prev => (prev === idx ? null : idx));
  };

  return (
    <footer className="bg-[#1a1a1a] text-[#bbb9ba] font-['Figtree'] pt-10 pb-12 border-t border-[#333]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-14">
        {/* Top bar: NEWSLETTER, Newsletter & Socials */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-[#494546]">
          <span className="font-bold text-[16px] sm:text-[20px] text-white/90 uppercase tracking-wide shrink-0">
            NEWSLETTER & ANGEBOTE:
          </span>

          {/* Form */}
          <form onSubmit={handleSubscribe} className="flex-1 max-w-[480px] w-full">
            <div className="flex rounded-full overflow-hidden bg-white p-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-Mail-Adresse eingeben"
                required
                className="flex-1 px-4 py-2 text-[14px] sm:text-[16px] text-gray-900 bg-transparent outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#0071E3] hover:bg-blue-600 text-white font-bold text-[13px] sm:text-[15px] uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
              >
                {subscribed ? "ANGEMELDET!" : "ANMELDEN"}
              </button>
            </div>
          </form>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-white/70 shrink-0">
            <a
              href="https://www.facebook.com/theiGarden"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-1"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/igarden_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-1"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@iGarden_global"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-1"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@igarden_official"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-1"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10.511 1.705h2.74s-.157 3.51 3.795 3.768v2.711s-2.114.129-3.796-1.158l.028 5.606A5.073 5.073 0 1 1 8.213 7.56h.708v2.785a2.298 2.298 0 1 0 1.618 2.205z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 border-b border-[#494546]">
          {/* Logo & Slogan */}
          <div className="space-y-4">
            <img
              src="https://eu.store.igarden.ai/cdn/shop/files/iGarden_Logo_a75f4524-dbee-4d91-bb0d-0ce9cc051f03.png?v=1772160643&width=600"
              alt="iGarden Europe Store"
              loading="lazy"
              decoding="async"
              className="h-8 w-auto object-contain"
            />
            <p className="text-[14px] text-white/70 font-medium">
              Artful Living Technology
            </p>
          </div>

          {/* Col 1: Produkte */}
          <div className="space-y-3">
            <h3
              onClick={() => toggleCol(1)}
              className="font-bold text-[16px] text-white/90 uppercase tracking-wider flex items-center justify-between cursor-pointer sm:cursor-default"
            >
              <span>Produkte</span>
            </h3>
            <ul className={`space-y-2 text-[14px] text-white/70 font-medium ${openCol === 1 ? 'block' : 'block'}`}>
              <li>
                <button type="button" onClick={onNavigateToHome} className="hover:text-white transition-colors text-left bg-transparent border-none p-0 cursor-pointer text-white/70">
                  iGarden Poolroboter KN-Serie
                </button>
              </li>
              <li>
                <button type="button" onClick={onNavigateToProduct} className="hover:text-white transition-colors text-left bg-transparent border-none p-0 cursor-pointer text-white/70">
                  Tragbare Gegenstromanlage iGarden X-Serie
                </button>
              </li>
              <li>
                <button type="button" onClick={onNavigateToHome} className="hover:text-white transition-colors text-left bg-transparent border-none p-0 cursor-pointer text-white/70">
                  iGarden Mähroboter R-Serie
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Hilfe & Support */}
          <div className="space-y-3">
            <h3
              onClick={() => toggleCol(2)}
              className="font-bold text-[16px] text-white/90 uppercase tracking-wider flex items-center justify-between cursor-pointer sm:cursor-default"
            >
              <span>Hilfe & Support</span>
            </h3>
            <ul className={`space-y-2 text-[14px] text-white/70 font-medium ${openCol === 2 ? 'block' : 'block'}`}>
              <li><a href="https://eu.store.igarden.ai/pages/retour-et-remboursements" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Rückgabe & Erstattung</a></li>
              <li><a href="https://eu.store.igarden.ai/pages/politique-de-garantie" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Garantiebestimmungen</a></li>
              <li><button type="button" onClick={onOpenAccount} className="hover:text-white transition-colors text-left bg-transparent border-none p-0 cursor-pointer text-white/70">Kontaktieren Sie uns</button></li>
              <li><a href="https://eu.store.igarden.ai/policies/shipping-policy" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Versandinformationen</a></li>
              <li><a href="https://eu.store.igarden.ai/pages/methodes-de-paiement" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Zahlungsmethoden</a></li>
              <li><a href="https://eu.store.igarden.ai/pages/politique-de-confidentialite" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Datenschutzrichtlinie</a></li>
              <li><a href="https://eu.store.igarden.ai/pages/conditions-dutilisation" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Allgemeine Geschäftsbedingungen</a></li>
              <li><button type="button" onClick={onOpenTracking} className="hover:text-white transition-colors text-left bg-transparent border-none p-0 cursor-pointer text-white/70">Sendungsverfolgung</button></li>
            </ul>
          </div>

          {/* Col 3: Entdecken */}
          <div className="space-y-3">
            <h3
              onClick={() => toggleCol(3)}
              className="font-bold text-[16px] text-white/90 uppercase tracking-wider flex items-center justify-between cursor-pointer sm:cursor-default"
            >
              <span>Entdecken</span>
            </h3>
            <ul className={`space-y-2 text-[14px] text-white/70 font-medium ${openCol === 3 ? 'block' : 'block'}`}>
              <li><a href="https://eu.store.igarden.ai/blogs/news" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Blog & Ratgeber</a></li>
              <li><a href="https://eu.store.igarden.ai/pages/filiale" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Partnerprogramm</a></li>
              <li><a href="https://eu.store.igarden.ai/pages/a-propos-de-nous" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Über uns</a></li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <img
                  src="https://eu.store.igarden.ai/cdn/shop/files/SVG.svg?v=1773125689&width=48"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-5 h-5 object-contain"
                />
                <p className="font-bold text-[15px] text-white">E-Mail schreiben</p>
              </div>
              <p className="text-[14px] text-white/70 pl-7">customercare@igarden.ai</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <img
                  src="https://eu.store.igarden.ai/cdn/shop/files/SVG-2.svg?v=1773125689&width=48"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-5 h-5 object-contain"
                />
                <p className="font-bold text-[15px] text-white">Kundenservice-Zeiten</p>
              </div>
              <p className="text-[14px] text-white/70 pl-7">24/7 Support verfügbar</p>
            </div>
          </div>
        </div>

        {/* Bottom bar: Country, Copyright, Payments */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] text-white/60">
          <div className="flex items-center gap-4 flex-wrap">
            <button
              type="button"
              onClick={onOpenCountryDialog}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 18 18">
                <path d="M9 1.5A7.5 7.5 0 1 0 16.5 9 7.508 7.508 0 0 0 9 1.5Zm5.872 4.5h-2.497a11.736 11.736 0 0 0-1.034-2.902A6.023 6.023 0 0 1 14.872 6ZM9 2.527A10.564 10.564 0 0 1 10.31 6H7.69A10.564 10.564 0 0 1 9 2.527ZM2.695 10.5a6.112 6.112 0 0 1 0-3H5.55a12.4 12.4 0 0 0 0 3H2.695Zm.433 1.5h2.497a11.736 11.736 0 0 0 1.034 2.902A6.003 6.003 0 0 1 3.128 12Zm2.497-6H3.128a6.003 6.003 0 0 1 3.531-2.902A11.736 11.736 0 0 0 5.625 6ZM9 15.473A10.564 10.564 0 0 1 7.69 12h2.62A10.564 10.564 0 0 1 9 15.473ZM10.555 10.5h-3.11a11.227 11.227 0 0 1 0-3h3.11a11.227 11.227 0 0 1 0 3Zm.786 4.402A11.736 11.736 0 0 0 12.375 12h2.497a6.023 6.023 0 0 1-3.531 2.902ZM12.45 10.5a12.4 12.4 0 0 0 0-3h2.855a6.112 6.112 0 0 1 0 3H12.45Z"/>
              </svg>
              <span>Deutschland / Deutsch</span>
            </button>
            <span className="text-white/40">•</span>
            <span>Copyright © 2026 iGarden All Rights Reserved</span>
          </div>

          {/* Payment Badges list */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {/* Amex */}
            <div className="h-6 w-9 rounded-sm bg-[#0071CE] flex items-center justify-center text-white text-[8px] font-extrabold tracking-tighter">
              AMEX
            </div>
            {/* Diners */}
            <div className="h-6 w-9 rounded-sm bg-white border border-gray-300 flex items-center justify-center text-[#3086C8] text-[8px] font-bold">
              DINERS
            </div>
            {/* Discover */}
            <div className="h-6 w-9 rounded-sm bg-white border border-gray-300 flex items-center justify-center text-[#F48120] text-[7px] font-extrabold">
              DISCOVER
            </div>
            {/* JCB */}
            <div className="h-6 w-9 rounded-sm bg-white border border-gray-300 flex items-center justify-center text-green-700 text-[8px] font-extrabold">
              JCB
            </div>
            {/* Mastercard */}
            <div className="h-6 w-9 rounded-sm bg-[#1C1C1C] flex items-center justify-center gap-0.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#EB001B]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#F79E1B] -ml-1.5 opacity-90" />
            </div>
            {/* PayPal */}
            <div className="h-6 w-9 rounded-sm bg-white border border-gray-300 flex items-center justify-center text-[#003087] font-extrabold text-[9px] italic">
              PayPal
            </div>
            {/* Visa */}
            <div className="h-6 w-9 rounded-sm bg-[#142FBD] flex items-center justify-center text-white text-[9px] font-black italic">
              VISA
            </div>
            {/* Apple Pay */}
            <div className="h-6 w-9 rounded-sm bg-white border border-gray-300 flex items-center justify-center text-black text-[9px] font-bold">
              Pay
            </div>
            {/* Google Pay */}
            <div className="h-6 w-9 rounded-sm bg-white border border-gray-300 flex items-center justify-center text-gray-800 text-[8px] font-bold">
              GPay
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
