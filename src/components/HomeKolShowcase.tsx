import React, { useState, useEffect } from 'react';
import { Play, X, ArrowLeft, ArrowRight } from 'lucide-react';
import { HOME_KOL_VIDEOS } from '../homeData';

// Helper to safely parse and normalize any video URL (MP4, YouTube, Vimeo, etc.)
function getVideoEmbedInfo(url: string) {
  if (!url) return { type: 'mp4', embedUrl: '' };

  // YouTube match: standard, short, embed, shorts
  const ytMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|shorts\/)|youtu\.be\/)([^"&?\/\s]{11})/);
  if (ytMatch && ytMatch[1]) {
    return {
      type: 'youtube' as const,
      embedUrl: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0&playsinline=1&modestbranding=1`
    };
  }

  // Vimeo match
  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?([0-9]+)/);
  if (vimeoMatch && vimeoMatch[1]) {
    return {
      type: 'vimeo' as const,
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`
    };
  }

  // Direct MP4 / video stream
  return {
    type: 'mp4' as const,
    embedUrl: url
  };
}

export const HomeKolShowcase: React.FC = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeVideoIndex === null) return;

      if (e.key === 'Escape') {
        setActiveVideoIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setActiveVideoIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : HOME_KOL_VIDEOS.length - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveVideoIndex((prev) => (prev !== null && prev < HOME_KOL_VIDEOS.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeVideoIndex]);

  const currentVideo = activeVideoIndex !== null ? HOME_KOL_VIDEOS[activeVideoIndex] : null;
  const currentVideoInfo = currentVideo ? getVideoEmbedInfo(currentVideo.videoUrl) : null;

  return (
    <section id="kol-showcase-section" className="py-12 sm:py-20 bg-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-14">
          <h2 className="text-[26px] sm:text-[34px] md:text-[40px] font-extrabold text-black tracking-tight font-['Figtree']">
            Apprécié par les vrais utilisateurs
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Découvrez tous les retours d'expérience et démonstrations authentiques de notre communauté avec les appareils iGarden.
          </p>
        </div>

        {/* All Videos Grid - All Available at once without needing arrow clicks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {HOME_KOL_VIDEOS.map((kol, idx) => (
            <div
              key={kol.id}
              onClick={() => setActiveVideoIndex(idx)}
              className="bg-[#F5F5F7] hover:bg-[#EBEBEF] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl border border-gray-200/80 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              {/* Video Thumbnail with Play Button */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full bg-black overflow-hidden">
                <img
                  src={kol.thumbnail}
                  alt={kol.author}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                  <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-black/60 backdrop-blur-xs border border-white/70 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#15803d] transition-all duration-300 shadow-xl">
                    <Play className="w-6 h-6 fill-white text-white ml-0.5" />
                  </div>
                </div>

                {/* Badge Vidéo */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xs text-[11px] font-medium text-white flex items-center gap-1.5 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  Vidéo
                </div>
              </div>

              {/* Author & Quote Info */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src={kol.avatar}
                    alt={kol.author}
                    className="w-10 h-10 rounded-full object-cover shrink-0 border border-white shadow-xs"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <h4 className="text-[15px] sm:text-[16px] font-bold text-gray-900 truncate">
                      {kol.author}
                    </h4>
                    <p className="text-[12px] text-gray-500 font-medium">{kol.followers}</p>
                  </div>
                </div>
                <p className="text-[13px] sm:text-[14px] text-gray-700 font-normal line-clamp-3 leading-relaxed">
                  "{kol.desc}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Player Modal with Smooth Switching and Controls */}
      {currentVideo && currentVideoInfo && (
        <div
          className="fixed inset-0 z-[999999] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setActiveVideoIndex(null)}
        >
          <div
            className="relative max-w-[860px] w-full bg-[#111] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Author Info and Close Button */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#181818] border-b border-white/10 text-white z-20">
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={currentVideo.avatar}
                  alt={currentVideo.author}
                  className="w-9 h-9 rounded-full object-cover border border-white/20"
                />
                <div className="min-w-0">
                  <div className="font-bold text-sm truncate">{currentVideo.author}</div>
                  <div className="text-xs text-gray-400">{currentVideo.followers}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Navigation Arrows in modal */}
                <button
                  onClick={() =>
                    setActiveVideoIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : HOME_KOL_VIDEOS.length - 1))
                  }
                  className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
                  title="Vidéo précédente (Flèche gauche)"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <span className="text-xs text-gray-400">
                  {(activeVideoIndex ?? 0) + 1} / {HOME_KOL_VIDEOS.length}
                </span>
                <button
                  onClick={() =>
                    setActiveVideoIndex((prev) => (prev !== null && prev < HOME_KOL_VIDEOS.length - 1 ? prev + 1 : 0))
                  }
                  className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
                  title="Vidéo suivante (Flèche droite)"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setActiveVideoIndex(null)}
                  className="ml-2 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Fermer la vidéo"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Video Container with Key for Clean Remounting */}
            <div className="relative w-full bg-black flex items-center justify-center min-h-[300px] max-h-[70vh] sm:max-h-[75vh]">
              {currentVideoInfo.type === 'youtube' || currentVideoInfo.type === 'vimeo' ? (
                <div className="w-full aspect-video">
                  <iframe
                    key={currentVideo.id}
                    src={currentVideoInfo.embedUrl}
                    title={currentVideo.author}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : (
                <video
                  key={currentVideo.id}
                  src={currentVideoInfo.embedUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full max-h-[70vh] object-contain"
                />
              )}
            </div>

            {/* Bottom Caption / Description */}
            <div className="p-4 bg-[#181818] border-t border-white/10 text-gray-300 text-xs sm:text-sm leading-relaxed">
              <p className="line-clamp-2 sm:line-clamp-3 italic">"{currentVideo.desc}"</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
