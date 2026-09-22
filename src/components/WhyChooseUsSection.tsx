import React from 'react';

export const WhyChooseUsSection: React.FC = () => {
  const items = [
    {
      icon: "https://eu.store.igarden.ai/cdn/shop/files/18_c3cdf571-4b47-40fa-967b-1891dc924409.svg?v=1778500400&width=120",
      title: "Garantie 2 ans",
      desc: "Performance et tranquillité d'esprit garanties pour le Swim Jet et sa batterie."
    },
    {
      icon: "https://eu.store.igarden.ai/cdn/shop/files/Multichannel_Support.png?v=1774252270&width=120",
      title: "Support client réactif 7j/7",
      desc: "Une équipe dédiée à votre écoute par e-mail ou chat pour répondre à toutes vos questions."
    },
    {
      icon: "https://eu.store.igarden.ai/cdn/shop/files/Up_to_30-Day_Returns.png?v=1774252270&width=120",
      title: "Essai 30 jours satisfait ou remboursé",
      desc: "Testez votre appareil en conditions réelles sans aucun risque dès sa réception."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-14">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[26px] sm:text-[38px] font-bold text-gray-950 font-['Figtree'] leading-tight">
            Pourquoi choisir iGarden pour votre système de nage à contre-courant ?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F5F5F7] rounded-3xl p-8 sm:p-10 text-center flex flex-col items-center justify-center space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-2">
                <img src={item.icon} alt="" loading="lazy" decoding="async" className="w-12 h-12 object-contain" />
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
