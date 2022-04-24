import { ProductsApiResponse, Seller, SellerApiResponse,Product, ProductApiResponse } from "../Types";

// Proxied for local dev
// const BASE_URL = "http://localhost:8080/https://dev.dummy-api.alamisharia.co.id/"

const BASE_URL = "https://dev.dummy-api.alamisharia.co.id/"


export async function getProducts(keyword = ""): Promise<ProductsApiResponse> {
    return fetch(
        BASE_URL + `searchProductByKeyword?keyword=${keyword}`).then(res => res.json())
}

export async function getProductsBySellerId(id: number): Promise<ProductsApiResponse> {
    return fetch(
        BASE_URL + `listProductBySellerId?seller_id=${id}`).then(res => res.json())
}

export async function addProduct(product: Product) : Promise<ProductApiResponse> {
    return fetch(BASE_URL + 'addProduct',{
        method: "POST",
        body: JSON.stringify(product),
        headers: {
            "content-type": "application/json"
        }
    }).then(res => res.json())
}

export async function addSeller(seller:Seller) : Promise<SellerApiResponse> {
    return fetch(BASE_URL + 'addSeller',{
        method: "POST",
        body: JSON.stringify(seller),
        headers: {
            "content-type": "application/json"
        }
    }).then(res => res.json())
}
