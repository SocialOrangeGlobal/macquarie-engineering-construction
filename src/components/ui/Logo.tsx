import React from 'react';
import styles from './Logo.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className={styles.logoContainer}>
      <Image 
        src="/images/logo.png" 
        alt="Macquarie Engineering & Construction Logo" 
        width={250} 
        height={50} 
        className={styles.logoImage}
        priority
      />
    </Link>
  );
}
