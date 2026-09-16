import React, { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X, ChevronDown, Globe } from 'lucide-react';
import { CartItem } from '../types';
import { useI18n } from '../i18n/I18nContext';

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
  const { currentLanguage, currentMarket, t, formatPrice, swimJetPrice } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [activeSwimJetTab, setActiveSwimJetTab] = useState<'products' | 'accessories'>('products');

  // Mobile accordion states
  const [mobileOpenSection, setMobileOpenSection] = useState<string | null>(null);

  const toggleMobileSection = (section: string) => {
    setMobileOpenSection(prev => (prev === section ? null : section));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const formattedSwimJetPrice = formatPrice(swimJetPrice.price);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 transition-shadow" dir={currentLanguage.direction}>
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 flex items-center justify-between h-[64px] sm:h-[76px]">
        {/* Mobile Hamburger Button */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 -ml-1.5 text-gray-900 hover:text-[#0071E3] transition-colors focus:outline-none cursor-pointer bg-transparent border-none"
            aria-label={t.header.menu}
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
            alt="iGarden Store"
            className="h-7 sm:h-9 w-auto object-contain"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
          {/* Back to school / Season deals */}
          <button
            onClick={onNavigateToProduct}
            className="flex items-center gap-1.5 text-[15px] xl:text-[16px] font-semibold text-gray-900 hover:text-[#0071E3] transition-colors py-3 cursor-pointer bg-transparent border-none"
          >
            <img
              src="https://eu.store.igarden.ai/cdn/shop/files/sale_gift.png?v=1785742034&width=80"
              alt=""
              className="w-5 h-5 object-contain"
            />
            <span>{t.header.backToSchoolSale}</span>
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
              <span>{t.header.swimJet}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === 'swim-jet' ? 'rotate-180' : ''}`} />
            </button>

            {activeMegaMenu === 'swim-jet' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[840px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="grid grid-cols-4 gap-6">
                  {/* Left Tabs */}
                  <div className="col-span-1 border-r border-gray-100 pr-4 space-y-2">
                    <button
                      onClick={() => setActiveSwimJetTab('products')}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-[15px] font-bold transition-colors cursor-pointer border-none ${
                        activeSwimJetTab === 'products' ? 'bg-[#F8F9FD] text-[#0071E3]' : 'bg-transparent text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {currentLanguage.id === 'ar' ? 'المنتجات' : 'Products'}
                    </button>
                    <button
                      onClick={() => setActiveSwimJetTab('accessories')}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-[15px] font-bold transition-colors cursor-pointer border-none ${
                        activeSwimJetTab === 'accessories' ? 'bg-[#F8F9FD] text-[#0071E3]' : 'bg-transparent text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {t.header.accessories}
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
                            {currentLanguage.id === 'ar' ? 'جديد' : 'NEW'}
                          </span>
                          <div className="h-32 flex items-center justify-center my-2">
                            <img
                              src="https://eu.store.igarden.ai/cdn/shop/files/1200_x_1200_1_549cfcd1-014d-4f4b-a0b7-589f37292f31.png?v=1776675064&width=520"
                              alt="iGarden Swim Jet Série X"
                              className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-[14px] text-gray-900 text-center">{t.hero.title}</h4>
                            <p className="text-[#0071E3] font-bold text-[13px] text-center mt-0.5">{formattedSwimJetPrice}</p>
                            <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-600 mt-2 flex-wrap">
                              <span>1,000 W</span>
                              <span>•</span>
                              <span>6–10h</span>
                              <span>•</span>
                              <span>Universal Fit</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 gap-3">
                        <div
                          onClick={onNavigateToProduct}
                          className="bg-[#F8F9FD] rounded-xl p-3 flex items-center gap-3 hover:shadow-xs transition-all cursor-pointer"
                        >
                          <img
                            src="https://eu.store.igarden.ai/cdn/shop/files/2_441a6884-e0f6-4ca1-86eb-018e1a3fd6c1.png?v=1784095673&width=820"
                            alt="Storage Bag"
                            className="w-14 h-14 object-contain"
                          />
                          <p className="font-bold text-[13px] text-gray-800 line-clamp-2">iGarden Series X Storage Bag</p>
                        </div>
                        <div
                          onClick={onNavigateToProduct}
                          className="bg-[#F8F9FD] rounded-xl p-3 flex items-center gap-3 hover:shadow-xs transition-all cursor-pointer"
                        >
                          <img
                            src="https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237567.png?v=1785465169&width=820"
                            alt="Power Box"
                            className="w-14 h-14 object-contain"
                          />
                          <p className="font-bold text-[13px] text-gray-800 line-clamp-2">iGarden Swim Jet Power Box</p>
                        </div>
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
              <span>{t.header.poolCleaner}</span>
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
                      HOT
                    </span>
                    <div className="h-28 flex items-center justify-center my-2">
                      <img
                        src="https://eu.store.igarden.ai/cdn/shop/files/adbd64503fcd5abaff264259d2f44cad.png?v=1781781288&width=520"
                        alt="Robot M1-AI"
                        className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-[14px] text-gray-900">Robot M1-AI</h4>
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
                      NEW
                    </span>
                    <div className="h-28 flex items-center justify-center my-2">
                      <img
                        src="https://eu.store.igarden.ai/cdn/shop/files/65D8A0F6-EF9A-45A5-BCFE-B51F285C2A572_4.png?v=1782899669&width=520"
                        alt="Robot Série K"
                        className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-[14px] text-gray-900">Robot Série K</h4>
                      <p className="text-[#0071E3] font-bold text-[12px] mt-0.5">Essential</p>
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
                      <h4 className="font-bold text-[14px] text-gray-900">Robot Série KN</h4>
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
              <span>{t.header.lawnMower}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === 'lawn-mower' ? 'rotate-180' : ''}`} />
            </button>

            {activeMegaMenu === 'lawn-mower' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[420px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div
                  onClick={onNavigateToHome}
                  className="bg-[#F8F9FD] rounded-xl p-4 cursor-pointer hover:shadow-md transition-all group relative flex flex-col justify-between"
                >
                  <span className="absolute top-3 right-3 bg-[#c6e8de] text-[#00c767] text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">
                    NEW
                  </span>
                  <div className="h-32 flex items-center justify-center my-2">
                    <img
                      src="https://eu.store.igarden.ai/cdn/shop/files/3_adb7c2f2-cd53-4877-933f-b849c33c206b.png?v=1776334481&width=520"
                      alt="Tondeuse R Series"
                      className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-[15px] text-gray-900">Robotic Mower Series R</h4>
                    <p className="text-[#0071E3] font-bold text-[13px] mt-0.5">Essential</p>
                    <p className="text-[11px] text-gray-500 mt-1">NetRTK + Stereo Vision • Up to 1,500 m²</p>
                  </div>
                </div>
              </div>
            )}
          </div>

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
              <span>{t.footer.colExplore}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMegaMenu === 'explore' ? 'rotate-180' : ''}`} />
            </button>

            {activeMegaMenu === 'explore' && (
              <div className="absolute top-full right-0 w-[680px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200 grid grid-cols-3 gap-8">
                <div>
                  <h4 className="text-[13px] font-bold uppercase tracking-wider text-gray-400 mb-4">{t.footer.colSupport}</h4>
                  <ul className="space-y-2.5 text-[15px] font-medium text-gray-800">
                    <li><button onClick={onOpenTracking} className="hover:text-[#0071E3] transition-colors text-left bg-transparent border-none p-0 cursor-pointer">{t.header.trackOrder}</button></li>
                    <li><button onClick={onOpenAccount} className="hover:text-[#0071E3] transition-colors text-left bg-transparent border-none p-0 cursor-pointer">{t.footer.contactUs}</button></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[13px] font-bold uppercase tracking-wider text-gray-400 mb-4">iGarden Care</h4>
                  <ul className="space-y-2.5 text-[15px] font-medium text-gray-800">
                    <li><span className="text-gray-700">{t.trustBar.returns}</span></li>
                    <li><span className="text-gray-700">{t.trustBar.warranty}</span></li>
                    <li><span className="text-gray-700">{t.trustBar.fastShipping}</span></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[13px] font-bold uppercase tracking-wider text-gray-400 mb-4">{t.footer.colExplore}</h4>
                  <ul className="space-y-2.5 text-[15px] font-medium text-gray-800">
                    <li><button onClick={onNavigateToProduct} className="hover:text-[#0071E3] transition-colors text-left bg-transparent border-none p-0 cursor-pointer">{t.header.swimJet}</button></li>
                    <li><button onClick={onNavigateToHome} className="hover:text-[#0071E3] transition-colors text-left bg-transparent border-none p-0 cursor-pointer">{t.header.poolCleaner}</button></li>
                    <li><button onClick={onNavigateToHome} className="hover:text-[#0071E3] transition-colors text-left bg-transparent border-none p-0 cursor-pointer">{t.header.lawnMower}</button></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right Utility Icons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Country / Region Switcher Button */}
          <button
            onClick={onOpenCountryDialog}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-gray-700 hover:text-black transition-colors rounded-lg hover:bg-gray-100 cursor-pointer bg-transparent border border-gray-200 text-[12px] sm:text-[13px] font-medium"
            aria-label={t.common.regionAndLanguage}
          >
            <span className="text-[15px]">{currentMarket.flag}</span>
            <span className="hidden sm:inline font-medium">{currentLanguage.nativeName} · {currentMarket.currency}</span>
          </button>

          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            className="p-2 text-gray-700 hover:text-black transition-colors rounded-lg hover:bg-gray-100 cursor-pointer bg-transparent border-none"
            aria-label={t.header.searchPlaceholder}
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Customer Account Button */}
          <button
            onClick={onOpenAccount}
            className="p-2 text-gray-700 hover:text-black transition-colors rounded-lg hover:bg-gray-100 cursor-pointer bg-transparent border-none"
            aria-label={t.header.account}
          >
            <User className="w-5 h-5" />
          </button>

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            className="relative p-2 text-gray-700 hover:text-black transition-colors rounded-lg hover:bg-gray-100 cursor-pointer bg-transparent border-none"
            aria-label={t.header.cart}
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
            {/* Region / Language in mobile menu */}
            <div className="py-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCountryDialog();
                }}
                className="flex items-center justify-between w-full text-[15px] font-semibold text-gray-900 bg-transparent border-none p-0 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#0071E3]" />
                  <span>{t.common.regionAndLanguage}</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-600 text-[13px]">
                  <span>{currentMarket.flag}</span>
                  <span>{currentLanguage.nativeName} · {currentMarket.currency}</span>
                </div>
              </button>
            </div>

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
                <span>{t.header.backToSchoolSale}</span>
              </button>
            </div>

            {/* Jet de natation */}
            <div className="py-3">
              <button
                onClick={() => toggleMobileSection('swim')}
                className="flex items-center justify-between w-full text-[16px] font-bold text-gray-900 bg-transparent border-none p-0 cursor-pointer"
              >
                <span>{t.header.swimJet}</span>
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
                      <p className="font-bold text-[14px] text-gray-900">{t.hero.title}</p>
                      <p className="text-[12px] text-[#0071E3] font-semibold">{formattedSwimJetPrice}</p>
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
                <span>{t.header.poolCleaner}</span>
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
                      <p className="text-[11px] text-gray-500">Bionic Dual-Vision</p>
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
                {t.header.lawnMower}
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
                📦 {t.header.trackOrder}
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAccount();
                }}
                className="block w-full text-left font-semibold text-[15px] text-gray-700 bg-transparent border-none p-0 cursor-pointer"
              >
                👤 {t.header.account}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

