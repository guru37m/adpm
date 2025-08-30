import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import adpmLogo from "@/assets/adpm-logo.png";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const whatsappUrl = "https://wa.me/5516997660880?text=Quero%20Meu%20Diploma%20do%20EJA";

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          // scrolling down
          setIsVisible(false);
        } else {
          // scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const handleWhatsAppClick = () => {
    // Track conversion event
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL'
      });
    }
  };

  return (
    <>
      {/* Header with Logo */}
      <header className="adpm-header-dark pt-12 md:pt-16 pb-8 relative z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <img 
              src={adpmLogo} 
              alt="ADPM Supletivo EAD - Reconhecido pelo MEC" 
              className="h-20 md:h-16 max-w-none object-contain" 
              loading="eager"
            />
          </div>
        </div>
      </header>

      {/* Sticky CTA Bar */}
      <div 
        className={`fixed z-50 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : 'translate-y-full md:-translate-y-full'
        } 
        bottom-0 left-0 right-0 md:top-0 md:bottom-auto bg-primary/95 backdrop-blur-sm border-t md:border-b border-primary-foreground/10`}
      >
        <div className="container mx-auto px-4 py-3">
          <a
            href={whatsappUrl}
            onClick={handleWhatsAppClick}
            className="adpm-whatsapp-cta w-full"
            aria-label="Falar com ADPM no WhatsApp para conseguir diploma do EJA"
          >
            <MessageCircle className="w-6 h-6 flex-shrink-0" />
            <span className="font-semibold text-base">Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;