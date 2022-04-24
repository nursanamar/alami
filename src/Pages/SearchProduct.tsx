import React, { useEffect, useState } from 'react'

import InputText from '../Components/InputText'
import Panel from '../Components/Panel'
import ProductTable from '../Components/ProductTable';
import { useAppDispatch, useAppSelector } from '../Store/hooks';
import { fetchProducts, searchProduct } from '../Store/productSlice';

export default function SearchProduct() {

  const products = useAppSelector(state => state.product.filteredProducts)
  const [query, setQuery] = useState("")
  const dispatch = useAppDispatch()

  useEffect(() => {
    const getAll = () => {
      dispatch(fetchProducts())
    }
    getAll()
  }, [dispatch])

  const filter = async () => {
    await dispatch(searchProduct(query))
  }

  return (
    <Panel>
      <h2>Cari Produk</h2>
      <div style={{ width: "50rem", marginBottom: "2rem" }}>
        <InputText value={query} onChange={(e) => {
          setQuery(e.target.value)
          filter()
        }} placeholder='Cari' label='Cari Produk' />
      </div>
      <div style={{ width: "50rem" }}>
        <ProductTable products={products} />
      </div>
    </Panel>
  )
}
