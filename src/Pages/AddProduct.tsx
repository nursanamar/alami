import React, {useState} from 'react'
import Panel from '../Components/Panel'
import InputText from '../Components/InputText'
import Button from '../Components/Button'
import { Product, SellerApiResponse } from '../Types'
import { useAppDispatch } from '../Store/hooks'
import { createProduct } from '../Store/productSlice'
import Alert from '../Components/Alert'

export default function AddProduct() {

  const [sellerId,setSellerId] = useState("")
  const [name,setName] = useState("")
  const [unit,setUnit] = useState("")
  const [price,setPrice] = useState("")
  const [description,setDescription] = useState("")

  const dispatch = useAppDispatch()
  
  const reset = () => {
    setSellerId("")
    setName("")
    setUnit("")
    setPrice("")
    setDescription("")
  }

  const submit = async () => {
    let product: Product = {
      nama: name,
      deskripsi: description,
      hargaSatuan: parseInt(price),
      satuan: unit,
      sellerId: parseInt(sellerId),
    }

    await dispatch(createProduct(product)).unwrap().then(res => {
      Alert.fire({
        icon: "success",
        text: "Produk berhasil ditambahkan"
      })

      reset()
    }).catch((err: SellerApiResponse) => {
      Alert.fire({
        icon: "error",
        text: `${err.message}`
      })
    })
  }

  return (
    <Panel>
        <h2>Tambah Produk</h2>
        <div style={{width: "40rem"}}>
        <InputText value={sellerId} onChange={(e) => setSellerId(e.target.value)} label='ID Penjual' placeholder='ID Penjual' />
        <InputText value={name} onChange={(e) => setName(e.target.value)} label='Nama' placeholder='Nama' />
        <InputText value={unit} onChange={(e) => setUnit(e.target.value)} label='Satuan' placeholder='Satuan' />
        <InputText value={price} onChange={(e) => setPrice(e.target.value)} type="number" label='Harga Satuan' placeholder='Harga Satuan' />
        <InputText value={description} onChange={(e) => setDescription(e.target.value)} label='Deskripsi' placeholder='Deskripsi' />
      </div>
      <div>
        <Button onClick={submit}>Simpan</Button>
      </div>
    </Panel>
  )
}
