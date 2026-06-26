import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Featured Projects',
  description: 'Explore our portfolio of landmark developments, from high-clearance industrial logistics hubs to ultra-luxury oceanfront residences and critical civil infrastructure.',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
