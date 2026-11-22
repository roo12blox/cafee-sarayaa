import { useState } from 'react';
import { Coffee } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export function SafeImage({ src, alt, className = '', loading = 'lazy' }: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#EFEAE1] to-[#E2D9CB] text-[#6B5D52] p-6 text-center ${className}`}
      >
        <Coffee className="w-7 h-7 mb-2 opacity-60" aria-hidden="true" />
        <span className="text-xs font-medium tracking-wide max-w-[180px]">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
