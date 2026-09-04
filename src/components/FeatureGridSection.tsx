import React from 'react';

export const FeatureGridSection: React.FC = () => {
  return (
    <section id="Aperçu" className="py-16 sm:py-24 bg-gradient-to-b from-[#D8EBFF] via-white to-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-14">
        {/* Kickstarter Banner */}
        <div className="mb-10 sm:mb-14 rounded-xl bg-[#0071E3] text-white p-4 sm:p-5 flex items-center justify-center gap-3 sm:gap-4 shadow-md flex-wrap text-center">
          <img
            src="https://eu.store.igarden.ai/cdn/shop/files/no1_icon_0001adad-c36c-4e20-a2f2-8cee88c8ed0f.png?v=1778309312&width=80"
            alt="No.1"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
          />
          <span className="font-bold text-[16px] sm:text-[20px] tracking-wide">
            4 200 000 $+ RÉCOLTÉS SUR
          </span>
          <img
            src="https://eu.store.igarden.ai/cdn/shop/files/Kickstarter_Logo.png?v=1778309315&width=240"
            alt="Kickstarter"
            className="h-5 sm:h-6 object-contain"
          />
          <span className="font-bold text-[16px] sm:text-[20px] tracking-wide">
            PROUVÉ PAR LA FOULE
          </span>
        </div>

        {/* Bento Grid Desktop & Tablet */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Card 1 */}
          <div className="md:col-span-6 relative rounded-2xl overflow-hidden min-h-[280px] sm:min-h-[380px] shadow-sm group">
            <img
              src="https://eu.store.igarden.ai/cdn/shop/files/whiteboard_exported_image_1.png?v=1778306427&width=1200"
              alt="Installation facile"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/40" />
            <div className="absolute top-6 left-6 right-6 text-white">
              <h3 className="text-[22px] sm:text-[28px] font-bold mb-2">Installation rapide sans travaux</h3>
              <p className="text-[15px] sm:text-[17px] text-white/90 leading-relaxed max-w-[500px]">
                La série X se fixe solidement au bord de votre piscine en moins de 2 minutes, sans travaux ni perçage.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="md:col-span-6 relative rounded-2xl overflow-hidden min-h-[280px] sm:min-h-[380px] shadow-sm group">
            <img
              src="https://eu.store.igarden.ai/cdn/shop/files/whiteboard_exported_image_5_3.png?v=1778306427&width=1200"
              alt="Débit puissant"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/40" />
            <div className="absolute top-6 left-6 right-6 text-white">
              <h3 className="text-[22px] sm:text-[28px] font-bold mb-2">Meilleur débit d'eau de sa catégorie</h3>
              <p className="text-[15px] sm:text-[17px] text-white/90 leading-relaxed max-w-[500px]">
                Alimenté par notre moteur PMSM et notre technologie AI Inverter pour une constance absolue.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="md:col-span-4 relative rounded-2xl overflow-hidden min-h-[320px] sm:min-h-[460px] shadow-sm group">
            <img
              src="https://eu.store.igarden.ai/cdn/shop/files/Group_2121235816.png?v=1778306427&width=900"
              alt="Ajustement universel"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/40" />
            <div className="absolute top-6 left-6 right-6 text-white">
              <h3 className="text-[22px] sm:text-[26px] font-bold mb-2">Ajustement universel</h3>
              <p className="text-[14px] sm:text-[16px] text-white/90">
                Piscine rectangulaire, hors terre, forme libre et bien plus encore.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="md:col-span-4 relative rounded-2xl overflow-hidden min-h-[320px] sm:min-h-[460px] shadow-sm group">
            <img
              src="https://eu.store.igarden.ai/cdn/shop/files/whiteboard_exported_image_3_2.png?v=1778306427&width=900"
              alt="Pour chaque nageur"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/40" />
            <div className="absolute top-6 left-6 right-6 text-white">
              <h3 className="text-[22px] sm:text-[26px] font-bold mb-2">Pour chaque façon dont vous nagez</h3>
              <p className="text-[14px] sm:text-[16px] text-white/90">
                De l'entraînement sérieux aux fêtes de famille au bord de la piscine.
              </p>
            </div>
          </div>

          {/* Card 5 & 6 Stack */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <div className="relative rounded-2xl overflow-hidden flex-1 min-h-[200px] shadow-sm group">
              <img
                src="https://eu.store.igarden.ai/cdn/shop/files/jimeng-2026-01-20-7806-___1.png?v=1778491857&width=900"
                alt="Blindage sécurité"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
              <div className="absolute top-5 left-5 right-5 text-white">
                <h3 className="text-[20px] font-bold mb-1">Blindage de sécurité à 360°</h3>
                <p className="text-[13px] text-white/90">Anti-enchevêtrement + Coupe automatique multi-sécurité</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden flex-1 min-h-[200px] shadow-sm group">
              <img
                src="https://eu.store.igarden.ai/cdn/shop/files/2_e8d4dc54-556a-4d92-beb5-94a73e701cc3.png?v=1778491964&width=900"
                alt="Pack batterie lithium amovible"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
              <div className="absolute top-5 left-5 right-5 text-white">
                <h3 className="text-[20px] font-bold mb-1">Pack batterie amovible</h3>
                <p className="text-[13px] text-white/90">Autonomie de 0,7 h à 5 h selon la vitesse et la batterie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
