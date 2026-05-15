export interface AIProduct {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  category: 'Personalized AI' | 'Enterprise AI';
  rating: number;
}

export interface StudyCase {
  id: string;
  title: string;
  author: string;
  imageUrl: string;
  type: string;
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  imageUrl: string;
  excerpt: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
