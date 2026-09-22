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
      category: "⚡ Hydrodynamische Leistung",
      rows: [
        {
          label: "Nennleistung Motor",
          value: "1.000 W Spitzenleistung",
          highlight: true
        },
        {
          label: "Volumenstrom & Schubkraft",
          value: "Laminare Hochleistungsströmung ohne Verwirbelungen",
          highlight: true
        },
        {
          label: "Max. Strömungsgeschwindigkeit",
          value: "Bis zu 1,5 m/s (stufenlos per Fernbedienung regulierbar)",
          highlight: true
        },
        {
          label: "Strömungsprofil",
          value: "Breiter, stabiler laminarer Gegenstrom für ein natürliches Schwimmgefühl"
        },
        {
          label: "Geschwindigkeitsbereich",
          value: "Stufenlos regulierbar (0 – 100% über Funk-Fernbedienung)"
        }
      ]
    },
    {
      category: "🔋 Akku & Laufzeit",
      rows: [
        {
          label: "Zertifizierte Laufzeit",
          value: "6 bis 10 Stunden Akkulaufzeit",
          highlight: true
        },
        {
          label: "Ausdauerleistung",
          value: "Bis zu 10 Stunden Betrieb — lange Schwimmeinheiten ohne ständiges Nachladen",
          highlight: true
        },
        {
          label: "Akkukapazität & Zelltyp",
          value: "Hochleistungs-Lithium-Ionen-Akkupack mit sicherer Niederspannung"
        },
        {
          label: "Ladedauer (vollständig)",
          value: "~3,5 Std. (inklusive intelligentem Schnellladegerät)"
        },
        {
          label: "Herausnehmbarer Akku",
          value: "Ja — sekundenschnell per Klick-System entnehm- und wechselbar"
        }
      ]
    },
    {
      category: "🏊‍♂️ Kompatibilität & Einsatzbereiche",
      rows: [
        {
          label: "Pool-Kompatibilität",
          value: "Passend für alle gängigen Poolarten (Aufstellpools, Einbaubecken, Stahlwand, Holz)",
          highlight: true
        },
        {
          label: "Einsatzvielfalt",
          value: "Universelle & flexible Lösung für jeden Pool (Freizeitschwimmen, Aquafitness, Sporttraining)",
          highlight: true
        },
        {
          label: "Beckenrand-Kompatibilität",
          value: "100% Universell (Aufstellbecken, Rundbecken, Holz-, Beton-, Fliesen- und Stahlrahmenbecken)"
        }
      ]
    },
    {
      category: "🛠️ Konstruktion, Ergonomie & Robustheit",
      rows: [
        {
          label: "Befestigungssystem",
          value: "Universelle Teleskop-Klemmhalterung ohne Bohren mit Oberflächenschonern"
        },
        {
          label: "Schutzart Motor",
          value: "IP68 vollständig tauchfähig, chlor- und salzwasserbeständig"
        },
        {
          label: "Betriebslautstärke",
          value: "Flüsterleise (< 48 dB bei voller Leistung)"
        },
        {
          label: "Transport & Handling",
          value: "Ergonomischer Tragegriff und integrierte Leichtlaufrollen für mühelosen Transport"
        }
      ]
    },
    {
      category: "📦 Lieferumfang & Herstellergarantie",
      rows: [
        {
          label: "Lieferumfang Komplettset",
          value: "Swim Jet 1.000 W Antriebseinheit + Lithium-Akku + Schnellladegerät + Universalklemme + Fernbedienung"
        },
        {
          label: "iGarden Herstellergarantie",
          value: "2 Jahre Garantie auf Teile und Arbeitsleistung inklusive",
          highlight: true
        },
        {
          label: "Versand & Zustellung",
          value: "Kostenloser DHL Express-Versand mit Sendungsverfolgung (2-4 Werktage)"
        },
        {
          label: "Testphase & Rückgabe",
          value: "30 Tage Geld-zurück-Garantie ohne Risiko"
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
            <Zap className="w-4 h-4" /> Offizielles Datenblatt & Technische Spezifikationen
          </div>
          <h2 className="text-[28px] sm:text-[44px] font-bold text-gray-950 leading-tight mb-3 font-['Figtree']">
            Technische Daten — Swim Jet 1.000 W
          </h2>
          <p className="text-[16px] sm:text-[18px] text-gray-600 max-w-[800px] mx-auto leading-relaxed">
            Alle herstellerzertifizierten Leistungsdaten des iGarden Swim Jet (1.000 W): Eine universelle, kraftvolle und flexible Lösung – <strong>kompatibel mit allen gängigen Poolarten</strong>.
          </p>
        </div>

        {/* Single Highlight Featured Card */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="relative rounded-2xl p-6 sm:p-8 bg-white border-2 border-[#0071E3] shadow-lg flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            {/* Top Badge */}
            <div className="absolute -top-3.5 left-6 sm:left-8">
              <span className="px-3.5 py-1 rounded-full text-[11px] sm:text-[12px] font-extrabold uppercase tracking-wide shadow-sm bg-[#0071E3] text-white flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> 1.000 W Spitzenleistung • 6 bis 10 Std. Akkulaufzeit
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
                  Die universelle und flexible Lösung für Ihren Pool — Genießen Sie ein erstklassiges Gegenstrom-Schwimmerlebnis zu Hause.
                </p>
              </div>

              {/* Key Quick Stats */}
              <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-blue-50/50 rounded-xl border border-blue-100">
                <div className="text-center">
                  <div className="text-[11px] font-medium text-gray-500">Leistung</div>
                  <div className="text-[14px] sm:text-[15px] font-extrabold text-[#0071E3]">1.000 W</div>
                </div>
                <div className="text-center border-x border-blue-200/60">
                  <div className="text-[11px] font-medium text-gray-500">Kompatibilität</div>
                  <div className="text-[14px] sm:text-[15px] font-extrabold text-gray-900">Universell</div>
                </div>
                <div className="text-center">
                  <div className="text-[11px] font-medium text-gray-500">Akkulaufzeit</div>
                  <div className="text-[14px] sm:text-[15px] font-extrabold text-gray-900">6 bis 10 Std.</div>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-gray-100">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[32px] sm:text-[36px] font-black text-gray-950 leading-none">
                      {currentVariant.price.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €
                    </span>
                    <span className="text-[16px] text-gray-400 line-through">
                      {currentVariant.originalPrice.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €
                    </span>
                    <span className="text-[12px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-sm">
                      -{discountPercent}%
                    </span>
                  </div>
                  <div className="text-[12px] font-medium text-emerald-800 mt-1">
                    Sie sparen sofort {currentVariant.discountAmount.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €
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
                  <span>Jetzt bestellen • {currentVariant.price.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €</span>
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
                Zertifiziertes Produktdatenblatt — Swim Jet 1.000 W
              </h4>
              <p className="text-[12px] sm:text-[13px] text-gray-300">
                Alle Konstruktions- und Sicherheitsmerkmale direkt ab Werk geprüft
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px] text-emerald-400 font-semibold">
              <Shield className="w-4 h-4 shrink-0" /> <span>2 Jahre Garantie inklusive</span>
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
              Kostenloser DHL Express-Versand • 30 Tage risikofreie Geld-zurück-Garantie • Deutscher Kundenservice 7 Tage/Woche
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
              <span>Swim Jet bestellen — 209,00 €</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
