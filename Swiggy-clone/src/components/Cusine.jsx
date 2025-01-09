import React, { useEffect, useState } from 'react'
import burgir from '../assets/images/burgir.png'

const Cusine = () => {
  const[cusine,Setcusine] =useState()
  const [scroll,setscroll] = useState(0)

  async function getData() {
    
    try {
      
      const response = await  fetch("")
     
      const data =  await response.json();

      console.log(data)

     
    } catch (error) {
      
    }

  }
  useEffect(() => {
   
    getData()
  
   
  }, [])

  function handleNext(){
    setscroll((prev)=>prev +200)
  }
  
  function handlePrevious()
  {
    setscroll((prev)=>Math.max(0,prev-200))
  }
  return ( 
    
    <div className='w-[80%] mx-auto mt-1'>

        {/* upper section  */}
        <div>helllo</div>


        {/* lower items section map  */}

        <div></div>

    </div>
  
  )
}

export default Cusine
