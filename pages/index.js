import React from 'react';
import Head from 'next/head';

export default function ResoFlexNexus() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-resogold selection:text-black">
      <Head>
        <title>ResoFlex™ | The Success Continuum</title>
        <meta name="description" content="Industrial Luxury Fitness by Coach Buchi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* INDUSTRIAL NAVIGATION */}
      <nav className="fixed w-full z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-[#D4AF37] to-white rounded-sm rotate-45" />
            <span className="font-bold tracking-[0.2em] uppercase text-sm">ResoFlex™</span>
          </div>
          <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400">
            <a href="#empire" className="hover:text-[#D4AF37] transition">The 315 Empire</a>
            <a href="#hardware" className="hover:text-[#D4AF37] transition">LuxeGold™</a>
            <a href="#agency" className="hover:text-[#D4AF37] transition">Elite NG</a>
          </div>
          <button className="px-6 py-2 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold hover:bg-[#D4AF37] hover:text-black transition-all">
            Access Vault
          </button>
        </div>
      </nav>

      {/* HERO SECTION: THE SUCCESS CONTINUUM */}
      <main className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Ambient Gold Glow */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#D4AF37]/10 blur-[150px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-10">
            <div className="inline-block px-4 py-1 border border-white/10 bg-white/5 backdrop-blur-md text-[10px] uppercase tracking-[0.5em] text-[#D4AF37]">
              Industrial Wellness Infrastructure
            </div>
            
            <h1 className="text-6xl md:text-9xl font-extrabold leading-[0.9] uppercase italic tracking-tighter">
              The <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-[#D4AF37]">Success</span> Continuum
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl font-light max-w-xl leading-relaxed">
              ResoFlex™ transforms biology into industrial power. Engineered by <span className="text-white font-medium">Coach Buchi</span>. 
              Refined by the <span className="text-white font-medium">Mavia Aesthetic</span>. Designed for the 1%.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-[#D4AF37] text-black px-12 py-5 font-black uppercase tracking-tighter hover:bg-white transition-colors duration-500 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                Begin Deployment
              </button>
              <button className="px-12 py-5 border border-white/20 bg-white/5 backdrop-blur-md font-bold uppercase tracking-tighter hover:bg-white/10 transition-all">
                The 315 Roadmap
              </button>
            </div>
          </div>

          {/* AUTHORITY ASSET: COACH BUCHI & MAVIA */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 p-2 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-sm group overflow-hidden">
              <img 
                src="/assets/content/coaches/resoflex-ceo-coach-buchi-fitness-turban-white.webp" 
                alt="Coach Buchi" 
                className="w-full grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            </div>
            
            {/* CEO SIGNATURE OVERLAY */}
            <div className="absolute -bottom-10 -right-6 z-20">
              <img 
                src="/assets/branding/signatures/resoflex-buchi-signature-authority-white.png" 
                className="h-28 md:h-40 drop-shadow-2xl hover:scale-105 transition-transform" 
                alt="Buchi Signature" 
              />
            </div>

            {/* AESTHETIC LEAD CALLOUT */}
            <div className="absolute -left-8 top-1/2 -rotate-90 origin-center text-[10px] tracking-[1em] text-gray-500 uppercase">
              Mavia Aesthetic Lead
            </div>
          </div>
        </div>
      </main>

      {/* INDUSTRIAL DATA STRIP */}
      <section className="w-full border-y border-white/5 py-12 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-3xl font-black text-[#D4AF37]">315</div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-gray-500 mt-2">Active Innovations</div>
          </div>
          <div>
            <div className="text-3xl font-black text-white italic">ABIA</div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-gray-500 mt-2">Pilot Hub</div>
          </div>
          <div>
            <div className="text-3xl font-black text-[#D4AF37]">₦100M</div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-gray-500 mt-2">Target Revenue</div>
          </div>
          <div>
            <div className="text-3xl font-black text-white italic">LUXE</div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-gray-500 mt-2">Hardware Tier</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-6 opacity-30">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <div className="w-px h-20 bg-gradient-to-b from-white to-transparent mb-6" />
          <p className="text-[10px] uppercase tracking-[0.5em] text-center leading-loose">
            Energix Multi Solution Nig. Ltd<br />
            ResoFlex™ Industrial Digital Infrastructure<br />
            © 2026. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
