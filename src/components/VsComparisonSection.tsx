import React from 'react';
import { useI18n } from '../i18n/I18nContext';

export const VsComparisonSection: React.FC = () => {
  const { currentLanguage, formatPrice, swimJetPrice } = useI18n();
  const isAr = currentLanguage.id === 'ar';

  return (
    <section className="py-16 sm:py-24 bg-white" dir={currentLanguage.direction}>
      <div className="max-w-[1500px] mx-auto px-4 sm:px-14">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[28px] sm:text-[46px] font-bold text-gray-950 font-['Figtree'] leading-tight mb-2">
            {isAr ? 'لماذا تختار آي جاردن س swim جيت؟' : 'Why Choose iGarden?'}
          </h2>
          <p className="text-[16px] sm:text-[20px] text-gray-500 font-medium">
            {isAr
              ? 'مقارنة جهاز آي جاردن س swim جيت المحمول بالأنظمة التقليدية المدمجة'
              : 'iGarden Swim Jet Series vs. Traditional Built-In Swim Machines'}
          </p>
        </div>

        {/* Comparison Cards Grid with VS badge */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-stretch">
          {/* Card 1: iGarden Highlight */}
          <div className="bg-[#F0F7FF] rounded-3xl overflow-hidden shadow-sm flex flex-col border-2 border-blue-100 hover:shadow-md transition-all">
            <div className="w-full bg-[#E5F0FC] overflow-hidden aspect-[16/9] sm:aspect-[2/1]">
              <img
                src="https://eu.store.igarden.ai/cdn/shop/files/Container_2_59e83699-790e-4ba6-9433-3ca5b5d31c38.png?v=1778494491&width=1200"
                alt="iGarden Swim Jet"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between items-center text-center space-y-4">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-gray-900 font-['Figtree']">
                {isAr ? 'جهاز آي جاردن س swim جيت 1000 واط' : 'iGarden Swim Jet 1,000 W'}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-4 py-2 rounded-full bg-white text-[#0071E3] font-semibold text-[14px] sm:text-[15px] shadow-xs">
                  {isAr ? `فقط ${formatPrice(swimJetPrice.price)} (قوة 1000 واط)` : `Only ${formatPrice(swimJetPrice.price)} (1,000 W Output)`}
                </span>
                <span className="px-4 py-2 rounded-full bg-white text-[#0071E3] font-semibold text-[14px] sm:text-[15px] shadow-xs">
                  {isAr ? 'من 6 إلى 10 ساعات تشغيل متواصل' : '6 to 10h Runtime per Charge'}
                </span>
                <span className="px-4 py-2 rounded-full bg-white text-[#0071E3] font-semibold text-[14px] sm:text-[15px] shadow-xs">
                  {isAr ? 'متوافق مع كافة أنواع المسابح' : 'Universal Pool Compatibility'}
                </span>
              </div>
            </div>
          </div>

          {/* VS Center Floating Badge */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white text-[#0071E3] font-extrabold text-[22px] items-center justify-center shadow-2xl border-4 border-[#0071E3]/20 z-10">
            VS
          </div>

          {/* Card 2: Traditional Built-in Pools */}
          <div className="bg-[#FAFAFA] rounded-3xl overflow-hidden shadow-sm flex flex-col border border-gray-200 hover:shadow-md transition-all">
            <div className="w-full bg-[#EEEEEE] overflow-hidden aspect-[16/9] sm:aspect-[2/1]">
              <img
                src="https://eu.store.igarden.ai/cdn/shop/files/Image_Exxx_Pools.png?v=1778494744&width=1200"
                alt="Traditional Built-in System"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between items-center text-center space-y-4">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-gray-700 font-['Figtree']">
                {isAr ? 'الأنظمة المدمجة التقليدية' : 'Traditional Built-In Systems'}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-4 py-2 rounded-full bg-[#EBEBEB] text-[#999999] font-medium text-[14px] sm:text-[15px]">
                  {isAr ? 'تكلفة تتجاوز $20,000+' : 'Cost $20,000+'}
                </span>
                <span className="px-4 py-2 rounded-full bg-[#EBEBEB] text-[#999999] font-medium text-[14px] sm:text-[15px]">
                  {isAr ? 'أعمال حفر وسباكة معقدة' : 'Heavy Construction & Plumbing'}
                </span>
                <span className="px-4 py-2 rounded-full bg-[#EBEBEB] text-[#999999] font-medium text-[14px] sm:text-[15px]">
                  {isAr ? 'غير قابلة للنقل وصيانة باهظة' : 'Fixed In Place & High Maintenance'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
