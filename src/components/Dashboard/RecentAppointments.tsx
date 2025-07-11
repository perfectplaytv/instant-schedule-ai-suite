import { Clock, User, Phone, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const appointments = [
  {
    id: 1,
    client: "Maria Silva",
    service: "Corte + Escova",
    time: "09:00",
    status: "confirmed",
    phone: "(11) 99999-9999",
    value: "R$ 80,00"
  },
  {
    id: 2,
    client: "João Santos",
    service: "Barba + Cabelo",
    time: "10:30",
    status: "pending",
    phone: "(11) 88888-8888",
    value: "R$ 65,00"
  },
  {
    id: 3,
    client: "Ana Costa",
    service: "Manicure",
    time: "14:00",
    status: "confirmed",
    phone: "(11) 77777-7777",
    value: "R$ 45,00"
  },
  {
    id: 4,
    client: "Pedro Lima",
    service: "Corte Masculino",
    time: "15:30",
    status: "pending",
    phone: "(11) 66666-6666",
    value: "R$ 50,00"
  }
];

export function RecentAppointments() {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="gradient-text">Agendamentos de Hoje</span>
          <Badge className="bg-primary/20 text-primary">
            {appointments.length} total
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appointments.map((appointment, index) => (
            <div 
              key={appointment.id}
              className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium">{appointment.client}</h4>
                  <p className="text-sm text-muted-foreground">{appointment.service}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{appointment.time}</span>
                    <Phone className="w-3 h-3 text-muted-foreground ml-2" />
                    <span className="text-xs text-muted-foreground">{appointment.phone}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="font-medium text-success">{appointment.value}</p>
                  <Badge 
                    variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}
                    className={appointment.status === 'confirmed' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'}
                  >
                    {appointment.status === 'confirmed' ? (
                      <>
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Confirmado
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-3 h-3 mr-1" />
                        Pendente
                      </>
                    )}
                  </Badge>
                </div>
                
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Ver
                </Button>
              </div>
            </div>
          ))}
          
          <Button variant="outline" className="w-full mt-4 hover-lift">
            Ver Todos os Agendamentos
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}