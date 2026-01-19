// types/cart.ts
export interface Product {
  id: number;
  name: string;
  price: string;
  priceId: string;
  image: string;
  available: boolean;
  date: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isInitialized: boolean;
}
