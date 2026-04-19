import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function ResetPage() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/confirmation');
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-sans">
      <Head><title>ResoFlex™ | Initializing Reset</title></Head>
      <Image src="/bio-frame.webp" alt="HUD Interface" layout="fill" objectFit="cover" className="fixed opacity-30 -z-10" />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        <form onSubmit={handleSubmit} className="w-full max-w-2xl p-10 bg-black/80 border border-zinc-800 rounded-3xl">
          <h2 className="text-4xl font-black mb-8 text-yellow-400 text-center uppercase">Biometric Input</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Age</label>
                <input type="number" className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-xl mt-2 font-mono" required />
              </div>
              <div>
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Weight (kg)</label>
                <input type="number" className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-xl mt-2 font-mono" required />
              </div>
            </div>
            <button type="submit" className="w-full bg-yellow-400 text-black font-black py-4 rounded-xl">OPTIMIZE & PAY N1,000</button>
          </div>
        </form>
      </main>
    </div>
  );
}
