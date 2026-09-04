import React from 'react';
import { HeroCarousel } from './HeroCarousel';
import { TrustBar } from './TrustBar';
import { ProductCardFlexSwimJet } from './ProductCardFlexSwimJet';
import { TestimonialsCarousel1 } from './TestimonialsCarousel1';
import { ProductCardFlexM1 } from './ProductCardFlexM1';
import { ProductCardsGridPool } from './ProductCardsGridPool';
import { TestimonialsCarousel2 } from './TestimonialsCarousel2';
import { ProductCardFlexMower } from './ProductCardFlexMower';
import { TrustpilotReviewWidget } from './TrustpilotReviewWidget';
import { HomeKolShowcase } from './HomeKolShowcase';
import { AwardsRecognitionsSection } from './AwardsRecognitionsSection';
import { FeatureGridBento } from './FeatureGridBento';
import { BlogCarouselSection } from './BlogCarouselSection';

interface HomeProps {
  onNavigateToProduct: (handle?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigateToProduct }) => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* 1. Hero Carousel (6 slides + countdown timer + CTAs) */}
      <HeroCarousel onNavigateToProduct={() => onNavigateToProduct()} />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Jet de natation Section Banner */}
      <ProductCardFlexSwimJet onNavigateToProduct={() => onNavigateToProduct()} />

      {/* 4. Testimonials Carousel #1 */}
      <TestimonialsCarousel1 />

      {/* 5. Nettoyeur de piscine Banner (M1-AI) */}
      <ProductCardFlexM1 onNavigateToProduct={() => onNavigateToProduct()} />

      {/* 6. Pool Cleaners Grid (Série K & Série KN) */}
      <ProductCardsGridPool onNavigateToProduct={(handle) => onNavigateToProduct(handle)} />

      {/* 7. Testimonials Carousel #2 */}
      <TestimonialsCarousel2 />

      {/* 8. Tondeuse à gazon Banner (Série R) */}
      <ProductCardFlexMower onNavigateToProduct={() => onNavigateToProduct()} />

      {/* 9. Trustpilot Reviews Widget */}
      <TrustpilotReviewWidget />

      {/* 10. KOL Video Showcase */}
      <HomeKolShowcase />

      {/* 11. Awards & Press Recognitions */}
      <AwardsRecognitionsSection />

      {/* 12. Bento Feature Grid */}
      <FeatureGridBento />

      {/* 13. Blog & News Carousel */}
      <BlogCarouselSection />
    </div>
  );
};
