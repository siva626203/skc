import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useSelector,useDispatch } from "react-redux";
import { logout } from "../features/user";
function Dashboard(){
    const dispatch=useDispatch();
    const navigate=useNavigate()
    
    let currentUser=useSelector(state=>state.user.value)
    const [user,setUser]=useState();
   const usercheck=()=>setUser(currentUser.username);
    const check=()=>{
        usercheck()
        console.log("login Status");
        if(currentUser.username==null){
        navigate("/login")
        }
    }
    const Logout=()=>{
        dispatch(logout())
    navigate("/login")
    }
useEffect(()=>{
    check();
   
    console.log(user)
},[]);
    return(
        <div>
           <h1> dashboard</h1>
           <h1>Welcome to Our {currentUser.username}</h1>
           <Button onClick={Logout}>Logout</Button>
        </div>
    )
}
export default Dashboard;