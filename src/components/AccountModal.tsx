import React, { useState, useEffect } from 'react';
import { X, User, Mail, Lock, CheckCircle2, Package, LogOut, ShieldCheck, ArrowRight } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTracking: () => void;
}

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  isLoggedIn: boolean;
  orderCount: number;
}

export const AccountModal: React.FC<AccountModalProps> = ({
  isOpen,
  onClose,
  onOpenTracking
}) => {
  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [user, setUser] = useState<UserProfile | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('igarden_user');
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    if (!email || !password) {
      setErrorMsg('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const loggedUser: UserProfile = {
      firstName: firstName || 'Client',
      lastName: lastName || 'iGarden',
      email,
      isLoggedIn: true,
      orderCount: 1
    };

    setUser(loggedUser);
    localStorage.setItem('igarden_user', JSON.stringify(loggedUser));
    setSuccessMsg('Connexion réussie ! Bienvenue dans votre espace client.');
    setTimeout(() => setSuccessMsg(null), 3000);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    if (!email || !password || !firstName || !lastName) {
      setErrorMsg('Veuillez renseigner votre nom, prénom, email et mot de passe.');
      return;
    }

    const newUser: UserProfile = {
      firstName,
      lastName,
      email,
      isLoggedIn: true,
      orderCount: 0
    };

    setUser(newUser);
    localStorage.setItem('igarden_user', JSON.stringify(newUser));
    setSuccessMsg('Compte créé avec succès !');
    setTimeout(() => setSuccessMsg(null), 3000);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('igarden_user');
    setSuccessMsg('Déconnexion effectuée.');
    setTimeout(() => setSuccessMsg(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-[480px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-[#F8FAFC]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#0071E3]/10 text-[#0071E3] flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-[17px] text-gray-900 leading-tight">
                {user ? `Bonjour, ${user.firstName}` : 'Espace Client iGarden'}
              </h3>
              <p className="text-[12px] text-gray-500">Boutique officielle France</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full text-gray-400 hover:text-black hover:bg-gray-200 transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {successMsg && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl text-green-800 text-[13px] font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {errorMsg && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-800 text-[13px] font-semibold">
              {errorMsg}
            </div>
          )}

          {user ? (
            /* Logged in Dashboard */
            <div className="space-y-4">
              <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-100 space-y-1">
                <p className="text-[12px] text-gray-500 font-medium">Compte vérifié</p>
                <p className="text-[16px] font-bold text-gray-900">{user.firstName} {user.lastName}</p>
                <p className="text-[13px] text-gray-600">{user.email}</p>
              </div>

              {/* Order Tracking Quick Action */}
              <div className="p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-[14px] text-gray-900 flex items-center gap-2">
                    <Package className="w-4 h-4 text-[#0071E3]" />
                    Suivre ma commande en direct
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenTracking();
                    }}
                    className="text-[13px] font-bold text-[#0071E3] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    Suivre <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[12px] text-gray-500">
                  Consultez l'acheminement de votre colis Colissimo / Chronopost en temps réel.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="px-4 py-2 min-h-[44px] rounded-xl text-red-600 hover:bg-red-50 active:scale-95 text-[13px] font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  Déconnexion
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 min-h-[44px] bg-gray-900 text-white rounded-xl text-[13px] font-bold hover:bg-black active:scale-95 transition-all uppercase cursor-pointer"
                >
                  Fermer
                </button>
              </div>
            </div>
          ) : (
            /* Login / Register Forms */
            <div>
              {/* Tab Selector */}
              <div className="flex border-b border-gray-200 mb-5">
                <button
                  type="button"
                  onClick={() => { setTab('login'); setErrorMsg(null); }}
                  className={`flex-1 py-2.5 min-h-[44px] text-center text-[14px] sm:text-[15px] font-bold border-b-2 transition-colors cursor-pointer ${
                    tab === 'login' ? 'border-[#0071E3] text-[#0071E3]' : 'border-transparent text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Connexion
                </button>
                <button
                  type="button"
                  onClick={() => { setTab('register'); setErrorMsg(null); }}
                  className={`flex-1 py-2.5 min-h-[44px] text-center text-[14px] sm:text-[15px] font-bold border-b-2 transition-colors cursor-pointer ${
                    tab === 'register' ? 'border-[#0071E3] text-[#0071E3]' : 'border-transparent text-gray-500 hover:text-gray-900'
                  }`}
                >
                  Créer un compte
                </button>
              </div>

              {tab === 'login' ? (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-[13px] font-bold text-gray-700 mb-1">Adresse e-mail</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="exemple@email.fr"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl text-[14px] text-gray-900 focus:outline-none focus:border-[#0071E3]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-gray-700 mb-1">Mot de passe</label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        required
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl text-[14px] text-gray-900 focus:outline-none focus:border-[#0071E3]"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[12px]">
                    <label className="flex items-center gap-1.5 text-gray-600 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded-sm border-gray-300 text-[#0071E3]" />
                      <span>Se souvenir de moi</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => setSuccessMsg("Un lien de réinitialisation a été envoyé à votre adresse email.")}
                      className="text-[#0071E3] font-semibold hover:underline cursor-pointer"
                    >
                      Mot de passe oublié ?
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 min-h-[44px] rounded-xl bg-[#0071E3] hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-[14px] sm:text-[15px] tracking-wide transition-all shadow-xs cursor-pointer uppercase text-center"
                  >
                    Se connecter
                  </button>
                </form>
              ) : (
                <form onSubmit={handleRegister} className="space-y-3.5">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[12px] font-bold text-gray-700 mb-1">Prénom</label>
                      <input
                        type="text"
                        required
                        placeholder="Jean"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-xl text-[13px] text-gray-900 focus:outline-none focus:border-[#0071E3]"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-gray-700 mb-1">Nom</label>
                      <input
                        type="text"
                        required
                        placeholder="Dupont"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-xl text-[13px] text-gray-900 focus:outline-none focus:border-[#0071E3]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold text-gray-700 mb-1">Adresse e-mail</label>
                    <input
                      type="email"
                      required
                      placeholder="jean.dupont@email.fr"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 border border-gray-300 rounded-xl text-[13px] text-gray-900 focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold text-gray-700 mb-1">Mot de passe (8 caractères min.)</label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3.5 py-2 border border-gray-300 rounded-xl text-[13px] text-gray-900 focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>

                  <div className="flex items-start gap-2 pt-1 text-[11px] text-gray-500">
                    <input type="checkbox" required defaultChecked className="mt-0.5 rounded-sm border-gray-300 text-[#0071E3]" />
                    <span>J'accepte les Conditions Générales de Vente et la Politique de Confidentialité iGarden.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 min-h-[44px] rounded-xl bg-[#0071E3] hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-[14px] sm:text-[15px] tracking-wide transition-all shadow-xs cursor-pointer uppercase text-center"
                  >
                    Créer mon compte
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Reassurance */}
          <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-center gap-1.5 text-[11px] text-gray-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Données protégées conformément au RGPD (France/UE)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
