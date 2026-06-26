import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Engage with Macquarie Engineering & Construction experts. Contact our Perth, WA headquarters to discuss how we can bring your visionary project to life.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
