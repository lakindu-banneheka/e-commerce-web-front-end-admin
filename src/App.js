import React, { useEffect } from 'react';
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './containers/Home/Home';
import Signin from './containers/Signin/Signin';
import Signup from './containers/Signup/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLogedIn } from './actions/auth.action'; 

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  useEffect(() => {
    if(!auth.authenticate){
        dispatch(isUserLogedIn());
    }
}, [dispatch,auth])



  return (
    <div className="App">
     {/* <Router> */}
       <Routes>
          <Route path="/" element={<PrivateRoute />} >
            <Route path="" element={<Home />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
       </Routes>
     {/* </Router> */}
    </div>
  );
}

export default App;
