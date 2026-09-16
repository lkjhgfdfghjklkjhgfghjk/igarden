import React from 'react';
import { Globe, Sparkles } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

interface AnnouncementBarProps {
  onOpenCountryDialog: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenCountryDialog }) => {
  const { currentMarket, currentLanguage, formatPrice, swimJetPrice, t } = useI18n();

  const formattedPrice = formatPrice(swimJetPrice.price);
  const announcementText = t.header.announcement.replace('$PRICE', formattedPrice);
  const announcementMobile = t.header.announcementMobile.replace('$PRICE', formattedPrice);

  return (
    <div className="bg-[#F2F3F5] text-black text-[11px] sm:text-[13px] font-normal py-2 px-3 sm:px-8 border-b border-black/5" dir={currentLanguage.direction}>
      <div className="max-w-[1500px] mx-auto flex items-center justify-between">
        <div className="w-full text-center sm:text-left sm:w-auto font-semibold text-gray-800 flex items-center justify-center sm:justify-start gap-1.5 leading-snug">
          <Sparkles className="w-3.5 h-3.5 text-[#0071E3] shrink-0" />
          <span className="hidden sm:inline">{announcementText}</span>
          <span className="sm:hidden">{announcementMobile}</span>
        </div>
        <button
          onClick={onOpenCountryDialog}
          className="hidden sm:flex items-center gap-1.5 text-black hover:text-[#0071E3] transition-colors cursor-pointer text-[12px] font-medium shrink-0 rounded-sm bg-transparent border-none"
        >
          <span className="text-[14px]">{currentMarket.flag}</span>
          <span>{currentLanguage.nativeName} · {currentMarket.currency}</span>
        </button>
      </div>
    </div>
  );
};
