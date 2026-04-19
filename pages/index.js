import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
      <Head><title>ResoFlex™ | Neural Fitness OS</title></Head>
      <Image src="/hero-bg.webp" alt="Neural OS" layout="fill" objectFit="cover" className="fixed opacity-30 -z-10" priority />
      
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 text-center">
        <h1 className="text-7xl font-black tracking-tighter mb-4">RESOFLEX™</h1>
        <p className="text-xl mb-12 uppercase tracking-widest text-zinc-400">Industrial Strength Optimization</p>
        
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
          <Link href="/reset" className="border border-zinc-800 bg-black/50 p-10 rounded-3xl hover:border-yellow-400 transition-all">
            <h2 className="text-3xl font-bold mb-3 text-yellow-400">N1,000 Reset</h2>
            <p className="text-sm text-gray-500 mb-6">Deploy Neural Core V1. Biometric input required.</p>
            <button className="w-full bg-yellow-400 text-black font-black py-4 rounded-xl mt-4">INITIALIZE</button>
          </Link>
          <div className="border border-zinc-800 bg-black/50 p-10 rounded-3xl opacity-50 cursor-not-allowed">
            <h2 className="text-3xl font-bold mb-3">Architect Portal</h2>
            <p className="text-sm text-gray-500 mb-6">Scale the network. Commissions active.</p>
            <button className="w-full bg-zinc-700 text-white font-black py-4 rounded-xl mt-4">LOCKED</button>
          </div>
        </div>
      </main>
    </div>
  );
}
