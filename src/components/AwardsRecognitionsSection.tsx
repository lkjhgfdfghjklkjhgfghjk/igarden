import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AWARDS_LOGOS, AWARDS_REVIEWS } from '../homeData';

export const AwardsRecognitionsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
        {/* Title */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <img
            src="https://eu.store.igarden.ai/cdn/shop/t/40/assets/icon-ces-vector-left.svg?v=33565621515965566951778826866"
            alt=""
            className="w-5 sm:w-7 h-auto object-contain"
            loading="lazy"
          />
          <h2 className="text-[24px] sm:text-[34px] md:text-[40px] font-extrabold text-black text-center leading-tight">
            Prix et reconnaissances
          </h2>
          <img
            src="https://eu.store.igarden.ai/cdn/shop/t/40/assets/icon-ces-vector-right.svg?v=136859214946119851641778826866"
            alt=""
            className="w-5 sm:w-7 h-auto object-contain"
            loading="lazy"
          />
        </div>

        {/* Award Logos Row */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 md:gap-14 overflow-x-auto py-4 no-scrollbar">
          {AWARDS_LOGOS.map((logo, idx) => (
            <a
              key={idx}
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 transition-opacity hover:opacity-75"
            >
              <img
                src={logo.img}
                alt={logo.name}
                className="h-12 sm:h-16 md:h-20 w-auto object-contain"
                loading="lazy"
              />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-8 sm:my-10" />

        {/* Media Quotes Carousel */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto pb-4 no-scrollbar scroll-smooth"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {AWARDS_REVIEWS.map((rev, idx) => (
            <a
              key={idx}
              href={rev.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[290px] sm:w-[340px] bg-[#f8f9fd] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-shadow group border border-gray-100/60"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="space-y-3">
                <h4 className="font-bold text-[18px] sm:text-[20px] text-gray-900 leading-snug">
                  {rev.source}
                </h4>
                <div className="text-[13px] sm:text-[14px] text-gray-600 font-normal leading-relaxed">
                  <span className="text-[26px] font-serif text-black leading-none mr-1">“</span>
                  <span>{rev.text}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Nav Controls */}
        <div className="flex items-center justify-between mt-6 pt-2">
          {/* Scrollbar pill */}
          <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="w-6 h-full bg-black/60 rounded-full" />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
              aria-label="Avis précédent"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
              aria-label="Avis suivant"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
