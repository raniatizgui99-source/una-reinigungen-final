import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ className = "", light = false, onClick }) => {
  return (
    <div 
      className={`flex items-center gap-2 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="relative">
        {/* The red box from the PDF */}
        <div className="bg-[#C9302C] px-2 py-1 rounded-md transform -skew-x-6">
          <span className="text-white font-black text-xl tracking-tighter italic">UNA</span>
        </div>
      </div>
      <span className={`font-bold text-xl tracking-tight ${light ? 'text-white' : 'text-black'}`}>
        Reinigungen
      </span>
    </div>
  );
};
