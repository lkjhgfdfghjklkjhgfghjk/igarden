import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getHeroSlides } from '../homeData';
import { useI18n } from '../i18n/I18nContext';

interface HeroCarouselProps {
  onNavigateToProduct?: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onNavigateToProduct }) => {
  const { t } = useI18n();
  const slides = getHeroSlides(t);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 14,
    minutes: 5,
    seconds: 51
  });

  // Countdown timer for slide
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
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(auto);
  }, [slides.length]);

  return (
    <section className="relative w-full overflow-hidden bg-black select-none">
      <div className="relative w-full aspect-[430/600] md:aspect-[1920/684] min-h-[460px] md:min-h-[550px]">
        {/* Background Images for all slides */}
        {slides.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Desktop BG */}
            <img referrerPolicy="no-referrer"
              src={item.bgPc}
              alt={item.heading || "iGarden Banner"}
              className="hidden md:block w-full h-full object-cover object-center"
            />
            {/* Mobile BG */}
            <img referrerPolicy="no-referrer"
              src={item.bgMb}
              alt={item.heading || "iGarden Banner"}
              className="block md:hidden w-full h-full object-cover object-top"
            />

            {/* Slide 1: School / Promo Custom Layout */}
            {item.type === 'school' && (
              <div className="absolute inset-0 flex flex-col items-center md:items-start justify-start md:justify-center px-6 md:px-16 lg:px-24 max-w-[1500px] mx-auto pt-10 md:pt-0 z-20">
                <div className="max-w-[550px] w-full flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6">
                  {/* Ticket Banner Graphic */}
                  <div className="relative w-full max-w-[420px] md:max-w-[480px]">
                    <img referrerPolicy="no-referrer"
                      src="https://eu.store.igarden.ai/cdn/shop/files/Group_2121239313.png?v=1785401452&width=1200"
                      alt={t.home?.hero?.slide2SpecialOffer || "Offre Spéciale"}
                      className="w-full h-auto drop-shadow-md"
                    />
                    <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between text-white text-left">
                      <p className="text-[13px] md:text-[15px] font-bold uppercase tracking-wider text-white/90">
                        {t.home?.hero?.slide2SpecialOffer || "Offre Spéciale Swim Jet"}
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-[12px] md:text-[14px] font-bold leading-tight uppercase whitespace-pre-line">
                          {t.home?.hero?.slide2SpecialPriceLabel || "Prix\nSpécial"}
                        </span>
                        <span className="text-[36px] md:text-[54px] font-extrabold leading-none tracking-tight">
                          209 €
                        </span>
                      </div>
                      <p className="text-[12px] md:text-[14px] font-medium text-white/90">
                        {t.home?.hero?.slide2SpecialPriceSub || "1 000 W de puissance • 6 à 10 h d'autonomie"}
                      </p>
                    </div>
                  </div>

                  {/* Countdown Card */}
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-[60px] h-[56px] sm:w-[70px] sm:h-[66px] md:w-[76px] md:h-[72px] bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center p-1">
                      <span className="text-[#0071E3] font-extrabold text-[18px] sm:text-[22px] md:text-[26px] leading-none">
                        {String(timeLeft.days).padStart(2, '0')}
                      </span>
                      <span className="text-gray-500 text-[10px] sm:text-[11px] font-semibold mt-0.5 truncate max-w-full text-center">
                        {t.home?.hero?.days || "Tage"}
                      </span>
                    </div>
                    <span className="text-white font-extrabold text-[18px] md:text-[22px]">:</span>
                    <div className="w-[60px] h-[56px] sm:w-[70px] sm:h-[66px] md:w-[76px] md:h-[72px] bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center p-1">
                      <span className="text-[#0071E3] font-extrabold text-[18px] sm:text-[22px] md:text-[26px] leading-none">
                        {String(timeLeft.hours).padStart(2, '0')}
                      </span>
                      <span className="text-gray-500 text-[10px] sm:text-[11px] font-semibold mt-0.5 truncate max-w-full text-center">
                        {t.home?.hero?.hours || "Stunden"}
                      </span>
                    </div>
                    <span className="text-white font-extrabold text-[18px] md:text-[22px]">:</span>
                    <div className="w-[60px] h-[56px] sm:w-[70px] sm:h-[66px] md:w-[76px] md:h-[72px] bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center p-1">
                      <span className="text-[#0071E3] font-extrabold text-[18px] sm:text-[22px] md:text-[26px] leading-none">
                        {String(timeLeft.minutes).padStart(2, '0')}
                      </span>
                      <span className="text-gray-500 text-[10px] sm:text-[11px] font-semibold mt-0.5 truncate max-w-full text-center">
                        {t.home?.hero?.minutes || "Minuten"}
                      </span>
                    </div>
                    <span className="text-white font-extrabold text-[18px] md:text-[22px]">:</span>
                    <div className="w-[60px] h-[56px] sm:w-[70px] sm:h-[66px] md:w-[76px] md:h-[72px] bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center p-1">
                      <span className="text-[#0071E3] font-extrabold text-[18px] sm:text-[22px] md:text-[26px] leading-none">
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </span>
                      <span className="text-gray-500 text-[10px] sm:text-[11px] font-semibold mt-0.5 truncate max-w-full text-center">
                        {t.home?.hero?.seconds || "Sekunden"}
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={onNavigateToProduct}
                    className="px-8 py-3.5 bg-[#f86709] hover:bg-[#d55807] text-white font-extrabold text-[15px] md:text-[17px] rounded-sm tracking-wide shadow-lg transition-all cursor-pointer uppercase"
                  >
                    {item.btnText}
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
                      onClick={onNavigateToProduct}
                      className="px-7 py-3 rounded-sm font-bold text-[14px] md:text-[15px] tracking-wide transition-opacity hover:opacity-90 shadow-md cursor-pointer uppercase"
                      style={{
                        backgroundColor: item.btnBg || '#0071E3',
                        color: item.btnColor || '#ffffff'
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

        {/* Carousel Arrow Controls */}
        <button
          onClick={() => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))}
          aria-label={t.home?.hero?.prevSlideAria || "Diapositive précédente"}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}
          aria-label={t.home?.hero?.nextSlideAria || "Diapositive suivante"}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                index === currentSlide ? 'w-8 bg-[#0071E3]' : 'w-2 bg-white/60 hover:bg-white'
              }`}
              aria-label={`Aller à la slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
