import React from 'react';

export const BatteryPowerSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-14">
        {/* Title */}
        <div className="text-center max-w-[840px] mx-auto mb-12 sm:mb-16">
          <h2 className="text-[28px] sm:text-[46px] font-bold text-gray-950 font-['Figtree'] leading-tight mb-3">
            <span className="text-[#0071E3] mr-2">Ganztägige</span>
            Power. Keine Grenzen.
          </h2>
          <p className="text-[16px] sm:text-[20px] text-gray-500 leading-relaxed font-medium">
            Schwimmen Sie völlig frei und sicher. Unser hochdichter, herausnehmbarer Lithium-Akkupack liefert konstante, sichere Energie für ausdauernde Schwimmeinheiten ohne Kabelzwang.
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
              alt="Hochdichter Lithium-Energiekern"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover min-h-[340px] sm:min-h-[440px]"
            />
          </picture>

          {/* Floating glassmorphic info card */}
          <div className="md:absolute md:top-1/2 md:right-10 md:-translate-y-1/2 md:w-[420px] bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl border border-white/40 space-y-6 m-4 md:m-0">
            <p className="text-[22px] sm:text-[26px] font-bold text-gray-900 leading-tight m-0">
              Hochdichter Lithium-Energiekern
            </p>

            <div className="space-y-4">
              <div className="border-l-3 border-[#0071E3] pl-4">
                <p className="font-bold text-[18px] text-[#0071E3] mb-1">
                  6 bis 10 Stunden Akkulaufzeit
                </p>
                <p className="text-[14px] text-gray-600 m-0">
                  Bis zu 10 Stunden kontinuierliche Power für ausgiebige Schwimmeinheiten ohne ständiges Nachladen mit dem 1.000-W-Motor.
                </p>
              </div>

              <div className="border-l-3 border-[#0071E3] pl-4">
                <p className="font-bold text-[18px] text-[#0071E3] mb-1">
                  IP65 wetterfest & Schutzkleinspannung
                </p>
                <p className="text-[14px] text-gray-600 m-0">
                  Sichere Niederspannung für Menschen und Tiere – speziell für den sorgenfreien Einsatz direkt am Beckenrand konzipiert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
