'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/', label: 'Acasă' },
    { href: '/cursuri', label: 'Cursuri' },
    { href: '/locatii', label: 'Locații' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white">
      {/* Top bar with tagline */}
      <div className="bg-ink text-brand-500 px-8 py-2 hidden md:flex justify-between items-center text-xs font-mono tracking-widest">
        <span>WHERE TECHNOLOGY MEETS TOMORROW</span>
        <span className="flex gap-4">
          <a href="tel:+40731029029" className="hover:text-brand-400">+40 731 029 029</a>
          <a href="https://wa.me/40731029029" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400">WhatsApp</a>
        </span>
      </div>

      {/* Main nav */}
      <nav className="border-b-4 border-brand-500 px-6 md:px-8 py-4 flex items-center justify-between bg-white">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 bg-brand-500 rounded-lg flex items-center justify-center overflow-hidden p-1">
            <Image
              src="/images/logo.png"
              alt="RobboMaster"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <div>
            <div className="font-display font-semibold text-base text-ink leading-none tracking-tight">RobboMaster</div>
            <div className="font-mono text-[9px] tracking-widest text-brand-600 mt-1 font-medium">ACADEMY</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={clsx(
                'font-display font-medium text-sm relative py-2 transition-colors',
                'after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[3px] after:bg-brand-500',
                'after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100',
                pathname === l.href ? 'text-ink after:scale-x-100' : 'text-ink/70 hover:text-ink'
              )}>
              {l.label}
            </Link>
          ))}
          <Link href="/login"
            className="bg-ink text-brand-500 hover:bg-brand-500 hover:text-ink px-5 py-2.5 rounded-lg font-display font-semibold text-sm transition-colors">
            Cont părinte →
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 space-y-2">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={clsx(
                'block py-2 font-display font-medium text-sm',
                pathname === l.href ? 'text-ink' : 'text-ink/70'
              )}>
              {l.label}
            </Link>
          ))}
          <Link href="/login" onClick={() => setOpen(false)}
            className="block py-2 font-display font-semibold text-sm text-brand-600">
            Cont părinte →
          </Link>
        </div>
      )}
    </header>
  );
}
