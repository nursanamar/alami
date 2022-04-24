import '@testing-library/jest-dom'

import React from 'react'

import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, screen } from "../test-utils"
import AddSeller from "../Pages/AddSeller";
import userEvent from '@testing-library/user-event';


const server = setupServer(

    rest.post('https://dev.dummy-api.alamisharia.co.id/addSeller', (req, res, ctx) => {
        // respond using a mocked JSON body
        
        if (req.body.nama === "Toko Sukses") {
            return res(ctx.json({
                "code": 200,
                "status": "Success",
                "message": "",
                "data": {
                    "id": 4,
                    "nama": "Toko Agus",
                    "kota": "Depok"
                }
            }))
        }else{
            return res(ctx.json({
                "code": 408,
                "status": "Error",
                "message": "Invalid Input",
                "data": null
            }))
        }
    }),
)


beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())

describe("add seller page", () => {
    it('renders without crashing', () => {
        render(<AddSeller />)
    });

    it("Has input name, city, and save button", () => {
        render(<AddSeller />)
        expect(screen.getByPlaceholderText("Nama")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Kota")).toBeInTheDocument()
        expect(screen.getByText("Simpan")).toBeInTheDocument()
    })

    it("Show success alert when input success", async () => {
        render(<AddSeller />)
        
        fireEvent.change(screen.getByPlaceholderText("Nama"),{
            target: {value: "Toko Sukses"}
        })

        fireEvent.change(screen.getByPlaceholderText("Kota"),{
            target: {value: "Depok"}
        })

        userEvent.click(screen.getByText("Simpan"))

        await screen.findByRole("dialog")

        
        expect(screen.getByText(/Seller ID: \d+/)).toBeInTheDocument()

        userEvent.click(screen.getByText("OK"))

    })

    it("Show error alert when input failed", async () => {

       
        render(<AddSeller />)
        
        fireEvent.change(screen.getByPlaceholderText("Nama"),{
            target: {value: "Toko gagal"}
        })

        fireEvent.change(screen.getByPlaceholderText("Kota"),{
            target: {value: "Depok"}
        })

        userEvent.click(screen.getByText("Simpan"))

        await screen.findByRole("dialog")

        expect(screen.getByText("Invalid Input")).toBeInTheDocument()

        userEvent.click(screen.getByText("OK"))

    })
})