import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  return (
    <div className="h-screen w-full bg-black overflow-hidden">
      <iframe 
        src="https://www.canva.com/design/DAxxxx/view?embed" 
        className="w-full h-full border-0" 
        allow="fullscreen; autoplay"
        title="ResoFlex Home"
      />
    </div>
  );
}
