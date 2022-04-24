import { createSlice, PayloadAction, createAsyncThunk, ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { Product, AppState, Seller } from "../Types";
import { getProducts, addSeller, addProduct, getProductsBySellerId } from "../Api/product";



const InitialState: AppState = {
    products: [],
    filteredProducts: [],
    isLoading: false
}



export const productSlice = createSlice({
    name: "product",
    initialState: InitialState,
    reducers: {
        productLoaded: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload
        }
    },
    extraReducers: (builder: ActionReducerMapBuilder<AppState>) => {

        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true
        })

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload as Product[]
            state.filteredProducts = action.payload as Product[]
            state.isLoading = false
        })

        builder.addCase(createSeller.fulfilled, (state) => {
            state.isLoading = false
        })

        builder.addCase(createSeller.rejected, (state) => {
            state.isLoading = false
        })

        builder.addCase(createSeller.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(createProduct.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(createProduct.rejected, (state) => {
            state.isLoading = false
        })

        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.products.push(action.payload)
            state.isLoading = false
        })

        builder.addCase(filterProductById.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(filterProductById.rejected, (state) => {
            state.isLoading = false
        })

        builder.addCase(filterProductById.fulfilled, (state, action) => {
            state.filteredProducts = action.payload
            state.isLoading = false
        })

        builder.addCase(searchProduct.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(searchProduct.rejected, (state) => {
            state.isLoading = false
            state.filteredProducts = []
        })

        builder.addCase(searchProduct.fulfilled, (state, action) => {
            state.filteredProducts = action.payload
            state.isLoading = false
        })
    }
})

export const createProduct = createAsyncThunk(
    'product/addProduct',
    async (product: Product, { rejectWithValue }) => {
        let res = await addProduct(product)
        if (res.code === 200) {
            return res.data
        } else {
            return rejectWithValue(res)
        }
    }
)

export const fetchProducts = createAsyncThunk(
    'product/fetch',
    async () => {
        let res = await getProducts()
        if (res.code === 200) {
            return res.data
        }
    }
)

export const createSeller = createAsyncThunk(
    'product/addSeller',
    async (seller: Seller, { rejectWithValue }) => {
        let res = await addSeller(seller)
        if (res.code === 200) {
            return res.data
        } else {
            return rejectWithValue(res)
        }
    }
)

export const filterProductById = createAsyncThunk(
    "product/bySellerId",
    async (id: number, { rejectWithValue }) => {
        let res = await getProductsBySellerId(id)
        if (res.code === 200) {
            return res.data
        } else {
            return rejectWithValue(res)
        }
    }
)

export const searchProduct = createAsyncThunk(
    "product/search",
    async (query: string, { rejectWithValue }) => {
        let res = await getProducts(query)
        if (res.code === 200) {
            return res.data
        } else {
            return rejectWithValue(res)
        }
    }
)

export const { productLoaded } = productSlice.actions

export default productSlice.reducer