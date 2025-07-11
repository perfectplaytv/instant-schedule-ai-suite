import { Calendar, Users, CreditCard, TrendingUp, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    title: "Agendamentos Hoje",
    value: "12",
    change: "+2",
    changeType: "positive" as const,
    icon: Calendar,
    color: "from-primary to-primary-glow"
  },
  {
    title: "Clientes Ativos",
    value: "247",
    change: "+15",
    changeType: "positive" as const,
    icon: Users,
    color: "from-accent to-blue-400"
  },
  {
    title: "Faturamento Mensal",
    value: "R$ 12.450",
    change: "+8%",
    changeType: "positive" as const,
    icon: CreditCard,
    color: "from-success to-success-glow"
  },
  {
    title: "Taxa de Conversão",
    value: "94%",
    change: "+3%",
    changeType: "positive" as const,
    icon: TrendingUp,
    color: "from-warning to-orange-400"
  },
  {
    title: "Tempo Médio",
    value: "45min",
    change: "-5min",
    changeType: "positive" as const,
    icon: Clock,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "WhatsApp Enviados",
    value: "1.247",
    change: "+156",
    changeType: "positive" as const,
    icon: MessageCircle,
    color: "from-green-500 to-emerald-400"
  }
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {stats.map((stat, index) => (
        <Card 
          key={stat.title} 
          className="glass-card hover-lift relative overflow-hidden group"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                <p className={`text-xs mt-1 ${
                  stat.changeType === 'positive' ? 'text-success' : 'text-destructive'
                }`}>
                  {stat.change} vs. mês passado
                </p>
              </div>
              <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
            </div>
          </CardContent>
          
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </Card>
      ))}
    </div>
  );
}