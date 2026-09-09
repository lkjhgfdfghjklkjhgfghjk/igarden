export type SupportedLanguage = 'fr' | 'de' | 'es' | 'it' | 'en' | 'pt' | 'nl';

export type SupportedCountry =
  | 'FR'
  | 'DE'
  | 'AT'
  | 'CH'
  | 'ES'
  | 'IT'
  | 'PT'
  | 'NL'
  | 'BE'
  | 'LU'
  | 'GB'
  | 'IE'
  | 'US'
  | 'CA'
  | 'AU'
  | 'EU_EN';

export interface CountryInfo {
  code: SupportedCountry;
  name: string;
  nativeName: string;
  lang: SupportedLanguage;
  langLabel: string;
  currency: string;
  currencySymbol: string;
  flagUrl: string;
  shippingPartner: string;
  shippingTime: string;
}

export interface TranslationDictionary {
  // Metadata & Head
  meta: {
    title: string;
    description: string;
  };

  // Top Announcement Bar
  announcement: {
    specialOfferFull: string;
    specialOfferMobile: string;
    countryPickerLabel: string;
  };

  // Navigation & Header
  header: {
    backToSchoolSale: string;
    swimJet: string;
    poolCleaners: string;
    lawnMower: string;
    trackOrder: string;
    myAccount: string;
    searchPlaceholder: string;
    cart: string;
    menu: string;
    discountBadge: string;
    helpSupport: string;
    returnsRefunds: string;
    warranty: string;
    shippingPolicy: string;
    paymentMethods: string;
    blogGuides: string;
    partnerProgram: string;
    aboutUs: string;
  };

  // Main Hero Product Section
  product: {
    title: string;
    shortTitle: string;
    subtitle: string;
    ratingCount: string;
    orderCount24h: string;
    offerCountdown: string;
    hours: string;
    minutes: string;
    seconds: string;
    powerBadge: string;
    batteryBadge: string;
    universalBadge: string;
    price: string;
    originalPrice: string;
    discountSave: string;
    inStock: string;
    freeShippingColissimo: string;
    buyNowButton: string;
    addToCartButton: string;
    securePaymentNotice: string;
    guaranteeNotice: string;
    tabs: {
      description: string;
      specifications: string;
      shipping: string;
      warranty: string;
    };
    descriptionContent: {
      p1: string;
      p2: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
      bullet4: string;
    };
    specsContent: {
      power: string;
      powerVal: string;
      flowSpeed: string;
      flowSpeedVal: string;
      batteryLife: string;
      batteryLifeVal: string;
      waterproof: string;
      waterproofVal: string;
      compatibility: string;
      compatibilityVal: string;
      weight: string;
      weightVal: string;
      remote: string;
      remoteVal: string;
    };
    shippingContent: {
      title: string;
      carrier: string;
      tracking: string;
      returns: string;
    };
    warrantyContent: {
      title: string;
      duration: string;
      support: string;
    };
  };

  // Sticky Inside Navigation
  stickyNav: {
    overview: string;
    specs: string;
    reviews: string;
    trustpilot: string;
    orderNow: string;
    unitPrice: string;
  };

  // Feature Grid / Bento (Product page)
  features: {
    kickstarterBadge: string;
    title: string;
    subtitle: string;
    bento1Title: string;
    bento1Desc: string;
    bento2Title: string;
    bento2Desc: string;
    bento3Title: string;
    bento3Desc: string;
    bento4Title: string;
    bento4Desc: string;
    bento5Title: string;
    bento5Desc: string;
  };

  // KOL / Video Testimonials Section (Product page)
  kolSection: {
    badge: string;
    title: string;
    subtitle: string;
    watchVideo: string;
  };

  // Technology Section
  technology: {
    badge: string;
    title: string;
    subtitle: string;
    flowTitle: string;
    flowDesc: string;
    motorTitle: string;
    motorDesc: string;
    inverterTitle: string;
    inverterDesc: string;
  };

  // Advantages Section
  advantages: {
    badge: string;
    title: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
  };

  // Clamp Setup Section
  clampSetup: {
    badge: string;
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };

  // Universal Fit Section
  universalFit: {
    badge: string;
    title: string;
    subtitle: string;
    aboveGround: string;
    inGround: string;
    wooden: string;
    tubular: string;
  };

  // Safety Shield Section
  safety: {
    badge: string;
    title: string;
    subtitle: string;
    ip68Title: string;
    ip68Desc: string;
    voltageTitle: string;
    voltageDesc: string;
    antiSuctionTitle: string;
    antiSuctionDesc: string;
  };

  // Comparison Section
  vsComparison: {
    badge: string;
    title: string;
    subtitle: string;
    igardenTitle: string;
    traditionalTitle: string;
    costLabel: string;
    costIgarden: string;
    costTrad: string;
    installLabel: string;
    installIgarden: string;
    installTrad: string;
    portabilityLabel: string;
    portabilityIgarden: string;
    portabilityTrad: string;
    maintenanceLabel: string;
    maintenanceIgarden: string;
    maintenanceTrad: string;
  };

  // Portability Section
  portability: {
    badge: string;
    title: string;
    subtitle: string;
    wheelsTitle: string;
    wheelsDesc: string;
    weightTitle: string;
    weightDesc: string;
  };

  // Battery Power Section
  battery: {
    badge: string;
    title: string;
    subtitle: string;
    capacityTitle: string;
    capacityDesc: string;
    cellsTitle: string;
    cellsDesc: string;
    quickChargeTitle: string;
    quickChargeDesc: string;
  };

  // Spec Table Section
  specTable: {
    badge: string;
    title: string;
    subtitle: string;
    model: string;
    power: string;
    speed: string;
    autonomy: string;
    poolTypes: string;
    dimensions: string;
    waterproofGrade: string;
    warranty: string;
    orderCta: string;
  };

  // Why Choose Us
  whyChooseUs: {
    badge: string;
    title: string;
    reason1Title: string;
    reason1Desc: string;
    reason2Title: string;
    reason2Desc: string;
    reason3Title: string;
    reason3Desc: string;
    reason4Title: string;
    reason4Desc: string;
  };

  // What's In The Box
  whatsInTheBox: {
    badge: string;
    title: string;
    subtitle: string;
    item1: string;
    item2: string;
    item3: string;
    item4: string;
    item5: string;
    item6: string;
  };

  // Video Guide Section
  videoGuide: {
    badge: string;
    title: string;
    subtitle: string;
  };

  // Athletes & Press Section
  athletesPress: {
    athletesBadge: string;
    athletesTitle: string;
    pressBadge: string;
    pressTitle: string;
  };

  // Trustpilot & Customer Reviews
  reviews: {
    trustpilotTitle: string;
    trustpilotSubtitle: string;
    verifiedReviewsCount: string;
    averageScore: string;
    writeReviewButton: string;
    filterAll: string;
    filter5Star: string;
    filter4Star: string;
    helpful: string;
    loadMore: string;
    verifiedPurchase: string;
    modalTitle: string;
    namePlaceholder: string;
    titlePlaceholder: string;
    commentPlaceholder: string;
    submitReview: string;
    reviewSubmitted: string;
  };

  // Cart Drawer
  cart: {
    title: string;
    freeShippingProgress: string;
    freeShippingUnlocked: string;
    emptyMessage: string;
    discoverSwimJet: string;
    total: string;
    subtotal: string;
    savings?: string;
    checkoutButton: string;
    continueShopping: string;
    remove: string;
    accessoriesTitle: string;
    addAccessory: string;
    secureCheckoutBadge: string;
  };

  // Country Dialog
  countryDialog: {
    title: string;
    northAmerica: string;
    europe: string;
    asiaPacific: string;
    selectPrompt: string;
  };

  // Account Modal
  accountModal: {
    title: string;
    subtitle: string;
    emailLabel: string;
    passwordLabel: string;
    loginButton: string;
    createAccount: string;
    forgotPassword: string;
    trackOrderDirect: string;
  };

  // Order Tracking Modal
  trackingModal: {
    title: string;
    subtitle: string;
    orderNumberPlaceholder: string;
    emailPlaceholder: string;
    trackButton: string;
    supportNote: string;
  };

  // Search Modal
  searchModal: {
    placeholder: string;
    popularSearches: string;
    quickResultTitle: string;
  };

  // Floating Widgets & Discount Promo
  floatingWidgets: {
    discountActivated: string;
    discountPrompt: string;
    activateButton: string;
    orderNow: string;
    backToTop: string;
    specialCountdown: string;
  };

  // Footer
  footer: {
    contactUs: string;
    emailPlaceholder: string;
    subscribeButton: string;
    subscribedSuccess: string;
    productsCol: string;
    helpSupportCol: string;
    exploreCol: string;
    emailUs: string;
    supportHours: string;
    supportAvailable: string;
    rightsReserved: string;
    returnsRefunds: string;
    warrantyPolicy: string;
    contactSupport: string;
    shippingPolicy: string;
    paymentMethods: string;
    privacyPolicy: string;
    termsOfService: string;
    orderTracking: string;
    blog: string;
    affiliateProgram: string;
    aboutUs: string;
  };

  // HOME PAGE SPECIFIC TRANSLATIONS
  home: {
    hero: {
      slide1Eyebrow: string;
      slide1Heading: string;
      slide1Desc: string;
      slide1Cta: string;
      slide2Eyebrow: string;
      slide2Heading: string;
      slide2Desc: string;
      slide2SpecialOffer: string;
      slide2SpecialPriceLabel: string;
      slide2SpecialPriceSub: string;
      slide2Cta: string;
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
      prevSlideAria: string;
      nextSlideAria: string;
    };
    trustBar: {
      freeShipping: string;
      returns30Days: string;
      warranty2Years: string;
      securePayment: string;
    };
    swimJetBanner: {
      sectionTitle: string;
      productTitle: string;
      productDesc: string;
      orderCta: string;
    };
    testimonials: {
      sectionTitle: string;
      sectionSubtitle: string;
      prevAria: string;
      nextAria: string;
      t1Quote: string;
      t2Quote: string;
      t3Quote: string;
      t4Quote: string;
      t5Quote: string;
    };
    trustpilot: {
      sectionTitle: string;
      reviewsCount: string;
      prevAria: string;
      nextAria: string;
      tp1Text: string;
      tp2Text: string;
      tp3Text: string;
      tp4Text: string;
      tp5Text: string;
      tp6Text: string;
      tp7Text: string;
      tp8Text: string;
      tp9Text: string;
      tp10Text: string;
      tp11Text: string;
      tp12Text: string;
    };
    kol: {
      sectionTitle: string;
      sectionSubtitle: string;
      videoBadge: string;
      k1Desc: string;
      k2Desc: string;
      k4Desc: string;
      k6Desc: string;
      followersSuffix: string;
      prevVideoAria: string;
      nextVideoAria: string;
      closeVideoAria: string;
    };
    awards: {
      sectionTitle: string;
      prevAria: string;
      nextAria: string;
      museQuote: string;
      techTimesQuote: string;
      timeQuote: string;
      cesQuote: string;
    };
    bento: {
      vipService: string;
      fastShipping: string;
      warranty: string;
      securePayment: string;
      support247: string;
      returns30Days: string;
    };
    blog: {
      sectionTitle: string;
      prevAria: string;
      nextAria: string;
      article1Title: string;
      article1Excerpt: string;
      article2Title: string;
      article2Excerpt: string;
      article3Title: string;
      article3Excerpt: string;
      article4Title: string;
      article4Excerpt: string;
      article5Title: string;
      article5Excerpt: string;
      article6Title: string;
      article6Excerpt: string;
      article7Title: string;
      article7Excerpt: string;
      article9Title: string;
      article9Excerpt: string;
    };
  };
}
