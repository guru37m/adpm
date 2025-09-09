import { MessageCircle, ShieldCheck, Award, Headphones } from "lucide-react";
import RotatingType from "./RotatingType";
import VideoWithBrand from "./VideoWithBrand";

const Hero = () => {
  const whatsappUrl = "https://wa.me/5516992021186?text=Quero%20Terminar%20meus%20Estudos";

  const handleWhatsAppClick = () => {
    return (window as any).gtag_report_conversion(whatsappUrl);
  };

  return (
    <section className="adpm-hero-gradient pt-8 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center md:text-left">
            <h1 className="clamp-heading-1 font-extrabold leading-tight text-white mb-6">
              <span className="brand-name">ADPM EJA Supletivo EAD</span>
              {" — "}
              <RotatingType
                phrases={[
                  "Diploma EJA em 90 dias",
                  "Parcelas de Apenas R$125",
                  "Estude sem sair de casa",
                ]}
              />
            </h1>
            
            <p className="clamp-body text-adpm-light-gray mb-8 max-w-lg mx-auto md:mx-0">
              Válido para concursos públicos e faculdades. 100% online, sem aulas nem provas presenciais.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={whatsappUrl}
                onClick={handleWhatsAppClick}
                className="adpm-whatsapp-cta"
                aria-label="Quero meu diploma do EJA agora via WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
                Quero meu Diploma agora
              </a>
              
              <a
                href={whatsappUrl}
                onClick={handleWhatsAppClick}
                className="adpm-whatsapp-cta-ghost"
                aria-label="Tirar dúvidas sobre EJA no WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
                Tirar dúvidas no Whats
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-adpm-light-gray">
                <ShieldCheck className="w-5 h-5 text-adpm-green flex-shrink-0" />
                <span className="text-sm font-medium">Reconhecido pelo MEC</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-adpm-light-gray">
                <Award className="w-5 h-5 text-adpm-green flex-shrink-0" />
                <span className="text-sm font-medium">Validade Nacional</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-adpm-light-gray">
                <Headphones className="w-5 h-5 text-adpm-green flex-shrink-0" />
                <span className="text-sm font-medium">Atendimento imediato</span>
              </div>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <VideoWithBrand />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;