import React, { useState } from 'react';
import { I18nProvider, useI18n } from './i18n/I18nContext';
import { RegionLanguageModal } from './components/RegionLanguageModal';
import { InitialMarketPopup } from './components/InitialMarketPopup';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { SearchModal } from './components/SearchModal';
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

function AppContent() {
  const {
    currentLanguage,
    pageType,
    navigateToPage,
    isRegionModalOpen,
    openRegionModal,
    closeRegionModal,
    swimJetPrice,
    formatPrice
  } = useI18n();

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(PRODUCT_VARIANTS[0]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);

  const navigateToProduct = (_handle?: string) => {
    navigateToPage('product');
  };

  const navigateToHome = () => {
    navigateToPage('home');
  };

  const handleAddToCart = (
    variant: ProductVariant,
    quantity: number,
    _selectedAccessories: { acc: AccessoryOption; qty: number; variantId?: string }[] = []
  ) => {
    // Track TikTok Pixel AddToCart event
    trackTikTokAddToCart(quantity);

    const newItems = [...cartItems];

    // Add or update main product with active market checkout URL and localized price
    const existingIndex = newItems.findIndex((item) => item.id === variant.id);
    const activeCheckoutUrl = swimJetPrice.checkoutUrl || variant.checkoutUrl;
    const activePrice = swimJetPrice.price || variant.price;
    const activeOriginalPrice = swimJetPrice.originalPrice || variant.originalPrice;

    if (existingIndex > -1) {
      newItems[existingIndex].quantity += quantity;
      newItems[existingIndex].checkoutUrl = activeCheckoutUrl;
      newItems[existingIndex].price = activePrice;
      newItems[existingIndex].originalPrice = activeOriginalPrice;
    } else {
      newItems.push({
        id: variant.id,
        title: variant.name,
        variantTitle: variant.shortName,
        price: activePrice,
        originalPrice: activeOriginalPrice,
        image: variant.images[0],
        quantity,
        discountCode: variant.couponCode,
        checkoutUrl: activeCheckoutUrl
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
    <div
      className="min-h-screen flex flex-col bg-white text-[#121212] font-sans selection:bg-[#0071E3] selection:text-white"
      dir={currentLanguage.direction}
    >
      {/* Top Announcement Bar */}
      <AnnouncementBar onOpenCountryDialog={openRegionModal} />

      {/* Main Header & Navigation */}
      <Header
        cartItems={cartItems}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCountryDialog={openRegionModal}
        onOpenAccount={() => setIsAccountOpen(true)}
        onOpenTracking={() => setIsTrackingOpen(true)}
        onNavigateToProduct={navigateToProduct}
        onNavigateToHome={navigateToHome}
      />

      <main className="flex-1">
        {pageType === 'home' ? (
          /* ================= HOME PAGE ================= */
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

            {/* Feature Grid / Overview */}
            <FeatureGridSection />

            {/* KOL Showcase Slider */}
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
        onOpenCountryDialog={openRegionModal}
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

      {/* Advanced Multi-Region / Language / Currency Modal */}
      <RegionLanguageModal
        isOpen={isRegionModalOpen}
        onClose={closeRegionModal}
      />

      {/* Automatic Geolocation Confirmation Popup */}
      <InitialMarketPopup />

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

      <FloatingWidgets />
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  );
}
