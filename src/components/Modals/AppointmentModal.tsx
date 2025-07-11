import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, DollarSign, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    clientName: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    notes: '',
    value: ''
  });

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00', '18:30'
  ];

  const services = [
    { name: 'Corte Feminino', price: 80 },
    { name: 'Corte Masculino', price: 50 },
    { name: 'Escova', price: 45 },
    { name: 'Coloração', price: 120 },
    { name: 'Manicure', price: 35 },
    { name: 'Pedicure', price: 40 }
  ];

  const handleServiceSelect = (service: typeof services[0]) => {
    setFormData({ ...formData, service: service.name, value: service.price.toString() });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simular agendamento
    toast({
      title: "Agendamento Criado! 🎉",
      description: `${formData.clientName} agendado para ${formData.date} às ${formData.time}. WhatsApp de confirmação enviado automaticamente.`,
    });
    
    onClose();
    setFormData({
      clientName: '', phone: '', email: '', service: '', 
      date: '', time: '', notes: '', value: ''
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card border-card-border max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 gradient-text">
            <Calendar className="w-6 h-6" />
            Novo Agendamento Inteligente
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Cliente Info */}
          <div className="space-y-4">
            <h3 className="font-medium flex items-center gap-2">
              <User className="w-4 h-4" />
              Dados do Cliente
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="clientName">Nome Completo</Label>
                <Input
                  id="clientName"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  placeholder="Maria Silva"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">WhatsApp</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(11) 99999-9999"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="email">E-mail (opcional)</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="maria@email.com"
                />
              </div>
            </div>
          </div>

          {/* Serviços */}
          <div className="space-y-4">
            <h3 className="font-medium">Selecionar Serviço</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {services.map((service) => (
                <Button
                  key={service.name}
                  type="button"
                  variant={formData.service === service.name ? "default" : "outline"}
                  className="h-auto p-3 flex flex-col items-center gap-2 hover-lift"
                  onClick={() => handleServiceSelect(service)}
                >
                  <span className="text-sm font-medium">{service.name}</span>
                  <Badge className="bg-success/20 text-success">
                    R$ {service.price}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* Data e Hora */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date">Data</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
            <div>
              <Label>Horário Disponível</Label>
              <div className="grid grid-cols-3 gap-2 max-h-32 overflow-y-auto">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    type="button"
                    variant={formData.time === time ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFormData({ ...formData, time })}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Valor e Observações */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="value">Valor do Serviço</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="value"
                  value={formData.value}
                  onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                  placeholder="0,00"
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="notes">Observações</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Observações especiais..."
                className="resize-none"
                rows={3}
              />
            </div>
          </div>

          {/* Automações */}
          <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
            <h4 className="font-medium text-primary mb-2">Automações Ativadas</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span>WhatsApp de confirmação será enviado automaticamente</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span>Lembrete automático 1 dia antes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span>Integração com Google Calendar ativada</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancelar
            </Button>
            <Button 
              type="submit" 
              className="flex-1 bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary neon-glow"
              disabled={!formData.clientName || !formData.phone || !formData.service || !formData.date || !formData.time}
            >
              Agendar & Enviar WhatsApp
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}