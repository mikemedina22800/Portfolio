const Background = () => {
  
  const generateArray = (length) => {
    return Array.from({ length }, (_, index) => index % 2);
  };
  
  const myArray = generateArray(200);

  const row = (color) => {
    return (
      <div className='w-[3840px] text-2xl flex justify-between' style={{fontFamily: 'Minecraft', color: color, animation: `${color == 'blue' ? 'left' : 'right'} 15s linear infinite`}}>
        {myArray.map((num, i) => {return <p key={i}>{num}</p>})}
      </div>
    )
  }

  return (
    <div className="-z-50 bg-black fixed h-screen w-screen pointer-events-none top-20">
      <div className="flex flex-col justify-between h-[calc(100vh-5rem)] w-[1920px] py-2">
        {row('blue')}{row('aqua')}{row('blue')}{row('aqua')}
        {row('blue')}{row('aqua')}{row('blue')}{row('aqua')}
        {row('blue')}{row('aqua')}{row('blue')}{row('aqua')}
        {row('blue')}{row('aqua')}{row('blue')}{row('aqua')}
        {row('blue')}{row('aqua')}{row('blue')}{row('aqua')}
      </div>
    </div>
  );
}

export default Background;
