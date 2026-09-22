import React from 'react';

export const BatteryPowerSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-14">
        {/* Title */}
        <div className="text-center max-w-[840px] mx-auto mb-12 sm:mb-16">
          <h2 className="text-[28px] sm:text-[46px] font-bold text-gray-950 font-['Figtree'] leading-tight mb-3">
            <span className="text-[#0071E3] mr-2">Une autonomie record.</span>
            Sans fil, sans limite.
          </h2>
          <p className="text-[16px] sm:text-[20px] text-gray-500 leading-relaxed font-medium">
            Nagez en toute liberté et en toute sécurité. Notre batterie Lithium haute densité amovible fournit une puissance continue et fiable pour des séances d'entraînement prolongées sans câble encombrant.
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
              alt="Batterie Lithium haute densité"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover min-h-[340px] sm:min-h-[440px]"
            />
          </picture>

          {/* Floating glassmorphic info card */}
          <div className="md:absolute md:top-1/2 md:right-10 md:-translate-y-1/2 md:w-[420px] bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl border border-white/40 space-y-6 m-4 md:m-0">
            <p className="text-[22px] sm:text-[26px] font-bold text-gray-900 leading-tight m-0">
              Batterie Lithium haute densité
            </p>

            <div className="space-y-4">
              <div className="border-l-3 border-[#0071E3] pl-4">
                <p className="font-bold text-[18px] text-[#0071E3] mb-1">
                  6 à 10 heures d'autonomie
                </p>
                <p className="text-[14px] text-gray-600 m-0">
                  Jusqu'à 10 heures de puissance continue avec le moteur 1 000 W pour nager l'esprit tranquille sans recharge fréquente.
                </p>
              </div>

              <div className="border-l-3 border-[#0071E3] pl-4">
                <p className="font-bold text-[18px] text-[#0071E3] mb-1">
                  Étanchéité IP65 & très basse tension
                </p>
                <p className="text-[14px] text-gray-600 m-0">
                  Tension de sécurité inoffensive pour l'humain et les animaux — spécialement développée pour une utilisation sereine au bord du bassin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
