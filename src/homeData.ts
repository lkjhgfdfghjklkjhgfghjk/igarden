import { TranslationDictionary } from './i18n/types';

export interface HeroSlide {
  id: string;
  type: 'school' | 'standard';
  bgPc: string;
  bgMb: string;
  eyebrow?: string;
  heading?: string;
  headingPc?: string;
  headingMb?: string;
  desc?: string;
  btnText: string;
  btnLink: string;
  btnBg?: string;
  btnColor?: string;
  align?: 'left' | 'center';
  endTs?: number; // timestamp for countdown
}

export function getHeroSlides(t: TranslationDictionary): HeroSlide[] {
  return [
    {
      id: "slide_PPG9m4",
      type: "standard",
      bgPc: "https://eu.store.igarden.ai/cdn/shop/files/Hero_banner.jpg?v=1780654836&width=1920",
      bgMb: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237258_1.jpg?v=1780654824&width=430",
      eyebrow: t.home?.hero?.slide1Eyebrow || "Über 4,2 Millionen Euro auf Kickstarter finanziert",
      heading: t.home?.hero?.slide1Heading || "Tragbare Gegenstromanlage iGarden Swim Jet — 1.000 W",
      desc: t.home?.hero?.slide1Desc || "1.000 W Leistung • 6 bis 10 Std. Akkulaufzeit bei voller Leistung • Kompatibel mit allen Pools",
      btnText: t.home?.hero?.slide1Cta || "Jetzt bestellen (209,00 €)",
      btnLink: "#product-section",
      btnBg: "#0071E3",
      btnColor: "#ffffff",
      align: "center"
    },
    {
      id: "school_banner_LCDNyF",
      type: "school",
      bgPc: "https://eu.store.igarden.ai/cdn/shop/files/Hero_Banner_3.png?v=1785481427&width=1920",
      bgMb: "https://eu.store.igarden.ai/cdn/shop/files/Hero_Banner_4.png?v=1785481427&width=430",
      eyebrow: t.home?.hero?.slide2Eyebrow || "Sonderangebot iGarden Swim Jet",
      heading: t.home?.hero?.slide2Heading || "Sparen Sie 209 € auf Ihren Swim Jet 1.000 W",
      desc: t.home?.hero?.slide2Desc || "1.000 W Leistung | 6 bis 10 Std. Akkulaufzeit | Kompatibel mit allen Pools",
      btnText: t.home?.hero?.slide2Cta || "Für 209,00 € bestellen",
      btnLink: "#product-section",
      btnBg: "#f86709",
      btnColor: "#ffffff",
      endTs: 1788249599
    }
  ];
}

export function getTrustBarItems(t: TranslationDictionary) {
  return [
    {
      icon: "https://eu.store.igarden.ai/cdn/shop/files/icon_document.svg?v=1772780165&width=80",
      label: t.home?.trustBar?.freeShipping || "Kostenloser und schneller Versand"
    },
    {
      icon: "https://eu.store.igarden.ai/cdn/shop/files/icon_star.svg?v=1772780166&width=80",
      label: t.home?.trustBar?.returns30Days || "30 Tage Rückgaberecht"
    },
    {
      icon: "https://eu.store.igarden.ai/cdn/shop/files/icon_shield_svg.svg?v=1772780175&width=80",
      label: t.home?.trustBar?.warranty2Years || "2+ Jahre Garantie"
    },
    {
      icon: "https://eu.store.igarden.ai/cdn/shop/files/icon_smile.svg?v=1772780165&width=80",
      label: t.home?.trustBar?.securePayment || "Sichere Zahlungsmethoden"
    }
  ];
}

export function getTestimonials1(t: TranslationDictionary) {
  return [
    {
      id: "t1-1",
      author: "dana_stalling",
      quote: `"${t.home?.testimonials?.t1Quote || "Mit dem Swim Jet genießen wir eine kraftvolle Strömung, endlose Schwimmmöglichkeiten und unseren eigenen Wasserpark direkt zu Hause!"}"`,
      image: "https://eu.store.igarden.ai/cdn/shop/files/videoframe_55553.png?v=1787020733&width=800",
      link: "https://www.instagram.com/reel/DcGw3B4uLkp/"
    },
    {
      id: "t1-2",
      author: "aniuta.ugc",
      quote: `"${t.home?.testimonials?.t2Quote || "Erzeugt einen starken Gegenstrom zum Schwimmen auf der Stelle, Trainieren oder für Familienspaß. Die Strömung lässt sich perfekt nach Wunsch einstellen."}"`,
      image: "https://eu.store.igarden.ai/cdn/shop/files/videoframe_48822.png?v=1787021014&width=800",
      link: "https://www.instagram.com/reels/Db_jVc2OhkX/"
    },
    {
      id: "t1-3",
      author: "ffjeffo",
      quote: `"${t.home?.testimonials?.t3Quote || "Der iGarden Swim Jet hat die Nutzung unseres Pools völlig verändert. Die Montage war erstaunlich einfach und schnell erledigt."}"`,
      image: "https://eu.store.igarden.ai/cdn/shop/files/9436ec37-3268-4ac2-bc43-8072b10a88bf.png?v=1784888154&width=800",
      link: "#product-section"
    },
    {
      id: "t1-4",
      author: "ericamuellerhome",
      quote: `"${t.home?.testimonials?.t4Quote || "Verwandeln Sie Ihren Pool in den perfekten Sommer-Treffpunkt. Die iGarden Swim Jet Serie bringt eine sanfte, einstellbare Strömung."}"`,
      image: "https://eu.store.igarden.ai/cdn/shop/files/b97a9921-3a3d-451c-bc91-516dedebb94f.png?v=1784888202&width=800",
      link: "#product-section"
    },
    {
      id: "t1-5",
      author: "kerrybalbuziente",
      quote: `"${t.home?.testimonials?.t5Quote || "Ein Pool... unendliche Möglichkeiten! Der iGarden Swim Jet verwandelt den heimischen Gartenpool in Sekundenschnelle."}"`,
      image: "https://eu.store.igarden.ai/cdn/shop/files/752682106_18609390595031892_8824578704219922165_n.jpg?v=1784889373&width=800",
      link: "#product-section"
    }
  ];
}

export function getHomeKolVideos(t: TranslationDictionary) {
  return [
    {
      id: "k1",
      author: "moine.thegolden",
      followers: `6,7K ${t.home?.kol?.followersSuffix || "Follower"}`,
      avatar: "https://eu.store.igarden.ai/cdn/shop/files/6ee394b4-4868-41b4-9689-e6e78b6aaa68.png?v=1784890241&width=80",
      thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/0b0657e3-2af6-431f-9f37-d22d309457c4.png?v=1784890241&width=800",
      videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/ad5bf5bde86d48bd88aa57d76b904525/ad5bf5bde86d48bd88aa57d76b904525.HD-1080p-2.5Mbps-89793802.mp4?v=0",
      desc: t.home?.kol?.k1Desc || "Ich wusste, dass wir die tragbare iGarden Swim Jet Gegenstromanlage lieben würden — 1.000 W pure Freude."
    },
    {
      id: "k2",
      author: "jonathanandjennahome",
      followers: `16 000 ${t.home?.kol?.followersSuffix || "Follower"}`,
      avatar: "https://eu.store.igarden.ai/cdn/shop/files/c028f30f-3ad2-4d39-a0e1-f2ab26942c9d.png?v=1784890321&width=80",
      thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/35a20b86-a1fe-4cfa-b7e0-0faf162bf218_1.png?v=1784890326&width=800",
      videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/2b75c1c0d8c847c4936e5d4f4278de92/2b75c1c0d8c847c4936e5d4f4278de92.HD-1080p-2.5Mbps-89793881.mp4?v=0",
      desc: t.home?.kol?.k2Desc || "Eine tragbare und extrem kraftvolle Gegenstromanlage? Der iGarden Swim Jet überzeugt auf ganzer Linie."
    },
    {
      id: "k4",
      author: "ollgabbigun",
      followers: `19 000 ${t.home?.kol?.followersSuffix || "Follower"}`,
      avatar: "https://eu.store.igarden.ai/cdn/shop/files/123440b2-7478-4d80-8b74-1dc2c017acc3.png?v=1784891071&width=80",
      thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/166cfeb6-bc09-4e79-a1bd-e70f3c08b31a.png?v=1784891080&width=800",
      videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/b34434b795924fdea867f6f5b1afb6ed/b34434b795924fdea867f6f5b1afb6ed.HD-1080p-3.3Mbps-89794686.mp4?v=0",
      desc: t.home?.kol?.k4Desc || "Die tragbare iGarden Gegenstromanlage macht jedes Baden sportlich, angenehm und grenzenlos."
    },
    {
      id: "k6",
      author: "isydneyk",
      followers: `208 000 ${t.home?.kol?.followersSuffix || "Follower"}`,
      avatar: "https://eu.store.igarden.ai/cdn/shop/files/650121470_18366392221205458_7345930834072426192_n.jpg?v=1784892091&width=80",
      thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/750146965_18385958044205458_5282926624391628263_n.jpg?v=1784892092&width=800",
      videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/46a971642efa4e8ca882fa50a41b8851/46a971642efa4e8ca882fa50a41b8851.HD-1080p-2.5Mbps-89795821.mp4?v=0",
      desc: t.home?.kol?.k6Desc || "Absolut begeistert vom iGarden Swim Jet — 1.000 W Power! 😍"
    }
  ];
}

export function getTrustpilotReviews(t: TranslationDictionary) {
  return [
    {
      id: "tp-1",
      name: "Tim Parisi",
      date: "18. August 2026",
      avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_861b8ced-5913-4f1d-971b-1b3b6a675e7a.png?crop=center&height=160&v=1787103106&width=160",
      rating: 5,
      text: t.home?.trustpilot?.tp1Text || "Hervorragende Reaktionszeit an einem späten Samstagabend, gefolgt von einer schnellen Klärung am Sonntag. Herausragender Kundenservice!"
    },
    {
      id: "tp-2",
      name: "Don Stramanak",
      date: "10. August 2026",
      avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_1_7cf7be94-153c-49c6-8549-08614a3c2a30.png?crop=center&height=160&v=1786428214&width=160",
      rating: 5,
      text: t.home?.trustpilot?.tp2Text || "Der Kundensupport ist erstklassig und löst jede Frage direkt beim ersten Kontakt. Die Produkte von iGarden sind absolute Spitzenklasse!"
    },
    {
      id: "tp-3",
      name: "Kevin Evans",
      date: "09. August 2026",
      avatar: "",
      rating: 5,
      text: t.home?.trustpilot?.tp3Text || "Habe den Swim Jet X bestellt und er funktioniert genau wie versprochen. Schneller und freundlicher Kundenservice."
    },
    {
      id: "tp-4",
      name: "Amy Quinn",
      date: "10. August 2026",
      avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_32459157-cea8-4478-9daf-0d628de2c83f.png?crop=center&height=160&v=1786427972&width=160",
      rating: 5,
      text: t.home?.trustpilot?.tp4Text || "Exzellenter Kundendienst und erstklassige Betreuung nach dem Kauf!"
    },
    {
      id: "tp-5",
      name: "Kathy",
      date: "09. August 2026",
      avatar: "",
      rating: 5,
      text: t.home?.trustpilot?.tp5Text || "Ich habe meine Gegenstromanlage erhalten und das Warten hat sich gelohnt. Die Leistung und die Verarbeitungsqualität sind überragend."
    },
    {
      id: "tp-6",
      name: "Norm",
      date: "09. August 2026",
      avatar: "",
      rating: 5,
      text: t.home?.trustpilot?.tp6Text || "Hervorragende Leistung und eine echte Revolution für kleine Pools! Schnell geliefert und sofort ausprobiert."
    },
    {
      id: "tp-7",
      name: "Alberto Carrozzo",
      date: "26. Juli 2026",
      avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_33227b19-1575-4496-954f-2e14c3feda80.png?crop=center&height=160&v=1785312272&width=160",
      rating: 5,
      text: t.home?.trustpilot?.tp7Text || "Ich nutze den iGarden Swim Jet regelmäßig in meinem Pool und er hat mein tägliches Training komplett verändert. Kraftvoll und stabil."
    },
    {
      id: "tp-8",
      name: "RP",
      date: "06. August 2026",
      avatar: "",
      rating: 5,
      text: t.home?.trustpilot?.tp8Text || "Das Produkt ist bemerkenswert und der Kontakt mit dem Support war perfekt. Seriöses Unternehmen mit echten Innovationen."
    },
    {
      id: "tp-9",
      name: "Denise Benjamin",
      date: "04. August 2026",
      avatar: "",
      rating: 5,
      text: t.home?.trustpilot?.tp9Text || "Sofortige Antwort des Teams bei meinen Fragen zur Inbetriebnahme. Kann ich uneingeschränkt weiterempfehlen!"
    },
    {
      id: "tp-10",
      name: "Charles Jackson",
      date: "02. August 2026",
      avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_2_ac21224a-b899-4077-84a4-da84afae7d88.png?crop=center&height=160&v=1786428540&width=160",
      rating: 4,
      text: t.home?.trustpilot?.tp10Text || "Als ehemaliger Leistungsschwimmer finde ich die Strömung gleichmäßig und perfekt für langes Ausdauertraining auf der Stelle."
    },
    {
      id: "tp-11",
      name: "BD Miller",
      date: "27. Juli 2026",
      avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_3_e3a1070b-1267-406b-b4f4-274069ee7200.png?crop=center&height=160&v=1786437520&width=160",
      rating: 5,
      text: t.home?.trustpilot?.tp11Text || "Extrem zufrieden mit dem Produkt. Der Jet ist leicht, schnell montiert und erfüllt seinen Zweck zu 100%. Schnelle Lieferung."
    },
    {
      id: "tp-12",
      name: "Gregory Lee",
      date: "17. Juni 2026",
      avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_3.png?crop=center&height=160&v=1784616593&width=160",
      rating: 5,
      text: t.home?.trustpilot?.tp12Text || "Ein hervorragender Kundenservice, der alle Erwartungen übertroffen hat. Absolute Kaufempfehlung!"
    }
  ];
}

export const AWARDS_LOGOS = [
  {
    name: "CES Innovation Awards",
    img: "https://eu.store.igarden.ai/cdn/shop/files/1_d7582522-d04b-4b19-b684-257a16f272a2.png?v=1784893116&width=200",
    link: "https://www.ces.tech/"
  },
  {
    name: "MUSE Design Awards",
    img: "https://eu.store.igarden.ai/cdn/shop/files/2_9fa0865a-0820-4100-b6f7-b2e1bf79db53.png?v=1784893116&width=200",
    link: "https://design.museaward.com/"
  },
  {
    name: "TechTimes",
    img: "https://eu.store.igarden.ai/cdn/shop/files/3_e358b6cb-9189-4d69-8fe5-2e3eb869c9b7.png?v=1784893116&width=200",
    link: "https://www.techtimes.com/"
  },
  {
    name: "TIME Best Inventions",
    img: "https://eu.store.igarden.ai/cdn/shop/files/4_6fa810cb-82d2-43bb-81c4-ce0b616fae54.png?v=1784893116&width=200",
    link: "https://time.com/"
  }
];

export function getAwardsReviews(t: TranslationDictionary) {
  return [
    {
      id: "a-1",
      source: "MUSE",
      title: "MUSE",
      logo: "https://eu.store.igarden.ai/cdn/shop/files/2_9fa0865a-0820-4100-b6f7-b2e1bf79db53.png?v=1784893116&width=200",
      quote: t.home?.awards?.museQuote || "Der iGarden Swim Jet 1.000 W ist eine preisgekrönte kabellose Gegenstromanlage, die jeden Pool in eine endlose Schwimmbahn verwandelt.",
      text: t.home?.awards?.museQuote || "Der iGarden Swim Jet 1.000 W ist eine preisgekrönte kabellose Gegenstromanlage, die jeden Pool in eine endlose Schwimmbahn verwandelt.",
      link: "https://design.museaward.com/"
    },
    {
      id: "a-2",
      source: "TechTimes",
      title: "TechTimes",
      logo: "https://eu.store.igarden.ai/cdn/shop/files/3_e358b6cb-9189-4d69-8fe5-2e3eb869c9b7.png?v=1784893116&width=200",
      quote: t.home?.awards?.techTimesQuote || "Der iGarden Swim Jet 1.000 W revolutioniert das private Schwimmen mit starkem Gegenstrom und 6 bis 10 Std. Akkulaufzeit.",
      text: t.home?.awards?.techTimesQuote || "Der iGarden Swim Jet 1.000 W revolutioniert das private Schwimmen mit starkem Gegenstrom und 6 bis 10 Std. Akkulaufzeit.",
      link: "https://www.techtimes.com/"
    },
    {
      id: "a-3",
      source: "TIME",
      title: "TIME",
      logo: "https://eu.store.igarden.ai/cdn/shop/files/4_6fa810cb-82d2-43bb-81c4-ce0b616fae54.png?v=1784893116&width=200",
      quote: t.home?.awards?.timeQuote || "TIME Best Inventions — Der iGarden Swim Jet bietet 1.000 W Power und außergewöhnliche Vielseitigkeit für endloses Schwimmen auf der Stelle.",
      text: t.home?.awards?.timeQuote || "TIME Best Inventions — Der iGarden Swim Jet bietet 1.000 W Power und außergewöhnliche Vielseitigkeit für endloses Schwimmen auf der Stelle.",
      link: "https://time.com/"
    },
    {
      id: "a-4",
      source: "CES",
      title: "CES",
      logo: "https://eu.store.igarden.ai/cdn/shop/files/1_d7582522-d04b-4b19-b684-257a16f272a2.png?v=1784893116&width=200",
      quote: t.home?.awards?.cesQuote || "CES Innovation Award Honoree für bahnbrechende 1.000 W Hochleistungs-Propulsionstechnologie und kabelloses Design.",
      text: t.home?.awards?.cesQuote || "CES Innovation Award Honoree für bahnbrechende 1.000 W Hochleistungs-Propulsionstechnologie und kabelloses Design.",
      link: "https://www.ces.tech/"
    }
  ];
}

export function getFeatureGridItems(t: TranslationDictionary) {
  return [
    {
      id: "fg-1",
      title: t.home?.bento?.vipService || "Exklusiver VIP-Service",
      image: "https://eu.store.igarden.ai/cdn/shop/files/swim-jet-x-series-in-the-real-scenes_1.jpg?v=1780570719&width=600"
    },
    {
      id: "fg-2",
      title: t.home?.bento?.fastShipping || "Kostenloser & schneller Versand",
      image: "https://eu.store.igarden.ai/cdn/shop/files/Hero_banner.jpg?v=1780654836&width=600"
    },
    {
      id: "fg-3",
      title: t.home?.bento?.warranty || "2+ Jahre Garantie",
      image: "https://eu.store.igarden.ai/cdn/shop/files/swim-jet-x-series-in-the-real-scenes_3.jpg?v=1780570719&width=600"
    },
    {
      id: "fg-4",
      title: t.home?.bento?.securePayment || "Sichere Zahlungsmethoden",
      image: "https://eu.store.igarden.ai/cdn/shop/files/Hero_Banner_3.png?v=1785481427&width=600"
    },
    {
      id: "fg-5",
      title: t.home?.bento?.support247 || "24/7 Kundenservice",
      image: "https://eu.store.igarden.ai/cdn/shop/files/swim-jet-x-series-in-the-real-scenes_4.jpg?v=1780570719&width=600"
    },
    {
      id: "fg-6",
      title: t.home?.bento?.returns30Days || "30 Tage Rückgaberecht",
      image: "https://eu.store.igarden.ai/cdn/shop/files/DE-X_12.png?v=1788838449&width=600"
    }
  ];
}

export function getBlogArticles(t: TranslationDictionary) {
  return [
    {
      id: "blog-1",
      title: t.home?.blog?.article1Title || "Was ist eine Gegenstromanlage? Ratgeber für Einsteiger",
      excerpt: t.home?.blog?.article1Excerpt || "Ein kleiner Pool bedeutet nicht, dass Sie auf echtes Schwimmtraining verzichten müssen. Der iGarden Swim Jet 1.000 W...",
      date: "2026-08-25",
      image: "https://eu.store.igarden.ai/cdn/shop/files/swim-jet-x-series-in-the-real-scenes_1.jpg?v=1780570719&width=800",
      link: "#product-section"
    },
    {
      id: "blog-2",
      title: t.home?.blog?.article2Title || "5 Alternativen zu Endless Pools: Welche Lösung passt zu Ihrem Garten?",
      excerpt: t.home?.blog?.article2Excerpt || "Für viele Poolbesitzer in Deutschland und Österreich ist der tragbare iGarden Swim Jet 1.000 W die ideale Lösung...",
      date: "2026-08-20",
      image: "https://eu.store.igarden.ai/cdn/shop/files/swim-jet-x-series-in-the-real-scenes_3.jpg?v=1780570719&width=800",
      link: "#product-section"
    },
    {
      id: "blog-3",
      title: t.home?.blog?.article3Title || "So schwimmen Sie auf der Stelle im kleinen Gartenpool",
      excerpt: t.home?.blog?.article3Excerpt || "Gegenstromschwimmen mit 1.000 W ermöglicht unterbrechungsfreies Training in Pools jeder Größe...",
      date: "2026-08-15",
      image: "https://eu.store.igarden.ai/cdn/shop/files/swim-jet-x-series-in-the-real-scenes_4.jpg?v=1780570719&width=800",
      link: "#product-section"
    },
    {
      id: "blog-4",
      title: t.home?.blog?.article4Title || "Lohnen sich Gegenstromanlagen für Aufstellpools? Der Komplett-Guide",
      excerpt: t.home?.blog?.article4Excerpt || "Warum der iGarden Swim Jet jedes Becken in eine Sport- und Wellnessoase verwandelt...",
      date: "2026-08-10",
      image: "https://eu.store.igarden.ai/cdn/shop/articles/06_Portable_Swim_Jet_vs_Built-In_Swim_Jet_263f4fb4-0a69-4798-9e3c-63f3e25dd385.png?v=1785404749&width=800",
      link: "#product-section"
    },
    {
      id: "blog-5",
      title: t.home?.blog?.article5Title || "Die beste Gegenstromanlage für bestehende Pools (Ratgeber 2026)",
      excerpt: t.home?.blog?.article5Excerpt || "Erfahren Sie, wie Sie den iGarden Swim Jet ohne Bohren und ohne Umbau sofort in Betrieb nehmen...",
      date: "2026-08-05",
      image: "https://eu.store.igarden.ai/cdn/shop/articles/04_c49af546-ddf8-4a26-b820-d3553d24b8d4.png?v=1781749607&width=800",
      link: "#product-section"
    },
    {
      id: "blog-6",
      title: t.home?.blog?.article6Title || "Der vollständige Leitfaden zum Gegenstromschwimmen",
      excerpt: t.home?.blog?.article6Excerpt || "Ein kontinuierlicher Gegenstrom erlaubt unbegrenztes Schwimmen ohne Wenden am Beckenrand...",
      date: "2026-07-30",
      image: "https://eu.store.igarden.ai/cdn/shop/articles/06_Portable_Swim_Jet_vs_Built-In_Swim_Jet_263f4fb4-0a69-4798-9e3c-63f3e25dd385.png?v=1785404749&width=800",
      link: "#product-section"
    },
    {
      id: "blog-7",
      title: t.home?.blog?.article7Title || "Swim Jet Guide: Funktion, 1.000 W Leistung und Akkulaufzeit",
      excerpt: t.home?.blog?.article7Excerpt || "Alles Wissenswerte über den iGarden Swim Jet, seine 6 bis 10 h Akkulaufzeit und universelle Kompatibilität...",
      date: "2026-06-10",
      image: "https://eu.store.igarden.ai/cdn/shop/articles/04_c49af546-ddf8-4a26-b820-d3553d24b8d4.png?v=1781749607&width=800",
      link: "#product-section"
    },
    {
      id: "blog-9",
      title: t.home?.blog?.article9Title || "Wichtige technische Kriterien bei Gegenstromanlagen",
      excerpt: t.home?.blog?.article9Excerpt || "Verstehen Sie Motorleistung, laminare Strömungsdynamik und Akkukapazität für optimales Schwimmen...",
      date: "2026-05-25",
      image: "https://eu.store.igarden.ai/cdn/shop/articles/03_273932ef-a043-4b50-8496-42ceb1e41dbd.png?v=1779702473&width=800",
      link: "#product-section"
    }
  ];
}

import { de } from './i18n/locales/de';
export const HERO_SLIDES = getHeroSlides(de);
export const TRUST_BAR_ITEMS = getTrustBarItems(de);
export const TESTIMONIALS_1 = getTestimonials1(de);
export const TESTIMONIALS_2 = getTestimonials1(de);
export const HOME_KOL_VIDEOS = getHomeKolVideos(de);
export const TRUSTPILOT_REVIEWS = getTrustpilotReviews(de);
export const AWARDS_REVIEWS = getAwardsReviews(de);
export const FEATURE_GRID_ITEMS = getFeatureGridItems(de);
export const BLOG_ARTICLES = getBlogArticles(de);
