import React from 'react';
import { motion } from 'motion/react';

export const WhatsAppButton: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/41762300063"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group hidden md:flex flex-col items-center gap-2"
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ y: -5 }}
      aria-label="Chat on WhatsApp"
    >
      <div className="bg-white px-4 py-2 rounded-xl shadow-xl border border-brand-cream opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <p className="text-[10px] font-black uppercase tracking-widest text-[#25D366]">
          Sofort Angebot per WhatsApp
        </p>
      </div>
      <div className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-300">
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
          className="md:w-10 md:h-10"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.752 4.415h-.012c-1.23 0-2.433-.332-3.487-.96l-.25-.148-2.592.68 1.144-2.528-.164-.241c-.689-1.121-1.053-2.417-1.052-3.8.001-3.931 3.201-7.132 7.135-7.132 1.905 0 3.695.741 5.04 2.087 1.346 1.346 2.087 3.136 2.087 5.041-.002 3.932-3.203 7.133-7.136 7.133zM12 2C6.477 2 2 6.477 2 12c0 2.186.7 4.208 1.895 5.856L2.1 23.4l5.696-1.493C9.336 22.75 10.635 23.1 12 23.1c5.523 0 10-4.477 10-10S17.523 2 12 2z"></path>
        </svg>
      </div>
    </motion.a>
  );
};
