import './App.css'
import "./index.css";
import Card from './components/Card.jsx';


function Menu() {


  return (
    <>
    <h1 className='text-center' >Menu</h1>
<div className='mx-[5%]' >
<div className='grid grid-cols-3 gap-x-[2%] gap-y-[5%] ' >
<Card/>
<Card/>
<Card/>     
<Card/>
<Card/>
<Card/>  
<Card/>
<Card/>
<Card/> 
<Card/>
<Card/>
<Card/> 
</div>

</div>

    </>
  )
}

export default Menu