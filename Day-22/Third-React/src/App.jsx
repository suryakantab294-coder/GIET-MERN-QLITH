
// import { useState } from 'react'
import './App.css'
import Register from './Register'
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Product from './components/Product';
import Nav from './components/Nav';
import CheckUseEffect from './components/CheckUseEffect';
import Fetch from './components/Fetch';

function App() {
  // let [a,setA] = useState(0);
  // console.log("render")
  return (
    // <>
      
    //     Hello
    //     <br />
    //     a value :{a}
    //     <br />
    //     <button onClick={() => setA(a+1)}>INCREMENT</button>
    //     <br />
    //     <Register/>
      
        
    // </>
    <div>
      <Nav/>
    <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/dash' element={<Dashboard/>}>

<Route path='product/:userid' element={<Product/>}></Route>

</Route>
 

      </Routes>
      <CheckUseEffect/>
      <Fetch/>
      </div>
  )
}

export default App

