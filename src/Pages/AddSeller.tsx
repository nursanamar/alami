import React, {useState} from 'react'

import Panel from "../Components/Panel";
import InputText from "../Components/InputText";
import Button from '../Components/Button';
import Alert from '../Components/Alert';
import { Seller, SellerApiResponse } from '../Types';
import { useAppDispatch } from '../Store/hooks';
import { createSeller } from '../Store/productSlice';

export default function AddSeller() {

  const [name,setName] = useState("")
  const [city,setCity] = useState("")
  const dispatch = useAppDispatch()

  const submit = async () => {
    let seller: Seller = {
      nama: name,
      kota: city
    }

    await dispatch(createSeller(seller)).unwrap().then(res => {
      Alert.fire({
        icon: "success",
        text: `Seller ID: ${res.id}`
      })
      setName("")
      setCity("")
    }).catch((err: SellerApiResponse) => {
      Alert.fire({
        icon: "error",
        text: `${err.message}`
      })
    })
  }

  return (
    <Panel>
      <h2>Tambah Penjual</h2>
      <div style={{width: "40rem"}}>
        <InputText onChange={(e) => setName(e.target.value)} value={name} label='Nama' placeholder='Nama' />
        <InputText onChange={(e) => setCity(e.target.value)} value={city} label='Kota' placeholder='Kota' />
      </div>
      <div>
        <Button onClick={submit}>Simpan</Button>
      </div>
    </Panel>
  )
}
