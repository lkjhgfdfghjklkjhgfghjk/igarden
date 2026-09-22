import React from 'react';

export const VsComparisonSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-14">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[28px] sm:text-[46px] font-bold text-gray-950 font-['Figtree'] leading-tight mb-2">
            Warum iGarden?
          </h2>
          <p className="text-[16px] sm:text-[20px] text-gray-500 font-medium">
            iGarden Swim Jet X-Serie im direkten Vergleich zu herkömmlichen Gegenstromanlagen
          </p>
        </div>

        {/* Comparison Cards Grid with VS badge */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-stretch">
          {/* Card 1: iGarden Highlight */}
          <div className="bg-[#F0F7FF] rounded-3xl overflow-hidden shadow-sm flex flex-col border-2 border-blue-100 hover:shadow-md transition-all">
            <div className="w-full bg-[#E5F0FC] overflow-hidden aspect-[16/9] sm:aspect-[2/1]">
              <img
                src="https://eu.store.igarden.ai/cdn/shop/files/Container_2_59e83699-790e-4ba6-9433-3ca5b5d31c38.png?v=1778494491&width=1200"
                alt="iGarden Swim Jet X-Serie"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between items-center text-center space-y-4">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-gray-900 font-['Figtree']">
                iGarden Swim Jet X-Serie
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-4 py-2 rounded-full bg-white text-[#0071E3] font-semibold text-[14px] sm:text-[15px] shadow-xs">
                  Nur 209,00 € (1.000 W Spitzenleistung)
                </span>
                <span className="px-4 py-2 rounded-full bg-white text-[#0071E3] font-semibold text-[14px] sm:text-[15px] shadow-xs">
                  6 bis 10 Std. Akkulaufzeit
                </span>
                <span className="px-4 py-2 rounded-full bg-white text-[#0071E3] font-semibold text-[14px] sm:text-[15px] shadow-xs">
                  Kompatibel mit allen Pools
                </span>
              </div>
            </div>
          </div>

          {/* VS Center Floating Badge */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white text-[#0071E3] font-extrabold text-[22px] items-center justify-center shadow-2xl border-4 border-[#0071E3]/20 z-10">
            VS
          </div>

          {/* Card 2: Traditional Built-in Pools */}
          <div className="bg-[#FAFAFA] rounded-3xl overflow-hidden shadow-sm flex flex-col border border-gray-200 hover:shadow-md transition-all">
            <div className="w-full bg-[#EEEEEE] overflow-hidden aspect-[16/9] sm:aspect-[2/1]">
              <img
                src="https://eu.store.igarden.ai/cdn/shop/files/Image_Exxx_Pools.png?v=1778494744&width=1200"
                alt="Herkömmliche Festeinbau-Systeme"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between items-center text-center space-y-4">
              <h3 className="text-[24px] sm:text-[28px] font-bold text-gray-700 font-['Figtree']">
                Klassische Festeinbau-Anlagen
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-4 py-2 rounded-full bg-[#EBEBEB] text-[#999999] font-medium text-[14px] sm:text-[15px]">
                  Kosten 20.000 €+
                </span>
                <span className="px-4 py-2 rounded-full bg-[#EBEBEB] text-[#999999] font-medium text-[14px] sm:text-[15px]">
                  Aufwendige Erdarbeiten & Bau
                </span>
                <span className="px-4 py-2 rounded-full bg-[#EBEBEB] text-[#999999] font-medium text-[14px] sm:text-[15px]">
                  Feste Montage & hohe Wartung
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
