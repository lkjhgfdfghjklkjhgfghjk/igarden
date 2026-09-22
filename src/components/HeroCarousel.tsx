import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../homeData';

interface HeroCarouselProps {
  onNavigateToProduct?: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onNavigateToProduct }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 14,
    minutes: 5,
    seconds: 51
  });

  // Countdown timer for slide 1
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Autoplay
  useEffect(() => {
    const auto = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(auto);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative w-full overflow-hidden bg-black select-none">
      <div className="relative w-full aspect-[430/600] md:aspect-[1920/684] min-h-[460px] md:min-h-[550px]">
        {/* Background Images for all slides */}
        {HERO_SLIDES.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Desktop BG */}
            <img
              src={item.bgPc}
              alt={item.heading || "iGarden Banner"}
              loading={index === 0 ? "eager" : "lazy"}
              decoding={index === 0 ? "sync" : "async"}
              className="hidden md:block w-full h-full object-cover object-center"
            />
            {/* Mobile BG */}
            <img
              src={item.bgMb}
              alt={item.heading || "iGarden Banner"}
              loading={index === 0 ? "eager" : "lazy"}
              decoding={index === 0 ? "sync" : "async"}
              className="block md:hidden w-full h-full object-cover object-top"
            />

            {/* Slide 1: School / Rentrée Custom Layout */}
            {item.type === 'school' && (
              <div className="absolute inset-0 flex flex-col items-center md:items-start justify-start md:justify-center px-6 md:px-16 lg:px-24 max-w-[1500px] mx-auto pt-10 md:pt-0 z-20">
                <div className="max-w-[550px] w-full flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6">
                  {/* Ticket Banner Graphic */}
                  <div className="relative w-full max-w-[420px] md:max-w-[480px]">
                    <img
                      src="https://eu.store.igarden.ai/cdn/shop/files/Group_2121239313.png?v=1785401452&width=1200"
                      alt="Offre spéciale nage à contre-courant"
                      className="w-full h-auto drop-shadow-md"
                    />
                    <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between text-white text-left">
                      <p className="text-[13px] md:text-[15px] font-bold uppercase tracking-wider text-white/90">
                        Offre Spéciale Swim Jet
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-[12px] md:text-[14px] font-bold leading-tight uppercase">
                          Prix<br />Spécial
                        </span>
                        <span className="text-[36px] md:text-[54px] font-extrabold leading-none tracking-tight">
                          209 €
                        </span>
                      </div>
                      <p className="text-[12px] md:text-[14px] font-medium text-white/90">
                        1 000 W Puissance de pointe • 6 à 10 h d'autonomie
                      </p>
                    </div>
                  </div>

                  {/* Countdown Card */}
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <div className="w-[55px] h-[55px] md:w-[75px] md:h-[75px] bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                      <span className="text-[#0071E3] font-extrabold text-[20px] md:text-[28px] leading-none">
                        {String(timeLeft.days).padStart(2, '0')}
                      </span>
                      <span className="text-gray-500 text-[10px] md:text-[11px] font-semibold mt-0.5">Jours</span>
                    </div>
                    <span className="text-white font-extrabold text-[20px] md:text-[24px]">:</span>
                    <div className="w-[55px] h-[55px] md:w-[75px] md:h-[75px] bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                      <span className="text-[#0071E3] font-extrabold text-[20px] md:text-[28px] leading-none">
                        {String(timeLeft.hours).padStart(2, '0')}
                      </span>
                      <span className="text-gray-500 text-[10px] md:text-[11px] font-semibold mt-0.5">Heures</span>
                    </div>
                    <span className="text-white font-extrabold text-[20px] md:text-[24px]">:</span>
                    <div className="w-[55px] h-[55px] md:w-[75px] md:h-[75px] bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                      <span className="text-[#0071E3] font-extrabold text-[20px] md:text-[28px] leading-none">
                        {String(timeLeft.minutes).padStart(2, '0')}
                      </span>
                      <span className="text-gray-500 text-[10px] md:text-[11px] font-semibold mt-0.5">Minutes</span>
                    </div>
                    <span className="text-white font-extrabold text-[20px] md:text-[24px]">:</span>
                    <div className="w-[55px] h-[55px] md:w-[75px] md:h-[75px] bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                      <span className="text-[#0071E3] font-extrabold text-[20px] md:text-[28px] leading-none">
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </span>
                      <span className="text-gray-500 text-[10px] md:text-[11px] font-semibold mt-0.5">Secondes</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    type="button"
                    onClick={onNavigateToProduct}
                    className="px-8 py-3.5 min-h-[44px] bg-[#f86709] hover:bg-[#d55807] active:scale-[0.99] text-white font-extrabold text-[15px] md:text-[17px] rounded-xl tracking-wide shadow-lg transition-all cursor-pointer uppercase"
                  >
                    Commander maintenant pour 209,00 €
                  </button>
                </div>
              </div>
            )}

            {/* Standard Slides Content */}
            {item.type === 'standard' && (
              <div
                className={`absolute inset-0 flex flex-col justify-start md:justify-center pt-16 md:pt-0 px-6 md:px-16 lg:px-24 max-w-[1500px] mx-auto z-20 ${
                  item.align === 'center'
                    ? 'items-center text-center'
                    : 'items-center md:items-start text-center md:text-left'
                }`}
              >
                <div className="max-w-[620px] space-y-2 md:space-y-3">
                  {item.eyebrow && (
                    <p
                      className="text-[13px] md:text-[16px] font-bold tracking-wide"
                      style={{ color: item.btnBg === '#ffffff' ? '#ffffff' : '#000000' }}
                    >
                      {item.eyebrow}
                    </p>
                  )}
                  {item.heading && (
                    <h2
                      className="text-[28px] sm:text-[38px] md:text-[50px] font-extrabold leading-tight tracking-tight"
                      style={{ color: item.btnBg === '#ffffff' ? '#ffffff' : '#000000' }}
                    >
                      {item.heading}
                    </h2>
                  )}
                  {item.desc && (
                    <p
                      className="text-[14px] md:text-[18px] font-normal leading-snug"
                      style={{ color: item.btnBg === '#ffffff' ? '#ffffff' : '#000000' }}
                    >
                      {item.desc}
                    </p>
                  )}
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={onNavigateToProduct}
                      className="px-7 py-3 min-h-[44px] rounded-xl font-bold text-[14px] md:text-[15px] tracking-wide transition-all active:scale-[0.99] hover:opacity-90 shadow-md cursor-pointer uppercase"
                      style={{
                        backgroundColor: item.btnBg || '#ffffff',
                        color: item.btnColor || '#000000'
                      }}
                    >
                      {item.btnText}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Circular Arrows */}
        <button
          type="button"
          onClick={() => setCurrentSlide(prev => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 hidden md:flex w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/40 items-center justify-center text-white transition-colors cursor-pointer"
          aria-label="Slide précédent"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
        </button>
        <button
          type="button"
          onClick={() => setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 hidden md:flex w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/40 items-center justify-center text-white transition-colors cursor-pointer"
          aria-label="Slide suivant"
        >
          <ChevronRight className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Dots Pagination */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                idx === currentSlide
                  ? 'w-6 h-2 bg-white'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Aller au slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
