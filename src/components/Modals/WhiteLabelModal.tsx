import { useState } from 'react';
import { Palette, Upload, Eye, Save, Smartphone, Monitor, Globe } from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface WhiteLabelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WhiteLabelModal({ isOpen, onClose }: WhiteLabelModalProps) {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('brand');
  const [formData, setFormData] = useState({
    businessName: 'AgendaPro',
    logo: '',
    primaryColor: '#8B5CF6',
    secondaryColor: '#06B6D4',
    accentColor: '#10B981',
    domain: '',
    whatsappTemplate: '',
    emailTemplate: '',
    smsTemplate: ''
  });

  const colorPresets = [
    { name: 'Purple Ocean', primary: '#8B5CF6', secondary: '#06B6D4', accent: '#10B981' },
    { name: 'Sunset Vibes', primary: '#F59E0B', secondary: '#EF4444', accent: '#EC4899' },
    { name: 'Forest Fresh', primary: '#10B981', secondary: '#059669', accent: '#065F46' },
    { name: 'Royal Blue', primary: '#3B82F6', secondary: '#1D4ED8', accent: '#1E40AF' },
    { name: 'Cherry Blossom', primary: '#EC4899', secondary: '#BE185D', accent: '#9D174D' },
    { name: 'Ocean Breeze', primary: '#06B6D4', secondary: '#0891B2', accent: '#0E7490' }
  ];

  const messageTemplates = {
    confirmation: `🎉 Olá {{clientName}}!

Seu agendamento foi confirmado:

📅 Data: {{date}}
⏰ Horário: {{time}}
💼 Serviço: {{service}}
💰 Valor: {{value}}

📍 Local: {{businessName}}
📞 Contato: {{phone}}

Aguardamos você! 😊`,
    
    reminder: `⏰ Lembrete - {{businessName}}

Olá {{clientName}}!

Você tem um agendamento amanhã:

📅 {{date}} às {{time}}
💼 {{service}}

Para reagendar: {{rescheduleLink}}

Nos vemos em breve! 🌟`,
    
    billing: `💰 Fatura - {{businessName}}

Olá {{clientName}}!

📋 Serviço: {{service}}
💰 Valor: {{value}}
📅 Vencimento: {{dueDate}}

💳 Pague agora: {{paymentLink}}

Métodos disponíveis:
🔑 PIX (Instantâneo)
💳 Cartão
📄 Boleto

Obrigado! 🙏`
  };

  const applyColorPreset = (preset: typeof colorPresets[0]) => {
    setFormData({
      ...formData,
      primaryColor: preset.primary,
      secondaryColor: preset.secondary,
      accentColor: preset.accent
    });
  };

  const handleSave = () => {
    toast({
      title: "Configurações Salvas! 🎨",
      description: "Suas customizações foram aplicadas com sucesso. O sistema será atualizado em instantes.",
    });
    onClose();
  };

  const generatePreview = () => {
    return {
      backgroundColor: formData.primaryColor,
      color: '#ffffff',
      fontFamily: 'Inter, sans-serif'
    };
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card border-card-border max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 gradient-text">
            <Palette className="w-6 h-6" />
            Customização WhiteLabel
          </DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="brand">Marca</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="messages">Mensagens</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>

          <TabsContent value="brand" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Identidade da Marca</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="businessName">Nome do Negócio</Label>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="Meu Salão Premium"
                    />
                  </div>
                  <div>
                    <Label htmlFor="domain">Domínio Personalizado</Label>
                    <Input
                      id="domain"
                      value={formData.domain}
                      onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                      placeholder="meudominio.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Logo da Empresa</Label>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                      {formData.logo ? (
                        <img src={formData.logo} alt="Logo" className="w-full h-full object-cover rounded-lg" />
                      ) : (
                        <Upload className="w-8 h-8 text-white" />
                      )}
                    </div>
                    <Button variant="outline" className="hover-lift">
                      <Upload className="w-4 h-4 mr-2" />
                      Fazer Upload da Logo
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Recomendado: PNG ou SVG, 200x200px mínimo
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="design" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Paleta de Cores</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Color Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="primaryColor">Cor Primária</Label>
                    <div className="flex gap-2">
                      <Input
                        id="primaryColor"
                        type="color"
                        value={formData.primaryColor}
                        onChange={(e) => setFormData({ ...formData, primaryColor: e.target.value })}
                        className="w-16 h-10 p-1"
                      />
                      <Input
                        value={formData.primaryColor}
                        onChange={(e) => setFormData({ ...formData, primaryColor: e.target.value })}
                        placeholder="#8B5CF6"
                        className="flex-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="secondaryColor">Cor Secundária</Label>
                    <div className="flex gap-2">
                      <Input
                        id="secondaryColor"
                        type="color"
                        value={formData.secondaryColor}
                        onChange={(e) => setFormData({ ...formData, secondaryColor: e.target.value })}
                        className="w-16 h-10 p-1"
                      />
                      <Input
                        value={formData.secondaryColor}
                        onChange={(e) => setFormData({ ...formData, secondaryColor: e.target.value })}
                        placeholder="#06B6D4"
                        className="flex-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="accentColor">Cor de Destaque</Label>
                    <div className="flex gap-2">
                      <Input
                        id="accentColor"
                        type="color"
                        value={formData.accentColor}
                        onChange={(e) => setFormData({ ...formData, accentColor: e.target.value })}
                        className="w-16 h-10 p-1"
                      />
                      <Input
                        value={formData.accentColor}
                        onChange={(e) => setFormData({ ...formData, accentColor: e.target.value })}
                        placeholder="#10B981"
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Color Presets */}
                <div>
                  <Label>Paletas Pré-definidas</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                    {colorPresets.map((preset) => (
                      <Button
                        key={preset.name}
                        variant="outline"
                        className="h-auto p-3 hover-lift"
                        onClick={() => applyColorPreset(preset)}
                      >
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            <div 
                              className="w-4 h-4 rounded" 
                              style={{ backgroundColor: preset.primary }}
                            />
                            <div 
                              className="w-4 h-4 rounded" 
                              style={{ backgroundColor: preset.secondary }}
                            />
                            <div 
                              className="w-4 h-4 rounded" 
                              style={{ backgroundColor: preset.accent }}
                            />
                          </div>
                          <span className="text-sm">{preset.name}</span>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Templates de Mensagens</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="confirmationTemplate">Template de Confirmação</Label>
                    <Textarea
                      id="confirmationTemplate"
                      value={messageTemplates.confirmation}
                      rows={8}
                      className="font-mono text-sm"
                      placeholder="Sua mensagem de confirmação..."
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Variáveis disponíveis: clientName, date, time, service, value, businessName, phone
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="reminderTemplate">Template de Lembrete</Label>
                    <Textarea
                      id="reminderTemplate"
                      value={messageTemplates.reminder}
                      rows={6}
                      className="font-mono text-sm"
                      placeholder="Sua mensagem de lembrete..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="billingTemplate">Template de Cobrança</Label>
                    <Textarea
                      id="billingTemplate"
                      value={messageTemplates.billing}
                      rows={10}
                      className="font-mono text-sm"
                      placeholder="Sua mensagem de cobrança..."
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Mobile Preview */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5" />
                    Preview Mobile
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mx-auto w-64 h-96 rounded-2xl border-4 border-gray-800 p-2 bg-black">
                    <div className="w-full h-full rounded-xl overflow-hidden" style={generatePreview()}>
                      <div className="p-4 text-center">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-white/20 flex items-center justify-center">
                          <Palette className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-lg text-white">{formData.businessName}</h3>
                        <p className="text-white/80 text-sm mt-2">Sistema de Agendamento</p>
                        
                        <div className="mt-6 space-y-3">
                          <div className="bg-white/10 p-3 rounded-lg text-left">
                            <p className="text-white text-sm">📅 Próximo Agendamento</p>
                            <p className="text-white/80 text-xs">Maria Silva - 14:00</p>
                          </div>
                          <Button 
                            size="sm" 
                            className="w-full"
                            style={{ backgroundColor: formData.accentColor }}
                          >
                            Novo Agendamento
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Desktop Preview */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Monitor className="w-5 h-5" />
                    Preview Desktop
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-100 p-2 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <div className="ml-4 bg-white rounded px-2 py-1 text-xs text-gray-600 flex items-center gap-1">
                        <Globe className="w-3 h-3" />
                        {formData.domain || 'meudominio.com'}
                      </div>
                    </div>
                    <div className="h-64 p-4" style={generatePreview()}>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                            <Palette className="w-5 h-5 text-white" />
                          </div>
                          <h2 className="text-xl font-bold text-white">{formData.businessName}</h2>
                        </div>
                        <Button 
                          size="sm"
                          style={{ backgroundColor: formData.accentColor }}
                        >
                          Agendar Agora
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="bg-white/10 p-3 rounded-lg">
                            <div className="w-8 h-8 rounded bg-white/20 mb-2"></div>
                            <div className="h-3 bg-white/20 rounded mb-1"></div>
                            <div className="h-2 bg-white/10 rounded w-2/3"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex gap-3 pt-4 border-t border-card-border">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Cancelar
          </Button>
          <Button 
            onClick={handleSave}
            className="flex-1 bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary neon-glow"
          >
            <Save className="w-4 h-4 mr-2" />
            Salvar Configurações
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}