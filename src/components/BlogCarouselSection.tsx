import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BLOG_ARTICLES_DATA } from '../homeData';
import { useI18n } from '../i18n/I18nContext';

export const BlogCarouselSection: React.FC = () => {
  const { currentLanguage } = useI18n();
  const scrollRef = useRef<HTMLDivElement>(null);

  const articles = currentLanguage.id === 'ar' ? BLOG_ARTICLES_DATA.ar : BLOG_ARTICLES_DATA.en;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 sm:py-20 bg-white overflow-hidden" dir={currentLanguage.direction}>
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-[24px] sm:text-[34px] md:text-[40px] font-extrabold text-black tracking-tight">
            {currentLanguage.id === 'ar' ? 'مقالات وأخبار آي جاردن' : 'Dive into iGarden News & Guides'}
          </h2>
        </div>

        {/* Blog Cards Swiper */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto pb-4 no-scrollbar scroll-smooth"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[270px] sm:w-[320px] flex flex-col group cursor-pointer"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Thumbnail */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-100 mb-3">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className="flex-1 flex flex-col justify-between space-y-2">
                <h3 className="font-bold text-[15px] sm:text-[17px] text-gray-900 line-clamp-2 leading-snug group-hover:text-[#0071E3] transition-colors">
                  {article.title}
                </h3>
                <p className="text-[12px] sm:text-[13px] text-gray-500 line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>
                <span className="text-[11px] sm:text-[12px] font-semibold text-gray-400">
                  {article.date}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between mt-8 pt-2">
          {/* Scrollbar pill */}
          <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="w-6 h-full bg-black/60 rounded-full" />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
              aria-label="Previous article"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-gray-700 transition-colors cursor-pointer"
              aria-label="Next article"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
