import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { SearchModal } from './components/SearchModal';
import { CountryDialog } from './components/CountryDialog';
import { CartDrawer } from './components/CartDrawer';
import { AccountModal } from './components/AccountModal';
import { OrderTrackingModal } from './components/OrderTrackingModal';
import { ProductSection } from './components/ProductSection';
import { StickyInsideNav } from './components/StickyInsideNav';
import { FeatureGridSection } from './components/FeatureGridSection';
import { KolShowcaseSection } from './components/KolShowcaseSection';
import { TechnologySection } from './components/TechnologySection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { ClampSetupSection } from './components/ClampSetupSection';
import { UniversalFitSection } from './components/UniversalFitSection';
import { SafetyShieldSection } from './components/SafetyShieldSection';
import { VsComparisonSection } from './components/VsComparisonSection';
import { PortabilitySection } from './components/PortabilitySection';
import { BatteryPowerSection } from './components/BatteryPowerSection';
import { SpecComparisonTable } from './components/SpecComparisonTable';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { WhatsInTheBoxSection } from './components/WhatsInTheBoxSection';
import { VideoGuideSection } from './components/VideoGuideSection';
import { AthletesPressSection } from './components/AthletesPressSection';
import { TrustpilotWidget } from './components/TrustpilotWidget';
import { JudgeMeReviews } from './components/JudgeMeReviews';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';

import { ProductVariant, AccessoryOption, CartItem } from './types';
import { PRODUCT_VARIANTS } from './data';
import { trackTikTokAddToCart } from './utils/tiktokPixel';

export const PRODUCT_ROUTE = '/products/hydro-propulseur-de-natation-contre-courant-haute-performance-1000w-autonomie-pro-pack-complet';

const getInitialPage = (): 'home' | 'product' => {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname;
    if (path === PRODUCT_ROUTE || path.startsWith('/products') || path.includes('hydro-propulseur') || path.includes('swim-jet') || path.includes('jet-de-natation')) {
      return 'product';
    }
  }
  return 'home';
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'product'>(getInitialPage);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(PRODUCT_VARIANTS[0]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [currentCountry, setCurrentCountry] = useState('FR');

  React.useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === PRODUCT_ROUTE || path.startsWith('/products') || path.includes('hydro-propulseur') || path.includes('swim-jet') || path.includes('jet-de-natation')) {
        setCurrentPage('product');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToProduct = (_handle?: string) => {
    if (typeof window !== 'undefined' && window.location.pathname !== PRODUCT_ROUTE) {
      window.history.pushState({}, '', PRODUCT_ROUTE);
    }
    setCurrentPage('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    if (typeof window !== 'undefined' && window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
    }
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (
    variant: ProductVariant,
    quantity: number,
    _selectedAccessories: { acc: AccessoryOption; qty: number; variantId?: string }[] = []
  ) => {
    // TikTok Pixel: AddToCart tracking on actual user action
    trackTikTokAddToCart({
      id: variant.id,
      name: variant.name,
      price: variant.price,
      quantity,
      currency: 'EUR'
    });

    const newItems = [...cartItems];

    // Add or update main product
    const existingIndex = newItems.findIndex((item) => item.id === variant.id);
    if (existingIndex > -1) {
      newItems[existingIndex].quantity += quantity;
    } else {
      newItems.push({
        id: variant.id,
        title: variant.name,
        variantTitle: variant.shortName,
        price: variant.price,
        originalPrice: variant.originalPrice,
        image: variant.images[0],
        quantity,
        discountCode: variant.couponCode,
        checkoutUrl: variant.checkoutUrl
      });
    }

    setCartItems(newItems);
    setIsCartOpen(true);
  };

  const handleUpdateCartQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#121212] font-['Figtree'] selection:bg-[#0071E3] selection:text-white">
      {/* Top Announcement Bar */}
      <AnnouncementBar onOpenCountryDialog={() => setIsCountryOpen(true)} />

      {/* Main Header & Navigation */}
      <Header
        cartItems={cartItems}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCountryDialog={() => setIsCountryOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        onOpenTracking={() => setIsTrackingOpen(true)}
        onNavigateToProduct={navigateToProduct}
        onNavigateToHome={navigateToHome}
      />

      <main className="flex-1">
        {currentPage === 'home' ? (
          /* ================= FULL HOME PAGE RECONSTRUCTION ================= */
          <Home onNavigateToProduct={navigateToProduct} />
        ) : (
          /* ================= PRODUCT DETAIL PAGE ================= */
          <>
            {/* Main Hero Product Section */}
            <ProductSection
              selectedVariant={selectedVariant}
              onSelectVariant={setSelectedVariant}
              onAddToCart={handleAddToCart}
            />

            {/* Sticky Anchor & SKU Inside Nav */}
            <StickyInsideNav
              selectedVariant={selectedVariant}
              onSelectVariant={setSelectedVariant}
              onAddToCart={() => handleAddToCart(selectedVariant, 1, [])}
            />

            {/* Feature Grid / Aperçu (Kickstarter proof & Bento grid) */}
            <FeatureGridSection />

            {/* KOL Showcase Slider & Video modal */}
            <KolShowcaseSection />

            {/* Inverter Tech & Performance specs */}
            <TechnologySection />

            {/* Daily Laps & Fun Advantages */}
            <AdvantagesSection />

            {/* 1-Minute Clamp Setup */}
            <ClampSetupSection />

            {/* Universal Pool Fit Section */}
            <UniversalFitSection />

            {/* 360 Safety Shield */}
            <SafetyShieldSection />

            {/* Comparison vs Traditional Pools */}
            <VsComparisonSection />

            {/* Portability & Storage */}
            <PortabilitySection />

            {/* Battery Power Lithium Core */}
            <BatteryPowerSection />

            {/* Comparison Specs Table */}
            <SpecComparisonTable onSelectVariant={setSelectedVariant} />

            {/* Why Choose Us Section */}
            <WhyChooseUsSection />

            {/* What's In The Box Section */}
            <WhatsInTheBoxSection />

            {/* Video Guide Setup */}
            <VideoGuideSection />

            {/* Elite Athletes Testimonials & Press Tickers */}
            <AthletesPressSection />

            {/* Trustpilot 4.7 Reviews Slider */}
            <TrustpilotWidget />

            {/* Judge.me Customer Reviews & Write Review Modal */}
            <JudgeMeReviews />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenCountryDialog={() => setIsCountryOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        onOpenTracking={() => setIsTrackingOpen(true)}
        onNavigateToProduct={navigateToProduct}
        onNavigateToHome={navigateToHome}
      />

      {/* Modals & Floating Tools */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigateToProduct={navigateToProduct}
      />
      
      <CountryDialog
        isOpen={isCountryOpen}
        onClose={() => setIsCountryOpen(false)}
        currentCountry={currentCountry}
        onSelectCountry={setCurrentCountry}
      />

      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        onOpenTracking={() => {
          setIsAccountOpen(false);
          setIsTrackingOpen(true);
        }}
      />

      <OrderTrackingModal
        isOpen={isTrackingOpen}
        onClose={() => setIsTrackingOpen(false)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onAddAccessory={() => {}}
      />

      <FloatingWidgets onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}
