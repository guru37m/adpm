import { MessageCircle, Check } from "lucide-react";

const PriceOffer = () => {
  const whatsappUrl = "https://wa.me/5516997660880?text=Quero%20Meu%20Diploma%20do%20EJA";

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

  const features = [
    "Válido para todo o Brasil",
    "Sem aulas/provas presenciais",
    "Material didático incluído",
    "Suporte via WhatsApp",
    "Diploma reconhecido pelo MEC"
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="clamp-heading-2 font-bold text-foreground mb-8">
            <span className="text-primary">Oferta Especial</span> por Tempo Limitado
          </h2>

          <div className="bg-card border border-border rounded-xl p-8 md:p-12 shadow-lg mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="adpm-strikethrough-price">
                <span className="text-2xl md:text-3xl font-bold text-muted-foreground line-through">
                  De R$ 1.600,00
                </span>
              </div>
            </div>

            <div className="mb-6">
              <div className="adpm-price-highlight text-4xl md:text-5xl font-bold mb-2">
                Por apenas R$ 749,00
              </div>
              <p className="text-xl text-muted-foreground">
                ou <strong>10× de R$ 74,90</strong> no cartão
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-left">
                  <Check className="w-5 h-5 text-adpm-green flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href={whatsappUrl}
              onClick={handleWhatsAppClick}
              className="adpm-whatsapp-cta inline-flex max-w-md mx-auto text-lg"
              aria-label="Garantir meu diploma no WhatsApp por R$ 749"
            >
              <MessageCircle className="w-6 h-6" />
              Garantir meu Diploma no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceOffer;