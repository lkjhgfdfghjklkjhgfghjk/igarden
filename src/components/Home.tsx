import React from 'react';
import { HeroCarousel } from './HeroCarousel';
import { TrustBar } from './TrustBar';
import { ProductCardFlexSwimJet } from './ProductCardFlexSwimJet';
import { TestimonialsCarousel1 } from './TestimonialsCarousel1';
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
      {/* 1. Hero Carousel (Swim Jet slides + timer + CTAs) */}
      <HeroCarousel onNavigateToProduct={() => onNavigateToProduct()} />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Jet de natation Section Banner */}
      <ProductCardFlexSwimJet onNavigateToProduct={() => onNavigateToProduct()} />

      {/* 4. Testimonials Carousel */}
      <TestimonialsCarousel1 />

      {/* 5. Trustpilot Reviews Widget */}
      <TrustpilotReviewWidget />

      {/* 6. KOL Video Showcase (Swim Jet only) */}
      <HomeKolShowcase />

      {/* 7. Awards & Press Recognitions */}
      <AwardsRecognitionsSection />

      {/* 8. Bento Feature Grid */}
      <FeatureGridBento />

      {/* 9. Blog & News Carousel */}
      <BlogCarouselSection />
    </div>
  );
};

