"use client";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function CheckoutSuccess() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState('verifying'); // verifying, verified, or error
  const reference = searchParams.get('reference');

  useEffect(() => {
    if (reference) {
      // Pings your Python API to verify the transaction
      fetch(`/api/verify-payment?reference=${reference}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 'success') setStatus('verified');
          else setStatus('error');
        })
        .catch(() => setStatus('error'));
    } else {
      setStatus('error');
    }
  }, [reference]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0F172A] p-6 text-center">
      <div className="backdrop-blur-2xl bg-white/5 border border-[#FFD700]/20 p-12 rounded-[40px] shadow-2xl max-w-md w-full">
        
        {status === 'verifying' && (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FFD700] mb-4"></div>
            <p className="text-[#FFD700] font-black tracking-widest uppercase">Verifying Evolution...</p>
          </div>
        )}

        {status === 'verified' && (
          <>
            <div className="w-20 h-20 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(255,215,0,0.5)]">
              <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-[#FFD700] text-3xl font-black mb-4 uppercase">Profile Activated</h2>
            <p className="text-gray-400 mb-8 font-medium">Payment confirmed. Your ResoFlex™ 315 access is now live.</p>
            <Link href="/" className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#FFD700] transition-colors">
              Enter Fleet Dashboard
            </Link>
          </>
        )}

        {status === 'error' && (
          <>
            <h2 className="text-red-500 text-2xl font-black mb-4 uppercase">Verification Failed</h2>
            <p className="text-gray-400 mb-8">We couldn't confirm your transaction. If you have been debited, please contact ResoFlex™ support.</p>
            <Link href="/checkout" className="text-[#FFD700] underline uppercase text-sm font-bold">Try Checkout Again</Link>
          </>
        )}
      </div>
    </main>
  );
}
