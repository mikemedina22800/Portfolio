import reactIcon from '../images/React-icon.svg'

const Home = () => {
  return (
    <div className="text-white pt-20 font-bold flex w-screen sm:flex-row flex-col items-center !overflow-auto">
      <div className="sm:pl-20 mt-20 w-full p-5 bg-black" style={{fontFamily:'Poppins'}}>
        <h1 className="sm:text-5xl text-4xl  animate__animated animate__lightSpeedInRight">Michael Medina</h1>
        <div className='flex items-center sm:my-5 my-3 animate__animated animate__lightSpeedInRight' style={{animationDelay:'.5s'}}>
          <h1 className="sm:text-4xl text-2xl mr-2">React Developer</h1>
          <img className='sm:h-10 h-8' src={reactIcon}/>
        </div>
        <h1 className="sm:text-xl text-lg animate__animated animate__lightSpeedInRight" style={{animationDelay:'1s'}}>
          Greetings! I build visually engaging web applications.
        </h1>
      </div>
    </div>
  )
}

export default Home