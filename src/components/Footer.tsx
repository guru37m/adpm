import { Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-adpm-dark text-adpm-light-gray py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="text-center mb-8">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>contato@adpmcursos.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span>WhatsApp: (16) 99766-0880</span>
              </div>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="border-t border-adpm-text-secondary/30 pt-8">
            <p className="text-xs text-adpm-gray text-center leading-relaxed mb-6">
              Certificado válido nacionalmente, aceito para ingressar em faculdades e concursos públicos, 
              conforme legislação vigente. O ADPM é uma instituição de ensino devidamente reconhecida 
              pelo MEC e pelas Secretarias de Educação.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-adpm-gray">
              <a 
                href="/politica-privacidade" 
                className="hover:text-primary transition-colors"
                aria-label="Ler nossa Política de Privacidade"
              >
                Política de Privacidade
              </a>
              <span className="hidden md:inline">•</span>
              <a 
                href="/termos" 
                className="hover:text-primary transition-colors"
                aria-label="Ler nossos Termos de Uso"
              >
                Termos de Uso
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-6 border-t border-adpm-text-secondary/30">
            <p className="text-xs text-adpm-gray">
              © {new Date().getFullYear()} ADPM Supletivo EAD. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;