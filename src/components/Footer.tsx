import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, Mail, ChevronDown, Check } from 'lucide-react';
import { useI18n } from '../i18n';

interface FooterProps {
  onOpenAccount: () => void;
  onOpenTracking: () => void;
  onNavigateToProduct?: () => void;
  onNavigateToHome?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAccount,
  onOpenTracking,
  onNavigateToProduct,
  onNavigateToHome,
}) => {
  const { t } = useI18n();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [openCol, setOpenCol] = useState<number | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  const toggleCol = (idx: number) => {
    setOpenCol(prev => (prev === idx ? null : idx));
  };

  return (
    <footer className="bg-[#1a1a1a] text-[#bbb9ba] font-['Figtree'] pt-10 pb-12 border-t border-[#333]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-14">
        {/* Top bar: CONTACTEZ-NOUS, Newsletter & Socials */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-[#494546]">
          <span className="font-bold text-[16px] sm:text-[20px] text-white/90 uppercase tracking-wide shrink-0">
            {t.footer.contactUs}
          </span>

          {/* Form */}
          <form onSubmit={handleSubscribe} className="flex-1 max-w-[480px] w-full">
            <div className="flex rounded-full overflow-hidden bg-white p-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.footer.emailPlaceholder}
                required
                className="flex-1 px-4 py-2 text-[14px] sm:text-[16px] text-gray-900 bg-transparent outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#0071E3] hover:bg-blue-600 text-white font-bold text-[13px] sm:text-[15px] uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
              >
                {subscribed ? t.footer.subscribedSuccess : t.footer.subscribeButton}
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
            <img referrerPolicy="no-referrer"
              src="https://eu.store.igarden.ai/cdn/shop/files/iGarden_Logo_a75f4524-dbee-4d91-bb0d-0ce9cc051f03.png?v=1772160643&width=600"
              alt="iGarden Europe Store"
              className="h-8 w-auto object-contain"
            />
            <p className="text-[14px] text-white/70 font-medium">
              Transformez votre piscine en couloir de nage olympique sans travaux.
            </p>
          </div>

          {/* Col 1: Produits */}
          <div className="space-y-3">
            <h3
              onClick={() => toggleCol(1)}
              className="font-bold text-[16px] text-white/90 uppercase tracking-wider flex items-center justify-between cursor-pointer sm:cursor-default"
            >
              <span>{t.footer.productsCol}</span>
            </h3>
            <ul className={`space-y-2 text-[14px] text-white/70 font-medium ${openCol === 1 ? 'block' : 'block'}`}>
              <li>
                <button onClick={onNavigateToHome} className="hover:text-white transition-colors text-left bg-transparent border-none p-0 cursor-pointer text-white/70">
                  {t.header.poolCleaners}
                </button>
              </li>
              <li>
                <button onClick={onNavigateToProduct} className="hover:text-white transition-colors text-left bg-transparent border-none p-0 cursor-pointer text-white/70">
                  {t.product.title}
                </button>
              </li>
              <li>
                <button onClick={onNavigateToHome} className="hover:text-white transition-colors text-left bg-transparent border-none p-0 cursor-pointer text-white/70">
                  {t.header.lawnMower}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Aide et assistance */}
          <div className="space-y-3">
            <h3
              onClick={() => toggleCol(2)}
              className="font-bold text-[16px] text-white/90 uppercase tracking-wider flex items-center justify-between cursor-pointer sm:cursor-default"
            >
              <span>{t.footer.helpSupportCol}</span>
            </h3>
            <ul className={`space-y-2 text-[14px] text-white/70 font-medium ${openCol === 2 ? 'block' : 'block'}`}>
              <li><a href="https://eu.store.igarden.ai/fr/pages/retour-et-remboursements" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t.footer.returnsRefunds}</a></li>
              <li><a href="https://eu.store.igarden.ai/fr/pages/politique-de-garantie" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t.footer.warrantyPolicy}</a></li>
              <li><button onClick={onOpenAccount} className="hover:text-white transition-colors text-left bg-transparent border-none p-0 cursor-pointer text-white/70">{t.footer.contactSupport}</button></li>
              <li><a href="https://eu.store.igarden.ai/policies/shipping-policy" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t.footer.shippingPolicy}</a></li>
              <li><a href="https://eu.store.igarden.ai/fr/pages/methodes-de-paiement" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t.footer.paymentMethods}</a></li>
              <li><a href="https://eu.store.igarden.ai/fr/pages/politique-de-confidentialite" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t.footer.privacyPolicy}</a></li>
              <li><a href="https://eu.store.igarden.ai/fr/pages/conditions-dutilisation" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t.footer.termsOfService}</a></li>
              <li><button onClick={onOpenTracking} className="hover:text-white transition-colors text-left bg-transparent border-none p-0 cursor-pointer text-white/70">{t.footer.orderTracking}</button></li>
            </ul>
          </div>

          {/* Col 3: Explorer */}
          <div className="space-y-3">
            <h3
              onClick={() => toggleCol(3)}
              className="font-bold text-[16px] text-white/90 uppercase tracking-wider flex items-center justify-between cursor-pointer sm:cursor-default"
            >
              <span>{t.footer.exploreCol}</span>
            </h3>
            <ul className={`space-y-2 text-[14px] text-white/70 font-medium ${openCol === 3 ? 'block' : 'block'}`}>
              <li><a href="https://eu.store.igarden.ai/fr/blogs/news" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t.footer.blog}</a></li>
              <li><a href="https://eu.store.igarden.ai/fr/pages/filiale" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t.footer.affiliateProgram}</a></li>
              <li><a href="https://eu.store.igarden.ai/fr/pages/a-propos-de-nous" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t.footer.aboutUs}</a></li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div className="space-y-4">
            <h3 className="font-bold text-[16px] text-white/90 uppercase tracking-wider">
              {t.footer.emailUs}
            </h3>
            <div className="space-y-2 text-[14px] text-white/70">
              <a
                href="mailto:service@theigarden.com"
                className="flex items-center gap-2 text-[#0071E3] hover:underline"
              >
                <Mail className="w-4 h-4" />
                <span>service@theigarden.com</span>
              </a>
              <p>{t.footer.supportHours}</p>
              <p className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {t.footer.supportAvailable}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright & payment icons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-white/50">
          <p>
            © {new Date().getFullYear()} iGarden. {t.footer.rightsReserved}
          </p>
          <div className="flex items-center gap-2 opacity-70">
            <span className="px-2 py-1 bg-white/10 rounded-xs font-semibold text-[10px] text-white">VISA</span>
            <span className="px-2 py-1 bg-white/10 rounded-xs font-semibold text-[10px] text-white">Mastercard</span>
            <span className="px-2 py-1 bg-white/10 rounded-xs font-semibold text-[10px] text-white">Apple Pay</span>
            <span className="px-2 py-1 bg-white/10 rounded-xs font-semibold text-[10px] text-white">Google Pay</span>
            <span className="px-2 py-1 bg-white/10 rounded-xs font-semibold text-[10px] text-white">PayPal</span>
            <span className="px-2 py-1 bg-white/10 rounded-xs font-semibold text-[10px] text-white">Klarna</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
