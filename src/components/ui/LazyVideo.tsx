"use client";
import { useEffect, useRef, useState } from "react";

export default function LazyVideo({
  src,
  poster,
  eager = false,
  className = "block w-full",
}: {
  src: string;
  poster?: string;
  eager?: boolean;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(eager);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.25, rootMargin: "200px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      muted
      loop
      playsInline
      preload={isInView ? "auto" : "none"}
      poster={poster}
    >
      {isInView && <source src={src} type="video/mp4" />}
    </video>
  );
}
