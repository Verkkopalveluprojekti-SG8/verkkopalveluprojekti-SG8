import React from "react"
import { PRODUCTS } from "../../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Ryyst</h1>
            </div>

            <div className="products">
                {PRODUCTS.filter((products) =>product.id >= 1 && products.id <= 3).map((product) => (
                <Product data={product} />
                ))}
            </div>
        </div>
        );
};