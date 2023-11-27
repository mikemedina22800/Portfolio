import cryptomatics from '../images/cryptomatics.png' 
import weatherboy from '../images/weatherboy.png'

const About = () => {
  return (
    <div className="text-white px-10 py-20 font-bold">
      <div className='mt-10 w-full flex lg:flex-row flex-col mb-20'>
        <a className='lg:mr-10 mb-5 lg:mb-0' href='https://mikemedina22800.github.io/Cryptomatics/'>
          <img className='w-full max-w-[64rem] rounded-xl' src={cryptomatics}/>
        </a>
        <div className='lg:w-96 w-full h-fit bg-blue-950 bg-opacity-50 rounded-xl p-10'>
          <h1 className='text-2xl mb-5'>Cryptomatics</h1>
          <p>
            A fully responsive React application that displays real time crypto stats and trends fetched from <a className='text-blue-600 underline' href="https://rapidapi.com/Coinranking/api/coinranking1/">Coinranking API</a>.
            Trends are visualized with line charts.
          </p>
        </div>
      </div>
      <div className='lg:mt-40 w-full flex lg:flex-row flex-col'>
        <a className='lg:mr-10 mb-5 lg:mb-0' href='https://mikemedina22800.github.io/Weatherboy/'>
          <img className='w-full max-w-[64rem] rounded-xl' src={weatherboy}/>
        </a>
        <div className='lg:w-96 w-full h-fit bg-blue-950 bg-opacity-50 rounded-xl p-10'>
          <h1 className='text-2xl mb-5'>Weatherboy</h1>
          <p>
            A fully responsive React application that displays real time weather data and forecasts from NWS stations across the United States, fetched from <a className='text-blue-600 underline' href="https://www.weather.gov/documentation/services-web-api">NWS API</a>. 
            Additionally, Cyclopedia is a hurricane tracker that dispays both active and historical hurricane data in the Atlantic and Pacific basins, fetched from <a href="https://www.aerisweather.com/" className='text-blue-600 underline'>Aeris Weather API</a>. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default About