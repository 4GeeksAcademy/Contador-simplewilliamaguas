import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import SecondsCounter from './components/SecondsCounter';
let counter=0
setInterval(()=>{
  let digitOne=Math.floor((counter/1)%10)
  let digitTwo=Math.floor((counter/10)%10)
  let digitThree=Math.floor((counter/100)%10)
  let digitFour=Math.floor((counter/1000)%10)
  let digitFive=Math.floor((counter/10000)%10)
  let digitSix=Math.floor((counter/100000)%10)
  counter+=1
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <SecondsCounter one={digitOne} two={digitTwo} three={digitThree} four={digitFour} five={digitFive} six={digitSix}/>
    </React.StrictMode>,
  )
  
},1000)
