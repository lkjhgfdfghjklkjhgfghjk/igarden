import React from 'react';

export const BatteryPowerSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-14">
        {/* Title */}
        <div className="text-center max-w-[840px] mx-auto mb-12 sm:mb-16">
          <h2 className="text-[28px] sm:text-[46px] font-bold text-gray-950 font-['Figtree'] leading-tight mb-3">
            <span className="text-[#0071E3] mr-2">Toute la journée</span>
            Pouvoir. Zéro limite.
          </h2>
          <p className="text-[16px] sm:text-[20px] text-gray-500 leading-relaxed font-medium">
            Nagez librement en toute sécurité. Notre pack batterie lithium amovible haute densité fournit une énergie constante et sécurisée, pour des séances de natation sans contrainte.
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
              alt="Noyau de puissance haute densité"
              className="w-full h-auto object-cover min-h-[340px] sm:min-h-[440px]"
            />
          </picture>

          {/* Floating glassmorphic info card */}
          <div className="md:absolute md:top-1/2 md:right-10 md:-translate-y-1/2 md:w-[420px] bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl border border-white/40 space-y-6 m-4 md:m-0">
            <p className="text-[22px] sm:text-[26px] font-bold text-gray-900 leading-tight m-0">
              Noyau de puissance haute densité
            </p>

            <div className="space-y-4">
              <div className="border-l-3 border-[#0071E3] pl-4">
                <p className="font-bold text-[18px] text-[#0071E3] mb-1">
                  Autonomie continue : 0,7 h à 5,0 h
                </p>
                <p className="text-[14px] text-gray-600 m-0">
                  Autonomie optimisée selon le pack batterie choisi (P5, P15, P30) et l'intensité de nage sélectionnée.
                </p>
              </div>

              <div className="border-l-3 border-[#0071E3] pl-4">
                <p className="font-bold text-[18px] text-[#0071E3] mb-1">
                  IP65 étanche
                </p>
                <p className="text-[14px] text-gray-600 m-0">
                  Basse tension sans danger pour les humains, conçue pour une utilisation sans crainte au bord de la piscine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
