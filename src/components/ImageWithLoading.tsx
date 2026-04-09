"use client";

import Image from "next/image";
import { useState } from "react";

import { StaticImageData } from "next/image";

interface ImageWithLoadingProps {
  // allow either imported images or public‑folder paths
  src: any;
  alt: string;
  className?: string;
}

export default function ImageWithLoading({
  src,
  alt,
  className = "",
}: ImageWithLoadingProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center rounded">
          <div className="relative inline-flex w-1/2 h-1/2 max-w-12 max-h-12">
            <div className="absolute inset-0 rounded-full border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
            <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-r-transparent border-b-transparent border-l-[#ec2127] animate-[spin_0.5s_linear_infinite_reverse]"></div>
          </div>
        </div>
      )}
      <Image
        className={`transition-transform ease-in-out duration-300 object-contain ${className}`}
        // src={src}
        src={`.${src}`}
        alt={alt}
        fill={true}
        loading="lazy"
        sizes="(max-width: 600px) 100vw, 33vw"
        onLoad={() => setIsLoading(false)}
        style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.3s" }}
      />
    </div>
  );
}
