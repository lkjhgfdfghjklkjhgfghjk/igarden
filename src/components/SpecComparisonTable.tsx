import React from 'react';
import { ProductVariant } from '../types';
import { PRODUCT_VARIANTS } from '../data';
import { redirectToCheckout } from '../utils/checkout';
import { Zap, ArrowRight, Shield, Sparkles, Lock } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

interface SpecComparisonTableProps {
  onSelectVariant: (variant: ProductVariant) => void;
}

export const SpecComparisonTable: React.FC<SpecComparisonTableProps> = ({ onSelectVariant }) => {
  const { currentLanguage, swimJetPrice, formatPrice, t } = useI18n();
  const currentVariant = PRODUCT_VARIANTS[0];
  const isAr = currentLanguage.id === 'ar';

  const specCategories = isAr ? [
    {
      category: "⚡ الأداء الهيدروديناميكي وقوة التدفق",
      rows: [
        {
          label: "القدرة الاسمية للمحرك",
          value: "1,000 واط (تقنية العاكس الذكي High-Torque Inverter)",
          highlight: true
        },
        {
          label: "معدل التدفق ونظام الدفع",
          value: "نظام تدفق صفيحي laminar انسيابي بدون أي دوامات هوائية",
          highlight: true
        },
        {
          label: "أقصى سرعة تدفق مائي",
          value: "تصل إلى 1.5 م/ث (تحكم دقيق سلس عبر جهاز التحكم اللاسلكي)",
          highlight: true
        },
        {
          label: "طبيعة التيار المتولد",
          value: "تيار عريض ومستمر ومستقر يمنحك تجربة سباحة طبيعية وممتعة",
          highlight: false
        },
        {
          label: "نطاق التحكم بالسرعات",
          value: "تحكم تدريجي دقيق (0 - 100% تردد لاسلكي RF محكم)",
          highlight: false
        }
      ]
    },
    {
      category: "🔋 البطارية وساعات التشغيل الذاتي",
      rows: [
        {
          label: "مدة التشغيل المعتمدة",
          value: "من 6 إلى 10 ساعات سباحة متواصلة بشحنة واحدة",
          highlight: true
        },
        {
          label: "أداء التحمل الشاق",
          value: "جلسات سباحة وتدريب ممتدة دون الحاجة للشحن المتكرر",
          highlight: true
        },
        {
          label: "هندسة خلايا البطارية",
          value: "ليثيوم أيون فائقة الكثافة بمعايير السيارات الكهربائية مع حماية BMS متقدمة",
          highlight: false
        },
        {
          label: "مدة إعادة الشحن الكامل",
          value: "~ 3.5 ساعة (شاحن ذكي سريع مرفق مع الجهاز)",
          highlight: false
        },
        {
          label: "نظام التبديل السريع للبطارية",
          value: "نعم — قابلة للفك والتبديل في ثوانٍ معدودة",
          highlight: false
        }
      ]
    },
    {
      category: "🏊‍♂️ التوافق وأنواع المسابح",
      rows: [
        {
          label: "توافق أنواع المسابح",
          value: "100% متوافق مع المسابح فوق الأرض، المدفونة، ونصف المدفونة",
          highlight: true
        },
        {
          label: "طبيعة الاستخدام",
          value: "تدريب لياقة بدنية احترافي، إعادة تأهيل، وسباحة عائلية ممتعة",
          highlight: true
        },
        {
          label: "التثبيت على حواف المسابح",
          value: "عالمي وشامل (الهياكل الأنبوبية، الفيبرجلاس، الخشب، الخرسانة، البلاط، الجدران الفولاذية)",
          highlight: false
        }
      ]
    },
    {
      category: "🛠️ التصميم والمتانة والمقاومة",
      rows: [
        {
          label: "آلية التثبيت",
          value: "مشبك تلسكوبي سريع بدون أدوات مع وسادات سيليكون واقية تمنع الخدش",
          highlight: false
        },
        {
          label: "معيار مقاومة الماء",
          value: "IP68 غمر كامل ومقاوم تماماً للكلور والمياه المالحة والتآكل",
          highlight: false
        },
        {
          label: "مستوى الضجيج الصوتي",
          value: "فائق الهدوء (< 48 ديسيبل بأقصى قدرة تشغيلية)",
          highlight: false
        },
        {
          label: "سهولة النقل والتخزين",
          value: "مقابض مريحة مدمجة وعجلات متينة لسهولة التنقل",
          highlight: false
        }
      ]
    },
    {
      category: "📦 محتويات العلبة والضمان",
      rows: [
        {
          label: "المرفقات في الصندوق",
          value: "محرك Swim Jet 1,000 W + بطارية ليثيوم طويلة المدى + شاحن سريع + مشبك تثبيت + جهاز تحكم",
          highlight: false
        },
        {
          label: "الضمان الرسمي",
          value: "ضمان المصنع الشامل لمدة سنتين",
          highlight: true
        },
        {
          label: "الشحن والتوصيل",
          value: "شحن سريع مجاني ومؤمن مع رقم تتبع فوري",
          highlight: true
        },
        {
          label: "التجربة والإرجاع",
          value: "ضمان استرداد الأموال لمدة 30 يوماً في حال عدم الرضا",
          highlight: false
        }
      ]
    }
  ] : [
    {
      category: "⚡ Hydrodynamic Performance",
      rows: [
        {
          label: "Motor Rated Power",
          value: "1,000 W High-Torque Inverter",
          highlight: true
        },
        {
          label: "Flow Volumetric & Thrust",
          value: "Laminar flow system without turbulence",
          highlight: true
        },
        {
          label: "Max Flow Speed",
          value: "Up to 1.5 m/s (continuously adjustable via wireless remote)",
          highlight: true
        },
        {
          label: "Generated Flow Type",
          value: "Wide, continuous, and stabilized stream for a natural swimming stroke",
          highlight: false
        },
        {
          label: "Speed Range",
          value: "Stepless precision control (0 - 100% wireless RF)",
          highlight: false
        }
      ]
    },
    {
      category: "🔋 Battery & Autonomy",
      rows: [
        {
          label: "Certified Battery Life",
          value: "6 to 10 hours continuous swim autonomy",
          highlight: true
        },
        {
          label: "Endurance Performance",
          value: "Extended sessions without constant recharging",
          highlight: true
        },
        {
          label: "Battery Cell Architecture",
          value: "High-density automotive-grade Lithium-ion with BMS protection",
          highlight: false
        },
        {
          label: "Full Recharge Duration",
          value: "~3.5 h (Smart fast charger included)",
          highlight: false
        },
        {
          label: "Quick-Swap Swappable Battery",
          value: "Yes — detachable in seconds",
          highlight: false
        }
      ]
    },
    {
      category: "🏊‍♂️ Compatibility & Pool Types",
      rows: [
        {
          label: "Pool Compatibility",
          value: "100% Compatible with above-ground, in-ground, and semi-inground pools",
          highlight: true
        },
        {
          label: "Versatility Profile",
          value: "Universal training, fitness, rehabilitation & family swimming",
          highlight: true
        },
        {
          label: "Wall & Coping Fit",
          value: "Universal (tubular frame, fiberglass, wood, concrete, tile, steel walls)",
          highlight: false
        }
      ]
    },
    {
      category: "🛠️ Design, Ergonomics & Durability",
      rows: [
        {
          label: "Mounting Mechanism",
          value: "Tool-free telescoping quick-clamp with non-marring silicone pads",
          highlight: false
        },
        {
          label: "Waterproofing Rating",
          value: "IP68 fully submersible corrosion & chlorine resistant",
          highlight: false
        },
        {
          label: "Acoustic Footprint",
          value: "Whisper-quiet (< 48 dB at full power)",
          highlight: false
        },
        {
          label: "Portability & Transport",
          value: "Integrated ergonomic carry handles and heavy-duty wheels",
          highlight: false
        }
      ]
    },
    {
      category: "📦 Package & Warranty",
      rows: [
        {
          label: "Included In Box",
          value: "1,000 W Swim Jet Engine + Lithium High-Endurance Pack + Charger + Clamp Mount + Remote",
          highlight: false
        },
        {
          label: "Official Warranty",
          value: "2-Year Manufacturer Warranty included",
          highlight: true
        },
        {
          label: "Shipping & Delivery",
          value: "Free Express Insured Courier Delivery with tracking",
          highlight: true
        },
        {
          label: "Trial & Returns",
          value: "30-Day Money-Back Satisfaction Guarantee",
          highlight: false
        }
      ]
    }
  ];

  const handleSelect = (variant: ProductVariant) => {
    onSelectVariant(variant);
    redirectToCheckout(swimJetPrice.checkoutUrl || variant.checkoutUrl);
  };

  const discountPercent = Math.round(((swimJetPrice.originalPrice - swimJetPrice.price) / swimJetPrice.originalPrice) * 100);
  const discountAmount = swimJetPrice.originalPrice - swimJetPrice.price;

  return (
    <section id="Spécifications" className="py-16 sm:py-24 bg-[#FAFAFC] overflow-hidden border-t border-gray-200" dir={currentLanguage.direction}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[#0071E3] text-[13px] font-bold mb-3 shadow-xs">
            <Zap className="w-4 h-4" /> <span>{isAr ? 'المواصفات التقنية الدقيقة' : 'Technical Specifications'}</span>
          </div>
          <h2 className="text-[28px] sm:text-[44px] font-bold text-gray-950 leading-tight mb-3">
            {isAr ? 'مواصفات جهاز السباحة Swim Jet — 1,000 واط' : 'Swim Jet — 1,000 W Specifications'}
          </h2>
          <p className="text-[16px] sm:text-[18px] text-gray-600 max-w-[800px] mx-auto leading-relaxed">
            {isAr ? 'المواصفات الهندسية المعتمدة لجهاز iGarden Swim Jet (1,000 W): نظام سباحة ضد التيار قوي وشامل لجميع أنواع المسابح.' : 'Certified technical specifications for the iGarden Swim Jet (1,000 W): a universal, powerful, and versatile counter-current swim machine.'}
          </p>
        </div>

        {/* Single Highlight Featured Card */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="relative rounded-2xl p-6 sm:p-8 bg-white border-2 border-[#0071E3] shadow-lg flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            {/* Top Badge */}
            <div className="absolute -top-3.5 left-6 sm:left-8 rtl:left-auto rtl:right-6 rtl:sm:right-8">
              <span className="px-3.5 py-1 rounded-full text-[11px] sm:text-[12px] font-extrabold uppercase tracking-wide shadow-sm bg-[#0071E3] text-white flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> <span>{isAr ? 'قوة 1,000 واط • تشغيل 6-10 ساعات' : '1,000 W Power • 6-10 h Autonomy'}</span>
              </span>
            </div>

            {/* Product Image */}
            <div className="w-full md:w-5/12 aspect-[16/11] rounded-xl overflow-hidden bg-slate-50 border border-gray-100 flex items-center justify-center p-3">
              <img
                src={currentVariant.images[0]}
                alt={currentVariant.name}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            {/* Product Info & Action */}
            <div className="w-full md:w-7/12 flex flex-col justify-between space-y-4">
              <div>
                <div className="text-[12px] font-bold text-gray-400 uppercase tracking-wider">
                  {currentVariant.sku}
                </div>
                <h3 className="text-[24px] sm:text-[28px] font-black text-gray-950 leading-tight mt-0.5">
                  {t.hero.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mt-1">
                  {isAr ? 'نظام شامل وعالمي لمسبحك — استمتع بالسباحة ضد التيار في أي مكان وبكل سهولة.' : 'A universal and versatile system for your pool — enjoy counter-current swimming anywhere.'}
                </p>
              </div>

              {/* Key Quick Stats */}
              <div className="grid grid-cols-3 gap-2 py-3 px-3 bg-blue-50/50 rounded-xl border border-blue-100">
                <div className="text-center">
                  <div className="text-[11px] font-medium text-gray-500">{isAr ? 'القدرة' : 'Power'}</div>
                  <div className="text-[14px] sm:text-[15px] font-extrabold text-[#0071E3]">1,000 W</div>
                </div>
                <div className="text-center border-x border-blue-200/60">
                  <div className="text-[11px] font-medium text-gray-500">{isAr ? 'التوافق' : 'Compatibility'}</div>
                  <div className="text-[14px] sm:text-[15px] font-extrabold text-gray-900">{isAr ? 'شامل' : 'Universal'}</div>
                </div>
                <div className="text-center">
                  <div className="text-[11px] font-medium text-gray-500">{isAr ? 'البطارية' : 'Autonomy'}</div>
                  <div className="text-[14px] sm:text-[15px] font-extrabold text-gray-900">6 - 10 h</div>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-gray-100">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[30px] sm:text-[34px] font-black text-gray-950 leading-none">
                      {formatPrice(swimJetPrice.price)}
                    </span>
                    <span className="text-[16px] text-gray-400 line-through">
                      {formatPrice(swimJetPrice.originalPrice)}
                    </span>
                    <span className="text-[12px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-sm">
                      -{discountPercent}%
                    </span>
                  </div>
                  <div className="text-[12px] font-medium text-emerald-800 mt-1">
                    {t.common.saveAmount} {formatPrice(discountAmount)}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleSelect(currentVariant);
                  }}
                  className="py-3.5 px-6 rounded-xl font-bold text-[14px] tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer uppercase shadow-md bg-[#0071E3] hover:bg-blue-700 text-white active:scale-[0.98] border-none"
                >
                  <Lock className="w-4 h-4 shrink-0" />
                  <span>{t.common.orderNow} ({formatPrice(swimJetPrice.price)})</span>
                  <ArrowRight className={`w-4 h-4 shrink-0 ${isAr ? 'rotate-180' : ''}`} />
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
                {isAr ? 'بطاقة البيانات الهندسية — Swim Jet 1,000 W' : 'Technical Data Sheet — Swim Jet 1,000 W'}
              </h4>
              <p className="text-[12px] sm:text-[13px] text-gray-300">
                {isAr ? 'المواصفات المصنعية الرسمية ومعايير الجودة المعتمدة' : 'Official factory engineering and performance specifications'}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px] text-emerald-400 font-semibold">
              <Shield className="w-4 h-4 shrink-0" /> <span>{t.trustBar.warranty}</span>
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
                      <span className={`text-[13px] sm:text-[14px] font-bold text-left rtl:text-right sm:text-right rtl:sm:text-left ${
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
            <div className="text-[12px] sm:text-[14px] text-gray-600 text-center sm:text-left rtl:sm:text-right">
              {t.common.freeShipping} • {t.footer.returnsRefunds} • 24/7 Support
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleSelect(currentVariant);
              }}
              className="px-6 py-2.5 bg-[#0071E3] hover:bg-blue-700 text-white rounded-lg text-[13px] font-bold uppercase transition-colors cursor-pointer flex items-center gap-2 shadow-xs border-none"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>{t.common.orderNow} — {formatPrice(swimJetPrice.price)}</span>
              <ArrowRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

