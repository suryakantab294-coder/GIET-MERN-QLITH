import React, { useEffect ,useState } from 'react'
// import { useParams } from 'react-router'

function CheckUseEffect() {
    let [count,setcount]=useState(0);
    let [total,setTotal]=useState(0);
    useEffect(()=>{
        console.log("Use Effect Called")
    },[]);// it will execute at every render [ CASE1 ]
    // },[count]);// it will execute when count value changes [ CASE2 ]
    // },[]);// it will execute only once when the component is mounted [ CASE3 ]

    useEffect(()=>{
        console.log("it will execute based on the dependencies")
    }),[count,total];// it will execute when any of the dependency value changes

  return (
    <div>
        Count:{count}
        <br />
        <button onClick={() => setcount(count + 1)}>Increment</button>
        <br />
        Total:{total}
        <br />
        <button onClick={()=>setTotal(total+1)}>Increment Total</button>
    </div>
  )
}

export default CheckUseEffect