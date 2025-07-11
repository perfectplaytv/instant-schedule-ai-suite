import { TrendingUp, TrendingDown, DollarSign, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const metrics = [
  {
    title: "Receita Semanal",
    value: "R$ 3.247",
    change: "+12%",
    trend: "up",
    color: "text-success"
  },
  {
    title: "Novos Clientes",
    value: "18",
    change: "+6%",
    trend: "up",
    color: "text-primary"
  },
  {
    title: "Taxa de No-Show",
    value: "3%",
    change: "-2%",
    trend: "down",
    color: "text-success"
  },
  {
    title: "Ocupação",
    value: "87%",
    change: "+5%",
    trend: "up",
    color: "text-warning"
  }
];

const timeSlots = [
  { period: "08:00 - 12:00", bookings: 85, label: "Manhã" },
  { period: "12:00 - 18:00", bookings: 95, label: "Tarde" },
  { period: "18:00 - 22:00", bookings: 75, label: "Noite" }
];

export function Analytics() {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="gradient-text">Analytics Rápidas</span>
          <TrendingUp className="w-5 h-5 text-success" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, index) => (
            <div 
              key={metric.title}
              className="p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors hover-lift"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">{metric.title}</p>
                  <h4 className="text-lg font-bold">{metric.value}</h4>
                </div>
                <div className={`flex items-center gap-1 ${metric.color}`}>
                  {metric.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span className="text-sm font-medium">{metric.change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Occupancy by Time */}
        <div>
          <h4 className="font-medium mb-3">Ocupação por Período</h4>
          <div className="space-y-3">
            {timeSlots.map((slot, index) => (
              <div 
                key={slot.period}
                className="space-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{slot.label}</span>
                  <span className="font-medium">{slot.bookings}%</span>
                </div>
                <Progress 
                  value={slot.bookings} 
                  className="h-2"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-card-border">
          <div className="text-center">
            <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-white" />
            </div>
            <p className="text-xs text-muted-foreground">Ticket Médio</p>
            <p className="font-medium">R$ 67</p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-gradient-to-r from-success to-emerald-400 flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            <p className="text-xs text-muted-foreground">Retenção</p>
            <p className="font-medium">92%</p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-gradient-to-r from-warning to-orange-400 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-white" />
            </div>
            <p className="text-xs text-muted-foreground">Recorrência</p>
            <p className="font-medium">28d</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}