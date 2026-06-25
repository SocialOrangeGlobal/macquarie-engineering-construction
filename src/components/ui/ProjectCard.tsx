'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  description: string;
  imageUrl: string;
}

export default function ProjectCard({ title, category, location, description, imageUrl }: ProjectCardProps) {
  return (
    <motion.div className={styles.card} whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
      <div className={styles.imageContainer}>
        {imageUrl ? (
          <Image src={imageUrl} alt={title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.image} />
        ) : (
          <div className={styles.imagePlaceholder}></div>
        )}
        <div className={styles.overlay}>
          <span className={styles.category}>{category}</span>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.location}>
          <MapPin size={16} />
          <span>{location}</span>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </motion.div>
  );
}
