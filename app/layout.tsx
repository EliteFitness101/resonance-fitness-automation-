import './globals.css';
import { Montserrat } from 'next/font/google';
import Script from 'next/script';

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['400', '700', '900'],
  variable: '--font-montserrat' 
});

export const metadata = {
  title: 'ResoFit | Resonance Fitness Evolution',
  description: 'Industrial Fitness Innovation by Engr Onyebuchi Jerry Moses',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Load Paystack Inline Script before the page becomes interactive */}
        <Script 
          src="https://js.paystack.co/v1/inline.js" 
          strategy="beforeInteractive" 
        />
      </head>
      <body className={`${montserrat.variable} font-sans bg-[#0F172A] text-white antialiased selection:bg-[#FFD700] selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
