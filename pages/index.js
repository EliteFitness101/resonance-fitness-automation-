import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-6">
      <Head>
        <title>ResoFlex™ | Neural Fitness OS</title>
      </Head>
      <main className="text-center">
        <h1 className="text-6xl font-black tracking-tighter mb-4">RESOFLEX™</h1>
        <p className="text-gray-400 text-lg mb-8 uppercase tracking-widest">Deploying Industrial Strength</p>
        
        <div className="border border-zinc-800 bg-zinc-900/50 p-10 rounded-3xl max-w-sm">
          <h2 className="text-2xl font-bold mb-2">N1,000 Reset</h2>
          <p className="text-sm text-gray-500 mb-6">Biometric Optimization System</p>
          <button className="w-full bg-yellow-400 text-black font-bold py-4 rounded-xl hover:scale-105 transition-transform">
            INITIALIZE SYSTEM
          </button>
        </div>
      </main>
    </div>
  );
}
