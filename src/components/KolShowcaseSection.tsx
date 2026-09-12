import React, { useState, useEffect } from 'react';
import { Play, X, ArrowLeft, ArrowRight } from 'lucide-react';
import { KOL_VIDEOS } from '../data';

// Helper to safely parse and normalize any video URL (MP4, YouTube, Vimeo, etc.)
function getVideoEmbedInfo(url: string, videoType?: string) {
  if (!url) return { type: 'mp4', embedUrl: '' };

  // Check if explicit YouTube or matching YouTube URL pattern
  const ytMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|shorts\/)|youtu\.be\/)([^"&?\/\s]{11})/);
  if (ytMatch && ytMatch[1]) {
    return {
      type: 'youtube' as const,
      embedUrl: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0&playsinline=1&modestbranding=1`
    };
  }

  if (videoType === 'youtube' && url.includes('embed')) {
    return {
      type: 'youtube' as const,
      embedUrl: url
    };
  }

  // Vimeo
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

export const KolShowcaseSection: React.FC = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeVideoIndex === null) return;

      if (e.key === 'Escape') {
        setActiveVideoIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setActiveVideoIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : KOL_VIDEOS.length - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveVideoIndex((prev) => (prev !== null && prev < KOL_VIDEOS.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeVideoIndex]);

  const currentVideo = activeVideoIndex !== null ? KOL_VIDEOS[activeVideoIndex] : null;
  const currentVideoInfo = currentVideo ? getVideoEmbedInfo(currentVideo.videoUrl, currentVideo.videoType) : null;

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-14">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-[26px] sm:text-[40px] font-bold text-gray-900 font-['Figtree'] tracking-tight">
            Apprécié par les vrais utilisateurs
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            Retours d'expérience et démonstrations en conditions réelles par nos utilisateurs.
          </p>
        </div>

        {/* All Videos Grid - Available all at once */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {KOL_VIDEOS.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveVideoIndex(idx)}
              className="bg-[#FAFAFA] hover:bg-[#F3F4F6] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-200/70 flex flex-col justify-between"
            >
              {/* Thumbnail with Play Icon */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full bg-black overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.author}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-xs group-hover:scale-110 group-hover:bg-[#15803d] transition-all shadow-xl">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>

                {/* Badge Vidéo */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xs text-[11px] font-medium text-white flex items-center gap-1.5 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  Vidéo
                </div>
              </div>

              {/* Author Info & Quote */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <div className="font-bold text-[16px] text-gray-900 leading-snug truncate">{item.author}</div>
                    <div className="text-[13px] text-gray-500 font-medium">{item.followers}</div>
                  </div>
                </div>

                <p className="text-[14px] text-gray-600 line-clamp-3 leading-relaxed m-0 italic">
                  "{item.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Popup with Smooth Switching */}
      {currentVideo && currentVideoInfo && (
        <div
          className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveVideoIndex(null)}
        >
          <div
            className="relative w-full max-w-[860px] bg-[#111] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
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
                <button
                  onClick={() =>
                    setActiveVideoIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : KOL_VIDEOS.length - 1))
                  }
                  className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
                  title="Vidéo précédente"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <span className="text-xs text-gray-400">
                  {(activeVideoIndex ?? 0) + 1} / {KOL_VIDEOS.length}
                </span>
                <button
                  onClick={() =>
                    setActiveVideoIndex((prev) => (prev !== null && prev < KOL_VIDEOS.length - 1 ? prev + 1 : 0))
                  }
                  className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
                  title="Vidéo suivante"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setActiveVideoIndex(null)}
                  className="ml-2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Fermer la vidéo"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Video Container */}
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

            {/* Bottom Quote */}
            <div className="p-4 bg-[#181818] border-t border-white/10 text-gray-300 text-xs sm:text-sm leading-relaxed">
              <p className="line-clamp-2 sm:line-clamp-3 italic">"{currentVideo.quote}"</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
