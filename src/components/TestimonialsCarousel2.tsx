import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { TESTIMONIALS_1_DATA } from '../homeData';

export const TestimonialsCarousel2: React.FC = () => {
  const { currentLanguage } = useI18n();
  const isAr = currentLanguage.id === 'ar';
  const testimonials = isAr ? TESTIMONIALS_1_DATA.ar : TESTIMONIALS_1_DATA.en;
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 my-8" dir={currentLanguage.direction}>
      {/* Background graphic */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://eu.store.igarden.ai/cdn/shop/files/pc_6ce86593-e3b7-4fdb-9a10-ea0a730eb0cb_3.png?v=1784888082&width=2400"
          alt=""
          className="hidden sm:block w-full h-full object-cover"
        />
        <img
          src="https://eu.store.igarden.ai/cdn/shop/files/pc_6ce86593-e3b7-4fdb-9a10-ea0a730eb0cb_3.png?v=1784888082&width=800"
          alt=""
          className="block sm:hidden w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-8 flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
        {/* Left Side: Fixed text */}
        <div className="w-full lg:w-[32%] flex flex-col justify-center shrink-0">
          <h2 className="text-[26px] sm:text-[34px] md:text-[40px] font-extrabold text-black mb-3 md:mb-5 leading-tight">
            {isAr ? 'تجارب وآراء المستخدمين' : 'User Experiences'}
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[17px] text-gray-800 font-normal leading-relaxed opacity-90">
            {isAr
              ? 'نولي اهتماماً كبيراً بتجربة كل سباح وعائلة تستخدم أجهزتنا. تعرّف على آراء وانطباعات المستخدمين الحقيقيين وكيف أثرت على متعتهم بالسباحة.'
              : 'We value the authentic experience of every user. Hear directly from verified swimmers who transformed their backyard pool routine with iGarden.'}
          </p>
        </div>

        {/* Right Side: Horizontal cards scroll */}
        <div className="w-full lg:w-[68%] relative flex flex-col justify-between">
          <div
            ref={scrollRef}
            className="flex items-center gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {testimonials.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex-shrink-0 w-[260px] sm:w-[300px] h-[340px] sm:h-[380px] rounded-2xl overflow-hidden shadow-md cursor-pointer block select-none bg-black/40"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Card image */}
                <img
                  src={item.image}
                  alt={item.author}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Quote Content */}
                <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col justify-end text-white space-y-2">
                  <p className="text-[13px] sm:text-[14px] font-normal text-white/95 line-clamp-4 leading-snug">
                    {item.quote}
                  </p>
                  <p className="text-[13px] sm:text-[14px] font-bold text-white text-right rtl:text-left pt-1">
                    — {item.author}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Bottom navigation controls */}
          <div className="flex items-center justify-between mt-4 pt-2">
            {/* Scroll indicator line */}
            <div className="w-16 h-1 bg-black/20 rounded-full overflow-hidden">
              <div className="w-6 h-full bg-black/60 rounded-full" />
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-10 h-10 rounded-full bg-gray-200/90 hover:bg-gray-300 flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5] rtl:rotate-180" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-10 h-10 rounded-full bg-gray-200/90 hover:bg-gray-300 flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5] rtl:rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
