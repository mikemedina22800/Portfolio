import { useState, useEffect } from "react";

const Background = () => {
  const [randoms, setRandoms] = useState([]);
  const [randoms2, setRandoms2] = useState([]);

  useEffect(() => {
    const randoms = Array.from({ length: 500 }, () => ({
      top: Math.floor(Math.random() * 100) + '%',
      left: Math.floor(Math.random() * 100) + '%',
      scale: Math.random() + 1,
      duration: Math.random() * 5 + 5 + 's',
      delay: Math.random() * 5 + 's'
    }));
    setRandoms(randoms);
  }, []);

  useEffect(() => {
    const randoms = Array.from({ length: 500 }, () => ({
      top: Math.floor(Math.random() * 100) + '%',
      left: Math.floor(Math.random() * 100) + '%',
      scale: Math.random() + 1,
      duration: Math.random() * 5 + 5 + 's',
      delay: Math.random() * 5 + 's'
    }));
    setRandoms2(randoms);
  }, []);

  return (
    <div className="-z-50 bg-black fixed h-screen w-[1920px] pointer-events-none">
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
