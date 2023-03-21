

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const data = [
    {
        name : "Product 1",
        id: 1
    },
    {
        name : "Product 2",
        id: 2
    },
    {
        name : "Product 3",
        id: 3
    },
    {
        name : "Product 4",
        id: 4
    }
]

const initialState = {
    productList: [],
    isLoading: false,
    isFailed: false
}

export const callProductListApi = createAsyncThunk('/product/callproductlistapi', async function(){
    try {
        const apiResponse = await fetch('https://dummyjson.com/products')
        const result = await apiResponse.json()
        return result
    }catch(error){
        console.log(error)
    }
})


const productSlice = createSlice({
    name: 'product',
    initialState,
/*     reducers : {
        getProducts : (state) => {
            state.productList = data
        }
    }, */
    extraReducers : {
        [callProductListApi.pending] : (state) => {state.isLoading = true},
        [callProductListApi.fulfilled] : (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.productList = action.payload.products;
        },
        [callProductListApi.rejected] : (state) => {
            state.isLoading = false
            state.isFailed = true
        }
    }
})

export const { getProducts } = productSlice.actions;

export default productSlice.reducer;

