
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Home from './components/Home/Home'
import Titles from './components/Titles/Titles'

function App() {

  const [remaining,setRemaining]=useState(20)

  const [courseName,setCourseName]=useState([]);
  const[timeHour,setTimeHour]=useState(0)
  const [prices,setPrices]=useState(0)

  const handleCourseName=(name,time,price)=>{
    const isExist=courseName.find(blog=>blog === name)
    if(isExist){
      return 
    }
    const newCourseName=[...courseName,name];
    setCourseName(newCourseName)
// Time
const newHour=timeHour+time;
if(newHour > 20){
  alert("Error")
  return ;
}
else{
  console.log(timeHour);
  const newTime=timeHour+time
    setTimeHour(newTime)
    setRemaining(remaining-time)
}
  
    // Price
    const newPrice=prices+price;
    setPrices(newPrice)
    // Remaining
    // 
    // const newRemaining=remain+remaining;
    // setRemaining(timeHour-newRemaining)

  }


  return (
    <>
      
      <div className="py-1 bg-[#F3F3F3]">
      <div className='max-w-[1400px]  mx-auto'>
      <Home></Home>
      <div className="flex justify-between mb-7">
        <Blogs handleCourseName={handleCourseName} ></Blogs>
        <Titles courseName={courseName} timeHour={timeHour} prices={prices} remaining={remaining}></Titles>
      </div>
      </div>
      </div>
      
      
      
    </>
  )
}

export default App
