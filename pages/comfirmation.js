import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function ConfirmationPage() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      <Head><title>ResoFlex™ | Success</title></Head>
      <div className="max-w-md w-full bg-zinc-900/50 border border-zinc-800 p-10 rounded-3xl space-y-6">
        <div className="relative h-48 w-full">
          <Image src="/success-icon.webp" alt="Success" layout="fill" objectFit="contain" priority />
        </div>
        <h1 className="text-4xl font-black text-yellow-400">OPTIMIZED</h1>
        <p className="text-zinc-400 uppercase tracking-widest text-sm">System Activated</p>
        <Link href="/">
          <button className="w-full bg-white text-black font-bold py-4 rounded-xl">RETURN TO CORE</button>
        </Link>
      </div>
    </div>
  );
}
