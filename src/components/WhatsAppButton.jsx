import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919999999999?text=Hi%2C%20I%20am%20interested%2520in%2520Apex%2520Academy%2520courses."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-650 text-white p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-colors duration-150 min-h-[48px] min-w-[48px]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="fill-current" />
    </a>
  );
};

export default WhatsAppButton;
