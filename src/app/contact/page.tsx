'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import TextReveal from '@/components/animations/TextReveal';
import OptimizedImage from '@/components/ui/OptimizedImage';
import ParallaxImage from '@/components/animations/ParallaxImage';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

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
    alert('Thank you for your message. We will get back to you shortly.');
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
          <OptimizedImage src="/images/contact/contacts.jpg" alt="Contact Us Background" fill style={{ objectFit: 'cover' }} sizes="100vw" priority />
        </ParallaxImage>
        <div className={styles.pageHeaderOverlay}></div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={itemFadeUp}
          className={styles.headerContent}
        >
          <TextReveal className={styles.title}>Contact Us</TextReveal>
          <p className={styles.subtitle}>Let's discuss your next big project.</p>
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
              Whether you're ready to start a project or just exploring your options, our team of experts is here to answer your questions.
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
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}><Mail size={24} /></div>
                <div>
                  <h3>Email</h3>
                  <p>info@macquarieec.com</p>
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
            <form onSubmit={handleSubmit} className={styles.form}>
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
                    placeholder="+61 400 000 000"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="service">Service of Interest</label>
                <select
                  id="service"
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                >
                  <option value="">Select a Service</option>
                  <option value="commercial">Commercial Construction</option>
                  <option value="industrial">Industrial Facilities</option>
                  <option value="residential">Luxury Residential</option>
                  <option value="infrastructure">Civil Infrastructure</option>
                  <option value="other">Other</option>
                </select>
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
                ></textarea>
              </div>

              <Button type="submit" variant="primary" className={styles.submitBtn}>
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className={styles.mapSection}>
        <ParallaxImage className={styles.mapBg} speed={0.05}>
          <OptimizedImage src="/images/contact/cta-contacts.jpg" alt="Map Location Background" fill style={{ objectFit: 'cover' }} sizes="100vw" />
        </ParallaxImage>
        <div className={styles.mapDarkOverlay}></div>
        <div className={styles.mapPlaceholder}>
          <div className={styles.mapOverlay}>
            <MapPin size={48} className={styles.mapPin} />
            <p>Interactive Map Integration</p>
            <span>Sydney, NSW</span>
          </div>
        </div>
      </section>
    </div>
  );
}
