import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TRUSTPILOT_REVIEWS } from '../data';
import { useI18n } from '../i18n/I18nContext';

export const TrustpilotWidget: React.FC = () => {
  const { currentLanguage } = useI18n();
  const isAr = currentLanguage.id === 'ar';
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(TRUSTPILOT_REVIEWS.length - 1, prev + 1));
  };

  return (
    <section id="Avis" className="py-16 sm:py-24 bg-white border-t border-gray-100" dir={currentLanguage.direction}>
      <div className="max-w-[1500px] mx-auto px-4 sm:px-14">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <img
              src="https://eu.store.igarden.ai/cdn/shop/files/ces-vector-left_svg.png?v=1784616357&width=100"
              alt=""
              className="h-8 sm:h-12 w-auto object-contain"
            />
            <h2 className="text-[26px] sm:text-[42px] font-bold text-gray-950 font-['Figtree'] m-0">
              {isAr ? 'تقييمات تراست بايلوت المعتمدة' : 'Verified Trustpilot Reviews'}
            </h2>
            <img
              src="https://eu.store.igarden.ai/cdn/shop/files/ces-vector-right_svg.png?v=1784616357&width=100"
              alt=""
              className="h-8 sm:h-12 w-auto object-contain"
            />
          </div>

          <div className="flex items-center gap-3 text-[16px] sm:text-[18px] text-gray-600 font-medium">
            <a
              href="https://www.trustpilot.com/review/igarden.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold hover:text-[#0071E3]"
            >
              {isAr ? '223 تقييماً موثقاً' : '223 Verified Reviews'}
            </a>
            <span>•</span>
            <div className="flex items-center gap-1">
              <div className="flex text-[#00B67A]">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-[#00B67A] rounded-xs flex items-center justify-center text-white mr-0.5">
                    <Star className="w-3.5 h-3.5 fill-white" />
                  </div>
                ))}
              </div>
              <strong className="text-gray-900 font-bold ml-1">4.7 / 5</strong>
            </div>
          </div>
        </div>

        {/* Reviews Carousel Cards */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRUSTPILOT_REVIEWS.slice(currentIndex, currentIndex + 3).map((review) => (
              <div
                key={review.id}
                className="bg-[#FAFAFA] rounded-2xl p-6 sm:p-7 border border-gray-100 flex flex-col justify-between shadow-xs hover:shadow-md transition-all h-[360px]"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover border border-gray-200"
                    />
                    <div>
                      <div className="font-bold text-[16px] text-gray-900">{review.name}</div>
                      <time className="text-[12px] text-gray-400 font-medium block">{review.date}</time>
                    </div>
                  </div>

                  <div className="flex text-[#00B67A] gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-[#00B67A] rounded-xs flex items-center justify-center text-white">
                        <Star className="w-3.5 h-3.5 fill-white" />
                      </div>
                    ))}
                  </div>

                  <p className="text-[14px] text-gray-600 leading-relaxed line-clamp-6 m-0">
                    "{review.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-10 pt-4 border-t border-gray-100">
            <div className="w-20 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gray-800 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 3) / TRUSTPILOT_REVIEWS.length) * 100}%` }}
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-gray-700 cursor-pointer"
                aria-label="Previous reviews"
              >
                <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex + 3 >= TRUSTPILOT_REVIEWS.length}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-gray-700 cursor-pointer"
                aria-label="Next reviews"
              >
                <ChevronRight className="w-5 h-5 rtl:rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
