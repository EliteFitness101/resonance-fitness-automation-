import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

export default function ResetPage() {
  const router = useRouter();

  const handleReset = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // Push Biometric Data to Supabase Leads Table
    const { error } = await supabase.from('resoflex_leads').insert([data]);

    if (!error) {
      router.push('/confirmation');
    } else {
      alert("System Sync Error: Check connection.");
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center p-6">
      <Head><title>ResoFlex™ | Biometric Sync</title></Head>
      <Image src="/bio-frame.webp" alt="HUD" layout="fill" objectFit="cover" className="fixed opacity-20 -z-10" />

      <form onSubmit={handleReset} className="w-full max-w-xl bg-black/80 border border-zinc-800 p-10 rounded-3xl space-y-8">
        <h1 className="text-4xl font-black text-center text-yellow-400 uppercase tracking-tighter">Biometric Sync</h1>
        
        <div className="space-y-4">
          <input name="age" type="number" placeholder="AGE" className="w-full bg-zinc-900 border border-zinc-800 p-5 rounded-2xl font-mono text-xl focus:border-yellow-400 outline-none" required />
          <input name="weight" type="number" placeholder="WEIGHT (KG)" className="w-full bg-zinc-900 border border-zinc-800 p-5 rounded-2xl font-mono text-xl focus:border-yellow-400 outline-none" required />
          <select name="goal" className="w-full bg-zinc-900 border border-zinc-800 p-5 rounded-2xl font-bold text-lg text-zinc-400">
            <option>INDUSTRIAL STRENGTH</option>
            <option>FAT LOSS RESET</option>
          </select>
        </div>

        <button type="submit" className="w-full bg-yellow-400 text-black font-black py-6 rounded-2xl text-xl hover:scale-[1.02] transition-transform">INITIALIZE N1,000 RESET</button>
      </form>
    </div>
  );
}
