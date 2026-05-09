import { Game, Offer } from './types';

export const GAMES: Game[] = [
  {
    id: '1',
    name: 'Personalized AI',
    slug: 'personalized-ai',
    category: 'Consumer AI',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=450',
  },
  {
    id: '2',
    name: 'Enterprise AI',
    slug: 'enterprise-ai',
    category: 'Business AI',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4628c9757?auto=format&fit=crop&q=80&w=800&h=450',
  },
  {
    id: '3',
    name: 'Neural Analytics',
    slug: 'neural-analytics',
    category: 'Data Science',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbda48658a7d?auto=format&fit=crop&q=80&w=800&h=450',
  },
  {
    id: '4',
    name: 'Vision Core',
    slug: 'vision-core',
    category: 'Computer Vision',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=450',
  },
  {
    id: '5',
    name: 'Auto-GPT Nodes',
    slug: 'auto-gpt',
    category: 'Automation',
    imageUrl: 'https://images.unsplash.com/photo-1676299081847-c0326a0333d5?auto=format&fit=crop&q=80&w=800&h=450',
  },
];

export const OFFERS: Offer[] = [
  {
    id: 'o1',
    gameId: '1',
    title: 'Custom LLM Training [10B Parameters]',
    price: 450.00,
    currency: 'USD',
    type: 'Model Training',
    deliveryTime: '48 hours',
    seller: {
      name: 'AI_Nexus',
      rating: 4.9,
      reviews: 125,
      isOnline: true,
    },
  },
  {
    id: 'o2',
    gameId: '2',
    title: 'Enterprise API Bridge [Unlimited Calls]',
    price: 899.99,
    currency: 'USD',
    type: 'Integration',
    deliveryTime: '2 hours',
    seller: {
      name: 'CloudCore_Dev',
      rating: 5.0,
      reviews: 210,
      isOnline: true,
    },
  },
  {
    id: 'o3',
    gameId: '3',
    title: 'Predictive Sales Model - Retail v2',
    price: 250.00,
    currency: 'USD',
    type: 'Pre-trained',
    deliveryTime: 'Instant',
    seller: {
      name: 'DataArchitect',
      rating: 4.8,
      reviews: 89,
      isOnline: false,
    },
  },
  {
    id: 'o4',
    gameId: '1',
    title: 'Voice Synthesis - Ultra Realistic',
    price: 150.00,
    currency: 'USD',
    type: 'Audio AI',
    deliveryTime: 'Instant',
    seller: {
      name: 'AudioGen_Elite',
      rating: 4.9,
      reviews: 340,
      isOnline: true,
    },
  },
];
