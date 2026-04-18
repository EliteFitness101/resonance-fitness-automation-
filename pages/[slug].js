import { useRouter } from 'next/router';

// This map acts as your "Traffic Controller"
const CANVA_PAGES = {
  'start': 'https://www.canva.com/design/PLAY_DESIGN_ID/watch',
  'bio': 'https://www.canva.com/design/BIO_DESIGN_ID/view',
  'naijafit': 'https://www.canva.com/design/FIT_DESIGN_ID/view',
  'naijafitmeals': 'https://www.canva.com/design/MEALS_DESIGN_ID/view',
  'resoflex-elite': 'https://www.canva.com/design/ELITE_DESIGN_ID/view',
};

export default function DynamicResoFlexPage() {
  const router = useRouter();
  const { slug } = router.query;

  // 1. Look up the Canva URL based on the slug in the address bar
  const targetUrl = CANVA_PAGES[slug];

  // 2. Loading state while Next.js catches up
  if (!slug) return null; 

  // 3. Fallback if the user types a slug that doesn't exist
  if (!targetUrl) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-yellow-500">
        <h1 className="text-2xl font-bold">404 | ResoFlex™ Route Not Found</h1>
      </div>
    );
  }

  // 4. The "Invisible Bridge" - Embedding the Canva UI
  return (
    <div className="h-screen w-full bg-black">
      <iframe 
        src={targetUrl} 
        className="h-full w-full border-0" 
        allow="fullscreen; autoplay; clipboard-write; encrypted-media; picture-in-picture"
      />
    </div>
  );
}
