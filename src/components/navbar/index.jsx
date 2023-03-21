import { Stack, Typography, Box, IconButton } from "@mui/material";
import { Home, ShoppingBag} from "@mui/icons-material"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
    const {cartItems } = useSelector(state => state.cart)

    const navigate= useNavigate()
    return (
        <Stack
            direction={"row"}
            sx={{
                padding: "10px 15px",
                border: "1px solid #d7cccc",
                borderTop: "Opx"
            }}
        >
            <Box
                sx={{
                    flex: "1",
                    display: "flex"
                }}
            >
                <IconButton onClick={() => navigate('/')} size= "large">
                    <Home/>
                </IconButton>
            </Box>
            <Box
                sx={{
                    position: 'relative'
                }}
            >
                <Typography
                    sx = {{
                        position: 'absolute',
                        right: '3px',
                        color: 'red'
                    }}
                >{cartItems && cartItems.length}</Typography>
                <IconButton onClick={() => navigate('/cart')} >
                    <ShoppingBag/>
                </IconButton>
            </Box>

        </Stack>
    )
}

export default Navbar