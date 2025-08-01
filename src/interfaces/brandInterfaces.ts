export interface BrandResponse {
  results: number
  metadata: Metadata
  data: Brand[]
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
  nextPage: number
}

export interface Brand {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}
