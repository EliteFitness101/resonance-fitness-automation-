import { useEffect, useRef } from 'react';

export default function VideoPlayer({ videoUrl, posterUrl }) {
  const videoRef = useRef(null);

  return (
    <div className="relative overflow-hidden rounded-xl bg-black aspect-video">
      <video
        ref={videoRef}
        src={videoUrl}
        poster={posterUrl}
        controls
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
