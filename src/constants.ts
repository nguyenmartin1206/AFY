import { AIProduct, StudyCase, NewsItem } from './types';
import autoDsWalmartImg from './assets/images/Autodsquangcao.png';

export const PRODUCTS: AIProduct[] = [
  {
    id: '1',
    name: 'Auto Dropshipping Walmart',
    slug: 'autods-walmart',
    category: 'Personalized AI',
    imageUrl: autoDsWalmartImg,
    rating: 5,
  },
  {
    id: '2',
    name: 'Inventory Management System AI',
    slug: 'inventory-management-system',
    category: 'Enterprise AI',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800&h=450',
    rating: 5,
  },
  {
    id: '3',
    name: 'Real Estate Security AI',
    slug: 'real-estate-security-ai',
    category: 'Personalized AI',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800&h=450',
    rating: 5,
  },
];

export const STUDY_CASES: StudyCase[] = [
  {
    id: 's1',
    title: 'Optimizing Supply Chain with Neural Nets',
    author: 'Dr. Sarah Chen',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    type: 'Logistics',
    description: 'How AI reduced operational costs by 30% for Global Logistics Corp.',
  },
  {
    id: 's2',
    title: 'The Future of Ethical AI Implementation',
    author: 'James Wilson',
    imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=800',
    type: 'Ethics',
    description: 'A comprehensive study on bias mitigation in large language models.',
  },
  {
    id: 's3',
    title: 'Conversational AI in Customer Support',
    author: 'Elena Rodriguez',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    type: 'Customer Experience',
    description: 'Case study on scaling support to 1M users with zero latency.',
  },
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: 'Nexus AI Launches Quantum Neural Core',
    date: 'May 10, 2026',
    category: 'Technology',
    imageUrl: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800',
    excerpt: 'A breakthrough in quantum computing allows for 1000x faster AI model training.',
  },
  {
    id: 'n2',
    title: 'Global Ethics Summit: New Standards for AI',
    date: 'May 08, 2026',
    category: 'Society',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Nexus AI joins international leaders to establish safe framework for neural integration.',
  },
  {
    id: 'n3',
    title: 'Personalized AI Reaches 10M Active Users',
    date: 'May 05, 2026',
    category: 'Growth',
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Our consumer-grade neural modules are now the most adopted AI tools globally.',
  },
];
