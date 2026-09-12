import React, { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X, ChevronDown, Globe } from 'lucide-react';
import { CartItem } from '../types';

interface HeaderProps {
  cartItems: CartItem[];
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenCountryDialog: () => void;
  onOpenAccount: () => void;
  onOpenTracking: () => void;
  onNavigateToProduct?: () => void;
  onNavigateToHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartItems,
  onOpenCart,
  onOpenSearch,
  onOpenCountryDialog,
  onOpenAccount,
  onOpenTracking,
  onNavigateToProduct,
  onNavigateToHome,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [activeSwimJetTab, setActiveSwimJetTab] = useState<'products' | 'accessories'>('products');

  // Mobile accordion states
  const [mobileOpenSection, setMobileOpenSection] = useState<string | null>(null);

  const toggleMobileSection = (section: string) => {
    setMobileOpenSection(prev => (prev === section ? null : section));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 transition-shadow">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 flex items-center justify-between h-[64px] sm:h-[76px]">
        {/* Mobile Hamburger Button */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 -ml-1.5 text-gray-900 hover:text-[#0071E3] transition-colors focus:outline-none cursor-pointer"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Logo */}
        <button
          onClick={onNavigateToHome}
          className="flex items-center gap-2 shrink-0 cursor-pointer border-none bg-transparent p-0"
        >
          <img
            src="https://eu.store.igarden.ai/cdn/shop/files/Frame_2085660613.png?v=1772160415&width=600"
            alt="iGarden Europe Store"
            className="h-7 sm:h-9 w-auto object-contain"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
          {/* Soldes de rentrée */}
          <button
            onClick={onNavigateToProduct}
            className="flex items-center gap-1.5 text-[15px] xl:text-[16px] font-semibold text-gray-900 hover:text-[#0071E3] transition-colors py-3 cursor-pointer bg-transparent border-none"
          >
            <img
              src="https://eu.store.igarden.ai/cdn/shop/files/sale_gift.png?v=1785742034&width=80"
              alt=""
              className="w-5 h-5 object-contain"
            />
            <span>Soldes de rentrée</span>
          </button>

          {/* Jet de natation Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMegaMenu('swim-jet')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <button
              onClick={onNavigateToProduct}
              className={`flex items-center gap-1 text-[15px] xl:text-[16px] font-semibold transition-colors py-3 cursor-pointer bg-transparent border-none ${
                activeMegaMenu === 'swim-jet' ? 'text-[#0071E3]' : 'text-gray-900 hover:text-[#0071E3]'
              }`}
            >
              <span>Jet de natation</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === 'swim-jet' ? 'rotate-180' : ''}`} />
            </button>

            {activeMegaMenu === 'swim-jet' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[840px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="grid grid-cols-4 gap-6">
                  {/* Left Tabs */}
                  <div className="col-span-1 border-r border-gray-100 pr-4 space-y-2">
                    <button
                      onClick={() => setActiveSwimJetTab('products')}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-[15px] font-bold transition-colors cursor-pointer ${
                        activeSwimJetTab === 'products' ? 'bg-[#F8F9FD] text-[#0071E3]' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Produits
                    </button>
                    <button
                      onClick={() => setActiveSwimJetTab('accessories')}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-[15px] font-bold transition-colors cursor-pointer ${
                        activeSwimJetTab === 'accessories' ? 'bg-[#F8F9FD] text-[#0071E3]' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      Accessoires
                    </button>
                  </div>

                  {/* Right Content */}
                  <div className="col-span-3">
                    {activeSwimJetTab === 'products' ? (
                      <div className="grid grid-cols-2 gap-4">
                        <div
                          onClick={onNavigateToProduct}
                          className="bg-[#F8F9FD] rounded-xl p-4 cursor-pointer hover:shadow-md transition-all group relative flex flex-col justify-between"
                        >
                          <span className="absolute top-3 right-3 bg-[#c6e8de] text-[#00c767] text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">
                            NOUVEAU
                          </span>
                          <div className="h-32 flex items-center justify-center my-2">
                            <img
                              src="https://eu.store.igarden.ai/cdn/shop/files/1200_x_1200_1_549cfcd1-014d-4f4b-a0b7-589f37292f31.png?v=1776675064&width=520"
                              alt="iGarden Swim Jet Série X"
                              className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-[14px] text-gray-900 text-center">Jet de natation portable iGarden Swim Jet — 1 000 W</h4>
                            <p className="text-[#0071E3] font-bold text-[13px] text-center mt-0.5">209,00 €</p>
                            <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-600 mt-2 flex-wrap">
                              <span>1 000 W</span>
                              <span>•</span>
                              <span>6 à 10 h d'autonomie</span>
                              <span>•</span>
                              <span>Toutes piscines</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        <a
                          href="https://eu.store.igarden.ai/fr/products/igarden-x-series-storage-bag"
                          target="_blank"
                          rel="noreferrer"
                          className="bg-[#F8F9FD] rounded-xl p-3 flex items-center gap-3 hover:shadow-xs transition-all"
                        >
                          <img
                            src="https://eu.store.igarden.ai/cdn/shop/files/2_441a6884-e0f6-4ca1-86eb-018e1a3fd6c1.png?v=1784095673&width=820"
                            alt="Sac de rangement"
                            className="w-14 h-14 object-contain"
                          />
                          <p className="font-bold text-[13px] text-gray-800 line-clamp-2">Sac de rangement iGarden série X</p>
                        </a>
                        <a
                          href="https://eu.store.igarden.ai/fr/products/igarden-swim-jet-power-box"
                          target="_blank"
                          rel="noreferrer"
                          className="bg-[#F8F9FD] rounded-xl p-3 flex items-center gap-3 hover:shadow-xs transition-all"
                        >
                          <img
                            src="https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237567.png?v=1785465169&width=820"
                            alt="Power Box"
                            className="w-14 h-14 object-contain"
                          />
                          <p className="font-bold text-[13px] text-gray-800 line-clamp-2">iGarden Swim Jet Power Box</p>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Nettoyeur de piscine Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMegaMenu('pool-cleaner')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <button
              onClick={onNavigateToHome}
              className={`flex items-center gap-1 text-[15px] xl:text-[16px] font-semibold transition-colors py-3 cursor-pointer bg-transparent border-none ${
                activeMegaMenu === 'pool-cleaner' ? 'text-[#0071E3]' : 'text-gray-900 hover:text-[#0071E3]'
              }`}
            >
              <span>Nettoyeur de piscine</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === 'pool-cleaner' ? 'rotate-180' : ''}`} />
            </button>

            {activeMegaMenu === 'pool-cleaner' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[840px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="grid grid-cols-3 gap-4">
                  {/* M1-AI */}
                  <div
                    onClick={onNavigateToHome}
                    className="bg-[#F8F9FD] rounded-xl p-4 cursor-pointer hover:shadow-md transition-all group relative flex flex-col justify-between"
                  >
                    <span className="absolute top-3 right-3 bg-[#c6e8de] text-[#00c767] text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">
                      CHAUD
                    </span>
                    <div className="h-28 flex items-center justify-center my-2">
                      <img
                        src="https://eu.store.igarden.ai/cdn/shop/files/adbd64503fcd5abaff264259d2f44cad.png?v=1781781288&width=520"
                        alt="Robot M1-AI"
                        className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-[14px] text-gray-900">Robot série M1-Al</h4>
                      <p className="text-[#0071E3] font-bold text-[12px] mt-0.5">Prime</p>
                      <p className="text-[11px] text-gray-500 mt-1">Bionic AI Dual-Vision</p>
                    </div>
                  </div>

                  {/* K Series */}
                  <div
                    onClick={onNavigateToHome}
                    className="bg-[#F8F9FD] rounded-xl p-4 cursor-pointer hover:shadow-md transition-all group relative flex flex-col justify-between"
                  >
                    <span className="absolute top-3 right-3 bg-[#e1f7e8] text-[#00a65a] text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">
                      NOUVEAU
                    </span>
                    <div className="h-28 flex items-center justify-center my-2">
                      <img
                        src="https://eu.store.igarden.ai/cdn/shop/files/65D8A0F6-EF9A-45A5-BCFE-B51F285C2A572_4.png?v=1782899669&width=520"
                        alt="Robot Série K"
                        className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-[14px] text-gray-900">Robot série K</h4>
                      <p className="text-[#0071E3] font-bold text-[12px] mt-0.5">Essentiel</p>
                      <p className="text-[11px] text-gray-500 mt-1">Cordless Cleaning</p>
                    </div>
                  </div>

                  {/* KN Series */}
                  <div
                    onClick={onNavigateToHome}
                    className="bg-[#F8F9FD] rounded-xl p-4 cursor-pointer hover:shadow-md transition-all group relative flex flex-col justify-between"
                  >
                    <div className="h-28 flex items-center justify-center my-2">
                      <img
                        src="https://eu.store.igarden.ai/cdn/shop/files/lQLPJx05WhemDjHNE4jNE4iw0Jd3Jfxte7MJ6RxRqHqwAA_5000_5000_1.png?v=1779694578&width=520"
                        alt="Robot Série KN"
                        className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-[14px] text-gray-900">Robot série KN</h4>
                      <p className="text-[#0071E3] font-bold text-[12px] mt-0.5">Basic</p>
                      <p className="text-[11px] text-gray-500 mt-1">4x Scrubbing</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Tondeuse à gazon Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMegaMenu('lawn-mower')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <button
              onClick={onNavigateToHome}
              className={`flex items-center gap-1 text-[15px] xl:text-[16px] font-semibold transition-colors py-3 cursor-pointer bg-transparent border-none ${
                activeMegaMenu === 'lawn-mower' ? 'text-[#0071E3]' : 'text-gray-900 hover:text-[#0071E3]'
              }`}
            >
              <span>Tondeuse à gazon</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === 'lawn-mower' ? 'rotate-180' : ''}`} />
            </button>

            {activeMegaMenu === 'lawn-mower' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[420px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div
                  onClick={onNavigateToHome}
                  className="bg-[#F8F9FD] rounded-xl p-4 cursor-pointer hover:shadow-md transition-all group relative flex flex-col justify-between"
                >
                  <span className="absolute top-3 right-3 bg-[#c6e8de] text-[#00c767] text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">
                    NOUVEAU
                  </span>
                  <div className="h-32 flex items-center justify-center my-2">
                    <img
                      src="https://eu.store.igarden.ai/cdn/shop/files/3_adb7c2f2-cd53-4877-933f-b849c33c206b.png?v=1776334481&width=520"
                      alt="Tondeuse R Series"
                      className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-[15px] text-gray-900">Robot tondeuse série R</h4>
                    <p className="text-[#0071E3] font-bold text-[13px] mt-0.5">Essentiel</p>
                    <p className="text-[11px] text-gray-500 mt-1">NetRTK + Vision stéréo • Jusqu'à 1 500 m²</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Aide-moi à choisir */}
          <button
            onClick={onNavigateToProduct}
            className="text-[15px] xl:text-[16px] font-semibold text-gray-900 hover:text-[#0071E3] transition-colors py-3 cursor-pointer bg-transparent border-none"
          >
            Aide-moi à choisir
          </button>

          {/* Explorer Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMegaMenu('explore')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <button
              className={`flex items-center gap-1 text-[15px] xl:text-[16px] font-semibold transition-colors py-3 cursor-pointer bg-transparent border-none ${
                activeMegaMenu === 'explore' ? 'text-[#0071E3]' : 'text-gray-900 hover:text-[#0071E3]'
              }`}
            >
              <span>Explorer</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === 'explore' ? 'rotate-180' : ''}`} />
            </button>

            {activeMegaMenu === 'explore' && (
              <div className="absolute top-full right-0 w-[680px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200 grid grid-cols-3 gap-8">
                <div>
                  <h4 className="text-[13px] font-bold uppercase tracking-wider text-gray-400 mb-4">Soutien</h4>
                  <ul className="space-y-2.5 text-[15px] font-medium text-gray-800">
                    <li><button onClick={onOpenTracking} className="hover:text-[#0071E3] transition-colors text-left bg-transparent border-none p-0 cursor-pointer">Suivi des commandes</button></li>
                    <li><a href="https://www.igarden.ai/support/" target="_blank" rel="noreferrer" className="hover:text-[#0071E3] transition-colors block">Support technique</a></li>
                    <li><button onClick={onOpenAccount} className="hover:text-[#0071E3] transition-colors text-left bg-transparent border-none p-0 cursor-pointer">Contactez-nous</button></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[13px] font-bold uppercase tracking-wider text-gray-400 mb-4">Politique</h4>
                  <ul className="space-y-2.5 text-[15px] font-medium text-gray-800">
                    <li><a href="https://eu.store.igarden.ai/fr/pages/retour-et-remboursements" target="_blank" rel="noreferrer" className="hover:text-[#0071E3] transition-colors block">Retours & Remboursements</a></li>
                    <li><a href="https://eu.store.igarden.ai/fr/pages/politique-de-garantie" target="_blank" rel="noreferrer" className="hover:text-[#0071E3] transition-colors block">Garantie 2 ans+</a></li>
                    <li><a href="https://eu.store.igarden.ai/fr/pages/politique-dexpedition" target="_blank" rel="noreferrer" className="hover:text-[#0071E3] transition-colors block">Livraison Colissimo</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[13px] font-bold uppercase tracking-wider text-gray-400 mb-4">Explorer</h4>
                  <ul className="space-y-2.5 text-[15px] font-medium text-gray-800">
                    <li><a href="https://eu.store.igarden.ai/fr/blogs/news" target="_blank" rel="noreferrer" className="hover:text-[#0071E3] transition-colors block">Blog & Guides</a></li>
                    <li><a href="https://eu.store.igarden.ai/fr/pages/filiale" target="_blank" rel="noreferrer" className="hover:text-[#0071E3] transition-colors block">Programme Partenaire</a></li>
                    <li><a href="https://eu.store.igarden.ai/fr/pages/a-propos-de-nous" target="_blank" rel="noreferrer" className="hover:text-[#0071E3] transition-colors block">À propos d'iGarden</a></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right Utility Icons */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Country Switcher Globe */}
          <button
            onClick={onOpenCountryDialog}
            className="p-2 text-gray-700 hover:text-black transition-colors rounded-sm hover:bg-gray-100 cursor-pointer"
            aria-label="Changer de pays ou langue"
          >
            <Globe className="w-5 h-5" />
          </button>

          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            className="p-2 text-gray-700 hover:text-black transition-colors rounded-sm hover:bg-gray-100 cursor-pointer"
            aria-label="Rechercher"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Customer Account Button */}
          <button
            onClick={onOpenAccount}
            className="p-2 text-gray-700 hover:text-black transition-colors rounded-sm hover:bg-gray-100 cursor-pointer"
            aria-label="Mon Compte"
          >
            <User className="w-5 h-5" />
          </button>

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            className="relative p-2 text-gray-700 hover:text-black transition-colors rounded-sm hover:bg-gray-100 cursor-pointer"
            aria-label="Panier"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#0071E3] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[64px] bottom-0 bg-white z-50 overflow-y-auto p-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
          <div className="divide-y divide-gray-100">
            {/* Soldes */}
            <div className="py-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToProduct?.();
                }}
                className="flex items-center gap-2 text-[16px] font-bold text-gray-900 w-full text-left bg-transparent border-none p-0 cursor-pointer"
              >
                <img
                  src="https://eu.store.igarden.ai/cdn/shop/files/sale_gift.png?v=1785742034&width=80"
                  alt=""
                  className="w-5 h-5 object-contain"
                />
                <span>Soldes de rentrée</span>
              </button>
            </div>

            {/* Jet de natation */}
            <div className="py-3">
              <button
                onClick={() => toggleMobileSection('swim')}
                className="flex items-center justify-between w-full text-[16px] font-bold text-gray-900 bg-transparent border-none p-0 cursor-pointer"
              >
                <span>Jet de natation</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpenSection === 'swim' ? 'rotate-180' : ''}`} />
              </button>
              {mobileOpenSection === 'swim' && (
                <div className="mt-3 pl-2 space-y-3">
                  <div
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigateToProduct?.();
                    }}
                    className="p-3 bg-[#F8F9FD] rounded-sm flex items-center gap-3 cursor-pointer"
                  >
                    <img
                      src="https://eu.store.igarden.ai/cdn/shop/files/1200_x_1200_1_549cfcd1-014d-4f4b-a0b7-589f37292f31.png?v=1776675064&width=520"
                      alt=""
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <p className="font-bold text-[14px] text-gray-900">iGarden Swim Jet Série X</p>
                      <p className="text-[12px] text-[#0071E3] font-semibold">209,00 € (Offre -50%)</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Nettoyeur de piscine */}
            <div className="py-3">
              <button
                onClick={() => toggleMobileSection('pool')}
                className="flex items-center justify-between w-full text-[16px] font-bold text-gray-900 bg-transparent border-none p-0 cursor-pointer"
              >
                <span>Nettoyeur de piscine</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpenSection === 'pool' ? 'rotate-180' : ''}`} />
              </button>
              {mobileOpenSection === 'pool' && (
                <div className="mt-3 pl-2 space-y-2.5">
                  <div
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigateToHome?.();
                    }}
                    className="p-2.5 bg-[#F8F9FD] rounded-sm flex items-center gap-3 cursor-pointer"
                  >
                    <img src="https://eu.store.igarden.ai/cdn/shop/files/adbd64503fcd5abaff264259d2f44cad.png?v=1781781288&width=520" alt="" className="w-10 h-10 object-contain" />
                    <div>
                      <p className="font-bold text-[13px]">Robot M1-AI</p>
                      <p className="text-[11px] text-gray-500">1 199,00 €</p>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigateToHome?.();
                    }}
                    className="p-2.5 bg-[#F8F9FD] rounded-sm flex items-center gap-3 cursor-pointer"
                  >
                    <img src="https://eu.store.igarden.ai/cdn/shop/files/65D8A0F6-EF9A-45A5-BCFE-B51F285C2A572_4.png?v=1782899669&width=520" alt="" className="w-10 h-10 object-contain" />
                    <div>
                      <p className="font-bold text-[13px]">Robot Série K</p>
                      <p className="text-[11px] text-gray-500">799,00 €</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Tondeuse */}
            <div className="py-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToHome?.();
                }}
                className="w-full text-left font-bold text-[16px] text-gray-900 bg-transparent border-none p-0 cursor-pointer"
              >
                Tondeuse à gazon
              </button>
            </div>

            {/* Suivi & Compte */}
            <div className="py-3 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTracking();
                }}
                className="block w-full text-left font-semibold text-[15px] text-[#0071E3] bg-transparent border-none p-0 cursor-pointer"
              >
                📦 Suivre mon colis
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAccount();
                }}
                className="block w-full text-left font-semibold text-[15px] text-gray-700 bg-transparent border-none p-0 cursor-pointer"
              >
                👤 Mon compte client
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
