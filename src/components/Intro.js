import reactIcon from '../images/React-icon.svg'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'
import email from '../images/email.svg'
import { Tooltip } from '@mui/material'
import Works from './Works'

const Intro = () => {
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
    <div className="flex sm:flex-row flex-col font-bold bg-black w-screen h-screen overflow-hidden">
      <div className="flex flex-col justify-between h-screen py-2">
        {row('blue')}{row('aqua')}{row('blue')}{row('aqua')}
        <div className="text-white w-screen p-8 sm:px-16 flex sm:justify-between 2xl:flex-row flex-col">
          <div className='flex flex-col animate__animated animate__slideInLeft'>
            <h1 className="sm:text-5xl text-3xl">Michael Medina</h1>
            <div className='flex items-center my-2 sm:my-3'>
              <h1 className="sm:text-3xl text-xl mr-2">React Developer</h1>
              <img className='sm:h-8 h-6' src={reactIcon}/>
            </div>
            <h1 className="sm:text-xl">
              Greetings! I build fully customized web applications.
            </h1>
            <div className='flex my-10'>
              <Tooltip title="Github" placement='bottom' arrow>
                <a href="https://github.com/mikemedina22800">
                  <img className='h-12 rounded-full cursor-pointer' src={github}/>
                </a>
              </Tooltip>
              <Tooltip title="LinkedIn" placement='bottom' arrow>
                <a href="https://www.linkedin.com/in/michael-medina-928828207/" className='mx-10'>
                  <img  className='h-12 rounded-full cursor-pointer' src={linkedin}/>
                </a>
              </Tooltip>
              <Tooltip title="Email" placement='bottom' arrow>
                <a href='mailto:michaeljmedina22800@gmail.com'>
                  <img className='h-12 cursor-pointer' src={email}/>
                </a>
              </Tooltip>
            </div>
          </div>
          <Works/>
        </div>
        {row('blue')}{row('aqua')}{row('blue')}{row('aqua')} {row('blue')}{row('aqua')}{row('blue')}{row('aqua')}{row('blue')}{row('aqua')} {row('blue')}{row('aqua')}{row('blue')}{row('aqua')} {row('blue')}{row('aqua')}
      </div>
    </div>
  )
}

export default Intro