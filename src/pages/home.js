import { React,Fragment, useEffect, useState } from 'react'
import Footer from '../component/footer';
import { useSelector } from 'react-redux';
import axios from 'axios'
function Home(){
    const [posts, setPosts] = useState([]);

  
    const user=useSelector(state => state.user.value);
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const url1 = "https://jsonplaceholder.typicode.com/posts";
   
      
      const makePost=()=>{
        axios.post(url1,{
            title:"hellow siva",
            body:"this for axios post"
          }).then((res)=>{
            setPosts(res.data)
            console.log(res)
          })
      }
      axios.get(url).then((res)=>{
        setPosts(res.data)
      });
    
    return<Fragment>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <button onClick={makePost}>create post</button>
     <h1>Posts</h1>
      <h2>...are here</h2>
      <div>{posts.title}</div>
    <Footer/>
    </Fragment>
}
export default Home;