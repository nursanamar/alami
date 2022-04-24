import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home";
import AddSeller from "./AddSeller";
import AddProduct from "./AddProduct";
import ListProducts from "./ListProducts";
import SearchProduct from "./SearchProduct";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div style={{display: "flex", justifyContent: "center",alignItems: "center",minHeight: "100vh", backgroundColor: "#b6e4f0"}}>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/add_seller" element={<AddSeller />} />
                    <Route path="/add_product" element={<AddProduct />} />
                    <Route path="/list_products" element={<ListProducts />} />
                    <Route path="/search_product" element={<SearchProduct />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter