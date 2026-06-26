import { Building2, Home as HomeIcon, Hammer, Factory, Truck, HardHat, Briefcase, Zap, Wrench, ShieldCheck, LucideIcon } from 'lucide-react';

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  bgImage: string;
  features: ServiceFeature[];
}

export const servicesData: ServiceData[] = [
  {
    id: 'residential',
    title: 'Residential Construction',
    description: 'We engineer and construct premium residential properties with uncompromising attention to detail.',
    Icon: HomeIcon,
    bgImage: '/images/services/luxury-residential.jpg',
    features: [
      { title: 'New Home Construction', description: 'End-to-end building services for custom and project homes.' },
      { title: 'Knockdown & Rebuild', description: 'Complete demolition and reconstruction to maximize your land value.' },
      { title: 'Dual Occupancy & Duplex Construction', description: 'Specialized building for multi-family residential developments.' },
      { title: 'Granny Flats & Secondary Dwellings', description: 'Designing and building comfortable, compliant secondary homes.' },
      { title: 'Custom Home Building', description: 'Architecturally designed homes tailored specifically to your lifestyle.' }
    ]
  },
  {
    id: 'renovations',
    title: 'Renovations & Extensions',
    description: 'Architecting transformative structural additions and premium modernization for existing properties.',
    Icon: Hammer,
    bgImage: '/images/services/interior-fit-outs.jpg',
    features: [
      { title: 'Home Renovations & Refurbishments', description: 'Comprehensive interior and exterior upgrades to modernize your space.' },
      { title: 'Room Additions & Extensions', description: 'Expanding your living areas with seamless structural additions.' },
      { title: 'Kitchen & Bathroom Renovations', description: 'Premium fit-outs with high-quality fixtures, plumbing, and cabinetry.' },
      { title: 'Second Storey Additions', description: 'Building upward to dramatically increase your home\'s footprint.' },
      { title: 'Structural Alterations', description: 'Safe removal or modification of load-bearing walls and supports.' },
      { title: 'Framing & Structural Carpentry', description: 'Robust timber and steel framework for lasting durability.' },
      { title: 'Doors, Windows & Architraves', description: 'Precision installation of premium joinery and finishings.' },
      { title: 'Decking & Pergolas', description: 'Creating beautiful and weather-resistant outdoor living spaces.' },
      { title: 'Cabinetry & Joinery', description: 'Custom-built storage solutions and architectural woodwork.' }
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Construction',
    description: 'Developing high-performance, architecturally striking commercial spaces that drive business growth.',
    Icon: Building2,
    bgImage: '/images/services/commercial-construction.jpg',
    features: [
      { title: 'Office Fit-Outs & Refurbishments', description: 'Modern workspace designs optimized for productivity and flow.' },
      { title: 'Retail & Hospitality Construction', description: 'Engaging customer-facing environments for shops and restaurants.' },
      { title: 'Childcare & Educational Facilities', description: 'Safe, compliant, and inspiring spaces for learning and development.' },
      { title: 'Medical & Healthcare Fit-Outs', description: 'Specialized clinics featuring sterile environments and complex plumbing.' },
      { title: 'Strata & Apartment Buildings', description: 'Multi-level commercial residential complexes built to exact standards.' }
    ]
  },
  {
    id: 'industrial',
    title: 'Industrial Construction',
    description: 'Delivering heavy-duty, highly optimized industrial facilities engineered for maximum operational efficiency.',
    Icon: Factory,
    bgImage: '/images/services/industrial-facilities.jpg',
    features: [
      { title: 'Warehouse & Storage Facilities', description: 'Large-scale, high-clearance structures built for maximum capacity.' },
      { title: 'Factory & Manufacturing Builds', description: 'Heavy-duty flooring and structural designs for industrial machinery.' },
      { title: 'Logistics & Distribution Centres', description: 'Optimized layouts for freight movement and automated systems.' },
      { title: 'Industrial Shed Construction', description: 'Durable steel structures for equipment housing and rural applications.' },
      { title: 'Workshop & Depot Construction', description: 'Functional operational bases equipped with heavy power infrastructure.' }
    ]
  },
  {
    id: 'infrastructure',
    title: 'Civil & Infrastructure',
    description: 'Executing critical, large-scale civil projects that form the resilient backbone of our communities.',
    Icon: Truck,
    bgImage: '/images/services/civil-infrastructure.jpg',
    features: [
      { title: 'Site Preparation & Earthworks', description: 'Extensive excavation, leveling, and soil stabilization services.' },
      { title: 'Road & Pavement Construction', description: 'Asphalt and concrete works for private and public roadways.' },
      { title: 'Drainage & Stormwater Systems', description: 'Complex trenching and pipe-laying for water management.' },
      { title: 'Retaining Walls & Excavation', description: 'Structural soil retention using concrete, stone, and steel.' },
      { title: 'Subdivision Works & Land Development', description: 'Complete utility routing and division for new housing estates.' }
    ]
  },
  {
    id: 'structural',
    title: 'Structural Engineering',
    description: 'Elite structural design and technical engineering solutions to support the most complex builds.',
    Icon: HardHat,
    bgImage: '/images/services/design-planning.jpg',
    features: [
      { title: 'Structural Design & Documentation', description: 'Comprehensive blueprints, load calculations, and technical drafting.' },
      { title: 'Footing & Foundation Systems', description: 'Engineered slabs, piers, and piles to support massive structural loads.' },
      { title: 'Concrete & Steel Structures', description: 'Heavy-duty structural framework for mid-to-high-rise construction.' },
      { title: 'Structural Inspections & Assessments', description: 'Thorough evaluations to ensure building integrity and safety compliance.' },
      { title: 'Underpinning & Remediation Works', description: 'Foundation strengthening and structural repairs for aging buildings.' },
      { title: 'Roofing Carpentry & Trusses', description: 'Complex timber and steel roof structures engineered for extreme weather.' },
      { title: 'Formwork Carpentry', description: 'Precision concrete molding systems for complex architectural designs.' }
    ]
  },
  {
    id: 'management',
    title: 'Project & Construction Management',
    description: 'Comprehensive, end-to-end strategic oversight ensuring seamless and on-time project delivery.',
    Icon: Briefcase,
    bgImage: '/images/services/facility-maintenance.jpg',
    features: [
      { title: 'Design & Construct (D&C) Delivery', description: 'A streamlined approach combining the design and building phases into one contract.' },
      { title: 'Feasibility Studies & Cost Planning', description: 'Accurate budget forecasting and viability assessments before breaking ground.' },
      { title: 'Contract Administration', description: 'Rigorous management of all legal, financial, and operational contracts.' },
      { title: 'Site Supervision & Safety Management', description: 'Full-time on-site leadership ensuring strict adherence to WHS regulations.' },
      { title: 'Scheduling & Program Management', description: 'Critical path mapping to ensure project milestones are delivered on time.' }
    ]
  },
  {
    id: 'electrical',
    title: 'Mechanical & Electrical Services',
    description: 'Integrated building services and engineering for every project type.',
    Icon: Zap,
    bgImage: '/images/services/electrical-systems.jpg',
    features: [
      { title: 'HVAC Installation & Maintenance', description: 'Commercial heating, ventilation, and advanced air conditioning systems.' },
      { title: 'Electrical Fit-Outs & Switchboard Works', description: 'Complete wiring, circuit design, and heavy-duty switchboard installations.' },
      { title: 'Electrical Engineering Design & Documentation', description: 'Detailed schematics for complex building power requirements.' },
      { title: 'Load Analysis & Power Distribution Design', description: 'Ensuring balanced and safe electricity distribution across large facilities.' },
      { title: 'Lighting Design & Energy Modelling', description: 'Energy-efficient LED layouts and automated smart-lighting controls.' },
      { title: 'High Voltage & Low Voltage Systems', description: 'Specialized installation for both heavy machinery and sensitive electronics.' },
      { title: 'Compliance & Certification (AS/NZS 3000)', description: 'Strict adherence to all Australian electrical safety standards.' },
      { title: 'Electrical Inspections & Defect Reports', description: 'Comprehensive testing, tagging, and safety auditing.' },
      { title: 'Plumbing & Hydraulic Services', description: 'Commercial water supply, sanitary drainage, and gas fitting.' },
      { title: 'Fire Protection & Detection Systems', description: 'Sprinkler networks, smoke alarms, and emergency evacuation systems.' },
      { title: 'Solar & Energy Efficiency Solutions', description: 'Renewable energy integration to lower commercial operating costs.' }
    ]
  },
  {
    id: 'demolition',
    title: 'Demolition & Site Works',
    description: 'Licensed, safe, and efficient site preparation and controlled structural demolition.',
    Icon: Wrench,
    bgImage: '/images/services/hydraulic-services.jpg',
    features: [
      { title: 'Full & Partial Demolition', description: 'Controlled dismantling of entire structures or specific interior sections.' },
      { title: 'Asbestos Removal & Disposal', description: 'Licensed, safe extraction and disposal of hazardous asbestos materials.' },
      { title: 'Concrete Cutting & Drilling', description: 'Precision cutting for new plumbing, electrical routing, or structural changes.' },
      { title: 'Site Clearing & Waste Management', description: 'Environmentally responsible sorting, recycling, and removal of debris.' },
      { title: 'Hazardous Material Removal', description: 'Safe abatement of lead, mold, and other dangerous building materials.' }
    ]
  },
  {
    id: 'consultancy',
    title: 'Consultancy & Advisory',
    description: 'Authoritative strategic advising, compliance, and auditing to navigate complex regulatory landscapes.',
    Icon: ShieldCheck,
    bgImage: '/images/services/safety-consulting.jpg',
    features: [
      { title: 'Development Feasibility & Due Diligence', description: 'In-depth analysis of zoning laws, land constraints, and profitability.' },
      { title: 'Building Code & Compliance Advice', description: 'Ensuring your designs meet every requirement of the National Construction Code.' },
      { title: 'Tender Preparation & Procurement', description: 'Managing the bidding process to secure the best materials and contractors.' },
      { title: 'Construction Audits & Reporting', description: 'Independent financial and operational reviews throughout the project lifecycle.' },
      { title: 'Defect Inspections & Expert Reports', description: 'Professional post-construction auditing for legal and quality assurance purposes.' }
    ]
  }
];
