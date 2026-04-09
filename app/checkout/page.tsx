"use client";
import React from 'react';

export default function CheckoutPage() {
  const handlePayment = () => {
    // This connects to the Paystack Popup using your Live Public Key
    // Ensure you have the Paystack Script in your layout.tsx or a Script tag
    const handler = (window as any).PaystackPop.setup({
      key: 'pk_live_841d9126cc826e50ba970', // Your Live Public Key from screenshot
      email: 'athlete@resofit.fit', // In production, pull this from Supabase Auth
      amount: 3150000, // ₦31,500.00 (Amount is in Kobo)
      currency: 'NGN',
      callback: (response: any) => {
        // Redirects to your verified recovery page with the reference ID
        window.location.href = `/checkout/success?reference=${response.reference}`;
      },
      onClose: () => {
        alert('Activation cancelled. The Fleet is waiting for your return.');
      },
    });
    handler.openIframe();
  };

  return (
    <main className="min-h-screen bg-[#0F172A] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Aesthetic */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-[#FFD700] blur-[120px] rounded-full"></div>
      </div>

      <div className="z-10 w-full max-w-lg backdrop-blur-3xl bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-16 shadow-2xl text-center">
        <div className="mb-8">
          <span className="text-[#FFD700] text-xs font-black tracking-[0.3em] uppercase border border-[#FFD700]/30 px-4 py-1 rounded-full">
            Tier: Elite
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
          315 Evolution <br/>
          <span className="text-[#FFD700]">Activation</span>
        </h1>

        <p className="text-gray-400 mb-10 text-sm md:text-base leading-relaxed">
          Initialize your profile within the ResoFlex™ industrial ecosystem. 
          Secure your spot in the Isiala Ngwa North pilot launch.
        </p>

        <div className="bg-black/40 rounded-3xl p-6 border border-white/5 mb-10">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500 uppercase text-[10px] font-bold tracking-widest">Plan Cost</span>
            <span className="text-white font-black">₦31,500.00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 uppercase text-[10px] font-bold tracking-widest">Access</span>
            <span className="text-[#FFD700] font-bold">Lifetime Alpha</span>
          </div>
        </div>

        <button 
          onClick={handlePayment}
          className="w-full bg-[#FFD700] text-black py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:shadow-[0_0_40px_rgba(255,215,0,0.3)] hover:scale-[1.02] transition-all"
        >
          Secure Access Now
        </button>

        <p className="mt-8 text-[10px] text-gray-600 uppercase tracking-widest">
          Powered by Paystack Secure 256-bit Encryption
        </p>
      </div>
    </main>
  );
}
