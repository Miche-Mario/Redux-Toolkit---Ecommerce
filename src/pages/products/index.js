import { Button, Stack, Box, Typography } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { callProductListApi, getProducts } from "../../feature/productSlice"
import { addToCart } from "../../feature/cartSlice"
function Products() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(callProductListApi())
    }, [])

    const { productList, isLoading } = useSelector(state => state.product)

    const { cartItems } = useSelector(state => state.cart)
    const handleAddToCArt = (currentItem) => {
        dispatch(addToCart(currentItem))
    }

    if (isLoading) {
        return <Typography>Loading... Please wait</Typography>
    }
    return (
        <Stack
            sx={{
                display: "grid",
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '40px'
            }}
        >
            {
                productList && productList.length > 0 ?
                    productList.map(item => (
                        <Box key={item.id}
                            sx={{
                                border: '1px solid #d7cccc',
                                borderRadius: "4px"
                            }}
                        >
                            <Box
                                sx={{
                                    height: "200px",
                                    padding: "10px",
                                    borderBottom: '1px solid #d7cccc'
                                }}
                            >
                                <img src={item.thumbnail}
                                    style={{
                                        height: '100%',
                                        width: '100%'
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    padding: '10px'
                                }}
                            >
                                <Typography
                                    sx={{
                                        flex: '1',
                                        color: "6f6c6c",
                                        fontSize: "14px",
                                        display: 'flex'
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: "6f6c6c",
                                        fontSize: "14px",
                                    }}
                                >
                                    {item.price}
                                </Typography>

                            </Box>
                            <Box
                                sx={{
                                    padding: "10px"
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "#000",
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        whiteSpace: "nowrap",
                                        textOverflow: "ellipsis",
                                        overflow: 'hidden',
                                        width: '400px'
                                    }}
                                >{item.description}</Typography>
                            </Box>
                            <Box
                                sx={{
                                    padding: '10px',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}
                            >
                                <Button
                                    sx={{
                                        padding: '8px 25px',
                                        border: '1px solid #000'
                                    }}
                                    disabled={cartItems && cartItems.length > 0 ?
                                        cartItems.map(cartItem => cartItem.id).indexOf(item.id) > -1
                                        : false
                                    }
                                    onClick={() => handleAddToCArt(item)}>Add to Cart

                                </Button>
                            </Box>
                        </Box>

                    ))
                    :
                    <Box>
                        <Typography>No products</Typography>
                    </Box>

            }
            <Typography>Products</Typography>
        </Stack>
    )
}

export default Products