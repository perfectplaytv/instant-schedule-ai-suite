import { 
  Bot, 
  Smartphone, 
  CreditCard, 
  BarChart3, 
  Palette, 
  Globe, 
  Zap, 
  Shield,
  CloudLightning,
  Brain,
  MessageCircle,
  Calendar
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "IA & Machine Learning",
    description: "Automação inteligente, previsão de inadimplência e otimização de horários com IA generativa",
    icon: Brain,
    category: "Inteligência Artificial",
    color: "from-purple-500 to-pink-500",
    benefits: ["Agendamento inteligente", "Chatbot 24/7", "Análise preditiva", "Recomendações personalizadas"]
  },
  {
    title: "WhatsApp Business API",
    description: "Integração oficial com Meta Cloud API, Twilio e 360dialog para automação completa",
    icon: MessageCircle,
    category: "Comunicação",
    color: "from-green-500 to-emerald-400",
    benefits: ["Templates dinâmicos", "Confirmações automáticas", "Lembretes inteligentes", "Webhooks em tempo real"]
  },
  {
    title: "Pagamentos Modernos",
    description: "PIX, Stripe, OpenPix, Asaas com recorrência e cobrança automática via WhatsApp",
    icon: CreditCard,
    category: "Financeiro",
    color: "from-blue-500 to-cyan-400",
    benefits: ["PIX instantâneo", "Cartões internacionais", "Boletos automáticos", "Split de pagamentos"]
  },
  {
    title: "Analytics Avançadas",
    description: "Dashboards em tempo real, insights de IA e relatórios exportáveis",
    icon: BarChart3,
    category: "Business Intelligence",
    color: "from-orange-500 to-red-400",
    benefits: ["Métricas em tempo real", "Previsões de receita", "Análise de retenção", "ROI por serviço"]
  },
  {
    title: "WhiteLabel Completo",
    description: "Customização total: logo, cores, domínio, templates e branding personalizado",
    icon: Palette,
    category: "Personalização",
    color: "from-pink-500 to-purple-400",
    benefits: ["Domínio próprio", "Branding completo", "Templates customizáveis", "Multi-idiomas"]
  },
  {
    title: "Arquitetura Serverless",
    description: "Edge computing, multi-cloud, auto-scaling e latência mínima global",
    icon: CloudLightning,
    category: "Infraestrutura",
    color: "from-indigo-500 to-blue-400",
    benefits: ["99.9% uptime", "Edge computing", "Auto-scaling", "CDN global"]
  },
  {
    title: "Segurança Enterprise",
    description: "LGPD/GDPR compliance, criptografia ponta a ponta e auditoria automática",
    icon: Shield,
    category: "Segurança",
    color: "from-gray-700 to-gray-500",
    benefits: ["Criptografia E2E", "Compliance LGPD", "Backup automático", "Zero Trust Security"]
  },
  {
    title: "Integração Total",
    description: "Google Calendar, Outlook, Zapier, CRM e mais de 1000+ integrações",
    icon: Zap,
    category: "Produtividade",
    color: "from-yellow-500 to-orange-400",
    benefits: ["Google Calendar", "Zapier Connect", "CRM integration", "API completa"]
  }
];

const useCases = [
  { icon: "💇‍♀️", name: "Salões de Beleza", growth: "+340%" },
  { icon: "🏥", name: "Clínicas Médicas", growth: "+280%" },
  { icon: "🦷", name: "Consultórios", growth: "+190%" },
  { icon: "💪", name: "Academias & Fitness", growth: "+230%" },
  { icon: "🎓", name: "Escolas & Cursos", growth: "+450%" },
  { icon: "🔧", name: "Oficinas & Serviços", growth: "+290%" },
  { icon: "🎉", name: "Eventos & Festas", growth: "+380%" },
  { icon: "🧘", name: "Terapias & Wellness", growth: "+320%" }
];

export function FeaturesShowcase() {
  return (
    <div className="space-y-8">
      {/* Features Grid */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold gradient-text mb-4">
            Tecnologias de Ponta 2025
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stack completa com as mais modernas tecnologias para máxima performance, 
            escalabilidade e monetização passiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="glass-card hover-lift relative overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.category}
                    </Badge>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2 text-xs"
                        style={{ animationDelay: `${(index * 100) + (i * 50)}ms` }}
                      >
                        <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <Card className="glass-card">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Casos de Uso & ROI Comprovado
            </h3>
            <p className="text-muted-foreground">
              Perfeito para qualquer negócio que trabalha com agendamentos. 
              Resultados reais de nossos clientes WhiteLabel.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {useCases.map((useCase, index) => (
              <div 
                key={useCase.name}
                className="text-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                <h4 className="font-medium text-sm mb-2">{useCase.name}</h4>
                <Badge className="bg-success/20 text-success text-xs">
                  {useCase.growth}
                </Badge>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-8 p-6 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30">
            <h4 className="font-bold text-lg mb-2">🚀 Pronto para Monetizar?</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Comece hoje mesmo e tenha seu primeiro cliente em 24h. 
              Suporte completo para implementação e vendas.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-success" />
                <span>Setup em 30min</span>
              </div>
              <div className="flex items-center gap-1">
                <Bot className="w-4 h-4 text-accent" />
                <span>IA Configurada</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4 text-warning" />
                <span>Multi-idioma</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}