import { Calendar, CreditCard, BarChart3, Palette, MessageCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface QuickActionsProps {
  onOpenModal: (modalName: string) => void;
}

const actions = [
  {
    title: "Novo Agendamento",
    description: "Agendar cliente rapidamente",
    icon: Calendar,
    color: "from-primary to-primary-glow",
    modal: "appointment"
  },
  {
    title: "Enviar Cobrança",
    description: "Gerar fatura via WhatsApp",
    icon: CreditCard,
    color: "from-success to-success-glow",
    modal: "billing"
  },
  {
    title: "Ver Analytics",
    description: "Relatórios em tempo real",
    icon: BarChart3,
    color: "from-accent to-blue-400",
    modal: "analytics"
  },
  {
    title: "Customizar Marca",
    description: "WhiteLabel settings",
    icon: Palette,
    color: "from-warning to-orange-400",
    modal: "whitelabel"
  },
  {
    title: "WhatsApp Bot",
    description: "Configurar automação",
    icon: MessageCircle,
    color: "from-green-500 to-emerald-400",
    modal: "whatsapp"
  },
  {
    title: "Gerenciar Clientes",
    description: "Adicionar novo cliente",
    icon: Users,
    color: "from-purple-500 to-pink-500",
    modal: "clients"
  }
];

export function QuickActions({ onOpenModal }: QuickActionsProps) {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="gradient-text">Ações Rápidas</span>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {actions.map((action, index) => (
            <Button
              key={action.title}
              variant="ghost"
              className="h-auto p-4 flex flex-col items-center gap-3 hover-lift group"
              onClick={() => onOpenModal(action.modal)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`p-3 rounded-xl bg-gradient-to-r ${action.color} group-hover:scale-110 transition-all duration-300 neon-glow`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-center">
                <p className="font-medium text-sm">{action.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{action.description}</p>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}