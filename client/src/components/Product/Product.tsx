import React, { useState } from 'react'
import { VariantSelector } from '../index'

export default function Product(props: any) {

    let defaultOptionValues: any = {};
    props.product.options.forEach((selector: any) => {
        defaultOptionValues[selector.name] = selector.values[0].value;
    });

    const [selectedOptions, setSelectedOptions] = useState("");
    const [selectedVariant, setSelectedVariant] = useState("");
    const [selectedVariantImage, setSelectedVariantImage] = useState("");
    const [selectedVariantQuantity, setSelectedVariantQuantity] = useState("");
    setSelectedOptions(defaultOptionValues)

    const findImage = (images: any, variantId: any) => {
        const primary = images[0];
        const image = images.filter(function (image: any) {
            return image.variant_ids.includes(variantId);
        }
        )[0];

        return (image || primary).src;
    }

    const handleOptionChange = (event: any) => {
        const target = event.target
        setSelectedOptions(defaultOptionValues)
        let selectedOption: any = selectedOptions;
        selectedOption[target.name] = target.value;

        const selectedVariant = props.client.product.helpers.variantForOptions(props.product, selectedOptions);

        setSelectedVariant(selectedVariant);
        setSelectedVariantImage(selectedVariant.attrs.image);
    }

    const handleQuantityChange = (event: any) => {
        setSelectedVariantQuantity(event.target.value)
    }

    let variantImage = selectedVariantImage || props.product.images[0]
    let variant = selectedVariant || props.product.variants[0]
    let variantQuantity = selectedVariantQuantity || 1
    let variantSelectors = props.product.options.map((option: any) => {
        return (
            <VariantSelector
                handleOptionChange={handleOptionChange}
                key={option.id.toString()}
                option={option}
            />
        );
    });
    return (
        <div className="Product">
            {props.product.images.length ? <img src={variantImage.src} alt={`${props.product.title} product shot`} /> : null}
            <h5 className="Product__title">{props.product.title}</h5>
            <span className="Product__price">${variant.price}</span>
            {variantSelectors}
            <label className="Product__option">
                Quantity
          <input min="1" type="number" defaultValue={variantQuantity} onChange={handleQuantityChange}></input>
            </label>
            <button className="Product__buy button" onClick={() => props.addVariantToCart(variant.id, variantQuantity)}>Add to Cart</button>
        </div>
    )
}
