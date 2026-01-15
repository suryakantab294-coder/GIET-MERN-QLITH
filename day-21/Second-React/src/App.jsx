
import './App.css'
import ChildA from './ChildA'

function App() {
  let a =20;
  

  return (

      <div>
       <h1 className='bg-red-900'>H1 tag</h1>
        <ChildA num={a} str={"Hiii....Hello.."} isPassed={true} arr = {[1,2,3,4,5]}/>
        </div>
       
  )
}

export default App
