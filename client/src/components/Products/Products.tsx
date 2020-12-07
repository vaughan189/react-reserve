import React from 'react'
import Product from '../Product/Product';

export default function Products(props: any) {

    let products = props.products.map((product: any) => {
        return (
            <Product
                addVariantToCart={props.addVariantToCart}
                client={props.client}
                key={product.id.toString()}
                product={product}
            />
        );
    });
    return (
        <div className="Product-wrapper">
            {products}
        </div>
    );
}
