import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, Check, Star, ArrowRight, Truck, ShieldCheck, RotateCcw, Headphones, Info, Sparkles, Zap, Lock, Eye, Clock } from 'lucide-react';
import { ProductVariant } from '../types';
import { PRODUCT_VARIANTS, CHECKOUT_URL } from '../data';
import { redirectToCheckout } from '../utils/checkout';
import { trackTikTokViewContent, trackTikTokInitiateCheckout } from '../utils/tiktokPixel';

interface ProductSectionProps {
  selectedVariant: ProductVariant;
  onSelectVariant: (variant: ProductVariant) => void;
  onAddToCart: (variant: ProductVariant, quantity: number, selectedAccessories: any[]) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  selectedVariant,
  onSelectVariant,
  onAddToCart
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'shipping' | 'warranty'>('desc');
  const [viewersCount] = useState(42);

  // TikTok Pixel: ViewContent tracking when product details are viewed
  useEffect(() => {
    trackTikTokViewContent({
      id: selectedVariant.id,
      name: selectedVariant.name,
      price: selectedVariant.price,
      quantity: 1,
      currency: 'EUR'
    });
  }, [selectedVariant.id]);

  // Reset image index when variant changes if out of bounds
  useEffect(() => {
    if (currentImageIndex >= selectedVariant.images.length) {
      setCurrentImageIndex(0);
    }
  }, [selectedVariant]);

  // Countdown timer for Flash Sale
  const [timeLeft, setTimeLeft] = useState({ hours: 7, minutes: 34, seconds: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? selectedVariant.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === selectedVariant.images.length - 1 ? 0 : prev + 1));
  };

  const handleDirectCheckout = () => {
    let targetUrl = selectedVariant.checkoutUrl || CHECKOUT_URL;
    if (quantity > 1) {
      if (targetUrl.includes('items[][quantity]=')) {
        targetUrl = targetUrl.replace(/items\[\]\[quantity\]=\d+/, `items[][quantity]=${quantity}`);
      } else if (/(\/cart\/\d+:)\d+/.test(targetUrl)) {
        targetUrl = targetUrl.replace(/(\/cart\/\d+:)\d+/, `$1${quantity}`);
      }
    }
    trackTikTokInitiateCheckout({
      id: selectedVariant.id,
      name: selectedVariant.name,
      price: selectedVariant.price,
      quantity: quantity,
      currency: 'EUR'
    });
    redirectToCheckout(targetUrl);
  };

  const handleVariantSelect = (variant: ProductVariant) => {
    onSelectVariant(variant);
    setCurrentImageIndex(0);
  };

  const pad = (n: number) => n.toString().padStart(2, '0');
  const discountPercent = Math.round(((selectedVariant.originalPrice - selectedVariant.price) / selectedVariant.originalPrice) * 100);
  const klarnaInstallment = (selectedVariant.price / 3).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <section id="MainContent" className="py-6 sm:py-10 max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12">
      {/* Breadcrumb */}
      <div className="mb-4 text-[13px] text-gray-500 flex items-center gap-2">
        <a href="#MainContent" className="hover:text-gray-900 transition-colors">Startseite</a>
        <span>/</span>
        <a href="#MainContent" className="hover:text-gray-900 transition-colors">Gegenstromanlagen</a>
        <span>/</span>
        <span className="text-gray-900 font-medium">{selectedVariant.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">
        {/* Left Column: Image Gallery */}
        <div className="w-full lg:w-1/2 lg:max-w-[680px] lg:sticky lg:top-[96px]">
          {/* Main preview */}
          <div className="relative w-full aspect-square bg-[#F5F6F8] rounded-sm overflow-hidden group shadow-xs border border-gray-200">
            <img
              src={selectedVariant.images[currentImageIndex] || selectedVariant.images[0]}
              alt={selectedVariant.name}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Live badge */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-sm text-[11px] sm:text-[12px] font-semibold text-gray-800 shadow-xs border border-gray-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Auf Lager — Versandfertig in 24 Std.</span>
            </div>

            {/* Discount tag badge on image */}
            <div className="absolute top-3 right-3 bg-red-600 text-white font-extrabold text-[11px] sm:text-[12px] tracking-wide px-2.5 py-1 rounded-sm shadow-xs">
              -{discountPercent}% RABATT
            </div>

            {/* Slider arrows */}
            <button
              type="button"
              onClick={handlePrevImage}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNextImage}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
              aria-label="Nächstes Bild"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Image counter */}
            <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-2 py-0.5 rounded-sm text-[11px] font-medium">
              {currentImageIndex + 1} / {selectedVariant.images.length}
            </div>
          </div>

          {/* Thumbnails Row */}
          <div className="mt-3 flex gap-2 overflow-x-auto no-scrollbar py-1">
            {selectedVariant.images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-[60px] sm:w-[72px] aspect-square rounded-sm overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                  currentImageIndex === idx
                    ? 'border-[#0071E3] shadow-xs'
                    : 'border-gray-200 hover:border-gray-400 opacity-70 hover:opacity-100'
                }`}
                aria-label={`Bild ${idx + 1} anzeigen`}
              >
                <img src={img} alt={`Vorschau ${idx + 1}`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Product Details & Purchase Form */}
        <div className="w-full lg:w-1/2 space-y-4">
          {/* Brand & SKU Header */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-[12px] sm:text-[13px] font-bold text-[#0071E3] tracking-wider uppercase">
              Offizieller iGarden Store Deutschland
            </span>
            <span className="text-[11px] sm:text-[12px] text-gray-500 font-mono">
              SKU: {selectedVariant.sku}
            </span>
          </div>

          {/* Product Title */}
          <h1 className="text-[24px] sm:text-[32px] font-black text-gray-950 leading-tight font-['Figtree'] break-words">
            {selectedVariant.name}
          </h1>

          {/* Subtitle */}
          <p className="text-[13px] sm:text-[15px] text-gray-600 font-medium leading-relaxed">
            {selectedVariant.subtitle}
          </p>

          {/* Rating & Live viewing indicator */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="flex text-[#00b67a]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#00b67a]" />
                ))}
              </div>
              <span className="text-[13px] font-extrabold text-gray-900">4.8 / 5</span>
              <a href="#customer-reviews" className="text-[13px] text-gray-500 hover:text-[#0071E3] underline underline-offset-2">
                (128 verifizierte Bewertungen)
              </a>
            </div>
            <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] text-gray-700 font-medium bg-amber-50 px-2.5 py-1 rounded-sm border border-amber-200/60 w-fit">
              <Eye className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span><strong>{viewersCount} Personen</strong> sehen sich dieses Angebot gerade an</span>
            </div>
          </div>

          {/* Flash Sale Banner & Countdown */}
          <div className="p-3 rounded-sm bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white shadow-xs flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 font-bold text-[12px] sm:text-[13px] text-center sm:text-left">
              <span>⚡</span>
              <span>FLASH-SALE: SPAREN SIE {selectedVariant.discountAmount.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €</span>
            </div>
            <div className="flex items-center gap-1 text-[12px] font-mono">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span className="font-bold text-[11px]">Endet in:</span>
              <span className="bg-black/30 px-1 py-0.5 rounded-xs font-bold">{pad(timeLeft.hours)}h</span>:
              <span className="bg-black/30 px-1 py-0.5 rounded-xs font-bold">{pad(timeLeft.minutes)}m</span>:
              <span className="bg-black/30 px-1 py-0.5 rounded-xs font-bold">{pad(timeLeft.seconds)}s</span>
            </div>
          </div>

          {/* Price Block */}
          <div className="p-4 sm:p-5 rounded-sm bg-[#F8FAFC] border border-slate-200 space-y-3">
            <div className="flex flex-wrap items-baseline gap-2.5">
              <span className="text-[30px] sm:text-[40px] font-black text-gray-950 tracking-tight leading-none">
                {selectedVariant.price.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €
              </span>
              <span className="text-[17px] sm:text-[20px] font-medium text-gray-400 line-through">
                {selectedVariant.originalPrice.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €
              </span>
              <span className="px-2.5 py-0.5 rounded-sm bg-emerald-600 text-white text-[12px] font-bold shadow-xs">
                -{discountPercent}% (Sie sparen {selectedVariant.discountAmount.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €)
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-[12px] sm:text-[13px] text-gray-700">
              <span className="flex items-center gap-1 font-semibold text-emerald-700">
                <Check className="w-3.5 h-3.5" /> Inkl. MwSt.
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-semibold text-emerald-700">
                <Truck className="w-3.5 h-3.5" /> Kostenloser DHL Express-Versand
              </span>
            </div>

            {/* Klarna / 3x payment info */}
            <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[12px] sm:text-[13px] text-gray-700">
              <span>Zahlen Sie in <strong>3x {klarnaInstallment} € zinsfrei</strong></span>
              <span className="px-2 py-0.5 rounded-sm bg-[#FFA8CD] text-[#0B051D] font-bold text-[11px]">Klarna</span>
            </div>
          </div>

          {/* Single Variant Presentation Card */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="block text-[13px] font-bold text-gray-900">
                Modellkonfiguration:
              </label>
              <span className="text-[11px] text-[#0071E3] font-bold">Standardmodell 1.000 W</span>
            </div>

            <div className="p-3.5 rounded-sm border-2 border-[#0071E3] bg-blue-50/40 shadow-xs flex items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-extrabold text-[14px] sm:text-[15px] text-gray-950">
                    {selectedVariant.shortName}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-sm">
                    {selectedVariant.price.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €
                  </span>
                  <span className="text-[11px] text-gray-400 line-through">
                    {selectedVariant.originalPrice.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €
                  </span>
                </div>
                <p className="text-[11px] sm:text-[12px] text-gray-600 mt-1">
                  {selectedVariant.specsSummary}
                </p>
              </div>

              <div className="w-5 h-5 rounded-full bg-[#0071E3] text-white flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Key specs highlight */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div className="p-2.5 bg-gray-50 rounded-sm border border-gray-100 text-center">
              <span className="text-[11px] text-gray-500 block">Leistung</span>
              <span className="text-[13px] font-bold text-gray-900">{selectedVariant.power}</span>
            </div>
            <div className="p-2.5 bg-gray-50 rounded-sm border border-gray-100 text-center">
              <span className="text-[11px] text-gray-500 block">Wasserströmung</span>
              <span className="text-[13px] font-bold text-gray-900">{selectedVariant.flowRate}</span>
            </div>
            <div className="p-2.5 bg-gray-50 rounded-sm border border-gray-100 text-center">
              <span className="text-[11px] text-gray-500 block">Max. Tempo</span>
              <span className="text-[13px] font-bold text-gray-900">{selectedVariant.speed}</span>
            </div>
            <div className="p-2.5 bg-gray-50 rounded-sm border border-gray-100 text-center">
              <span className="text-[11px] text-gray-500 block">Akkulaufzeit</span>
              <span className="text-[13px] font-bold text-gray-900">{selectedVariant.batteryLife}</span>
            </div>
          </div>

          {/* Quantity and Purchase Action Area */}
          <div className="space-y-3 pt-3 w-full max-w-full">
            {/* Main Action Row: Quantity + Direct Checkout */}
            <div className="flex items-center gap-2 sm:gap-3 w-full max-w-full">
              {/* Quantity selector */}
              <div className="h-12 sm:h-14 w-24 sm:w-32 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-between px-1.5 sm:px-2 shrink-0 shadow-xs">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-gray-700 hover:text-black hover:bg-white rounded-lg transition-colors font-bold text-[16px] sm:text-[18px] cursor-pointer"
                  aria-label="Menge verringern"
                >
                  -
                </button>
                <span className="text-[14px] sm:text-[15px] font-extrabold text-gray-900 select-none">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-gray-700 hover:text-black hover:bg-white rounded-lg transition-colors font-bold text-[16px] sm:text-[18px] cursor-pointer"
                  aria-label="Menge erhöhen"
                >
                  +
                </button>
              </div>

              {/* Direct Checkout Buy Button (Primary Action) */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleDirectCheckout();
                }}
                className="flex-1 min-w-0 h-12 sm:h-14 px-2 sm:px-6 rounded-xl bg-[#0071E3] hover:bg-[#0062c4] active:bg-[#004f9f] active:scale-[0.99] text-white font-extrabold text-[12px] sm:text-[15px] tracking-wide shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer uppercase text-center overflow-hidden"
              >
                <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="truncate">JETZT BESTELLEN • {(selectedVariant.price * quantity).toLocaleString('de-DE', { minimumFractionDigits: 2 })} €</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 hidden sm:inline-block" />
              </button>
            </div>

            {/* Add to Cart secondary button */}
            <button
              type="button"
              onClick={() => onAddToCart(selectedVariant, quantity, [])}
              className="w-full h-12 sm:h-13 px-4 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 active:bg-gray-100 active:scale-[0.99] text-gray-900 font-bold text-[13px] sm:text-[15px] transition-all cursor-pointer flex items-center justify-center text-center uppercase tracking-wider shadow-2xs"
            >
              In den Warenkorb
            </button>

            <p className="text-center text-[12px] text-gray-500 flex items-center justify-center gap-1.5 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>SSL-verschlüsselte Zahlung • 30 Tage Geld-zurück-Garantie</span>
            </p>
          </div>

          {/* Reassurance Grid */}
          <div className="bg-[#F8FBFF] p-3.5 sm:p-4 rounded-sm border border-blue-100 space-y-3">
            <div className="grid grid-cols-2 gap-2.5 text-[12px] sm:text-[13px] font-semibold text-gray-800">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#0071E3] shrink-0" />
                <span>Kostenloser DHL Express-Versand</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0071E3] shrink-0" />
                <span>2 Jahre Herstellergarantie</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-[#0071E3] shrink-0" />
                <span>30 Tage kostenlose Rückgabe</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-[#0071E3] shrink-0" />
                <span>Deutscher Kundenservice 7 Tage/Woche</span>
              </div>
            </div>

            {/* Payment badges */}
            <div className="pt-2 border-t border-blue-100 flex flex-wrap items-center justify-between gap-2">
              <span className="text-[11px] font-bold text-gray-500">Akzeptierte Zahlungsmethoden:</span>
              <div className="flex flex-wrap items-center gap-1.5">
                <img className="h-3.5 sm:h-4 object-contain" src="https://eu.store.igarden.ai/cdn/shop/files/visa_48x48.svg?v=1772161676" alt="Visa" loading="lazy" decoding="async" />
                <img className="h-3.5 sm:h-4 object-contain" src="https://eu.store.igarden.ai/cdn/shop/files/MasterCard_48x48.svg?v=1772161120" alt="MasterCard" loading="lazy" decoding="async" />
                <img className="h-3.5 sm:h-4 object-contain" src="https://eu.store.igarden.ai/cdn/shop/files/paypal_48x48.svg?v=1772161193" alt="PayPal" loading="lazy" decoding="async" />
                <img className="h-3.5 sm:h-4 object-contain" src="https://eu.store.igarden.ai/cdn/shop/files/applepay_48x48.svg?v=1772160097" alt="Apple Pay" loading="lazy" decoding="async" />
                <img className="h-3.5 sm:h-4 object-contain" src="https://eu.store.igarden.ai/cdn/shop/files/google_pay_c8e18dbb-5c0f-49ab-b000-1c88465e36c9_48x48.svg?v=1776049893" alt="Google Pay" loading="lazy" decoding="async" />
                <img className="h-3.5 sm:h-4 object-contain" src="https://eu.store.igarden.ai/cdn/shop/files/klarna_48x48.svg?v=1772160095" alt="Klarna" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>

          {/* Interactive Information Tabs / Accordion */}
          <div className="rounded-sm border border-gray-200 overflow-hidden bg-white">
            <div className="grid grid-cols-4 border-b border-gray-200 bg-gray-50">
              <button
                type="button"
                onClick={() => setActiveTab('desc')}
                className={`py-3 px-1 text-center text-[12px] sm:text-[13px] font-bold transition-colors cursor-pointer truncate ${
                  activeTab === 'desc'
                    ? 'bg-white text-[#0071E3] border-b-2 border-[#0071E3]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Beschreibung
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('specs')}
                className={`py-3 px-1 text-center text-[12px] sm:text-[13px] font-bold transition-colors cursor-pointer truncate ${
                  activeTab === 'specs'
                    ? 'bg-white text-[#0071E3] border-b-2 border-[#0071E3]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Spezifikationen
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('shipping')}
                className={`py-3 px-1 text-center text-[12px] sm:text-[13px] font-bold transition-colors cursor-pointer truncate ${
                  activeTab === 'shipping'
                    ? 'bg-white text-[#0071E3] border-b-2 border-[#0071E3]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Versand
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('warranty')}
                className={`py-3 px-1 text-center text-[12px] sm:text-[13px] font-bold transition-colors cursor-pointer truncate ${
                  activeTab === 'warranty'
                    ? 'bg-white text-[#0071E3] border-b-2 border-[#0071E3]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Garantie
              </button>
            </div>

            <div className="p-4 sm:p-5 text-[14px] text-gray-700 leading-relaxed">
              {activeTab === 'desc' && (
                <div className="space-y-2.5">
                  <p className="font-medium text-gray-900">
                    Verwandeln Sie jeden Pool in eine vollwertige Schwimmbahn ohne aufwendige Installations- oder Verrohrungsarbeiten. Eine universelle, hochflexible Lösung für Ihren heimischen Pool.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0071E3] shrink-0 mt-0.5" />
                      <span><strong>1.000 W Spitzenleistung:</strong> Erleben Sie dank des bürstenlosen Hochleistungsmotors eine kraftvolle, laminare Gegenströmung für jedes Trainingsniveau.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0071E3] shrink-0 mt-0.5" />
                      <span><strong>6 bis 10 Stunden Akkulaufzeit:</strong> Ausgedehnte Schwimmeinheiten ohne ständiges Nachladen dank modernster Lithium-Ionen-Zelltechnologie.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0071E3] shrink-0 mt-0.5" />
                      <span><strong>Universell für alle Pooltypen:</strong> Schnelle und materialschonende Klemmbefestigung ohne Bohren an Aufstellpools, Rechteckbecken, Rundbecken und Einbaubecken.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0071E3] shrink-0 mt-0.5" />
                      <span><strong>Höchste Sicherheit & Komfort:</strong> Schutzkleinspannung im Wasser, vollständige IP68-Wasserdichtigkeit, kabellose Fernbedienung und leichtgängige Transportrollen.</span>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === 'specs' && (
                <div className="space-y-2">
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-gray-500">Leistung</span>
                    <span className="font-bold text-gray-900">1.000 W Spitzenleistung</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-gray-500">Zertifizierte Laufzeit</span>
                    <span className="font-bold text-gray-900">6 bis 10 Stunden Akkulaufzeit</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-gray-500">Pool-Kompatibilität</span>
                    <span className="font-bold text-gray-900">Passend für alle gängigen Poolarten</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-gray-500">Strömungsgeschwindigkeit</span>
                    <span className="font-bold text-gray-900">Bis zu 1,5 m/s (stufenlos regulierbar per Fernbedienung)</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-gray-500">Wasserdichtigkeit & Sicherheit</span>
                    <span className="font-bold text-gray-900">Vollständig tauchfähig nach IP68-Standard</span>
                  </div>
                </div>
              )}

              {activeTab === 'shipping' && (
                <div className="space-y-2">
                  <p><strong>Schneller Versand:</strong> Ihre Bestellung wird innerhalb von 24 Werktagsstunden sorgfältig verpackt und übergeben.</p>
                  <p><strong>Logistikpartner:</strong> Zuverlässiger, versicherter DHL Express-Versand mit Sendungsverfolgung und persönlicher Übergabe.</p>
                  <p><strong>Lieferzeit:</strong> 2 bis 4 Werktage nach Deutschland, Österreich und in die Schweiz.</p>
                </div>
              )}

              {activeTab === 'warranty' && (
                <div className="space-y-2">
                  <p><strong>2 Jahre Herstellergarantie:</strong> Vollständige Übernahme von Ersatzteilen und Service durch den offiziellen iGarden Kundendienst.</p>
                  <p><strong>30 Tage Testphase:</strong> Testen Sie das Gerät risikofrei in Ihrem eigenen Pool. Bei Nichtgefallen erhalten Sie den vollen Betrag erstattet.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
