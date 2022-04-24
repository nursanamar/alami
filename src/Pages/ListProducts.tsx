import React, {useState, useEffect} from 'react'

import { useAppDispatch, useAppSelector } from "../Store/hooks";
import InputText from '../Components/InputText'
import Panel from '../Components/Panel'
import Button from '../Components/Button';
import ProductTable from '../Components/ProductTable';
import { fetchProducts, filterProductById } from '../Store/productSlice';
import { ApiRespons } from '../Types';
import Alert from '../Components/Alert';

export default function ListProducts() {
    const products = useAppSelector((state) => state.product.filteredProducts)
    const [sellerId,setSellerId] = useState("")
    const dispatch = useAppDispatch()

    useEffect(() => {
        const getAll = () => {
            dispatch(fetchProducts())
        } 
        getAll()
    },[dispatch])

    const filter = async () => {
        if (!sellerId) {
            return
        }

        await dispatch(filterProductById(parseInt(sellerId))).unwrap().catch((err: ApiRespons) => {
            Alert.fire({
                icon: "error",
                text: `${err.message}`
            })
        })
    }

    return (
        <Panel>
            <h2>List Produk</h2>
            <div style={{ width: "50rem", marginBottom: "2rem" }}>
                <InputText value={sellerId} onChange={(e) => setSellerId(e.target.value)} label='Id Penjual' type="number" />
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button onClick={filter}>Filter</Button>
                </div>
            </div>
            <div style={{ width: "50rem" }}>
                <ProductTable products={products} />
            </div>
        </Panel>
    )
}
