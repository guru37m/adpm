import { Star, MapPin } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carla Mendes",
      location: "Campinas/SP",
      rating: 5,
      date: "jan/2025",
      text: "Fui atendida no Whats de forma super rápida. Em menos de 3 meses finalizei tudo e já estou com o diploma. Recomendo demais!",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Rafael Nogueira", 
      location: "Salvador/BA",
      rating: 5,
      date: "fev/2025",
      text: "Processo claro e organizado. Recebi o material, fiz as atividades e a prova online no meu tempo. Diploma aceito na faculdade!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Aline Rocha",
      location: "Curitiba/PR", 
      rating: 5,
      date: "dez/2024",
      text: "Eu precisava do diploma para um concurso. A equipe tirou todas as dúvidas e deu todo suporte. Conclusão em 90 dias certinho.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Diego Santos",
      location: "Belém/PA",
      rating: 5, 
      date: "jan/2025",
      text: "Estudei pelo celular no intervalo do trabalho. Pagamento em 10× ajudou demais. Atendimento nota 10 no WhatsApp.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Vitória Lopes",
      location: "Recife/PE",
      rating: 5,
      date: "mar/2025", 
      text: "Tive medo no começo, mas o acompanhamento fez a diferença. Hoje já estou matriculada na graduação. Obrigada, ADPM!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="clamp-heading-2 font-bold text-foreground mb-4">
            O que nossos <span className="text-primary">alunos</span> falam
          </h2>
          <p className="clamp-body text-muted-foreground max-w-2xl mx-auto">
            Mais de 5.000 alunos já conquistaram seu diploma conosco
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="adpm-testimonial-card">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={`Foto de ${testimonial.name}`}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-adpm-yellow text-adpm-yellow" />
                ))}
                <span className="text-xs text-muted-foreground ml-2">
                  {testimonial.date}
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;