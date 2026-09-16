import React from 'react';
import { useI18n } from '../i18n/I18nContext';

export const WhyChooseUsSection: React.FC = () => {
  const { currentLanguage } = useI18n();
  const isAr = currentLanguage.id === 'ar';

  const items = [
    {
      icon: "https://eu.store.igarden.ai/cdn/shop/files/18_c3cdf571-4b47-40fa-967b-1891dc924409.svg?v=1778500400&width=120",
      title: isAr ? "ضمان رسمي شامل لمدة سنتين" : "2-Year Official Warranty",
      desc: isAr ? "أداء مضمون وموثوق لوحدة السباحة ومحطة الطاقة." : "Guaranteed reliable performance for both Swim Jet and Power Station."
    },
    {
      icon: "https://eu.store.igarden.ai/cdn/shop/files/Multichannel_Support.png?v=1774252270&width=120",
      title: isAr ? "دعم عملاء متعدد القنوات" : "Multi-Channel Support",
      desc: isAr ? "تواصل معنا عبر البريد الإلكتروني أو الهاتف أو الدردشة المباشرة 24/7." : "Reach our dedicated team via email, phone, or online customer service 24/7."
    },
    {
      icon: "https://eu.store.igarden.ai/cdn/shop/files/Up_to_30-Day_Returns.png?v=1774252270&width=120",
      title: isAr ? "إرجاع مضمون خلال 30 يوماً" : "30-Day Money-Back Guarantee",
      desc: isAr ? "يمكنك طلب إرجاع واسترداد كامل المبلغ خلال 30 يوماً من استلام المنتج." : "Enjoy risk-free shopping with our hassle-free 30-day return policy."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white" dir={currentLanguage.direction}>
      <div className="max-w-[1500px] mx-auto px-4 sm:px-14">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[26px] sm:text-[38px] font-bold text-gray-950 font-['Figtree'] leading-tight">
            {isAr ? 'لماذا يعد متجر آي جاردن خيارك الأفضل لشراء جهاز السباحة؟' : 'Why iGarden is the Best Choice for Your Swim Jet'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F5F5F7] rounded-3xl p-8 sm:p-10 text-center flex flex-col items-center justify-center space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-2">
                <img src={item.icon} alt="" className="w-12 h-12 object-contain" />
              </div>
              <h3 className="font-bold text-[20px] sm:text-[24px] text-gray-900 leading-snug">
                {item.title}
              </h3>
              <p className="text-[15px] sm:text-[17px] text-[#83868D] leading-relaxed max-w-[340px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
