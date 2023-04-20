import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";


export const Vahvat = () => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Ryyst</h1>
            </div>
            <div className="products">
                {PRODUCTS.filter((products) =>product.id >= 10 && products.id <= 12).map((product) => (
                <Product data={product} />
                ))}
            </div>
        </div>
    );
};
