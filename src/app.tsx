import { Canvas } from "@react-three/fiber"
import './App.css'
import Field from "./field/Field"

function App() {

  return (

    <div className='container'>

      <Canvas 
      
      camera={{

        fov: 45,

        aspect: window.innerWidth / window.innerHeight,

        near: 0.1,

        far: 1000,
        
        position: [0.0, 0.0, 20.0]
      
      }}
      
      >

        <Field />

      </Canvas>

    </div>

  )

}

export default App
