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
      
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <h1>{register.cname}</h1>
        <input type="text" name={name} onChange={e=>setUsername(e.target.value)}/>
        <input type="email" name={email} onChange={e=>setEmail(e.target.value)}/>
        
        <button onClick={()=>dispatch(login({name,age,email}))}>Login</button>;
        <button onClick={()=>dispatch(logout())}>logout</button>
        
      
    <Footer/>
    </Fragment>
}
export default Home;