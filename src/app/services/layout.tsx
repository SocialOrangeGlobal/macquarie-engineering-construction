import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive construction and engineering services including commercial, residential, industrial builds, and civil infrastructure throughout Australia.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
