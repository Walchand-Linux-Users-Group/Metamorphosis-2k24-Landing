import './App.css'
import { Canvas } from '@react-three/fiber'
import { useProgress } from '@react-three/drei';
import Exp from './Exp';
import { useEffect, useState } from 'react';
import './toggle.css'
import Loading from './Components/Loading';
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
        <>
          <Loading />
        </>
      } 
      {showCheck &&
        <div className='toggle-div'>
          <label className="label">
            <div className="toggle">
              <input className="toggle-state" type="checkbox" name="check" value="check" checked={explore3D} onChange={(event) => {
                setExplore3D(event.target.checked)
              }} />
              <div className="indicator"></div>
              <div className="label-text">3D</div>
            </div>
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




