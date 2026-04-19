import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <Head><title>ResoFlex™ | Neural Fitness OS</title></Head>
      
      {/* Optimized WebP Background */}
      <Image src="/hero-bg.webp" alt="Neural OS" layout="fill" objectFit="cover" className="fixed opacity-30 -z-10" priority />
      
      <main className="relative z-10 flex flex-col items-center py-20 px-6 text-center">
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4 scale-y-110">RESOFLEX™</h1>
        <p className="text-xl mb-12 uppercase tracking-widest text-yellow-400 font-bold">Industrial Strength Optimization</p>
        
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
          {/* Main Funnel: N1,000 Reset */}
          <Link href="/reset" className="os-card group hover:border-yellow-400 transition-all cursor-pointer bg-zinc-900/40 p-10 rounded-3xl border border-zinc-800">
            <h2 className="text-4xl font-black mb-2">N1,000 RESET</h2>
            <p className="text-zinc-500 uppercase text-xs tracking-tighter mb-6">Initialize Biometric Core V1</p>
            <button className="w-full bg-yellow-400 text-black font-black py-5 rounded-2xl group-hover:bg-yellow-300 transition-colors">ACTIVATE SYSTEM</button>
          </Link>

          {/* Audio & PDF Library */}
          <div className="os-card bg-zinc-900/40 p-10 rounded-3xl border border-zinc-800 text-left">
            <h2 className="text-2xl font-black mb-6 text-zinc-300 uppercase">Neural Audio Streams</h2>
            <div className="space-y-4">
               <div className="p-4 bg-black/50 rounded-xl border border-zinc-800">
                 <p className="text-[10px] text-yellow-400 font-bold uppercase mb-1">Blueprint Active</p>
                 <p className="text-sm font-bold mb-2 uppercase">Billion Naira Blueprint</p>
                 <audio controls className="w-full h-8 accent-yellow-400">
                   <source src="/audio/billion-naira_blueprint.mp3" type="audio/mpeg" />
                 </audio>
               </div>
               <Link href="/docs/90_Day_Wellness_Journal.pdf" className="block p-4 bg-zinc-800/50 rounded-xl hover:bg-zinc-700 transition-all">
                 <p className="text-sm font-bold uppercase">Download wellness Journal (PDF)</p>
               </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
