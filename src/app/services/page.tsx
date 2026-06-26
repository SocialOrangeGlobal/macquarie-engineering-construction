'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { motion } from 'framer-motion';
import OptimizedImage from '@/components/ui/OptimizedImage';
import ServiceCard from '@/components/ui/ServiceCard';
import ServiceModal from '@/components/ui/ServiceModal';
import Button from '@/components/ui/Button';
import TextReveal from '@/components/animations/TextReveal';
import ParallaxImage from '@/components/animations/ParallaxImage';
import { servicesData } from '@/data/servicesData';

export default function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className={styles.main}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <ParallaxImage className={styles.pageHeaderBg} speed={0.1}>
          <OptimizedImage src="/images/services/services.jpg" alt="Our Services Background" fill style={{ objectFit: 'cover' }} sizes="100vw" priority />
        </ParallaxImage>
        <div className={styles.pageHeaderOverlay}></div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={itemFadeUp}
          className={styles.headerContent}
        >
          <TextReveal className={styles.title}>Our Services</TextReveal>
          <p className={styles.subtitle}>Comprehensive engineering and construction solutions.</p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className={styles.servicesGrid}
        >
          {servicesData.map((service) => (
            <motion.div key={service.id} id={service.id} variants={itemFadeUp}>
              <ServiceCard
                title={service.title}
                description={service.description}
                Icon={service.Icon}
                href={`/contact?service=${service.id}`}
                bgImage={service.bgImage}
                features={service.features}
                onLearnMore={() => setSelectedService(service)}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <ServiceModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />

      {/* CTA */}
      <section className={styles.ctaBanner}>
        <ParallaxImage className={styles.ctaBg} speed={0.1}>
          <OptimizedImage src="/images/services/cta-service.jpg" alt="Discuss Your Project" fill style={{ objectFit: 'cover' }} sizes="100vw" />
        </ParallaxImage>
        <div className={styles.ctaOverlay}></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.ctaContent}
        >
          <h2>Discuss Your Project Requirements</h2>
          <p>Our team of experts is ready to provide tailored solutions for your next venture.</p>
          <Button href="/contact" variant="primary">Request a Consultation</Button>
        </motion.div>
      </section>
    </div>
  );
}
