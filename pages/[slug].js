import { useRouter } from 'next/router';
import { CANVA_UI_MAP } from '../lib/constants';

export default function DynamicSlug() {
  const router = useRouter();
  const { slug } = router.query;
  const target = CANVA_UI_MAP[slug];

  if (!slug) return null;
  if (!target) return <div className="bg-black h-screen" />;

  return (
    <div className="h-screen w-full bg-black overflow-hidden">
      <iframe src={target} className="w-full h-full border-0" allowFullScreen />
    </div>
  );
}
