import React from 'react';
import { useI18n } from '../i18n/I18nContext';

export const FeatureGridSection: React.FC = () => {
  const { currentLanguage } = useI18n();
  const isAr = currentLanguage.id === 'ar';

  return (
    <section id="Aperçu" className="py-16 sm:py-24 bg-gradient-to-b from-[#D8EBFF] via-white to-white" dir={currentLanguage.direction}>
      <div className="max-w-[1500px] mx-auto px-4 sm:px-14">
        {/* Kickstarter Banner */}
        <div className="mb-10 sm:mb-14 rounded-xl bg-[#0071E3] text-white p-4 sm:p-5 flex items-center justify-center gap-3 sm:gap-4 shadow-md flex-wrap text-center">
          <img
            src="https://eu.store.igarden.ai/cdn/shop/files/no1_icon_0001adad-c36c-4e20-a2f2-8cee88c8ed0f.png?v=1778309312&width=80"
            alt="No.1"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
          />
          <span className="font-bold text-[16px] sm:text-[20px] tracking-wide">
            {isAr ? 'أكثر من 4,200,000 دولار تم جمعها على' : 'OVER $4,200,000+ RAISED ON'}
          </span>
          <img
            src="https://eu.store.igarden.ai/cdn/shop/files/Kickstarter_Logo.png?v=1778309315&width=240"
            alt="Kickstarter"
            className="h-5 sm:h-6 object-contain"
          />
          <span className="font-bold text-[16px] sm:text-[20px] tracking-wide">
            {isAr ? 'بثقة ودعم آلاف السباحين' : 'BACKED BY THE GLOBAL COMMUNITY'}
          </span>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Card 1 */}
          <div className="md:col-span-6 relative rounded-2xl overflow-hidden min-h-[280px] sm:min-h-[380px] shadow-sm group">
            <img
              src="https://eu.store.igarden.ai/cdn/shop/files/whiteboard_exported_image_1.png?v=1778306427&width=1200"
              alt="Installation"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/40" />
            <div className="absolute top-6 left-6 right-6 text-white">
              <h3 className="text-[22px] sm:text-[28px] font-bold mb-2">
                {isAr ? 'تثبيت سريع في أقل من دقيقتين' : 'Tool-Free Fast Setup'}
              </h3>
              <p className="text-[15px] sm:text-[17px] text-white/90 leading-relaxed max-w-[500px]">
                {isAr
                  ? 'يثبت جهاز السلسلة X بإحكام على حافة مسبحك في أقل من دقيقتين دون حفر أو تمديدات سباكة.'
                  : 'The X-Series mounts securely to your pool edge in under 2 minutes with no plumbing or drilling required.'}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="md:col-span-6 relative rounded-2xl overflow-hidden min-h-[280px] sm:min-h-[380px] shadow-sm group">
            <img
              src="https://eu.store.igarden.ai/cdn/shop/files/whiteboard_exported_image_5_3.png?v=1778306427&width=1200"
              alt="Power"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/40" />
            <div className="absolute top-6 left-6 right-6 text-white">
              <h3 className="text-[22px] sm:text-[28px] font-bold mb-2">
                {isAr ? 'قوة دفع احترافية 1000 واط' : '1,000 W High-Output Power'}
              </h3>
              <p className="text-[15px] sm:text-[17px] text-white/90 leading-relaxed max-w-[500px]">
                {isAr
                  ? 'مزود بمحرك متزامن عالي الكفاءة وتقنية عاكس متطورة لضمان تيار مائي سلس وثابت بدون انقطاع.'
                  : 'Engineered with a high-efficiency synchronous motor and advanced inverter tech for steady laminar flow.'}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="md:col-span-4 relative rounded-2xl overflow-hidden min-h-[320px] sm:min-h-[460px] shadow-sm group">
            <img
              src="https://eu.store.igarden.ai/cdn/shop/files/Group_2121235816.png?v=1778306427&width=900"
              alt="Universal Fit"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/40" />
            <div className="absolute top-6 left-6 right-6 text-white">
              <h3 className="text-[22px] sm:text-[26px] font-bold mb-2">
                {isAr ? 'توافق شامل مع جميع المسابح' : 'Universal Pool Compatibility'}
              </h3>
              <p className="text-[14px] sm:text-[16px] text-white/90">
                {isAr
                  ? 'يتوافق مع جميع أنواع المسابح (فوق الأرض، خرسانية، فايبرجلاس، أو إطارية).'
                  : 'Seamlessly attaches to above-ground, inground, concrete, fiberglass, and framed pools.'}
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="md:col-span-4 relative rounded-2xl overflow-hidden min-h-[320px] sm:min-h-[460px] shadow-sm group">
            <img
              src="https://eu.store.igarden.ai/cdn/shop/files/whiteboard_exported_image_3_2.png?v=1778306427&width=900"
              alt="For Every Swimmer"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/40" />
            <div className="absolute top-6 left-6 right-6 text-white">
              <h3 className="text-[22px] sm:text-[26px] font-bold mb-2">
                {isAr ? 'لكل أنواع وأساليب السباحة' : 'For Every Swimming Style'}
              </h3>
              <p className="text-[14px] sm:text-[16px] text-white/90">
                {isAr
                  ? 'من تدريبات اللياقة الرياضية المكثفة إلى السباحة العائلية الممتعة والاسترخاء.'
                  : 'From high-intensity endurance training to relaxing family pool days and recovery.'}
              </p>
            </div>
          </div>

          {/* Card 5 & 6 Stack */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <div className="relative rounded-2xl overflow-hidden flex-1 min-h-[200px] shadow-sm group">
              <img
                src="https://eu.store.igarden.ai/cdn/shop/files/jimeng-2026-01-20-7806-___1.png?v=1778491857&width=900"
                alt="Safety Shield"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
              <div className="absolute top-5 left-5 right-5 text-white">
                <h3 className="text-[20px] font-bold mb-1">
                  {isAr ? 'حماية وأمان شامل 360°' : '360° Safety Shield'}
                </h3>
                <p className="text-[13px] text-white/90">
                  {isAr
                    ? 'شبكة حماية مضادة للتشابك مع إيقاف تلقائي فوري لأقصى درجات الأمان'
                    : 'Anti-entanglement grill + multi-tier automatic safety shut-off'}
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden flex-1 min-h-[200px] shadow-sm group">
              <img
                src="https://eu.store.igarden.ai/cdn/shop/files/2_e8d4dc54-556a-4d92-beb5-94a73e701cc3.png?v=1778491964&width=900"
                alt="Battery"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
              <div className="absolute top-5 left-5 right-5 text-white">
                <h3 className="text-[20px] font-bold mb-1">
                  {isAr ? 'بطارية تدوم طويلاً' : 'Long-Lasting Runtime'}
                </h3>
                <p className="text-[13px] text-white/90">
                  {isAr
                    ? 'من 6 إلى 10 ساعات عمل متواصلة بطاقة كاملة بدون الحاجة للشحن المتكرر'
                    : '6 to 10 hours continuous operation on a single charge at high thrust'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
