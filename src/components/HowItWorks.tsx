import { MessageCircle, BookOpen, CheckCircle, FileText, Trophy } from "lucide-react";

const HowItWorks = () => {
  const whatsappUrl = "https://wa.me/5516992021186?text=Quero%20Terminar%20meus%20Estudos";

  const handleWhatsAppClick = () => {
    return (window as any).gtag_report_conversion(whatsappUrl);
  };

  const steps = [
    {
      number: 1,
      icon: MessageCircle,
      title: "Fale com a equipe no WhatsApp",
      description: "Atendimento imediato para tirar todas suas dúvidas"
    },
    {
      number: 2,
      icon: BookOpen,
      title: "Receba o material didático",
      description: "Material completo e organizado para seus estudos"
    },
    {
      number: 3,
      icon: FileText,
      title: "Faça as atividades orientadas",
      description: "Atividades práticas com acompanhamento personalizado"
    },
    {
      number: 4,
      icon: CheckCircle,
      title: "Avaliação 100% online",
      description: "Faça quando estiver pronto, no seu tempo"
    },
    {
      number: 5,
      icon: Trophy,
      title: "Receba seu diploma",
      description: "Diploma com validade nacional reconhecido pelo MEC"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="clamp-heading-2 font-bold text-foreground mb-4">
            Como <span className="text-primary">Funciona</span>?
          </h2>
          <p className="clamp-body text-muted-foreground max-w-2xl mx-auto">
            Processo simples e transparente para você conquistar seu diploma
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="adpm-step-card">
                <div className="adpm-step-number">
                  {step.number}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="w-6 h-6 text-primary" />
                    <h3 className="clamp-heading-3 font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={whatsappUrl}
              onClick={handleWhatsAppClick}
              className="adpm-whatsapp-cta inline-flex max-w-md mx-auto"
              aria-label="Começar agora meu EJA no WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
              Começar agora no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;