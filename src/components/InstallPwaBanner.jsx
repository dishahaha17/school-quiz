import React, { useState, useEffect } from 'react';
import { Download, X, Sparkles } from 'lucide-react';

export default function InstallPwaBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if dismissed previously in session
    const isDismissed = sessionStorage.getItem('pwa_banner_dismissed');
    if (!isDismissed) {
      // Always show banner after 2 seconds for demo/user experience
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);

      const handleBeforeInstallPrompt = (e) => {
        e.preventDefault();
        setDeferredPrompt(e);
        setShowBanner(true);
      };

      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      };
    }
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log('Install prompt outcome:', outcome);
      setDeferredPrompt(null);
    } else {
      alert('⚡ Questly App Install: Tap your browser menu (⋮ or ⇧) and click "Add to Home Screen" / "Install App"!');
    }
    setShowBanner(false);
  };

  const handleDismiss = () => {
    sessionStorage.setItem('pwa_banner_dismissed', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div 
      className="position-fixed bottom-0 start-50 translate-middle-x mb-3 p-2"
      style={{ zIndex: 9999, width: '90%', maxWidth: '460px' }}
    >
      <div 
        className="nb-card bg-dark text-white p-3 d-flex align-items-center justify-content-between gap-3 shadow-lg"
        style={{
          border: '3px solid #1A1A1A',
          backgroundColor: '#1A1A1A',
          boxShadow: '6px 6px 0px #F5B942'
        }}
      >
        {/* App Icon */}
        <div className="d-flex align-items-center gap-3">
          <div 
            className="rounded-3 bg-coral border border-2 border-white d-flex align-items-center justify-content-center text-white font-heading fw-bold fs-4 flex-shrink-0"
            style={{ width: '44px', height: '44px' }}
          >
            Q
          </div>
          <div>
            <div className="d-flex align-items-center gap-1">
              <h6 className="font-heading fw-bold text-white m-0 fs-6">Install Questly App</h6>
              <Sparkles size={14} className="text-warning fill-warning" />
            </div>
            <small className="fw-bold text-secondary" style={{ fontSize: '11px' }}>
              Class 5-8 Live Quiz & Leaderboard
            </small>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="d-flex align-items-center gap-2 flex-shrink-0">
          <button 
            onClick={handleInstallClick}
            className="nb-button nb-button-mint py-1 px-3 fs-6 d-flex align-items-center gap-1"
            style={{ fontSize: '13px' }}
          >
            <Download size={15} />
            <span>INSTALL</span>
          </button>
          
          <button 
            onClick={handleDismiss}
            className="btn btn-outline-light rounded-circle p-1 border-2 d-flex align-items-center justify-content-center"
            style={{ width: '30px', height: '30px' }}
          >
            <X size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}
