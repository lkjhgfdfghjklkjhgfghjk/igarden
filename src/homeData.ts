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
    id: "school_banner_LCDNyF",
    type: "school",
    bgPc: "https://eu.store.igarden.ai/cdn/shop/files/Hero_Banner_3.png?v=1785481427&width=1920",
    bgMb: "https://eu.store.igarden.ai/cdn/shop/files/Hero_Banner_4.png?v=1785481427&width=430",
    eyebrow: "Offres de Rentrée",
    heading: "Économisez jusqu’à 680 €",
    desc: "Plus de baignade. Moins de nettoyage.",
    btnText: "Débloquez des économies",
    btnLink: "/fr/products/igarden-swim-jet-x-series-portable-swim-machine",
    btnBg: "#f86709",
    btnColor: "#ffffff",
    endTs: 1788249599
  },
  {
    id: "slide_PPG9m4",
    type: "standard",
    bgPc: "https://eu.store.igarden.ai/cdn/shop/files/Hero_banner.jpg?v=1780654836&width=1920",
    bgMb: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237258_1.jpg?v=1780654824&width=430",
    eyebrow: "Plus de 4,2 millions d'euros récoltés sur Kickstarter",
    heading: "iGarden Swim Jet Série X",
    desc: "Ramenez le parc aquatique à la maison",
    btnText: "Acheter maintenant",
    btnLink: "/fr/products/igarden-swim-jet-x-series-portable-swim-machine",
    btnBg: "#0097e3",
    btnColor: "#ffffff",
    align: "center"
  },
  {
    id: "slide_nUdfFe",
    type: "standard",
    bgPc: "https://eu.store.igarden.ai/cdn/shop/files/16H_a79bd09c-4f40-47f5-a7ab-393539077e83.png?v=1787024896&width=1920",
    bgMb: "https://eu.store.igarden.ai/cdn/shop/files/16H_875f5f7f-fabf-46d2-8864-3c0c6375ca3d.png?v=1787031185&width=430",
    eyebrow: "iGarden Robotique",
    heading: "Nettoyeur de piscine série M1-Al",
    desc: "Nettoyage en 20 minutes. Mains libres pendant 30 jours.",
    btnText: "Acheter maintenant",
    btnLink: "/fr/products/nettoyeur-de-piscine-igarden-serie-m1-ai",
    btnBg: "#000000",
    btnColor: "#ffffff",
    align: "center"
  },
  {
    id: "slide_BFrMWV",
    type: "standard",
    bgPc: "https://eu.store.igarden.ai/cdn/shop/files/banner_1920_648.jpg?v=1780568147&width=1920",
    bgMb: "https://eu.store.igarden.ai/cdn/shop/files/banner_860_1200.jpg?v=1780568145&width=430",
    eyebrow: "iGarden Robotique",
    heading: "Nettoyeur de piscine série K",
    desc: "Une charge, dure toute la semaine.",
    btnText: "Acheter maintenant",
    btnLink: "/fr/products/robot-nettoyeur-de-piscine-sans-fil-igarden-serie-k",
    btnBg: "#ffffff",
    btnColor: "#121212",
    align: "left"
  },
  {
    id: "slide_xh3fDQ",
    type: "standard",
    bgPc: "https://eu.store.igarden.ai/cdn/shop/files/Image_23_1_1_1.png?v=1776675375&width=1920",
    bgMb: "https://eu.store.igarden.ai/cdn/shop/files/Image_23_1_2.png?v=1776675374&width=430",
    eyebrow: "iGarden Robotique",
    heading: "Nettoyeur de piscine série KN",
    desc: "Conception légère. Nettoyage puissant.",
    btnText: "Acheter maintenant",
    btnLink: "/fr/products/igarden-robot-piscine-kn-series",
    btnBg: "#ffffff",
    btnColor: "#000000",
    align: "left"
  },
  {
    id: "slide_w3LGMp",
    type: "standard",
    bgPc: "https://eu.store.igarden.ai/cdn/shop/files/1920_600_8f2ac991-2f86-4d48-a6d0-510dc12e05e6.png?v=1777008904&width=1920",
    bgMb: "https://eu.store.igarden.ai/cdn/shop/files/750_500.png?v=1776664297&width=430",
    eyebrow: "iGarden Robotique",
    heading: "Tondeuse à gazon série R",
    desc: "Toujours sans limites. Détendez-vous toujours.",
    btnText: "Acheter maintenant",
    btnLink: "/fr/products/igarden-robot-tondeuse-a-gazon-serie-r",
    btnBg: "#ffffff",
    btnColor: "#000000",
    align: "left"
  }
];

export const TRUST_BAR_ITEMS = [
  {
    icon: "https://eu.store.igarden.ai/cdn/shop/files/icon_document.svg?v=1772780165&width=80",
    label: "Livraison gratuite et rapide"
  },
  {
    icon: "https://eu.store.igarden.ai/cdn/shop/files/icon_star.svg?v=1772780166&width=80",
    label: "Retours sous 30 jours"
  },
  {
    icon: "https://eu.store.igarden.ai/cdn/shop/files/icon_shield_svg.svg?v=1772780175&width=80",
    label: "2 ans+ de garantie"
  },
  {
    icon: "https://eu.store.igarden.ai/cdn/shop/files/icon_smile.svg?v=1772780165&width=80",
    label: "Méthodes de paiement sécurisées"
  }
];

export const TESTIMONIALS_1 = [
  {
    id: "t1-1",
    author: "dana_stalling",
    quote: '"Avec le Swim Jet, on profite d\'un débit puissant, d\'une infinité de possibilités pour nager et de notre propre parc aquatique à la maison !"',
    image: "https://eu.store.igarden.ai/cdn/shop/files/videoframe_55553.png?v=1787020733&width=800",
    link: "https://www.instagram.com/reel/DcGw3B4uLkp/"
  },
  {
    id: "t1-2",
    author: "aniuta.ugc",
    quote: '"Il génère un contre-courant puissant pour nager sur place, s\'entraîner ou s\'amuser en famille. J\'adore pouvoir régler le flux selon nos envies — d\'une baignade douce à une session sportive intense."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/videoframe_48822.png?v=1787021014&width=800",
    link: "https://www.instagram.com/reels/Db_jVc2OhkX/"
  },
  {
    id: "t1-3",
    author: "ffjeffo",
    quote: '"Le iGarden Swim Jet a complètement changé la façon dont nous utilisons notre piscine. L\'installation était étonnamment simple et, en quelques minutes, Jax en avait déjà fait son jeu préféré : sauter sur un flotteur et suivre le courant à travers la piscine."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/9436ec37-3268-4ac2-bc43-8072b10a88bf.png?v=1784888154&width=800",
    link: "/fr/products/igarden-swim-jet-x-series-portable-swim-machine"
  },
  {
    id: "t1-4",
    author: "ericamuellerhome",
    quote: '"Transformez votre piscine en lieu de rencontre estival. La série iGarden Swim Jet X apporte un courant doux et réglable directement à votre piscine de jardin. Que vous fassiez des longueurs, que vous vous entraîniez ou que vous vous amusiez simplement en famille, c\'est un moyen simple de tirer le meilleur parti de votre piscine tout au long de la saison."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/b97a9921-3a3d-451c-bc91-516dedebb94f.png?v=1784888202&width=800",
    link: "/fr/products/igarden-swim-jet-x-series-portable-swim-machine"
  },
  {
    id: "t1-5",
    author: "kerrybalbuziente",
    quote: '"Une piscine... des façons infinies d\'en profiter ! ☀️💦 Des flotteurs relaxants à l\'entraînement à la natation et tout le reste. L\'iGarden Swim Jet X transforme la piscine du jardin en quelques secondes."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/752682106_18609390595031892_8824578704219922165_n.jpg?v=1784889373&width=800",
    link: "/fr/products/igarden-swim-jet-x-series-portable-swim-machine"
  }
];

export const TESTIMONIALS_2 = [
  {
    id: "t2-1",
    author: "katelynsmorgan",
    quote: '"Passez au nettoyeur de piscine IA iGarden M1-45. L\'IA repère les débris et repasse sur les zones oubliées. Aucun tuyau encombrant, plus sûr pour les enfants. Il élimine toutes les impuretés cachées du bassin."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/lQLPJxse7lqZQ_PNBKrNAp6wospjemEhRFIKVlpPjH-XAA_670_1194.png?v=1787032226&width=800",
    link: "https://www.instagram.com/reels/DbIwCD-px4g/"
  },
  {
    id: "t2-2",
    author: "heyaddnotsubtract",
    quote: '"L\'entretien de notre piscine est devenu un véritable jeu d\'enfant. Si seulement nous l\'avions acheté plus tôt ! Idéal pour garder une eau cristalline sans le moindre effort au quotidien."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/videoframe_30762.png?v=1787022859&width=800",
    link: "https://www.instagram.com/reel/DZ7x3pWBX03/"
  },
  {
    id: "t2-3",
    author: "jaymesquires",
    quote: '"Piscine sale prête à nager en 20 minutes avec le nettoyeur de piscine iGarden M1-AI !"',
    image: "https://eu.store.igarden.ai/cdn/shop/files/444796d8-7a10-44b2-9c22-bc61d46015a6.png?v=1784888560&width=800",
    link: "/fr/products/nettoyeur-de-piscine-igarden-serie-m1-ai"
  },
  {
    id: "t2-4",
    author: "stacysathome",
    quote: '"Garder notre piscine propre n\'a jamais été aussi simple ! La série iGarden Pool Cleaner M1-AI fait tout le travail à notre place avec une aspiration puissante, une navigation intelligente et une autonomie impressionnante."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/c57a3f28-fd18-441d-8454-2a724f53c81e.png?v=1784888704&width=800",
    link: "/fr/products/nettoyeur-de-piscine-igarden-serie-m1-ai"
  },
  {
    id: "t2-5",
    author: "heyitsmariamugc",
    quote: '"✨ Gardez votre piscine limpide avec le nettoyeur de piscine iGarden KN Series ! 🏊💙 Passez moins de temps à nettoyer et plus de temps à profiter de votre piscine."',
    image: "https://eu.store.igarden.ai/cdn/shop/files/videoframe_21875.png?v=1784889873&width=800",
    link: "/fr/products/igarden-robot-piscine-kn-series"
  },
  {
    id: "t2-6",
    author: "lilileyvacortez",
    quote: '"Notre piscine mérite d\'être toujours impeccable et prête pour la baignade. Ce robot est devenu notre meilleur allié de l\'été !"',
    image: "https://eu.store.igarden.ai/cdn/shop/files/708270777_1498931005025705_3521763456855781907_n.jpg?v=1787021479&width=800",
    link: "https://www.instagram.com/reels/DYx4SJtRMtb/"
  },
  {
    id: "t2-7",
    author: "saharaebrahimi",
    quote: '"Découvrez le compagnon idéal pour votre bassin : iGarden M1. Double flux haute puissance, autonomie record jusqu\'à 16 heures et jusqu\'à 30 jours sans entretien manuel."',
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
    desc: "Je savais que nous adorerions le Swim Jet X, mais je ne savais tout simplement pas que Monk deviendrait un surfeur à plein temps. On peut dire sans risque de se tromper que c’est devenu l’endroit préféré de notre jardin à tous."
  },
  {
    id: "k2",
    author: "jonathanandjennahome",
    followers: "16 000 abonnés",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/c028f30f-3ad2-4d39-a0e1-f2ab26942c9d.png?v=1784890321&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/35a20b86-a1fe-4cfa-b7e0-0faf162bf218_1.png?v=1784890326&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/2b75c1c0d8c847c4936e5d4f4278de92/2b75c1c0d8c847c4936e5d4f4278de92.HD-1080p-2.5Mbps-89793881.mp4?v=0",
    desc: "Un générateur de vagues de piscine portable ? OUI SVP. Nous avons bricolé notre propre journée au lac dans notre jardin. Il s'agit de la série iGarden Swim Jet X. Cette chose a un certain pouvoir, mais vous pouvez commencer au niveau 1 comme nous l'avons fait."
  },
  {
    id: "k3",
    author: "les_hayeks",
    followers: "2405 000 abonnés",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/7efaab24-3016-48b9-a8ec-727b38f7d08a.png?v=1784890666&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/3ec1aade-2f7f-42f7-9d19-1ec7be744ab3.png?v=1784890674&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/50389fe3447045ffbc5803eea6c212b8/50389fe3447045ffbc5803eea6c212b8.HD-1080p-3.3Mbps-89794650.mp4?v=0",
    desc: "Préparez votre piscine pour l'été avec le nettoyeur de piscine iGarden M1-AI. J'aime à quel point il est simple et fiable, gardant notre piscine étincelante de propreté avec 20 minutes de nettoyage rapide AI, jusqu'à 16 heures d'autonomie et une garantie de 3 ans."
  },
  {
    id: "k4",
    author: "ollgabbigun",
    followers: "19 000 abonnés",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/123440b2-7478-4d80-8b74-1dc2c017acc3.png?v=1784891071&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/166cfeb6-bc09-4e79-a1bd-e70f3c08b31a.png?v=1784891080&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/b34434b795924fdea867f6f5b1afb6ed/b34434b795924fdea867f6f5b1afb6ed.HD-1080p-3.3Mbps-89794686.mp4?v=0",
    desc: "iGarden Portable Swim Jet X AIR rend votre piscine plus agréable et inoubliable."
  },
  {
    id: "k5",
    author: "autorité androïde",
    followers: "704 000 abonnés",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/0fe5e37a-129d-426c-8447-e682a7bbad0d.png?v=1784891426&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/dc062258-6747-4640-a05a-73cc6f102425.png?v=1784891431&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/f24222458a464b8bb3dfa81a72f36207/f24222458a464b8bb3dfa81a72f36207.HD-1080p-2.5Mbps-89795153.mp4?v=0",
    desc: "Piscine sale prête à nager en 20 minutes ! Nettoyeur de piscine iGarden M1-AI."
  },
  {
    id: "k6",
    author: "isydneyk",
    followers: "208 000 abonnés",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/650121470_18366392221205458_7345930834072426192_n.jpg?v=1784892091&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/750146965_18385958044205458_5282926624391628263_n.jpg?v=1784892092&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/46a971642efa4e8ca882fa50a41b8851/46a971642efa4e8ca882fa50a41b8851.HD-1080p-2.5Mbps-89795821.mp4?v=0",
    desc: "Obsédé par mon igarden Swim Jet X Pro 10 !! Il était si facile à installer et le courant de nage rend chaque journée à la piscine encore plus amusante. 😍"
  }
];

export const TRUSTPILOT_REVIEWS = [
  {
    id: "tp-1",
    name: "Tim Parisi",
    date: "18 août 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_861b8ced-5913-4f1d-971b-1b3b6a675e7a.png?crop=center&height=160&v=1787103106&width=160",
    rating: 5,
    text: "Temps de réponse exceptionnel un samedi soir tard, suivi d'un échange le dimanche. Service client remarquable et solution rapide trouvée dès lundi.\n\nUne expérience client irréprochable."
  },
  {
    id: "tp-2",
    name: "Don Stramanak",
    date: "10 août 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_1_7cf7be94-153c-49c6-8549-08614a3c2a30.png?crop=center&height=160&v=1786428214&width=160",
    rating: 5,
    text: "Le support client est formidable et résout chaque demande dès le premier échange. Les autres marques me faisaient tourner en rond, je n'achèterai plus jamais chez eux. Les produits iGarden sont exceptionnels, un grand merci !"
  },
  {
    id: "tp-3",
    name: "Kevin Evans",
    date: "09 août 2026",
    avatar: "",
    rating: 5,
    text: "J'ai commandé le Swim Jet X et il fonctionne exactement comme annoncé. Le service client est ultra-rapide et personnalisé lorsqu'on a besoin d'aide."
  },
  {
    id: "tp-4",
    name: "Amy Quinn",
    date: "10 août 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_32459157-cea8-4478-9daf-0d628de2c83f.png?crop=center&height=160&v=1786427972&width=160",
    rating: 5,
    text: "Service client et assistance après-vente absolument remarquables !"
  },
  {
    id: "tp-5",
    name: "Kathy",
    date: "09 août 2026",
    avatar: "",
    rating: 5,
    text: "J'ai reçu mon jet de nage iGarden et il valait vraiment l'attente. Testé dès son arrivée, je suis très impressionnée par la puissance et la finition. Très satisfaite de mon achat et du suivi client irréprochable."
  },
  {
    id: "tp-6",
    name: "Norm",
    date: "09 août 2026",
    avatar: "",
    rating: 5,
    text: "Performances exceptionnelles et véritable révolution pour les petites piscines ! Livré rapidement, testé dans l'eau immédiatement : un pur bonheur au quotidien pour nager sans limites."
  },
  {
    id: "tp-7",
    name: "Alberto Carrozzo",
    date: "26 juillet 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_33227b19-1575-4496-954f-2e14c3feda80.png?crop=center&height=160&v=1785312272&width=160",
    rating: 5,
    text: "J'utilise le jet de nage iGarden régulièrement dans ma piscine et il a réellement transformé mes séances. Le débit d'eau est puissant, stable et facilement réglable..."
  },
  {
    id: "tp-8",
    name: "RP",
    date: "06 août 2026",
    avatar: "",
    rating: 5,
    text: "Le produit est remarquable et le contact avec le support client a été parfait. Entreprise sérieuse, produits innovants et livraison rapide."
  },
  {
    id: "tp-9",
    name: "Denise Benjamin",
    date: "04 août 2026",
    avatar: "",
    rating: 5,
    text: "Réponse immédiate de l'équipe pour mes questions sur la mise en route. Totalement conquise par la réactivité du service client. Je recommande sans hésiter !"
  },
  {
    id: "tp-10",
    name: "Charles Jackson",
    date: "02 août 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_2_ac21224a-b899-4077-84a4-da84afae7d88.png?crop=center&height=160&v=1786428540&width=160",
    rating: 4,
    text: "Ancien nageur de compétition, je trouve le contre-courant régulier et parfait pour nager sur place sur de longues distances. Toute la famille adore aussi l'effet hydromassant."
  },
  {
    id: "tp-11",
    name: "BD Miller",
    date: "27 juillet 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_3_e3a1070b-1267-406b-b4f4-274069ee7200.png?crop=center&height=160&v=1786437520&width=160",
    rating: 5,
    text: "Extrêmement satisfait du produit et de la marque. Le jet est léger, facile à installer et remplit parfaitement sa mission. Livraison rapide et soignée."
  },
  {
    id: "tp-12",
    name: "Gregory Lee",
    date: "17 juin 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/73x73_3.png?crop=center&height=160&v=1784616593&width=160",
    rating: 5,
    text: "Le vrai test d'une marque se voit dans son service après-vente. iGarden a dépassé mes attentes avec un suivi exemplaire et des engagements tenus."
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
    name: "TUV Rheinland",
    img: "https://eu.store.igarden.ai/cdn/shop/files/tuv.png?height=120&v=1775816435",
    link: "https://www.linkedin.com/posts/tuv-rheinland-products_ces2026-tuvrheinland-igarden-activity-7415550617445650433-Y9Ky"
  }
];

export const AWARDS_REVIEWS = [
  {
    source: "MUSE Design Awards",
    text: "iGarden Intelligent Swim Jet X Series est une machine portable sans fil qui transforme les piscines domestiques ordinaires en environnements de baignade sans fin.",
    link: "https://design.museaward.com/winner-info.php?id=37803"
  },
  {
    source: "Tech Times",
    text: "Le membre le plus intelligent de la famille : comment la série iGarden Intelligent Swim Jet X, alimentée par l'IA, change le plaisir du jardin.",
    link: "https://www.techtimes.com/articles/314615/20260212/smartest-member-family-how-ai-powered-igarden-x-series-changing-backyard-fun.htm"
  },
  {
    source: "Pool Magazine",
    text: "iGarden dévoile de nouvelles innovations pour piscines et pelouses alimentées par l'IA au CES 2026. Au-delà des limites : innovation avec un but, amélioration de la vie grâce à la technologie. Robot nettoyeur de piscine iGarden M1-AI – Redéfinir l’entretien autonome de la piscine.",
    link: "https://www.poolmagazine.com/features/products/igarden-unveils-new-ai-powered-pool-and-lawn-innovations-at-ces-2026/"
  },
  {
    source: "The Verge",
    text: "Le robot de nettoyage de piscine intelligent avec une autonomie de 15 heures. Le robot de nettoyage de piscine intelligent iGarden série K offre un nettoyage à long terme, vous permettant ainsi plus de temps pour profiter de votre piscine.",
    link: "https://www.theverge.com/ad/695327/the-robot-pool-cleaner-with-a-15-hour-battery-life"
  },
  {
    source: "CNET",
    text: "Le robot de nettoyage de piscine intelligent iGarden K Pro 150 combine aspiration et endurance. Avec son design élégant et ses performances alimentées par l'IA, le nouveau nettoyeur de piscine d'iGarden fonctionne plus intelligemment et fonctionne plus longtemps pour faire de votre piscine une oasis, pas une corvée.",
    link: "https://www.cnet.com/content-payant/news/igardens-pool-cleaner-k-pro-150-combines-succion-with-endurance/"
  },
  {
    source: "SPLASH",
    text: "La série K du robot de nettoyage de piscine intelligent iGarden offre une approche plus intelligente et plus fiable de l'entretien quotidien de la piscine.",
    link: "https://www.splash.online/articles/how-the-igarden-k-series-redefines-smart-pool-care"
  }
];

export const FEATURE_GRID_ITEMS = [
  {
    id: 0,
    tall: true,
    title: "Service VIP exclusif",
    image: "https://eu.store.igarden.ai/cdn/shop/files/01_1_d30c0b5b-ad25-4a48-b286-1c1705d18707.png?v=1782444829&width=600"
  },
  {
    id: 1,
    tall: false,
    title: "Livraison gratuite et rapide",
    image: "https://eu.store.igarden.ai/cdn/shop/files/Shipping_truck_with_package_for_logistics_and_freight_transportation_1.png?v=1782444799&width=600"
  },
  {
    id: 2,
    tall: false,
    title: "2 ans+ de garantie",
    image: "https://eu.store.igarden.ai/cdn/shop/files/Account_security_Antivirus_protection_Shield_with_checkmark_badge_1.png?v=1782444800&width=600"
  },
  {
    id: 3,
    tall: true,
    title: "Méthodes de paiement sécurisées",
    image: "https://eu.store.igarden.ai/cdn/shop/files/credit_card_payment_with_coins_and_transfer_arrows_1.png?v=1782444829&width=600"
  },
  {
    id: 4,
    tall: false,
    title: "Assistance 24h/24 et 7j/7",
    image: "https://eu.store.igarden.ai/cdn/shop/files/02_1.png?v=1782444835&width=600"
  },
  {
    id: 5,
    tall: false,
    title: "Retours sous 30 jours",
    image: "https://eu.store.igarden.ai/cdn/shop/files/2222_2.png?v=1782444799&width=600"
  }
];

export const BLOG_ARTICLES = [
  {
    id: "blog-1",
    title: "Qu’est-ce qu’un système de nage à contre-courant ? Guide du débutant",
    excerpt: "Une piscine courte ne signifie pas forcément qu’il faut renoncer à une pratique sérieuse de la natation. De nombreuses piscines...",
    date: "2026-08-19",
    image: "https://eu.store.igarden.ai/cdn/shop/articles/igarden_swim_jet.png?v=1787124881&width=800",
    link: "https://eu.store.igarden.ai/fr/blogs/news/swim-machine-beginner-guides"
  },
  {
    id: "blog-2",
    title: "5 alternatives à l’Endless Pool : quelle solution choisir pour nager chez soi ?",
    excerpt: "Pour de nombreux propriétaires en France et en Europe, le problème n’est pas de ne pas avoir de piscine, mais...",
    date: "2026-08-17",
    image: "https://eu.store.igarden.ai/cdn/shop/articles/Endless_pool_alternatives_5c5a4834-19cf-4d5c-9f94-65caa6f32a62.webp?v=1786959857&width=800",
    link: "https://eu.store.igarden.ai/fr/blogs/news/endless-pool-alternatives"
  },
  {
    id: "blog-3",
    title: "Comment nager sur place dans une petite piscine",
    excerpt: "La nage sur place permet de s’entraîner en continu dans une piscine trop courte pour pratiquer la natation en longueur...",
    date: "2026-08-13",
    image: "https://eu.store.igarden.ai/cdn/shop/articles/Swim_in_place_ebfe3823-44a0-4d1f-9ce8-0f45dc485e35.webp?v=1786959752&width=800",
    link: "https://eu.store.igarden.ai/fr/blogs/news/how-to-swim-in-place-europea-guide"
  },
  {
    id: "blog-4",
    title: "Les appareils de nage à contre-courant en valent-ils la peine ? Guide complet pour les propriétaires de piscine",
    excerpt: "Oui, un appareil de nage à contre-courant peut en valoir la peine si votre piscine est trop courte pour pratiquer...",
    date: "2026-08-12",
    image: "https://eu.store.igarden.ai/cdn/shop/articles/Are_Counter_Current_Swim_Machine_Worth_it_449e2a34-77a9-4ad4-927a-183917827a86.webp?v=1786958964&width=800",
    link: "https://eu.store.igarden.ai/fr/blogs/news/are-swim-machines-worth-it"
  },
  {
    id: "blog-5",
    title: "Meilleure machine de nage pour une piscine existante en France (Guide 2026)",
    excerpt: "En France, la plupart des piscines privées sont conçues avant tout pour la détente, les loisirs en famille et les...",
    date: "2026-08-07",
    image: "https://eu.store.igarden.ai/cdn/shop/articles/04_What_to_Look_for_in_a_Portable_Swim_Jet.png?v=1786081701&width=800",
    link: "https://eu.store.igarden.ai/fr/blogs/news/best-swim-machines-for-existing-pools"
  },
  {
    id: "blog-6",
    title: "Guide complet de la nage à contre-courant en piscine",
    excerpt: "Un système de nage à contre-courant est un équipement de piscine qui génère un flux d’eau continu permettant au nageur...",
    date: "2026-07-30",
    image: "https://eu.store.igarden.ai/cdn/shop/articles/06_Portable_Swim_Jet_vs_Built-In_Swim_Jet_263f4fb4-0a69-4798-9e3c-63f3e25dd385.png?v=1785404749&width=800",
    link: "https://eu.store.igarden.ai/fr/blogs/news/counter-current-swim-system-guide"
  },
  {
    id: "blog-7",
    title: "Guide complet du Swim Jet : comment ils fonctionnent, avantages, coûts et comment choisir le bon système",
    excerpt: "Avez-vous déjà souhaité que votre piscine de jardin soit suffisamment grande pour des entraînements de natation continus ? Pour de...",
    date: "2026-06-10",
    image: "https://eu.store.igarden.ai/cdn/shop/articles/04_c49af546-ddf8-4a26-b820-d3553d24b8d4.png?v=1781749607&width=800",
    link: "https://eu.store.igarden.ai/fr/blogs/news/guide-complet-du-swim-jet"
  },
  {
    id: "blog-8",
    title: "Guide robot piscine Europe 2026 : tout savoir avant d'acheter un robot piscine en France",
    excerpt: "Entre les problèmes d’eau calcaire dans le Sud de la France, l’accumulation de feuilles dans les régions plus végétalisées et...",
    date: "2026-06-03",
    image: "https://eu.store.igarden.ai/cdn/shop/articles/Work_Hard_Play_Hard_The_Duo_That_Makes_Pool_Ownership_Stress-Free_8eca211e-a79c-412e-bcb3-2dc652dd2779.png?v=1780650354&width=800",
    link: "https://eu.store.igarden.ai/fr/blogs/news/guide-d-achat-de-robots-nettoyeurs-de-piscine-en-europe-en-2026"
  },
  {
    id: "blog-9",
    title: "Les principaux critères techniques des systèmes de nage à contre-courant",
    excerpt: "Les systèmes de nage à contre-courant, également appelés systèmes de nage à contre-courant ou jets de nage, sont conçus pour...",
    date: "2026-05-25",
    image: "https://eu.store.igarden.ai/cdn/shop/articles/03_273932ef-a043-4b50-8496-42ceb1e41dbd.png?v=1779702473&width=800",
    link: "https://eu.store.igarden.ai/fr/blogs/news/les-normes-techniques-derriere-les-machines-a-courant-de-nage"
  },
  {
    id: "blog-10",
    title: "Le guide d’équilibrage du pH : Comment obtenir une eau de piscine cristalline",
    excerpt: "Nous voulons tous retirer la couverture de notre piscine et contempler une eau propre, claire et bleue. Mais trop souvent,...",
    date: "2026-04-24",
    image: "https://eu.store.igarden.ai/cdn/shop/articles/PH_9674f9af-7f23-4795-b519-22a809b2d1b6.webp?v=1777017603&width=800",
    link: "https://eu.store.igarden.ai/fr/blogs/news/le-guide-d-equilibrage-du-ph-comment-obtenir-une-eau-de-piscine-cristalline"
  }
];
