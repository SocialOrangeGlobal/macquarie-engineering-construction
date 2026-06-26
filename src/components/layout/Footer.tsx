import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';
import Logo from '../ui/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Company Info */}
          <div className={styles.col}>
            <div className={styles.logoWrapper}>
              <Logo />
            </div>
            <p className={styles.description}>
              From Concept to Completion — Built with Precision, Delivered with Integrity.
            </p>
            {/* <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Facebook"><FacebookIcon size={20} /></a>
              <a href="#" className={styles.socialLink} aria-label="Twitter"><TwitterIcon size={20} /></a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn"><LinkedinIcon size={20} /></a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h4 className={styles.heading}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li><Link href="/" className={styles.link}>Home</Link></li>
              <li><Link href="/about" className={styles.link}>About Us</Link></li>
              <li><Link href="/projects" className={styles.link}>Featured Projects</Link></li>
              <li><Link href="/contact" className={styles.link}>Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.col}>
            <h4 className={styles.heading}>Services</h4>
            <ul className={styles.linksList}>
              <li><Link href="/services#residential" className={styles.link}>Residential Construction</Link></li>
              <li><Link href="/services#commercial" className={styles.link}>Commercial Construction</Link></li>
              <li><Link href="/services#industrial" className={styles.link}>Industrial Construction</Link></li>
              <li><Link href="/services#infrastructure" className={styles.link}>Civil & Infrastructure</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.heading}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <MapPin size={20} className={styles.contactIcon} />
                <span>L 10 100 St Georges Tce, Perth WA 6000</span>
              </li>
              <li className={styles.contactItem}>
                <Phone size={20} className={styles.contactIcon} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className={styles.contactItem}>
                <Mail size={20} className={styles.contactIcon} />
                <span>info@macquarieec.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {currentYear} Macquarie Engineering & Construction. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
            <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
