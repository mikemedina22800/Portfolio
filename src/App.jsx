import { useRef, useState } from "react";
import { Canvas, useFrame } from '@react-three/fiber'

const App = () => {

  const [sections, setSections] = useState([true, false, false])
  const meshRef = useRef()

  const BoxMesh = ({color}) => {
    useFrame(() => {meshRef.current.rotation.x += .002, meshRef.current.rotation.y += .002})
    return (
      <mesh ref={meshRef} scale={3}>
        <boxGeometry/>
        <meshStandardMaterial color={color}/>
      </mesh>
    )
  }

  const Box = ({color}) => {
    return (
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />        
        <BoxMesh color={color}/>
      </Canvas>
    )
  }

  return (
    <div className="root">
      <h1 className="text-center text-7xl leading-none mb-20">PAUSE MENU</h1>
      <div className="w-full h-full flex justify-between">
        <div className="h-full flex flex-col justify-between w-[45%]">
          <div onClick={() => {setSections([true, false, false])}} className="section about-me">
            <h1>ABOUT ME</h1>
          </div>
          <div onClick={() => {setSections([false, true, false])}} className="section works">
            <h1>WORKS</h1>
          </div>      
          <div onClick={() => {setSections([false, false, true])}} className="section contacts">
            <h1>CONTACTS</h1>
          </div>
          <div className="section resume">
            <h1>RESUME</h1>
          </div>
          <div className="flex items-center w-full gap-10">
            <div className="section reset">
              <h1>RESET</h1>
            </div>
          </div>
        </div>
        {sections[0] === true && 
          <div className="section-content about-me !cursor-auto">
            <div className="w-full h-48">
              <Box color={"red"}/>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nisi nesciunt sit nam rem exercitationem, quis dignissimos corporis eligendi? Laudantium numquam iste sapiente, vitae praesentium perferendis quia sunt labore corrupti?</p>
          </div>
        }
        {sections[1] === true && 
          <div className="section-content works !cursor-auto">
            <div className="w-full h-48">
              <Box color={"orange"}/>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nisi nesciunt sit nam rem exercitationem, quis dignissimos corporis eligendi? Laudantium numquam iste sapiente, vitae praesentium perferendis quia sunt labore corrupti?</p>
          </div>
        }
        {sections[2] === true && 
          <div className="section-content contacts !cursor-auto">
            <div className="w-full h-48">
              <Box color={"yellow"}/>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nisi nesciunt sit nam rem exercitationem, quis dignissimos corporis eligendi? Laudantium numquam iste sapiente, vitae praesentium perferendis quia sunt labore corrupti?</p>
          </div>
        }
      </div>
    </div>
  );
}

export default App
