import React from 'react';
import { withRouter } from 'react-router-dom';
import { Cart } from "../../components";
import { store } from '../../redux/store';
import Client from 'shopify-buy';

const client = Client.buildClient({
    storefrontAccessToken: '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',
    domain: 'react-ecommerce-app.myshopify.com'
});

const HomePage = () => {
    const state = store.getState();
    store.dispatch({ type: 'CLIENT_CREATED', payload: client });
    
    client.product.fetchAll().then((res) => {
        store.dispatch({ type: 'PRODUCTS_FOUND', payload: res });
    });
    
    // client.checkout.create().then((res) => {
    //     store.dispatch({ type: 'CHECKOUT_FOUND', payload: res });
    // });
    // client.shop.fetchInfo().then((res) => {
    //     store.dispatch({ type: 'SHOP_FOUND', payload: res });
    // });

    const handleCartClose = () => {
        store.dispatch({ type: 'CLOSE_CART' });
    }
    const handleCartOpen = () => {
        store.dispatch({ type: 'OPEN_CART' });
    }

    const updateQuantityInCart = (lineItemId: any, quantity: any) => {
        const state = store.getState(); // state from redux store
        const checkoutId = state.cart.checkout.id
        const lineItemsToUpdate = [{ id: lineItemId, quantity: parseInt(quantity, 10) }]
        state.cart.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then((res: any) => {
            store.dispatch({ type: 'UPDATE_QUANTITY_IN_CART', payload: { checkout: res } });
        });
    }
    const removeLineItemInCart = (lineItemId: any) => {
        const state = store.getState(); // state from redux store
        const checkoutId = state.cart.checkout.id
        state.cart.client.checkout.removeLineItems(checkoutId, [lineItemId]).then((res: any) => {
            store.dispatch({ type: 'REMOVE_LINE_ITEM_IN_CART', payload: { checkout: res } });
        });
    }

    return (
        <div>
            <Cart
                checkout={state.cart.checkout}
                isCartOpen={state.cart.isCartOpen}
                handleCartClose={handleCartClose}
                updateQuantityInCart={updateQuantityInCart}
                removeLineItemInCart={removeLineItemInCart}
            />
        </div>
    )
}

export default withRouter(HomePage);