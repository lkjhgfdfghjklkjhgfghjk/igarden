import React from 'react';

export const UniversalFitSection: React.FC = () => {
  const pools = [
    {
      imgDesktop: "https://eu.store.igarden.ai/cdn/shop/files/image_62.png?v=1778493738&width=1000",
      imgMobile: "https://eu.store.igarden.ai/cdn/shop/files/image_62_5f41015a-5752-433c-8d03-20c65591e7d3.png?v=1778493834&width=600",
      alt: "Piscine rectangulaire"
    },
    {
      imgDesktop: "https://eu.store.igarden.ai/cdn/shop/files/image_63_bbd5c3e5-2ae7-4adc-a4bf-d2f7e1ffe597.png?v=1778493835&width=1000",
      imgMobile: "https://eu.store.igarden.ai/cdn/shop/files/image_63_2bdabb7e-31ee-4014-9cd3-4d5569e5065e.png?v=1778493833&width=600",
      alt: "Piscine creusée"
    },
    {
      imgDesktop: "https://eu.store.igarden.ai/cdn/shop/files/image_64_fe84f6c2-aca8-4ca1-a14b-c12d91e7c727.png?v=1778493835&width=1000",
      imgMobile: "https://eu.store.igarden.ai/cdn/shop/files/image_64_834fec39-06ed-407d-af8f-2c91cf4643c9.png?v=1778493832&width=600",
      alt: "Piscine de forme libre"
    },
    {
      imgDesktop: "https://eu.store.igarden.ai/cdn/shop/files/image_61_498d4752-d94a-427d-bb8e-799617f9259d.png?v=1778493835&width=1000",
      imgMobile: "https://eu.store.igarden.ai/cdn/shop/files/image_61_169214f1-2e9d-4d8b-ab2a-90459d83ce53.png?v=1778493833&width=600",
      alt: "Piscine hors-sol"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-14 mb-10 sm:mb-14 text-center">
        <h2 className="text-[28px] sm:text-[44px] font-bold text-gray-950 font-['Figtree'] leading-tight mb-4">
          Ajustement universel pour piscine.
        </h2>
        <p className="text-[16px] sm:text-[20px] text-gray-600 max-w-[1100px] mx-auto leading-relaxed">
          Conçue pour les piscines de 2 m × 4 m et plus, la série iGarden Swim Jet X s'adapte parfaitement aux piscines hors sol, aux piscines creusées, aux piscines de forme libre, aux bassins profonds, aux piscines à revêtement en vinyle, aux piscines en béton et plus encore. Aucune limite spatiale, aucune restriction de construction.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 px-2">
        {pools.map((item, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl bg-gray-100 group shadow-xs">
            <img
              src={item.imgDesktop}
              alt={item.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 hidden sm:block"
            />
            <img
              src={item.imgMobile}
              alt={item.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 sm:hidden block"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
