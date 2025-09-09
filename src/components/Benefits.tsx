import { Clock, Award, Headphones, MessageCircle } from "lucide-react";

const Benefits = () => {
  const whatsappUrl = "https://wa.me/5516992021186?text=Quero%20Terminar%20meus%20Estudos";

  const handleWhatsAppClick = () => {
    return (window as any).gtag_report_conversion(whatsappUrl);
  };

  const benefits = [
    {
      icon: Clock,
      title: "Estudo Rápido & Flexível",
      description: "Conclua em 90 dias, no seu ritmo, 100% EAD."
    },
    {
      icon: Award,
      title: "Diploma Reconhecido",
      description: "MEC + Secretarias de Educação; aceito em todo o Brasil."
    },
    {
      icon: Headphones,
      title: "Suporte Dedicado",
      description: "Acompanhamento por WhatsApp durante todo o processo."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="clamp-heading-2 font-bold text-foreground mb-4">
            Por que escolher o <span className="text-primary">ADPM</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="adpm-benefit-card group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="clamp-heading-3 font-semibold text-foreground mb-4 text-center">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                {benefit.description}
              </p>
              
              <a
                href={whatsappUrl}
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                aria-label="Falar agora no WhatsApp sobre EJA"
              >
                <MessageCircle className="w-4 h-4" />
                Falar agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;