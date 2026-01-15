import React from 'react'
import ChildB from './ChildB'

function ChildA(props) {
  return (
    <div>ChildA
        <br />
        String :{props.str} <br />
        Number :{props.num} <br />
        IspPassed :{props.isPassed.toString()} <br />
         Array Element 
         {
            props.arr.map((v,i) =>(
                <div>{v}</div>
            ))
         }
        <br />
        <ChildB num={props.num}/> <br />
       
    </div>
  )
}

export default ChildA