'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import ServiceCard from '@/components/ui/ServiceCard';
import ServiceModal from '@/components/ui/ServiceModal';
import ProjectCard from '@/components/ui/ProjectCard';
import { Building2, Home as HomeIcon, Hammer, Factory, ShieldCheck, Users, Clock, Award } from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import TextReveal from '@/components/animations/TextReveal';
import ParallaxImage from '@/components/animations/ParallaxImage';
import Typewriter from '@/components/animations/Typewriter';
import { servicesData } from '@/data/servicesData';

export default function Home() {
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
      {/* Hero Section */}
      <section className={styles.hero}>
        <ParallaxImage className={styles.heroBg} speed={0.1}>
          <OptimizedImage src="/images/home/hero.jpg" alt="Hero Background" fill style={{ objectFit: 'cover' }} sizes="100vw" priority />
        </ParallaxImage>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroTextContainer}
          >
            <TextReveal className={styles.heroTitle}>
              Engineering Excellence for{' '}
              <Typewriter
                words={['Every Project.', 'Commercial Builds.', 'Residential Homes.', 'Industrial Facilities.', 'Modern Infras.']}
                className={styles.highlight}
              />
            </TextReveal>
            <p className={styles.heroSubtitle}>
              Engineering the future of Australia. We deliver landmark residential, commercial, industrial, and infrastructure projects with uncompromising precision.
            </p>
            <div className={styles.heroButtons}>
              <Button href="/contact" variant="primary">Request a Quote</Button>
              <Button href="/services" variant="outline">Explore Services</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-container">
        <div className={styles.overviewGrid}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className={styles.overviewText}
          >
            <motion.h2 variants={itemFadeUp} className="section-subtitle">About Macquarie</motion.h2>
            <motion.h3 variants={itemFadeUp} className={styles.overviewTitle}>Built with Precision, Delivered with Integrity.</motion.h3>
            <motion.p variants={itemFadeUp} className={styles.overviewDescription}>
              With over two decades of defining Australia's built environment, Macquarie Engineering and Construction has forged a reputation for unrivaled structural excellence. We bring elite technical expertise, sustainable innovation, and an unwavering commitment to quality to every project.
            </motion.p>
            <motion.div variants={itemFadeUp} className={styles.overviewFeatures}>
              <div className={styles.featureItem}><ShieldCheck className={styles.featureIcon} /> <span>Uncompromising Safety</span></div>
              <div className={styles.featureItem}><Award className={styles.featureIcon} /> <span>Award-Winning Quality</span></div>
            </motion.div>
            <motion.div variants={itemFadeUp}>
              <Button href="/about" variant="secondary">Learn Our Story</Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.overviewImage}
          >
            <ParallaxImage className={styles.imagePlaceholder} speed={0.15}>
              <OptimizedImage src="/images/home/about.jpg" alt="About Macquarie" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
            </ParallaxImage>
          </motion.div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className={styles.servicesSection}>
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2 className="section-subtitle">Our Expertise</h2>
            <TextReveal className="section-title">Core Services</TextReveal>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className={styles.servicesGrid}
          >
          {servicesData.slice(0, 4).map((service) => (
            <motion.div key={service.id} variants={itemFadeUp}>
              <ServiceCard
                title={service.title}
                description={service.description}
                Icon={service.Icon}
                href={`/services#${service.id}`}
                bgImage={service.bgImage}
                features={service.features}
                onLearnMore={() => setSelectedService(service)}
              />
            </motion.div>
          ))}
          </motion.div>

          <div className={styles.viewAllServices}>
            <Button href="/services" variant="outline">View All Services</Button>
          </div>
        </div>
      </section>

      <ServiceModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />

      {/* Featured Projects */}
      {/* <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.sectionHeader}
        >
          <h2 className="section-subtitle">Our Portfolio</h2>
          <TextReveal className="section-title">Featured Projects</TextReveal>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={styles.projectsGrid}
        >
          <motion.div variants={itemFadeUp}>
            <ProjectCard
              title="Commercial Office Complex"
              category="Commercial"
              location="Sydney CBD, NSW"
              description="A state-of-the-art 45-story commercial tower featuring premium grade office spaces, retail podium, and 6-star Green Star environmental rating."
              imageUrl="/images/projects/commercial-office-complex.jpg"
            />
          </motion.div>
          <motion.div variants={itemFadeUp}>
            <ProjectCard
              title="Industrial Warehouse Facility"
              category="Industrial"
              location="Western Sydney, NSW"
              description="A massive 50,000 sqm automated logistics hub built for a leading multinational distributor, featuring advanced robotics integration."
              imageUrl="/images/projects/industrial-warehouse-facility.jpg"
            />
          </motion.div>
        </motion.div>

        <div className={styles.viewAllServices}>
          <Button href="/projects" variant="secondary">View All Projects</Button>
        </div>
      </section> */}

      {/* Final CTA Banner */}
      <section className={styles.ctaBanner}>
        <ParallaxImage className={styles.ctaBg} speed={0.1}>
          <OptimizedImage src="/images/home/cta-section.jpg" alt="Call to Action Background" fill style={{ objectFit: 'cover' }} sizes="100vw" />
        </ParallaxImage>
        <div className={styles.ctaOverlay}></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.ctaContent}
        >
          <h2>Ready to Build Something Extraordinary?</h2>
          <p>Partner with Macquarie Engineering & Construction for unparalleled architectural and engineering excellence.</p>
          <Button href="/contact" variant="primary">Get in Touch Today</Button>
        </motion.div>
      </section>
    </div>
  );
}
