"use client";
import { useSearchParams } from 'next/navigation';

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan') || '315_EVOLUTION';

  const handlePayment = () => {
    // This calls the Paystack popup using your Live Public Key
    const handler = (window as any).PaystackPop.setup({
      key: 'pk_live_841d9126cc826e50ba970', // From your screenshot
      email: 'athlete@resofit.fit',
      amount: 3150000, // Example: 31,500 NGN
      callback: (response: any) => {
        window.location.href = `/checkout/success?reference=${response.reference}`;
      },
    });
    handler.openIframe();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A]">
      <div className="glass p-12 rounded-[40px] text-center border border-[#FFD700]/20">
        <h2 className="text-[#FFD700] text-4xl font-black mb-6 uppercase italic">Secure Activation</h2>
        <p className="text-gray-400 mb-10">Initialize your ResoFlex™ 315 industrial profile.</p>
        <button 
          onClick={handlePayment}
          className="bg-[#FFD700] text-black px-16 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform"
        >
          PAY NOW
        </button>
      </div>
    </div>
  );
}
