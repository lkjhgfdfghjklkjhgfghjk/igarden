import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check, Star, ArrowRight, Truck, ShieldCheck, RotateCcw, Headphones, Lock, Eye, Clock } from 'lucide-react';
import { ProductVariant } from '../types';
import { redirectToCheckout } from '../utils/checkout';
import { trackTikTokViewContent } from '../utils/tiktokPixel';
import { useI18n } from '../i18n/I18nContext';

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
  const { currentMarket, currentLanguage, formatPrice, swimJetPrice, t } = useI18n();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'shipping' | 'warranty'>('desc');
  const [viewersCount] = useState(42);

  // Track TikTok Pixel ViewContent once when product section is rendered
  useEffect(() => {
    trackTikTokViewContent();
  }, []);

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
    redirectToCheckout(swimJetPrice.checkoutUrl || selectedVariant.checkoutUrl, quantity);
  };

  const pad = (n: number) => n.toString().padStart(2, '0');
  const discountPercent = Math.round(((swimJetPrice.originalPrice - swimJetPrice.price) / swimJetPrice.originalPrice) * 100);
  const installmentAmount = formatPrice(swimJetPrice.price / 3);

  const formattedCurrentPrice = formatPrice(swimJetPrice.price);
  const formattedOriginalPrice = formatPrice(swimJetPrice.originalPrice);
  const formattedDiscountAmount = formatPrice(swimJetPrice.discountAmount);
  const formattedTotalDirect = formatPrice(swimJetPrice.price * quantity);

  return (
    <section id="MainContent" className="py-6 sm:py-10 max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12" dir={currentLanguage.direction}>
      {/* Breadcrumb */}
      <div className="mb-4 text-[13px] text-gray-500 flex items-center gap-2">
        <a href="#MainContent" className="hover:text-gray-900 transition-colors">{t.product.breadcrumbHome}</a>
        <span>/</span>
        <a href="#MainContent" className="hover:text-gray-900 transition-colors">{t.product.breadcrumbCategory}</a>
        <span>/</span>
        <span className="text-gray-900 font-medium">{t.hero.title}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">
        {/* Left Column: Image Gallery */}
        <div className="w-full lg:w-1/2 lg:max-w-[680px] lg:sticky lg:top-[96px]">
          {/* Main preview */}
          <div className="relative w-full aspect-square bg-[#F5F6F8] rounded-sm overflow-hidden group shadow-xs border border-gray-200">
            <img
              src={selectedVariant.images[currentImageIndex] || selectedVariant.images[0]}
              alt={t.hero.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Live badge */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-sm text-[11px] sm:text-[12px] font-semibold text-gray-800 shadow-xs border border-gray-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t.common.inStock}</span>
            </div>

            {/* Discount tag badge on image */}
            <div className="absolute top-3 right-3 bg-red-600 text-white font-extrabold text-[11px] sm:text-[12px] tracking-wide px-2.5 py-1 rounded-sm shadow-xs">
              -{discountPercent}% {t.common.off}
            </div>

            {/* Slider arrows */}
            <button
              onClick={handlePrevImage}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-sm bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-sm bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
              aria-label="Next image"
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
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-[60px] sm:w-[72px] aspect-square rounded-sm overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                  currentImageIndex === idx
                    ? 'border-[#0071E3] shadow-xs'
                    : 'border-gray-200 hover:border-gray-400 opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Product Details & Purchase Form */}
        <div className="w-full lg:w-1/2 space-y-4">
          {/* Brand & SKU Header */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-[12px] sm:text-[13px] font-bold text-[#0071E3] tracking-wider uppercase">
              iGarden Official Store • {currentMarket.name}
            </span>
            <span className="text-[11px] sm:text-[12px] text-gray-500 font-mono">
              SKU: {selectedVariant.sku}
            </span>
          </div>

          {/* Product Title */}
          <h1 className="text-[24px] sm:text-[32px] font-black text-gray-950 leading-tight break-words">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-[13px] sm:text-[15px] text-gray-600 font-medium leading-relaxed">
            {t.hero.desc}
          </p>

          {/* Rating & Live viewing indicator */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="flex text-[#00b67a]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#00b67a]" />
                ))}
              </div>
              <span className="text-[13px] font-extrabold text-gray-900">{t.common.rating}</span>
              <a href="#customer-reviews" className="text-[13px] text-gray-500 hover:text-[#0071E3] underline underline-offset-2">
                (128 {t.common.reviews})
              </a>
            </div>
            <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] text-gray-700 font-medium bg-amber-50 px-2.5 py-1 rounded-sm border border-amber-200/60 w-fit">
              <Eye className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span><strong>{viewersCount}</strong> {t.product.liveViewers}</span>
            </div>
          </div>

          {/* Flash Sale Banner & Countdown */}
          <div className="p-3 rounded-sm bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white shadow-xs flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 font-bold text-[12px] sm:text-[13px] text-center sm:text-left">
              <span>⚡</span>
              <span>{t.hero.flashSaleTitle.toUpperCase()} : {t.common.saveAmount.toUpperCase()} {formattedDiscountAmount}</span>
            </div>
            <div className="flex items-center gap-1 text-[12px] font-mono">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span className="font-bold text-[11px]">{t.product.flashSaleEnds} :</span>
              <span className="bg-black/30 px-1 py-0.5 rounded-xs font-bold">{pad(timeLeft.hours)}h</span>:
              <span className="bg-black/30 px-1 py-0.5 rounded-xs font-bold">{pad(timeLeft.minutes)}m</span>:
              <span className="bg-black/30 px-1 py-0.5 rounded-xs font-bold">{pad(timeLeft.seconds)}s</span>
            </div>
          </div>

          {/* Price Block */}
          <div className="p-4 sm:p-5 rounded-sm bg-[#F8FAFC] border border-slate-200 space-y-3">
            <div className="flex flex-wrap items-baseline gap-2.5">
              <span className="text-[30px] sm:text-[40px] font-black text-gray-950 tracking-tight leading-none">
                {formattedCurrentPrice}
              </span>
              <span className="text-[17px] sm:text-[20px] font-medium text-gray-400 line-through">
                {formattedOriginalPrice}
              </span>
              <span className="px-2.5 py-0.5 rounded-sm bg-emerald-600 text-white text-[12px] font-bold shadow-xs">
                -{discountPercent}% ({t.common.saveAmount} {formattedDiscountAmount})
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-[12px] sm:text-[13px] text-gray-700">
              <span className="flex items-center gap-1 font-semibold text-emerald-700">
                <Check className="w-3.5 h-3.5" /> {t.common.taxIncluded}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-semibold text-emerald-700">
                <Truck className="w-3.5 h-3.5" /> {t.common.freeShipping}
              </span>
            </div>

            {/* Installments info */}
            <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[12px] sm:text-[13px] text-gray-700">
              <span>{t.common.or3PaymentsOf} <strong>{installmentAmount}</strong></span>
              <span className="px-2 py-0.5 rounded-sm bg-[#FFA8CD] text-[#0B051D] font-bold text-[11px]">Installments</span>
            </div>
          </div>

          {/* Single Variant Presentation Card */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="block text-[13px] font-bold text-gray-900">
                {t.product.selectPowerVariant}
              </label>
              <span className="text-[11px] text-[#0071E3] font-bold">1,000 W Flagship Edition</span>
            </div>

            <div className="p-3.5 rounded-sm border-2 border-[#0071E3] bg-blue-50/40 shadow-xs flex items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-extrabold text-[14px] sm:text-[15px] text-gray-950">
                    {t.hero.title}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-sm">
                    {formattedCurrentPrice}
                  </span>
                  <span className="text-[11px] text-gray-400 line-through">
                    {formattedOriginalPrice}
                  </span>
                </div>
                <p className="text-[11px] sm:text-[12px] text-gray-600 mt-1">
                  1,000 W Brushless • 6–10h Runtime • Universally Compatible
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
              <span className="text-[11px] text-gray-500 block">{t.product.specsPower}</span>
              <span className="text-[13px] font-bold text-gray-900">1,000 W</span>
            </div>
            <div className="p-2.5 bg-gray-50 rounded-sm border border-gray-100 text-center">
              <span className="text-[11px] text-gray-500 block">{t.product.specsSpeed}</span>
              <span className="text-[13px] font-bold text-gray-900">1.5 m/s</span>
            </div>
            <div className="p-2.5 bg-gray-50 rounded-sm border border-gray-100 text-center">
              <span className="text-[11px] text-gray-500 block">{t.product.specsBattery}</span>
              <span className="text-[13px] font-bold text-gray-900">6–10 h</span>
            </div>
            <div className="p-2.5 bg-gray-50 rounded-sm border border-gray-100 text-center">
              <span className="text-[11px] text-gray-500 block">{t.product.specsFlow}</span>
              <span className="text-[13px] font-bold text-gray-900">Laminar</span>
            </div>
          </div>

          {/* Quantity and Purchase Action Area */}
          <div className="space-y-2.5 pt-2">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
              {/* Quantity selector */}
              <div className="flex items-center justify-between sm:justify-center border border-gray-300 rounded-sm bg-white h-12 px-3 sm:px-1 shrink-0">
                <span className="text-[12px] font-semibold text-gray-500 sm:hidden">{t.common.qty} :</span>
                <div className="flex items-center">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 text-gray-700 font-bold text-[18px] cursor-pointer rounded-sm bg-transparent border-none"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="w-10 text-center text-[15px] font-bold text-gray-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 text-gray-700 font-bold text-[18px] cursor-pointer rounded-sm bg-transparent border-none"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Direct Checkout Buy Button (Primary Action) */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleDirectCheckout();
                }}
                className="flex-1 h-12 px-4 rounded-sm bg-[#0071E3] hover:bg-blue-700 text-white font-extrabold text-[14px] sm:text-[15px] tracking-wide shadow-sm hover:shadow transition-colors flex items-center justify-center gap-2 cursor-pointer uppercase active:bg-blue-800 text-center border-none"
              >
                <Lock className="w-4 h-4 shrink-0" />
                <span className="truncate">{t.common.orderNow.toUpperCase()} • {formattedTotalDirect}</span>
                <ArrowRight className={`w-4 h-4 shrink-0 ${currentLanguage.direction === 'rtl' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Add to Cart secondary button */}
            <button
              onClick={() => {
                const dynamicVariant: ProductVariant = {
                  ...selectedVariant,
                  price: swimJetPrice.price,
                  originalPrice: swimJetPrice.originalPrice,
                  discountAmount: swimJetPrice.discountAmount,
                  checkoutUrl: swimJetPrice.checkoutUrl || selectedVariant.checkoutUrl,
                  name: t.hero.title
                };
                onAddToCart(dynamicVariant, quantity, []);
              }}
              className="w-full h-12 px-4 rounded-sm border-2 border-gray-900 bg-white hover:bg-gray-50 text-gray-900 font-bold text-[14px] sm:text-[15px] transition-colors cursor-pointer flex items-center justify-center text-center uppercase tracking-wide"
            >
              {t.common.addToCart}
            </button>

            <p className="text-center text-[11px] sm:text-[12px] text-gray-500 flex items-center justify-center gap-1.5 pt-0.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{t.common.secureCheckout} • {t.trustBar.returns}</span>
            </p>
          </div>

          {/* Reassurance Grid */}
          <div className="bg-[#F8FBFF] p-3.5 sm:p-4 rounded-sm border border-blue-100 space-y-3">
            <div className="grid grid-cols-2 gap-2.5 text-[12px] sm:text-[13px] font-semibold text-gray-800">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#0071E3] shrink-0" />
                <span>{t.common.freeShipping}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0071E3] shrink-0" />
                <span>{t.common.warranty2Years}</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-[#0071E3] shrink-0" />
                <span>{t.common.returns30Days}</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-[#0071E3] shrink-0" />
                <span>{t.footer.serviceHoursVal}</span>
              </div>
            </div>

            {/* Payment badges */}
            <div className="pt-2 border-t border-blue-100 flex flex-wrap items-center justify-between gap-2">
              <span className="text-[11px] font-bold text-gray-500">{t.trustBar.securePayment} :</span>
              <div className="flex flex-wrap items-center gap-1.5">
                <img className="h-3.5 sm:h-4 object-contain" src="https://eu.store.igarden.ai/cdn/shop/files/visa_48x48.svg?v=1772161676" alt="Visa" />
                <img className="h-3.5 sm:h-4 object-contain" src="https://eu.store.igarden.ai/cdn/shop/files/MasterCard_48x48.svg?v=1772161120" alt="MasterCard" />
                <img className="h-3.5 sm:h-4 object-contain" src="https://eu.store.igarden.ai/cdn/shop/files/paypal_48x48.svg?v=1772161193" alt="PayPal" />
                <img className="h-3.5 sm:h-4 object-contain" src="https://eu.store.igarden.ai/cdn/shop/files/applepay_48x48.svg?v=1772160097" alt="Apple Pay" />
                <img className="h-3.5 sm:h-4 object-contain" src="https://eu.store.igarden.ai/cdn/shop/files/google_pay_c8e18dbb-5c0f-49ab-b000-1c88465e36c9_48x48.svg?v=1776049893" alt="Google Pay" />
                <img className="h-3.5 sm:h-4 object-contain" src="https://eu.store.igarden.ai/cdn/shop/files/klarna_48x48.svg?v=1772160095" alt="Klarna" />
              </div>
            </div>
          </div>

          {/* Interactive Information Tabs */}
          <div className="rounded-sm border border-gray-200 overflow-hidden bg-white">
            <div className="grid grid-cols-4 border-b border-gray-200 bg-gray-50">
              <button
                onClick={() => setActiveTab('desc')}
                className={`py-3 px-1 text-center text-[12px] sm:text-[13px] font-bold transition-colors cursor-pointer truncate border-none ${
                  activeTab === 'desc'
                    ? 'bg-white text-[#0071E3] border-b-2 border-[#0071E3]'
                    : 'bg-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {t.product.tabDesc}
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`py-3 px-1 text-center text-[12px] sm:text-[13px] font-bold transition-colors cursor-pointer truncate border-none ${
                  activeTab === 'specs'
                    ? 'bg-white text-[#0071E3] border-b-2 border-[#0071E3]'
                    : 'bg-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {t.product.tabSpecs}
              </button>
              <button
                onClick={() => setActiveTab('shipping')}
                className={`py-3 px-1 text-center text-[12px] sm:text-[13px] font-bold transition-colors cursor-pointer truncate border-none ${
                  activeTab === 'shipping'
                    ? 'bg-white text-[#0071E3] border-b-2 border-[#0071E3]'
                    : 'bg-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {t.product.tabShipping}
              </button>
              <button
                onClick={() => setActiveTab('warranty')}
                className={`py-3 px-1 text-center text-[12px] sm:text-[13px] font-bold transition-colors cursor-pointer truncate border-none ${
                  activeTab === 'warranty'
                    ? 'bg-white text-[#0071E3] border-b-2 border-[#0071E3]'
                    : 'bg-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {t.product.tabWarranty}
              </button>
            </div>

            <div className="p-4 sm:p-5 text-[14px] text-gray-700 leading-relaxed">
              {activeTab === 'desc' && (
                <div className="space-y-2.5">
                  <p className="font-medium text-gray-900">
                    {t.product.overviewTitle}
                  </p>
                  <p>{t.product.overviewP1}</p>
                  <p>{t.product.overviewP2}</p>
                </div>
              )}

              {activeTab === 'specs' && (
                <div className="space-y-2">
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-gray-500">{t.product.specsPower}</span>
                    <span className="font-bold text-gray-900">1,000 W Inverter Brushless</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-gray-500">{t.product.specsBattery}</span>
                    <span className="font-bold text-gray-900">6–10 Hours</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-gray-500">{t.product.specsCompatibility}</span>
                    <span className="font-bold text-gray-900">{t.product.specsCompatibilityVal}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-100">
                    <span className="text-gray-500">{t.product.specsSpeed}</span>
                    <span className="font-bold text-gray-900">1.5 m/s (Adjustable Flow)</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-gray-500">Waterproof Standard</span>
                    <span className="font-bold text-gray-900">IP68 Full Submersible Certification</span>
                  </div>
                </div>
              )}

              {activeTab === 'shipping' && (
                <div className="space-y-2">
                  <p>{t.product.shippingInfo}</p>
                </div>
              )}

              {activeTab === 'warranty' && (
                <div className="space-y-2">
                  <p>{t.product.warrantyInfo}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
