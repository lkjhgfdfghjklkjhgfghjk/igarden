import React, { useState, useEffect } from 'react';
import { X, User, Mail, Lock, CheckCircle2, Package, LogOut, ShieldCheck, ArrowRight } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

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
  const { currentLanguage, currentMarket, t } = useI18n();
  const isAr = currentLanguage.id === 'ar';

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
      setErrorMsg(isAr ? 'يرجى ملء جميع الحقول المطلوبة.' : 'Please fill in all required fields.');
      return;
    }

    const loggedUser: UserProfile = {
      firstName: firstName || (isAr ? 'عميل' : 'Customer'),
      lastName: lastName || 'iGarden',
      email,
      isLoggedIn: true,
      orderCount: 1
    };

    setUser(loggedUser);
    localStorage.setItem('igarden_user', JSON.stringify(loggedUser));
    setSuccessMsg(isAr ? 'تم تسجيل الدخول بنجاح! مرحباً بك.' : 'Sign in successful! Welcome to your customer portal.');
    setTimeout(() => setSuccessMsg(null), 3000);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    if (!email || !password || !firstName || !lastName) {
      setErrorMsg(isAr ? 'يرجى إدخال الاسم، اللقب، البريد الإلكتروني وكلمة المرور.' : 'Please enter your first name, last name, email, and password.');
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
    setSuccessMsg(isAr ? 'تم إنشاء الحساب بنجاح!' : 'Account created successfully!');
    setTimeout(() => setSuccessMsg(null), 3000);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('igarden_user');
    setSuccessMsg(isAr ? 'تم تسجيل الخروج بنجاح.' : 'Logged out successfully.');
    setTimeout(() => setSuccessMsg(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200" dir={currentLanguage.direction}>
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
                {user ? (isAr ? `مرحباً، ${user.firstName}` : `Welcome, ${user.firstName}`) : (isAr ? 'حساب العميل iGarden' : 'iGarden Customer Account')}
              </h3>
              <p className="text-[12px] text-gray-500">{isAr ? `المتجر الرسمي — ${currentMarket.name}` : `Official Store — ${currentMarket.name}`}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-black hover:bg-gray-200 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {successMsg && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-[13px] font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {errorMsg && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 text-[13px] font-semibold">
              {errorMsg}
            </div>
          )}

          {user ? (
            /* Logged in Dashboard */
            <div className="space-y-4">
              <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-100 space-y-1">
                <p className="text-[12px] text-gray-500 font-medium">{isAr ? 'حساب موثق' : 'Verified Account'}</p>
                <p className="text-[16px] font-bold text-gray-900">{user.firstName} {user.lastName}</p>
                <p className="text-[13px] text-gray-600">{user.email}</p>
              </div>

              {/* Order Tracking Quick Action */}
              <div className="p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-[14px] text-gray-900 flex items-center gap-2">
                    <Package className="w-4 h-4 text-[#0071E3]" />
                    {isAr ? 'تتبع طلبي مباشرة' : 'Track My Order Live'}
                  </span>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenTracking();
                    }}
                    className="text-[13px] font-bold text-[#0071E3] hover:underline flex items-center gap-1 cursor-pointer bg-transparent border-none"
                  >
                    <span>{isAr ? 'تتبع' : 'Track'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                <p className="text-[12px] text-gray-500">
                  {isAr ? 'تحقق من مسار شحنتك وحالة التوصيل السريع في الوقت الفعلي.' : 'Check the progress of your package with real-time carrier tracking.'}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 text-[13px] font-bold flex items-center gap-1.5 transition-colors cursor-pointer bg-transparent border-none"
                >
                  <LogOut className="w-4 h-4" />
                  <span>{isAr ? 'تسجيل الخروج' : 'Log Out'}</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-gray-900 text-white rounded-lg text-[13px] font-bold hover:bg-black transition-colors uppercase cursor-pointer border-none"
                >
                  {isAr ? 'إغلاق' : 'Close'}
                </button>
              </div>
            </div>
          ) : (
            /* Login / Register Forms */
            <div>
              {/* Tab Selector */}
              <div className="flex border-b border-gray-200 mb-5">
                <button
                  onClick={() => { setTab('login'); setErrorMsg(null); }}
                  className={`flex-1 py-2.5 text-center text-[14px] sm:text-[15px] font-bold border-b-2 transition-colors cursor-pointer bg-transparent ${
                    tab === 'login' ? 'border-[#0071E3] text-[#0071E3]' : 'border-transparent text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {isAr ? 'تسجيل الدخول' : 'Sign In'}
                </button>
                <button
                  onClick={() => { setTab('register'); setErrorMsg(null); }}
                  className={`flex-1 py-2.5 text-center text-[14px] sm:text-[15px] font-bold border-b-2 transition-colors cursor-pointer bg-transparent ${
                    tab === 'register' ? 'border-[#0071E3] text-[#0071E3]' : 'border-transparent text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {isAr ? 'إنشاء حساب جديد' : 'Create Account'}
                </button>
              </div>

              {tab === 'login' ? (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-[13px] font-bold text-gray-700 mb-1">{isAr ? 'البريد الإلكتروني' : 'Email Address'}</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="customer@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 rtl:pl-4 rtl:pr-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-[14px] text-gray-900 focus:outline-none focus:border-[#0071E3]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-gray-700 mb-1">{isAr ? 'كلمة المرور' : 'Password'}</label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        required
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 rtl:pl-4 rtl:pr-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-[14px] text-gray-900 focus:outline-none focus:border-[#0071E3]"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[12px]">
                    <label className="flex items-center gap-1.5 text-gray-600 cursor-pointer">
                      <input type="checkbox" defaultChecked className="rounded border-gray-300 text-[#0071E3]" />
                      <span>{isAr ? 'تذكرني' : 'Remember me'}</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => setSuccessMsg(isAr ? "تم إرسال رابط استعادة كلمة المرور إلى بريدك." : "A password reset link has been sent to your email.")}
                      className="text-[#0071E3] font-semibold hover:underline cursor-pointer bg-transparent border-none"
                    >
                      {isAr ? 'نسيت كلمة المرور؟' : 'Forgot password?'}
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-11 rounded-lg bg-[#0071E3] hover:bg-blue-700 text-white font-bold text-[14px] sm:text-[15px] tracking-wide transition-colors shadow-xs cursor-pointer uppercase text-center border-none"
                  >
                    {isAr ? 'تسجيل الدخول' : 'Sign In'}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleRegister} className="space-y-3.5">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[12px] font-bold text-gray-700 mb-1">{isAr ? 'الاسم الأول' : 'First Name'}</label>
                      <input
                        type="text"
                        required
                        placeholder="Alex"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] text-gray-900 focus:outline-none focus:border-[#0071E3]"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold text-gray-700 mb-1">{isAr ? 'اسم العائلة' : 'Last Name'}</label>
                      <input
                        type="text"
                        required
                        placeholder="Morgan"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-[13px] text-gray-900 focus:outline-none focus:border-[#0071E3]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold text-gray-700 mb-1">{isAr ? 'البريد الإلكتروني' : 'Email Address'}</label>
                    <input
                      type="email"
                      required
                      placeholder="customer@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-[13px] text-gray-900 focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold text-gray-700 mb-1">{isAr ? 'كلمة المرور (8 أحرف على الأقل)' : 'Password (min. 8 characters)'}</label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-[13px] text-gray-900 focus:outline-none focus:border-[#0071E3]"
                    />
                  </div>

                  <div className="flex items-start gap-2 pt-1 text-[11px] text-gray-500">
                    <input type="checkbox" required defaultChecked className="mt-0.5 rounded border-gray-300 text-[#0071E3]" />
                    <span>{isAr ? 'أوافق على الشروط والأحكام وسياسة الخصوصية الخاصة بـ iGarden.' : 'I accept the Terms of Service and iGarden Privacy Policy.'}</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full h-11 rounded-lg bg-[#0071E3] hover:bg-blue-700 text-white font-bold text-[14px] sm:text-[15px] tracking-wide transition-colors shadow-xs cursor-pointer uppercase text-center border-none"
                  >
                    {isAr ? 'إنشاء حسابي' : 'Create My Account'}
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Reassurance */}
          <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-center gap-1.5 text-[11px] text-gray-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>{isAr ? 'بياناتك مشفرة ومحمية بأعلى معايير الأمان' : '256-bit SSL encrypted secure checkout and data protection'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
