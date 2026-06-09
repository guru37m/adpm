import { MessageCircle, Check } from "lucide-react";

const FinalCTA = () => {
  const whatsappUrl = "https://wa.me/5591987288797?text=Quero%20me%20matricular%20no%20EJA";

  const handleWhatsAppClick = () => {
    return (window as any).gtag_report_conversion(whatsappUrl);
  };

  const checklist = [
    "90 dias em média",
    "R$ 749 ou 6× R$ 135 no boleto",
    "Reconhecido pelo MEC"
  ];

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="clamp-heading-2 font-bold mb-8">
            Pronto para começar sua <span className="text-adpm-yellow">nova jornada</span>?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {checklist.map((item, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start gap-3">
                <Check className="w-6 h-6 text-adpm-green flex-shrink-0" />
                <span className="font-medium text-lg">{item}</span>
              </div>
            ))}
          </div>

          <a
            href={whatsappUrl}
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-3 bg-adpm-white text-primary font-bold py-5 px-8 rounded-xl text-xl hover:bg-adpm-light-gray transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg w-full md:w-auto justify-center"
            aria-label="Falar no WhatsApp agora para começar meu EJA"
          >
            <MessageCircle className="w-7 h-7" />
            Falar no WhatsApp agora
          </a>

            <p className="text-adpm-light-gray mt-6 text-sm">
              Atendimento imediato • Sem compromisso • Tire todas suas dúvidas
            </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;