import { useEffect, useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { LeadForm } from './components/LeadForm';
import { StickyCTA } from './components/StickyCTA';
import { DesktopCTA } from './components/DesktopCTA';
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
  const pageRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const root = pageRef.current ?? document;
    const elements = Array.from(root.querySelectorAll<HTMLElement>('[data-animate]'));
    if (elements.length === 0) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen">
      {/* Navbar */}
      <Navbar onDemoClick={handleDemoClick} onCallClick={handleCallClick} />

      {/* Main Content */}
      <main>
        <div data-animate="up">
          <Hero onDemoClick={handleDemoClick} onCallClick={handleCallClick} />
        </div>
        <div data-animate="up" style={{ ['--delay' as any]: '0.05s' }}>
          <SocialProof />
        </div>
        <section data-animate="up" style={{ ['--delay' as any]: '0.1s' }}>
          <Features />
        </section>
        <section data-animate="up" style={{ ['--delay' as any]: '0.1s' }}>
          <HowItWorks onDemoClick={handleDemoClick} />
        </section>
        <section data-animate="up" style={{ ['--delay' as any]: '0.1s' }}>
          <IAHighlights />
        </section>
        <section data-animate="up" style={{ ['--delay' as any]: '0.1s' }}>
          <Metrics />
        </section>
        <section data-animate="up" style={{ ['--delay' as any]: '0.1s' }}>
          <Pricing onDemoClick={handleDemoClick} />
        </section>
        <section data-animate="up" style={{ ['--delay' as any]: '0.1s' }}>
          <FAQ />
        </section>
        <section data-animate="up" style={{ ['--delay' as any]: '0.1s' }}>
          <CTA onDemoClick={handleDemoClick} onCallClick={handleCallClick} onLeadSuccess={handleLeadSuccess} />
        </section>
        <StickyCTA onDemoClick={handleDemoClick} onCallClick={handleCallClick} />
        <DesktopCTA onDemoClick={handleDemoClick} onCallClick={handleCallClick} />
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
