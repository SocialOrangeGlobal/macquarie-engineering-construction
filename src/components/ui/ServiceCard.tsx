'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './ServiceCard.module.css';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  href?: string;
  bgImage?: string;
  features?: any[];
  onLearnMore?: () => void;
}

export default function ServiceCard({ title, description, Icon, href, bgImage, features, onLearnMore }: ServiceCardProps) {
  return (
    <motion.div className={styles.card} whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
      {bgImage && (
        <div className={styles.imageContainer}>
          <OptimizedImage src={bgImage} alt={title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <Icon size={32} />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {features && features.length > 0 && (
          <ul className={styles.featuresList}>
            {features.map((feature, index) => (
              <li key={index}>{typeof feature === 'string' ? feature : feature.title}</li>
            ))}
          </ul>
        )}
        {onLearnMore ? (
          <button onClick={onLearnMore} className={styles.link} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit' }}>
            Learn More <ArrowRight size={16} />
          </button>
        ) : href ? (
          <Link href={href} className={styles.link}>
            Learn More <ArrowRight size={16} />
          </Link>
        ) : null}
      </div>
    </motion.div>
  );
}
