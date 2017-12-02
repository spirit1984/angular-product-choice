export interface Product {
    id? : string,
    name: string,    
    details?: ProductDetails[]
}

export interface ProductDetails {
    id? : string,
    name: string,
    article: string,
    price: number,
    description? : string
}