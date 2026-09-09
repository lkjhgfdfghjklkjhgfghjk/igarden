import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { getTrustpilotReviews } from '../homeData';
import { useI18n } from '../i18n/I18nContext';

export const TrustpilotReviewWidget: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { t } = useI18n();
  const reviews = getTrustpilotReviews(t);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setScrollProgress((scrollLeft / maxScroll) * 40); // 40px max travel
      }
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll, { passive: true });
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
        {/* Header with CES Laurel decoration */}
        <div className="flex flex-col items-center justify-center text-center mb-10 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <img referrerPolicy="no-referrer"
              src="https://eu.store.igarden.ai/cdn/shop/files/ces-vector-left_svg.png?v=1784616357&width=100"
              alt=""
              className="w-5 sm:w-8 h-auto object-contain"
              loading="lazy"
            />
            <h2 className="text-[28px] sm:text-[40px] md:text-[48px] font-extrabold text-black tracking-tight leading-none">
              {t.home?.trustpilot?.sectionTitle || "Trustpilot Reviews"}
            </h2>
            <img referrerPolicy="no-referrer"
              src="https://eu.store.igarden.ai/cdn/shop/files/ces-vector-right_svg.png?v=1784616357&width=100"
              alt=""
              className="w-5 sm:w-8 h-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-4 text-gray-600 text-[14px] sm:text-[18px] font-medium">
            <a
              href="https://www.trustpilot.com/review/igarden.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-black transition-colors"
            >
              {t.home?.trustpilot?.reviewsCount || "Avis 229"}
            </a>
            <div className="flex items-center gap-1.5 text-gray-900 font-bold">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-[#00b67a] flex items-center justify-center text-white">
                    <Star className="w-3.5 h-3.5 fill-white text-white" />
                  </div>
                ))}
              </div>
              <span>4.7</span>
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto pb-4 no-scrollbar scroll-smooth"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex-shrink-0 w-[290px] sm:w-[340px] bg-[#fafafa] rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-gray-100"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="space-y-4">
                {/* Author Info */}
                <div className="flex items-center gap-3">
                  {review.avatar ? (
                    <img referrerPolicy="no-referrer"
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover shrink-0"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold shrink-0">
                      {review.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-[16px] sm:text-[18px] text-gray-900 leading-snug">
                      {review.name}
                    </h4>
                    <p className="text-[12px] sm:text-[13px] text-gray-500">{review.date}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-[#00b67a] flex items-center justify-center text-white">
                      <Star className="w-2.5 h-2.5 fill-white text-white" />
                    </div>
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-gray-200 flex items-center justify-center text-white">
                      <Star className="w-2.5 h-2.5 fill-white text-white" />
                    </div>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-[13px] sm:text-[14px] text-gray-700 font-normal leading-relaxed whitespace-pre-line line-clamp-8">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Progress Controls */}
        <div className="flex items-center justify-between mt-8 pt-2">
          {/* Progress bar */}
          <div className="w-20 h-1 bg-gray-200 rounded-full overflow-hidden relative">
            <div
              className="w-8 h-full bg-black rounded-full absolute top-0 transition-transform duration-100"
              style={{ transform: `translateX(${scrollProgress}px)` }}
            />
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
              aria-label={t.home?.trustpilot?.prevAria || "Avis précédent"}
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
              aria-label={t.home?.trustpilot?.nextAria || "Avis suivant"}
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
