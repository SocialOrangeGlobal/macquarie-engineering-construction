'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './ServiceCard.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  href: string;
  bgImage?: string;
}

export default function ServiceCard({ title, description, Icon, href, bgImage }: ServiceCardProps) {
  return (
    <motion.div className={styles.card} whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
      {bgImage && (
        <>
          <div className={styles.bgImage}>
            <Image src={bgImage} alt={title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </div>
          <div className={styles.overlay}></div>
        </>
      )}
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <Icon size={32} />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Link href={href} className={styles.link}>
          Learn More <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}
