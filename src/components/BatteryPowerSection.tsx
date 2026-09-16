import React from 'react';
import { useI18n } from '../i18n/I18nContext';

export const BatteryPowerSection: React.FC = () => {
  const { currentLanguage } = useI18n();
  const isAr = currentLanguage.id === 'ar';

  return (
    <section className="py-16 sm:py-24 bg-white" dir={currentLanguage.direction}>
      <div className="max-w-[1500px] mx-auto px-4 sm:px-14">
        {/* Title */}
        <div className="text-center max-w-[840px] mx-auto mb-12 sm:mb-16">
          <h2 className="text-[28px] sm:text-[46px] font-bold text-gray-950 font-['Figtree'] leading-tight mb-3">
            <span className="text-[#0071E3] mr-2 rtl:ml-2 rtl:mr-0">{isAr ? 'طاقة تدوم طوال اليوم' : 'All-Day Power'}</span>
            {isAr ? 'حرية سباحة بلا قيود' : 'Limitless Swimming.'}
          </h2>
          <p className="text-[16px] sm:text-[20px] text-gray-500 leading-relaxed font-medium">
            {isAr
              ? 'اسبح بأمان وحرية تامة. توفر بطارية الليثيوم القابلة للفصل عالية الكثافة طاقة آمنة ومستمرة لتمارين سباحة غير محدودة.'
              : 'Swim freely and safely. Our high-density detachable lithium battery pack delivers safe, continuous energy for uninterrupted laps.'}
          </p>
        </div>

        {/* Hero Banner with Glassmorphic Overlay Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-[#FAFAFA]">
          <picture className="w-full block">
            <source
              media="(max-width: 749px)"
              srcSet="https://eu.store.igarden.ai/cdn/shop/files/x-power-m.png?v=1778495032&width=800"
            />
            <img
              src="https://eu.store.igarden.ai/cdn/shop/files/x-power.png?v=1778495036&width=1800"
              alt="High Density Power Core"
              className="w-full h-auto object-cover min-h-[340px] sm:min-h-[440px]"
            />
          </picture>

          {/* Floating glassmorphic info card */}
          <div className="md:absolute md:top-1/2 md:right-10 rtl:md:right-auto rtl:md:left-10 md:-translate-y-1/2 md:w-[420px] bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl border border-white/40 space-y-6 m-4 md:m-0">
            <p className="text-[22px] sm:text-[26px] font-bold text-gray-900 leading-tight m-0">
              {isAr ? 'وحدة طاقة عالية الكثافة' : 'High-Density Power Core'}
            </p>

            <div className="space-y-4">
              <div className="border-l-3 rtl:border-l-0 rtl:border-r-3 border-[#0071E3] pl-4 rtl:pl-0 rtl:pr-4">
                <p className="font-bold text-[18px] text-[#0071E3] mb-1">
                  {isAr ? 'من 6 إلى 10 ساعات تشغيل متواصل' : '6 to 10 Hours Max-Thrust Runtime'}
                </p>
                <p className="text-[14px] text-gray-600 m-0">
                  {isAr
                    ? 'استمتع بجلسات سباحة طويلة ومكثفة مع محرك 1000 واط دون الحاجة للشحن المتكرر.'
                    : 'Up to 10 hours continuous endurance to power long training sessions without frequent charging.'}
                </p>
              </div>

              <div className="border-l-3 rtl:border-l-0 rtl:border-r-3 border-[#0071E3] pl-4 rtl:pl-0 rtl:pr-4">
                <p className="font-bold text-[18px] text-[#0071E3] mb-1">
                  {isAr ? 'مقاومة الماء IP65' : 'IP65 Weatherproof'}
                </p>
                <p className="text-[14px] text-gray-600 m-0">
                  {isAr
                    ? 'جهد كهربائي منخفض وآمن تماماً للاستخدام بجانب المسبح بكل طمأنينة.'
                    : 'Human-safe low-voltage architecture engineered for peace of mind poolside.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
