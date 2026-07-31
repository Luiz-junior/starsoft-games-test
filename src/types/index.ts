export interface Product {
  id: number;
  name: string;
  description: string;
  price: string | number;
  image?: string;
  brand?: string;
  createdAt?: string;
}

export interface ProductsResponse {
  products: Product[];
  count: number;
}

export interface CartItem {
  id: number;
  name: string;
  description?: string;
  image?: string;
  price: number;
  quantity: number;
}
