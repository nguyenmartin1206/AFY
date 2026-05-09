export interface Game {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  category: string;
}

export interface Offer {
  id: string;
  gameId: string;
  title: string;
  price: number;
  currency: string;
  seller: {
    name: string;
    rating: number;
    reviews: number;
    isOnline: boolean;
  };
  type: string; // Flexible for AI categories
  deliveryTime: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}
