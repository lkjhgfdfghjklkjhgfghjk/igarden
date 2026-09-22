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

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide_PPG9m4",
    type: "standard",
    bgPc: "https://eu.store.igarden.ai/cdn/shop/files/Hero_banner.jpg?v=1780654836&width=1920",
    bgMb: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237258_1.jpg?v=1780654824&width=430",
    eyebrow: "Über 4,2 Millionen Euro auf Kickstarter finanziert",
    heading: "Mobiles Gegenstrom-Schwimmsystem iGarden Swim Jet — 1.000 W",
    desc: "1.000 W Spitzenleistung • 6 bis 10 h Akkulaufzeit bei voller Kraft • Für jeden Pool geeignet",
    btnText: "Jetzt bestellen (209,00 €)",
    btnLink: "/products/hydro-propulseur-de-natation-contre-courant-haute-performance-1000w-autonomie-pro-pack-complet",
    btnBg: "#0071E3",
    btnColor: "#ffffff",
    align: "center"
  },
  {
    id: "school_banner_LCDNyF",
    type: "school",
    bgPc: "https://eu.store.igarden.ai/cdn/shop/files/Hero_Banner_3.png?v=1785481427&width=1920",
    bgMb: "https://eu.store.igarden.ai/cdn/shop/files/Hero_Banner_4.png?v=1785481427&width=430",
    eyebrow: "Exklusives iGarden Swim Jet Angebot",
    heading: "Sparen Sie jetzt 209 € beim Swim Jet 1.000 W",
    desc: "1.000 W Leistung | 6 bis 10 h Akkulaufzeit | Kompatibel mit allen Pools",
    btnText: "Für 209,00 € bestellen",
    btnLink: "/products/hydro-propulseur-de-natation-contre-courant-haute-performance-1000w-autonomie-pro-pack-complet",
    btnBg: "#f86709",
    btnColor: "#ffffff",
    endTs: 1788249599
  }
];

export const TRUST_BAR_ITEMS = [
  {
    icon: "https://eu.store.igarden.ai/cdn/shop/files/icon_document.svg?v=1772780165&width=80",
    label: "Kostenloser & schneller DHL-Versand"
  },
  {
    icon: "https://eu.store.igarden.ai/cdn/shop/files/icon_star.svg?v=1772780166&width=80",
    label: "30 Tage Geld-zurück-Garantie"
  },
  {
    icon: "https://eu.store.igarden.ai/cdn/shop/files/icon_shield_svg.svg?v=1772780175&width=80",
    label: "2 Jahre Herstellergarantie"
  },
  {
    icon: "https://eu.store.igarden.ai/cdn/shop/files/icon_smile.svg?v=1772780165&width=80",
    label: "Sichere & verschlüsselte Zahlung"
  }
];

export const TESTIMONIALS_1 = [
  {
    id: "t1-1",
    author: "dana_stalling",
    quote: '"Mit dem Swim Jet genießen wir eine kraftvolle Gegenströmung, endlose Trainingsmöglichkeiten und unseren eigenen Wasserpark direkt im Garten!"',
    image: "https://eu.store.igarden.ai/cdn/shop/files/videoframe_55553.png?v=1787020733&width=800",
    link: "https://www.instagram.com/reel/DcGw3B4uLkp/"
  },
  {
    id: "t1-2",
    author: "aniuta.ugc",
    quote: '"Erzeugt eine kräftige, laminare Strömung zum Schwimmen auf der Stelle, für Workouts oder Familienspaß. Herrlich flexibel regelbar – vom sanften Dahingleiten bis zum Power-Training."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/videoframe_48822.png?v=1787021014&width=800",
    link: "https://www.instagram.com/reels/Db_jVc2OhkX/"
  },
  {
    id: "t1-3",
    author: "ffjeffo",
    quote: '"Der iGarden Swim Jet hat die Nutzung unseres Pools revolutioniert. Die Befestigung ging in 2 Minuten ohne Werkzeug, und schon hatten die Kinder ihr neues Lieblingsspiel im Wasser gefunden."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/9436ec37-3268-4ac2-bc43-8072b10a88bf.png?v=1784888154&width=800",
    link: "/products/hydro-propulseur-de-natation-contre-courant-haute-performance-1000w-autonomie-pro-pack-complet"
  },
  {
    id: "t1-4",
    author: "ericamuellerhome",
    quote: '"Verwandeln Sie Ihren Gartenpool in den Sommer-Treffpunkt schlechthin. Der Swim Jet bringt eine perfekt dosierbare Strömung direkt ins Wasser – für Bahnen ohne Wenden oder pure Entspannung."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/b97a9921-3a3d-451c-bc91-516dedebb94f.png?v=1784888202&width=800",
    link: "/products/hydro-propulseur-de-natation-contre-courant-haute-performance-1000w-autonomie-pro-pack-complet"
  },
  {
    id: "t1-5",
    author: "kerrybalbuziente",
    quote: '"Ein Pool – unendliche Möglichkeiten! ☀️💦 Vom entspannten Treibenlassen bis zum gezielten Kraul-Ausdauertraining. Der iGarden Swim Jet wertet den Garten in Sekunden auf."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/752682106_18609390595031892_8824578704219922165_n.jpg?v=1784889373&width=800",
    link: "/products/hydro-propulseur-de-natation-contre-courant-haute-performance-1000w-autonomie-pro-pack-complet"
  }
];

export const TESTIMONIALS_2 = [
  {
    id: "t2-1",
    author: "katelynsmorgan",
    quote: '"Ein absoluter Gamechanger für unseren Pool. Smarte Navigation, kein störender Kabelsalat und zuverlässig sauberes Wasser jeden Tag."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/lQLPJxse7lqZQ_PNBKrNAp6wospjemEhRFIKVlpPjH-XAA_670_1194.png?v=1787032226&width=800",
    link: "https://www.instagram.com/reels/DbIwCD-px4g/"
  },
  {
    id: "t2-2",
    author: "heyaddnotsubtract",
    quote: '"Die Poolpflege ist jetzt kinderleicht. Hätten wir das Gerät doch schon viel früher bestellt! Kristallklares Wasser ohne jeglichen Aufwand."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/videoframe_30762.png?v=1787022859&width=800",
    link: "https://www.instagram.com/reel/DZ7x3pWBX03/"
  },
  {
    id: "t2-3",
    author: "jaymesquires",
    quote: '"In 20 Minuten schwimmbereit mit glasklarem Wasser. Höchste Effizienz und top Zuverlässigkeit."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/444796d8-7a10-44b2-9c22-bc61d46015a6.png?v=1784888560&width=800",
    link: "/products/hydro-propulseur-de-natation-contre-courant-haute-performance-1000w-autonomie-pro-pack-complet"
  },
  {
    id: "t2-4",
    author: "stacysathome",
    quote: '"Unseren Pool sauber und fit zu halten war noch nie so einfach. Kraftvolle Leistung, intelligente Führung und herausragende Ausdauer."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/c57a3f28-fd18-441d-8454-2a724f53c81e.png?v=1784888704&width=800",
    link: "/products/hydro-propulseur-de-natation-contre-courant-haute-performance-1000w-autonomie-pro-pack-complet"
  },
  {
    id: "t2-5",
    author: "heyitsmariamugc",
    quote: '"✨ Kristallklares Wasser für den täglichen Badespaß! 🏊💙 Weniger Arbeit, mehr unbeschwerte Poolmomente mit der Familie."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/videoframe_21875.png?v=1784889873&width=800",
    link: "/products/hydro-propulseur-de-natation-contre-courant-haute-performance-1000w-autonomie-pro-pack-complet"
  },
  {
    id: "t2-6",
    author: "lilileyvacortez",
    quote: '"Unser Pool ist immer blitzsauber und bereit für das nächste Schwimmtraining. Der beste Begleiter für die gesamte Sommersaison!"',
    image: "https://eu.store.igarden.ai/cdn/shop/files/708270777_1498931005025705_3521763456855781907_n.jpg?v=1787021479&width=800",
    link: "https://www.instagram.com/reels/DYx4SJtRMtb/"
  },
  {
    id: "t2-7",
    author: "saharaebrahimi",
    quote: '"Entdecken Sie die ideale Ergänzung für Ihr Schwimmbecken. Hohe Strömungsleistung, lange Akkulaufzeit und absolut wartungsarm."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/lQLPKdq8WzXJobPNBG_NApmwO_jXiD5ZvOEKVlziPjDvAA_665_1135.png?v=1787032311&width=800",
    link: "https://www.instagram.com/reel/Dail1dDsabN/?hl=en"
  }
];

export const HOME_KOL_VIDEOS = [
  {
    id: "k1",
    author: "moine.thegolden",
    followers: "6,7K Abonnenten",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/6ee394b4-4868-41b4-9689-e6e78b6aaa68.png?v=1784890241&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/0b0657e3-2af6-431f-9f37-d22d309457c4.png?v=1784890241&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/ad5bf5bde86d48bd88aa57d76b904525/ad5bf5bde86d48bd88aa57d76b904525.HD-1080p-2.5Mbps-89793802.mp4?v=0",
    desc: "Ich wusste, dass wir das mobile iGarden Swim Jet Gegenstrom-Schwimmsystem lieben würden – aber nicht, dass unser Hund Monk zum Vollzeit-Surfer wird! Das absolute Lieblings-Highlight unseres Gartens."
  },
  {
    id: "k2",
    author: "jonathanandjennahome",
    followers: "16.000 Abonnenten",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/c028f30f-3ad2-4d39-a0e1-f2ab26942c9d.png?v=1784890321&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/35a20b86-a1fe-4cfa-b7e0-0faf162bf218_1.png?v=1784890326&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/2b75c1c0d8c847c4936e5d4f4278de92/2b75c1c0d8c847c4936e5d4f4278de92.HD-1080p-2.5Mbps-89793881.mp4?v=0",
    desc: "Ein tragbares, extrem starkes Gegenstromsystem? Der iGarden Swim Jet 1.000 W liefert eine beeindruckende Schubkraft bei erstaunlicher Ausdauer."
  },
  {
    id: "k4",
    author: "ollgabbigun",
    followers: "19.000 Abonnenten",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/123440b2-7478-4d80-8b74-1dc2c017acc3.png?v=1784891071&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/166cfeb6-bc09-4e79-a1bd-e70f3c08b31a.png?v=1784891080&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/b34434b795924fdea867f6f5b1afb6ed/b34434b795924fdea867f6f5b1afb6ed.HD-1080p-3.3Mbps-89794686.mp4?v=0",
    desc: "Der iGarden Swim Jet 1.000 W macht jede Schwimmeinheit sportlich, effektiv und grenzenlos – ganz unabhängig von den Beckenmaßen."
  },
  {
    id: "k6",
    author: "isydneyk",
    followers: "208.000 Abonnenten",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/650121470_18366392221205458_7345930834072426192_n.jpg?v=1784892091&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/750146965_18385958044205458_5282926624391628263_n.jpg?v=1784892092&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/46a971642efa4e8ca882fa50a41b8851/46a971642efa4e8ca882fa50a41b8851.HD-1080p-2.5Mbps-89795821.mp4?v=0",
    desc: "Vollkommen begeistert vom mobilen Gegenstrom-Schwimmsystem iGarden Swim Jet! In 2 Minuten montiert – die Strömung ermöglicht intensives Ausdauertraining oder pure Erholung. 😍"
  }
];

export const TRUSTPILOT_REVIEWS = [
  {
    id: "tp-1",
    name: "Thomas Parisi",
    date: "18. August 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_861b8ced-5913-4f1d-971b-1b3b6a675e7a.png?crop=center&height=160&v=1787103106&width=160",
    rating: 5,
    text: "Hervorragende Reaktionszeit sogar am Wochenende, gefolgt von einer schnellen Rückmeldung. Erstklassiger Kundendienst und direkte Lösung ab Montag.\n\nEin rundum vorbildlicher Service."
  },
  {
    id: "tp-2",
    name: "Dietmar Stramanak",
    date: "10. August 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_1_7cf7be94-153c-49c6-8549-08614a3c2a30.png?crop=center&height=160&v=1786428214&width=160",
    rating: 5,
    text: "Der Support ist spitze und löst Anliegen direkt beim ersten Kontakt. Andere Hersteller haben mich nur vertröstet. Die iGarden-Produkte sind absolute Spitzenklasse, vielen Dank!"
  },
  {
    id: "tp-3",
    name: "Klaus Evans",
    date: "09. August 2026",
    avatar: "",
    rating: 5,
    text: "Habe den Swim Jet bestellt und er hält genau, was er verspricht. Der Kundendienst ist blitzschnell und sehr hilfsbereit."
  },
  {
    id: "tp-4",
    name: "Anja Quinn",
    date: "10. August 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_32459157-cea8-4478-9daf-0d628de2c83f.png?crop=center&height=160&v=1786427972&width=160",
    rating: 5,
    text: "Kundenservice und Betreuung nach dem Kauf sind absolut vorbildlich!"
  },
  {
    id: "tp-5",
    name: "Karin B.",
    date: "09. August 2026",
    avatar: "",
    rating: 5,
    text: "Das Warten hat sich mehr als gelohnt. Sofort nach Ankunft im Wasser getestet: Ich bin begeistert von der Power und der hochwertigen Verarbeitung. Rundum zufrieden!"
  },
  {
    id: "tp-6",
    name: "Norbert W.",
    date: "09. August 2026",
    avatar: "",
    rating: 5,
    text: "Herausragende Leistung und eine echte Aufwertung für kleinere Gartenbecken! Schnell geliefert, sofort einsatzbereit – ein wahrer Genuss für tägliches Schwimmen ohne Wenden."
  },
  {
    id: "tp-7",
    name: "Albert Carrozzo",
    date: "26. Juli 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_33227b19-1575-4496-954f-2e14c3feda80.png?crop=center&height=160&v=1785312272&width=160",
    rating: 5,
    text: "Ich nutze das iGarden Gegenstromsystem regelmäßig und es hat mein Training zu Hause komplett verändert. Der Wasserstrom ist kräftig, stabil und sauber dosierbar..."
  },
  {
    id: "tp-8",
    name: "Rainer P.",
    date: "06. August 2026",
    avatar: "",
    rating: 5,
    text: "Ein bemerkenswertes Produkt, und der Kontakt mit dem Support war perfekt. Seriöses Unternehmen, innovative Technik und zuverlässige Lieferung."
  },
  {
    id: "tp-9",
    name: "Denise Benjamin",
    date: "04. August 2026",
    avatar: "",
    rating: 5,
    text: "Sofortige Antwort des Teams bei Fragen zur Erstinbetriebnahme. Absolut überzeugt von der schnellen Hilfe. Klare Weiterempfehlung!"
  },
  {
    id: "tp-10",
    name: "Christoph Jackson",
    date: "02. August 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_2_ac21224a-b899-4077-84a4-da84afae7d88.png?crop=center&height=160&v=1786428540&width=160",
    rating: 4,
    text: "Als ehemaliger Leistungsschwimmer finde ich die Strömung angenehm gleichmäßig und ideal für lange Strecken auf der Stelle. Auch die Hydromassage ist super."
  },
  {
    id: "tp-11",
    name: "Bernhard Miller",
    date: "27. Juli 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_3_e3a1070b-1267-406b-b4f4-274069ee7200.png?crop=center&height=160&v=1786437520&width=160",
    rating: 5,
    text: "Überaus zufrieden mit Produkt und Marke. Der Jet ist handlich, kinderleicht anzubringen und erfüllt seinen Zweck perfekt. Schneller, geschützter Versand."
  },
  {
    id: "tp-12",
    name: "Gregor Lehmann",
    date: "17. Juni 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_3.png?crop=center&height=160&v=1784616593&width=160",
    rating: 5,
    text: "Die Qualität einer Marke zeigt sich im Kundenservice. iGarden hat meine Erwartungen mit vorbildlicher Betreuung und termintreuer Lieferung übertroffen."
  }
];

export const AWARDS_LOGOS = [
  {
    name: "CES Innovation Awards 2026",
    img: "https://eu.store.igarden.ai/cdn/shop/files/ces.png?height=120&v=1775816513",
    link: "https://www.ces.tech/ces-innovation-awards/2026/igarden-swim-jet-x-series/"
  },
  {
    name: "MUSE Design Awards Platinum",
    img: "https://eu.store.igarden.ai/cdn/shop/files/2026-MUSE-Design-Awards-Site-Badges-Platinum.png?height=120&v=1776250221",
    link: "https://design.museaward.com/winner-info.php?id=37803"
  },
  {
    name: "TIME Best Inventions 2025",
    img: "https://eu.store.igarden.ai/cdn/shop/files/202601271425092014_1.png?height=120&v=1775816487",
    link: "https://time.com/collections/best-inventions-2025/7318411/igarden-swim-jet-p-series"
  },
  {
    name: "IFA 2025 Awards",
    img: "https://eu.store.igarden.ai/cdn/shop/files/ifA2.png?height=120&v=1775816573",
    link: "https://www.reviewed.com/features/ifa-2025-awards"
  },
  {
    name: "IFA Awards",
    img: "https://eu.store.igarden.ai/cdn/shop/files/ifa.png?height=120&v=1775816544",
    link: "https://www.reviewed.com/features/ifa-2025-awards"
  },
  {
    name: "TÜV Rheinland",
    img: "https://eu.store.igarden.ai/cdn/shop/files/tuv.png?height=120&v=1775816435",
    link: "https://www.linkedin.com/posts/tuv-rheinland-products_ces2026-tuvrheinland-igarden-activity-7415550617445650433-Y9Ky"
  }
];

export const AWARDS_REVIEWS = [
  {
    source: "MUSE Design Awards Platinum",
    text: "Der iGarden Swim Jet 1.000 W ist ein preisgekröntes, kabelloses Gegenstromsystem, das jeden Pool in eine endlose Schwimmbahn verwandelt.",
    link: "https://design.museaward.com/winner-info.php?id=37803"
  },
  {
    source: "Tech Times",
    text: "Der iGarden Swim Jet 1.000 W definiert das Schwimmen im eigenen Garten neu: kraftvolle Gegenströmung kombiniert mit 6 bis 10 h Akkulaufzeit bei voller Kraft.",
    link: "https://www.techtimes.com/articles/314615/20260212/smartest-member-family-how-ai-powered-igarden-x-series-changing-backyard-fun.htm"
  },
  {
    source: "TIME Best Inventions",
    text: "TIME Best Inventions — Der iGarden Swim Jet 1.000 W bietet kraftvollen Schub und herausragende Flexibilität für unbegrenztes Schwimmen im heimischen Pool.",
    link: "https://time.com/collections/best-inventions-2025/7318411/igarden-swim-jet-p-series"
  },
  {
    source: "CES Innovation Awards 2026",
    text: "CES Innovation Award Gewinner für 1.000 W Hochleistungspropulsion und kabelloses, sicheres Niedervolt-Design des mobilen iGarden Swim Jet.",
    link: "https://www.ces.tech/ces-innovation-awards/2026/igarden-swim-jet-x-series/"
  }
];

export const FEATURE_GRID_ITEMS = [
  {
    id: 0,
    tall: true,
    title: "Exklusiver VIP-Kundenservice",
    image: "https://eu.store.igarden.ai/cdn/shop/files/01_1_d30c0b5b-ad25-4a48-b286-1c1705d18707.png?v=1782444829&width=600"
  },
  {
    id: 1,
    tall: false,
    title: "Kostenloser & schneller Versand",
    image: "https://eu.store.igarden.ai/cdn/shop/files/Shipping_truck_with_package_for_logistics_and_freight_transportation_1.png?v=1782444799&width=600"
  },
  {
    id: 2,
    tall: false,
    title: "2 Jahre Herstellergarantie",
    image: "https://eu.store.igarden.ai/cdn/shop/files/Account_security_Antivirus_protection_Shield_with_checkmark_badge_1.png?v=1782444800&width=600"
  },
  {
    id: 3,
    tall: true,
    title: "Sichere Bezahlmethoden",
    image: "https://eu.store.igarden.ai/cdn/shop/files/credit_card_payment_with_coins_and_transfer_arrows_1.png?v=1782444829&width=600"
  },
  {
    id: 4,
    tall: false,
    title: "24/7 Support per Chat & E-Mail",
    image: "https://eu.store.igarden.ai/cdn/shop/files/02_1.png?v=1782444835&width=600"
  },
  {
    id: 5,
    tall: false,
    title: "30 Tage Rückgaberecht",
    image: "https://eu.store.igarden.ai/cdn/shop/files/2222_2.png?v=1782444799&width=600"
  }
];

export const BLOG_ARTICLES = [
  {
    id: "blog-1",
    title: "Was ist ein Gegenstrom-Schwimmsystem? Der umfassende Leitfaden für Einsteiger",
    excerpt: "Ein kompakter Gartenpool bedeutet keineswegs den Verzicht auf ambitioniertes Schwimmtraining. Das mobile iGarden Gegenstromsystem...",
    date: "2026-08-19",
    image: "https://eu.store.igarden.ai/cdn/shop/articles/igarden_swim_jet.png?v=1787124881&width=800",
    link: "https://eu.store.igarden.ai/blogs/news/swim-machine-beginner-guides"
  },
  {
    id: "blog-2",
    title: "5 Alternativen zu teuren Festeinbauten: Wie Sie im eigenen Garten endlos schwimmen",
    excerpt: "Für viele Poolbesitzer in Deutschland, Österreich und der Schweiz ist der mobile iGarden Swim Jet die perfekte, kostengünstige Lösung...",
    date: "2026-08-17",
    image: "https://eu.store.igarden.ai/cdn/shop/articles/Endless_pool_alternatives_5c5a4834-19cf-4d5c-9f94-65caa6f32a62.webp?v=1786959857&width=800",
    link: "https://eu.store.igarden.ai/blogs/news/endless-pool-alternatives"
  },
  {
    id: "blog-3",
    title: "Auf der Stelle schwimmen im kleinen Pool: Technik, Tipps und Ausdauer",
    excerpt: "Das Schwimmen gegen eine kontinuierliche 1.000-W-Gegenströmung ermöglicht ununterbrochenes Training in Pools jeder Größe...",
    date: "2026-08-13",
    image: "https://eu.store.igarden.ai/cdn/shop/articles/Swim_in_place_ebfe3823-44a0-4d1f-9ce8-0f45dc485e35.webp?v=1786959752&width=800",
    link: "https://eu.store.igarden.ai/blogs/news/how-to-swim-in-place-europea-guide"
  },
  {
    id: "blog-4",
    title: "Lohnen sich mobile Gegenstromanlagen? Der große Praxis- und Kostenvergleich",
    excerpt: "Warum das mobile iGarden Gegenstromsystem jeden Pool in eine professionelle Sport- und Erholungsoase verwandelt...",
    date: "2026-08-12",
    image: "https://eu.store.igarden.ai/cdn/shop/articles/Are_Counter_Current_Swim_Machine_Worth_it_449e2a34-77a9-4ad4-927a-183917827a86.webp?v=1786958964&width=800",
    link: "https://eu.store.igarden.ai/blogs/news/are-swim-machines-worth-it"
  },
  {
    id: "blog-5",
    title: "Die beste Gegenstromanlage für bestehende Pools (Test & Kaufratgeber 2026)",
    excerpt: "So installieren Sie den iGarden Swim Jet 1.000 W in unter 2 Minuten an jedem Beckenrand...",
    date: "2026-08-07",
    image: "https://eu.store.igarden.ai/cdn/shop/articles/04_What_to_Look_for_in_a_Portable_Swim_Jet.png?v=1786081701&width=800",
    link: "https://eu.store.igarden.ai/blogs/news/best-swim-machines-for-existing-pools"
  },
  {
    id: "blog-6",
    title: "Gegenstromschwimmen im Detail: Funktionsweise, laminare Strömung & Effizienz",
    excerpt: "Ein hochwertiges Gegenstromsystem erzeugt einen breiten, gleichmäßigen Wasserstrom für natürliches Schwimmgefühl...",
    date: "2026-07-30",
    image: "https://eu.store.igarden.ai/cdn/shop/articles/06_Portable_Swim_Jet_vs_Built-In_Swim_Jet_263f4fb4-0a69-4798-9e3c-63f3e25dd385.png?v=1785404749&width=800",
    link: "https://eu.store.igarden.ai/blogs/news/counter-current-swim-system-guide"
  },
  {
    id: "blog-7",
    title: "Vollständiger Swim Jet Ratgeber: 1.000 W Leistung, Akkulaufzeit und Handhabung",
    excerpt: "Alles Wissenswerte über den mobilen Swim Jet 1.000 W, 6 bis 10 h Akkulaufzeit und die universelle Beckenkompatibilität...",
    date: "2026-06-10",
    image: "https://eu.store.igarden.ai/cdn/shop/articles/04_c49af546-ddf8-4a26-b820-d3553d24b8d4.png?v=1781749607&width=800",
    link: "https://eu.store.igarden.ai/blogs/news/guide-complet-du-swim-jet"
  },
  {
    id: "blog-9",
    title: "Technische Kriterien bei Gegenstromanlagen: Motorkraft, Strömungsbild und Sicherheit",
    excerpt: "Verstehen Sie die entscheidenden Faktoren von 1.000 W Motorleistung über laminare Strömungsführung bis zum Akkumanagement...",
    date: "2026-05-25",
    image: "https://eu.store.igarden.ai/cdn/shop/articles/03_273932ef-a043-4b50-8496-42ceb1e41dbd.png?v=1779702473&width=800",
    link: "https://eu.store.igarden.ai/blogs/news/les-normes-techniques-derriere-les-machines-a-courant-de-nage"
  }
];
