'use client';

import styles from './page.module.css';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import OptimizedImage from '@/components/ui/OptimizedImage';
import TextReveal from '@/components/animations/TextReveal';
import ParallaxImage from '@/components/animations/ParallaxImage';

export default function About() {
  const itemFadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className={styles.main}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <ParallaxImage className={styles.pageHeaderBg} speed={0.1}>
          <OptimizedImage src="/images/about/about.jpg" alt="About Us Background" fill style={{ objectFit: 'cover' }} sizes="100vw" priority />
        </ParallaxImage>
        <div className={styles.pageHeaderOverlay}></div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={itemFadeUp}
          className={styles.headerContent}
        >
          <TextReveal className={styles.title}>About Us</TextReveal>
          <p className={styles.subtitle}>Building the future with integrity and precision.</p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="section-container">
        <div className={styles.contentGrid}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={styles.textContent}
          >
            <h2 className="section-subtitle">Our Story</h2>
            <TextReveal className={styles.heading}>Decades of Engineering Excellence</TextReveal>
            <p>
              From our origins as a specialized structural engineering firm over two decades ago, Macquarie Engineering and Construction has evolved into one of Australia's most trusted and capable construction partners, defining skylines and communities. Our vision remains uncompromising: to deliver unparalleled architectural quality in every project.
            </p>
            <p>
              Our journey is defined by the landmark projects we've architected and the enduring partnerships we've forged. We combine traditional master craftsmanship with cutting-edge construction technology to solve the most complex engineering challenges of the modern era.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={styles.imagePlaceholder}
          >
            <ParallaxImage speed={0.15}>
              <OptimizedImage src="/images/about/about-story.jpg" alt="Our Story" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
            </ParallaxImage>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.darkerSection}>
        <div className="section-container">
          <div className={styles.missionGrid}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.missionCard}
            >
              <div className={styles.missionBg}>
                <OptimizedImage src="/images/about/our-mission.jpg" alt="Our Mission" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className={styles.missionOverlay}></div>
              <div className={styles.missionContent}>
                <h3>Our Mission</h3>
                <p>To pioneer exceptional engineering and construction services that transcend client expectations, while setting the benchmark for safety, sustainable innovation, and structural integrity.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={styles.missionCard}
            >
              <div className={styles.missionBg}>
                <OptimizedImage src="/images/about/our-vission.jpg" alt="Our Vision" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className={styles.missionOverlay}></div>
              <div className={styles.missionContent}>
                <h3>Our Vision</h3>
                <p>To be the most authoritative and innovative construction partner in Australia, shaping iconic skylines and resilient communities for generations to come.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.centerHeader}
        >
          <h2 className="section-subtitle">What Drives Us</h2>
          <TextReveal className="section-title">Core Values</TextReveal>
        </motion.div>

        <div className={styles.valuesGrid}>
          {['Integrity', 'Precision', 'Innovation', 'Safety'].map((value, idx) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={styles.valueItem}
            >
              <h4>{value}</h4>
              <p>We believe in doing things right the first time, ensuring quality and transparency in every phase.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBanner}>
        <ParallaxImage className={styles.ctaBg} speed={0.1}>
          <OptimizedImage src="/images/about/we-meet.jpg" alt="Work With Our Experts" fill style={{ objectFit: 'cover' }} sizes="100vw" />
        </ParallaxImage>
        <div className={styles.ctaOverlay}></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.ctaContent}
        >
          <h2>Work With Our Experts</h2>
          <p>Let's engineer something extraordinary together.</p>
          <Button href="/contact" variant="primary">Contact Our Team</Button>
        </motion.div>
      </section>
    </div>
  );
}
