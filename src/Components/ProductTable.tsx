import React from 'react'
import styled from "styled-components";
import { Product } from "../Types";

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`

const Td = styled.td`
    
`

const Th = styled.th`
    border-bottom: 1px solid #f2f2f2;
    padding-top: 21px;
    padding-bottom: 21px;
`

const Tbody = styled.tbody`
    
`

const Tr = styled.tr`
    border-bottom: 1px solid #f2f2f2;
`

interface ProductTableProps {
    products: Product[]
}

export default function ProductTable(props: ProductTableProps) {
    return (
        <Table>
            <thead>
                <Th style={{ width: "25%" }}>Nama</Th>
                <Th style={{ width: "15%" }}>Satuan</Th>
                <Th style={{ width: "20%" }}>Harga Satuan</Th>
                <Th style={{ width: "40%" }}>Deskripsi</Th>
            </thead>
            <Tbody>
                {
                    props.products.map((value,key) => {
                        return (
                            <Tr key={key}>
                                <Td style={{ textAlign: "center" }}>{value.nama}</Td>
                                <Td style={{ textAlign: "center" }}>{value.satuan}</Td>
                                <Td style={{ textAlign: "center" }}>{value.hargaSatuan}</Td>
                                <Td>{value.deskripsi}</Td>
                            </Tr>
                        )
                    })
                }
            </Tbody>
        </Table>
    )
}
