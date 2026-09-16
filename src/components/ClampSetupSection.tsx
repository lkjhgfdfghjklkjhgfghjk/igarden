import React from 'react';
import { useI18n } from '../i18n/I18nContext';

export const ClampSetupSection: React.FC = () => {
  const { currentLanguage } = useI18n();
  const isAr = currentLanguage.id === 'ar';

  return (
    <section className="py-16 sm:py-24 bg-[#FAFAFA]" dir={currentLanguage.direction}>
      <div className="max-w-[1500px] mx-auto px-4 sm:px-14">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Video side */}
          <div className="w-full lg:w-3/5 rounded-2xl overflow-hidden shadow-md bg-black">
            <video
              src="https://eu.store.igarden.ai/cdn/shop/videos/c/vp/f086f95a0eff4ba8a8bdc6d43b9e8252/f086f95a0eff4ba8a8bdc6d43b9e8252.HD-1080p-7.2Mbps-83842825.mp4?v=0"
              poster="https://eu.store.igarden.ai/cdn/shop/files/preview_images/f086f95a0eff4ba8a8bdc6d43b9e8252.thumbnail.0000000000_2000x.jpg?v=1778493670"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text & Steps side */}
          <div className="w-full lg:w-2/5 space-y-8">
            <h2 className="text-[28px] sm:text-[44px] font-bold text-gray-900 font-['Figtree'] leading-tight">
              {isAr ? 'ثبّت وابدأ السباحة في أقل من دقيقة' : 'Clamp & Swim in Under a Minute'}
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 rtl:border-l-0 rtl:border-r-4 border-[#0071E3] pl-5 rtl:pl-0 rtl:pr-5 space-y-1">
                <span className="text-[#0071E3] font-bold text-[14px] uppercase tracking-wider block">
                  {isAr ? 'الخطوة 01' : 'Step 01'}
                </span>
                <p className="text-[20px] sm:text-[26px] font-bold text-gray-900 m-0">
                  {isAr ? 'صل وحدة الطاقة المحمولة' : 'Connect Power Station'}
                </p>
              </div>

              <div className="border-l-4 rtl:border-l-0 rtl:border-r-4 border-gray-300 hover:border-[#0071E3] pl-5 rtl:pl-0 rtl:pr-5 space-y-1 transition-colors">
                <span className="text-gray-400 font-bold text-[14px] uppercase tracking-wider block">
                  {isAr ? 'الخطوة 02' : 'Step 02'}
                </span>
                <p className="text-[20px] sm:text-[26px] font-bold text-gray-900 m-0">
                  {isAr ? 'ثبّت الجهاز على حافة المسبح' : 'Mount Jet to Pool Edge'}
                </p>
              </div>

              <div className="border-l-4 rtl:border-l-0 rtl:border-r-4 border-gray-300 hover:border-[#0071E3] pl-5 rtl:pl-0 rtl:pr-5 space-y-1 transition-colors">
                <span className="text-gray-400 font-bold text-[14px] uppercase tracking-wider block">
                  {isAr ? 'الخطوة 03' : 'Step 03'}
                </span>
                <p className="text-[20px] sm:text-[26px] font-bold text-gray-900 m-0">
                  {isAr ? 'شغّل التيار وانطلق في السباحة' : 'Power On & Enjoy Infinite Laps'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
