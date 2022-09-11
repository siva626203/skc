import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
function Dashboard(){
    const navigate=useNavigate()
    let token=JSON.parse(localStorage.getItem("Name"))
    const [user,setUser]=useState(token);
   
    const check=()=>{
        console.log(token)
        console.log("login Status");
        if(user==null){
        navigate("*")
        }
    }
useEffect(()=>{
    check();
    
    console.log(user)
},[]);
    return(
        <div>
           <h1> dashboard</h1>
           <Button>Logout</Button>
        </div>
    )
}
export default Dashboard;