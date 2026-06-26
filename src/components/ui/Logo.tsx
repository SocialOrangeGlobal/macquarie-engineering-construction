import styles from './Logo.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className={styles.logoContainer}>
      <Image
        src="/images/logo.png"
        alt="Macquarie Engineering & Construction"
        width={250}
        height={50}
        className={styles.logoImage}
        style={{ width: '100%', height: 'auto' }}
        priority
      />
    </Link>
  );
}
