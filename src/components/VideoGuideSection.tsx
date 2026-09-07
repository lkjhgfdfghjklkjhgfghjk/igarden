import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { trackTikTokVideoStart } from '../utils/tiktokPixel';

export const VideoGuideSection: React.FC = () => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const guides = [
    {
      id: "fOjOnNt07mM",
      title: "Installation étape par étape",
      poster: "https://eu.store.igarden.ai/cdn/shop/files/how-to-set-up-x-series.jpg?v=1785137633&width=3840"
    },
    {
      id: "az-UqGbfjDQ",
      title: "Configuration des broches de verrouillage",
      poster: "https://eu.store.igarden.ai/cdn/shop/files/how-to-set-up-locking-pins-on-the-handle.jpg?v=1785137633&width=3840"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-[24px] sm:text-[36px] font-bold text-gray-950 font-['Figtree'] leading-tight">
            Comment configurer votre iGarden Swim Jet X Series
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {guides.map((g) => (
            <div key={g.id} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-[#F5F5F7]">
              {playingVideoId === g.id ? (
                <div className="relative aspect-video w-full bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${g.id}?autoplay=1&enablejsapi=1`}
                    title={g.title}
                    className="w-full h-full border-0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                  <button
                    onClick={() => setPlayingVideoId(null)}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-black/70 text-white hover:bg-black"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => {
                    trackTikTokVideoStart();
                    setPlayingVideoId(g.id);
                  }}
                  className="relative aspect-video w-full bg-black overflow-hidden cursor-pointer group"
                >
                  <img src={g.poster} alt={g.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-xs group-hover:scale-110 transition-transform shadow-xl">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>
                </div>
              )}

              <div className="p-5 text-center font-bold text-[16px] sm:text-[18px] text-gray-900">
                <span>{g.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
