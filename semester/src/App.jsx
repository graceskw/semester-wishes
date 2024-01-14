import { useState } from 'react'
import rotate from './assets/rotate360.png'
import zoomOut from './assets/zoom-out.png'
import drag from './assets/drag.png'
import help from './assets/help.png'
import touchscreen from './assets/touchscreen.png'
import trackpad from './assets/trackpad.png'
import mouse from './assets/mouse.png'
import './App.css'
import Spline from '@splinetool/react-spline';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="help" class="mobile" style={{display: "flex", justifyContent: "space-between"}}>
      <div id="instructions-mobile" style={{visibility: "hidden", display: "flex", justifyContent: "space-between"}}>
        <div id="touchscreen" style={{display: "flex"}}>
          <img src={touchscreen} alt="touchscreenIcon" style={{width: "5vw", height: "5vw", margin: "5px"}}/>
          <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-between"}}>
            <p style={{fontSize: "1vw", margin: "1px"}}>Drag with 2 fingers to rotate</p>
            <p style={{fontSize: "1vw", margin: "1px"}}>Drag with 3 fingers to pan</p>
            <p style={{fontSize: "1vw", margin: "1px"}}>Pinch to zoom</p>
          </div>
        </div>       
      </div>

      <img src={help} alt="helpIcon" style={{width: "5vw", height: "5vw"}} onClick={()=>{document.getElementById("instructions").style.visibility = "visible"; document.getElementById("instructions-mobile").style.visibility = "visible"}}/>
    </div>


    <div className="spline" style={{width: "80vw", height:"80vh", border: "5px solid black", borderRadius: "5px"}} onMouseOver={()=>{document.getElementById("instructions").style.visibility = "visible"}} onMouseLeave={()=>{document.getElementById("instructions").style.visibility = "hidden"}}>
      <Spline scene="https://prod.spline.design/C4UHylOL9n9Wax63/scene.splinecode" style={{width: "80vw", height:"80vh"}}/>
    </div>

    <p style={{fontSize: "1vw", margin: "1px"}}>Long press/click the pouch for a surprise!</p>

    <div id="instructions" style={{visibility: "hidden", display: "flex", justifyContent: "space-between"}}>
      <div id="trackpad" style={{display: "flex"}}>
        <img src={trackpad} alt="trackpadIcon" style={{width: "5vw", height: "5vw", margin: "5px"}}/>
        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-between"}}>
          <p style={{fontSize: "1vw", margin: "1px"}}>Drag to rotate</p>
          <p style={{fontSize: "1vw", margin: "1px"}}>Ctrl+ Drag or Cmd+Drag to pan</p>
          <p style={{fontSize: "1vw", margin: "1px"}}>Pinch to zoom</p>
        </div>
      </div>

      <div id="mouse" style={{display: "flex"}}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "space-between"}}>
          <p style={{fontSize: "1vw", margin: "1px"}}>Left click+Drag to rotate</p>
          <p style={{fontSize: "1vw", margin: "1px"}}>Right click+Drag to pan</p>
          <p style={{fontSize: "1vw", margin: "1px"}}>Scroll to zoom</p>
        </div>
        <img src={mouse} alt="mouseIcon" style={{width: "5vw", height: "5vw", margin: "5px"}}/>
      </div>           
    </div>
    </>
  )
}

export default App
