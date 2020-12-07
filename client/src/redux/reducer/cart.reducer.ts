import { cartConstant } from "../constants";

const initState = {
    isCartOpen: false,
    checkout: {
        lineItems: [] as any[]
    },
    products: [] as any[],
    shop: {},
    client: {} as any
}

export function cart(state = initState, action: any) {
    switch (action.type) {
        case cartConstant.CLIENT_CREATED:
            return { ...state, client: action.payload }
        case cartConstant.PRODUCTS_FOUND:
            return { ...state, products: action.payload }
        case cartConstant.CHECKOUT_FOUND:
            return { ...state, checkout: action.payload }
        case cartConstant.SHOP_FOUND:
            return { ...state, shop: action.payload }
        case cartConstant.ADD_VARIANT_TO_CART:
            return { ...state, isCartOpen: action.payload.isCartOpen, checkout: action.payload.checkout }
        case cartConstant.UPDATE_QUANTITY_IN_CART:
            return { ...state, checkout: action.payload.checkout }
        case cartConstant.REMOVE_LINE_ITEM_IN_CART:
            return { ...state, checkout: action.payload.checkout }
        case cartConstant.OPEN_CART:
            return { ...state, isCartOpen: true }
        case cartConstant.CLOSE_CART:
            return { ...state, isCartOpen: false }
        default:
            return state
    }
}