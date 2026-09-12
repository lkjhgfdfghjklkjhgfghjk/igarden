import React from 'react';

export const AdvantagesSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-14 space-y-16 sm:space-y-24">
        {/* Section Part 1: Daily laps */}
        <div>
          <div className="mb-6">
            <h2 className="text-[26px] sm:text-[36px] font-bold text-gray-900 font-['Figtree'] mb-2">
              Maîtrisez vos tours quotidiens
            </h2>
            <p className="text-[16px] sm:text-[20px] text-gray-500 font-medium">
              Convient pour le papillon, le style libre et la brasse.
            </p>
          </div>

          <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-black">
            <video
              src="https://eu.store.igarden.ai/cdn/shop/videos/c/vp/5255ee42759148eeaf38d34749a3e7e0/5255ee42759148eeaf38d34749a3e7e0.HD-1080p-7.2Mbps-83841548.mp4?v=0"
              poster="https://eu.store.igarden.ai/cdn/shop/files/preview_images/5255ee42759148eeaf38d34749a3e7e0.thumbnail.0000000000_2000x.jpg?v=1778492878"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto aspect-video object-cover"
            />
          </div>
        </div>

        {/* Section Part 2: Dual Grid (Joy & Relaxation) */}
        <div>
          <div className="mb-8">
            <h2 className="text-[26px] sm:text-[36px] font-bold text-gray-900 font-['Figtree']">
              Pure joie, pure détente
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
            {/* Card 1: Pets */}
            <div className="space-y-4">
              <div className="w-full rounded-2xl overflow-hidden shadow-md bg-black">
                <video
                  src="https://eu.store.igarden.ai/cdn/shop/videos/c/vp/c40fa0f42c6a484d9efebbc6016d722a/c40fa0f42c6a484d9efebbc6016d722a.HD-1080p-7.2Mbps-83841701.mp4?v=0"
                  poster="https://eu.store.igarden.ai/cdn/shop/files/preview_images/c40fa0f42c6a484d9efebbc6016d722a.thumbnail.0000000000_2000x.jpg?v=1778493002"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto aspect-video object-cover max-h-[380px]"
                />
              </div>
              <div>
                <h3 className="text-[20px] sm:text-[24px] font-bold text-gray-900 mb-2">
                  Jeu actif pour vos animaux de compagnie
                </h3>
                <p className="text-[15px] sm:text-[18px] text-gray-600">
                  Offrez à vos amis à quatre pattes un entraînement rafraîchissant et à faible impact pour préserver leurs articulations.
                </p>
              </div>
            </div>

            {/* Card 2: Party */}
            <div className="space-y-4">
              <div className="w-full rounded-2xl overflow-hidden shadow-md bg-black">
                <video
                  src="https://eu.store.igarden.ai/cdn/shop/videos/c/vp/815d748d384d4e6c86ced75e947a84fc/815d748d384d4e6c86ced75e947a84fc.HD-1080p-7.2Mbps-83842643.mp4?v=0"
                  poster="https://eu.store.igarden.ai/cdn/shop/files/preview_images/815d748d384d4e6c86ced75e947a84fc.thumbnail.0000000000_2000x.jpg?v=1778493488"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto aspect-video object-cover max-h-[380px]"
                />
              </div>
              <div>
                <h3 className="text-[20px] sm:text-[24px] font-bold text-gray-900 mb-2">
                  Alimentez l’ambiance de fête
                </h3>
                <p className="text-[15px] sm:text-[18px] text-gray-600">
                  Transformez n'importe quel rassemblement en un événement dynamique avec un courant constant et invitant qui fait bouger tout le monde.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
