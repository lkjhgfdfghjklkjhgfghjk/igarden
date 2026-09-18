import { ProductVariant, AccessoryOption, KolVideo, Athlete, PressQuote, TrustpilotReview, UserReview } from './types';

export const CHECKOUT_URL = "https://braceletot.myshopify.com/cart/add?items[][id]=57181764125012&items[][quantity]=1&return_to=%2Fcheckout";

export const PRODUCT_VARIANTS: ProductVariant[] = [
  {
    id: "swim-jet-1000w",
    sku: "SJD-1000W-UNIV-FR",
    name: "Jet de natation portable iGarden Swim Jet — 1 000 W",
    shortName: "Swim Jet — 1 000 W",
    subtitle: "Système de nage à contre-courant universel et polyvalent — Compatible avec toutes les piscines",
    price: 229.00,
    originalPrice: 418.00,
    discountAmount: 189.00,
    couponCode: "SWIMJET",
    couponOff: "€189,00",
    checkoutUrl: "https://braceletot.myshopify.com/cart/add?items[][id]=57181764125012&items[][quantity]=1&return_to=%2Fcheckout",
    specsSummary: "1 000 W de puissance | 6 à 10 h d'autonomie à pleine puissance | Compatible avec toutes les piscines",
    power: "1 000 W",
    speed: "1,5 m/s",
    batteryLife: "6 à 10 heures",
    flowRate: "Flux laminaire haute puissance",
    images: [
      "https://eu.store.igarden.ai/cdn/shop/files/1-FR-1.png?v=1782461732",
      "https://eu.store.igarden.ai/cdn/shop/files/2-FR_678d7fd7-7477-4c54-af51-84fb9fb6b017.png?v=1782461722",
      "https://eu.store.igarden.ai/cdn/shop/files/3-FR_8a800e11-2d34-4c21-9ad0-0dc7085c7d01.png?v=1782461729",
      "https://eu.store.igarden.ai/cdn/shop/files/4-FR_542fc470-0971-4ab4-b0d7-5c7a2134836d.png?v=1782461740",
      "https://eu.store.igarden.ai/cdn/shop/files/5-FR_b4c2552b-97f0-4e34-bfa3-d688835edacb.png?v=1782461748",
      "https://eu.store.igarden.ai/cdn/shop/files/6-FR_916100ee-5d82-4f74-910f-8d281145ba32.png?v=1782461731",
      "https://eu.store.igarden.ai/cdn/shop/files/7-FR_b986d06c-32a6-4909-88b3-0b15e18b0dc0.png?v=1782461714",
      "https://eu.store.igarden.ai/cdn/shop/files/8-FR_10291cf6-102d-4229-8bca-a3406705dc1d.png?v=1782461726",
      "https://eu.store.igarden.ai/cdn/shop/files/swim-jet-x-series-in-the-real-scenes_1.jpg?v=1780570719",
      "https://eu.store.igarden.ai/cdn/shop/files/swim-jet-x-series-in-the-real-scenes_3.jpg?v=1780570719",
      "https://eu.store.igarden.ai/cdn/shop/files/swim-jet-x-series-in-the-real-scenes_4.jpg?v=1780570719",
      "https://eu.store.igarden.ai/cdn/shop/files/swim-jet-x-series-in-the-real-scenes_2.jpg?v=1780570720"
    ]
  }
];

export const ACCESSORIES: AccessoryOption[] = [
  {
    id: "storage-bag",
    title: "iGarden X Series Storage Bag",
    price: 79,
    originalPrice: 89,
    saveText: "Save €10,00",
    image: "https://eu.store.igarden.ai/cdn/shop/files/iGarden-X-series-swim-jet-storage-bag-for-x30-p30-x-5-x25-p15-x-air_400x.png?v=1787189266",
    selectedVariant: "48057856360666",
    variants: [
      { id: "48057856360666", name: "X AIR Storage Bag", price: 79, originalPrice: 89, image: "https://eu.store.igarden.ai/cdn/shop/files/iGarden-X-series-swim-jet-storage-bag-for-x30-p30-x-5-x25-p15-x-air_400x.png?v=1787189266" }
    ]
  },
  {
    id: "power-box",
    title: "iGarden Swim Jet Power Box",
    price: 229,
    originalPrice: 399,
    saveText: "Save €170,00",
    image: "https://eu.store.igarden.ai/cdn/shop/files/PowerBoxP30-P15_400x.jpg?v=1785465169",
    selectedVariant: "48284051079386",
    variants: [
      { id: "48284051079386", name: "Extra P30 Power Box", price: 229, originalPrice: 399, image: "https://eu.store.igarden.ai/cdn/shop/files/PowerBoxP30-P15_400x.jpg?v=1785465169" }
    ]
  },
  {
    id: "floating-lights",
    title: "LED Floating Pool Lights (2pcs)",
    price: 35,
    originalPrice: 55,
    saveText: "Save €20,00",
    image: "https://eu.store.igarden.ai/cdn/shop/files/LEDPoolFloatingLights_2pcs_400x.png?v=1779085653"
  },
  {
    id: "wall-lights",
    title: "LED Pool Wall Lights (2pcs)",
    price: 35,
    originalPrice: 55,
    saveText: "Save €20,00",
    image: "https://eu.store.igarden.ai/cdn/shop/files/LEDPoolWallLights_2pcs_400x.jpg?v=1779085652"
  }
];

export const KOL_VIDEOS: KolVideo[] = [
  {
    id: "1",
    author: "becca_mann",
    followers: "22 000 abonnés",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/becca_mann-avatar.jpg?v=1781591358&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/becca_mann-screenshot-2.jpg?v=1781591688&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/a3b1b0fd7599454281eafd32d7332184/a3b1b0fd7599454281eafd32d7332184.HD-1080p-3.3Mbps-86641223.mp4?v=0",
    videoType: "shopify",
    quote: "L’iGarden Swim Jet X est l’une des choses les plus proches que j’ai trouvées pour recréer un effort en eau libre sans avoir à aller à l’océan. Cela a également changé la donne les jours où il est difficile de trouver un bassin d’entraînement !"
  },
  {
    id: "2",
    author: "cyansocial",
    followers: "49,8K abonnés",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/cyansocial-avatar.jpg?v=1781591358&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/cyansocial-screenshot.jpg?v=1781591688&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/727e7d57d4074d4ba925069c3d63a089/727e7d57d4074d4ba925069c3d63a089.HD-1080p-7.2Mbps-86641224.mp4?v=0",
    videoType: "shopify",
    quote: "Juste une autre journée avec notre nouveau jouet de piscine !! Si vous envisagez de vous procurer la série iGarden Swim Jet X, c'est le moment."
  },
  {
    id: "3",
    author: "samanthafaevanderpool",
    followers: "400 000 abonnés",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/samanthafaevanderpool-avatar.jpg?v=1781591358&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/samanthafaevanderpool-screenshot.jpg?v=1781591688&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/cfdf5fa141bf4d508fb23d5a7dde8364/cfdf5fa141bf4d508fb23d5a7dde8364.HD-1080p-3.3Mbps-86641225.mp4?v=0",
    videoType: "shopify",
    quote: "Je ne pensais pas que quoi que ce soit puisse améliorer notre piscine… et puis c’est arrivé. Le iGardens Portal Swim Jet l'a complètement transformé, les enfants l'utilisent sans arrêt."
  },
  {
    id: "4",
    author: "la tribu waller",
    followers: "55,3K abonnés",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/thewallertribe-avatar.jpg?v=1781591358&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/thewallertribe-screenshot.jpg?v=1781591688&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/788c01e6e93d4deaa72185c1a900fbab/788c01e6e93d4deaa72185c1a900fbab.HD-1080p-2.5Mbps-86641226.mp4?v=0",
    videoType: "shopify",
    quote: "Les matins à la piscine sont devenus ma nouvelle routine préférée. ça commence calmement et immobile... puis le jet de nage se déclenche et tout à coup c'est un entraînement complet du corps sans en avoir l'impression."
  },
  {
    id: "5",
    author: "the.quinn.girls",
    followers: "190 000 abonnés",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/413224802_1096501271744146_8810377430334826692_n.jpg?v=1776667111&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/385a3a6382dc44b19da7e63028a5c83f.png?v=1776667092&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/f7b12f0f765f4aae930d8858349a2c80/f7b12f0f765f4aae930d8858349a2c80.HD-1080p-4.8Mbps-82043081.mp4?v=0",
    videoType: "shopify",
    quote: "Nous venons peut-être de débloquer un tout nouveau niveau de plaisir en piscine - les filles ont décidé d'essayer leur propre forme de \"wakeboard\" dans le jardin en utilisant notre iGarden Swim Jet X AIR."
  },
  {
    id: "6",
    author: "Elizabeth nage",
    followers: "2,78 millions d'abonnés",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/unnamed.jpg?v=1776669958&width=80",
    thumbnail: "https://i.ytimg.com/vi/NMJ-a9Q9LEk/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/NMJ-a9Q9LEk?autoplay=1",
    videoType: "youtube",
    quote: "Améliorez votre piscine de jardin avec l'iGarden Swim Jet X, un jet de nage portable qui transforme presque n'importe quelle piscine en un puissant système d'entraînement et d'exercice de natation."
  }
];

export const ATHLETES: Athlete[] = [
  {
    name: "Ashleigh Gentle",
    title: "Triathlète australien",
    quote: "J'ai été impressionné par le Swim Jet X. Compact et facile à installer, j'ai pu commencer mon entraînement immédiatement et m'adapter au réglage de récupération parfait.",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95.png?v=1778495754&width=200",
    image: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237167_475705fe-959c-4216-9ad5-24c4e2ced8d0.png?v=1778495757&width=1000"
  },
  {
    name: "Ella Ramsay",
    title: "Médaillé du relais olympique",
    quote: "L'installation a été rapide et facile, et le flux fluide et constant me permet de me concentrer sur les petits détails techniques qui font une grande différence dans mon coup.",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95_1.png?v=1778495754&width=200",
    image: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237167_3.png?v=1778495755&width=1000"
  },
  {
    name: "Josh Amberger",
    title: "Ironman australien",
    quote: "Le Swim Jet X apporte commodité et portabilité à mon programme de natation à domicile. Les hauteurs réglables et les vitesses multiples simulent parfaitement les conditions d’eau libre.",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95_2.png?v=1778495754&width=200",
    image: "https://eu.store.igarden.ai/cdn/shop/files/11_1_b5e9c857-985c-482f-8393-a5198120e5d2.png?v=1778581053&width=1000"
  }
];

export const PRESS_QUOTES: PressQuote[] = [
  {
    name: "Geeky Gadgets",
    logo: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2121239268.png?crop=center&height=160&v=1787107934&width=160",
    quote: "La série X offre le même courant de qualité professionnelle que les systèmes intégrés, mais pour une fraction du coût et sans aucune construction requise."
  },
  {
    name: "Android Headlines",
    logo: "https://eu.store.igarden.ai/cdn/shop/files/Group_2121239264_1.png?crop=center&height=160&v=1787107962&width=160",
    quote: "iGarden a transformé un simple moteur aquatique en un partenaire d'entraînement sophistiqué et adaptatif qui apprend et répond aux nageurs en temps réel."
  },
  {
    name: "Tech Times",
    logo: "https://eu.store.igarden.ai/cdn/shop/files/Group_2121239259_a6d451d1-ccd8-4f94-ab8c-60f9f07fbf9a.png?crop=center&height=160&v=1787108023&width=160",
    quote: "C'est plus qu'un simple moyen de créer un courant : c'est un système intelligent et adaptatif qui réagit à la façon dont vous nagez."
  }
];

export const FEATURED_LOGOS = [
  { name: "MURS TECHNIQUES", logo: "https://eu.store.igarden.ai/cdn/shop/files/logo_2_5b9cfe5a-3a47-403c-a22c-213b9673b242.png?v=1778496508&width=400", bg: "#f86e5d" },
  { name: "SCIENCE.ME", logo: "https://eu.store.igarden.ai/cdn/shop/files/logo_a9a22011-a34c-4a41-bfd5-63d17d037abf.png?v=1778496536&width=400", bg: "#d2232b" },
  { name: "Press 1", logo: "https://eu.store.igarden.ai/cdn/shop/files/image_219_2.png?v=1778496561&width=400", bg: "#ffffff" },
  { name: "NÉOZON", logo: "https://eu.store.igarden.ai/cdn/shop/files/image_219.png?v=1778496590&width=400", bg: "#ffffff" },
  { name: "Press 2", logo: "https://eu.store.igarden.ai/cdn/shop/files/Clip_path_group.png?v=1778496616&width=400", bg: "#ffffff" },
  { name: "Press 3", logo: "https://eu.store.igarden.ai/cdn/shop/files/image_218.png?v=1778496643&width=400", bg: "#ffffff" },
  { name: "Press 4", logo: "https://eu.store.igarden.ai/cdn/shop/files/image_921.png?v=1778496672&width=400", bg: "#ffffff" }
];

export const TRUSTPILOT_REVIEWS: TrustpilotReview[] = [
  {
    id: "1",
    name: "Kevin Evans",
    date: "11 août 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/Group_2121239268.png?crop=center&height=160&v=1787107934&width=160",
    rating: 5,
    text: "J'ai commandé le Swim Jet X AIR et il fonctionne exactement comme décrit. Le service client a été réactif, livraison rapide en France avec suivi par email. Une excellente expérience !"
  },
  {
    id: "2",
    name: "Alexandre S.",
    date: "18 août 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/Group_2121239264_1.png?crop=center&height=160&v=1787107962&width=160",
    rating: 5,
    text: "J'ai déjà utilisé mon jet de nage à plusieurs reprises et le résultat est bluffant ! Le débit est amplement suffisant pour un entraînement complet à domicile. La batterie tient parfaitement."
  },
  {
    id: "3",
    name: "Éric Bergin",
    date: "09 août 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/Group_2121239259_a6d451d1-ccd8-4f94-ab8c-60f9f07fbf9a.png?crop=center&height=160&v=1787108023&width=160",
    rating: 5,
    text: "Tout est parfait ! L'installation sur ma piscine hors-sol a pris moins de 2 minutes. Expédition rapide, bonne communication et produit de qualité remarquable."
  },
  {
    id: "4",
    name: "Chloé D.",
    date: "09 août 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/Group_2121239261_738934b1-ff7b-45b5-9896-0c972e7837c7.png?crop=center&height=160&v=1787108068&width=160",
    rating: 5,
    text: "Le Swim Jet est fantastique ! Il a transformé notre petite piscine en véritable couloir de nage. Les enfants l'adorent aussi pour jouer avec le courant."
  },
  {
    id: "5",
    name: "René P.",
    date: "07 août 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/Group_2121239263_808be5a7-ba7e-49b8-9136-bd4b64e35ea6.png?crop=center&height=160&v=1787108135&width=160",
    rating: 5,
    text: "Produit exceptionnel et support client francophone très efficace. Rapport qualité/prix imbattable pour un système de nage à contre-courant."
  },
  {
    id: "6",
    name: "Norbert M.",
    date: "26 juillet 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/Group_2121239262_1b471ff2-0e47-4ad2-a614-4523966dbf02.png?crop=center&height=160&v=1787108208&width=160",
    rating: 5,
    text: "Performance impressionnante, ça change complètement la vie pour les petites piscines de jardin. Finitions soignées et simplicité d'utilisation exemplaire."
  }
];

export const NATIVE_FRENCH_REVIEWS: UserReview[] = [
  {
    id: "rev-1",
    author: "Julien Morel",
    rating: 5,
    date: "22/08/2026",
    title: "Bluffé par la puissance et le silence du moteur",
    content: "Reçu en 48h par Colissimo dans le Var. Installé sur notre piscine tubulaire Intex de 4x2m en 1 minute chrono sans aucun outil. Le courant est remarquablement linéaire et stable, on nage en continu sans jamais toucher les parois. Mes séances de 45 minutes le matin sont désormais un pur bonheur !",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-2",
    author: "Sophie Delannoy",
    rating: 5,
    date: "19/08/2026",
    title: "Une vraie révolution pour notre petite piscine à Bordeaux",
    content: "Nous hésitions avec un système de nage encastré à plus de 4 000 €, mais pour 229,00 € cet appareil fait exactement le même travail sans aucun chantier. La télécommande sans fil est très pratique pour doser l'effort. Les enfants s'amusent aussi comme des fous avec le courant.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-3",
    author: "Laurent Giraud",
    rating: 5,
    date: "16/08/2026",
    title: "Idéal pour l'entraînement triathlon",
    content: "En tant que triathlète amateur, nager dans un bassin de 6 mètres était frustrant. Avec le Swim Jet 1 000 W, le contre-courant offre une résistance idéale pour travailler le gainage et l'endurance en crawl. La batterie au lithium tient facilement plusieurs bonnes séances intensives.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-4",
    author: "Nathalie B.",
    rating: 5,
    date: "14/08/2026",
    title: "Très simple à installer et sécurisant",
    content: "J'avais peur pour la fixation sur notre margelle en bois composite mais la pince réglable serre fermement et ne laisse aucune trace. C'est du solide, étanche IP68, et rassurant car il n'y a pas de 220V qui trempe dans l'eau. Bravo !",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-5",
    author: "Thierry Fontaine",
    rating: 5,
    date: "11/08/2026",
    title: "Parfait pour la rééducation du dos",
    content: "Mon kiné m'a conseillé la natation quotidienne. Avec ce jet portable, je fais ma brasse et mes étirements tous les jours chez moi sans aller au complexe municipal bondé. Emballage soigné et notice en français claire.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-6",
    author: "Émilie & Patrice",
    rating: 5,
    date: "08/08/2026",
    title: "Livraison ultra rapide et produit haut de gamme",
    content: "Commandé mardi matin, livré jeudi midi en Bretagne. Tout était bien calé dans le carton. La finition en polymère haute résistance inspire confiance. On a nagé tout le week-end, rien à redire, ça vaut largement son prix !",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-7",
    author: "Benoît V.",
    rating: 4,
    date: "05/08/2026",
    title: "Très bon produit, courant très agréable",
    content: "Courant large et régulier, pas de remous chaotiques désagréables. La puissance est très bien étagée. Seul petit bémol : le poids du boîtier batterie quand on le transporte, mais les roulettes intégrées facilitent bien le déplacement.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-8",
    author: "Christophe R.",
    rating: 5,
    date: "02/08/2026",
    title: "Testé sur piscine coque polyester : Impeccable !",
    content: "S'adapte sans problème sur notre margelle arrondie en pierre reconstituée. Le réglage de profondeur permet d'ajuster le flux pile au niveau du torse. Ma femme et moi sommes conquis par la fluidité de nage.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-9",
    author: "Sandrine Lemoine",
    rating: 5,
    date: "30/07/2026",
    title: "Excellent SAV et conseils personnalisés",
    content: "J'avais une question sur l'hivernage avant de passer commande, le service client par chat m'a répondu en 5 minutes avec toutes les explications en français. Reçu rapidement et déjà adopté par toute la famille.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-10",
    author: "David Dupuis",
    rating: 5,
    date: "27/07/2026",
    title: "Adieu les virages toutes les 3 brasses",
    content: "Dans notre piscine de 4m de long, faire des allers-retours était lassant. Maintenant on nage 20 minutes d'affilée en fixant un point sans jamais s'arrêter. C'est une vraie transformation !",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-11",
    author: "Antoine Mercier",
    rating: 5,
    date: "24/07/2026",
    title: "Rapport qualité/prix exceptionnel à 229,00 €",
    content: "À ce prix avec la promo, c'est une affaire en or comparé aux pompes de nage traditionnelles qui demandent des tuyauteries sous dalle et des milliers d'euros de plomberie. Fonctionne dès le déballage.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-12",
    author: "Valérie Cazeneuve",
    rating: 5,
    date: "21/07/2026",
    title: "Très silencieux et doux pour les articulations",
    content: "Le bruit est minime, on entend surtout le clapotis naturel de l'eau. Parfait pour nager tôt le matin sans réveiller le voisinage. Je recommande les yeux fermés.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-13",
    author: "Guillaume H.",
    rating: 5,
    date: "18/07/2026",
    title: "Plaisir quotidien pour toute la maison",
    content: "La fixation se monte et se démonte en un clin d'œil quand on veut ranger le jet pour la nuit. La qualité de fabrication est digne d'une grande marque.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-14",
    author: "Céline Martin",
    rating: 5,
    date: "15/07/2026",
    title: "Superbe expérience d'achat",
    content: "Paiement sécurisé rapide, colis bien protégé et suivi en temps réel. Le produit correspond exactement aux vidéos démonstratives. Merci iGarden France !",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-15",
    author: "Pascal D.",
    rating: 4,
    date: "12/07/2026",
    title: "Très bon équipement, nage fluide",
    content: "Courant puissant, vitesse 1,5 m/s réglable et largement suffisante pour un bon rythme cardiaque. Très satisfait de mon achat pour la saison estivale.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-16",
    author: "Isabelle Perrin",
    rating: 5,
    date: "09/07/2026",
    title: "Nos vacances d'été transformées dans le jardin",
    content: "On a passé l'été à nager à la maison avec les enfants. Le système est tellement intuitif que même les plus jeunes savent l'allumer en toute sécurité.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-17",
    author: "François-Xavier B.",
    rating: 5,
    date: "06/07/2026",
    title: "Fini les abonnements de piscine municipale",
    content: "Rentabilisé en un été ! Nager chez soi quand on veut, sans horaires imposés ni chlore agressif des bassins publics. Une vraie bouffée d'oxygène.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-18",
    author: "Monique V.",
    rating: 5,
    date: "03/07/2026",
    title: "Facile à manipuler même pour une personne seule",
    content: "J'avais peur que ce soit trop lourd à manipuler mais le format valise à roulettes est vraiment bien pensé. Je le range au garage après chaque utilisation sans effort.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-19",
    author: "Fabrice Guérin",
    rating: 5,
    date: "29/06/2026",
    title: "Efficacité redoutable sur piscine semi-enterrée bois",
    content: "Installé sur les madriers de notre piscine en pin traité, la pince ne glisse pas d'un millimètre grâce aux patins en caoutchouc renforcé. Rien à redire.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-20",
    author: "Audrey T.",
    rating: 5,
    date: "26/06/2026",
    title: "Garantie 2 ans rassurante et produit au top",
    content: "Belle conception, étanchéité irréprochable et SAV joignable en direct. C'est le meilleur investissement qu'on ait fait pour notre extérieur depuis des années.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  }
];
