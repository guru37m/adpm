import { Play, MessageCircle, ShieldCheck, Award, Headphones } from "lucide-react";
import { useState } from "react";
import VideoModal from "./VideoModal";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  
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

  return (
    <section className="adpm-hero-gradient py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center md:text-left">
            <h1 className="clamp-heading-1 font-bold text-adpm-white mb-6">
              Conclua o <span className="text-adpm-orange">Ensino Médio</span> em 90 dias
              <br />
              <span className="text-adpm-orange">100% Online</span>
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

          {/* Right Column - Video Thumbnail */}
          <div className="flex justify-center">
            <div className="relative group cursor-pointer" onClick={() => setShowVideo(true)}>
              <div className="aspect-video w-full max-w-md bg-adpm-dark rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://img.youtube.com/vi/4jY96QBv-H4/maxresdefault.jpg"
                  alt="Vídeo explicativo sobre o EJA ADPM - Como funciona o supletivo online"
                  className="w-full h-full object-cover"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to high quality thumbnail if maxres fails
                    const target = e.target as HTMLImageElement;
                    target.src = "https://img.youtube.com/vi/4jY96QBv-H4/hqdefault.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal 
        isOpen={showVideo} 
        onClose={() => setShowVideo(false)} 
        videoId="4jY96QBv-H4"
      />
    </section>
  );
};

export default Hero;