'use client';

import React from 'react';
import styles from './page.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ServiceCard from '@/components/ui/ServiceCard';
import Button from '@/components/ui/Button';
import TextReveal from '@/components/animations/TextReveal';
import { Building2, HardHat, Ruler, Truck, Zap, Droplets, PaintBucket, ShieldCheck, Cog, Factory } from 'lucide-react';
import ParallaxImage from '@/components/animations/ParallaxImage';

export default function Services() {
  const services = [
    {
      id: 'commercial',
      title: 'Commercial Construction',
      description: 'Office towers, retail complexes, and commercial facilities built to premium standards.',
      Icon: Building2,
      bgImage: '/images/services/commercial-construction.jpg'
    },
    {
      id: 'industrial',
      title: 'Industrial Facilities',
      description: 'Warehouses, logistics hubs, and manufacturing plants designed for maximum efficiency.',
      Icon: Factory,
      bgImage: '/images/services/industrial-facilities.jpg'
    },
    {
      id: 'residential',
      title: 'Luxury Residential',
      description: 'High-end apartments, townhouses, and bespoke custom homes.',
      Icon: HardHat,
      bgImage: '/images/services/luxury-residential.jpg'
    },
    {
      id: 'infrastructure',
      title: 'Civil Infrastructure',
      description: 'Roads, bridges, earthworks, and public utility projects.',
      Icon: Truck,
      bgImage: '/images/services/civil-infrastructure.jpg'
    },
    {
      id: 'electrical',
      title: 'Electrical Systems',
      description: 'Comprehensive electrical engineering, installation, and smart building integration.',
      Icon: Zap,
      bgImage: '/images/services/electrical-systems.jpg'
    },
    {
      id: 'plumbing',
      title: 'Hydraulic Services',
      description: 'Plumbing, drainage, and water management solutions for large-scale developments.',
      Icon: Droplets,
      bgImage: '/images/services/hydraulic-services.jpg'
    },
    {
      id: 'finishes',
      title: 'Interior Fit-Outs',
      description: 'Premium interior finishes, custom joinery, and specialized architectural details.',
      Icon: PaintBucket,
      bgImage: '/images/services/interior-fit-outs.jpg'
    },
    {
      id: 'safety',
      title: 'Safety Consulting',
      description: 'OHS audits, risk management planning, and compliance certification.',
      Icon: ShieldCheck,
      bgImage: '/images/services/safety-consulting.jpg'
    },
    {
      id: 'maintenance',
      title: 'Facility Maintenance',
      description: 'Ongoing structural and systemic maintenance for long-term asset preservation.',
      Icon: Cog,
      bgImage: '/images/services/facility-maintenance.jpg'
    },
    {
      id: 'design',
      title: 'Design & Planning',
      description: 'End-to-end architectural design, engineering planning, and local council approvals.',
      Icon: Ruler,
      bgImage: '/images/services/design-planning.jpg'
    }
  ];

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
          <Image src="/images/services/services.jpg" alt="Our Services Background" fill style={{ objectFit: 'cover' }} sizes="100vw" priority />
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
          {services.map((service) => (
            <motion.div key={service.id} id={service.id} variants={itemFadeUp}>
              <ServiceCard
                title={service.title}
                description={service.description}
                Icon={service.Icon}
                href={`/contact?service=${service.id}`}
                bgImage={service.bgImage}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBanner}>
        <ParallaxImage className={styles.ctaBg} speed={0.1}>
          <Image src="/images/services/cta-service.jpg" alt="Discuss Your Project" fill style={{ objectFit: 'cover' }} sizes="100vw" />
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
