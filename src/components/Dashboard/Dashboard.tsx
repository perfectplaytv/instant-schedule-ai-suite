import { useState } from 'react';
import { StatsCards } from './StatsCards';
import { QuickActions } from './QuickActions';
import { RecentAppointments } from './RecentAppointments';
import { Analytics } from './Analytics';
import { AppointmentModal } from '../Modals/AppointmentModal';
import { BillingModal } from '../Modals/BillingModal';
import { AnalyticsModal } from '../Modals/AnalyticsModal';
import { WhiteLabelModal } from '../Modals/WhiteLabelModal';
import { FeaturesShowcase } from '../Marketing/FeaturesShowcase';
import heroImage from '@/assets/hero-saas.jpg';

export function Dashboard() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalName: string) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="glass-card relative overflow-hidden hover-lift">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="AgendaPro SaaS" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/60"></div>
        </div>
        <div className="relative p-8">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white">Bem-vindo ao AgendaPro</h1>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-white/80">Powered by</span>
                    <span className="px-2 py-1 bg-white/20 rounded-full text-xs text-white font-medium">IA 2025</span>
                    <span className="px-2 py-1 bg-white/20 rounded-full text-xs text-white font-medium">WhiteLabel</span>
                  </div>
                </div>
              </div>
              <p className="text-white/90 text-lg leading-relaxed">
                🎯 <strong>SaaS WhiteLabel de agendamento inteligente</strong> com automação completa via WhatsApp, 
                IA para otimização, cobrança automática e analytics avançadas. 
                <span className="text-accent font-medium">Monetização passiva garantida!</span>
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse-glow"></div>
                  <span className="text-white/80 text-sm">Sistema 24/7 Ativo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow"></div>
                  <span className="text-white/80 text-sm">Edge Computing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-warning rounded-full animate-pulse-glow"></div>
                  <span className="text-white/80 text-sm">Multi-Cloud</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm flex items-center justify-center float-animation">
                  <div className="text-6xl">💎</div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center animate-pulse-glow">
                  <span className="text-white text-sm font-bold">AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Quick Actions */}
      <QuickActions onOpenModal={openModal} />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentAppointments />
        <Analytics />
      </div>

      {/* Features Showcase */}
      <FeaturesShowcase />

      {/* Modals */}
      <AppointmentModal 
        isOpen={activeModal === 'appointment'} 
        onClose={closeModal} 
      />
      <BillingModal 
        isOpen={activeModal === 'billing'} 
        onClose={closeModal} 
      />
      <AnalyticsModal 
        isOpen={activeModal === 'analytics'} 
        onClose={closeModal} 
      />
      <WhiteLabelModal 
        isOpen={activeModal === 'whitelabel'} 
        onClose={closeModal} 
      />
    </div>
  );
}