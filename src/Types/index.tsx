export type AppState = {
    products: Product[];
    filteredProducts: Product[];
    isLoading: boolean;
}

export type Seller = {
    id?:number;
    nama: string;
    kota: string;
}

export type Product = {
    id?: number;
    nama: string;
    satuan: string;
    hargaSatuan: number;
    sellerId: number;
    deskripsi: string;
}

export type ApiRespons = {
    code: number;
    status: string;
    message: string;
    data: any;
}

export interface ProductsApiResponse extends ApiRespons {
    data: Product[]
}

export interface ProductApiResponse extends ApiRespons {
    data: Product
}

export interface SellerApiResponse extends ApiRespons {
    data: Seller
}