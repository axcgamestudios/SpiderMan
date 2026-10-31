import { forwardRef } from 'react';

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  unoptimized?: boolean;
  priority?: boolean;
  loader?: unknown;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: string;
  blurDataURL?: string;
  overrideSrc?: string;
  loading?: 'eager' | 'lazy';
  style?: React.CSSProperties;
  className?: string;
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
  onError?: React.ReactEventHandler<HTMLImageElement>;
};

/** Static-host shim for next/image. Every game image already passes
 * `unoptimized`, so a plain <img> with the same props is equivalent. */
const Image = forwardRef<HTMLImageElement, Props>(function Image(
  {
    src,
    alt,
    width,
    height,
    fill,
    sizes,
    quality,
    priority,
    loader,
    placeholder,
    blurDataURL,
    overrideSrc,
    loading,
    ...rest
  },
  ref,
) {
  return (
    <img
      ref={ref}
      src={overrideSrc ?? src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      loading={priority ? 'eager' : loading}
      decoding={priority ? 'sync' : 'async'}
      {...rest}
    />
  );
});

export default Image;
