import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import VertexShader from './VertexShader'
import FragmentShader from './FragmentShader'
import * as THREE from 'three'


export default function Field () {

    const width = window.innerWidth

    const height = window.innerHeight

    const mesh = useRef(null)

    const uniforms = useMemo(() => {

        return {
  
          uTime: { value: 0 },
  
          uResolution: { value: new THREE.Vector2(width, height) },
  
        };
  
    }, [])

    useFrame((state) => {

        const { clock } = state;

        if(mesh.current) {

            mesh.current.material.uniforms.uTime.value = clock.elapsedTime

        }

    });

    return(

        <mesh
        
        ref={mesh}
        
        scale={1.5}
        
        position={[0,0,0]}>

            <circleGeometry attach="geometry" args={[5,100]} />

            <shaderMaterial 
            
            vertexShader={VertexShader} 
            
            fragmentShader={FragmentShader} 
            
            uniforms={uniforms} 
            
            />
    
        </mesh>
    
    )

}