import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Fetch() {
    let [data,setdata]=useState([]);

    async function getdata(){
        // let res=await fetch('https://jsonplaceholder.typicode.com/posts');
        // let data=await res.json();
        // setdata(data)
        let res= await axios.get('https://jsonplaceholder.typicode.com/posts');
        setdata(res.data);
    }

    useEffect(()=>{
        getdata()
    },[])

    console.log("data:",data)
    return (
    <div>Fetch</div>
  )
}

export default Fetch