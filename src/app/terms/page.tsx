'use client';

import React from 'react';
import { motion } from 'framer-motion';
import TextReveal from '@/components/animations/TextReveal';
import ParallaxImage from '@/components/animations/ParallaxImage';
import OptimizedImage from '@/components/ui/OptimizedImage';
import styles from '../legal.module.css';

export default function TermsOfService() {
  const itemFadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <ParallaxImage className={styles.pageHeaderBg} speed={0.1}>
          <OptimizedImage src="/images/footer/terms-conditions.jpg" alt="Terms of Service Background" fill style={{ objectFit: 'cover' }} sizes="100vw" priority />
        </ParallaxImage>
        <div className={styles.pageHeaderOverlay}></div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={itemFadeUp}
          className={styles.headerContent}
        >
          <TextReveal className={styles.title}>Terms of Service</TextReveal>
          <p className={styles.subtitle}>Last updated: June 2026. Please read these Terms of Service carefully before using our website and services.</p>
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
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using the website and services provided by Macquarie Engineering & Construction ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to all of the terms and conditions, then you may not access the website or use any of our services.</p>
            
            <h2>2. Use of Services</h2>
            <p>Our services include residential, commercial, industrial, and civil construction and engineering. Any use of our services is subject to the execution of a separate, formal contract or agreement defining the specific scope of work, timelines, and payment terms.</p>

            <h2>3. Intellectual Property Rights</h2>
            <p>The website and its original content, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Macquarie Engineering & Construction, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>

            <h2>4. User Responsibilities</h2>
            <p>When using our website, you agree not to:</p>
            <ul>
              <li>Use the website in any way that violates any applicable federal, state, local, or international law or regulation.</li>
              <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the website, the server on which the website is stored, or any server, computer, or database connected to the website.</li>
              <li>Transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
            </ul>

            <h2>5. Disclaimer of Warranties</h2>
            <p>The information presented on or through the website is made available solely for general information purposes. We do not warrant the accuracy, completeness, or usefulness of this information. Any reliance you place on such information is strictly at your own risk. We disclaim all liability and responsibility arising from any reliance placed on such materials by you or any other visitor to the website, or by anyone who may be informed of any of its contents.</p>

            <h2>6. Limitation of Liability</h2>
            <p>In no event will Macquarie Engineering & Construction, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the website, any websites linked to it, any content on the website or such other websites, including any direct, indirect, special, incidental, consequential, or punitive damages.</p>

            <h2>7. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of Western Australia, Australia, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>

            <h2>8. Changes to Terms</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>

            <h2>9. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
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
