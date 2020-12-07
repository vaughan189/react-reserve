import React from 'react'

export default function VariantSelector(props: any) {
    return (
        <select
            className="Product__option"
            name={props.option.name}
            key={props.option.name}
            onChange={props.handleOptionChange}
        >
            {props.option.values.map((value: any) => {
                return (
                    <option value={value} key={`${props.option.name}-${value}`}>{`${value}`}</option>
                )
            })}
        </select>
    )
}
