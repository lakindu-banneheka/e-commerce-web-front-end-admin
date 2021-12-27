import { Button, Card, FormControl, IconButton, Input, InputAdornment, InputLabel, Typography } from '@mui/material';
import React from 'react';
import Layout from '../../components/layout/Layout';
import { Box } from '@mui/system';
import InputText from '../../components/UI/input/InputText';
//Icons
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { signup } from '../../actions/user.action';
// import GoogleIcon from '@mui/icons-material/Google';
// import FacebookIcon from '@mui/icons-material/Facebook';

const Signup = () => {
    const [values, setValues] = React.useState({
        firstName:'',
        lastName:'',
        email:'',
        // contactNumber:'',
        // profilePicture:'',
        password: '',
        error:'',
        showPassword: false,
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

      const handdleUserRegister = (e) => {
        e.preventDefault();
        const user = {
            firstName:values.firstName,
            lastName:values.lastName,
            email:values.email,
            password:values.password
        }
        dispatch(signup(user));
      }


      if(auth.authenticate){
        return <Navigate to="/" />
    }
    //   const screenHeight = window.innerHeight;
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
                            Sign Up
                        </Typography>
                        <div style={{margin:'20px'}} >
                            <InputText 
                                InputId='firstName'
                                lable='First Name'
                                type='text'
                                variant='standard'
                                value={values.firstName}
                                onChange={handleChange('firstName')}
                            />
                            <InputText 
                                InputId='lastNmae'
                                lable='last Name'
                                type='text'
                                variant='standard'
                                value={values.lastName}
                                onChange={handleChange('lastName')}
                            />
                            <InputText 
                                InputId='email'
                                lable='Email'
                                type='email'
                                variant='standard'
                                value={values.email}
                                onChange={handleChange('email')}
                            />
                            {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" >
                                <InputLabel htmlFor="username">User Name</InputLabel>
                                <Input
                                    id="signin-username"
                                    type='username'
                                    value={values.username}
                                    onChange={handleChange('username')}
                                />
                            </FormControl> */}
                            {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" >
                                <InputLabel htmlFor="contactNumber">Contact Number</InputLabel>
                                <Input
                                    id="signin-contactNumber"
                                    type='contactNumber'
                                    value={values.contactNumber}
                                    onChange={handleChange('contactNumber')}
                                />
                            </FormControl> */}
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
                                cancel
                            </Button>
                            <Button
                                variant='contained'
                                sx={{margin:'0 5px'}}
                                onClick={handdleUserRegister}
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

export default Signup;