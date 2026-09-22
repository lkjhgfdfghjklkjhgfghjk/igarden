import React, { useState, useEffect } from 'react';
import { ProductVariant } from '../types';
import { CHECKOUT_URL } from '../data';
import { redirectToCheckout } from '../utils/checkout';
import { trackTikTokInitiateCheckout } from '../utils/tiktokPixel';
import { ArrowRight, Lock } from 'lucide-react';

interface StickyInsideNavProps {
  selectedVariant: ProductVariant;
  onSelectVariant: (variant: ProductVariant) => void;
  onAddToCart: () => void;
}

export const StickyInsideNav: React.FC<StickyInsideNavProps> = ({
  selectedVariant
}) => {
  const [activeSection, setActiveSection] = useState('Aperçu');
  const [showBottomBar, setShowBottomBar] = useState(false);

  const sections = [
    { id: 'Aperçu', label: 'Aperçu' },
    { id: 'Technologie', label: 'Technologie' },
    { id: 'Avantages', label: 'Avantages' },
    { id: 'Avis', label: 'Avis Clients' }
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const productSection = document.getElementById('MainContent');
          if (productSection) {
            const rect = productSection.getBoundingClientRect();
            if (rect.bottom < 100) {
              setShowBottomBar(true);
            } else {
              setShowBottomBar(false);
            }
          }

          sections.forEach((sec) => {
            const el = document.getElementById(sec.id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 250 && rect.bottom >= 100) {
                setActiveSection(sec.id);
              }
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleDirectCheckout = () => {
    trackTikTokInitiateCheckout({
      id: selectedVariant.id,
      name: selectedVariant.name,
      price: selectedVariant.price,
      quantity: 1,
      currency: 'EUR'
    });
    redirectToCheckout(selectedVariant.checkoutUrl, {
      productName: selectedVariant.name,
      price: `${selectedVariant.price.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €`
    });
  };

  return (
    <>
      {/* Top sticky anchor bar */}
      <div className="sticky top-[68px] sm:top-[80px] z-30 bg-white/95 backdrop-blur-md border-y border-gray-200 shadow-xs">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Model info */}
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
            <div>
              <span className="font-bold text-[15px] sm:text-[16px] text-gray-900 leading-tight">
                {selectedVariant.name}
              </span>
              <span className="text-[13px] text-gray-500 hidden sm:inline ml-2">
                — Strömung {selectedVariant.flowRate} | {selectedVariant.power}
              </span>
            </div>
          </div>

          {/* Section anchor tabs */}
          <div className="flex items-center gap-2 sm:gap-6 overflow-x-auto no-scrollbar py-0.5">
            {sections.map((sec) => (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollToSection(sec.id)}
                className={`px-2.5 py-1.5 min-h-[36px] sm:min-h-[40px] text-[13px] sm:text-[15px] font-semibold whitespace-nowrap transition-colors relative cursor-pointer ${
                  activeSection === sec.id ? 'text-[#0071E3]' : 'text-gray-600 hover:text-black'
                }`}
              >
                {sec.label}
                {activeSection === sec.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0071E3] rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Bottom Quick Buy Bar */}
      {showBottomBar && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 py-3 px-3.5 sm:px-8 shadow-2xl animate-in slide-in-from-bottom duration-200">
          <div className="max-w-[1500px] mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <img
                src={selectedVariant.images[0]}
                alt={selectedVariant.name}
                className="w-11 h-11 object-cover rounded-lg bg-gray-50 border border-gray-200 shrink-0 hidden sm:block"
              />
              <div className="min-w-0">
                <p className="font-bold text-[13px] sm:text-[15px] text-gray-900 truncate">
                  {selectedVariant.name}
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="text-[16px] sm:text-[18px] font-extrabold text-gray-950">
                    {selectedVariant.price.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €
                  </span>
                  <span className="text-[12px] text-gray-400 line-through">
                    {selectedVariant.originalPrice.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €
                  </span>
                  <span className="px-1.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] sm:text-[11px] font-bold">
                    -{Math.round(((selectedVariant.originalPrice - selectedVariant.price) / selectedVariant.originalPrice) * 100)}%
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleDirectCheckout();
              }}
              className="h-11 sm:h-13 px-4 sm:px-8 rounded-xl bg-[#0071E3] hover:bg-[#0062c4] active:bg-[#004f9f] active:scale-[0.99] text-white font-extrabold text-[12px] sm:text-[15px] tracking-wide shadow-md shadow-blue-500/20 transition-all shrink-0 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer uppercase text-center"
            >
              <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span>COMMANDER MAINTENANT</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 hidden xs:inline-block" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
