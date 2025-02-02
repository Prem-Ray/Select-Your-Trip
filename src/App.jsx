import './App.css'
import Data from './Data'
import Tours from './component/Tours'
import { useState } from 'react'

function App() {

  const [tours,setTours]=useState(Data) ;

  function removetour(id){
    const newTours = tours.filter((tour)=>{
      return tour.id !== id ;
    }) ;
    setTours(newTours) ;
  }

  if(tours.length===0){
    return(
      <div className='refresh flex flex-col gap-7 justify-center items-center h-[100vh] w-[100vw] bg-slate-500 font-bold text-xl'>
        <h2 className='font-bold text-[1.8rem]'>No Tours Left</h2>
        <button onClick={()=>setTours(Data)} className='bg-slate-400 mt-[18px] py-[10px] px-[80px] border border-solid rounded-lg text-red-500 cursor-pointer font-bold hover:bg-red-600 hover:text-slate-400 hover:scale-[1.1]'>Refresh</button>
      </div>
    )
  }

  return (
    <div className='App'>
        <Tours tours={tours} removetour={removetour}></Tours>
    </div>
  )
}

export default App
