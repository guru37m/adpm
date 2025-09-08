import { useState, useEffect } from "react";
import { X, MessageCircle, Clock } from "lucide-react";

interface UrgencyPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const UrgencyPopup = ({ isOpen, onClose }: UrgencyPopupProps) => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  const whatsappUrl = "https://wa.me/5516992021186?text=Quero%20Terminar%20meus%20Estudos";

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
    onClose();
  };

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      
      document.addEventListener('keydown', handleEsc);
      
      return () => {
        document.removeEventListener('keydown', handleEsc);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative bg-card rounded-xl p-8 max-w-md w-full shadow-2xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center text-muted-foreground transition-colors"
          aria-label="Fechar oferta especial"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            🚨 Condição Especial de Hoje
          </h3>

          <div className="mb-4">
            <div className="adpm-strikethrough-price mb-2">
              <span className="text-xl text-muted-foreground line-through">
                De R$ 1.600,00
              </span>
            </div>
            
            <div className="adpm-price-highlight text-3xl font-bold mb-2">
              Por apenas R$ 749,00
            </div>
            
            <p className="text-muted-foreground">
              ou <strong>6× de R$ 125</strong> no cartão
            </p>
          </div>

          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-destructive animate-countdown-pulse" />
              <span className="font-semibold text-destructive">Oferta expira em:</span>
            </div>
            <div className="text-2xl font-bold text-destructive animate-countdown-pulse">
              {formatTime(timeLeft)}
            </div>
          </div>

          <a
            href={whatsappUrl}
            onClick={handleWhatsAppClick}
            className="adpm-whatsapp-cta w-full text-lg"
            aria-label="Garantir oferta especial no WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
            Garantir no WhatsApp
          </a>

          <p className="text-xs text-muted-foreground mt-4">
            Válido apenas hoje. Não perca essa oportunidade!
          </p>
        </div>
      </div>
    </div>
  );
};

export default UrgencyPopup;