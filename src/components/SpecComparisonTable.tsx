import React from 'react';
import { ProductVariant } from '../types';
import { PRODUCT_VARIANTS } from '../data';
import { redirectToCheckout } from '../utils/checkout';
import { trackTikTokInitiateCheckout } from '../utils/tiktokPixel';
import { Check, Zap, ArrowRight, Shield, Award, Sparkles, Lock } from 'lucide-react';

interface SpecComparisonTableProps {
  onSelectVariant: (variant: ProductVariant) => void;
}

export const SpecComparisonTable: React.FC<SpecComparisonTableProps> = ({ onSelectVariant }) => {
  const currentVariant = PRODUCT_VARIANTS[0];

  const specCategories = [
    {
      category: "⚡ Performances Hydrodynamiques",
      rows: [
        {
          label: "Puissance nominale moteur",
          value: "1 000 W de puissance premium",
          highlight: true
        },
        {
          label: "Débit volumique & Propulsion",
          value: "Flux laminaire haute performance sans turbulence",
          highlight: true
        },
        {
          label: "Vitesse d'écoulement max",
          value: "Jusqu'à 1,5 m/s (réglable en continu sans fil)",
          highlight: true
        },
        {
          label: "Type de flux généré",
          value: "Flux laminaire continu large et stable pour une nage naturelle"
        },
        {
          label: "Plage de vitesse",
          value: "Progressif en continu (0 - 100% via télécommande sans fil)"
        }
      ]
    },
    {
      category: "🔋 Batterie & Autonomie",
      rows: [
        {
          label: "Autonomie certifiée",
          value: "6 à 10 heures d'autonomie à pleine puissance",
          highlight: true
        },
        {
          label: "Performance d'endurance",
          value: "Jusqu'à 10 heures d'autonomie — longues séances sans recharge constante",
          highlight: true
        },
        {
          label: "Capacité & type de batterie",
          value: "Pack Lithium-ion haute densité énergétique sécurisé basse tension"
        },
        {
          label: "Temps de recharge complète",
          value: "~3,5 h (Chargeur rapide intelligent inclus)"
        },
        {
          label: "Batterie amovible & interchangeable",
          value: "Oui — clipsable et interchangeable en quelques secondes"
        }
      ]
    },
    {
      category: "🏊‍♂️ Compatibilité & Profils d'Utilisation",
      rows: [
        {
          label: "Compatibilité bassins",
          value: "Compatible avec toutes les piscines (hors-sol, enterrées, semi-enterrées)",
          highlight: true
        },
        {
          label: "Polyvalence d'utilisation",
          value: "Une solution universelle et polyvalente pour votre piscine (loisir, fitness, nage sportive)",
          highlight: true
        },
        {
          label: "Compatibilité des parois & margelles",
          value: "100% Universel (piscines tubulaires, coques polyester, bois, béton, carrelage, acier)"
        }
      ]
    },
    {
      category: "🛠️ Conception, Ergonomie & Robustesse",
      rows: [
        {
          label: "Système de fixation",
          value: "Pince universelle télescopique sans perçage avec patins de protection"
        },
        {
          label: "Indice d'étanchéité moteur",
          value: "IP68 submersible intégral haute résistance au chlore et au sel"
        },
        {
          label: "Niveau sonore en fonctionnement",
          value: "Ultra-silencieux (< 48 dB à pleine puissance)"
        },
        {
          label: "Transport & manipulation",
          value: "Poignée ergonomique et roulettes intégrées pour un déplacement sans effort"
        }
      ]
    },
    {
      category: "📦 Pack Inclus & Garanties Officielles",
      rows: [
        {
          label: "Contenu du pack complet",
          value: "Moteur Swim Jet 1 000 W + Batterie Lithium haute endurance + Chargeur + Fixation universelle + Télécommande"
        },
        {
          label: "Garantie constructeur iGarden",
          value: "Garantie 2 ans pièces et main d'œuvre incluse",
          highlight: true
        },
        {
          label: "Expédition & Livraison",
          value: "Livraison Colissimo Suivi Gratuite en 24-48h partout en France"
        },
        {
          label: "Essai & Retours",
          value: "Garantie 30 jours Satisfait ou Remboursé"
        }
      ]
    }
  ];

  const handleSelect = (variant: ProductVariant) => {
    onSelectVariant(variant);
    trackTikTokInitiateCheckout({
      id: variant.id,
      name: variant.name,
      price: variant.price,
      quantity: 1,
      currency: 'EUR'
    });
    redirectToCheckout(variant.checkoutUrl);
  };

  const discountPercent = Math.round(((currentVariant.originalPrice - currentVariant.price) / currentVariant.originalPrice) * 100);

  return (
    <section id="Spécifications" className="py-16 sm:py-24 bg-[#FAFAFC] overflow-hidden border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[#0071E3] text-[13px] font-bold mb-3 shadow-xs">
            <Zap className="w-4 h-4" /> Fiche Technique & Spécifications Officielles
          </div>
          <h2 className="text-[28px] sm:text-[44px] font-bold text-gray-950 leading-tight mb-3 font-['Figtree']">
            Spécifications du Swim Jet — 1 000 W
          </h2>
          <p className="text-[16px] sm:text-[18px] text-gray-600 max-w-[800px] mx-auto leading-relaxed">
            Toutes les caractéristiques techniques certifiées du modèle unique iGarden Swim Jet (1 000 W) : une solution universelle, puissante et polyvalente, <strong>compatible avec toutes les piscines</strong>.
          </p>
        </div>

        {/* Single Highlight Featured Card */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="relative rounded-2xl p-6 sm:p-8 bg-white border-2 border-[#0071E3] shadow-lg flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            {/* Top Badge */}
            <div className="absolute -top-3.5 left-6 sm:left-8">
              <span className="px-3.5 py-1 rounded-full text-[11px] sm:text-[12px] font-extrabold uppercase tracking-wide shadow-sm bg-[#0071E3] text-white flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> 1 000 W de puissance • 6 à 10 h d'autonomie
              </span>
            </div>

            {/* Product Image */}
            <div className="w-full md:w-5/12 aspect-[16/11] rounded-xl overflow-hidden bg-slate-50 border border-gray-100 flex items-center justify-center p-3">
              <img
                src={currentVariant.images[0]}
                alt={currentVariant.name}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Product Info & Action */}
            <div className="w-full md:w-7/12 flex flex-col justify-between space-y-4">
              <div>
                <div className="text-[12px] font-bold text-gray-400 uppercase tracking-wider">
                  {currentVariant.sku}
                </div>
                <h3 className="text-[24px] sm:text-[28px] font-black text-gray-950 leading-tight mt-0.5">
                  {currentVariant.shortName}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mt-1">
                  Une solution universelle et polyvalente pour votre piscine — Profitez d'une expérience de nage à contre-courant où que vous soyez.
                </p>
              </div>

              {/* Key Quick Stats */}
              <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-blue-50/50 rounded-xl border border-blue-100">
                <div className="text-center">
                  <div className="text-[11px] font-medium text-gray-500">Puissance</div>
                  <div className="text-[14px] sm:text-[15px] font-extrabold text-[#0071E3]">1 000 W</div>
                </div>
                <div className="text-center border-x border-blue-200/60">
                  <div className="text-[11px] font-medium text-gray-500">Compatibilité</div>
                  <div className="text-[14px] sm:text-[15px] font-extrabold text-gray-900">Universelle</div>
                </div>
                <div className="text-center">
                  <div className="text-[11px] font-medium text-gray-500">Autonomie</div>
                  <div className="text-[14px] sm:text-[15px] font-extrabold text-gray-900">6 à 10 h</div>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-gray-100">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[32px] sm:text-[36px] font-black text-gray-950 leading-none">
                      {currentVariant.price.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €
                    </span>
                    <span className="text-[16px] text-gray-400 line-through">
                      {currentVariant.originalPrice.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €
                    </span>
                    <span className="text-[12px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-sm">
                      -{discountPercent}%
                    </span>
                  </div>
                  <div className="text-[12px] font-medium text-emerald-800 mt-1">
                    Économie immédiate de {currentVariant.discountAmount.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleSelect(currentVariant);
                  }}
                  className="py-3.5 px-6 rounded-xl font-bold text-[14px] tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer uppercase shadow-md bg-[#0071E3] hover:bg-blue-700 text-white active:scale-[0.98]"
                >
                  <Lock className="w-4 h-4 shrink-0" />
                  <span>Commander à {currentVariant.price.toLocaleString('fr-FR', { minimumFractionDigits: 0 })} €</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Technical Specifications Table */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          {/* Table Header Info Bar */}
          <div className="bg-gray-900 text-white px-5 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h4 className="font-extrabold text-[16px] sm:text-[18px]">
                Fiche technique certifiée — Swim Jet 1 000 W
              </h4>
              <p className="text-[12px] sm:text-[13px] text-gray-300">
                Toutes les caractéristiques d'ingénierie et de sécurité certifiées d'usine
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px] text-emerald-400 font-semibold">
              <Shield className="w-4 h-4 shrink-0" /> <span>Garantie 2 ans incluse</span>
            </div>
          </div>

          {/* Table content */}
          <div className="divide-y divide-gray-200">
            {specCategories.map((cat, cIdx) => (
              <div key={cIdx} className="p-4 sm:p-6">
                <h5 className="font-extrabold text-[14px] sm:text-[15px] text-gray-900 mb-3 flex items-center gap-2">
                  <span>{cat.category}</span>
                </h5>
                <div className="space-y-2.5">
                  {cat.rows.map((row, rIdx) => (
                    <div
                      key={rIdx}
                      className={`flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 p-2.5 rounded-lg transition-colors ${
                        row.highlight ? 'bg-blue-50/40 border border-blue-100/60' : 'bg-gray-50/60'
                      }`}
                    >
                      <span className="text-[13px] sm:text-[14px] font-semibold text-gray-700">
                        {row.label}
                      </span>
                      <span className={`text-[13px] sm:text-[14px] font-bold text-left sm:text-right ${
                        row.highlight ? 'text-[#0071E3]' : 'text-gray-900'
                      }`}>
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Table Footer Action */}
          <div className="bg-gray-50 p-5 sm:p-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[12px] sm:text-[14px] text-gray-600 text-center sm:text-left">
              Livraison Colissimo 24-48h offerte • Retour sous 30 jours satisfait ou remboursé • SAV en français 7j/7
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleSelect(currentVariant);
              }}
              className="px-6 py-3 min-h-[44px] bg-[#0071E3] hover:bg-blue-700 active:scale-[0.99] text-white rounded-xl text-[13px] sm:text-[14px] font-bold uppercase transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
            >
              <Lock className="w-3.5 h-3.5 shrink-0" />
              <span>Commander le Swim Jet — 209,00 €</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
