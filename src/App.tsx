
import './index.css'
import logo from './assets/Onola.png'
function App() {


  return (
    <>
     <div className=' flex justify-center items-center h-screen'>
      <div className='flex flex-col max-w-[300px]  mx-auto justify-center items-center '>
      <img src={logo} alt=""  className='w-full flex object-cover object-center'/>
      <h1 className='text-3xl text-center mt-4'>Coming Soon...</h1>
     
      </div>
     </div>
    </>
  )
}

export default App
