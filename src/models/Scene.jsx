import React from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const LowPolyMan = () => {
  const { nodes, materials } = useGLTF('./scene-transformed.glb')
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />        
      <mesh geometry={nodes.BASE_Low_Poly_Man_0.geometry} material={materials['Scene_-_Root']} rotation={[-Math.PI / 2, 0, 0]}>
        <meshStandardMaterial wireframe color={'red'}/>
      </mesh>
    </Canvas>
  )
}

useGLTF.preload('./scene-transformed.glb')

export default LowPolyMan
