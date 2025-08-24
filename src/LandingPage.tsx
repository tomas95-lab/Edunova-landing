import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { LeadForm } from './components/LeadForm';
import { Toast } from './components/Toast';
import { Hero } from './sections/Hero';
import { SocialProof } from './sections/SocialProof';
import { Features } from './sections/Features';
import { HowItWorks } from './sections/HowItWorks';
import { IAHighlights } from './sections/IAHighlights';
import { Metrics } from './sections/Metrics';
import { Pricing } from './sections/Pricing';
import { FAQ } from './sections/FAQ';
import { CTA } from './sections/CTA';

export function LandingPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleDemoClick = () => {
    setIsDemoModalOpen(true);
  };

  const handleCallClick = () => {
    setIsCallModalOpen(true);
  };

  const handleModalClose = () => {
    setIsDemoModalOpen(false);
    setIsCallModalOpen(false);
  };

  const handleLeadSuccess = () => {
    // Aquí se podría agregar analytics o notificaciones
    console.log('Lead captured successfully');
    setToastMessage('¡Gracias! Te contactaremos en menos de 24 horas.');
    setToastOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header>
        <Navbar onDemoClick={handleDemoClick} />
      </header>

      {/* Main Content */}
      <main role="main">
        <Hero onDemoClick={handleDemoClick} onCallClick={handleCallClick} />
        <SocialProof onDemoClick={handleDemoClick} />
        <Features />
        <HowItWorks onDemoClick={handleDemoClick} />
        <IAHighlights />
        <Metrics />
        <Pricing onDemoClick={handleDemoClick} />
        <FAQ />
        <CTA onDemoClick={handleDemoClick} onLeadSuccess={handleLeadSuccess} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Demo Modal */}
      <Modal
        isOpen={isDemoModalOpen}
        onClose={handleModalClose}
        title="Solicita tu demo personalizada"
      >
        <div className="text-center mb-6">
          <p className="text-gray-600 mb-4">
            Te contactamos para activarte una demo guiada personalizada según las necesidades de tu institución.
          </p>
        </div>
        <LeadForm
          onSuccess={handleLeadSuccess}
          onClose={handleModalClose}
          variant="modal"
        />
      </Modal>

      {/* Call Modal */}
      <Modal
        isOpen={isCallModalOpen}
        onClose={handleModalClose}
        title="Agenda una llamada"
      >
        <div className="text-center mb-6">
          <p className="text-gray-600 mb-4">
            Nuestro equipo de especialistas te contactará para entender mejor tus necesidades y ofrecerte la mejor solución.
          </p>
        </div>
        <LeadForm
          onSuccess={handleLeadSuccess}
          onClose={handleModalClose}
          variant="modal"
        />
      </Modal>

      <Toast
        open={toastOpen}
        message={toastMessage}
        onClose={() => setToastOpen(false)}
        type="success"
      />
    </div>
  );
}
