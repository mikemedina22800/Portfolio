import { useRef, useState } from "react";
import { Canvas, useFrame } from '@react-three/fiber'
import LowPolyMan from "./models/Scene";
import { Dodecahedron, Icosahedron, Octahedron } from "@react-three/drei";

const App = () => {
  const [sections, setSections] = useState([true, false, false])
  const meshRef = useRef()
  let i = 0

  const Mesh = ({shape}) => {
    useFrame((state, delta) => {
      i+=1
      if (i <= 240) {
        meshRef.current.rotation.y += 10*delta;
      } else {
        meshRef.current.rotation.x += delta; 
        meshRef.current.rotation.y += delta;
      }
    })

    return (
      <>
        {shape === 1 &&
         <Octahedron ref={meshRef} scale={2}>
            <meshStandardMaterial wireframe color={'red'}/>
         </Octahedron>
         }
        {shape === 2 &&
          <Dodecahedron ref={meshRef} scale={2}>
            <meshStandardMaterial wireframe color={'orange'}/>
          </Dodecahedron>
         }
        {shape === 3 &&
          <Icosahedron ref={meshRef} scale={2}>
            <meshStandardMaterial wireframe color={'yellow'}/>
          </Icosahedron>
         }
      </>
    )
  }

  const Model = ({shape}) => {
    return (
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />        
        <Mesh shape={shape}/>
      </Canvas>
    )
  }

  return (
    <div className="root">
      <h1 className="text-center text-7xl leading-none mb-20 header">PAUSED</h1>
      <div className="w-full h-full flex justify-between">
        <div className="h-full flex flex-col justify-between w-[45%]">
          <div onClick={() => {setSections([true, false, false])}} className="section-button about-me">
            <h1>ABOUT ME</h1>
          </div>
          <div onClick={() => {setSections([false, true, false])}} className="section-button works">
            <h1>WORKS</h1>
          </div>      
          <div onClick={() => {setSections([false, false, true])}} className="section-button contacts">
            <h1>CONTACTS</h1>
          </div>
          <div className="section-button unpause">
            <h1>UNPAUSE</h1>
          </div>
          <div className="flex items-center w-full gap-10">
            <div className="section-button reset">
              <h1>RESET</h1>
            </div>
          </div>
        </div>
        {sections[0] === true && 
          <div className="section about-me !cursor-auto">
            <div className="w-full h-48">
              <Model shape={1}/>
            </div>
            <p>
              Welcome. I'm a React developer passionate about crafting dynamic and user-centric web experiences. 
              With a knack for translating design into seamless functionality, I thrive in the realm of front-end development.
              Armed with expertise in React.js, I specialize in building poished and interactive user interfaces, and can make your app come to life with stunning 3d visuals.
              From creating responsive layouts to integrating APIs, I'm committed to delivering polished, high-performance applications that exceed expectations.
              Constantly honing my skills and staying abreast of emerging trends, I'm dedicated to leveraging the latest tools and best practices to drive innovation and efficiency in every project I undertake.
              Let's collaborate to bring your ideas to life and leave a lasting impression on the digital landscape!
            </p>
            {/*<LowPolyMan/>*/}
          </div>
        }
        {sections[1] === true && 
          <div className="section works !cursor-auto">
            <div className="w-full h-48">
              <Model shape={2}/>
            </div>
            <p>

            </p>
          </div>
        }
        {sections[2] === true && 
          <div className="section contacts !cursor-auto">
            <div className="w-full h-48">
              <Model shape={3}/>
            </div>
            <p>
              
            </p>
          </div>
        }
      </div>
    </div>
  );
}

export default App
