import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-ink text-white relative">
      {/* Banda colorată sus */}
      <div className="h-1.5 bg-gradient-to-r from-brand-500 via-orange-500 via-50% via-sky-500 to-mint-500"></div>

      <div className="px-6 md:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8 max-w-7xl mx-auto">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-brand-500 rounded-lg flex items-center justify-center p-1">
                <Image src="/images/logo.png" alt="" width={40} height={40} className="object-contain" />
              </div>
              <div>
                <div className="font-display font-semibold text-base text-white leading-none">RobboMaster</div>
                <div className="font-mono text-[9px] tracking-widest text-brand-500 mt-1 font-medium">WHERE TECHNOLOGY MEETS TOMORROW</div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Cursuri de robotică, programare și creativitate pentru copii curioși. Iași și Chișinău.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-widest text-brand-500 uppercase font-medium mb-4">Site</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/cursuri" className="text-white/70 hover:text-brand-500">Cursuri</Link></li>
              <li><Link href="/locatii" className="text-white/70 hover:text-brand-500">Locații</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-brand-500">Contact</Link></li>
              <li><Link href="/login" className="text-white/70 hover:text-brand-500">Cont părinte</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-widest text-brand-500 uppercase font-medium mb-4">Contact</p>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+40731029029" className="font-mono text-white/70 hover:text-brand-500">+40 731 029 029</a></li>
              <li><a href="tel:+37362090920" className="font-mono text-white/70 hover:text-brand-500">+373 62090920</a></li>
              <li><a href="mailto:robbomaster.iasi@gmail.com" className="text-white/70 hover:text-brand-500 break-all">robbomaster.iasi@gmail.com</a></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-widest text-brand-500 uppercase font-medium mb-4">Social</p>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.facebook.com/profile.php?id=61557032400359" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-500">Facebook</a></li>
              <li><a href="https://wa.me/40731029029" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-500">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-2 text-xs text-white/40 font-mono">
          <span>© 2026 ROBBOMASTER ACADEMY · TOATE DREPTURILE REZERVATE</span>
          <span>Politică confidențialitate · Termeni și condiții</span>
        </div>
      </div>
    </footer>
  );
}
