import React from 'react';
import {AppBar, Toolbar,Typography,Box,Button} from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector ,useDispatch } from 'react-redux';
import { signout } from '../../actions/auth.action';
// import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const routeStyle = {
        color:'#fff',
        textDecorationLine:'none'
    };
    const logout = () => {
        dispatch(signout);
    }
    const renderLoggedInLinks = () => {
        return(
                <div>
                    <Button color="inherit" onClick={logout} >Signout</Button>
                </div>
        );
    };
    // <Link to='/' style={routeStyle}></Link>
    const renderNonLoggedInLinks = () => {
        return(
                <div>
                    <Button color="inherit"><Link to='/signin' style={routeStyle}>{" Signin"}</Link></Button>
                    <Button color="inherit"><Link to='/signup' style={routeStyle}>{" Signup"}</Link></Button>
                </div>
        );
    }
    return (
        <div >
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{backgroundColor:'#424242', minHeight:'65px',boxShadow:'none'}} >
                    <Toolbar>
                        {/* <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton> */}
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link to='/' style={routeStyle} >
                                Admin Dashboard
                            </Link>
                        </Typography>        
                        {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks() }
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Header;