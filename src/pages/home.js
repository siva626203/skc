import { React,Fragment, useEffect, useState } from 'react'
import Footer from '../component/footer';
import { useSelector, useDispatch } from 'react-redux';
import { logout,login } from '../features/user';
import axios from 'axios'

function Home(){
  const dispatch=useDispatch()
  const [name,setUsername]=useState()
  const [email,setEmail]=useState()
  const age=18;
    const user=useSelector(state => state.user.value);
    const register=useSelector(state=>state.register.value)
    return<Fragment>      
      
    </Fragment>
}
export default Home;