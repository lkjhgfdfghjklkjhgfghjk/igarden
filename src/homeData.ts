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
    eyebrow: "Plus de 4,2 millions d'euros financés sur Kickstarter",
    heading: "Système de Nage à Contre-Courant Mobile iGarden Swim Jet — 1 000 W",
    desc: "Puissance de pointe 1 000 W • 6 à 10 h d'autonomie à pleine puissance • Adapté à toutes les piscines",
    btnText: "Commander maintenant (209,00 €)",
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
    eyebrow: "Offre Exclusive iGarden Swim Jet",
    heading: "Économisez 209 € sur le Swim Jet 1 000 W",
    desc: "Puissance 1 000 W | 6 à 10 h d'autonomie | Compatible avec toutes les piscines",
    btnText: "Commander pour 209,00 €",
    btnLink: "/products/hydro-propulseur-de-natation-contre-courant-haute-performance-1000w-autonomie-pro-pack-complet",
    btnBg: "#f86709",
    btnColor: "#ffffff",
    endTs: 1788249599
  }
];

export const TRUST_BAR_ITEMS = [
  {
    icon: "https://eu.store.igarden.ai/cdn/shop/files/icon_document.svg?v=1772780165&width=80",
    label: "Livraison gratuite et rapide par transporteur express"
  },
  {
    icon: "https://eu.store.igarden.ai/cdn/shop/files/icon_star.svg?v=1772780166&width=80",
    label: "Garantie satisfait ou remboursé 30 jours"
  },
  {
    icon: "https://eu.store.igarden.ai/cdn/shop/files/icon_shield_svg.svg?v=1772780175&width=80",
    label: "2 ans de garantie constructeur"
  },
  {
    icon: "https://eu.store.igarden.ai/cdn/shop/files/icon_smile.svg?v=1772780165&width=80",
    label: "Paiement 100% sécurisé et crypté"
  }
];

export const TESTIMONIALS_1 = [
  {
    id: "t1-1",
    author: "dana_stalling",
    quote: '"Avec le Swim Jet, nous profitons d\'un contre-courant puissant, de séances de nage sans fin et de notre propre parc aquatique directement dans le jardin !"',
    image: "https://eu.store.igarden.ai/cdn/shop/files/videoframe_55553.png?v=1787020733&width=800",
    link: "https://www.instagram.com/reel/DcGw3B4uLkp/"
  },
  {
    id: "t1-2",
    author: "aniuta.ugc",
    quote: '"Génère un flux laminaire puissant pour nager sur place, s\'entraîner ou s\'amuser en famille. Réglage ultra flexible – de la glisse relaxante au fractionné intensif."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/videoframe_48822.png?v=1787021014&width=800",
    link: "https://www.instagram.com/reels/Db_jVc2OhkX/"
  },
  {
    id: "t1-3",
    author: "ffjeffo",
    quote: '"Le iGarden Swim Jet a totalement révolutionné notre piscine. Fixé en 2 minutes sans outil, les enfants ont trouvé leur nouvelle attraction préférée."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/9436ec37-3268-4ac2-bc43-8072b10a88bf.png?v=1784888154&width=800",
    link: "/products/hydro-propulseur-de-natation-contre-courant-haute-performance-1000w-autonomie-pro-pack-complet"
  },
  {
    id: "t1-4",
    author: "ericamuellerhome",
    quote: '"Transformez votre piscine en couloir de nage olympique. Le Swim Jet délivre un flux parfaitement dosé directement dans l\'eau – pour nager sans jamais faire demi-tour."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/b97a9921-3a3d-451c-bc91-516dedebb94f.png?v=1784888202&width=800",
    link: "/products/hydro-propulseur-de-natation-contre-courant-haute-performance-1000w-autonomie-pro-pack-complet"
  },
  {
    id: "t1-5",
    author: "kerrybalbuziente",
    quote: '"Une piscine – des possibilités infinies ! ☀️💦 Du moment de détente aquatique à la préparation sportive au crawl. Le iGarden Swim Jet sublime le jardin en quelques secondes."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/752682106_18609390595031892_8824578704219922165_n.jpg?v=1784889373&width=800",
    link: "/products/hydro-propulseur-de-natation-contre-courant-haute-performance-1000w-autonomie-pro-pack-complet"
  }
];

export const TESTIMONIALS_2 = [
  {
    id: "t2-1",
    author: "katelynsmorgan",
    quote: '"Un vrai changement pour notre piscine. Ergonomique, aucun câble qui traîne dans l\'eau et un plaisir de nage incomparable au quotidien."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/lQLPJxse7lqZQ_PNBKrNAp6wospjemEhRFIKVlpPjH-XAA_670_1194.png?v=1787032226&width=800",
    link: "https://www.instagram.com/reels/DbIwCD-px4g/"
  },
  {
    id: "t2-2",
    author: "heyaddnotsubtract",
    quote: '"L\'entraînement est maintenant tellement simple et accessible. Si seulement nous avions commandé cet appareil plus tôt ! Une eau vivante et un exercice complet."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/videoframe_30762.png?v=1787022859&width=800",
    link: "https://www.instagram.com/reel/DZ7x3pWBX03/"
  },
  {
    id: "t2-3",
    author: "jaymesquires",
    quote: '"Prêt à nager en 2 minutes chrono. Efficacité maximale et fiabilité absolue de la motorisation."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/444796d8-7a10-44b2-9c22-bc61d46015a6.png?v=1784888560&width=800",
    link: "/products/hydro-propulseur-de-natation-contre-courant-haute-performance-1000w-autonomie-pro-pack-complet"
  },
  {
    id: "t2-4",
    author: "stacysathome",
    quote: '"Faire du sport dans son bassin n\'a jamais été aussi agréable. Puissance généreuse, contrôle précis et autonomie remarquable."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/c57a3f28-fd18-441d-8454-2a724f53c81e.png?v=1784888704&width=800",
    link: "/products/hydro-propulseur-de-natation-contre-courant-haute-performance-1000w-autonomie-pro-pack-complet"
  },
  {
    id: "t2-5",
    author: "heyitsmariamugc",
    quote: '"✨ Le plaisir de nager chez soi tous les jours ! 🏊💙 Moins de contraintes, plus de moments magiques en famille."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/videoframe_21875.png?v=1784889873&width=800",
    link: "/products/hydro-propulseur-de-natation-contre-courant-haute-performance-1000w-autonomie-pro-pack-complet"
  },
  {
    id: "t2-6",
    author: "lilileyvacortez",
    quote: '"Notre piscine est devenue un véritable centre d\'entraînement. Le meilleur allié de toute la saison estivale !"',
    image: "https://eu.store.igarden.ai/cdn/shop/files/708270777_1498931005025705_3521763456855781907_n.jpg?v=1787021479&width=800",
    link: "https://www.instagram.com/reels/DYx4SJtRMtb/"
  },
  {
    id: "t2-7",
    author: "saharaebrahimi",
    quote: '"Le complément parfait pour votre piscine. Grand débit d\'eau, batterie longue durée et zéro entretien contraignant."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/lQLPKdq8WzXJobPNBG_NApmwO_jXiD5ZvOEKVlziPjDvAA_665_1135.png?v=1787032311&width=800",
    link: "https://www.instagram.com/reel/Dail1dDsabN/?hl=en"
  }
];

export const HOME_KOL_VIDEOS = [
  {
    id: "k1",
    author: "moine.thegolden",
    followers: "6,7K abonnés",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/6ee394b4-4868-41b4-9689-e6e78b6aaa68.png?v=1784890241&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/0b0657e3-2af6-431f-9f37-d22d309457c4.png?v=1784890241&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/ad5bf5bde86d48bd88aa57d76b904525/ad5bf5bde86d48bd88aa57d76b904525.HD-1080p-2.5Mbps-89793802.mp4?v=0",
    desc: "Je savais qu'on adorerait le propulseur mobile iGarden Swim Jet – mais pas que notre chien Monk deviendrait surfeur professionnel ! L'attraction numéro 1 de notre jardin."
  },
  {
    id: "k2",
    author: "jonathanandjennahome",
    followers: "16 000 abonnés",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/c028f30f-3ad2-4d39-a0e1-f2ab26942c9d.png?v=1784890321&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/35a20b86-a1fe-4cfa-b7e0-0faf162bf218_1.png?v=1784890326&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/2b75c1c0d8c847c4936e5d4f4278de92/2b75c1c0d8c847c4936e5d4f4278de92.HD-1080p-2.5Mbps-89793881.mp4?v=0",
    desc: "Un système de contre-courant portable et ultra puissant ? Le Swim Jet 1 000 W offre une poussée impressionnante avec une autonomie surprenante."
  },
  {
    id: "k4",
    author: "ollgabbigun",
    followers: "19 000 abonnés",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/123440b2-7478-4d80-8b74-1dc2c017acc3.png?v=1784891071&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/166cfeb6-bc09-4e79-a1bd-e70f3c08b31a.png?v=1784891080&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/b34434b795924fdea867f6f5b1afb6ed/b34434b795924fdea867f6f5b1afb6ed.HD-1080p-3.3Mbps-89794686.mp4?v=0",
    desc: "Le iGarden Swim Jet 1 000 W rend chaque séance de nage sportive, efficace et sans limite – peu importe la taille de votre bassin."
  },
  {
    id: "k6",
    author: "isydneyk",
    followers: "208 000 abonnés",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/650121470_18366392221205458_7345930834072426192_n.jpg?v=1784892091&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/750146965_18385958044205458_5282926624391628263_n.jpg?v=1784892092&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/46a971642efa4e8ca882fa50a41b8851/46a971642efa4e8ca882fa50a41b8851.HD-1080p-2.5Mbps-89795821.mp4?v=0",
    desc: "Totalement conquise par le système mobile iGarden Swim Jet ! Installé en 2 minutes – le courant permet un entraînement cardio intense ou une détente absolue. 😍"
  }
];

export const TRUSTPILOT_REVIEWS = [
  {
    id: "tp-1",
    name: "Thomas Parisi",
    date: "18 août 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_861b8ced-5913-4f1d-971b-1b3b6a675e7a.png?crop=center&height=160&v=1787103106&width=160",
    rating: 5,
    text: "Excellente réactivité même le week-end, suivie d'une prise en charge rapide. Service client de premier ordre et solution apportée immédiatement dès le lundi.\n\nUn service irréprochable."
  },
  {
    id: "tp-2",
    name: "Didier Stramanak",
    date: "10 août 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_1_7cf7be94-153c-49c6-8549-08614a3c2a30.png?crop=center&height=160&v=1786428214&width=160",
    rating: 5,
    text: "Le support est formidable et résout la demande dès le premier contact. Les produits iGarden sont au sommet de la technologie, un grand merci !"
  },
  {
    id: "tp-3",
    name: "Claude Evans",
    date: "09 août 2026",
    avatar: "",
    rating: 5,
    text: "J'ai commandé le Swim Jet et il tient absolument toutes ses promesses. Le service client est ultra rapide et très disponible."
  },
  {
    id: "tp-4",
    name: "Anne Quinn",
    date: "10 août 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_32459157-cea8-4478-9daf-0d628de2c83f.png?crop=center&height=160&v=1786427972&width=160",
    rating: 5,
    text: "Service client et suivi après-vente absolument exemplaires !"
  },
  {
    id: "tp-5",
    name: "Corinne B.",
    date: "09 août 2026",
    avatar: "",
    rating: 5,
    text: "L'attente en valait largement la peine. Testé dans l'eau dès réception : je suis bluffée par la puissance et les finitions haut de gamme. Entièrement satisfaite !"
  },
  {
    id: "tp-6",
    name: "Norbert W.",
    date: "09 août 2026",
    avatar: "",
    rating: 5,
    text: "Performance remarquable et une vraie valorisation pour notre petit bassin ! Livré rapidement, prêt à l'emploi – un pur bonheur pour nager au quotidien sans faire demi-tour."
  },
  {
    id: "tp-7",
    name: "Albert Carrozzo",
    date: "26 juillet 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_33227b19-1575-4496-954f-2e14c3feda80.png?crop=center&height=160&v=1785312272&width=160",
    rating: 5,
    text: "J'utilise le système iGarden régulièrement et il a totalement transformé mes séances de sport à la maison. Le flux d'eau est puissant, stable et facilement réglable..."
  },
  {
    id: "tp-8",
    name: "Renaud P.",
    date: "06 août 2026",
    avatar: "",
    rating: 5,
    text: "Un produit remarquable, et le contact avec le service client a été parfait. Entreprise sérieuse, innovation utile et livraison ponctuelle."
  },
  {
    id: "tp-9",
    name: "Denise Benjamin",
    date: "04 août 2026",
    avatar: "",
    rating: 5,
    text: "Réponse immédiate de l'équipe pour la mise en route. Totalement convaincue par la qualité de l'accompagnement. Je recommande les yeux fermés !"
  },
  {
    id: "tp-10",
    name: "Christophe Jackson",
    date: "02 août 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_2_ac21224a-b899-4077-84a4-da84afae7d88.png?crop=center&height=160&v=1786428540&width=160",
    rating: 4,
    text: "En tant qu'ancien nageur en club, je trouve le courant agréablement homogène et parfait pour de longues distances sur place. L'hydromassage est un vrai plus."
  },
  {
    id: "tp-11",
    name: "Bernard Miller",
    date: "27 juillet 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_3_e3a1070b-1267-406b-b4f4-274069ee7200.png?crop=center&height=160&v=1786437520&width=160",
    rating: 5,
    text: "Extrêmement satisfait du produit et de la marque. Le propulseur est maniable, facile à fixer et remplit parfaitement son rôle. Envoi soigné et rapide."
  },
  {
    id: "tp-12",
    name: "Grégoire Lemaire",
    date: "17 juin 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_3.png?crop=center&height=160&v=1784616593&width=160",
    rating: 5,
    text: "La qualité d'une marque se mesure à son service client. iGarden a dépassé mes attentes avec un suivi exemplaire et une livraison dans les délais."
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
    text: "Le iGarden Swim Jet 1 000 W est un système de contre-courant sans fil primé qui transforme toute piscine en ligne de nage infinie.",
    link: "https://design.museaward.com/winner-info.php?id=37803"
  },
  {
    source: "Tech Times",
    text: "Le iGarden Swim Jet 1 000 W réinvente la baignade à domicile : un contre-courant puissant combiné à 6 à 10 h d'autonomie à pleine puissance.",
    link: "https://www.techtimes.com/articles/314615/20260212/smartest-member-family-how-ai-powered-igarden-x-series-changing-backyard-fun.htm"
  },
  {
    source: "TIME Best Inventions",
    text: "TIME Best Inventions — Le iGarden Swim Jet 1 000 W offre une poussée remarquable et une polyvalence exceptionnelle pour nager chez soi sans contrainte.",
    link: "https://time.com/collections/best-inventions-2025/7318411/igarden-swim-jet-p-series"
  },
  {
    source: "CES Innovation Awards 2026",
    text: "Lauréat du CES Innovation Award pour sa propulsion 1 000 W haute efficacité et sa conception sans fil basse tension 100% sécurisée.",
    link: "https://www.ces.tech/ces-innovation-awards/2026/igarden-swim-jet-x-series/"
  }
];

export const FEATURE_GRID_ITEMS = [
  {
    id: 0,
    tall: true,
    title: "Service client VIP dédié",
    image: "https://eu.store.igarden.ai/cdn/shop/files/01_1_d30c0b5b-ad25-4a48-b286-1c1705d18707.png?v=1782444829&width=600"
  },
  {
    id: 1,
    tall: false,
    title: "Livraison gratuite & express",
    image: "https://eu.store.igarden.ai/cdn/shop/files/Shipping_truck_with_package_for_logistics_and_freight_transportation_1.png?v=1782444799&width=600"
  },
  {
    id: 2,
    tall: false,
    title: "2 ans de garantie constructeur",
    image: "https://eu.store.igarden.ai/cdn/shop/files/Account_security_Antivirus_protection_Shield_with_checkmark_badge_1.png?v=1782444800&width=600"
  },
  {
    id: 3,
    tall: true,
    title: "Paiement 100% sécurisé",
    image: "https://eu.store.igarden.ai/cdn/shop/files/credit_card_payment_with_coins_and_transfer_arrows_1.png?v=1782444829&width=600"
  },
  {
    id: 4,
    tall: false,
    title: "Support 24/7 par chat et e-mail",
    image: "https://eu.store.igarden.ai/cdn/shop/files/02_1.png?v=1782444835&width=600"
  },
  {
    id: 5,
    tall: false,
    title: "30 jours satisfait ou remboursé",
    image: "https://eu.store.igarden.ai/cdn/shop/files/2222_2.png?v=1782444799&width=600"
  }
];

export const BLOG_ARTICLES = [
  {
    id: "blog-1",
    title: "Qu'est-ce qu'un système de nage à contre-courant ? Le guide complet pour débuter",
    excerpt: "Avoir une petite piscine de jardin ne signifie pas renoncer aux entraînements de natation. Le système mobile iGarden...",
    date: "2026-08-19",
    image: "https://eu.store.igarden.ai/cdn/shop/articles/igarden_swim_jet.png?v=1787124881&width=800",
    link: "https://eu.store.igarden.ai/blogs/news/swim-machine-beginner-guides"
  },
  {
    id: "blog-2",
    title: "5 alternatives aux installations fixes : comment nager à l'infini dans son jardin",
    excerpt: "Pour de nombreux propriétaires de piscine en France et en Europe, le propulseur mobile iGarden Swim Jet est la solution idéale...",
    date: "2026-08-17",
    image: "https://eu.store.igarden.ai/cdn/shop/articles/Endless_pool_alternatives_5c5a4834-19cf-4d5c-9f94-65caa6f32a62.webp?v=1786959857&width=800",
    link: "https://eu.store.igarden.ai/blogs/news/endless-pool-alternatives"
  },
  {
    id: "blog-3",
    title: "Nager sur place dans une petite piscine : techniques, conseils et cardio",
    excerpt: "Nager contre un courant continu de 1 000 W permet de s'entraîner sans interruption quelle que soit la taille du bassin...",
    date: "2026-08-13",
    image: "https://eu.store.igarden.ai/cdn/shop/articles/Swim_in_place_ebfe3823-44a0-4d1f-9ce8-0f45dc485e35.webp?v=1786959752&width=800",
    link: "https://eu.store.igarden.ai/blogs/news/how-to-swim-in-place-europea-guide"
  },
  {
    id: "blog-4",
    title: "Les systèmes de contre-courant mobiles valent-ils le coup ? Comparatif & avis",
    excerpt: "Pourquoi le système mobile iGarden transforme n'importe quel bassin en oasis sportive et de relaxation...",
    date: "2026-08-12",
    image: "https://eu.store.igarden.ai/cdn/shop/articles/Are_Counter_Current_Swim_Machine_Worth_it_449e2a34-77a9-4ad4-927a-183917827a86.webp?v=1786958964&width=800",
    link: "https://eu.store.igarden.ai/blogs/news/are-swim-machines-worth-it"
  },
  {
    id: "blog-5",
    title: "La meilleure machine de nage à contre-courant pour piscine existante (Guide 2026)",
    excerpt: "Comment installer le iGarden Swim Jet 1 000 W en moins de 2 minutes sur n'importe quel bord de piscine...",
    date: "2026-08-07",
    image: "https://eu.store.igarden.ai/cdn/shop/articles/04_What_to_Look_for_in_a_Portable_Swim_Jet.png?v=1786081701&width=800",
    link: "https://eu.store.igarden.ai/blogs/news/best-swim-machines-for-existing-pools"
  },
  {
    id: "blog-6",
    title: "Nage à contre-courant en détail : fonctionnement, écoulement laminaire & efficacité",
    excerpt: "Un système de contre-courant de pointe produit un flux large et homogène pour des sensations de nage ultra naturelles...",
    date: "2026-07-30",
    image: "https://eu.store.igarden.ai/cdn/shop/articles/06_Portable_Swim_Jet_vs_Built-In_Swim_Jet_263f4fb4-0a69-4798-9e3c-63f3e25dd385.png?v=1785404749&width=800",
    link: "https://eu.store.igarden.ai/blogs/news/counter-current-swim-system-guide"
  },
  {
    id: "blog-7",
    title: "Guide complet du Swim Jet : puissance 1 000 W, autonomie et maniabilité",
    excerpt: "Tout ce qu'il faut savoir sur le Swim Jet 1 000 W mobile, ses 6 à 10 h d'autonomie et sa compatibilité universelle...",
    date: "2026-06-10",
    image: "https://eu.store.igarden.ai/cdn/shop/articles/04_c49af546-ddf8-4a26-b820-d3553d24b8d4.png?v=1781749607&width=800",
    link: "https://eu.store.igarden.ai/blogs/news/guide-complet-du-swim-jet"
  },
  {
    id: "blog-9",
    title: "Critères techniques : puissance moteur, profil de courant et sécurité hydraulique",
    excerpt: "Comprenez les facteurs déterminants d'un moteur 1 000 W, de la canalisation laminaire et de la gestion de batterie...",
    date: "2026-05-25",
    image: "https://eu.store.igarden.ai/cdn/shop/articles/03_273932ef-a043-4b50-8496-42ceb1e41dbd.png?v=1779702473&width=800",
    link: "https://eu.store.igarden.ai/blogs/news/les-normes-techniques-derriere-les-machines-a-courant-de-nage"
  }
];
