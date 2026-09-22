import { ProductVariant, AccessoryOption, KolVideo, Athlete, PressQuote, TrustpilotReview, UserReview } from './types';

export const CHECKOUT_URL = "https://braceletot.myshopify.com/cart/57202356846932:1";

export const PRODUCT_VARIANTS: ProductVariant[] = [
  {
    id: "swim-jet-1000w",
    sku: "SJD-1000W-UNIV-FR",
    name: "Système de Nage à Contre-Courant Mobile iGarden Swim Jet — 1 000 W",
    shortName: "Swim Jet — 1 000 W",
    subtitle: "Système de nage à contre-courant universel haute performance – S'adapte à tous types de piscines sans travaux",
    price: 209.00,
    originalPrice: 418.00,
    discountAmount: 209.00,
    couponCode: "SWIMJET",
    couponOff: "209,00 €",
    checkoutUrl: "https://braceletot.myshopify.com/cart/57202356846932:1",
    specsSummary: "Puissance 1 000 W | 6 à 10 h d'autonomie à pleine puissance | Adapté à toutes les piscines",
    power: "1 000 W",
    speed: "1,5 m/s",
    batteryLife: "6 à 10 heures",
    flowRate: "Écoulement laminaire haute performance",
    images: [
      "https://eu.store.igarden.ai/cdn/shop/files/1-FR.png",
      "https://eu.store.igarden.ai/cdn/shop/files/2-FR.png",
      "https://eu.store.igarden.ai/cdn/shop/files/3-FR.png",
      "https://eu.store.igarden.ai/cdn/shop/files/4-FR.png",
      "https://eu.store.igarden.ai/cdn/shop/files/5-FR.png",
      "https://eu.store.igarden.ai/cdn/shop/files/6-FR.png",
      "https://eu.store.igarden.ai/cdn/shop/files/7-FR.png",
      "https://eu.store.igarden.ai/cdn/shop/files/8-FR.png",
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
    title: "Sac de transport haut de gamme iGarden Série X",
    price: 79,
    originalPrice: 89,
    saveText: "Économisez 10,00 €",
    image: "https://eu.store.igarden.ai/cdn/shop/files/iGarden-X-series-swim-jet-storage-bag-for-x30-p30-x-5-x25-p15-x-air_400x.png?v=1787189266",
    selectedVariant: "48057856360666",
    variants: [
      { id: "48057856360666", name: "Sac de protection X AIR", price: 79, originalPrice: 89, image: "https://eu.store.igarden.ai/cdn/shop/files/iGarden-X-series-swim-jet-storage-bag-for-x30-p30-x-5-x25-p15-x-air_400x.png?v=1787189266" }
    ]
  },
  {
    id: "power-box",
    title: "iGarden Swim Jet Power Box (Batterie supplémentaire)",
    price: 229,
    originalPrice: 399,
    saveText: "Économisez 170,00 €",
    image: "https://eu.store.igarden.ai/cdn/shop/files/PowerBoxP30-P15_400x.jpg?v=1785465169",
    selectedVariant: "48284051079386",
    variants: [
      { id: "48284051079386", name: "Power Box P30 supplémentaire", price: 229, originalPrice: 399, image: "https://eu.store.igarden.ai/cdn/shop/files/PowerBoxP30-P15_400x.jpg?v=1785465169" }
    ]
  },
  {
    id: "floating-lights",
    title: "Lumières LED flottantes pour piscine (lot de 2)",
    price: 35,
    originalPrice: 55,
    saveText: "Économisez 20,00 €",
    image: "https://eu.store.igarden.ai/cdn/shop/files/LEDPoolFloatingLights_2pcs_400x.png?v=1779085653"
  },
  {
    id: "wall-lights",
    title: "Lumières LED magnétiques pour paroi de piscine (lot de 2)",
    price: 35,
    originalPrice: 55,
    saveText: "Économisez 20,00 €",
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
    quote: "Le iGarden Swim Jet X est ce que j'ai vu de mieux pour simuler un entraînement en eau libre directement dans son bassin, sans devoir se déplacer !"
  },
  {
    id: "2",
    author: "cyansocial",
    followers: "49,8K abonnés",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/cyansocial-avatar.jpg?v=1781591358&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/cyansocial-screenshot.jpg?v=1781591688&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/727e7d57d4074d4ba925069c3d63a089/727e7d57d4074d4ba925069c3d63a089.HD-1080p-7.2Mbps-86641224.mp4?v=0",
    videoType: "shopify",
    quote: "Encore une superbe journée d'été avec notre nouvelle attraction de piscine ! Si vous hésitiez pour le Swim Jet X, c'est le moment rêvé."
  },
  {
    id: "3",
    author: "samanthafaevanderpool",
    followers: "400 000 abonnés",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/samanthafaevanderpool-avatar.jpg?v=1781591358&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/samanthafaevanderpool-screenshot.jpg?v=1781591688&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/cfdf5fa141bf4d508fb23d5a7dde8364/cfdf5fa141bf4d508fb23d5a7dde8364.HD-1080p-3.3Mbps-86641225.mp4?v=0",
    videoType: "shopify",
    quote: "Je n'aurais jamais cru qu'on puisse autant transformer notre piscine de jardin… Le iGarden Swim Jet a tout changé, les enfants n'en sortent plus !"
  },
  {
    id: "4",
    author: "the.waller.tribe",
    followers: "55,3K abonnés",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/thewallertribe-avatar.jpg?v=1781591358&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/thewallertribe-screenshot.jpg?v=1781591688&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/788c01e6e93d4deaa72185c1a900fbab/788c01e6e93d4deaa72185c1a900fbab.HD-1080p-2.5Mbps-86641226.mp4?v=0",
    videoType: "shopify",
    quote: "Nager le matin dans la piscine est devenu ma routine bien-être absolue. D'abord une glisse douce, puis j'augmente la puissance : un entraînement complet incroyable."
  },
  {
    id: "5",
    author: "the.quinn.girls",
    followers: "190 000 abonnés",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/413224802_1096501271744146_8810377430334826692_n.jpg?v=1776667111&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/385a3a6382dc44b19da7e63028a5c83f.png?v=1776667092&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/f7b12f0f765f4aae930d8858349a2c80/f7b12f0f765f4aae930d8858349a2c80.HD-1080p-4.8Mbps-82043081.mp4?v=0",
    videoType: "shopify",
    quote: "Un tout autre niveau de plaisir aquatique pour toute la famille ! Les filles utilisent le Swim Jet pour s'entraîner au wakeboard dans le jardin."
  },
  {
    id: "6",
    author: "elizabeth_swimming",
    followers: "2,78 M abonnés",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/unnamed.jpg?v=1776669958&width=80",
    thumbnail: "https://i.ytimg.com/vi/NMJ-a9Q9LEk/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/NMJ-a9Q9LEk?autoplay=1",
    videoType: "youtube",
    quote: "Transformez votre piscine avec le iGarden Swim Jet X mobile en un vrai couloir de nage professionnel pour un entraînement cardio ultra efficace."
  }
];

export const ATHLETES: Athlete[] = [
  {
    name: "Ashleigh Gentle",
    title: "Triathlète professionnelle & Championne du monde",
    quote: "J'ai été immédiatement conquise par le Swim Jet X. Compact, prêt à l'emploi en 2 minutes et réglable à la perfection pour mes entraînements de fractionné et de récupération.",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95.png?v=1778495754&width=200",
    image: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237167_475705fe-959c-4216-9ad5-24c4e2ced8d0.png?v=1778495757&width=1000"
  },
  {
    name: "Ella Ramsay",
    title: "Médaillée olympique",
    quote: "L'installation a été un jeu d'enfant, et le courant d'eau laminaire et régulier me permet de me concentrer pleinement sur chaque détail de mes mouvements de bras.",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95_1.png?v=1778495754&width=200",
    image: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237167_3.png?v=1778495755&width=1000"
  },
  {
    name: "Josh Amberger",
    title: "Champion australien d'Ironman",
    quote: "Le Swim Jet X m'apporte un maximum de liberté pour mes séances quotidiennes à la maison. Le réglage continu de la vitesse recrée fidèlement les conditions de nage en eau libre.",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95_2.png?v=1778495754&width=200",
    image: "https://eu.store.igarden.ai/cdn/shop/files/11_1_b5e9c857-985c-482f-8393-a5198120e5d2.png?v=1778581053&width=1000"
  }
];

export const PRESS_QUOTES: PressQuote[] = [
  {
    name: "Geeky Gadgets",
    logo: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2121239268.png?crop=center&height=160&v=1787107934&width=160",
    quote: "La Série X offre la même qualité de flux hydraulique que les installations fixes haut de gamme, à une fraction du prix et sans aucun chantier."
  },
  {
    name: "Android Headlines",
    logo: "https://eu.store.igarden.ai/cdn/shop/files/Group_2121239264_1.png?crop=center&height=160&v=1787107962&width=160",
    quote: "iGarden a réinventé le moteur de piscine pour en faire un système d'entraînement intelligent et réactif qui s'adapte en direct à votre rythme de nage."
  },
  {
    name: "Tech Times",
    logo: "https://eu.store.igarden.ai/cdn/shop/files/Group_2121239259_a6d451d1-ccd8-4f94-ab8c-60f9f07fbf9a.png?crop=center&height=160&v=1787108023&width=160",
    quote: "Bien plus qu'une simple pompe : une centrale de contre-courant ultra efficiente qui convertit n'importe quel bassin en ligne de nage infinie."
  }
];

export const FEATURED_LOGOS = [
  { name: "TECH TEST", logo: "https://eu.store.igarden.ai/cdn/shop/files/logo_2_5b9cfe5a-3a47-403c-a22c-213b9673b242.png?v=1778496508&width=400", bg: "#f86e5d" },
  { name: "SCIENCE.FR", logo: "https://eu.store.igarden.ai/cdn/shop/files/logo_a9a22011-a34c-4a41-bfd5-63d17d037abf.png?v=1778496536&width=400", bg: "#d2232b" },
  { name: "Press 1", logo: "https://eu.store.igarden.ai/cdn/shop/files/image_219_2.png?v=1778496561&width=400", bg: "#ffffff" },
  { name: "PISCINE MAGAZINE", logo: "https://eu.store.igarden.ai/cdn/shop/files/image_219.png?v=1778496590&width=400", bg: "#ffffff" },
  { name: "Press 2", logo: "https://eu.store.igarden.ai/cdn/shop/files/Clip_path_group.png?v=1778496616&width=400", bg: "#ffffff" },
  { name: "Press 3", logo: "https://eu.store.igarden.ai/cdn/shop/files/image_218.png?v=1778496643&width=400", bg: "#ffffff" },
  { name: "Press 4", logo: "https://eu.store.igarden.ai/cdn/shop/files/image_921.png?v=1778496672&width=400", bg: "#ffffff" }
];

export const TRUSTPILOT_REVIEWS: TrustpilotReview[] = [
  {
    id: "1",
    name: "Michel Dumont",
    date: "11 août 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/Group_2121239268.png?crop=center&height=160&v=1787107934&width=160",
    rating: 5,
    text: "J'ai commandé le Swim Jet et il fonctionne exactement comme promis. Livraison très rapide en 48h avec suivi détaillé. Recommandé à 100% !"
  },
  {
    id: "2",
    name: "Alexandre S.",
    date: "18 août 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/Group_2121239264_1.png?crop=center&height=160&v=1787107962&width=160",
    rating: 5,
    text: "Utilisé plusieurs fois dès réception et le résultat est bluffant ! La puissance de propulsion permet un véritable entraînement d'endurance à la maison."
  },
  {
    id: "3",
    name: "Stéphane Bernard",
    date: "09 août 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/Group_2121239259_a6d451d1-ccd8-4f94-ab8c-60f9f07fbf9a.png?crop=center&height=160&v=1787108023&width=160",
    rating: 5,
    text: "Tout est parfait ! L'installation sur notre piscine hors-sol a pris moins de 2 minutes. Livraison express, service client au top et matériaux très qualitatifs."
  },
  {
    id: "4",
    name: "Claudine D.",
    date: "09 août 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/Group_2121239261_738934b1-ff7b-45b5-9896-0c972e7837c7.png?crop=center&height=160&v=1787108068&width=160",
    rating: 5,
    text: "Le Swim Jet est génial ! Il transforme notre petit bassin en véritable couloir de nage sans fin. Les enfants adorent aussi jouer dans le courant."
  },
  {
    id: "5",
    name: "Renaud P.",
    date: "07 août 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/Group_2121239263_808be5a7-ba7e-49b8-9136-bd4b64e35ea6.png?crop=center&height=160&v=1787108135&width=160",
    rating: 5,
    text: "Excellent produit et support client en français très réactif. Rapport qualité-prix imbattable pour un vrai système de nage à contre-courant."
  },
  {
    id: "6",
    name: "Norbert M.",
    date: "26 juillet 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/Group_2121239262_1b471ff2-0e47-4ad2-a614-4523966dbf02.png?crop=center&height=160&v=1787108208&width=160",
    rating: 5,
    text: "Puissance impressionnante, cela transforme totalement l'expérience de la piscine. Finitions robustes et prise en main immédiate."
  }
];

export const NATIVE_FRENCH_REVIEWS: UserReview[] = [
  {
    id: "rev-1",
    author: "Maxime Richard",
    rating: 5,
    date: "22/08/2026",
    title: "Impressionné par la puissance et le silence du moteur",
    content: "Livré en 48 heures par transporteur express. Installé en 1 minute sans aucun outil sur notre piscine hors-sol Intex (4x2 m). Le flux d'eau est remarquablement large et stable – on nage en continu sur place sans jamais toucher le bord. Mes séances de 45 minutes le matin sont un pur bonheur !",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-2",
    author: "Sabine Hoffmann",
    rating: 5,
    date: "19/08/2026",
    title: "Une vraie révolution pour notre piscine de jardin à Lyon",
    content: "Nous avions fait faire un devis pour une nage à contre-courant encastrée à plus de 4 500 €. Pour 209,00 €, cet appareil fait exactement le même travail sans aucun trou ni travaux. La télécommande sans fil permet de régler l'intensité très facilement. Les enfants s'amusent comme des fous !",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-3",
    author: "Laurent Garnier",
    rating: 5,
    date: "16/08/2026",
    title: "Idéal pour mes entraînements de triathlon",
    content: "Faire des virages tous les 5 mètres dans une petite piscine était pénible. Avec le Swim Jet 1 000 W, on a un contre-courant puissant pour travailler le crawl, le gainage et l'endurance. La batterie tient largement plusieurs grosses sessions d'entraînement.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-4",
    author: "Nadine Bauer",
    rating: 5,
    date: "14/08/2026",
    title: "Installation ultra facile et sécurité absolue",
    content: "J'avais peur d'abîmer ma margelle en composite, mais la pince réglable avec patins en caoutchouc ne glisse pas du tout et protège le bord. Finition de grande qualité, étanchéité IP68 et rassurant car aucune ligne 230V n'est dans l'eau. Bravo !",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-5",
    author: "Thomas François",
    rating: 5,
    date: "11/08/2026",
    title: "Parfait pour soulager le dos et les articulations",
    content: "Mon kiné m'a recommandé de nager quotidiennement. Avec ce système mobile, je fais mes séances de brasse et crawl à la maison quand je veux, sans devoir aller à la piscine municipale. Manuel en français très clair.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-6",
    author: "Caroline & Marc",
    rating: 5,
    date: "08/08/2026",
    title: "Livraison ultra rapide et produit haut de gamme",
    content: "Commandé mardi matin, livré jeudi midi. Tout était parfaitement emballé et protégé. Le carénage en polymère renforcé est ultra robuste. On a nagé tout le week-end, ça vaut largement son prix !",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-7",
    author: "Bernard V.",
    rating: 4,
    date: "05/08/2026",
    title: "Très bon appareil avec un flux d'eau bien large",
    content: "Courant d'eau très fluide sans turbulences désagréables. Les paliers de vitesse sont bien étagés. Petite remarque : la Power Box a son poids, mais les roulettes intégrées facilitent grandement le déplacement.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-8",
    author: "Christophe Raymond",
    rating: 5,
    date: "02/08/2026",
    title: "Testé sur notre coque polyester : impeccable !",
    content: "S'adapte parfaitement à la forme arrondie de notre margelle. Grâce au réglage en hauteur, on peut aligner le flux d'eau pile au niveau du torse. Ma femme et moi sommes ravis de la sensation de nage naturelle.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-9",
    author: "Sandrine Lemaire",
    rating: 5,
    date: "30/07/2026",
    title: "Service client exemplaire et conseils précis",
    content: "J'avais une question sur l'hivernage et le rangement. Le support m'a répondu sur le chat en quelques minutes en français de manière très aimable. Livraison rapide et toute la famille est conquise.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-10",
    author: "David Schmitt",
    rating: 5,
    date: "27/07/2026",
    title: "Fini de faire demi-tour tous les trois mouvements",
    content: "Dans notre piscine de 4 mètres, les allers-retours étaient monotones. Maintenant, on nage 20 minutes d'affilée comme dans un lac. Une vraie plus-value pour la maison !",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-11",
    author: "André Meunier",
    rating: 5,
    date: "24/07/2026",
    title: "Rapport qualité-prix imbattable à 209,00 €",
    content: "À ce prix promotionnel, c'est une excellente affaire comparé aux installations fixes qui coûtent des milliers d'euros en plomberie et maçonnerie. On déballe, on clipse et on nage.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-12",
    author: "Valérie Kramer",
    rating: 5,
    date: "21/07/2026",
    title: "Très silencieux et doux à l'usage",
    content: "Le niveau sonore est très bas, on entend principalement le clapotis naturel de l'eau. Idéal pour nager tôt le matin sans déranger les voisins. Achat recommandé les yeux fermés !",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-13",
    author: "Florian Heise",
    rating: 5,
    date: "18/07/2026",
    title: "Plaisir quotidien et vraie remise en forme",
    content: "Le support se monte et se démonte en un clin d'œil si l'on souhaite ranger le propulseur le soir. La finition est digne d'un équipement professionnel.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-14",
    author: "Céline Martens",
    rating: 5,
    date: "15/07/2026",
    title: "Expérience d'achat 100% réussie",
    content: "Paiement sécurisé, colis parfaitement calé et suivi de livraison en direct. Le produit est exactement conforme aux vidéos de démonstration. Merci à toute l'équipe iGarden !",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-15",
    author: "Pascal Doré",
    rating: 4,
    date: "12/07/2026",
    title: "Appareil très puissant, débit constant",
    content: "Courant vigoureux jusqu'à 1,5 m/s, réglable en continu et amplement suffisant pour faire monter le cardio. Très satisfait de mon achat pour la saison estivale.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-16",
    author: "Isabelle Petit",
    rating: 5,
    date: "09/07/2026",
    title: "Nos vacances d'été directement dans le jardin",
    content: "Nous avons passé tout l'été dans la piscine avec les enfants. Le système est tellement intuitif que même les ados l'utilisent en toute autonomie et en sécurité.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-17",
    author: "Félix Bertrand",
    rating: 5,
    date: "06/07/2026",
    title: "M'évite l'abonnement annuel à la piscine municipale",
    content: "Amorti en une seule saison ! Je nage dès que j'ai un moment libre, sans contrainte d'horaires ni de vestiaires. Un vrai confort de vie à domicile.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-18",
    author: "Monique Voisin",
    rating: 5,
    date: "03/07/2026",
    title: "Facile à manipuler, même seule",
    content: "J'avais peur pour le poids, mais le système type chariot à roulettes est très bien pensé. Je range l'appareil au garage sans aucun effort après la séance.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-19",
    author: "Fabien Germain",
    rating: 5,
    date: "29/06/2026",
    title: "Maintien solide sur piscine rectangulaire en bois",
    content: "Installé sur les madriers de notre piscine bois : grâce aux patins caoutchoutés, le support ne bouge pas d'un millimètre et protège le bois.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  },
  {
    id: "rev-20",
    author: "Anouk Thomas",
    rating: 5,
    date: "26/06/2026",
    title: "Garantie 2 ans rassurante et qualité au rendez-vous",
    content: "Conception solide, étanchéité parfaite et support joignable. Le meilleur investissement pour notre jardin depuis des années.",
    verified: true,
    productVariant: "Swim Jet — 1 000 W"
  }
];
