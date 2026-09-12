import React from 'react';

export const WhyChooseUsSection: React.FC = () => {
  const items = [
    {
      icon: "https://eu.store.igarden.ai/cdn/shop/files/18_c3cdf571-4b47-40fa-967b-1891dc924409.svg?v=1778500400&width=120",
      title: "Garantie de 2 ans",
      desc: "Performances garanties pour le Swim Jet et la Power Box."
    },
    {
      icon: "https://eu.store.igarden.ai/cdn/shop/files/Multichannel_Support.png?v=1774252270&width=120",
      title: "Prise en charge multicanal",
      desc: "Contactez-nous par e-mail, téléphone ou service client en ligne 24/7."
    },
    {
      icon: "https://eu.store.igarden.ai/cdn/shop/files/Up_to_30-Day_Returns.png?v=1774252270&width=120",
      title: "Retours jusqu'à 30 jours",
      desc: "Les clients peuvent demander un retour dans les 30 jours suivant la réception de leur produit."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-14">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[26px] sm:text-[38px] font-bold text-gray-950 font-['Figtree'] leading-tight">
            Pourquoi igarden est le meilleur endroit pour acheter un jet de nage ?
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
