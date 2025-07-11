import { useState } from 'react';
import { BarChart3, TrendingUp, Download, Calendar, Users, DollarSign, Clock, Target } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AnalyticsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AnalyticsModal({ isOpen, onClose }: AnalyticsModalProps) {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');

  const periods = [
    { value: '7d', label: '7 dias' },
    { value: '30d', label: '30 dias' },
    { value: '90d', label: '90 dias' },
    { value: '1y', label: '1 ano' }
  ];

  const kpis = [
    {
      title: "Receita Total",
      value: "R$ 45.230",
      change: "+23%",
      trend: "up",
      icon: DollarSign,
      color: "from-success to-emerald-400"
    },
    {
      title: "Agendamentos",
      value: "342",
      change: "+12%",
      trend: "up",
      icon: Calendar,
      color: "from-primary to-primary-glow"
    },
    {
      title: "Novos Clientes",
      value: "89",
      change: "+45%",
      trend: "up",
      icon: Users,
      color: "from-accent to-blue-400"
    },
    {
      title: "Taxa de Conversão",
      value: "94.2%",
      change: "+2.1%",
      trend: "up",
      icon: Target,
      color: "from-warning to-orange-400"
    }
  ];

  const servicesData = [
    { name: "Corte Feminino", bookings: 89, revenue: 7120, percentage: 35 },
    { name: "Corte Masculino", bookings: 76, revenue: 3800, percentage: 30 },
    { name: "Coloração", bookings: 34, revenue: 4080, percentage: 20 },
    { name: "Manicure", bookings: 45, revenue: 1575, percentage: 15 }
  ];

  const hourlyData = [
    { hour: "08:00", bookings: 12, revenue: 960 },
    { hour: "09:00", bookings: 18, revenue: 1440 },
    { hour: "10:00", bookings: 25, revenue: 2000 },
    { hour: "11:00", bookings: 22, revenue: 1760 },
    { hour: "14:00", bookings: 28, revenue: 2240 },
    { hour: "15:00", bookings: 32, revenue: 2560 },
    { hour: "16:00", bookings: 29, revenue: 2320 },
    { hour: "17:00", bookings: 24, revenue: 1920 },
    { hour: "18:00", bookings: 19, revenue: 1520 }
  ];

  const clientRetention = [
    { period: "1ª visita", clients: 89, percentage: 100 },
    { period: "2ª visita", clients: 78, percentage: 87.6 },
    { period: "3ª visita", clients: 69, percentage: 77.5 },
    { period: "6 meses", clients: 52, percentage: 58.4 },
    { period: "1 ano", clients: 34, percentage: 38.2 }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card border-card-border max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2 gradient-text">
              <BarChart3 className="w-6 h-6" />
              Analytics Avançadas & IA Insights
            </DialogTitle>
            <Button variant="outline" className="hover-lift">
              <Download className="w-4 h-4 mr-2" />
              Exportar Relatório
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Período Selection */}
          <div className="flex gap-2">
            {periods.map((period) => (
              <Button
                key={period.value}
                variant={selectedPeriod === period.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPeriod(period.value)}
                className="hover-lift"
              >
                {period.label}
              </Button>
            ))}
          </div>

          {/* KPIs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {kpis.map((kpi, index) => (
              <Card key={kpi.title} className="glass-card hover-lift" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{kpi.title}</p>
                      <h3 className="text-xl font-bold mt-1">{kpi.value}</h3>
                      <div className="flex items-center gap-1 mt-1">
                        <TrendingUp className="w-3 h-3 text-success" />
                        <span className="text-xs text-success font-medium">{kpi.change}</span>
                      </div>
                    </div>
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${kpi.color}`}>
                      <kpi.icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="services" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="services">Serviços</TabsTrigger>
              <TabsTrigger value="hourly">Por Horário</TabsTrigger>
              <TabsTrigger value="retention">Retenção</TabsTrigger>
              <TabsTrigger value="predictions">IA Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="services" className="space-y-4">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Performance por Serviço</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {servicesData.map((service, index) => (
                      <div key={service.name} className="space-y-2" style={{ animationDelay: `${index * 100}ms` }}>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{service.name}</span>
                          <div className="flex items-center gap-4 text-sm">
                            <span>{service.bookings} agendamentos</span>
                            <Badge className="bg-success/20 text-success">
                              R$ {service.revenue.toLocaleString()}
                            </Badge>
                          </div>
                        </div>
                        <Progress value={service.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="hourly" className="space-y-4">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Ocupação por Horário</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {hourlyData.map((hour, index) => (
                      <div key={hour.hour} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover-lift" style={{ animationDelay: `${index * 50}ms` }}>
                        <div className="flex items-center gap-3">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium">{hour.hour}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm">{hour.bookings} agendamentos</span>
                          <Badge className="bg-success/20 text-success">
                            R$ {hour.revenue}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="retention" className="space-y-4">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Análise de Retenção de Clientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {clientRetention.map((item, index) => (
                      <div key={item.period} className="space-y-2" style={{ animationDelay: `${index * 100}ms` }}>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{item.period}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{item.clients} clientes</span>
                            <Badge variant={item.percentage > 70 ? "default" : item.percentage > 50 ? "secondary" : "outline"}>
                              {item.percentage.toFixed(1)}%
                            </Badge>
                          </div>
                        </div>
                        <Progress value={item.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="predictions" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      🤖 Previsões de IA
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <h4 className="font-medium text-primary mb-2">📈 Tendência de Crescimento</h4>
                      <p className="text-sm">Baseado no padrão atual, sua receita deve crescer <strong>28%</strong> nos próximos 3 meses.</p>
                    </div>
                    <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
                      <h4 className="font-medium text-warning mb-2">⚠️ Alerta de Capacidade</h4>
                      <p className="text-sm">Quinta-feira à tarde está chegando ao limite. Considere adicionar mais horários.</p>
                    </div>
                    <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                      <h4 className="font-medium text-success mb-2">💡 Oportunidade</h4>
                      <p className="text-sm">Clientes que fazem coloração têm 85% mais chance de retornar em 30 dias.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      🎯 Recomendações Inteligentes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                      <h4 className="font-medium text-accent mb-2">📱 WhatsApp Marketing</h4>
                      <p className="text-sm">Envie promoções às 15h - horário com maior taxa de abertura (94%).</p>
                    </div>
                    <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                      <h4 className="font-medium text-purple-400 mb-2">⏰ Horários Premium</h4>
                      <p className="text-sm">Considere preços diferenciados para horários de pico (14h-17h).</p>
                    </div>
                    <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                      <h4 className="font-medium text-emerald-400 mb-2">🎁 Fidelização</h4>
                      <p className="text-sm">Ofereça pacotes para clientes com mais de 3 visitas - ROI estimado: 340%.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}