'use client';

import React from 'react';
import { motion } from 'framer-motion';
import TextReveal from '@/components/animations/TextReveal';
import ParallaxImage from '@/components/animations/ParallaxImage';
import OptimizedImage from '@/components/ui/OptimizedImage';
import styles from '../legal.module.css';

export default function PrivacyPolicy() {
  const itemFadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <ParallaxImage className={styles.pageHeaderBg} speed={0.1}>
          <OptimizedImage src="/images/footer/privacy-policy.jpg" alt="Privacy Policy Background" fill style={{ objectFit: 'cover' }} sizes="100vw" priority />
        </ParallaxImage>
        <div className={styles.pageHeaderOverlay}></div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={itemFadeUp}
          className={styles.headerContent}
        >
          <TextReveal className={styles.title}>Privacy Policy</TextReveal>
          <p className={styles.subtitle}>Last updated: June 2026. This Privacy Policy describes how Macquarie Engineering & Construction collects, uses, and shares your personal information.</p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className={styles.contentSection}>
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={styles.textContent}
          >
            <h2>1. Introduction</h2>
            <p>At Macquarie Engineering & Construction, we are committed to protecting the privacy and security of your personal information. This Privacy Policy explains our practices regarding the collection, use, and disclosure of information that you may provide via our website and during the course of our business operations.</p>
            
            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of personal information:</p>
            <ul>
              <li><strong>Contact Information:</strong> Name, email address, postal address, and telephone number.</li>
              <li><strong>Project Details:</strong> Information regarding your construction or engineering projects, site locations, and specific requirements.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, operating system, and data about your interactions with our website.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including:</p>
            <ul>
              <li>Providing, maintaining, and improving our construction and engineering services.</li>
              <li>Communicating with you regarding project updates, quotes, and general inquiries.</li>
              <li>Complying with legal obligations, health and safety regulations, and resolving any disputes.</li>
              <li>Enhancing our website's performance and optimizing the user experience.</li>
            </ul>

            <h2>4. Information Sharing and Disclosure</h2>
            <p>We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> With trusted subcontractors, vendors, and partners who require the information to perform services on our behalf.</li>
              <li><strong>Legal Requirements:</strong> When required by law, subpoena, or other legal processes, or to protect the rights, property, or safety of Macquarie Engineering & Construction, our employees, or others.</li>
            </ul>

            <h2>5. Data Security</h2>
            <p>We implement appropriate technical and organizational measures designed to protect the personal information we process. However, please note that no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.</p>

            <h2>6. Your Rights</h2>
            <p>Depending on your location, you may have rights under data protection laws regarding your personal data, including the right to request access, correction, or deletion of your personal information. To exercise these rights, please contact us using the information below.</p>

            <h2>7. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
            <p>
              Macquarie Engineering & Construction<br />
              L 10 100 St Georges Tce, Perth WA 6000<br />
              Email: macquarieec@gmail.com<br />
              Phone: 1800 670 239
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
