import { MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const whatsappUrl = "https://wa.me/5516992021186?text=Quero%20Terminar%20meus%20Estudos";

  const handleWhatsAppClick = () => {
    return (window as any).gtag_report_conversion(whatsappUrl);
  };

  const faqs = [
    {
      question: "Quanto tempo para concluir?",
      answer: "Em média 90 dias, conforme seu ritmo. Você pode estudar no seu tempo livre e fazer a avaliação quando se sentir preparado."
    },
    {
      question: "É reconhecido pelo MEC?", 
      answer: "Sim. Diploma com MEC + Secretarias de Educação e validade nacional. Aceito em faculdades e concursos públicos em todo o Brasil."
    },
    {
      question: "É 100% online?",
      answer: "Sim. Sem aulas ou provas presenciais. Todo o processo é feito online, no conforto da sua casa, pelo celular ou computador."
    },
    {
      question: "Como começo?",
      answer: "Clique no botão, fale no WhatsApp e receba as orientações. Nossa equipe vai te guiar em cada etapa do processo."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="clamp-heading-2 font-bold text-foreground mb-4">
              Dúvidas <span className="text-primary">Frequentes</span>
            </h2>
            <p className="clamp-body text-muted-foreground">
              Tire suas principais dúvidas sobre o EJA ADPM
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-secondary/50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 border-t border-border/50">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {faq.answer}
                    </p>
                    
                    <a
                      href={whatsappUrl}
                      onClick={handleWhatsAppClick}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                      aria-label="Falar no WhatsApp sobre esta dúvida"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Falar no WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;