import React from 'react';

export const PortabilitySection: React.FC = () => {
  const cards = [
    {
      img: "https://eu.store.igarden.ai/cdn/shop/files/Frame_1_9e858063-ead4-4ea6-8b3c-765eb9b30840.png?v=1778494904&width=1200",
      title: "Trolley-Räder und ergonomischer Ziehgriff"
    },
    {
      img: "https://eu.store.igarden.ai/cdn/shop/files/Frame_1_1_2add0575-2c04-49fc-bec2-ff0bb47a4181.png?v=1779864936&width=1200",
      title: "Einfach mitnehmen zum Pool von Freunden"
    },
    {
      img: "https://eu.store.igarden.ai/cdn/shop/files/Frame_1_1.png?v=1778494904&width=1200",
      title: "Mühelos verstauen in Garage oder Schrank"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-14">
        {/* Title */}
        <div className="text-center max-w-[840px] mx-auto mb-12 sm:mb-16">
          <h2 className="text-[28px] sm:text-[46px] font-bold text-gray-950 font-['Figtree'] leading-tight mb-3">
            Mobil. Kompakt. Ungebunden.
          </h2>
          <p className="text-[16px] sm:text-[20px] text-gray-500 leading-relaxed font-medium">
            Handlich genug zum flexiblen Teilen, kompakt genug zum platzsparenden Verstauen.
            Schützen Sie Ihr Gerät mühelos vor Witterung und Sonne.
          </p>
        </div>

        {/* 3 cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAFA] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all group border border-gray-100"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img
                  src={card.img}
                  alt={card.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-bold text-[18px] sm:text-[22px] text-gray-900 leading-snug">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
