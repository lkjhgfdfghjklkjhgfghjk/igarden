export interface HeroSlide {
  id: string;
  type: 'school' | 'standard';
  bgPc: string;
  bgMb: string;
  eyebrow?: string;
  heading?: string;
  desc?: string;
  btnText: string;
  btnLink: string;
  btnBg?: string;
  btnColor?: string;
  align?: 'left' | 'center';
  endTs?: number;
}

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

export const TESTIMONIALS_1_DATA = {
  en: [
    {
      id: "t1-1",
      author: "dana_stalling",
      quote: '"With the Swim Jet, we get powerful water flow, endless swimming possibilities, and our own personal water park right at home!"',
      image: "https://eu.store.igarden.ai/cdn/shop/files/videoframe_55553.png?v=1787020733&width=800",
      link: "https://www.instagram.com/reel/DcGw3B4uLkp/"
    },
    {
      id: "t1-2",
      author: "aniuta.ugc",
      quote: '"It generates a steady counter-current for continuous swimming in place or family fun. I love being able to dial in the flow from a gentle cruise to intense workout pace."',
      image: "https://eu.store.igarden.ai/cdn/shop/files/videoframe_48822.png?v=1787021014&width=800",
      link: "https://www.instagram.com/reels/Db_jVc2OhkX/"
    },
    {
      id: "t1-3",
      author: "ffjeffo",
      quote: '"The iGarden Swim Jet completely changed how we enjoy our pool. Setup was remarkably quick, and within minutes our kids were floating happily in the gentle current."',
      image: "https://eu.store.igarden.ai/cdn/shop/files/9436ec37-3268-4ac2-bc43-8072b10a88bf.png?v=1784888154&width=800",
      link: "/products/igarden-swim-jet-x-series-portable-swim-machine"
    },
    {
      id: "t1-4",
      author: "ericamuellerhome",
      quote: '"Transform your pool into a private training hub. The iGarden Swim Jet provides a smooth, adjustable current right in your backyard, perfect for all skill levels."',
      image: "https://eu.store.igarden.ai/cdn/shop/files/b97a9921-3a3d-451c-bc91-516dedebb94f.png?v=1784888202&width=800",
      link: "/products/igarden-swim-jet-x-series-portable-swim-machine"
    },
    {
      id: "t1-5",
      author: "kerrybalbuziente",
      quote: '"One pool, endless ways to enjoy it! From relaxed floats to high-end lap training. The iGarden Swim Jet sets up securely in under a minute."',
      image: "https://eu.store.igarden.ai/cdn/shop/files/752682106_18609390595031892_8824578704219922165_n.jpg?v=1784889373&width=800",
      link: "/products/igarden-swim-jet-x-series-portable-swim-machine"
    }
  ],
  ar: [
    {
      id: "t1-1",
      author: "dana_stalling",
      quote: '"مع جهاز س swim جيت، نحصل على تدفق مائي قوي وإمكانيات سباحة لا تنتهي في مسبحنا المنزلي بكل راحة وسهولة!"',
      image: "https://eu.store.igarden.ai/cdn/shop/files/videoframe_55553.png?v=1787020733&width=800",
      link: "https://www.instagram.com/reel/DcGw3B4uLkp/"
    },
    {
      id: "t1-2",
      author: "aniuta.ugc",
      quote: '"يولد تياراً معاكساً سلساً ومستمراً للسباحة في المكان والتمارين الرياضية. أداء مذهل وتحكم دقيق في قوة الدفع تناسب جميع أفراد العائلة."',
      image: "https://eu.store.igarden.ai/cdn/shop/files/videoframe_48822.png?v=1787021014&width=800",
      link: "https://www.instagram.com/reels/Db_jVc2OhkX/"
    },
    {
      id: "t1-3",
      author: "ffjeffo",
      quote: '"غيّر جهاز آي جاردن س swim جيت طريقة استخدامنا للمسبح بالكامل. كان التركيب بسيطاً وسريعاً للغاية بدون أي تمديدات معقدة."',
      image: "https://eu.store.igarden.ai/cdn/shop/files/9436ec37-3268-4ac2-bc43-8072b10a88bf.png?v=1784888154&width=800",
      link: "/products/igarden-swim-jet-x-series-portable-swim-machine"
    },
    {
      id: "t1-4",
      author: "ericamuellerhome",
      quote: '"حوّل مسبحك العادي إلى مسبح تدريب احترافي لا نهائي. تدفق هادئ وقوي يلائم التمرين اليومي والاسترخاء المنزلي."',
      image: "https://eu.store.igarden.ai/cdn/shop/files/b97a9921-3a3d-451c-bc91-516dedebb94f.png?v=1784888202&width=800",
      link: "/products/igarden-swim-jet-x-series-portable-swim-machine"
    },
    {
      id: "t1-5",
      author: "kerrybalbuziente",
      quote: '"مسبح واحد وطرق لا حصر لها للاستمتاع! من التجديف الهادئ إلى تمارين السباحة الرياضية. جهاز متكامل وسهل الاستخدام."',
      image: "https://eu.store.igarden.ai/cdn/shop/files/752682106_18609390595031892_8824578704219922165_n.jpg?v=1784889373&width=800",
      link: "/products/igarden-swim-jet-x-series-portable-swim-machine"
    }
  ]
};

export const HOME_KOL_VIDEOS_DATA = {
  en: [
    {
      id: "k1",
      author: "moine.thegolden",
      followers: "6.7K followers",
      avatar: "https://eu.store.igarden.ai/cdn/shop/files/6ee394b4-4868-41b4-9689-e6e78b6aaa68.png?v=1784890241&width=80",
      thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/0b0657e3-2af6-431f-9f37-d22d309457c4.png?v=1784890241&width=800",
      videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/ad5bf5bde86d48bd88aa57d76b904525/ad5bf5bde86d48bd88aa57d76b904525.HD-1080p-2.5Mbps-89793802.mp4?v=0",
      desc: "I knew we would love the iGarden Swim Jet 1,000 W, but it quickly became everyone's favorite backyard pool companion."
    },
    {
      id: "k2",
      author: "jonathanandjennahome",
      followers: "16K followers",
      avatar: "https://eu.store.igarden.ai/cdn/shop/files/c028f30f-3ad2-4d39-a0e1-f2ab26942c9d.png?v=1784890321&width=80",
      thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/35a20b86-a1fe-4cfa-b7e0-0faf162bf218_1.png?v=1784890326&width=800",
      videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/2b75c1c0d8c847c4936e5d4f4278de92/2b75c1c0d8c847c4936e5d4f4278de92.HD-1080p-2.5Mbps-89793881.mp4?v=0",
      desc: "A truly portable counter-current swim machine with real power. Outstanding battery endurance and effortless installation."
    },
    {
      id: "k4",
      author: "ollgabbigun",
      followers: "19K followers",
      avatar: "https://eu.store.igarden.ai/cdn/shop/files/123440b2-7478-4d80-8b74-1dc2c017acc3.png?v=1784891071&width=80",
      thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/166cfeb6-bc09-4e79-a1bd-e70f3c08b31a.png?v=1784891080&width=800",
      videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/b34434b795924fdea867f6f5b1afb6ed/b34434b795924fdea867f6f5b1afb6ed.HD-1080p-3.3Mbps-89794686.mp4?v=0",
      desc: "The iGarden Swim Jet makes continuous lap swimming accessible in any pool, regardless of its size."
    },
    {
      id: "k6",
      author: "isydneyk",
      followers: "208K followers",
      avatar: "https://eu.store.igarden.ai/cdn/shop/files/650121470_18366392221205458_7345930834072426192_n.jpg?v=1784892091&width=80",
      thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/750146965_18385958044205458_5282926624391628263_n.jpg?v=1784892092&width=800",
      videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/46a971642efa4e8ca882fa50a41b8851/46a971642efa4e8ca882fa50a41b8851.HD-1080p-2.5Mbps-89795821.mp4?v=0",
      desc: "Completely impressed by the 1,000 W Swim Jet! Very easy to mount, and the smooth flow enables high-level training at home."
    }
  ],
  ar: [
    {
      id: "k1",
      author: "moine.thegolden",
      followers: "6.7 ألف متابع",
      avatar: "https://eu.store.igarden.ai/cdn/shop/files/6ee394b4-4868-41b4-9689-e6e78b6aaa68.png?v=1784890241&width=80",
      thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/0b0657e3-2af6-431f-9f37-d22d309457c4.png?v=1784890241&width=800",
      videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/ad5bf5bde86d48bd88aa57d76b904525/ad5bf5bde86d48bd88aa57d76b904525.HD-1080p-2.5Mbps-89793802.mp4?v=0",
      desc: "كنا نعلم أننا سنحب جهاز آي جاردن س swim جيت 1000 واط، ولكنه سرعان ما أصبح الجهاز المفضل للجميع في مسبح الحديقة."
    },
    {
      id: "k2",
      author: "jonathanandjennahome",
      followers: "16 ألف متابع",
      avatar: "https://eu.store.igarden.ai/cdn/shop/files/c028f30f-3ad2-4d39-a0e1-f2ab26942c9d.png?v=1784890321&width=80",
      thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/35a20b86-a1fe-4cfa-b7e0-0faf162bf218_1.png?v=1784890326&width=800",
      videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/2b75c1c0d8c847c4936e5d4f4278de92/2b75c1c0d8c847c4936e5d4f4278de92.HD-1080p-2.5Mbps-89793881.mp4?v=0",
      desc: "جهاز سباحة بتيار معاكس محمول وفائق القوة. بطارية تدوم طويلاً وتثبيت مباشر على حافة المسبح دون عناء."
    },
    {
      id: "k4",
      author: "ollgabbigun",
      followers: "19 ألف متابع",
      avatar: "https://eu.store.igarden.ai/cdn/shop/files/123440b2-7478-4d80-8b74-1dc2c017acc3.png?v=1784891071&width=80",
      thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/166cfeb6-bc09-4e79-a1bd-e70f3c08b31a.png?v=1784891080&width=800",
      videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/b34434b795924fdea867f6f5b1afb6ed/b34434b795924fdea867f6f5b1afb6ed.HD-1080p-3.3Mbps-89794686.mp4?v=0",
      desc: "يجعل جهاز آي جاردن س swim جيت تجربة السباحة الرياضية المتواصلة ممكنة وممتعة في أي مسبح مهما كان حجمه."
    },
    {
      id: "k6",
      author: "isydneyk",
      followers: "208 ألف متابع",
      avatar: "https://eu.store.igarden.ai/cdn/shop/files/650121470_18366392221205458_7345930834072426192_n.jpg?v=1784892091&width=80",
      thumbnail: "https://eu.store.igarden.ai/cdn/shop/files/750146965_18385958044205458_5282926624391628263_n.jpg?v=1784892092&width=800",
      videoUrl: "https://eu.store.igarden.ai/cdn/shop/videos/c/vp/46a971642efa4e8ca882fa50a41b8851/46a971642efa4e8ca882fa50a41b8851.HD-1080p-2.5Mbps-89795821.mp4?v=0",
      desc: "معجبة جداً بأداء جهاز السباحة 1000 واط! سهل التثبيت ويوفر تدفقاً انسيابياً مثالياً لتمارين اللياقة."
    }
  ]
};

export const AWARDS_REVIEWS_DATA = {
  en: [
    {
      source: "MUSE Design Awards Platinum",
      text: "The iGarden Swim Jet 1,000 W is an award-winning cordless machine transforming any residential pool into an endless swimming lane.",
      link: "https://design.museaward.com/winner-info.php?id=37803"
    },
    {
      source: "Tech Times",
      text: "The iGarden Swim Jet 1,000 W reinvents home swimming by delivering powerful counter-current flow and 6 to 10 hours of runtime on full charge.",
      link: "https://www.techtimes.com/articles/314615/20260212/smartest-member-family-how-ai-powered-igarden-x-series-changing-backyard-fun.htm"
    },
    {
      source: "TIME Best Inventions",
      text: "TIME Best Inventions Honoree — Delivering 1,000 W of thrust and cordless versatility to swim continuously in pools of any size.",
      link: "https://time.com/collections/best-inventions-2025/7318411/igarden-swim-jet-p-series"
    },
    {
      source: "CES Innovation Awards 2026",
      text: "CES Innovation Award Honoree for high-efficiency 1,000 W fluid propulsion technology and cordless portable engineering.",
      link: "https://www.ces.tech/ces-innovation-awards/2026/igarden-swim-jet-x-series/"
    }
  ],
  ar: [
    {
      source: "MUSE Design Awards Platinum",
      text: "جهاز آي جاردن س swim جيت 1000 واط هو ابتكار حائز على الجائزة البلاتينية يحوّل أي مسبح منزلي إلى مسار سباحة لا نهائي.",
      link: "https://design.museaward.com/winner-info.php?id=37803"
    },
    {
      source: "Tech Times",
      text: "يعيد جهاز آي جاردن س swim جيت تعريف السباحة المنزلية بفضل تيار معاكس قوي وتشغيل متواصل من 6 إلى 10 ساعات.",
      link: "https://www.techtimes.com/articles/314615/20260212/smartest-member-family-how-ai-powered-igarden-x-series-changing-backyard-fun.htm"
    },
    {
      source: "TIME Best Inventions",
      text: "ضمن قائمة أفضل اختراعات مجلة تايم — قوة دفع 1000 واط وتصميم لاسلكي مبتكر يتيح السباحة المتواصلة في أي مسبح.",
      link: "https://time.com/collections/best-inventions-2025/7318411/igarden-swim-jet-p-series"
    },
    {
      source: "CES Innovation Awards 2026",
      text: "جائزة الابتكار في معرض CES لتقنية الدفع الهيدروديناميكي عالي الكفاءة بقدرة 1000 واط والتصميم اللاسلكي المتطور.",
      link: "https://www.ces.tech/ces-innovation-awards/2026/igarden-swim-jet-x-series/"
    }
  ]
};

export const FEATURE_GRID_ITEMS_DATA = {
  en: [
    {
      id: 0,
      tall: true,
      title: "Exclusive VIP Support",
      image: "https://eu.store.igarden.ai/cdn/shop/files/01_1_d30c0b5b-ad25-4a48-b286-1c1705d18707.png?v=1782444829&width=600"
    },
    {
      id: 1,
      tall: false,
      title: "Fast & Free Tracked Delivery",
      image: "https://eu.store.igarden.ai/cdn/shop/files/Shipping_truck_with_package_for_logistics_and_freight_transportation_1.png?v=1782444799&width=600"
    },
    {
      id: 2,
      tall: false,
      title: "2-Year Official Warranty",
      image: "https://eu.store.igarden.ai/cdn/shop/files/Account_security_Antivirus_protection_Shield_with_checkmark_badge_1.png?v=1782444800&width=600"
    },
    {
      id: 3,
      tall: true,
      title: "100% Secure Encrypted Checkout",
      image: "https://eu.store.igarden.ai/cdn/shop/files/credit_card_payment_with_coins_and_transfer_arrows_1.png?v=1782444829&width=600"
    },
    {
      id: 4,
      tall: false,
      title: "24/7 Dedicated Support",
      image: "https://eu.store.igarden.ai/cdn/shop/files/02_1.png?v=1782444835&width=600"
    },
    {
      id: 5,
      tall: false,
      title: "30-Day Money-Back Guarantee",
      image: "https://eu.store.igarden.ai/cdn/shop/files/2222_2.png?v=1782444799&width=600"
    }
  ],
  ar: [
    {
      id: 0,
      tall: true,
      title: "خدمة كبار الشخصيات الحصرية",
      image: "https://eu.store.igarden.ai/cdn/shop/files/01_1_d30c0b5b-ad25-4a48-b286-1c1705d18707.png?v=1782444829&width=600"
    },
    {
      id: 1,
      tall: false,
      title: "شحن مجاني وسريع مع التتبع",
      image: "https://eu.store.igarden.ai/cdn/shop/files/Shipping_truck_with_package_for_logistics_and_freight_transportation_1.png?v=1782444799&width=600"
    },
    {
      id: 2,
      tall: false,
      title: "ضمان رسمي شامل لمدة سنتين",
      image: "https://eu.store.igarden.ai/cdn/shop/files/Account_security_Antivirus_protection_Shield_with_checkmark_badge_1.png?v=1782444800&width=600"
    },
    {
      id: 3,
      tall: true,
      title: "دفع آمن ومشفر بنسبة 100%",
      image: "https://eu.store.igarden.ai/cdn/shop/files/credit_card_payment_with_coins_and_transfer_arrows_1.png?v=1782444829&width=600"
    },
    {
      id: 4,
      tall: false,
      title: "خدمة عملاء ودعم متواصل 24/7",
      image: "https://eu.store.igarden.ai/cdn/shop/files/02_1.png?v=1782444835&width=600"
    },
    {
      id: 5,
      tall: false,
      title: "استرجاع مضمون خلال 30 يوماً",
      image: "https://eu.store.igarden.ai/cdn/shop/files/2222_2.png?v=1782444799&width=600"
    }
  ]
};

export const BLOG_ARTICLES_DATA = {
  en: [
    {
      id: "blog-1",
      title: "What is a Counter-Current Swimming System? Beginner's Guide",
      excerpt: "A compact pool doesn't mean compromising on serious swimming training. The iGarden Swim Jet 1,000 W delivers endless flow...",
      date: "2026-08-19",
      image: "https://eu.store.igarden.ai/cdn/shop/articles/igarden_swim_jet.png?v=1787124881&width=800",
      link: "https://eu.store.igarden.ai/blogs/news/swim-machine-beginner-guides"
    },
    {
      id: "blog-2",
      title: "Top Alternatives to Built-In Endless Pools: Which One to Choose?",
      excerpt: "Discover why portable 1,000 W counter-current swim jets have become the premier choice for pool owners worldwide...",
      date: "2026-08-17",
      image: "https://eu.store.igarden.ai/cdn/shop/articles/Endless_pool_alternatives_5c5a4834-19cf-4d5c-9f94-65caa6f32a62.webp?v=1786959857&width=800",
      link: "https://eu.store.igarden.ai/blogs/news/endless-pool-alternatives"
    },
    {
      id: "blog-3",
      title: "How to Swim in Place in Any Residential Pool",
      excerpt: "Stationary swimming with a dedicated 1,000 W laminar flow machine allows uninterrupted lap sessions in any basin...",
      date: "2026-08-13",
      image: "https://eu.store.igarden.ai/cdn/shop/articles/Swim_in_place_ebfe3823-44a0-4d1f-9ce8-0f45dc485e35.webp?v=1786959752&width=800",
      link: "https://eu.store.igarden.ai/blogs/news/how-to-swim-in-place-europea-guide"
    },
    {
      id: "blog-4",
      title: "Are Counter-Current Swim Machines Worth It? Complete Review",
      excerpt: "Why the cordless iGarden Swim Jet transforms backyard pools into fitness and relaxation powerhouses...",
      date: "2026-08-12",
      image: "https://eu.store.igarden.ai/cdn/shop/articles/Are_Counter_Current_Swim_Machine_Worth_it_449e2a34-77a9-4ad4-927a-183917827a86.webp?v=1786958964&width=800",
      link: "https://eu.store.igarden.ai/blogs/news/are-swim-machines-worth-it"
    }
  ],
  ar: [
    {
      id: "blog-1",
      title: "ما هو نظام السباحة بالتيار المعاكس؟ دليل المبتدئين الشامل",
      excerpt: "المسبح الصغير لا يعني التخلي عن التمارين الرياضية الجادة. يوفر جهاز آي جاردن س swim جيت تدفقاً مستمراً وفعالاً...",
      date: "2026-08-19",
      image: "https://eu.store.igarden.ai/cdn/shop/articles/igarden_swim_jet.png?v=1787124881&width=800",
      link: "https://eu.store.igarden.ai/blogs/news/swim-machine-beginner-guides"
    },
    {
      id: "blog-2",
      title: "أفضل بدائل المسابح اللانهائية التقليدية: كيف تختار الحل الأمثل؟",
      excerpt: "تعرف على الأسباب التي تجعل أجهزة السباحة المحمولة بقدرة 1000 واط الخيار المفضل لأصحاب المسابح المنزلية...",
      date: "2026-08-17",
      image: "https://eu.store.igarden.ai/cdn/shop/articles/Endless_pool_alternatives_5c5a4834-19cf-4d5c-9f94-65caa6f32a62.webp?v=1786959857&width=800",
      link: "https://eu.store.igarden.ai/blogs/news/endless-pool-alternatives"
    },
    {
      id: "blog-3",
      title: "كيفية السباحة في المكان داخل أي مسبح منزلي بسهولة",
      excerpt: "تتيح السباحة الثابتة بتيار مائي انسيابي بقوة 1000 واط أداء تمارين سباحة غير محدودة في أي حوض مائي...",
      date: "2026-08-13",
      image: "https://eu.store.igarden.ai/cdn/shop/articles/Swim_in_place_ebfe3823-44a0-4d1f-9ce8-0f45dc485e35.webp?v=1786959752&width=800",
      link: "https://eu.store.igarden.ai/blogs/news/how-to-swim-in-place-europea-guide"
    },
    {
      id: "blog-4",
      title: "هل تستحق أجهزة السباحة ذات التيار المعاكس الشراء؟ مراجعة شاملة",
      excerpt: "اكتشف كيف يحول جهاز آي جاردن س swim جيت مسبح حديقتك إلى مركز متكامل للياقة البدنية والاسترخاء...",
      date: "2026-08-12",
      image: "https://eu.store.igarden.ai/cdn/shop/articles/Are_Counter_Current_Swim_Machine_Worth_it_449e2a34-77a9-4ad4-927a-183917827a86.webp?v=1786958964&width=800",
      link: "https://eu.store.igarden.ai/blogs/news/are-swim-machines-worth-it"
    }
  ]
};

// Backward-compatible exports for direct imports
export const TESTIMONIALS_1 = TESTIMONIALS_1_DATA.en;
export const HOME_KOL_VIDEOS = HOME_KOL_VIDEOS_DATA.en;
export const AWARDS_REVIEWS = AWARDS_REVIEWS_DATA.en;
export const FEATURE_GRID_ITEMS = FEATURE_GRID_ITEMS_DATA.en;
export const BLOG_ARTICLES = BLOG_ARTICLES_DATA.en;

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide_PPG9m4",
    type: "standard",
    bgPc: "https://eu.store.igarden.ai/cdn/shop/files/Hero_banner.jpg?v=1780654836&width=1920",
    bgMb: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237258_1.jpg?v=1780654824&width=430",
    eyebrow: "Over $4.2M Raised on Kickstarter",
    heading: "iGarden Portable Swim Jet — 1,000 W",
    desc: "1,000 W Power • 6–10h Runtime at Max Thrust • Universal Pool Fit",
    btnText: "Order Now",
    btnLink: "/products/igarden-swim-jet-x-series-portable-swim-machine",
    btnBg: "#0071E3",
    btnColor: "#ffffff",
    align: "center"
  },
  {
    id: "school_banner_LCDNyF",
    type: "school",
    bgPc: "https://eu.store.igarden.ai/cdn/shop/files/Hero_Banner_3.png?v=1785481427&width=1920",
    bgMb: "https://eu.store.igarden.ai/cdn/shop/files/Hero_Banner_4.png?v=1785481427&width=430",
    eyebrow: "Special iGarden Swim Jet Offer",
    heading: "Save Big on Your 1,000 W Swim Jet",
    desc: "1,000 W Power | 6–10h Runtime | Universal Compatibility",
    btnText: "Order Now",
    btnLink: "/products/igarden-swim-jet-x-series-portable-swim-machine",
    btnBg: "#f86709",
    btnColor: "#ffffff",
    endTs: 1788249599
  }
];
