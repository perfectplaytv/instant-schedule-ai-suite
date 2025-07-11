import { useState } from 'react';
import { CreditCard, Send, FileText, QrCode, Copy, Check } from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

interface BillingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BillingModal({ isOpen, onClose }: BillingModalProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    clientName: '',
    phone: '',
    service: '',
    value: '',
    dueDate: '',
    notes: ''
  });

  const recentClients = [
    { name: 'Maria Silva', phone: '(11) 99999-9999', lastService: 'Corte + Escova' },
    { name: 'João Santos', phone: '(11) 88888-8888', lastService: 'Barba + Cabelo' },
    { name: 'Ana Costa', phone: '(11) 77777-7777', lastService: 'Manicure' },
  ];

  const paymentMethods = [
    { name: 'PIX', icon: '🔑', description: 'Transferência instantânea' },
    { name: 'Cartão', icon: '💳', description: 'Débito ou Crédito' },
    { name: 'Dinheiro', icon: '💰', description: 'Pagamento presencial' },
    { name: 'Boleto', icon: '📄', description: 'Vencimento em 3 dias' }
  ];

  const handleClientSelect = (client: typeof recentClients[0]) => {
    setFormData({
      ...formData,
      clientName: client.name,
      phone: client.phone,
      service: client.lastService
    });
  };

  const handleSendBilling = () => {
    toast({
      title: "Cobrança Enviada! 💸",
      description: `Fatura de R$ ${formData.value} enviada via WhatsApp para ${formData.clientName}. Link de pagamento PIX incluído.`,
    });
    onClose();
  };

  const copyPixCode = () => {
    navigator.clipboard.writeText('00020126330014BR.GOV.BCB.PIX0111123456789525204000053039865406123.455802BR5925AGENDA PRO SISTEMAS6009SAO PAULO62070503***6304ABCD');
    setCopied(true);
    toast({
      title: "Código PIX Copiado!",
      description: "Código copiado para a área de transferência",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card border-card-border max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 gradient-text">
            <CreditCard className="w-6 h-6" />
            Cobrança Automática via WhatsApp
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="send" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="send">Enviar Cobrança</TabsTrigger>
            <TabsTrigger value="generate">Gerar Link</TabsTrigger>
            <TabsTrigger value="history">Histórico</TabsTrigger>
          </TabsList>

          <TabsContent value="send" className="space-y-6">
            {/* Cliente Rápido */}
            <div className="space-y-4">
              <h3 className="font-medium">Selecionar Cliente</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {recentClients.map((client) => (
                  <Button
                    key={client.phone}
                    variant="outline"
                    className="h-auto p-3 justify-start hover-lift"
                    onClick={() => handleClientSelect(client)}
                  >
                    <div className="text-left">
                      <p className="font-medium">{client.name}</p>
                      <p className="text-xs text-muted-foreground">{client.phone}</p>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {client.lastService}
                      </Badge>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            {/* Dados da Cobrança */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="clientName">Nome do Cliente</Label>
                <Input
                  id="clientName"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  placeholder="Nome completo"
                />
              </div>
              <div>
                <Label htmlFor="phone">WhatsApp</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <Label htmlFor="service">Serviço/Produto</Label>
                <Input
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  placeholder="Descrição do serviço"
                />
              </div>
              <div>
                <Label htmlFor="value">Valor (R$)</Label>
                <Input
                  id="value"
                  value={formData.value}
                  onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                  placeholder="0,00"
                />
              </div>
              <div>
                <Label htmlFor="dueDate">Vencimento</Label>
                <Input
                  id="dueDate"
                  type="date"
                  value={formData.dueDate}
                  onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <Label htmlFor="notes">Observações</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Informações adicionais..."
                  rows={3}
                />
              </div>
            </div>

            {/* Métodos de Pagamento */}
            <div className="space-y-4">
              <h3 className="font-medium">Métodos de Pagamento Disponíveis</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {paymentMethods.map((method) => (
                  <div key={method.name} className="p-3 rounded-lg bg-secondary/30 text-center hover-lift">
                    <div className="text-2xl mb-2">{method.icon}</div>
                    <h4 className="font-medium">{method.name}</h4>
                    <p className="text-xs text-muted-foreground">{method.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Preview da Mensagem */}
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <h4 className="font-medium text-primary mb-2">Preview da Mensagem WhatsApp</h4>
              <div className="bg-white/10 p-3 rounded-lg text-sm">
                <p>🧾 <strong>Olá {formData.clientName || 'Cliente'}!</strong></p>
                <p>📋 Serviço: {formData.service || 'Serviço'}</p>
                <p>💰 Valor: R$ {formData.value || '0,00'}</p>
                <p>📅 Vencimento: {formData.dueDate || 'Data'}</p>
                <p className="mt-2">💳 Pague facilmente via PIX, Cartão ou Boleto:</p>
                <p className="text-primary">🔗 Link de pagamento seguro incluído</p>
                <p className="mt-2 text-muted-foreground">💡 Pagamento confirmado automaticamente!</p>
              </div>
            </div>

            <Button 
              onClick={handleSendBilling}
              className="w-full bg-gradient-to-r from-success to-success-glow hover:from-success-glow hover:to-success neon-glow"
              disabled={!formData.clientName || !formData.phone || !formData.value}
            >
              <Send className="w-4 h-4 mr-2" />
              Enviar Cobrança via WhatsApp
            </Button>
          </TabsContent>

          <TabsContent value="generate" className="space-y-6">
            <div className="text-center space-y-4">
              <div className="w-48 h-48 mx-auto bg-white rounded-lg p-4 flex items-center justify-center">
                <QrCode className="w-32 h-32 text-black" />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium">QR Code PIX</h3>
                <p className="text-sm text-muted-foreground">
                  Cliente pode escanear para pagar R$ {formData.value || '0,00'}
                </p>
              </div>

              <div className="space-y-2">
                <Label>Código PIX Copia e Cola</Label>
                <div className="flex gap-2">
                  <Input 
                    value="00020126330014BR.GOV.BCB.PIX0111123456789..." 
                    readOnly 
                    className="font-mono text-xs"
                  />
                  <Button 
                    size="icon" 
                    variant="outline"
                    onClick={copyPixCode}
                    className="hover-lift"
                  >
                    {copied ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover-lift">
                  <div>
                    <h4 className="font-medium">Maria Silva</h4>
                    <p className="text-sm text-muted-foreground">Corte + Escova - R$ 80,00</p>
                    <p className="text-xs text-muted-foreground">Enviado em 15/01/2025</p>
                  </div>
                  <Badge className="bg-success/20 text-success">
                    Pago
                  </Badge>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}