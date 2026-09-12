import React from 'react';
import { ATHLETES, PRESS_QUOTES, FEATURED_LOGOS } from '../data';

export const AthletesPressSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-14 space-y-16 sm:space-y-20">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-[28px] sm:text-[46px] font-bold text-gray-950 font-['Figtree'] leading-tight">
            Ce que disent les athlètes d’élite
          </h2>
        </div>

        {/* 3 Athlete Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ATHLETES.map((athlete, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col">
              <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100">
                <img src={athlete.image} alt={athlete.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="flex items-center gap-3.5">
                  <img src={athlete.avatar} alt={athlete.name} className="w-12 h-12 rounded-full object-cover border-2 border-blue-100" />
                  <div>
                    <h3 className="font-bold text-[16px] sm:text-[18px] text-gray-950 leading-snug">{athlete.name}</h3>
                    <p className="text-[13px] text-gray-500 font-medium m-0">{athlete.title}</p>
                  </div>
                </div>
                <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed italic m-0">
                  "{athlete.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Press Quotes Infinite Ticker */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="flex gap-6 animate-marquee hover:pause">
            {[...PRESS_QUOTES, ...PRESS_QUOTES, ...PRESS_QUOTES].map((item, idx) => (
              <div
                key={idx}
                className="w-[340px] sm:w-[500px] bg-[#0071E3]/5 p-6 rounded-2xl shrink-0 flex flex-col justify-between gap-4 border border-blue-100/50"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-2 shadow-xs shrink-0">
                  <img src={item.logo} alt={item.name} className="max-h-full max-w-full object-contain" />
                </div>
                <p className="text-[14px] sm:text-[16px] text-gray-700 leading-relaxed m-0 font-medium">
                  "{item.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured in media logos ticker */}
        <div className="bg-[#FAFAFA] rounded-3xl p-8 sm:p-10 text-center space-y-6">
          <p className="text-[14px] sm:text-[16px] font-bold text-gray-400 uppercase tracking-widest m-0">
            ÉGALEMENT PRÉSENTÉ DANS
          </p>

          <div className="overflow-hidden relative w-full py-2">
            <div className="flex gap-5 animate-marquee-fast hover:pause items-center">
              {[...FEATURED_LOGOS, ...FEATURED_LOGOS, ...FEATURED_LOGOS].map((logo, idx) => (
                <div
                  key={idx}
                  style={{ backgroundColor: logo.bg }}
                  className="w-[160px] sm:w-[200px] h-14 rounded-xl flex items-center justify-center p-3 shadow-xs shrink-0 border border-gray-100"
                >
                  <img src={logo.logo} alt={logo.name} className="max-h-full max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
