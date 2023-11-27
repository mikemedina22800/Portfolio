import { useState, useEffect } from "react";

const Background = () => {
  const [randoms, setRandoms] = useState([]);
  const [randoms2, setRandoms2] = useState([]);

  const [length, setLength] = useState(window.innerWidth > 768 ? 500 : 250)
  
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setLength(500)
    } else {
      setLength(250)
    }
  }

  window.addEventListener('resize', handleResize)

  useEffect(() => {
    const randoms = Array.from({length}, () => ({
      top: Math.floor(Math.random() * 100) + '%',
      left: Math.floor(Math.random() * 100) + '%',
      scale: Math.random() + 1,
      duration: Math.random() * 5 + 5 + 's',
      delay: Math.random() * 5 + 's'
    }));
    const randoms2 = Array.from({length}, () => ({
      top: Math.floor(Math.random() * 100) + '%',
      left: Math.floor(Math.random() * 100) + '%',
      scale: Math.random() + 1,
      duration: Math.random() * 5 + 5 + 's',
      delay: Math.random() * 5 + 's'
    }));
    setRandoms(randoms)
    setRandoms2(randoms2)
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [length])

  return (
    <div className="-z-50 bg-black fixed h-screen w-screen pointer-events-none">
      <div>
        {randoms.map((random, i) => (
          <h1
            className='text-[lime] absolute opacity-0'
            style={{
              fontFamily: 'Minecraft',
              top: random.top,
              left: random.left,
              transform: `scale(${random.scale})`,
              animation: `animate ${random.duration} linear infinite`,
              animationDelay: random.delay
            }}
            key={i}
          >
            0
          </h1>
        ))}
        {randoms2.map((random, i) => (
          <h1
            className='text-[lime] absolute opacity-0'
            style={{
              fontFamily: 'Minecraft',
              top: random.top,
              left: random.left,
              transform: `scale(${random.scale})`,
              animation: `animate ${random.duration} linear infinite`,
              animationDelay: random.delay
            }}
            key={i}
          >
            1
          </h1>
        ))}
      </div>
    </div>
  );
}

export default Background;
