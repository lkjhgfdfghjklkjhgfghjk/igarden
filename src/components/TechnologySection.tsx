import React, { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-14">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-[26px] sm:text-[38px] font-bold text-gray-950 font-['Figtree'] leading-tight mb-2">
            Meilleur débit d'eau de sa catégorie
          </h2>
          <span className="text-[16px] sm:text-[20px] font-semibold text-gray-500">
            1 000 W de puissance — Compatible avec toutes les piscines
          </span>
        </div>

        {/* Video Player */}
        <div
          onClick={togglePlay}
          className="relative w-full rounded-2xl overflow-hidden bg-black aspect-video cursor-pointer group shadow-xl"
        >
          <video
            ref={videoRef}
            src="https://eu.store.igarden.ai/cdn/shop/videos/c/vp/12f105b781734df1bc9e6d5b87ec2097/12f105b781734df1bc9e6d5b87ec2097.HD-1080p-7.2Mbps-83841325.mp4?v=0"
            poster="https://eu.store.igarden.ai/cdn/shop/files/preview_images/12f105b781734df1bc9e6d5b87ec2097.thumbnail.0000000000.jpg?v=1778492653&width=1600"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />

          {!isPlaying && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-black/70 text-white flex items-center justify-center">
                <Play className="w-8 h-8 fill-white ml-1" />
              </div>
            </div>
          )}
        </div>

        {/* Spec Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 sm:mt-14 pt-6 border-t border-gray-100 text-center">
          <div className="p-4 border-b md:border-b-0 md:border-r border-gray-100">
            <span className="block text-[22px] sm:text-[28px] font-bold text-[#0071E3] font-['Figtree'] mb-2">
              Technologie d'onduleur IA
            </span>
            <span className="text-[15px] sm:text-[17px] text-gray-600">
              offre le débit d'eau le plus puissant et constant de sa catégorie
            </span>
          </div>

          <div className="p-4 border-b md:border-b-0 md:border-r border-gray-100">
            <span className="block text-[22px] sm:text-[28px] font-bold text-[#0071E3] font-['Figtree'] mb-2">
              Mode intelligent
            </span>
            <span className="text-[15px] sm:text-[17px] text-gray-600">
              moteur synchrone à aimant permanent de nouvelle génération
            </span>
          </div>

          <div className="p-4">
            <span className="block text-[22px] sm:text-[28px] font-bold text-[#0071E3] font-['Figtree'] mb-2">
              Flux en ligne droite
            </span>
            <span className="text-[15px] sm:text-[17px] text-gray-600">
              flux laminaire fluide calibré pour l'entraînement de précision
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
