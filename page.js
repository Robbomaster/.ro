'use client';
import { useState } from 'react';

export default function PortalPlati() {
  const [loading, setLoading] = useState(false);

  const subscription = { plan: 'Robotică Junior', sessions: '4 ședințe / lună', amount: 320, currency: 'RON', dueDate: '2 mai 2026', planId: 'galaxy-monthly' };
  const history = [
    { month: 'Aprilie 2026', card: '****4521', amount: 320 },
    { month: 'Martie 2026', card: '****4521', amount: 320 },
    { month: 'Februarie 2026', card: '****4521', amount: 320 }
  ];

  const handlePay = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/netopia/initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: 'current_user', planId: subscription.planId, amount: subscription.amount, description: `Abonament ${subscription.plan}` })
      });
      const data = await res.json();
      if (data.paymentUrl) window.location.href = data.paymentUrl;
      else alert('Plata nu a putut fi inițiată. Încearcă din nou.');
    } catch {
      alert('Eroare conexiune.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="font-display font-semibold text-2xl tracking-tight mb-1">Abonament și plăți</h1>
      <p className="text-sm text-ink/60 mb-6">{subscription.plan} · {subscription.sessions}</p>

      <div className="bg-gradient-to-br from-brand-500 to-brand-600 border-2 border-ink rounded-xl p-6 shadow-block mb-6 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/15 rounded-full"></div>
        <div className="relative z-10">
          <p className="font-mono text-xs tracking-widest text-ink/70 font-medium mb-1">DE PLATĂ</p>
          <p className="font-display font-semibold text-4xl text-ink mb-1 tracking-tight">{subscription.amount} {subscription.currency}</p>
          <p className="text-sm text-ink/70 mb-5">Scadent: {subscription.dueDate}</p>
          <button onClick={handlePay} disabled={loading}
            className="bg-ink text-white px-5 py-2.5 rounded-lg font-display font-semibold text-sm border-2 border-ink disabled:opacity-50">
            {loading ? 'Se procesează...' : 'Plătește cu cardul →'}
          </button>
          <p className="text-xs text-ink/60 mt-2 font-mono">Plată sigură procesată de Netopia</p>
        </div>
      </div>

      <p className="font-mono text-xs tracking-widest uppercase text-ink/50 font-medium mb-3">Istoric plăți</p>
      <div className="space-y-2">
        {history.map((h, i) => (
          <div key={i} className="bg-white border-2 border-gray-200 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <p className="font-display font-semibold text-sm">{h.month}</p>
              <p className="font-mono text-xs text-ink/50">card {h.card}</p>
            </div>
            <span className="bg-cream text-brand-600 px-3 py-1 rounded font-mono text-sm font-medium">{h.amount} RON</span>
          </div>
        ))}
      </div>
    </div>
  );
}
