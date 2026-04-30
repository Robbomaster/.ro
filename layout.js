'use client';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Calendar, CreditCard, Users, Bell, LogOut } from 'lucide-react';
import clsx from 'clsx';

export default function PortalLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (u) setUser(u);
      else router.push('/login');
      setLoading(false);
    });
    return () => unsub();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/');
  };

  if (loading) return <div className="p-12 text-center text-ink/50">Se încarcă...</div>;
  if (!user) return null;

  const tabs = [
    { href: '/portal/calendar', label: 'Calendar', icon: Calendar },
    { href: '/portal/plati', label: 'Plăți', icon: CreditCard },
    { href: '/portal/copii', label: 'Copii', icon: Users },
    { href: '/portal/notificari', label: 'Notificări', icon: Bell }
  ];

  return (
    <div className="bg-cream min-h-[80vh]">
      <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-[260px_1fr] gap-6">
        <aside className="bg-white border-2 border-ink rounded-xl p-5 h-fit shadow-block">
          <div className="bg-brand-500 rounded-lg p-3 mb-4">
            <p className="font-mono text-[10px] tracking-widest text-ink/70 font-medium">CONT PĂRINTE</p>
            <p className="font-display font-semibold text-sm text-ink mt-0.5 truncate">{user.email}</p>
          </div>

          <nav className="space-y-1">
            {tabs.map(t => {
              const Icon = t.icon;
              const isActive = pathname === t.href;
              return (
                <Link key={t.href} href={t.href}
                  className={clsx(
                    'flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                    isActive ? 'bg-ink text-brand-500' : 'text-ink hover:bg-cream'
                  )}>
                  <Icon className="w-4 h-4" strokeWidth={2} />
                  {t.label}
                </Link>
              );
            })}
          </nav>

          <button onClick={handleLogout}
            className="mt-4 flex items-center gap-2.5 px-3 py-2.5 text-sm text-ink/50 hover:text-ink w-full">
            <LogOut className="w-4 h-4" />
            Ieșire
          </button>
        </aside>

        <div>{children}</div>
      </div>
    </div>
  );
}
