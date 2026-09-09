import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { trackTikTokReviewsInteraction } from '../utils/tiktokPixel';
import { useI18n, getLocalizedReviews } from '../i18n';

export const TrustpilotWidget: React.FC = () => {
  const { t, language } = useI18n();
  const reviews = getLocalizedReviews(language);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    trackTikTokReviewsInteraction();
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    trackTikTokReviewsInteraction();
    setCurrentIndex((prev) => Math.min(reviews.length - 1, prev + 1));
  };

  return (
    <section id="Avis" className="py-16 sm:py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-14">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <img referrerPolicy="no-referrer"
              src="https://eu.store.igarden.ai/cdn/shop/files/ces-vector-left_svg.png?v=1784616357&width=100"
              alt=""
              className="h-8 sm:h-12 w-auto object-contain"
            />
            <h2 className="text-[26px] sm:text-[42px] font-bold text-gray-950 font-['Figtree'] m-0">
              {t.reviews.trustpilotTitle}
            </h2>
            <img referrerPolicy="no-referrer"
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
              {t.reviews.verifiedReviewsCount}
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
              <strong className="text-gray-900 font-bold ml-1">{t.reviews.averageScore}</strong>
            </div>
          </div>
        </div>

        {/* Reviews Carousel Cards */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.slice(currentIndex, currentIndex + 3).map((review) => (
              <div
                key={review.id}
                className="bg-[#FAFAFA] rounded-2xl p-6 sm:p-7 border border-gray-100 flex flex-col justify-between shadow-xs hover:shadow-md transition-all min-h-[280px]"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-[#0071E3] font-bold flex items-center justify-center text-[15px]">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-[15px] text-gray-900 flex items-center gap-1.5">
                          {review.author}
                          {review.verified && (
                            <CheckCircle2 className="w-4 h-4 text-[#00B67A]" />
                          )}
                        </div>
                        <time className="text-[12px] text-gray-400 font-medium block">{review.date}</time>
                      </div>
                    </div>
                  </div>

                  <div className="flex text-[#00B67A] gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-[#00B67A] rounded-xs flex items-center justify-center text-white">
                        <Star className="w-3 h-3 fill-white" />
                      </div>
                    ))}
                  </div>

                  {review.title && (
                    <h4 className="font-bold text-[15px] text-gray-900 line-clamp-1">
                      {review.title}
                    </h4>
                  )}

                  <p className="text-[14px] text-gray-600 leading-relaxed line-clamp-5 m-0">
                    "{review.content}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-3 rounded-full border border-gray-200 bg-white transition-all ${
                currentIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-50 hover:border-gray-300 cursor-pointer'
              }`}
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex + 3 >= reviews.length}
              className={`p-3 rounded-full border border-gray-200 bg-white transition-all ${
                currentIndex + 3 >= reviews.length ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-50 hover:border-gray-300 cursor-pointer'
              }`}
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
