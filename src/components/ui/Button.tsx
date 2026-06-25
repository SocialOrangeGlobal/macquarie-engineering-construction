'use client';

import React from 'react';
import styles from './Button.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionLink = motion.create(Link);

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ children, variant = 'primary', href, className = '', onClick, type = 'button' }: ButtonProps) {
  const btnClass = `${styles.button} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <MotionLink href={href} className={btnClass} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button type={type} className={btnClass} onClick={onClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
      {children}
    </motion.button>
  );
}
