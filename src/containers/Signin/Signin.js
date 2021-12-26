import { Button, Card, FormControl, IconButton, Input, InputAdornment, InputLabel, Typography } from '@mui/material';
import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { Box } from '@mui/system';
import InputText from '../../components/UI/input/InputText';
import { login } from '../../actions/actions';
//Icons
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import GoogleIcon from '@mui/icons-material/Google';
// import FacebookIcon from '@mui/icons-material/Facebook';

const Signin = () => {
    const [values, setValues] = useState({
        email:'',
        password: '',
        showPassword: false,
        error:''
    });
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
    setValues({
        ...values,
        showPassword: !values.showPassword,
    });
    };
    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };
    const userLogin = (e) => {
    e.preventDefault();
    // :'laki@gmail.com' & 12345
    const user = {
        email:values.email,
        password:values.password
    }
    dispatch(login(user));
    }
    if(auth.authenticate){
        return <Navigate to="/" />
    }

    return (
        <div>
            <Layout>
                <Box item xs={12}  textAlign='center' sx={{display: "flex", justifyContent:'center',alignItems:'center', minHeight:'91vh' }} >
                    <Card sx={{ width: 300 ,minHeight: 350 , padding: '30px 0px 0px 0px' , backgroundColor:'#eeeeee', display:'block' }}>
                        <Typography
                            sx={{
                                fontWeight:700,
                                fontSize:'30px',
                                padding:'0px 0px 0px 0px',
                            }}
                        >
                            Sign In
                        </Typography>
                        <div style={{margin:'20px'}} >
                            <InputText 
                                InputId='signup-email'
                                lable='Email'
                                type='email'
                                value={values.email}
                                onChange={handleChange('email')}
                                variant='standard'
                            />
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                                <InputLabel htmlFor="signin-password">Password</InputLabel>
                                <Input
                                    id="signin-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                        <div style={{display: "flex", justifyContent:'end',alignItems:'center',margin:'25px'}} >
                            <Button
                                variant='outlined'
                                sx={{margin:'0px 5px'}}

                            >
                                reset
                            </Button>
                            <Button
                                variant='contained'
                                sx={{margin:'0 5px'}}
                                onClick={userLogin}
                            >
                                SignIn
                            </Button>
                        </div>
                        {/* <div style={{display: "flex" ,justifyContent:'space-evenly',alignItems:'center',margin:'33px 20px 20px 20px'}} >
                            <IconButton><GoogleIcon color='primary' /></IconButton>
                            <IconButton><FacebookIcon color='primary' /></IconButton>
                        </div> */}
                    </Card>
                </Box>
            </Layout>
        </div>
    );
};

export default Signin;