import { useState } from 'react'
import rotate from './assets/rotate360.png'
import zoomOut from './assets/zoom-out.png'
import drag from './assets/drag.png'
import './App.css'
import Spline from '@splinetool/react-spline';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="spline" style={{width: "80vw", height:"80vh", border: "5px solid black", borderRadius: "5px"}} onMouseOver={()=>{document.getElementById("rotateIcon").style.visibility = "visible"}} onMouseLeave={()=>{document.getElementById("rotateIcon").style.visibility = "hidden"}}>
      <Spline scene="https://prod.spline.design/C4UHylOL9n9Wax63/scene.splinecode" style={{width: "80vw", height:"80vh"}}/>
    </div>
    <div id="rotateIcon" style={{visibility: "hidden", display: "flex", justifyContent: "flex-end"}}>
      <img src={rotate} alt="rotateIcon" style={{width: "5vw"}}/>
      <img src={zoomOut} alt="zoomOutIcon" style={{width: "5vw"}}/>
      <img src={drag} alt="dragIcon" style={{width: "5vw"}}/>
    </div>
    </>
  )
}

export default App
