import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const whatsappUrl = "https://wa.me/5511970133383?text=Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20EJA";

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
    return (window as any).gtag_report_conversion(whatsappUrl);
  };

  return (
    <>
      {/* Header without Logo - just spacing */}
      <header className="adpm-header-dark pt-16 md:pt-20 pb-4 relative z-40">
        <div className="container mx-auto px-4">
          {/* Empty header for spacing */}
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