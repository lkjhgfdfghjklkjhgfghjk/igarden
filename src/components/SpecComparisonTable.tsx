import React from 'react';
import { ProductVariant } from '../types';
import { PRODUCT_VARIANTS } from '../data';
import { redirectToCheckout } from '../utils/checkout';
import { Check, Zap, ArrowRight, Battery, Gauge, Waves, Shield, Award, Sparkles, Lock } from 'lucide-react';

interface SpecComparisonTableProps {
  onSelectVariant: (variant: ProductVariant) => void;
}

export const SpecComparisonTable: React.FC<SpecComparisonTableProps> = ({ onSelectVariant }) => {
  const [activeMobileModelIdx, setActiveMobileModelIdx] = React.useState<number>(0);

  const specCategories = [
    {
      category: "⚡ Performances Hydrodynamiques",
      rows: [
        {
          label: "Puissance nominale moteur",
          values: ["400 Watts", "600 Watts", "1000 Watts"],
          highlight: true
        },
        {
          label: "Débit volumique maximal",
          values: ["180 m³/h (790 GPM)", "240 m³/h (1050 GPM)", "320 m³/h (1400 GPM)"],
          highlight: true
        },
        {
          label: "Vitesse d'écoulement max",
          values: ["0,9 m/s", "1,2 m/s", "1,5 m/s"],
          highlight: true
        },
        {
          label: "Type de flux généré",
          values: [
            "Flux laminaire large sans turbulence",
            "Flux laminaire large sans turbulence",
            "Flux laminaire renforcé haute propulsion"
          ]
        },
        {
          label: "Réglage de la vitesse",
          values: [
            "Progressif en continu (0 - 100%)",
            "Progressif en continu (0 - 100%)",
            "Progressif en continu (0 - 100%)"
          ]
        }
      ]
    },
    {
      category: "🔋 Batterie & Autonomie",
      rows: [
        {
          label: "Autonomie en nage continue",
          values: ["0,7 à 2,5 heures", "1,0 à 3,5 heures", "1,5 à 5,0 heures"],
          highlight: true
        },
        {
          label: "Capacité & type de batterie",
          values: [
            "Lithium-ion 25,2V (Module P15)",
            "Lithium-ion 25,2V (Module P30)",
            "Lithium-ion 25,2V (Module P30 Pro)"
          ]
        },
        {
          label: "Temps de charge",
          values: ["~2,5 h (Rapide)", "~3,5 h (Rapide)", "~4,0 h (Rapide)"]
        },
        {
          label: "Batterie amovible",
          values: ["Oui (10s)", "Oui (10s)", "Oui (10s)"]
        }
      ]
    },
    {
      category: "🏊‍♂️ Profils & Usages Recommandés",
      rows: [
        {
          label: "Niveau de pratique",
          values: [
            "Détente, rééducation douce, loisir",
            "Entraînement régulier, fitness",
            "Nage sportive intensive, athlètes"
          ],
          highlight: true
        },
        {
          label: "Taille de bassin",
          values: [
            "Dès 3 m (hors-sol, spas)",
            "Moyennes à grandes (dès 4 m)",
            "Couloirs de nage & grands bassins"
          ]
        },
        {
          label: "Compatibilité bassins",
          values: [
            "100% Universel (tous bassins)",
            "100% Universel (tous bassins)",
            "100% Universel (tous bassins)"
          ]
        }
      ]
    },
    {
      category: "🛠️ Conception & Robustesse",
      rows: [
        {
          label: "Système de fixation",
          values: [
            "Pince télescopique (sans perçage)",
            "Pince télescopique (sans perçage)",
            "Pince télescopique renforcée"
          ]
        },
        {
          label: "Indice d'étanchéité",
          values: [
            "IP68 submersible",
            "IP68 submersible",
            "IP68 submersible"
          ]
        },
        {
          label: "Niveau sonore",
          values: ["Silencieux (< 48 dB)", "Silencieux (< 48 dB)", "Silencieux (< 50 dB)"]
        },
        {
          label: "Poids de l'appareil",
          values: ["10,5 kg", "12,0 kg", "13,2 kg"]
        }
      ]
    },
    {
      category: "📦 Inclus dans le Pack & Garanties",
      rows: [
        {
          label: "Pack complet",
          values: [
            "Jet + Batterie P15 + Chargeur + Support",
            "Jet + Batterie P30 + Chargeur + Support",
            "Jet + Batterie P30 Pro + Chargeur Pro"
          ]
        },
        {
          label: "Garantie constructeur",
          values: ["2 ans incluse", "2 ans incluse", "2 ans incluse"],
          highlight: true
        },
        {
          label: "Livraison Colissimo",
          values: ["Gratuite (24-48h)", "Gratuite (24-48h)", "Gratuite (24-48h)"]
        }
      ]
    }
  ];

  const handleSelect = (variant: ProductVariant) => {
    onSelectVariant(variant);
    redirectToCheckout(variant.checkoutUrl);
  };

  const modelHighlights = [
    {
      tag: "Meilleure Vente",
      badgeColor: "bg-emerald-600 text-white",
      borderActive: "border-[#0071E3] bg-[#F0F7FF]/50 shadow-md ring-2 ring-[#0071E3]/30",
      description: "Le choix parfait pour transformer toute piscine familiale ou hors-sol en espace de nage et de détente bien-être.",
      keyStats: [
        { label: "Puissance", val: "400W" },
        { label: "Débit", val: "180 m³/h" },
        { label: "Autonomie", val: "jusqu'à 2,5 h" }
      ],
      img: "https://eu.store.igarden.ai/cdn/shop/files/Image_X_AIR.png?v=1778495171&width=600"
    },
    {
      tag: "Recommandé Entraînement",
      badgeColor: "bg-blue-600 text-white",
      borderActive: "border-blue-300 bg-[#F9FBFF] shadow-sm",
      description: "Puissance supérieure et batterie P30 étendue pour un entraînement cardio régulier et une nage soutenue.",
      keyStats: [
        { label: "Puissance", val: "600W" },
        { label: "Débit", val: "240 m³/h" },
        { label: "Autonomie", val: "jusqu'à 3,5 h" }
      ],
      img: "https://eu.store.igarden.ai/cdn/shop/files/1-FR-1.png?v=1782461732"
    },
    {
      tag: "Performance Maximale",
      badgeColor: "bg-purple-700 text-white",
      borderActive: "border-purple-300 bg-[#FAF7FF] shadow-sm",
      description: "Propulsion 1000W ultra-musclée pour athlètes, triathlètes et nageurs sportifs exigeant un contre-courant puissant.",
      keyStats: [
        { label: "Puissance", val: "1000W" },
        { label: "Débit", val: "320 m³/h" },
        { label: "Autonomie", val: "jusqu'à 5,0 h" }
      ],
      img: "https://eu.store.igarden.ai/cdn/shop/files/3-FR_8a800e11-2d34-4c21-9ad0-0dc7085c7d01.png?v=1782461729"
    }
  ];

  return (
    <section id="Spécifications" className="py-16 sm:py-24 bg-[#FAFAFC] overflow-hidden border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[#0071E3] text-[13px] font-bold mb-3 shadow-xs">
            <Zap className="w-4 h-4" /> Comparatif Officiel Gamme Série X
          </div>
          <h2 className="text-[28px] sm:text-[44px] font-bold text-gray-950 leading-tight mb-3 font-['Figtree']">
            Comparatif des 3 modèles iGarden Swim Jet
          </h2>
          <p className="text-[16px] sm:text-[18px] text-gray-600 max-w-[800px] mx-auto leading-relaxed">
            Consultez les caractéristiques détaillées et les fiches techniques des modèles <strong>X AIR</strong>, <strong>X</strong> et <strong>X PRO</strong> pour choisir la configuration parfaite selon votre bassin et votre niveau de pratique.
          </p>
        </div>

        {/* 3 Variants Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {PRODUCT_VARIANTS.map((v, i) => {
            const highlight = modelHighlights[i] || modelHighlights[0];
            const discountPercent = Math.round(((v.originalPrice - v.price) / v.originalPrice) * 100);

            return (
              <div
                key={v.id}
                className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all border ${highlight.borderActive}`}
              >
                {/* Badge Tag */}
                <div className="absolute -top-3 left-6">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wide shadow-xs ${highlight.badgeColor}`}>
                    {highlight.tag}
                  </span>
                </div>

                <div>
                  {/* Image container */}
                  <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-white border border-gray-100 mb-5 flex items-center justify-center p-2">
                    <img
                      src={highlight.img}
                      alt={v.name}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Header info */}
                  <div className="space-y-2 mb-4">
                    <div className="text-[12px] font-bold text-gray-400 uppercase tracking-wider">
                      {v.sku}
                    </div>
                    <h3 className="text-[22px] sm:text-[24px] font-black text-gray-950 leading-snug">
                      {v.shortName}
                    </h3>
                    <p className="text-[13px] text-gray-600 leading-relaxed min-h-[38px]">
                      {highlight.description}
                    </p>
                  </div>

                  {/* Key Quick Stats */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-white/90 rounded-xl border border-gray-200/80 mb-5">
                    {highlight.keyStats.map((stat, sIdx) => (
                      <div key={sIdx} className="text-center">
                        <div className="text-[11px] font-medium text-gray-500">{stat.label}</div>
                        <div className="text-[13px] sm:text-[14px] font-extrabold text-gray-900">{stat.val}</div>
                      </div>
                    ))}
                  </div>

                  {/* Price Box */}
                  <div className="pt-2 pb-4 border-t border-gray-200/60">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[30px] sm:text-[34px] font-black text-gray-950 leading-none">
                        {v.price.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €
                      </span>
                      <span className="text-[16px] text-gray-400 line-through">
                        {v.originalPrice.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €
                      </span>
                      <span className="text-[12px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-sm">
                        -{discountPercent}%
                      </span>
                    </div>
                    <div className="text-[12px] font-medium text-emerald-800 mt-1">
                      Économie immédiate de {v.discountAmount.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleSelect(v);
                  }}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-[14px] tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer uppercase shadow-xs active:scale-[0.98] ${
                    i === 0
                      ? 'bg-[#0071E3] hover:bg-blue-700 text-white shadow-md'
                      : 'bg-gray-900 hover:bg-black text-white'
                  }`}
                >
                  <Lock className="w-4 h-4 shrink-0" />
                  <span>Commander {v.shortName}</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Side-by-Side Comprehensive Technical Specs Table (Desktop & Tablet) + Mobile Tabs view */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          {/* Table Header Info Bar */}
          <div className="bg-gray-900 text-white px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h4 className="font-extrabold text-[15px] sm:text-[18px]">
                Fiches techniques comparées complètes
              </h4>
              <p className="text-[12px] sm:text-[13px] text-gray-300">
                Toutes les caractéristiques d'ingénierie certifiées d'usine
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px] text-emerald-400 font-semibold">
              <Shield className="w-4 h-4 shrink-0" /> <span>Garantie 2 ans incluse</span>
            </div>
          </div>

          {/* MOBILE VIEW (Screens < 768px): Interactive Model Switcher & Cards */}
          <div className="md:hidden p-4 space-y-4 bg-slate-50/50">
            {/* Mobile Model Segmented Controls */}
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-gray-200/80 rounded-xl">
              {PRODUCT_VARIANTS.map((variant, idx) => {
                const isActive = activeMobileModelIdx === idx;
                return (
                  <button
                    key={variant.id}
                    onClick={() => setActiveMobileModelIdx(idx)}
                    className={`py-2 px-1 rounded-lg text-center transition-all cursor-pointer ${
                      isActive
                        ? 'bg-white text-gray-950 font-black shadow-xs'
                        : 'text-gray-600 font-semibold hover:text-gray-900 text-[11px]'
                    }`}
                  >
                    <div className="text-[12px] leading-tight truncate">{variant.shortName.split(' ')[0]} {variant.shortName.split(' ')[1] || ''}</div>
                    <div className={`text-[11px] mt-0.5 ${isActive ? 'text-[#0071E3] font-black' : 'text-gray-500'}`}>
                      {variant.price.toLocaleString('fr-FR', { minimumFractionDigits: 0 })} €
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Model Selected Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400">Modèle actif</span>
                  <h5 className="text-[17px] font-black text-gray-950">
                    {PRODUCT_VARIANTS[activeMobileModelIdx].name}
                  </h5>
                </div>
                <span className="text-[18px] font-black text-[#0071E3]">
                  {PRODUCT_VARIANTS[activeMobileModelIdx].price.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €
                </span>
              </div>

              {/* Spec rows for active model */}
              <div className="space-y-4">
                {specCategories.map((cat, cIdx) => (
                  <div key={cIdx} className="space-y-1.5">
                    <div className="text-[12px] font-bold text-gray-900 bg-gray-100/90 px-2.5 py-1 rounded-md">
                      {cat.category}
                    </div>
                    <div className="divide-y divide-gray-100 px-1">
                      {cat.rows.map((row, rIdx) => (
                        <div key={rIdx} className="py-2 flex items-center justify-between gap-2 text-[12px]">
                          <span className="text-gray-500 font-medium">{row.label}</span>
                          <span className={`text-right font-bold ${row.highlight ? 'text-[#0071E3]' : 'text-gray-900'}`}>
                            {row.values[activeMobileModelIdx]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 mt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleSelect(PRODUCT_VARIANTS[activeMobileModelIdx]);
                  }}
                  className="w-full py-3 rounded-lg bg-[#0071E3] hover:bg-blue-700 text-white font-bold text-[13px] uppercase tracking-wide flex items-center justify-center gap-2 shadow-xs cursor-pointer text-center"
                >
                  <Lock className="w-4 h-4 shrink-0" />
                  <span>Commander {PRODUCT_VARIANTS[activeMobileModelIdx].shortName} • {PRODUCT_VARIANTS[activeMobileModelIdx].price.toLocaleString('fr-FR', { minimumFractionDigits: 0 })} €</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>
              </div>
            </div>
          </div>

          {/* DESKTOP & TABLET VIEW (Screens >= 768px) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[760px]">
              <thead>
                <tr className="border-b border-gray-200 bg-[#F4F6F9]">
                  <th className="py-4 px-6 text-[13px] font-bold text-gray-500 uppercase tracking-wider w-[28%]">
                    Caractéristiques
                  </th>
                  <th className="py-4 px-5 text-[15px] font-extrabold text-gray-900 w-[24%] border-l border-gray-200/80 bg-blue-50/40">
                    <div className="flex items-center gap-1.5">
                      <span>X AIR (X25-P15)</span>
                      <span className="text-[10px] bg-[#0071E3] text-white px-1.5 py-0.2 rounded-sm font-bold">PROMO</span>
                    </div>
                    <div className="text-[13px] font-bold text-[#0071E3] mt-0.5">189,00 €</div>
                  </th>
                  <th className="py-4 px-5 text-[15px] font-extrabold text-gray-900 w-[24%] border-l border-gray-200/80">
                    <div>X (X30-P30)</div>
                    <div className="text-[13px] font-bold text-gray-700 mt-0.5">229,00 €</div>
                  </th>
                  <th className="py-4 px-5 text-[15px] font-extrabold text-gray-900 w-[24%] border-l border-gray-200/80">
                    <div>X PRO (X35-P30)</div>
                    <div className="text-[13px] font-bold text-gray-700 mt-0.5">249,00 €</div>
                  </th>
                </tr>
              </thead>

              <tbody>
                {specCategories.map((cat, cIdx) => (
                  <React.Fragment key={cIdx}>
                    {/* Category Title Row */}
                    <tr className="bg-gray-100/80 border-t-2 border-b border-gray-200">
                      <td colSpan={4} className="py-2.5 px-6 font-extrabold text-[13px] sm:text-[14px] text-gray-800 tracking-wide">
                        {cat.category}
                      </td>
                    </tr>

                    {/* Category Items */}
                    {cat.rows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className={`border-b border-gray-100 hover:bg-slate-50 transition-colors ${
                          row.highlight ? 'bg-amber-50/20' : ''
                        }`}
                      >
                        <td className="py-3 px-6 font-semibold text-gray-700 text-[13px] sm:text-[14px]">
                          {row.label}
                        </td>
                        <td
                          className={`py-3 px-5 text-[13px] sm:text-[14px] border-l border-gray-200/60 ${
                            row.highlight ? 'font-bold text-[#0071E3] bg-blue-50/30' : 'text-gray-800'
                          }`}
                        >
                          {row.values[0]}
                        </td>
                        <td
                          className={`py-3 px-5 text-[13px] sm:text-[14px] border-l border-gray-200/60 ${
                            row.highlight ? 'font-bold text-gray-950' : 'text-gray-800'
                          }`}
                        >
                          {row.values[1]}
                        </td>
                        <td
                          className={`py-3 px-5 text-[13px] sm:text-[14px] border-l border-gray-200/60 ${
                            row.highlight ? 'font-bold text-gray-950' : 'text-gray-800'
                          }`}
                        >
                          {row.values[2]}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick Selector Footer Buttons */}
          <div className="bg-gray-50 p-4 sm:p-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[12px] sm:text-[14px] text-gray-600 text-center sm:text-left">
              Besoin d'aide pour choisir votre modèle ? Tous les modèles bénéficient du retour sous 30 jours et de la livraison gratuite.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {PRODUCT_VARIANTS.map((v) => (
                <button
                  type="button"
                  key={v.id}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleSelect(v);
                  }}
                  className="px-3 py-1.5 sm:px-3.5 sm:py-2 bg-white hover:bg-blue-50 border border-gray-300 hover:border-[#0071E3] rounded-lg text-[12px] sm:text-[13px] font-bold text-gray-800 hover:text-[#0071E3] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Lock className="w-3 h-3 text-[#0071E3]" />
                  <span>Commander {v.shortName} • {v.price.toLocaleString('fr-FR', { minimumFractionDigits: 0 })} €</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

