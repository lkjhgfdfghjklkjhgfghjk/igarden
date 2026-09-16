import React, { useState } from 'react';
import { X, Search, Package, CheckCircle2, Truck, Clock } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

interface OrderTrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderTrackingModal: React.FC<OrderTrackingModalProps> = ({
  isOpen,
  onClose
}) => {
  const { currentLanguage, currentMarket, formatPrice, swimJetPrice, t } = useI18n();
  const isAr = currentLanguage.id === 'ar';

  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId && !email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSearched(true);
    }, 600);
  };

  const handleUseDemo = () => {
    setOrderId(isAr ? 'IG-AE-84920' : 'IG-US-84920');
    setEmail('customer@example.com');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSearched(true);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200" dir={currentLanguage.direction}>
      <div
        className="w-full max-w-[560px] max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-y-auto border border-gray-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-gray-200 flex items-center justify-between bg-[#F8FAFC]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0071E3]/10 text-[#0071E3] flex items-center justify-center">
              <Package className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-[16px] sm:text-[17px] text-gray-900 leading-tight">
                {isAr ? 'تتبع الطلب المباشر' : 'Live Order Tracking'}
              </h3>
              <p className="text-[12px] text-gray-500">
                {isAr ? `خدمة التوصيل السريع — ${currentMarket.name}` : `Express Delivery Service — ${currentMarket.name}`}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-black hover:bg-gray-200 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 space-y-5">
          {/* Form */}
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <label className="block text-[13px] font-bold text-gray-700 mb-1">
                {isAr ? 'رقم الطلب أو رقم التتبع' : 'Order Number or Tracking ID'}
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder={isAr ? 'مثال: IG-84920 أو TRK987654321' : 'Ex: IG-US-84920 or TRK987654321'}
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-[14px] text-gray-900 focus:outline-none focus:border-[#0071E3]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-bold text-gray-700 mb-1">
                {isAr ? 'البريد الإلكتروني المستخدم عند الشراء' : 'Email Address Used at Checkout'}
              </label>
              <input
                type="email"
                placeholder="customer@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-[14px] text-gray-900 focus:outline-none focus:border-[#0071E3]"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 h-11 rounded-lg bg-[#0071E3] hover:bg-blue-700 text-white font-bold text-[13px] sm:text-[14px] tracking-wide transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer uppercase disabled:opacity-50 text-center border-none"
              >
                <Search className="w-4 h-4" />
                <span>{loading ? (isAr ? 'جارٍ البحث...' : 'Searching...') : (isAr ? 'تتبع شحنتي' : 'Track My Package')}</span>
              </button>

              <button
                type="button"
                onClick={handleUseDemo}
                className="h-11 px-4 rounded-lg border border-gray-300 hover:bg-gray-50 text-gray-700 text-[13px] font-semibold whitespace-nowrap cursor-pointer uppercase text-center"
              >
                {isAr ? 'نموذج تجريبي' : 'Demo Example'}
              </button>
            </div>
          </form>

          {/* Tracking Results */}
          {searched && (
            <div className="p-4 sm:p-5 bg-[#F8FAFC] border border-gray-200 rounded-xl space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
              {/* Order overview badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-gray-200">
                <div>
                  <span className="text-[12px] text-gray-500 font-semibold">{isAr ? 'رقم الطلب:' : 'Order ID:'}</span>
                  <p className="font-extrabold text-[15px] text-gray-900">#IG-84920</p>
                </div>
                <div className="text-right rtl:text-left">
                  <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-[11px] font-bold px-2 py-0.5 rounded-full">
                    <Truck className="w-3.5 h-3.5" /> {isAr ? 'في طريق التوصيل' : 'In Transit'}
                  </span>
                  <p className="text-[11px] text-gray-500 mt-0.5">{isAr ? 'شحن سريع ومؤمن' : 'Insured Express Courier'}</p>
                </div>
              </div>

              {/* Product recap */}
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
                <img
                  src="https://eu.store.igarden.ai/cdn/shop/files/1-FR-1.png?v=1782461732"
                  alt="Swim Jet — 1,000 W"
                  className="w-12 h-12 object-cover rounded-lg bg-gray-50 border border-gray-200 shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-[13px] sm:text-[14px] text-gray-900 truncate">
                    {t.hero.title} — 1,000 W
                  </p>
                  <p className="text-[12px] text-gray-500">
                    {isAr ? `الكمية: 1 • ${formatPrice(swimJetPrice.price)} • شحن مجاني شامل` : `Qty: 1 • ${formatPrice(swimJetPrice.price)} • Free Express Shipping`}
                  </p>
                </div>
              </div>

              {/* Timeline Steps */}
              <div className="space-y-4 pt-1">
                <h4 className="font-bold text-[13px] text-gray-900 uppercase tracking-wide">
                  {isAr ? 'سجل مراحل الشحن والتوصيل' : 'Shipment Activity History'}
                </h4>

                <div className="relative pl-6 rtl:pl-0 rtl:pr-6 space-y-6 before:absolute before:left-2 rtl:before:left-auto rtl:before:right-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-300">
                  {/* Step 1 */}
                  <div className="relative">
                    <div className="absolute -left-[29px] rtl:-left-auto rtl:-right-[29px] top-0.5 w-4 h-4 rounded-full bg-[#0071E3] border-2 border-white ring-2 ring-[#0071E3]/20 flex items-center justify-center text-white">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                    <p className="font-bold text-[13px] text-gray-900">
                      {isAr ? 'جاري الفرز والمعالجة في مركز التوزيع الإقليمي' : 'In transit to local distribution center'}
                    </p>
                    <p className="text-[12px] text-gray-500">
                      {isAr ? `المركز اللوجستي — ${currentMarket.name}` : `Regional Logistics Hub — ${currentMarket.name}`}
                    </p>
                    <span className="text-[11px] text-gray-400">{isAr ? 'اليوم، 08:42 ص' : 'Today, 08:42 AM'}</span>
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                    <div className="absolute -left-[29px] rtl:-left-auto rtl:-right-[29px] top-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <p className="font-bold text-[13px] text-gray-900">
                      {isAr ? 'تم استلام الشحنة من قبل شركة النقل السريع' : 'Package picked up by courier service'}
                    </p>
                    <p className="text-[12px] text-gray-500">
                      {isAr ? 'مركز انطلاق وتجهيز الشحنات iGarden' : 'iGarden Fulfillment Facility'}
                    </p>
                    <span className="text-[11px] text-gray-400">{isAr ? 'أمس، 04:15 م' : 'Yesterday, 04:15 PM'}</span>
                  </div>

                  {/* Step 3 */}
                  <div className="relative">
                    <div className="absolute -left-[29px] rtl:-left-auto rtl:-right-[29px] top-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <p className="font-bold text-[13px] text-gray-900">
                      {isAr ? 'تم تأكيد الطلب والتعبئة' : 'Order verified & packaged'}
                    </p>
                    <p className="text-[12px] text-gray-500">
                      {isAr ? 'متجر iGarden الرسمي' : 'iGarden Official Store'}
                    </p>
                    <span className="text-[11px] text-gray-400">{isAr ? 'أمس، 02:02 م' : 'Yesterday, 02:02 PM'}</span>
                  </div>
                </div>
              </div>

              {/* Delivery estimation */}
              <div className="p-3 bg-blue-50/80 rounded-lg border border-blue-200 text-[12px] sm:text-[13px] text-blue-900 flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#0071E3] shrink-0" />
                <span>
                  {isAr ? (
                    <>التوصيل المتوقع: <strong>خلال 24 إلى 48 ساعة عمل</strong> مباشرة إلى عنوانك مع التسليم بتوقيع.</>
                  ) : (
                    <>Estimated Delivery: <strong>Within 24 to 48 business hours</strong> directly to your address with signature on delivery.</>
                  )}
                </span>
              </div>
            </div>
          )}

          {/* Need help */}
          <div className="pt-2 border-t border-gray-100 text-center">
            <p className="text-[12px] text-gray-500">
              {isAr ? 'هل لديك أي استفسار بشأن التوصيل؟ تواصل مع فريق الدعم على ' : 'Have questions about your delivery? Contact our customer support team at '}
              <a href="mailto:support@igarden.ai" className="font-bold text-[#0071E3] hover:underline">
                support@igarden.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
