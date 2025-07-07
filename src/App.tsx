
import './index.css'
import logo from './assets/Onola.png'
import { useState } from 'react'
import { Skeleton } from './components/ui/skeleton'

function App() {
  const [imgLoaded, setImgLoaded] = useState(false)


  return (
    <>
     <div className=' flex justify-center items-center h-screen'>
      <div className='flex flex-col max-w-[300px]  mx-auto justify-center items-center '>
      {!imgLoaded && (
        <Skeleton className="w-full h-[200px] rounded-md mb-2" />
      )}
      <img
        src={logo}
        alt="Onola logo"
        className={`w-full flex object-cover object-center ${imgLoaded ? '' : 'hidden'}`}
        onLoad={() => setImgLoaded(true)}
      />
      <h1 className='text-3xl text-center mt-4'>Coming Soon...</h1>
     
      </div>
     </div>
    </>
  )
}

export default App
