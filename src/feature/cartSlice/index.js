import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { payload } = action;
            const { id } = payload;
            let cpyCurrentCartItems = [...state.cartItems]
            const index = cpyCurrentCartItems.findIndex((item) => item.id === id)
            if (index === -1) {
                cpyCurrentCartItems.push({
                    ...payload,
                    quantity: 1
                })
            } else {
                cpyCurrentCartItems[index] = {
                    ...cpyCurrentCartItems[index],
                    quantity: cpyCurrentCartItems[index].quantity + 1
                }
            }
            state.cartItems = cpyCurrentCartItems;
        },

        removeFromCart: (state, action) => {
            const { payload } = action;
            let updateCurrentCartItemsAfterRemove = [...state.cartItems]
            const indexOfRemovedTtem = updateCurrentCartItemsAfterRemove.findIndex(item => item.id === payload.id)

            const { quantity } = updateCurrentCartItemsAfterRemove[indexOfRemovedTtem]
            if (quantity <= 1) {
                updateCurrentCartItemsAfterRemove =
                    updateCurrentCartItemsAfterRemove.filter(item => item.id !== payload.id)
            } else {
                updateCurrentCartItemsAfterRemove[indexOfRemovedTtem] = {
                    ...updateCurrentCartItemsAfterRemove[indexOfRemovedTtem],
                    quantity: updateCurrentCartItemsAfterRemove[indexOfRemovedTtem].quantity - 1,
                }
            }

            state.cartItems = updateCurrentCartItemsAfterRemove
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer