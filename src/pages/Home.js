import reactIcon from '../images/React-icon.svg'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'
import email from '../images/email.svg'

const Home = () => {
  return (
    <div className="text-white pt-20 font-bold flex w-screen sm:flex-row flex-col items-center !overflow-auto">
      <div className="mt-20 w-full p-6 sm:px-20 bg-black" style={{fontFamily:'Poppins'}}>
        <h1 className="sm:text-5xl text-4xl  animate__animated animate__lightSpeedInRight">Michael Medina</h1>
        <div className='flex items-center my-2 sm:my-3 animate__animated animate__lightSpeedInRight' style={{animationDelay:'.33s'}}>
          <h1 className="sm:text-4xl text-2xl mr-2">React Developer</h1>
          <img className='sm:h-10 h-8' src={reactIcon}/>
        </div>
        <div className='flex sm:justify-between sm:flex-row flex-col items-center w-full'>
          <h1 className="sm:text-xl text-lg mb-6 sm:m-0 animate__animated animate__lightSpeedInRight" style={{animationDelay:'.66s'}}>
            Greetings! I build visually engaging web applications.
          </h1>
          <div className='flex sm:justify-normal animate__animated animate__lightSpeedInRight' style={{animationDelay:'1s'}}>
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
      </div>
    </div>
  )
}

export default Home