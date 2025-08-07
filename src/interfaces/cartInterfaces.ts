import type { Brand, Category, Subcategory } from "./productsInterfaces"

export interface CartResponse {
  status: string
  message: string
  numOfCartItems: number
  cartId: string
  data: Data
}

export interface CartValues {
  productId: string;
}

export interface vlauesQuntity {
  count: string;
  productId: string;
}

export interface ClearResponseCart {
    message: string
}

export interface Data {
  _id: string
  cartOwner: string
  products: Product[]
  createdAt: string
  updatedAt: string
  __v: number
  totalCartPrice: number
}

export interface Product {
  count: number
  _id: string
  product: Product2
  price: number
}

export interface Product2 {
  subcategory: Subcategory[]
  _id: string
  title: string
  quantity: number
  imageCover: string
  category: Category
  brand: Brand
  ratingsAverage: number
  id: string
}


export interface ResponsePayment {
  status: string
  session: Session
}

export interface Session {
  url: string
  success_url: string
  cancel_url: string
}
