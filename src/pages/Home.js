import reactIcon from '../images/React-icon.svg'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'
import email from '../images/email.svg'

const Home = () => {
  const generateArray = (length) => {
    return Array.from({ length }, (_, index) => index % 2);
  };
  
  const myArray = generateArray(200);

  const row = (color) => {
    return (
      <div 
        className='w-[3840px] text-2xl flex justify-between select-none' 
        style={{fontFamily: 'Minecraft', color: color, animation: `${color == 'blue' ? 'left' : 'right'} 15s linear infinite`}}
      >
        {myArray.map((num, i) => {return <p key={i}>{num}</p>})}
      </div>
    )
  }

  return (
    <div className="pt-20 font-bold flex sm:flex-row flex-col bg-black w-screen h-screen overflow-hidden">
      <div className="flex flex-col justify-between h-[calc(100vh-5rem)] py-2">
        {row('blue')}{row('aqua')}
        <div className="text-white font-bold py-4 sm:px-20 px-10 w-screen" style={{fontFamily:'Poppins'}}>
          <h1 className="sm:text-5xl text-4xl  animate__animated animate__lightSpeedInRight">Michael Medina</h1>
          <div className='flex items-center my-2 sm:my-3 animate__animated animate__lightSpeedInRight' style={{animationDelay:'.25s'}}>
            <h1 className="sm:text-4xl text-2xl mr-2">React Developer</h1>
            <img className='sm:h-10 h-8' src={reactIcon}/>
          </div>
          <h1 className="sm:text-xl text-lg animate__animated animate__lightSpeedInRight mb-10" style={{animationDelay:'.5s'}}>
            Greetings! I build visually engaging web applications.
          </h1>
          <div className='flex animate__animated animate__lightSpeedInRight' style={{animationDelay:'.75s'}}>
            <a href='mailto:michaeljmedina22800@gmail.com'>
              <img className='h-10 cursor-pointer hover:animate-bounce' src={email}/>
            </a>
            <a href="https://github.com/mikemedina22800" className='mx-10'>
              <img className='h-10 rounded-full cursor-pointer hover:animate-bounce' src={github}/>
            </a>
            <a href="https://www.linkedin.com/in/michael-medina-928828207/">
              <img  className='h-10 rounded-full cursor-pointer hover:animate-bounce' src={linkedin}/>
            </a>
          </div>
        </div>
        {row('blue')}{row('aqua')}{row('blue')}{row('aqua')}{row('blue')}{row('aqua')}
        {row('blue')}{row('aqua')}{row('blue')}{row('aqua')}{row('blue')}{row('aqua')}
        {row('blue')}{row('aqua')}{row('blue')}{row('aqua')}{row('blue')}{row('aqua')}
      </div>
    </div>
  )
}

export default Home