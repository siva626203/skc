import { React,Fragment, useEffect, useState } from 'react'
import Footer from '../component/footer';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/user';
import axios from 'axios'

function Home(){
  const dispatch=useDispatch()
    const user=useSelector(state => state.user.value);
    return<Fragment>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <button onClick={dispatch(logout())}></button>
    <Footer/>
    </Fragment>
}
export default Home;