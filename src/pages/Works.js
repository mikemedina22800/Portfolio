import { useState } from 'react'
import cryptomatics from '../images/cryptomatics.png' 
import weatherboy from '../images/weatherboy.png'
import { ArrowCircleRight } from '@mui/icons-material'

const Works = () => {
  const [appImage, setAppImage] = useState(cryptomatics)

  return (
    <div className='pt-20 w-screen flex flex-col items-center text-white font-bold'>
      <div className='flex flex-col sm:flex-row my-20'>
        <div className='flex flex-col items-center sm:mr-20 sm:mb-0 mb-5'>
          <a href={`https://mikemedina22800.github.io/${appImage == cryptomatics ? 'Cryptomatics' : 'Weatherboy'}/`}>
            <img src={appImage} className='w-80 sm:w-[48rem] border-black sm:border-[10px] border-[5px] screen'/>
          </a>
          <div className='sm:w-32 w-16 -z-10 bg-gray-600 sm:h-16 h-8'/>
          <div className='sm:h-[10px] h-[5px] sm:w-96 w-48 bg-gray-400 rounded-t-lg'/>
        </div>
        {appImage == cryptomatics &&
          <div className={`rounded-xl p-5 bg-purple-900 h-fit sm:w-[36rem] w-80 animate__animated animate__slide${appImage == cryptomatics ? 'InRight' : 'OutLeft'}`}>
            <div className='flex justify-between'>
              <h1 className='sm:text-3xl text-xl sm:mb-4 mb-2'>Cryptomatics</h1>
              <div className='cursor-pointer' onClick={() => {setAppImage(weatherboy)}}>
                <ArrowCircleRight className='!sm:text-4xl text-2xl rounded-full'/>
              </div>
            </div>
            <p className='sm:text-lg text-sm'>
              A React app that displays real time crypto stats and trends. 
              Data is fetched from <a href="https://rapidapi.com/Coinranking/api/coinranking1" className='underline text-[aqua]'>Coinranking API</a>.
            </p>
          </div>
        }
        {appImage == weatherboy &&
          <div className={`rounded-xl p-5 bg-purple-900 h-fit sm:w-[36rem] w-80 animate__animated animate__slide${appImage == weatherboy ? 'InRight' : 'Out'}`}>
            <div className='flex justify-between'>
              <h1 className='sm:text-3xl text-xl sm:mb-4 mb-2'>Weatherboy</h1>
              <div  className='cursor-pointer' onClick={() => {setAppImage(cryptomatics)}}>
                <ArrowCircleRight className='!sm:text-4xl text-2xl rounded-full'/>
              </div>
            </div>
            <p className='sm:text-lg text-sm'>
              A React app that displays real time weather conditions and forecasts from NWS stations across the United States.
              The app includes a hurricane tracker that displays both active and historical hurricane data across the Atlantic and Pacific Ocean.
              Data is fetched from <a href="https://www.weather.gov/documentation/services-web-api" className='underline text-[aqua]'>NWS API</a> and <a href="https://www.aerisweather.com/support/docs/api/" className='underline text-[aqua]'>AerisWeather API</a>.
            </p>
          </div>
        }
      </div>
    </div>
  )
}

export default Works