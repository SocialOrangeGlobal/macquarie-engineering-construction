'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { MapPin, Phone, Mail, Clock, CheckCircle, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import TextReveal from '@/components/animations/TextReveal';
import OptimizedImage from '@/components/ui/OptimizedImage';
import ParallaxImage from '@/components/animations/ParallaxImage';
import CustomSelect from '@/components/ui/CustomSelect';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to an API
    console.log('Form submitted:', formState);
    setIsModalOpen(true);
    setFormState({ name: '', email: '', phone: '', service: '', message: '' });
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
          <OptimizedImage src="/images/contact/contact-me.jpg" alt="Contact Us Background" fill style={{ objectFit: 'cover' }} sizes="100vw" priority />
        </ParallaxImage>
        <div className={styles.pageHeaderOverlay}></div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={itemFadeUp}
          className={styles.headerContent}
        >
          <TextReveal className={styles.title}>Contact Us</TextReveal>
          <p className={styles.subtitle}>Partner with us to engineer your vision.</p>
        </motion.div>
      </section>

      <section className="section-container">
        <div className={styles.contactGrid}>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.contactInfo}
          >
            <h2 className={styles.heading}>Get in Touch</h2>
            <p className={styles.description}>
              Engage with our engineering experts and project managers to discuss how we can bring your visionary project to life with precision and scale.
            </p>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><MapPin size={24} /></div>
                <div>
                  <h3>Global Headquarters</h3>
                  <p>L 10 100 St Georges Tce, Perth WA 6000</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><Phone size={24} /></div>
                <div>
                  <h3>Phone</h3>
                  <p>1800 670 239</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><Mail size={24} /></div>
                <div>
                  <h3>Email</h3>
                  <p>macquarieec@gmail.com</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><Clock size={24} /></div>
                <div>
                  <h3>Office Hours</h3>
                  <p>Monday - Friday: 8:00 AM - 5:30 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.formContainer}
          >
            <h2 className={styles.formTitle}>Request a Quote</h2>
            <form onSubmit={handleSubmit} className={styles.form} suppressHydrationWarning>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  suppressHydrationWarning
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    suppressHydrationWarning
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="1800 670 239"
                    suppressHydrationWarning
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="service">Service of Interest</label>
                {/* Hidden input for form submission if needed, although state controls this */}
                <input type="hidden" name="service" value={formState.service} />
                <CustomSelect
                  options={[
                    { value: 'commercial', label: 'Commercial Construction' },
                    { value: 'industrial', label: 'Industrial Facilities' },
                    { value: 'residential', label: 'Luxury Residential' },
                    { value: 'infrastructure', label: 'Civil Infrastructure' },
                    { value: 'other', label: 'Other' }
                  ]}
                  value={formState.service}
                  onChange={(value) => setFormState({ ...formState, service: value })}
                  placeholder="Select a Service"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project requirements..."
                  suppressHydrationWarning
                ></textarea>
              </div>

              <Button type="submit" variant="primary" className={styles.submitBtn}>
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className={styles.mapSection}>
        {!isMapLoaded && (
          <div className={styles.mapLoader}>
            <div className={styles.spinner}></div>
            <p>Loading Map...</p>
          </div>
        )}
        <iframe
          src="https://www.google.com/maps?q=100+St+Georges+Tce,+Perth+WA+6000&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block', opacity: isMapLoaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={styles.mapIframe}
          onLoad={() => setIsMapLoaded(true)}
        ></iframe>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeBtn} onClick={() => setIsModalOpen(false)}>
                <X size={24} />
              </button>

              <div className={styles.modalIcon}>
                <CheckCircle size={48} color="var(--color-accent-primary)" />
              </div>

              <h3 className={styles.modalTitle}>Message Sent!</h3>
              <p className={styles.modalText}>
                Thank you for getting in touch. We have received your message and one of our experts will contact you shortly.
              </p>

              <Button variant="primary" onClick={() => setIsModalOpen(false)} className={styles.modalBtn}>
                Done
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
