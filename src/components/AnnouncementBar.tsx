import React from 'react';
import { Globe, Sparkles } from 'lucide-react';

interface AnnouncementBarProps {
  onOpenCountryDialog: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenCountryDialog }) => {
  return (
    <div className="bg-[#F2F3F5] text-black text-[11px] sm:text-[13px] font-normal py-2 px-3 sm:px-8 border-b border-black/5">
      <div className="max-w-[1500px] mx-auto flex items-center justify-between">
        <div className="w-full text-center sm:text-left sm:w-auto font-semibold text-gray-800 flex items-center justify-center sm:justify-start gap-1.5 leading-snug">
          <Sparkles className="w-3.5 h-3.5 text-[#0071E3] shrink-0" />
          <span className="hidden sm:inline">Offre Spéciale France : Jet de natation X AIR à 189,00 € • Livraison Colissimo Offerte • Garantie 2 ans</span>
          <span className="sm:hidden">Offre France : Jet X AIR à <strong>189,00 €</strong> • Livraison Colissimo Offerte</span>
        </div>
        <button
          onClick={onOpenCountryDialog}
          className="hidden sm:flex items-center gap-1.5 text-black hover:text-[#0071E3] transition-colors cursor-pointer text-[12px] font-medium shrink-0 rounded-sm"
        >
          <Globe className="w-3.5 h-3.5" />
          <span>France ( Français / € EUR )</span>
        </button>
      </div>
    </div>
  );
};
