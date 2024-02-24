import './App.css'
import { Canvas } from '@react-three/fiber'
import Portal from './Components/Portal'
import Planets from './Components/Planets';
import { OrbitControls, useProgress } from '@react-three/drei';
import Exp from './Exp';
import { useEffect, useState } from 'react';
import './toggle.css'
import metaSvg from '../Meta24.svg'
function App() {
  const [explore3D, setExplore3D] = useState(false)
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [showCheck, setShowCheck] = useState(false)

  const { loaded } = useProgress()
  useEffect(() => {
    console.log(loaded);
    if (loaded >= 14) {
      setShowCheck(true)
    }
  }, [loaded])
  return (

    <>
      {
        !showCheck &&
        <div className='loader-container'>
          <img src={metaSvg} alt="Loading" className='loader-svg' />
        </div>
      }
      {showCheck &&
        <div className='toggle-div'>
          <label className="label">
            <div className="toggle">
              <input className="toggle-state" type="checkbox" name="check" value="check" checked={explore3D} onChange={(event) => {
                setExplore3D(event.target.checked)
              }} />
              <div className="indicator"></div>
            </div>
            <div className="label-text">Explore 3D</div>
            <div className="label-text">To register, Click the portal</div>
          </label>
        </div>

      }

      <Canvas>
        <Exp explore3D={explore3D} isMouseDown={isMouseDown} />
      </Canvas>
    </>

  )
}

export default App




