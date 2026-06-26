'use client';

import styles from './page.module.css';
import { motion } from 'framer-motion';
import OptimizedImage from '@/components/ui/OptimizedImage';
import ParallaxImage from '@/components/animations/ParallaxImage';
import ProjectCard from '@/components/ui/ProjectCard';
import TextReveal from '@/components/animations/TextReveal';
import Button from '@/components/ui/Button';

export default function Projects() {
  const projects = [
    {
      id: 'commercial-office',
      title: 'Commercial Office Complex',
      category: 'Commercial',
      location: 'Sydney CBD, NSW',
      description: 'A state-of-the-art 45-story commercial tower featuring premium grade office spaces, retail podium, and 6-star Green Star environmental rating.',
      imageUrl: '/images/projects/commercial-office-complex.jpg'
    },
    {
      id: 'industrial-warehouse',
      title: 'Industrial Warehouse Facility',
      category: 'Industrial',
      location: 'Western Sydney, NSW',
      description: 'A massive 50,000 sqm automated logistics hub built for a leading multinational distributor, featuring advanced robotics integration.',
      imageUrl: '/images/projects/industrial-warehouse-facility.jpg'
    },
    {
      id: 'luxury-residential',
      title: 'Luxury Residential Development',
      category: 'Residential',
      location: 'Bondi Beach, NSW',
      description: 'An exclusive collection of 24 ultra-luxury oceanfront apartments with custom architectural finishes and private infinity pools.',
      imageUrl: '/images/projects/luxury-residential-development.jpg'
    },
    {
      id: 'civil-infrastructure',
      title: 'Civil Infrastructure Upgrade',
      category: 'Infrastructure',
      location: 'Regional NSW',
      description: 'A critical highway expansion and bridge reconstruction project, improving regional connectivity and safety standards.',
      imageUrl: '/images/projects/civil-infrastructure-upgrade.jpg'
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
          <OptimizedImage src="/images/projects/projects.jpg" alt="Featured Projects Background" fill style={{ objectFit: 'cover' }} sizes="100vw" priority />
        </ParallaxImage>
        <div className={styles.pageHeaderOverlay}></div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={itemFadeUp}
          className={styles.headerContent}
        >
          <TextReveal className={styles.title}>Featured Projects</TextReveal>
          <p className={styles.subtitle}>Showcasing our commitment to engineering excellence.</p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className={styles.projectsGrid}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemFadeUp}>
              <ProjectCard
                title={project.title}
                category={project.category}
                location={project.location}
                description={project.description}
                imageUrl={project.imageUrl}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className={styles.ctaBanner}>
        <ParallaxImage className={styles.ctaBg} speed={0.1}>
          <OptimizedImage src="/images/projects/cta-projects.jpg" alt="Start your project" fill style={{ objectFit: 'cover' }} sizes="100vw" />
        </ParallaxImage>
        <div className={styles.ctaOverlay}></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.ctaContent}
        >
          <h2>Have a project in mind?</h2>
          <p>Contact our team to discuss how we can bring your vision to life.</p>
          <Button href="/contact" variant="primary">Start the Conversation</Button>
        </motion.div>
      </section>
    </div>
  );
}
