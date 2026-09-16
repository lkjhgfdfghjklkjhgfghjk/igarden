import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, Globe } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

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
  const { currentMarket, currentLanguage, t } = useI18n();
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
    <footer className="bg-[#1a1a1a] text-[#bbb9ba] pt-10 pb-12 border-t border-[#333]" dir={currentLanguage.direction}>
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-14">
        {/* Top bar: Contact, Newsletter & Socials */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-[#494546]">
          <span className="font-bold text-[16px] sm:text-[20px] text-white/90 uppercase tracking-wide shrink-0">
            {t.footer.contactUs.toUpperCase()} :
          </span>

          {/* Form */}
          <form onSubmit={handleSubscribe} className="flex-1 max-w-[480px] w-full">
            <div className="flex rounded-full overflow-hidden bg-white p-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.footer.newsletterPlaceholder}
                required
                className="flex-1 px-4 py-2 text-[14px] sm:text-[16px] text-gray-900 bg-transparent outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#0071E3] hover:bg-blue-600 text-white font-bold text-[13px] sm:text-[15px] uppercase tracking-wider transition-colors shrink-0 cursor-pointer border-none"
              >
                {subscribed ? "✓" : t.footer.newsletterSubscribe.toUpperCase()}
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
              alt="iGarden Store"
              className="h-8 w-auto object-contain"
            />
            <p className="text-[14px] text-white/70 font-medium">
              Artful Living Technology
            </p>
          </div>

          {/* Col 1: Products */}
          <div className="space-y-3">
            <h3
              onClick={() => toggleCol(1)}
              className="font-bold text-[16px] text-white/90 uppercase tracking-wider flex items-center justify-between cursor-pointer sm:cursor-default"
            >
              <span>{t.footer.products}</span>
            </h3>
            <ul className={`space-y-2 text-[14px] text-white/70 font-medium ${openCol === 1 ? 'block' : 'block'}`}>
              <li>
                <button onClick={onNavigateToHome} className="hover:text-white transition-colors text-left bg-transparent border-none p-0 cursor-pointer text-white/70">
                  iGarden KN Series Pool Cleaner
                </button>
              </li>
              <li>
                <button onClick={onNavigateToProduct} className="hover:text-white transition-colors text-left bg-transparent border-none p-0 cursor-pointer text-white/70 font-bold text-white">
                  {t.hero.title}
                </button>
              </li>
              <li>
                <button onClick={onNavigateToHome} className="hover:text-white transition-colors text-left bg-transparent border-none p-0 cursor-pointer text-white/70">
                  iGarden R Series Robotic Mower
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Support */}
          <div className="space-y-3">
            <h3
              onClick={() => toggleCol(2)}
              className="font-bold text-[16px] text-white/90 uppercase tracking-wider flex items-center justify-between cursor-pointer sm:cursor-default"
            >
              <span>{t.footer.helpSupport}</span>
            </h3>
            <ul className={`space-y-2 text-[14px] text-white/70 font-medium ${openCol === 2 ? 'block' : 'block'}`}>
              <li><a href="https://eu.store.igarden.ai/fr/pages/retour-et-remboursements" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t.footer.returnsRefunds}</a></li>
              <li><a href="https://eu.store.igarden.ai/fr/pages/politique-de-garantie" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t.footer.warrantyPolicy}</a></li>
              <li><button onClick={onOpenAccount} className="hover:text-white transition-colors text-left bg-transparent border-none p-0 cursor-pointer text-white/70">{t.footer.contactUs}</button></li>
              <li><a href="https://eu.store.igarden.ai/policies/shipping-policy" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t.footer.shippingPolicy}</a></li>
              <li><a href="https://eu.store.igarden.ai/fr/pages/methodes-de-paiement" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t.footer.paymentMethods}</a></li>
              <li><a href="https://eu.store.igarden.ai/fr/pages/politique-de-confidentialite" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t.footer.privacyPolicy}</a></li>
              <li><a href="https://eu.store.igarden.ai/fr/pages/conditions-dutilisation" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t.footer.termsOfUse}</a></li>
              <li><button onClick={onOpenTracking} className="hover:text-white transition-colors text-left bg-transparent border-none p-0 cursor-pointer text-white/70">{t.footer.orderTracking}</button></li>
            </ul>
          </div>

          {/* Col 3: Explore */}
          <div className="space-y-3">
            <h3
              onClick={() => toggleCol(3)}
              className="font-bold text-[16px] text-white/90 uppercase tracking-wider flex items-center justify-between cursor-pointer sm:cursor-default"
            >
              <span>{t.footer.explore}</span>
            </h3>
            <ul className={`space-y-2 text-[14px] text-white/70 font-medium ${openCol === 3 ? 'block' : 'block'}`}>
              <li><a href="https://eu.store.igarden.ai/fr/blogs/news" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t.footer.blog}</a></li>
              <li><a href="https://eu.store.igarden.ai/fr/pages/filiale" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t.footer.affiliate}</a></li>
              <li><a href="https://eu.store.igarden.ai/fr/pages/a-propos-de-nous" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t.footer.aboutUs}</a></li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <img
                  src="https://eu.store.igarden.ai/cdn/shop/files/SVG.svg?v=1773125689&width=48"
                  alt=""
                  className="w-5 h-5 object-contain"
                />
                <p className="font-bold text-[15px] text-white">{t.footer.emailUs}</p>
              </div>
              <p className="text-[14px] text-white/70 pl-7">{t.footer.emailVal}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <img
                  src="https://eu.store.igarden.ai/cdn/shop/files/SVG-2.svg?v=1773125689&width=48"
                  alt=""
                  className="w-5 h-5 object-contain"
                />
                <p className="font-bold text-[15px] text-white">{t.footer.serviceHours}</p>
              </div>
              <p className="text-[14px] text-white/70 pl-7">{t.footer.serviceHoursVal}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar: Country, Copyright, Payments */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] text-white/60">
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={onOpenCountryDialog}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 font-medium"
            >
              <Globe className="w-4 h-4 text-[#0071E3]" />
              <span>{currentMarket.flag} {currentMarket.name} / {currentLanguage.nativeName} ({currentMarket.currency})</span>
            </button>
            <span className="text-white/40">•</span>
            <span>{t.footer.copyright}</span>
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
