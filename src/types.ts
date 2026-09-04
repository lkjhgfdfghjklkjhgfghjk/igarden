export interface ProductVariant {
  id: string;
  sku: string;
  name: string;
  shortName: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  discountAmount: number;
  couponCode: string;
  couponOff: string;
  checkoutUrl: string;
  specsSummary: string;
  images: string[];
  power: string;
  speed: string;
  batteryLife: string;
  flowRate: string;
}

export interface AccessoryOption {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  saveText: string;
  image: string;
  selectedVariant?: string;
  variants?: { id: string; name: string; price: number; originalPrice: number; image: string }[];
}

export interface CartItem {
  id: string;
  title: string;
  variantTitle: string;
  price: number;
  originalPrice?: number;
  image: string;
  quantity: number;
  discountCode?: string;
  checkoutUrl?: string;
}

export interface KolVideo {
  id: string;
  author: string;
  followers: string;
  avatar: string;
  quote: string;
  thumbnail: string;
  videoUrl: string;
  videoType: 'shopify' | 'youtube';
}

export interface Athlete {
  name: string;
  title: string;
  quote: string;
  avatar: string;
  image: string;
}

export interface PressQuote {
  name: string;
  logo: string;
  quote: string;
}

export interface TrustpilotReview {
  id: string;
  name: string;
  date: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface UserReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
  productVariant?: string;
}
