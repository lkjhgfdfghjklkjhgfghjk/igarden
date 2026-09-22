import React from 'react';

export const WhatsInTheBoxSection: React.FC = () => {
  const items = [
    {
      img: "https://eu.store.igarden.ai/cdn/shop/files/1_1_2.png?v=1778495430&width=1400",
      title: "Turbine de nage Swim Jet",
      qty: "1x"
    },
    {
      img: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237486.png?v=1779788996&width=1400",
      title: "Powerbox batterie haute capacité",
      qty: "1x"
    },
    {
      img: "https://eu.store.igarden.ai/cdn/shop/files/Image_6_1_2.png?v=1779174423&width=1400",
      title: "Chargeur secteur rapide",
      qty: "1x"
    },
    {
      img: "https://eu.store.igarden.ai/cdn/shop/files/Image_7_e6efc16e-01cd-46b7-a866-929e6831496c.png?v=1778495431&width=1400",
      title: "Système de fixation sécurisé",
      qty: "1x"
    }
  ];

  return (
    <section id="contenu-du-coffret" className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-14">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[28px] sm:text-[44px] font-bold text-gray-950 font-['Figtree'] leading-tight">
            Contenu du coffret
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all border border-gray-100">
              <div className="aspect-square bg-[#F8F8F8] relative overflow-hidden flex items-center justify-center p-4">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-5 text-center">
                <span className="font-bold text-[16px] sm:text-[18px] text-gray-900 block mb-1">
                  {item.title}
                </span>
                <span className="text-[14px] sm:text-[16px] text-gray-400 font-medium">
                  {item.qty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
