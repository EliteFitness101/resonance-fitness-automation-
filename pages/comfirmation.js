import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      <Head><title>ResoFlex™ | System Optimized</title></Head>
      <div className="max-w-md space-y-8 bg-zinc-900/30 p-12 rounded-[3rem] border border-zinc-800">
        <div className="relative w-48 h-48 mx-auto">
          <Image src="/success-icon.webp" alt="Success" layout="fill" objectFit="contain" />
        </div>
        <h2 className="text-5xl font-black text-yellow-400 tracking-tighter">OPTIMIZED</h2>
        <p className="text-zinc-500 uppercase tracking-widest text-xs">Biometric Sync Complete. System Activated.</p>
        <Link href="/">
          <button className="w-full bg-white text-black font-black py-5 rounded-2xl uppercase tracking-widest">Return to Core</button>
        </Link>
      </div>
    </div>
  );
}
