import { ProductVariant, AccessoryOption, KolVideo, Athlete, PressQuote, TrustpilotReview, UserReview } from './types';

export const CHECKOUT_URL = "https://braceletot.myshopify.com/cart/57202356846932:1";

export const PRODUCT_VARIANTS: ProductVariant[] = [
  {
    id: "swim-jet-1000w",
    sku: "SJD-1000W-UNIV-DE",
    name: "Mobiles Gegenstrom-Schwimmsystem iGarden Swim Jet — 1.000 W",
    shortName: "Swim Jet — 1.000 W",
    subtitle: "Universelles Hochleistungs-Gegenstromsystem – Passend für jeden Pooltyp ohne bauliche Veränderungen",
    price: 209.00,
    originalPrice: 418.00,
    discountAmount: 209.00,
    couponCode: "SWIMJET",
    couponOff: "209,00 €",
    checkoutUrl: "https://braceletot.myshopify.com/cart/57202356846932:1",
    specsSummary: "1.000 W Leistung | 6 bis 10 h Akkulaufzeit bei voller Kraft | Für alle Pools geeignet",
    power: "1.000 W",
    speed: "1,5 m/s",
    batteryLife: "6 bis 10 Stunden",
    flowRate: "Laminare Hochleistungsströmung",
    images: [
      "https://eu.store.igarden.ai/cdn/shop/files/DE-X_12.png?v=1788838449",
      "https://eu.store.igarden.ai/cdn/shop/files/DE_73443bfb-4bf4-4906-958c-8171c674c8f6.png?v=1788941763",
      "https://eu.store.igarden.ai/cdn/shop/files/3-DE_0ed24efc-9490-415d-8067-c3eaa744e48b.png?v=1782459867",
      "https://eu.store.igarden.ai/cdn/shop/files/4-DE_56023cf4-6037-46f4-a613-8c374a66e69b.png?v=1782459891",
      "https://eu.store.igarden.ai/cdn/shop/files/5-DE_12777650-8ac0-4c1b-8b05-44dd7baa6c0d.png?v=1782459925",
      "https://eu.store.igarden.ai/cdn/shop/files/6-DE_e19d678a-aa54-4b83-86ad-114a53e84c56.png?v=1782459887",
      "https://eu.store.igarden.ai/cdn/shop/files/7-DE_6f41ec4a-517f-41fb-a66e-4c511d423e19.png?v=1782459891",
      "https://eu.store.igarden.ai/cdn/shop/files/8-DE_d9f62640-3b44-42d2-a1cb-71fcf5780901.png?v=1782459913",
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
    title: "iGarden X Serie Premium-Tragetasche",
    price: 79,
    originalPrice: 89,
    saveText: "10,00 € sparen",
    image: "https://eu.store.igarden.ai/cdn/shop/files/iGarden-X-series-swim-jet-storage-bag-for-x30-p30-x-5-x25-p15-x-air_400x.png?v=1787189266",
    selectedVariant: "48057856360666",
    variants: [
      { id: "48057856360666", name: "X AIR Schutztasche", price: 79, originalPrice: 89, image: "https://eu.store.igarden.ai/cdn/shop/files/iGarden-X-series-swim-jet-storage-bag-for-x30-p30-x-5-x25-p15-x-air_400x.png?v=1787189266" }
    ]
  },
  {
    id: "power-box",
    title: "iGarden Swim Jet Power Box (Zusatzakku)",
    price: 229,
    originalPrice: 399,
    saveText: "170,00 € sparen",
    image: "https://eu.store.igarden.ai/cdn/shop/files/PowerBoxP30-P15_400x.jpg?v=1785465169",
    selectedVariant: "48284051079386",
    variants: [
      { id: "48284051079386", name: "Zusätzliche P30 Power Box", price: 229, originalPrice: 399, image: "https://eu.store.igarden.ai/cdn/shop/files/PowerBoxP30-P15_400x.jpg?v=1785465169" }
    ]
  },
  {
    id: "floating-lights",
    title: "Schwimmende LED-Poolleuchten (2er-Set)",
    price: 35,
    originalPrice: 55,
    saveText: "20,00 € sparen",
    image: "https://eu.store.igarden.ai/cdn/shop/files/LEDPoolFloatingLights_2pcs_400x.png?v=1779085653"
  },
  {
    id: "wall-lights",
    title: "Magnetische LED-Poolwandleuchten (2er-Set)",
    price: 35,
    originalPrice: 55,
    saveText: "20,00 € sparen",
    image: "https://eu.store.igarden.ai/cdn/shop/files/LEDPoolWallLights_2pcs_400x.jpg?v=1779085652"
  }
];

export const KOL_VIDEOS: KolVideo[] = [
  {
    id: "1",
    author: "becca_mann",
    followers: "22.000 Follower",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/becca_mann-avatar.jpg?v=1781591358&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/becca_mann-screenshot-2.jpg?v=1781591688&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/a3b1b0fd7599454281eafd32d7332184/a3b1b0fd7599454281eafd32d7332184.HD-1080p-3.3Mbps-86641223.mp4?v=0",
    videoType: "shopify",
    quote: "Der iGarden Swim Jet X ist das Beste, was ich je erlebt habe, um echtes Freiwassertraining im eigenen Pool zu simulieren – ohne dafür extra an einen See oder ins Meer fahren zu müssen!"
  },
  {
    id: "2",
    author: "cyansocial",
    followers: "49,8K Follower",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/cyansocial-avatar.jpg?v=1781591358&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/cyansocial-screenshot.jpg?v=1781591688&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/727e7d57d4074d4ba925069c3d63a089/727e7d57d4074d4ba925069c3d63a089.HD-1080p-7.2Mbps-86641224.mp4?v=0",
    videoType: "shopify",
    quote: "Wieder ein herrlicher Sommertag mit unserem neuen Pool-Highlight! Wenn Sie über den iGarden Swim Jet X nachdenken: Jetzt ist der perfekte Moment."
  },
  {
    id: "3",
    author: "samanthafaevanderpool",
    followers: "400.000 Follower",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/samanthafaevanderpool-avatar.jpg?v=1781591358&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/samanthafaevanderpool-screenshot.jpg?v=1781591688&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/cfdf5fa141bf4d508fb23d5a7dde8364/cfdf5fa141bf4d508fb23d5a7dde8364.HD-1080p-3.3Mbps-86641225.mp4?v=0",
    videoType: "shopify",
    quote: "Ich hätte nie gedacht, dass man unseren Gartenpool so aufwerten kann… Der iGarden Swim Jet hat alles verändert, die Kinder sind ununterbrochen im Wasser!"
  },
  {
    id: "4",
    author: "the.waller.tribe",
    followers: "55,3K Follower",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/thewallertribe-avatar.jpg?v=1781591358&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/thewallertribe-screenshot.jpg?v=1781591688&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/788c01e6e93d4deaa72185c1a900fbab/788c01e6e93d4deaa72185c1a900fbab.HD-1080p-2.5Mbps-86641226.mp4?v=0",
    videoType: "shopify",
    quote: "Morgens im Pool zu schwimmen ist meine absolute Lieblingsroutine geworden. Erst ruhiges Gleiten, dann schalte ich den Jet ein – ein fantastisches Ganzkörper-Workout."
  },
  {
    id: "5",
    author: "the.quinn.girls",
    followers: "190.000 Follower",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/413224802_1096501271744146_8810377430334826692_n.jpg?v=1776667111&width=80",
    thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/385a3a6382dc44b19da7e63028a5c83f.png?v=1776667092&width=800",
    videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/f7b12f0f765f4aae930d8858349a2c80/f7b12f0f765f4aae930d8858349a2c80.HD-1080p-4.8Mbps-82043081.mp4?v=0",
    videoType: "shopify",
    quote: "Ein völlig neues Level an Wasserspaß für die ganze Familie! Die Mädels nutzen den iGarden Swim Jet sogar für ihr eigenes Wakeboard-Training im Garten."
  },
  {
    id: "6",
    author: "elizabeth_schwimmen",
    followers: "2,78 Mio. Abonnenten",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/unnamed.jpg?v=1776669958&width=80",
    thumbnail: "https://i.ytimg.com/vi/NMJ-a9Q9LEk/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/NMJ-a9Q9LEk?autoplay=1",
    videoType: "youtube",
    quote: "Verwandeln Sie Ihren Pool mit dem mobilen iGarden Swim Jet X in eine echte Profi-Gegenstromanlage für effektives Ausdauertraining."
  }
];

export const ATHLETES: Athlete[] = [
  {
    name: "Ashleigh Gentle",
    title: "Profi-Triathletin & Weltmeisterin",
    quote: "Ich war vom Swim Jet X sofort begeistert. Kompakt, in 2 Minuten einsatzbereit und perfekt regulierbar – ideal für mein gezieltes Intervall- und Regenerationstraining.",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95.png?v=1778495754&width=200",
    image: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237167_475705fe-959c-4216-9ad5-24c4e2ced8d0.png?v=1778495757&width=1000"
  },
  {
    name: "Ella Ramsay",
    title: "Olympia-Medaillengewinnerin",
    quote: "Die Montage war kinderleicht, und die gleichmäßige, laminare Strömung ermöglicht es mir, mich voll auf feinste technische Details meiner Schwimmzüge zu konzentrieren.",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95_1.png?v=1778495754&width=200",
    image: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237167_3.png?v=1778495755&width=1000"
  },
  {
    name: "Josh Amberger",
    title: "Australischer Ironman-Champion",
    quote: "Der Swim Jet X bringt maximale Flexibilität in mein tägliches Training zu Hause. Die stufenlose Geschwindigkeitsregelung simuliert anspruchsvolle Freiwasserbedingungen perfekt.",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95_2.png?v=1778495754&width=200",
    image: "https://eu.store.igarden.ai/cdn/shop/files/11_1_b5e9c857-985c-482f-8393-a5198120e5d2.png?v=1778581053&width=1000"
  }
];

export const PRESS_QUOTES: PressQuote[] = [
  {
    name: "Geeky Gadgets",
    logo: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2121239268.png?crop=center&height=160&v=1787107934&width=160",
    quote: "Die X-Serie liefert die gleiche erstklassige Strömungsqualität wie teure Festeinbauten – zu einem Bruchteil des Preises und völlig ohne Umbauarbeiten."
  },
  {
    name: "Android Headlines",
    logo: "https://eu.store.igarden.ai/cdn/shop/files/Group_2121239264_1.png?crop=center&height=160&v=1787107962&width=160",
    quote: "iGarden hat einen herkömmlichen Poolmotor in ein intelligentes, reaktionsschnelles Trainingssystem verwandelt, das sich in Echtzeit an den Schwimmer anpasst."
  },
  {
    name: "Tech Times",
    logo: "https://eu.store.igarden.ai/cdn/shop/files/Group_2121239259_a6d451d1-ccd8-4f94-ab8c-60f9f07fbf9a.png?crop=center&height=160&v=1787108023&width=160",
    quote: "Weitaus mehr als nur eine Pumpe: Ein hocheffizientes Gegenstrom-Kraftpaket, das kompakte Pools in endlose Trainingsbahnen verwandelt."
  }
];

export const FEATURED_LOGOS = [
  { name: "TECH TEST", logo: "https://eu.store.igarden.ai/cdn/shop/files/logo_2_5b9cfe5a-3a47-403c-a22c-213b9673b242.png?v=1778496508&width=400", bg: "#f86e5d" },
  { name: "SCIENCE.DE", logo: "https://eu.store.igarden.ai/cdn/shop/files/logo_a9a22011-a34c-4a41-bfd5-63d17d037abf.png?v=1778496536&width=400", bg: "#d2232b" },
  { name: "Press 1", logo: "https://eu.store.igarden.ai/cdn/shop/files/image_219_2.png?v=1778496561&width=400", bg: "#ffffff" },
  { name: "POOL MAGAZIN", logo: "https://eu.store.igarden.ai/cdn/shop/files/image_219.png?v=1778496590&width=400", bg: "#ffffff" },
  { name: "Press 2", logo: "https://eu.store.igarden.ai/cdn/shop/files/Clip_path_group.png?v=1778496616&width=400", bg: "#ffffff" },
  { name: "Press 3", logo: "https://eu.store.igarden.ai/cdn/shop/files/image_218.png?v=1778496643&width=400", bg: "#ffffff" },
  { name: "Press 4", logo: "https://eu.store.igarden.ai/cdn/shop/files/image_921.png?v=1778496672&width=400", bg: "#ffffff" }
];

export const TRUSTPILOT_REVIEWS: TrustpilotReview[] = [
  {
    id: "1",
    name: "Michael Weber",
    date: "11. August 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/Group_2121239268.png?crop=center&height=160&v=1787107934&width=160",
    rating: 5,
    text: "Habe den Swim Jet bestellt und er funktioniert exakt wie versprochen. Sehr schneller DHL-Versand nach München mit lückenloser Sendungsverfolgung. Absolut empfehlenswert!"
  },
  {
    id: "2",
    name: "Alexander S.",
    date: "18. August 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/Group_2121239264_1.png?crop=center&height=160&v=1787107962&width=160",
    rating: 5,
    text: "Habe die Anlage bereits mehrfach im Einsatz und das Ergebnis ist verblüffend! Der Schub reicht locker für ein anspruchsvolles Ausdauertraining im heimischen Garten."
  },
  {
    id: "3",
    name: "Stefan Bergmann",
    date: "09. August 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/Group_2121239259_a6d451d1-ccd8-4f94-ab8c-60f9f07fbf9a.png?crop=center&height=160&v=1787108023&width=160",
    rating: 5,
    text: "Alles perfekt! Die Anbringung an unserem Stahlwandpool hat keine 2 Minuten gedauert. Schnelle Lieferung, toller Kundenservice und erstklassige Verarbeitungsqualität."
  },
  {
    id: "4",
    name: "Claudia D.",
    date: "09. August 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/Group_2121239261_738934b1-ff7b-45b5-9896-0c972e7837c7.png?crop=center&height=160&v=1787108068&width=160",
    rating: 5,
    text: "Der Swim Jet ist genial! Er verwandelt unseren kleinen Pool in eine echte Endlos-Schwimmbahn. Die Kinder lieben die Strömung ebenfalls riesig."
  },
  {
    id: "5",
    name: "Rainer P.",
    date: "07. August 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/Group_2121239263_808be5a7-ba7e-49b8-9136-bd4b64e35ea6.png?crop=center&height=160&v=1787108135&width=160",
    rating: 5,
    text: "Hervorragendes Produkt und deutschsprachiger Kundensupport. Unschlagbares Preis-Leistungs-Verhältnis für eine echte Gegenstromanlage."
  },
  {
    id: "6",
    name: "Norbert M.",
    date: "26. Juli 2026",
    avatar: "https://eu.store.igarden.ai/cdn/shop/files/Group_2121239262_1b471ff2-0e47-4ad2-a614-4523966dbf02.png?crop=center&height=160&v=1787108208&width=160",
    rating: 5,
    text: "Beeindruckende Leistung, verändert das Schwimmen im eigenen Garten komplett. Hochwertige Materialien und kinderleichte Bedienung."
  }
];

export const NATIVE_FRENCH_REVIEWS: UserReview[] = [
  {
    id: "rev-1",
    author: "Maximilian Richter",
    rating: 5,
    date: "22.08.2026",
    title: "Begeistert von der Kraft und der Laufruhe des Motors",
    content: "Innerhalb von 48 Stunden per DHL geliefert. In nur 1 Minute ohne Werkzeug an unserem Intex-Aufstellpool (4x2 m) montiert. Die Strömung ist bemerkenswert gleichmäßig und breit – man schwimmt kontinuierlich auf einer Stelle, ohne anzustoßen. Meine 45-Minuten-Einheiten am Morgen sind jetzt ein absoluter Genuss!",
    verified: true,
    productVariant: "Swim Jet — 1.000 W"
  },
  {
    id: "rev-2",
    author: "Sabine Hoffmann",
    rating: 5,
    date: "19.08.2026",
    title: "Eine echte Revolution für unseren Gartenpool in Stuttgart",
    content: "Wir hatten zuvor über eine fest eingebaute Gegenstromanlage für über 4.500 € nachgedacht. Für 209,00 € leistet dieses Gerät genau dasselbe ohne Baustelle im Garten. Die Funk-Fernbedienung ist super praktisch, um die Stärke dosiert einzustellen. Die Kinder haben riesigen Spaß!",
    verified: true,
    productVariant: "Swim Jet — 1.000 W"
  },
  {
    id: "rev-3",
    author: "Lars Gärtner",
    rating: 5,
    date: "16.08.2026",
    title: "Ideal für mein Triathlon-Ausdauertraining",
    content: "Als ambitionierter Triathlet war das Wenden alle 5 Meter im kleinen Pool frustrierend. Mit dem Swim Jet 1.000 W hat man einen stabilen Gegenstrom für Kraultechnik, Rumpfspannung und Ausdauer. Der Akku hält problemlos mehrere intensive Trainingseinheiten durch.",
    verified: true,
    productVariant: "Swim Jet — 1.000 W"
  },
  {
    id: "rev-4",
    author: "Nadine Bauer",
    rating: 5,
    date: "14.08.2026",
    title: "Sehr einfache Montage und absolut sicher",
    content: "Ich war skeptisch wegen unseres WPC-Poolrands, aber die verstellbare Klemme sitzt bombenfest und hinterlässt keinerlei Spuren. Hochwertig verarbeitet, wasserdicht nach IP68 und beruhigend sicher, da keine 230V-Netzspannung im Wasser liegt. Großes Lob!",
    verified: true,
    productVariant: "Swim Jet — 1.000 W"
  },
  {
    id: "rev-5",
    author: "Thomas Franke",
    rating: 5,
    date: "11.08.2026",
    title: "Perfekt für rücken- und gelenkschonendes Training",
    content: "Mein Orthopäde hat mir tägliches Schwimmen empfohlen. Mit diesem mobilen System mache ich mein Brust- und Kraulschwimmen täglich zu Hause – ohne überfüllte Hallenbäder oder starre Öffnungszeiten. Saubere Verpackung und verständliche deutsche Anleitung.",
    verified: true,
    productVariant: "Swim Jet — 1.000 W"
  },
  {
    id: "rev-6",
    author: "Carolin & Markus",
    rating: 5,
    date: "08.08.2026",
    title: "Blitzschnelle Lieferung und Premium-Qualität",
    content: "Dienstagvormittag bestellt, Donnerstagmittag in Hamburg angekommen. Alles war erstklassig und sicher verpackt. Das schlagfeste Polymergehäuse macht einen extrem soliden Eindruck. Wir haben das ganze Wochenende geschwommen – jeden Euro wert!",
    verified: true,
    productVariant: "Swim Jet — 1.000 W"
  },
  {
    id: "rev-7",
    author: "Bernd Vogel",
    rating: 4,
    date: "05.08.2026",
    title: "Sehr gutes Gerät mit angenehmer, breiter Strömung",
    content: "Gleichmäßiger Wasserstrom ohne störende Wirbel. Die Geschwindigkeitsstufen sind gut abgestimmt. Kleiner Hinweis: Die Power Box hat ihr Gewicht, aber dank der integrierten Rollen lässt sie sich leicht transportieren.",
    verified: true,
    productVariant: "Swim Jet — 1.000 W"
  },
  {
    id: "rev-8",
    author: "Christoph Reimann",
    rating: 5,
    date: "02.08.2026",
    title: "Getestet an unserem GFK-Einstückbecken: Tadellos!",
    content: "Passt einwandfrei auf unsere abgerundeten Beckenrandsteine. Durch die Tiefenverstellung lässt sich die Strömung exakt auf Brusthöhe ausrichten. Meine Frau und ich sind begeistert vom natürlichen Schwimmergefühl.",
    verified: true,
    productVariant: "Swim Jet — 1.000 W"
  },
  {
    id: "rev-9",
    author: "Sandra Lehmann",
    rating: 5,
    date: "30.07.2026",
    title: "Exzellenter Kundenservice und kompetente Beratung",
    content: "Ich hatte vorab eine Frage zur Überwinterung und Aufbewahrung. Der Support hat mir im Chat innerhalb von wenigen Minuten detailliert und freundlich auf Deutsch geantwortet. Schneller Versand und volle Begeisterung in der Familie.",
    verified: true,
    productVariant: "Swim Jet — 1.000 W"
  },
  {
    id: "rev-10",
    author: "David Schmitt",
    rating: 5,
    date: "27.07.2026",
    title: "Nie wieder nervige Wenden alle drei Züge",
    content: "In unserem 4-Meter-Pool war das ständige Hin und Her ziemlich eintönig. Jetzt schwimmt man 20 Minuten am Stück wie im offenen Gewässer. Eine echte Aufwertung für jeden Gartenpool!",
    verified: true,
    productVariant: "Swim Jet — 1.000 W"
  },
  {
    id: "rev-11",
    author: "Andreas Meißner",
    rating: 5,
    date: "24.07.2026",
    title: "Hervorragendes Preis-Leistungs-Verhältnis für 209,00 €",
    content: "Zu diesem Sonderpreis ein echtes Schnäppchen im Vergleich zu fest installierten Gegenstrompumpen, die Rohrverlegungen und Tausende Euro Montagekosten erfordern. Auspacken, anklemmen und direkt losschwimmen.",
    verified: true,
    productVariant: "Swim Jet — 1.000 W"
  },
  {
    id: "rev-12",
    author: "Valerie Kramer",
    rating: 5,
    date: "21.07.2026",
    title: "Sehr leise im Betrieb und herrlich sanft",
    content: "Die Geräuschentwicklung ist minimal – man hört fast nur das natürliche Plätschern des Wassers. Perfekt für das morgendliche Schwimmen, ohne die Nachbarn zu stören. Klare Kaufempfehlung!",
    verified: true,
    productVariant: "Swim Jet — 1.000 W"
  },
  {
    id: "rev-13",
    author: "Florian Heise",
    rating: 5,
    date: "18.07.2026",
    title: "Täglicher Badespaß und effektives Fitness-Workout",
    content: "Die Halterung lässt sich im Handumdrehen anbringen und wieder abnehmen, wenn man den Jet über Nacht wegräumen möchte. Fertigungsqualität und Haptik sind absolut auf Premium-Niveau.",
    verified: true,
    productVariant: "Swim Jet — 1.000 W"
  },
  {
    id: "rev-14",
    author: "Celine Martens",
    rating: 5,
    date: "15.07.2026",
    title: "Rundum gelungene Kauferfahrung",
    content: "Sichere Bezahlung, vorbildlich gepolstertes Paket und Echtzeit-Tracking. Das Produkt hält zu 100 % das, was in den Videos gezeigt wird. Vielen Dank an das iGarden-Team!",
    verified: true,
    productVariant: "Swim Jet — 1.000 W"
  },
  {
    id: "rev-15",
    author: "Pascal Dorn",
    rating: 4,
    date: "12.07.2026",
    title: "Sehr leistungsstarkes Gerät, stabiler Wasserfluss",
    content: "Kräftige Strömung bis 1,5 m/s, stufenlos regelbar und völlig ausreichend, um den Puls ordentlich hochzujagen. Sehr zufrieden mit dem Kauf für diese Sommersaison.",
    verified: true,
    productVariant: "Swim Jet — 1.000 W"
  },
  {
    id: "rev-16",
    author: "Isabel Peters",
    rating: 5,
    date: "09.07.2026",
    title: "Unser Sommerurlaub direkt im heimischen Garten",
    content: "Wir haben den ganzen Sommer mit den Kindern im Pool verbracht. Das System ist so intuitiv gestaltet, dass auch die Teenager es sicher und selbstständig bedienen können.",
    verified: true,
    productVariant: "Swim Jet — 1.000 W"
  },
  {
    id: "rev-17",
    author: "Felix Baumgartner",
    rating: 5,
    date: "06.07.2026",
    title: "Spart mir die teure Jahreskarte fürs Hallenbad",
    content: "Hat sich schon in einer Saison bezahlt gemacht! Schwimmen, wann immer man Zeit hat, ohne Fahrerei oder Öffnungszeiten. Ein echtes Stück Lebensqualität zu Hause.",
    verified: true,
    productVariant: "Swim Jet — 1.000 W"
  },
  {
    id: "rev-18",
    author: "Monika Vogt",
    rating: 5,
    date: "03.07.2026",
    title: "Leicht zu handhaben, auch allein",
    content: "Ich hatte Bedenken wegen des Gewichts, aber die Trolley-Bauweise mit Rollen ist genial gelöst. Ich schiebe das Gerät nach dem Training mühelos in die Garage.",
    verified: true,
    productVariant: "Swim Jet — 1.000 W"
  },
  {
    id: "rev-19",
    author: "Fabian Gerlach",
    rating: 5,
    date: "29.06.2026",
    title: "Sitzt bombenfest am Holz-Rechteckpool",
    content: "An den massiven Holzbohlen unseres Aufstellpools montiert: Dank der gummierten Schutzbacken verrutscht der Halter keinen Millimeter und schont das Holz. Perfekt gelöst.",
    verified: true,
    productVariant: "Swim Jet — 1.000 W"
  },
  {
    id: "rev-20",
    author: "Anja Thomsen",
    rating: 5,
    date: "26.06.2026",
    title: "Beruhigende 2 Jahre Garantie und Top-Qualität",
    content: "Solide Konstruktion, absolut wasserdicht und ein erreichbarer Support. Die beste Anschaffung für unseren Garten seit Jahren.",
    verified: true,
    productVariant: "Swim Jet — 1.000 W"
  }
];

