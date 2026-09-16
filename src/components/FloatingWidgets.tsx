import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, X, Send, Check, Sparkles } from 'lucide-react';
import { CHECKOUT_URL } from '../data';
import { redirectToCheckout } from '../utils/checkout';
import { useI18n } from '../i18n/I18nContext';

export const FloatingWidgets: React.FC = () => {
  const { currentMarket, currentLanguage, formatPrice, swimJetPrice, t } = useI18n();
  const [showBackTop, setShowBackTop] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showKlaviyoModal, setShowKlaviyoModal] = useState(false);
  const [showKlaviyoTeaser] = useState(true);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ sender: 'user' | 'bot'; text: string }[]>([
    { sender: 'bot', text: `Hello! How can we help you with the iGarden Swim Jet 1,000 W (${formatPrice(swimJetPrice.price)})?` }
  ]);
  const [klaviyoEmail, setKlaviyoEmail] = useState('');
  const [klaviyoSuccess, setKlaviyoSuccess] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowBackTop(true);
      } else {
        setShowBackTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userText = chatMessage;
    setChatHistory((prev) => [...prev, { sender: 'user', text: userText }]);
    setChatMessage('');

    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: `Thank you for reaching out! An iGarden specialist will answer shortly. To secure the current flash discount (-50%), click 'Order Now'.`
        }
      ]);
    }, 800);
  };

  const handleKlaviyoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!klaviyoEmail) return;
    setKlaviyoSuccess(true);
  };

  const formattedPrice = formatPrice(swimJetPrice.price);

  return (
    <div dir={currentLanguage.direction}>
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed ${currentLanguage.direction === 'rtl' ? 'left-4' : 'right-4'} bottom-44 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-sm bg-white text-gray-800 shadow-md border border-gray-200 flex items-center justify-center transition-all duration-300 cursor-pointer hover:bg-gray-50 border-none ${
          showBackTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 stroke-[2.5]" />
      </button>

      {/* Customer Service Floating Launcher */}
      <div className={`fixed ${currentLanguage.direction === 'rtl' ? 'left-4' : 'right-4'} bottom-24 z-40`}>
        <button
          onClick={() => setShowChat(!showChat)}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-sm bg-[#0071E3] hover:bg-blue-600 text-white shadow-md flex items-center justify-center transition-colors cursor-pointer border-none"
          aria-label="Customer Service"
        >
          {showChat ? <X className="w-5 h-5" /> : <MessageCircle className="w-6 h-6" />}
        </button>

        {/* Interactive Chat window */}
        {showChat && (
          <div className={`absolute bottom-14 ${currentLanguage.direction === 'rtl' ? 'left-0' : 'right-0'} w-[300px] sm:w-[360px] bg-white rounded-sm shadow-2xl border border-gray-200 overflow-hidden flex flex-col h-[440px] animate-in slide-in-from-bottom-5 duration-200`}>
            <div className="bg-[#0071E3] p-3.5 text-white flex items-center justify-between">
              <div>
                <div className="font-bold text-[15px]">iGarden Support • {currentMarket.name}</div>
                <div className="text-[11px] opacity-80 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block" /> {t.footer.serviceHoursVal}
                </div>
              </div>
              <button onClick={() => setShowChat(false)} className="text-white/80 hover:text-white cursor-pointer bg-transparent border-none">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3.5 space-y-3 bg-[#F8F9FA] text-[13px]">
              {chatHistory.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-sm ${
                      msg.sender === 'user'
                        ? 'bg-[#0071E3] text-white'
                        : 'bg-white text-gray-800 shadow-xs border border-gray-200'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-200 bg-white flex gap-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 text-[13px] bg-gray-100 rounded-sm outline-none border border-gray-200 focus:border-[#0071E3]"
              />
              <button
                type="submit"
                className="w-9 h-9 rounded-sm bg-[#0071E3] text-white flex items-center justify-center shrink-0 hover:bg-blue-600 transition-colors cursor-pointer border-none"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Side Teaser Tab */}
      {showKlaviyoTeaser && !showKlaviyoModal && (
        <div className={`fixed ${currentLanguage.direction === 'rtl' ? 'right-0 origin-top-right rotate-[90deg] -mr-2' : 'left-0 origin-top-left rotate-[-90deg] -ml-2'} top-1/2 -translate-y-1/2 z-40`}>
          <button
            onClick={() => setShowKlaviyoModal(true)}
            className="px-3.5 py-1.5 bg-[#0071E3] text-white font-bold text-[12px] rounded-b-sm shadow-md hover:bg-blue-700 transition-colors tracking-wide flex items-center gap-1.5 cursor-pointer uppercase border-none"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>-50% {t.common.off}</span>
          </button>
        </div>
      )}

      {/* Klaviyo Promo Pop-up Modal */}
      {showKlaviyoModal && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-[650px] bg-white rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-200">
            <button
              onClick={() => setShowKlaviyoModal(false)}
              className="absolute top-3 right-3 z-20 p-1.5 rounded-sm bg-black/10 hover:bg-black/20 text-gray-800 cursor-pointer border-none"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left promo image */}
            <div className="w-full md:w-1/2 bg-blue-50 relative min-h-[180px] flex items-center justify-center p-4">
              <img
                src="https://eu.store.igarden.ai/cdn/shop/files/1-FR-1.png?v=1782461732"
                alt="iGarden Swim Jet"
                className="w-full h-auto object-contain max-h-[200px]"
              />
            </div>

            {/* Right Form */}
            <div className="w-full md:w-1/2 p-5 sm:p-6 flex flex-col justify-center space-y-3.5">
              <div>
                <span className="text-[11px] font-bold text-[#0071E3] uppercase tracking-wider">{currentMarket.name} {t.hero.flashSaleTitle}</span>
                <h3 className="text-[20px] font-extrabold text-gray-900 leading-tight mt-0.5">
                  {t.hero.title} ({formattedPrice})
                </h3>
                <p className="text-[12px] text-gray-500 mt-1">
                  {t.hero.flashSaleDesc} + {t.common.freeShipping}.
                </p>
              </div>

              {!klaviyoSuccess ? (
                <form onSubmit={handleKlaviyoSubmit} className="space-y-2.5">
                  <input
                    type="email"
                    value={klaviyoEmail}
                    onChange={(e) => setKlaviyoEmail(e.target.value)}
                    placeholder="name@email.com"
                    required
                    className="w-full p-2.5 rounded-sm border border-gray-300 text-[13px] outline-none focus:border-[#0071E3]"
                  />

                  <button
                    type="submit"
                    className="w-full h-11 rounded-sm bg-[#0071E3] hover:bg-blue-700 text-white font-bold text-[14px] uppercase tracking-wider transition-colors shadow-xs cursor-pointer text-center border-none"
                  >
                    -50% {t.common.saveAmount}
                  </button>
                </form>
              ) : (
                <div className="text-center py-3 space-y-2.5">
                  <div className="w-10 h-10 rounded-sm bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-[16px] text-gray-900">Discount Applied!</h4>
                  <p className="text-[12px] text-gray-600">
                    Your <strong>-50%</strong> flash discount has been applied to this session.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      redirectToCheckout(swimJetPrice.checkoutUrl || CHECKOUT_URL);
                    }}
                    className="inline-block px-5 py-2.5 bg-[#0071E3] text-white text-[13px] font-bold rounded-sm shadow-xs hover:bg-blue-700 transition-colors uppercase cursor-pointer border-none"
                  >
                    {t.common.orderNow} →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
