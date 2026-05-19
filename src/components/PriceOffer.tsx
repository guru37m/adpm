import { MessageCircle, Check } from "lucide-react";

const PriceOffer = () => {
  const whatsappUrl = "https://wa.me/5511970133383?text=Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20EJA";

  const handleWhatsAppClick = () => {
    return (window as any).gtag_report_conversion(whatsappUrl);
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
            <div className="mb-6">
              <p className="old-price text-2xl md:text-3xl font-bold text-muted-foreground mb-2">
                De R$ 1.600,00
              </p>
              <div className="new-price adpm-price-highlight text-4xl md:text-5xl font-bold mb-2">
                Por apenas R$ 749,00
              </div>
              <p className="installments text-xl font-semibold text-muted-foreground">
                <strong>6x de R$135</strong> no boleto
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