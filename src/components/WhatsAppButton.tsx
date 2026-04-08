import { siWhatsapp } from "simple-icons";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919876543210"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-5 right-5 z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:scale-105 hover:shadow-[0_22px_45px_rgba(37,211,102,0.45)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/30 sm:bottom-6 sm:right-6"
    aria-label="Chat on WhatsApp"
  >
    <span className="sr-only">Chat on WhatsApp</span>
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 fill-current">
      <path d={siWhatsapp.path} />
    </svg>
  </a>
);

export default WhatsAppButton;
