'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import styles from './OptimizedImage.module.css';

interface OptimizedImageProps extends ImageProps {
  wrapperClassName?: string;
}

export default function OptimizedImage({ wrapperClassName = '', className = '', ...props }: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`${styles.imageWrapper} ${wrapperClassName}`}>
      {!isLoaded && <div className={styles.skeleton}></div>}
      <Image
        {...props}
        className={`${className} ${styles.image} ${isLoaded ? styles.loaded : styles.loading}`}
        onLoad={(e) => {
          setIsLoaded(true);
          if (props.onLoad) props.onLoad(e);
        }}
      />
    </div>
  );
}
