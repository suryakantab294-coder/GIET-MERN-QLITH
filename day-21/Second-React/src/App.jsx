
import './App.css'
import ChildA from './ChildA'
import Card from './Card';

let data=[
  {
    title:"Cat title",
    desc:"This is cat",
    img:"https://tse3.mm.bing.net/th/id/OIP.cvg_MdgYsY9-fKD5eV8SpgHaE5?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    title:"Tiger title",
    desc:"This is tiger",
    img:""
  },
  {
    title:"Cow Title",
    desc:"This is cow",
    img:""
  },
  {
    title:"Dog Title",
    desc:"This is dog",
    img:""
  }
]

function App() {
  let a =20;
  

  return (

      <div>
       {/* <h1 className='bg-red-900'>H1 tag</h1>
        <ChildA num={a} str={"Hiii....Hello.."} isPassed={true} arr = {[1,2,3,4,5]}/> */}
        <div className='max-w-7xl mx-auto flex flex-wrap'>

        {
          data.map((obj) => (
            <Card obj={obj}/>
          ))
        }
        </div>
        </div>
       
  )
}

export default App
