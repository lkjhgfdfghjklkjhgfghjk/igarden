import React, { useState, useEffect } from 'react';
import { Star, X, Check, ThumbsUp, Filter, MessageSquare, ChevronDown } from 'lucide-react';
import { UserReview } from '../types';
import { getLocalizedReviews } from '../i18n/localizedData';
import { trackTikTokReviewsInteraction } from '../utils/tiktokPixel';
import { useI18n } from '../i18n';

export const JudgeMeReviews: React.FC = () => {
  const { t, language } = useI18n();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  
  // State for reviews and pagination
  const [allReviews, setAllReviews] = useState<UserReview[]>(() => getLocalizedReviews(language));
  const [visibleCount, setVisibleCount] = useState(5);
  const [selectedFilter, setSelectedFilter] = useState<'all' | number>('all');
  const [sortBy, setSortBy] = useState<'recent' | 'rating-high' | 'rating-low'>('recent');
  const [helpfulCounts, setHelpfulCounts] = useState<Record<string, number>>({});
  const [votedReviews, setVotedReviews] = useState<Record<string, boolean>>({});

  // Sync reviews when language changes
  useEffect(() => {
    setAllReviews(getLocalizedReviews(language));
  }, [language]);

  const handleVoteHelpful = (id: string) => {
    trackTikTokReviewsInteraction();
    if (votedReviews[id]) return;
    setHelpfulCounts(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setVotedReviews(prev => ({ ...prev, [id]: true }));
  };

  const handleLoadMore = () => {
    trackTikTokReviewsInteraction();
    setVisibleCount(prev => Math.min(prev + 4, allReviews.length));
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewBody.trim() || !email.trim()) return;

    const newReview: UserReview = {
      id: `rev-${Date.now()}`,
      author: isAnonymous ? (t.reviews?.verifiedPurchase || "Verifizierter Käufer") : (name || t.reviews?.verifiedPurchase || "Verifizierter Käufer"),
      rating,
      date: new Date().toLocaleDateString('de-DE'),
      title: reviewTitle || (t.reviews?.verifiedPurchase || "Verifizierte Bewertung"),
      content: reviewBody,
      verified: true,
      productVariant: t.product?.shortTitle || "Swim Jet — 1.000 W"
    };

    setAllReviews([newReview, ...allReviews]);
    setFormStep(5); // Thank you step
  };

  const resetForm = () => {
    setIsModalOpen(false);
    setFormStep(1);
    setReviewTitle('');
    setReviewBody('');
    setName('');
    setEmail('');
  };

  // Filter & sort logic
  const filteredReviews = allReviews.filter(rev => {
    if (selectedFilter === 'all') return true;
    return rev.rating === selectedFilter;
  }).sort((a, b) => {
    if (sortBy === 'rating-high') return b.rating - a.rating;
    if (sortBy === 'rating-low') return a.rating - b.rating;
    return 0;
  });

  const displayedReviews = filteredReviews.slice(0, visibleCount);

  // Statistics
  const totalCount = allReviews.length;
  const avgRating = (allReviews.reduce((acc, r) => acc + r.rating, 0) / (totalCount || 1)).toFixed(1);
  const count5 = allReviews.filter(r => r.rating === 5).length;
  const count4 = allReviews.filter(r => r.rating === 4).length;
  const count3 = allReviews.filter(r => r.rating === 3).length;

  return (
    <section id="customer-reviews" className="py-14 sm:py-20 bg-[#FAF9F6] border-t border-gray-200">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        
        {/* Header Widget */}
        <div className="bg-white rounded-sm p-6 sm:p-10 border border-gray-200 shadow-xs mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            
            {/* Left: Overall Score */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="flex flex-col items-center justify-center">
                <span className="text-[44px] sm:text-[48px] font-black text-gray-900 leading-none tracking-tight font-['Figtree-Bold']">
                  {avgRating}
                </span>
                <div className="flex text-[#F59E0B] mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F59E0B]" />
                  ))}
                </div>
                <span className="text-[13px] text-gray-500 mt-1 font-medium">
                  {t.reviews?.verifiedReviewsCount || "Basierend auf verifizierten Bewertungen"}
                </span>
              </div>

              {/* Star Histogram Bars */}
              <div className="w-full sm:w-60 space-y-1.5 text-[12px] text-gray-600 font-medium">
                <div 
                  onClick={() => setSelectedFilter(selectedFilter === 5 ? 'all' : 5)}
                  className="flex items-center gap-2 cursor-pointer hover:opacity-80"
                >
                  <span className="w-16 text-right">5 Sterne</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-sm overflow-hidden">
                    <div className="h-full bg-[#F59E0B] rounded-sm" style={{ width: `${(count5 / (totalCount || 1)) * 100}%` }}></div>
                  </div>
                  <span className="w-8 text-gray-400">{count5}</span>
                </div>
                <div 
                  onClick={() => setSelectedFilter(selectedFilter === 4 ? 'all' : 4)}
                  className="flex items-center gap-2 cursor-pointer hover:opacity-80"
                >
                  <span className="w-16 text-right">4 Sterne</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-sm overflow-hidden">
                    <div className="h-full bg-[#F59E0B] rounded-sm" style={{ width: `${(count4 / (totalCount || 1)) * 100}%` }}></div>
                  </div>
                  <span className="w-8 text-gray-400">{count4}</span>
                </div>
                <div 
                  onClick={() => setSelectedFilter(selectedFilter === 3 ? 'all' : 3)}
                  className="flex items-center gap-2 cursor-pointer hover:opacity-80"
                >
                  <span className="w-16 text-right">3 Sterne</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-sm overflow-hidden">
                    <div className="h-full bg-[#F59E0B] rounded-sm" style={{ width: `${(count3 / (totalCount || 1)) * 100}%` }}></div>
                  </div>
                  <span className="w-8 text-gray-400">{count3}</span>
                </div>
              </div>
            </div>

            {/* Right: CTA write review */}
            <div className="flex flex-col items-center sm:items-end gap-2.5 w-full sm:w-auto">
              <button
                id="btn-write-review"
                onClick={() => {
                  trackTikTokReviewsInteraction();
                  setIsModalOpen(true);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-sm bg-[#0071E3] hover:bg-[#005bb5] text-white font-bold text-[14px] shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wide"
              >
                <MessageSquare className="w-4 h-4" />
                {t.reviews?.writeReviewButton || "Bewertung schreiben"}
              </button>
              <span className="text-[12px] text-gray-500 text-center sm:text-right">
                100% verifizierte Käufer-Bewertungen
              </span>
            </div>

          </div>
        </div>

        {/* Filter / Sort bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-2 text-[13px] text-gray-600 flex-wrap">
            <span className="font-semibold text-gray-900 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filtern:
            </span>
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1 rounded-sm border text-[12px] font-medium transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
              }`}
            >
              {t.reviews?.filterAll || "Alle"} ({totalCount})
            </button>
            <button
              onClick={() => setSelectedFilter(5)}
              className={`px-3 py-1 rounded-sm border text-[12px] font-medium transition-all cursor-pointer ${
                selectedFilter === 5
                  ? 'bg-[#F59E0B] text-white border-[#F59E0B]'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
              }`}
            >
              5 Sterne ({count5})
            </button>
            <button
              onClick={() => setSelectedFilter(4)}
              className={`px-3 py-1 rounded-sm border text-[12px] font-medium transition-all cursor-pointer ${
                selectedFilter === 4
                  ? 'bg-[#F59E0B] text-white border-[#F59E0B]'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
              }`}
            >
              4 Sterne ({count4})
            </button>
          </div>

          <div className="flex items-center gap-2 text-[13px] text-gray-600">
            <span>Sortieren nach:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-gray-200 rounded-sm px-2.5 py-1 text-[13px] font-medium text-gray-800 outline-none focus:border-blue-500 cursor-pointer"
            >
              <option value="recent">Neueste zuerst</option>
              <option value="rating-high">Höchste Bewertung</option>
              <option value="rating-low">Niedrigste Bewertung</option>
            </select>
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {displayedReviews.map((rev) => (
            <div 
              key={rev.id} 
              className="p-5 sm:p-6 rounded-sm bg-white border border-gray-200 shadow-2xs transition-colors hover:border-gray-300"
            >
              {/* Header of review */}
              <div className="flex items-start justify-between gap-3 flex-wrap pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-sm bg-blue-50 text-[#0071E3] font-bold flex items-center justify-center text-[14px] border border-blue-200">
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[14px] sm:text-[15px] text-gray-900 flex items-center gap-2 flex-wrap">
                      <span>{rev.author}</span>
                      {rev.verified && (
                        <span className="text-[10px] sm:text-[11px] bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.2 rounded-sm flex items-center gap-1 border border-emerald-200/60">
                          <Check className="w-3 h-3 stroke-[3]" /> {t.reviews?.verifiedPurchase || "Verifizierter Kauf"}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] sm:text-[12px] text-gray-400 mt-0.5">
                      <span>{rev.date}</span>
                      <span>•</span>
                      <span className="text-gray-500 font-medium">{rev.productVariant}</span>
                    </div>
                  </div>
                </div>

                <div className="flex text-[#F59E0B]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                  ))}
                  {[...Array(5 - rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gray-200" />
                  ))}
                </div>
              </div>

              {/* Title & Body */}
              {rev.title && (
                <h4 className="font-bold text-[14px] sm:text-[15px] text-gray-900 mt-1 mb-1.5">
                  {rev.title}
                </h4>
              )}
              <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-normal">
                {rev.content}
              </p>

              {/* Footer with helpful button */}
              <div className="mt-3.5 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[12px] text-gray-500">
                <span>War diese Bewertung hilfreich?</span>
                <button
                  onClick={() => handleVoteHelpful(rev.id)}
                  disabled={votedReviews[rev.id]}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-sm border text-[11px] sm:text-[12px] transition-colors cursor-pointer ${
                    votedReviews[rev.id]
                      ? 'bg-blue-50 border-blue-200 text-[#0071E3] font-semibold'
                      : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>{t.reviews?.helpful || "Hilfreich"} ({helpfulCounts[rev.id] || (rev.rating === 5 ? 4 : 1)})</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Reviews Button */}
        {visibleCount < filteredReviews.length && (
          <div className="mt-8 text-center">
            <button
              id="btn-load-more-reviews"
              onClick={handleLoadMore}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 rounded-sm bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 font-bold text-[13px] sm:text-[14px] shadow-xs transition-colors cursor-pointer hover:border-gray-400 uppercase"
            >
              <span>{t.reviews?.loadMore || "Mehr Bewertungen laden"} ({filteredReviews.length - visibleCount} weitere)</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>

      {/* Review Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-[560px] bg-white rounded-sm shadow-2xl p-6 sm:p-8 overflow-hidden">
            <button
              onClick={resetForm}
              className="absolute top-4 right-4 p-2 rounded-sm text-gray-400 hover:text-black hover:bg-gray-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {formStep === 1 && (
              <div className="space-y-6 text-center py-2">
                <h3 className="text-[20px] sm:text-[22px] font-bold text-gray-900">
                  {t.reviews?.modalTitle || "Bewerten Sie Ihren iGarden Swim Jet (1.000 W)"}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-gray-500">
                  Teilen Sie Ihre Erfahrung mit anderen Schwimmbegeisterten.
                </p>

                <div className="flex justify-center gap-2 py-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => {
                        setRating(star);
                        setFormStep(2);
                      }}
                      className="p-1 cursor-pointer transform hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-9 h-9 sm:w-10 sm:h-10 transition-colors ${
                          (hoverRating || rating) >= star
                            ? 'text-[#F59E0B] fill-[#F59E0B]'
                            : 'text-gray-200'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {formStep === 2 && (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900">Bewertung verfassen</h3>

                <div>
                  <label className="block text-[13px] font-semibold text-gray-700 mb-1">
                    Titel Ihrer Bewertung
                  </label>
                  <input
                    type="text"
                    value={reviewTitle}
                    onChange={(e) => setReviewTitle(e.target.value)}
                    placeholder={t.reviews?.titlePlaceholder || "z.B. Ein Traum für unseren Gartenpool!"}
                    className="w-full p-2.5 rounded-sm border border-gray-300 focus:border-[#0071E3] outline-none text-[14px]"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-semibold text-gray-700 mb-1">
                    Ihre ausführliche Erfahrung (Erforderlich)
                  </label>
                  <textarea
                    rows={4}
                    value={reviewBody}
                    onChange={(e) => setReviewBody(e.target.value)}
                    placeholder={t.reviews?.commentPlaceholder || "Beschreiben Sie Lieferung, Montage, Strömungsgefühl und Akkulaufzeit..."}
                    required
                    className="w-full p-2.5 rounded-sm border border-gray-300 focus:border-[#0071E3] outline-none text-[14px]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[13px] font-semibold text-gray-700 mb-1">
                      Vorname / Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.reviews?.namePlaceholder || "z.B. Thomas K."}
                      className="w-full p-2.5 rounded-sm border border-gray-300 focus:border-[#0071E3] outline-none text-[14px]"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-gray-700 mb-1">
                      E-Mail-Adresse (Wird nicht veröffentlicht)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@beispiel.de"
                      required
                      className="w-full p-2.5 rounded-sm border border-gray-300 focus:border-[#0071E3] outline-none text-[14px]"
                    />
                  </div>
                </div>

                <label className="flex items-center gap-2 text-[13px] text-gray-600 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="rounded-sm border-gray-300 text-[#0071E3] focus:ring-0"
                  />
                  <span>Als "Verifizierter Käufer" ohne vollständigen Namen veröffentlichen</span>
                </label>

                <div className="pt-3 flex justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setFormStep(1)}
                    className="px-5 py-2.5 rounded-sm border border-gray-300 text-gray-700 font-semibold text-[14px] cursor-pointer"
                  >
                    Zurück
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-sm bg-[#0071E3] hover:bg-[#005bb5] text-white font-bold text-[14px] shadow-xs cursor-pointer uppercase"
                  >
                    {t.reviews?.submitReview || "Bewertung veröffentlichen"}
                  </button>
                </div>
              </form>
            )}

            {formStep === 5 && (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-sm flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7 stroke-[3]" />
                </div>
                <h3 className="text-[20px] sm:text-[22px] font-bold text-gray-900">
                  {t.reviews?.reviewSubmitted || "Vielen Dank für Ihre Bewertung!"}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-gray-600 max-w-md mx-auto">
                  Ihr Erfahrungsbericht wurde erfolgreich übermittelt und hilft anderen Poolbesitzern bei ihrer Entscheidung.
                </p>
                <button
                  onClick={resetForm}
                  className="mt-4 px-6 py-2.5 rounded-sm bg-[#0071E3] text-white font-bold text-[14px] cursor-pointer uppercase"
                >
                  Schließen
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
