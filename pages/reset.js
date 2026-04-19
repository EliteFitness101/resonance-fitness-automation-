import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

export default function ResetPage() {
  const router = useRouter();

  const handleSync = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const { error } = await supabase.from('resoflex_leads').insert([data]);

    if (!error) router.push('/confirmation');
    else alert("Sync Error: Check Biometric Uplink.");
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center p-6">
      <Image src="/bio-frame.webp" alt="HUD" layout="fill" objectFit="cover" className="fixed opacity-20 -z-10" />
      <form onSubmit={handleSync} className="w-full max-w-lg bg-black/80 border border-zinc-800 p-10 rounded-3xl space-y-6">
        <h1 className="text-4xl font-black text-yellow-400 text-center uppercase">Biometric Sync</h1>
        <input name="age" type="number" placeholder="AGE" className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-xl font-mono" required />
        <input name="weight" type="number" placeholder="WEIGHT (KG)" className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-xl font-mono" required />
        <button type="submit" className="w-full bg-yellow-400 text-black font-black py-4 rounded-xl text-xl">DEPLOY RESET</button>
      </form>
    </div>
  );
}
