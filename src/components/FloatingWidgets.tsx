import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, X, Send, Check, Sparkles } from 'lucide-react';
import { CHECKOUT_URL } from '../data';
import { redirectToCheckout } from '../utils/checkout';
import { trackTikTokInitiateCheckout } from '../utils/tiktokPixel';

export const FloatingWidgets: React.FC = () => {
  const [showBackTop, setShowBackTop] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showKlaviyoModal, setShowKlaviyoModal] = useState(false);
  const [showKlaviyoTeaser] = useState(true);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ sender: 'user' | 'bot'; text: string }[]>([
    { sender: 'bot', text: 'Guten Tag! Haben Sie Fragen zur tragbaren Gegenstromanlage iGarden Swim Jet (1.000 W für 209,00 €)? Unser Kundenservice hilft Ihnen gerne.' }
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
          text: "Vielen Dank für Ihre Nachricht! Ein iGarden-Berater wird Ihnen in Kürze antworten. Um direkt von unserem offiziellen Sonderangebot (-50%) mit kostenlosem DHL-Versand zu profitieren, können Sie direkt auf 'Jetzt bestellen' klicken."
        }
      ]);
    }, 800);
  };

  const handleKlaviyoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!klaviyoEmail) return;
    setKlaviyoSuccess(true);
  };

  return (
    <>
      {/* Back to top button */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`fixed right-4 bottom-44 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-gray-800 shadow-md border border-gray-200 flex items-center justify-center transition-all duration-300 cursor-pointer hover:bg-gray-50 active:scale-95 ${
          showBackTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
        aria-label="Nach oben scrollen"
      >
        <ArrowUp className="w-5 h-5 stroke-[2.5]" />
      </button>

      {/* Customer Service Floating Launcher */}
      <div className="fixed right-4 bottom-24 z-40">
        <button
          type="button"
          onClick={() => setShowChat(!showChat)}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0071E3] hover:bg-blue-600 active:scale-95 text-white shadow-md flex items-center justify-center transition-all cursor-pointer"
          aria-label="Kundenservice"
        >
          {showChat ? <X className="w-5 h-5" /> : <MessageCircle className="w-6 h-6" />}
        </button>

        {/* Interactive Chat window */}
        {showChat && (
          <div className="absolute bottom-14 right-0 w-[300px] sm:w-[360px] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col h-[440px] animate-in slide-in-from-bottom-5 duration-200">
            <div className="bg-[#0071E3] p-3.5 text-white flex items-center justify-between">
              <div>
                <div className="font-bold text-[15px]">iGarden Kundenservice Deutschland</div>
                <div className="text-[11px] opacity-80 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block" /> 7 Tage die Woche erreichbar
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowChat(false)}
                className="text-white/80 hover:text-white p-1 cursor-pointer"
                aria-label="Chat schließen"
              >
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
                    className={`max-w-[85%] p-3 rounded-lg ${
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
                placeholder="Ihre Nachricht eingeben..."
                className="flex-1 px-3 py-2 text-[13px] bg-gray-100 rounded-lg outline-none border border-gray-200 focus:border-[#0071E3]"
              />
              <button
                type="submit"
                aria-label="Senden"
                className="w-10 h-10 rounded-lg bg-[#0071E3] text-white flex items-center justify-center shrink-0 hover:bg-blue-600 transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Side Teaser Tab */}
      {showKlaviyoTeaser && !showKlaviyoModal && (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 rotate-[-90deg] origin-top-left -ml-2">
          <button
            type="button"
            onClick={() => setShowKlaviyoModal(true)}
            className="px-3.5 py-1.5 bg-[#0071E3] text-white font-bold text-[12px] rounded-b-lg shadow-md hover:bg-blue-700 transition-colors tracking-wide flex items-center gap-1.5 cursor-pointer uppercase"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>-50% Sonderangebot</span>
          </button>
        </div>
      )}

      {/* Klaviyo Promo Pop-up Modal */}
      {showKlaviyoModal && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-[650px] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-200">
            <button
              type="button"
              onClick={() => setShowKlaviyoModal(false)}
              className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/10 hover:bg-black/20 text-gray-800 transition-colors cursor-pointer"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left promo image */}
            <div className="w-full md:w-1/2 bg-blue-50 relative min-h-[180px] flex items-center justify-center p-4">
              <img
                src="https://eu.store.igarden.ai/cdn/shop/files/DE-X_12.png?v=1788838449"
                alt="iGarden Serie X"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain max-h-[200px]"
              />
            </div>

            {/* Right Form */}
            <div className="w-full md:w-1/2 p-5 sm:p-6 flex flex-col justify-center space-y-3.5">
              <div>
                <span className="text-[11px] font-bold text-[#0071E3] uppercase tracking-wider">Deutschland-Aktion</span>
                <h3 className="text-[20px] font-extrabold text-gray-900 leading-tight mt-0.5">
                  Tragbare Gegenstromanlage 1.000 W für 209,00 €
                </h3>
                <p className="text-[12px] text-gray-500 mt-1">
                  Sichern Sie sich 50% Rabatt + kostenlosen DHL-Versand nach Deutschland & Österreich.
                </p>
              </div>

              {!klaviyoSuccess ? (
                <form onSubmit={handleKlaviyoSubmit} className="space-y-2.5">
                  <input
                    type="email"
                    value={klaviyoEmail}
                    onChange={(e) => setKlaviyoEmail(e.target.value)}
                    placeholder="Ihre E-Mail-Adresse"
                    required
                    className="w-full p-2.5 rounded-lg border border-gray-300 text-[13px] outline-none focus:border-[#0071E3]"
                  />

                  <button
                    type="submit"
                    className="w-full h-11 rounded-xl bg-[#0071E3] hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-[14px] uppercase tracking-wider transition-all shadow-xs cursor-pointer text-center"
                  >
                    50% Rabatt aktivieren
                  </button>
                </form>
              ) : (
                <div className="text-center py-3 space-y-2.5">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-[16px] text-gray-900">Rabatt aktiviert!</h4>
                  <p className="text-[12px] text-gray-600">
                    Ihr Sonderrabatt von <strong>50%</strong> ist nun für Ihre Bestellung hinterlegt.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      trackTikTokInitiateCheckout({
                        id: 'swim-jet-1000w',
                        name: 'Tragbare Gegenstromanlage iGarden Swim Jet — 1.000 W',
                        price: 209,
                        quantity: 1,
                        currency: 'EUR'
                      });
                      redirectToCheckout(CHECKOUT_URL);
                    }}
                    className="inline-block px-5 py-3 min-h-[44px] bg-[#0071E3] text-white text-[13px] font-bold rounded-xl shadow-xs hover:bg-blue-700 active:scale-[0.99] transition-all uppercase cursor-pointer"
                  >
                    Jetzt bestellen →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
