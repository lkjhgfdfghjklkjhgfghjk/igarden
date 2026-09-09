import { SupportedLanguage } from './types';
import { ProductVariant, AccessoryOption, KolVideo, Athlete, PressQuote, TrustpilotReview, UserReview } from '../types';
import { CHECKOUT_URL } from '../data';

// Localized Accessories
export function getLocalizedAccessories(lang: SupportedLanguage): AccessoryOption[] {
  switch (lang) {
    case 'de':
      return [
        {
          id: "storage-bag",
          title: "iGarden X-Serie Schutztasche",
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
          title: "iGarden Swim Jet Ersatzakku Power Box",
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
          title: "LED Schwimmende Pool-Lichter (2er-Set)",
          price: 35,
          originalPrice: 55,
          saveText: "20,00 € sparen",
          image: "https://eu.store.igarden.ai/cdn/shop/files/LEDPoolFloatingLights_2pcs_400x.png?v=1779085653"
        },
        {
          id: "wall-lights",
          title: "LED Pool-Wandbeleuchtung (2er-Set)",
          price: 35,
          originalPrice: 55,
          saveText: "20,00 € sparen",
          image: "https://eu.store.igarden.ai/cdn/shop/files/LEDPoolWallLights_2pcs_400x.jpg?v=1779085652"
        }
      ];
    case 'es':
      return [
        {
          id: "storage-bag",
          title: "Funda de Transporte iGarden Serie X",
          price: 79,
          originalPrice: 89,
          saveText: "Ahorra 10,00 €",
          image: "https://eu.store.igarden.ai/cdn/shop/files/iGarden-X-series-swim-jet-storage-bag-for-x30-p30-x-5-x25-p15-x-air_400x.png?v=1787189266",
          selectedVariant: "48057856360666",
          variants: [
            { id: "48057856360666", name: "Funda X AIR", price: 79, originalPrice: 89, image: "https://eu.store.igarden.ai/cdn/shop/files/iGarden-X-series-swim-jet-storage-bag-for-x30-p30-x-5-x25-p15-x-air_400x.png?v=1787189266" }
          ]
        },
        {
          id: "power-box",
          title: "Batería Extra iGarden Swim Jet Power Box",
          price: 229,
          originalPrice: 399,
          saveText: "Ahorra 170,00 €",
          image: "https://eu.store.igarden.ai/cdn/shop/files/PowerBoxP30-P15_400x.jpg?v=1785465169",
          selectedVariant: "48284051079386",
          variants: [
            { id: "48284051079386", name: "Batería Extra P30", price: 229, originalPrice: 399, image: "https://eu.store.igarden.ai/cdn/shop/files/PowerBoxP30-P15_400x.jpg?v=1785465169" }
          ]
        },
        {
          id: "floating-lights",
          title: "Luces LED Flotantes para Piscina (2 uds)",
          price: 35,
          originalPrice: 55,
          saveText: "Ahorra 20,00 €",
          image: "https://eu.store.igarden.ai/cdn/shop/files/LEDPoolFloatingLights_2pcs_400x.png?v=1779085653"
        },
        {
          id: "wall-lights",
          title: "Focos LED Adhesivos para Piscina (2 uds)",
          price: 35,
          originalPrice: 55,
          saveText: "Ahorra 20,00 €",
          image: "https://eu.store.igarden.ai/cdn/shop/files/LEDPoolWallLights_2pcs_400x.jpg?v=1779085652"
        }
      ];
    case 'it':
      return [
        {
          id: "storage-bag",
          title: "Borsa da Trasporto Protettiva iGarden Serie X",
          price: 79,
          originalPrice: 89,
          saveText: "Risparmia 10,00 €",
          image: "https://eu.store.igarden.ai/cdn/shop/files/iGarden-X-series-swim-jet-storage-bag-for-x30-p30-x-5-x25-p15-x-air_400x.png?v=1787189266",
          selectedVariant: "48057856360666",
          variants: [
            { id: "48057856360666", name: "Borsa X AIR", price: 79, originalPrice: 89, image: "https://eu.store.igarden.ai/cdn/shop/files/iGarden-X-series-swim-jet-storage-bag-for-x30-p30-x-5-x25-p15-x-air_400x.png?v=1787189266" }
          ]
        },
        {
          id: "power-box",
          title: "Batteria Extra iGarden Swim Jet Power Box",
          price: 229,
          originalPrice: 399,
          saveText: "Risparmia 170,00 €",
          image: "https://eu.store.igarden.ai/cdn/shop/files/PowerBoxP30-P15_400x.jpg?v=1785465169",
          selectedVariant: "48284051079386",
          variants: [
            { id: "48284051079386", name: "Batteria Supplementare P30", price: 229, originalPrice: 399, image: "https://eu.store.igarden.ai/cdn/shop/files/PowerBoxP30-P15_400x.jpg?v=1785465169" }
          ]
        },
        {
          id: "floating-lights",
          title: "Luci LED Galleggianti per Piscina (2 pz)",
          price: 35,
          originalPrice: 55,
          saveText: "Risparmia 20,00 €",
          image: "https://eu.store.igarden.ai/cdn/shop/files/LEDPoolFloatingLights_2pcs_400x.png?v=1779085653"
        },
        {
          id: "wall-lights",
          title: "Faretti LED a Parete per Piscina (2 pz)",
          price: 35,
          originalPrice: 55,
          saveText: "Risparmia 20,00 €",
          image: "https://eu.store.igarden.ai/cdn/shop/files/LEDPoolWallLights_2pcs_400x.jpg?v=1779085652"
        }
      ];
    case 'en':
      return [
        {
          id: "storage-bag",
          title: "iGarden X Series Protective Storage Bag",
          price: 79,
          originalPrice: 89,
          saveText: "Save €10.00",
          image: "https://eu.store.igarden.ai/cdn/shop/files/iGarden-X-series-swim-jet-storage-bag-for-x30-p30-x-5-x25-p15-x-air_400x.png?v=1787189266",
          selectedVariant: "48057856360666",
          variants: [
            { id: "48057856360666", name: "X AIR Storage Bag", price: 79, originalPrice: 89, image: "https://eu.store.igarden.ai/cdn/shop/files/iGarden-X-series-swim-jet-storage-bag-for-x30-p30-x-5-x25-p15-x-air_400x.png?v=1787189266" }
          ]
        },
        {
          id: "power-box",
          title: "iGarden Extra Power Box Battery",
          price: 229,
          originalPrice: 399,
          saveText: "Save €170.00",
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
          saveText: "Save €20.00",
          image: "https://eu.store.igarden.ai/cdn/shop/files/LEDPoolFloatingLights_2pcs_400x.png?v=1779085653"
        },
        {
          id: "wall-lights",
          title: "LED Pool Wall Lights (2pcs)",
          price: 35,
          originalPrice: 55,
          saveText: "Save €20.00",
          image: "https://eu.store.igarden.ai/cdn/shop/files/LEDPoolWallLights_2pcs_400x.jpg?v=1779085652"
        }
      ];
    case 'pt':
      return [
        {
          id: "storage-bag",
          title: "Mala de Proteção e Transporte iGarden Série X",
          price: 79,
          originalPrice: 89,
          saveText: "Poupe 10,00 €",
          image: "https://eu.store.igarden.ai/cdn/shop/files/iGarden-X-series-swim-jet-storage-bag-for-x30-p30-x-5-x25-p15-x-air_400x.png?v=1787189266",
          selectedVariant: "48057856360666",
          variants: [
            { id: "48057856360666", name: "Mala X AIR", price: 79, originalPrice: 89, image: "https://eu.store.igarden.ai/cdn/shop/files/iGarden-X-series-swim-jet-storage-bag-for-x30-p30-x-5-x25-p15-x-air_400x.png?v=1787189266" }
          ]
        },
        {
          id: "power-box",
          title: "Bateria Extra iGarden Swim Jet Power Box",
          price: 229,
          originalPrice: 399,
          saveText: "Poupe 170,00 €",
          image: "https://eu.store.igarden.ai/cdn/shop/files/PowerBoxP30-P15_400x.jpg?v=1785465169",
          selectedVariant: "48284051079386",
          variants: [
            { id: "48284051079386", name: "Bateria Suplementar P30", price: 229, originalPrice: 399, image: "https://eu.store.igarden.ai/cdn/shop/files/PowerBoxP30-P15_400x.jpg?v=1785465169" }
          ]
        },
        {
          id: "floating-lights",
          title: "Luzes LED Flutuantes para Piscina (2 un)",
          price: 35,
          originalPrice: 55,
          saveText: "Poupe 20,00 €",
          image: "https://eu.store.igarden.ai/cdn/shop/files/LEDPoolFloatingLights_2pcs_400x.png?v=1779085653"
        },
        {
          id: "wall-lights",
          title: "Projetores LED de Parede para Piscina (2 un)",
          price: 35,
          originalPrice: 55,
          saveText: "Poupe 20,00 €",
          image: "https://eu.store.igarden.ai/cdn/shop/files/LEDPoolWallLights_2pcs_400x.jpg?v=1779085652"
        }
      ];
    case 'nl':
      return [
        {
          id: "storage-bag",
          title: "iGarden X-Serie Beschermende Opbergtas",
          price: 79,
          originalPrice: 89,
          saveText: "Bespaar € 10,00",
          image: "https://eu.store.igarden.ai/cdn/shop/files/iGarden-X-series-swim-jet-storage-bag-for-x30-p30-x-5-x25-p15-x-air_400x.png?v=1787189266",
          selectedVariant: "48057856360666",
          variants: [
            { id: "48057856360666", name: "X AIR Opbergtas", price: 79, originalPrice: 89, image: "https://eu.store.igarden.ai/cdn/shop/files/iGarden-X-series-swim-jet-storage-bag-for-x30-p30-x-5-x25-p15-x-air_400x.png?v=1787189266" }
          ]
        },
        {
          id: "power-box",
          title: "iGarden Extra Power Box Accu",
          price: 229,
          originalPrice: 399,
          saveText: "Bespaar € 170,00",
          image: "https://eu.store.igarden.ai/cdn/shop/files/PowerBoxP30-P15_400x.jpg?v=1785465169",
          selectedVariant: "48284051079386",
          variants: [
            { id: "48284051079386", name: "Extra P30 Power Box", price: 229, originalPrice: 399, image: "https://eu.store.igarden.ai/cdn/shop/files/PowerBoxP30-P15_400x.jpg?v=1785465169" }
          ]
        },
        {
          id: "floating-lights",
          title: "Drijvende LED Zwembadverlichting (2 stuks)",
          price: 35,
          originalPrice: 55,
          saveText: "Bespaar € 20,00",
          image: "https://eu.store.igarden.ai/cdn/shop/files/LEDPoolFloatingLights_2pcs_400x.png?v=1779085653"
        },
        {
          id: "wall-lights",
          title: "LED Zwembad Wandverlichting (2 stuks)",
          price: 35,
          originalPrice: 55,
          saveText: "Bespaar € 20,00",
          image: "https://eu.store.igarden.ai/cdn/shop/files/LEDPoolWallLights_2pcs_400x.jpg?v=1779085652"
        }
      ];
    default: // 'fr'
      return [
        {
          id: "storage-bag",
          title: "Sac de rangement iGarden Série X",
          price: 79,
          originalPrice: 89,
          saveText: "Économisez 10,00 €",
          image: "https://eu.store.igarden.ai/cdn/shop/files/iGarden-X-series-swim-jet-storage-bag-for-x30-p30-x-5-x25-p15-x-air_400x.png?v=1787189266",
          selectedVariant: "48057856360666",
          variants: [
            { id: "48057856360666", name: "Sac de rangement X AIR", price: 79, originalPrice: 89, image: "https://eu.store.igarden.ai/cdn/shop/files/iGarden-X-series-swim-jet-storage-bag-for-x30-p30-x-5-x25-p15-x-air_400x.png?v=1787189266" }
          ]
        },
        {
          id: "power-box",
          title: "Boîtier d'alimentation iGarden Swim Jet Power Box",
          price: 229,
          originalPrice: 399,
          saveText: "Économisez 170,00 €",
          image: "https://eu.store.igarden.ai/cdn/shop/files/PowerBoxP30-P15_400x.jpg?v=1785465169",
          selectedVariant: "48284051079386",
          variants: [
            { id: "48284051079386", name: "Boîtier Power Box P30 supplémentaire", price: 229, originalPrice: 399, image: "https://eu.store.igarden.ai/cdn/shop/files/PowerBoxP30-P15_400x.jpg?v=1785465169" }
          ]
        },
        {
          id: "floating-lights",
          title: "Lumières flottantes LED pour piscine (Lot de 2)",
          price: 35,
          originalPrice: 55,
          saveText: "Économisez 20,00 €",
          image: "https://eu.store.igarden.ai/cdn/shop/files/LEDPoolFloatingLights_2pcs_400x.png?v=1779085653"
        },
        {
          id: "wall-lights",
          title: "Lumières murales LED pour piscine (Lot de 2)",
          price: 35,
          originalPrice: 55,
          saveText: "Économisez 20,00 €",
          image: "https://eu.store.igarden.ai/cdn/shop/files/LEDPoolWallLights_2pcs_400x.jpg?v=1779085652"
        }
      ];
  }
}

// Localized Athletes
export function getLocalizedAthletes(lang: SupportedLanguage): Athlete[] {
  switch (lang) {
    case 'de':
      return [
        {
          name: "Ashleigh Gentle",
          title: "Australische Weltklasse-Triathletin",
          quote: "Ich war vom Swim Jet X sofort begeistert. Kompakt, in einer Minute montiert und mit einer Strömung, die sich perfekt an meine Erholungs- und Renneinheiten anpassen lässt.",
          avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95.png?v=1778495754&width=200",
          image: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237167_475705fe-959c-4216-9ad5-24c4e2ced8d0.png?v=1778495757&width=1000"
        },
        {
          name: "Ella Ramsay",
          title: "Olympia-Medaillengewinnerin",
          quote: "Die Montage war kinderleicht und der gleichmäßige, laminare Wasserstrom erlaubt es mir, an den kleinsten technischen Details meines Armzugs zu feilen.",
          avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95_1.png?v=1778495754&width=200",
          image: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237167_3.png?v=1778495755&width=1000"
        },
        {
          name: "Josh Amberger",
          title: "Australischer Ironman-Champion",
          quote: "Der Swim Jet X bringt maximale Flexibilität in mein Heimtraining. Die feine Geschwindigkeitsabstufung simuliert echte Freiwasserbedingungen verblüffend präzise.",
          avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95_2.png?v=1778495754&width=200",
          image: "https://eu.store.igarden.ai/cdn/shop/files/11_1_b5e9c857-985c-482f-8393-a5198120e5d2.png?v=1778581053&width=1000"
        }
      ];
    case 'es':
      return [
        {
          name: "Ashleigh Gentle",
          title: "Triatleta internacional",
          quote: "Quedé impresionada con el Swim Jet X. Muy compacto y fácil de montar, me permitió empezar mis entrenamientos y ajustar la resistencia exacta que necesitaba.",
          avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95.png?v=1778495754&width=200",
          image: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237167_475705fe-959c-4216-9ad5-24c4e2ced8d0.png?v=1778495757&width=1000"
        },
        {
          name: "Ella Ramsay",
          title: "Medallista olímpica en relevos",
          quote: "La instalación fue instantánea y el flujo uniforme me permite concentrarme en la técnica de brazada sin ninguna interrupción.",
          avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95_1.png?v=1778495754&width=200",
          image: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237167_3.png?v=1778495755&width=1000"
        },
        {
          name: "Josh Amberger",
          title: "Campeón australiano de Ironman",
          quote: "El Swim Jet X aporta una comodidad inigualable a mi rutina en casa. Simula a la perfección el entrenamiento en aguas abiertas.",
          avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95_2.png?v=1778495754&width=200",
          image: "https://eu.store.igarden.ai/cdn/shop/files/11_1_b5e9c857-985c-482f-8393-a5198120e5d2.png?v=1778581053&width=1000"
        }
      ];
    case 'it':
      return [
        {
          name: "Ashleigh Gentle",
          title: "Triatleta professionista",
          quote: "Sono rimasta colpita da Swim Jet X. Compatto, velocissimo da fissare, mi ha consentito di allenarmi subito con la resistenza perfetta per le mie sessioni.",
          avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95.png?v=1778495754&width=200",
          image: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237167_475705fe-959c-4216-9ad5-24c4e2ced8d0.png?v=1778495757&width=1000"
        },
        {
          name: "Ella Ramsay",
          title: "Medaglia olimpica di staffetta",
          quote: "Il montaggio è stato immediato. Il flusso d'acqua è liscio e continuo, ideale per curare ogni singolo dettaglio della bracciata.",
          avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95_1.png?v=1778495754&width=200",
          image: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237167_3.png?v=1778495755&width=1000"
        },
        {
          name: "Josh Amberger",
          title: "Atleta Ironman australiano",
          quote: "Swim Jet X è una soluzione comodissima per il nuoto a casa. I livelli di velocità simulano benissimo il nuoto in acque libere.",
          avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95_2.png?v=1778495754&width=200",
          image: "https://eu.store.igarden.ai/cdn/shop/files/11_1_b5e9c857-985c-482f-8393-a5198120e5d2.png?v=1778581053&width=1000"
        }
      ];
    case 'en':
      return [
        {
          name: "Ashleigh Gentle",
          title: "World Triathlon Champion",
          quote: "I was genuinely impressed by the Swim Jet X. Compact and easy to install, I was able to start my workout immediately with the perfect training resistance.",
          avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95.png?v=1778495754&width=200",
          image: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237167_475705fe-959c-4216-9ad5-24c4e2ced8d0.png?v=1778495757&width=1000"
        },
        {
          name: "Ella Ramsay",
          title: "Olympic Relay Medalist",
          quote: "Setup was fast and hassle-free, and the smooth, consistent stream allows me to focus on subtle stroke mechanics that make a big difference in the pool.",
          avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95_1.png?v=1778495754&width=200",
          image: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237167_3.png?v=1778495755&width=1000"
        },
        {
          name: "Josh Amberger",
          title: "Australian Ironman Champion",
          quote: "The Swim Jet X brings sheer convenience to my home swimming routine. The adjustable speeds accurately simulate open-water conditions.",
          avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95_2.png?v=1778495754&width=200",
          image: "https://eu.store.igarden.ai/cdn/shop/files/11_1_b5e9c857-985c-482f-8393-a5198120e5d2.png?v=1778581053&width=1000"
        }
      ];
    case 'pt':
      return [
        {
          name: "Ashleigh Gentle",
          title: "Triatleta Internacional",
          quote: "Fiquei impressionada com o Swim Jet X. Muito compacto e fácil de montar, permitiu-me começar o treino imediatamente com a resistência perfeita.",
          avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95.png?v=1778495754&width=200",
          image: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237167_475705fe-959c-4216-9ad5-24c4e2ced8d0.png?v=1778495757&width=1000"
        },
        {
          name: "Ella Ramsay",
          title: "Medalhada Olímpica de Estafetas",
          quote: "A instalação foi imediata e a corrente suave e contínua permite-me focar em todos os pormenores técnicos da braçada.",
          avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95_1.png?v=1778495754&width=200",
          image: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237167_3.png?v=1778495755&width=1000"
        },
        {
          name: "Josh Amberger",
          title: "Atleta Ironman Australiano",
          quote: "O Swim Jet X traz uma enorme conveniência para o meu treino em casa. A velocidade regulável simula fielmente o mar aberto.",
          avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95_2.png?v=1778495754&width=200",
          image: "https://eu.store.igarden.ai/cdn/shop/files/11_1_b5e9c857-985c-482f-8393-a5198120e5d2.png?v=1778581053&width=1000"
        }
      ];
    case 'nl':
      return [
        {
          name: "Ashleigh Gentle",
          title: "Australisch Triatlonkampioene",
          quote: "Ik was direct onder de indruk van de Swim Jet X. Compact, binnen 1 minuut gemonteerd en met een weerstand die perfect aansluit op mijn herstel- en duurtrainingen.",
          avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95.png?v=1778495754&width=200",
          image: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237167_475705fe-959c-4216-9ad5-24c4e2ced8d0.png?v=1778495757&width=1000"
        },
        {
          name: "Ella Ramsay",
          title: "Olympisch Medaillewinnares",
          quote: "De installatie was eenvoudig en de gelijkmatige laminaire stroom stelt me in staat om aan de kleinste technische details van mijn slag te werken.",
          avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95_1.png?v=1778495754&width=200",
          image: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237167_3.png?v=1778495755&width=1000"
        },
        {
          name: "Josh Amberger",
          title: "Australisch Ironman Kampioen",
          quote: "De Swim Jet X brengt enorm veel gemak in mijn thuistraining. De instelbare snelheden bootsen openwater-omstandigheden uitstekend na.",
          avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95_2.png?v=1778495754&width=200",
          image: "https://eu.store.igarden.ai/cdn/shop/files/11_1_b5e9c857-985c-482f-8393-a5198120e5d2.png?v=1778581053&width=1000"
        }
      ];
    default: // 'fr'
      return [
        {
          name: "Ashleigh Gentle",
          title: "Triathlète australienne de haut niveau",
          quote: "J'ai été impressionnée par le Swim Jet X. Compact et facile à installer, j'ai pu commencer mon entraînement immédiatement et m'adapter au réglage de récupération parfait.",
          avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95.png?v=1778495754&width=200",
          image: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237167_475705fe-959c-4216-9ad5-24c4e2ced8d0.png?v=1778495757&width=1000"
        },
        {
          name: "Ella Ramsay",
          title: "Médaillée olympique du relais",
          quote: "L'installation a été rapide et facile, et le flux fluide et constant me permet de me concentrer sur les petits détails techniques qui font une grande différence dans mon coup.",
          avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95_1.png?v=1778495754&width=200",
          image: "https://eu.store.igarden.ai/cdn/shop/files/Frame_2147237167_3.png?v=1778495755&width=1000"
        },
        {
          name: "Josh Amberger",
          title: "Champion australien d'Ironman",
          quote: "Le Swim Jet X apporte commodité et portabilité à mon programme de natation à domicile. Les hauteurs réglables et les vitesses multiples simulent parfaitement les conditions d’eau libre.",
          avatar: "https://eu.store.igarden.ai/cdn/shop/files/image_95_2.png?v=1778495754&width=200",
          image: "https://eu.store.igarden.ai/cdn/shop/files/11_1_b5e9c857-985c-482f-8393-a5198120e5d2.png?v=1778581053&width=1000"
        }
      ];
  }
}

// Localized Reviews
export function getLocalizedReviews(lang: SupportedLanguage): UserReview[] {
  switch (lang) {
    case 'de':
      return [
        {
          id: "rev-de-1",
          author: "Markus Schneider",
          rating: 5,
          date: "22.08.2026",
          title: "Überwältigt von der Power und dem leisen Betrieb",
          content: "Innerhalb von 2 Tagen per DHL geliefert. An unserem 4x2m Intex-Pool in unter 2 Minuten ohne Werkzeug montiert. Die Strömung ist bemerkenswert gleichmäßig und breit – man schwimmt kontinuierlich auf der Stelle, ohne jemals den Rand zu berühren. Meine morgendlichen 45-Minuten-Einheiten sind jetzt ein Traum!",
          verified: true,
          productVariant: "Swim Jet — 1.000 W"
        },
        {
          id: "rev-de-2",
          author: "Sabine Weber",
          rating: 5,
          date: "19.08.2026",
          title: "Eine echte Bereicherung für unseren Gartenpool in München",
          content: "Wir hatten überlegt, eine Festeinbau-Anlage für über 4.500 € zu kaufen. Für 209,00 € leistet dieses Gerät genau das Gleiche – ohne Baustelle! Die Fernbedienung ist super praktisch, um die Intensität anzupassen. Auch die Kinder haben riesigen Spaß.",
          verified: true,
          productVariant: "Swim Jet — 1.000 W"
        },
        {
          id: "rev-de-3",
          author: "Thorsten Bauer",
          rating: 5,
          date: "16.08.2026",
          title: "Perfekt für das Triathlon-Ausdauertraining",
          content: "Als ambitionierter Triathlet war das Schwimmen in einem 5-Meter-Becken immer frustrierend. Mit dem Swim Jet 1.000 W erzeugt die Gegenströmung den idealen Widerstand für Kraul- und Rumpftraining. Der Akku hält problemlos mehrere harte Trainingseinheiten durch.",
          verified: true,
          productVariant: "Swim Jet — 1.000 W"
        },
        {
          id: "rev-de-4",
          author: "Anja K.",
          rating: 5,
          date: "14.08.2026",
          title: "Sehr sichere und stabile Befestigung am Poolrand",
          content: "Ich hatte anfangs Bedenken wegen unseres Holz-Poolrands, aber die gummierte Schnellspannklemme sitzt bombenfest und hinterlässt keinerlei Spuren. Vollkommen wasserdicht (IP68) und beruhigend, da mit sicherer 36V-Niederspannung gearbeitet wird.",
          verified: true,
          productVariant: "Swim Jet — 1.000 W"
        },
        {
          id: "rev-de-5",
          author: "Jürgen Hoffmann",
          rating: 5,
          date: "11.08.2026",
          title: "Hervorragend für gelenkschonendes Rückentraining",
          content: "Mein Orthopäde empfahl tägliches Schwimmen. Mit diesem mobilen System mache ich meine Übungen jeden Tag bequem zu Hause, ohne ins überfüllte Hallenbad fahren zu müssen. Sehr gute deutsche Anleitung!",
          verified: true,
          productVariant: "Swim Jet — 1.000 W"
        },
        {
          id: "rev-de-6",
          author: "Claudia & Stefan",
          rating: 5,
          date: "08.08.2026",
          title: "Schnelle Lieferung und erstklassige Verarbeitungsqualität",
          content: "Dienstag bestellt, Donnerstagmittag in Hamburg angekommen. Hochwertige Materialien, exzellente Passform. Wir haben das ganze Wochenende trainiert – jeden Cent wert!",
          verified: true,
          productVariant: "Swim Jet — 1.000 W"
        }
      ];
    case 'es':
      return [
        {
          id: "rev-es-1",
          author: "Carlos Gómez",
          rating: 5,
          date: "22/08/2026",
          title: "Impresionado por la potencia y el silencio del motor",
          content: "Recibido en 24h en Valencia. Instalado en nuestra piscina tubular de 4x2m en 1 minuto sin ninguna herramienta. La corriente es increíblemente suave y constante, permitiendo nadar sin tocar los bordes. ¡Mis entrenamientos matutinos son ahora una maravilla!",
          verified: true,
          productVariant: "Swim Jet — 1.000 W"
        },
        {
          id: "rev-es-2",
          author: "Laura Fernández",
          rating: 5,
          date: "19/08/2026",
          title: "Una revolución para nuestra piscina en Madrid",
          content: "Estuvimos a punto de instalar una turbina de obra por más de 4.000 €, pero por 209,00 € este aparato hace exactamente la misma función sin obras ni albañiles. El mando es muy cómodo para cambiar la velocidad.",
          verified: true,
          productVariant: "Swim Jet — 1.000 W"
        },
        {
          id: "rev-es-3",
          author: "Miguel Ángel Ruiz",
          rating: 5,
          date: "16/08/2026",
          title: "Ideal para triatlón y resistencia",
          content: "Para entrenar crol en casa es perfecto. La resistencia es progresiva y la batería dura perfectamente varias sesiones intensas. Muy recomendado para cualquier deportista.",
          verified: true,
          productVariant: "Swim Jet — 1.000 W"
        }
      ];
    case 'it':
      return [
        {
          id: "rev-it-1",
          author: "Marco Rossi",
          rating: 5,
          date: "22/08/2026",
          title: "Spinta eccezionale e motore silenziosissimo",
          content: "Arrivato in 48 ore a Milano. Montato sulla nostra piscina fuori terra in 1 minuto esatto senza attrezzi. Il flusso è ampio e regolare, si nuota all'infinito senza mai toccare le pareti. Le mie sessioni quotidiane di 45 minuti sono un piacere assoluto!",
          verified: true,
          productVariant: "Swim Jet — 1.000 W"
        },
        {
          id: "rev-it-2",
          author: "Elena Bianchi",
          rating: 5,
          date: "19/08/2026",
          title: "Ha trasformato la nostra piscina a Roma",
          content: "Un'alternativa formidabile agli impianti fissi da migliaia di euro. Con 209,00 € abbiamo una corsia di nuoto vera senza dover fare alcun lavoro murario. I bambini si divertono tantissimo.",
          verified: true,
          productVariant: "Swim Jet — 1.000 W"
        }
      ];
    case 'en':
      return [
        {
          id: "rev-en-1",
          author: "David Miller",
          rating: 5,
          date: "22/08/2026",
          title: "Blown away by the power and smooth water stream",
          content: "Delivered in 48 hours. Mounted onto our 14ft above-ground pool in under a minute without tools. The current is remarkably wide, smooth, and steady — you can swim continuously on the spot without ever hitting the pool wall. An absolute game-changer!",
          verified: true,
          productVariant: "Swim Jet — 1,000 W"
        },
        {
          id: "rev-en-2",
          author: "Sarah Jenkins",
          rating: 5,
          date: "19/08/2026",
          title: "A complete revolution for our backyard pool",
          content: "We were quoted £4,500 for a built-in counter-current pump. For €209.00 this portable unit does the exact same job with zero construction or plumbing! The wireless remote makes adjusting swimming speed effortless.",
          verified: true,
          productVariant: "Swim Jet — 1,000 W"
        },
        {
          id: "rev-en-3",
          author: "Oliver Davies",
          rating: 5,
          date: "16/08/2026",
          title: "Perfect for triathlon and endurance lap training",
          content: "As a marathon swimmer, turning around every few strokes in a home pool was frustrating. With the Swim Jet 1,000 W, the steady resistance is ideal for long freestyle drills. The lithium battery easily lasts through multiple hard workouts.",
          verified: true,
          productVariant: "Swim Jet — 1,000 W"
        }
      ];
    case 'pt':
      return [
        {
          id: "rev-pt-1",
          author: "Rui Ferreira",
          rating: 5,
          date: "22/08/2026",
          title: "Impressionado com a potência e o silêncio do motor",
          content: "Recebido em 24h no Porto. Instalado na nossa piscina de 4x2m em 1 minuto sem ferramentas. A corrente é suave e uniforme, permitindo nadar de forma contínua sem bater nas bordas. Vale cada cêntimo!",
          verified: true,
          productVariant: "Swim Jet — 1.000 W"
        },
        {
          id: "rev-pt-2",
          author: "Mariana Santos",
          rating: 5,
          date: "19/08/2026",
          title: "Uma verdadeira revolução para a nossa piscina em Lisboa",
          content: "Estávamos a pensar gastar milhares de euros num sistema embutido, mas por 209,00 € este equipamento portátil faz exatamente o mesmo sem qualquer obra. O comando sem fios é super prático.",
          verified: true,
          productVariant: "Swim Jet — 1.000 W"
        }
      ];
    case 'nl':
      return [
        {
          id: "rev-nl-1",
          author: "Jan de Vries",
          rating: 5,
          date: "22/08/2026",
          title: "Verbluft door de stuwkracht en de stille motor",
          content: "Binnen 2 dagen bezorgd via PostNL. Binnen 2 minuten zonder gereedschap op ons Intex opzetzwembad gemonteerd. De waterstroom is heerlijk breed en stabiel. Geen frustratie meer over continu omkeren. Heerlijke workout!",
          verified: true,
          productVariant: "Swim Jet — 1.000 W"
        },
        {
          id: "rev-nl-2",
          author: "Anouk Bakker",
          rating: 5,
          date: "19/08/2026",
          title: "Geweldige investering voor onze tuin in Utrecht",
          content: "We twijfelden over een dure inbouwpomp van meer dan € 4.000. Voor € 209,00 levert dit apparaat exact hetzelfde resultaat zonder breekwerk. De afstandsbediening werkt perfect.",
          verified: true,
          productVariant: "Swim Jet — 1.000 W"
        }
      ];
    default:
      return [
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
          content: "Nous hésitions avec un système de nage encastré à plus de 4 000 €, mais pour 209,00 € cet appareil fait exactement le même travail sans aucun chantier. La télécommande sans fil est très pratique pour doser l'effort. Les enfants s'amusent aussi comme des fous avec le courant.",
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
        }
      ];
  }
}
