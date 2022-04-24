import React from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

import Button from "../Components/Button";
import Panel from "../Components/Panel";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    height: 100%;
    width: 100%;
`

export default function Home() {
    let navigate = useNavigate()
    return (
        <Wrapper>
            <Panel>
                <Button onClick={() => navigate('/add_seller')} >Tambah Penjual</Button>
                <Button onClick={() => navigate('/add_product')} >Tambah Produk</Button>
                <Button onClick={() => navigate('/list_products')} >Daftar Produk</Button>
                <Button onClick={() => navigate('/search_product')} >Cari Produk</Button>
            </Panel>
        </Wrapper>

    )
}
