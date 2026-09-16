import React from 'react';
import { useI18n } from '../i18n/I18nContext';

export const SafetyShieldSection: React.FC = () => {
  const { currentLanguage } = useI18n();
  const isAr = currentLanguage.id === 'ar';

  return (
    <section className="py-16 sm:py-24 bg-white" dir={currentLanguage.direction}>
      <div className="max-w-[1500px] mx-auto px-4 sm:px-14">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[28px] sm:text-[46px] font-bold text-gray-950 font-['Figtree'] leading-tight">
            <span className="text-[#0071E3]">360°</span> {isAr ? 'حماية وسلامة متكاملة' : 'Full-Spectrum Safety System'}
          </h2>
        </div>

        {/* 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr_1fr] gap-8 sm:gap-12 items-center">
          {/* Left column: 2 cards */}
          <div className="flex flex-col gap-8 justify-between">
            <div className="text-center group">
              <div className="rounded-xl overflow-hidden shadow-sm bg-black mb-3.5">
                <video
                  src="https://eu.store.igarden.ai/cdn/shop/videos/c/vp/6f38896f6fee4db39171becc66eeabae/6f38896f6fee4db39171becc66eeabae.HD-1080p-7.2Mbps-83843588.mp4?v=0"
                  poster="https://eu.store.igarden.ai/cdn/shop/files/preview_images/6f38896f6fee4db39171becc66eeabae.thumbnail.0000000000_600x.jpg?v=1778494347"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="font-bold text-[18px] sm:text-[20px] text-gray-900 m-0">
                {isAr ? 'فصل تلقائي فوري للطاقة' : 'Instant Automatic Shut-Off'}
              </p>
            </div>

            <div className="text-center group">
              <div className="rounded-xl overflow-hidden shadow-sm bg-black mb-3.5">
                <img
                  src="https://eu.store.igarden.ai/cdn/shop/files/lQDPKHROWGMftq3NBADNBgCwrLoTcdUcO2sJ1tSQ09acAA_1536_1024.jpg?v=1778494308&width=600"
                  alt="Grille anti-enchevêtrement"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="font-bold text-[18px] sm:text-[20px] text-gray-900 m-0">
                {isAr ? 'شبكة حماية أمان مضادة للتشابك' : 'Anti-Entanglement Safety Grill'}
              </p>
            </div>
          </div>

          {/* Center column: Main Product Illustration */}
          <div className="rounded-2xl bg-[#F5F5F7] p-4 flex items-center justify-center shadow-inner hidden lg:flex">
            <img
              src="https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237223.png?v=1778494303&width=1000"
              alt="iGarden Swim Jet"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right column: 2 cards */}
          <div className="flex flex-col gap-8 justify-between">
            <div className="text-center group">
              <div className="rounded-xl overflow-hidden shadow-sm bg-black mb-3.5">
                <video
                  src="https://eu.store.igarden.ai/cdn/shop/videos/c/vp/a4cfb19f73384b4bb3d4b1ed201c7a60/a4cfb19f73384b4bb3d4b1ed201c7a60.HD-1080p-7.2Mbps-83843366.mp4?v=0"
                  poster="https://eu.store.igarden.ai/cdn/shop/files/preview_images/a4cfb19f73384b4bb3d4b1ed201c7a60.thumbnail.0000000000_600x.jpg?v=1778494188"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="font-bold text-[18px] sm:text-[20px] text-gray-900 m-0">
                {isAr ? 'مقاومة الماء المعيارية IP68 (وحدة السباحة)' : 'IP68 Waterproof (Swim Unit)'}
              </p>
            </div>

            <div className="text-center group">
              <div className="rounded-xl overflow-hidden shadow-sm bg-black mb-3.5">
                <video
                  src="https://eu.store.igarden.ai/cdn/shop/videos/c/vp/57cf3137ea8640eb9ce017fea9a18652/57cf3137ea8640eb9ce017fea9a18652.HD-1080p-7.2Mbps-83843362.mp4?v=0"
                  poster="https://eu.store.igarden.ai/cdn/shop/files/preview_images/57cf3137ea8640eb9ce017fea9a18652.thumbnail.0000000000_600x.jpg?v=1778494186"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="font-bold text-[18px] sm:text-[20px] text-gray-900 m-0">
                {isAr ? 'مقاومة الماء والأحوال الجوية IP65 (وحدة الطاقة)' : 'IP65 Weatherproof (Power Station)'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
