'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, LucideIcon } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import styles from './ServiceModal.module.css';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    Icon: LucideIcon;
    bgImage?: string;
    features?: { title: string; description: string }[];
  } | null;
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <div className={styles.modalContainer}>
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
                <X size={24} />
              </button>

              {service.bgImage && (
                <div className={styles.imageContainer}>
                  <OptimizedImage src={service.bgImage} alt={service.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 800px" />
                  <div className={styles.imageOverlay}></div>
                  <div className={styles.iconWrapper}>
                    <service.Icon size={40} />
                  </div>
                </div>
              )}

              <div className={styles.content}>
                <h2 className={styles.title}>{service.title}</h2>
                <p className={styles.description}>{service.description}</p>
                
                {service.features && service.features.length > 0 && (
                  <div className={styles.featuresSection}>
                    <h3>Included Services</h3>
                    <ul className={styles.featuresList}>
                      {service.features.map((feature, idx) => (
                        <li key={idx}>
                          <span className={styles.bullet}></span>
                          <div className={styles.featureContent}>
                            <h4 className={styles.featureTitle}>{feature.title}</h4>
                            <p className={styles.featureDescription}>{feature.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
