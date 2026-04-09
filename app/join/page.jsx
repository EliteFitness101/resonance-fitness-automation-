"use client";
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function JoinPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ref = searchParams.get('ref');

  useEffect(() => {
    if (ref) {
      // Store the referral code in local storage for the checkout process
      localStorage.setItem('resoflex_ref', ref);
      console.log(`Referral captured: ${ref}`);
    }
    // Redirect to the main page or checkout after capturing
    router.push('/checkout');
  }, [ref, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A]">
      <div className="animate-pulse text-[#FFD700] font-black tracking-widest uppercase">
        Securing Referral...
      </div>
    </div>
  );
}
