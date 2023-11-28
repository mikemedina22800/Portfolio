import { useState } from 'react'
import cryptomatics from '../images/cryptomatics.png' 
import weatherboy from '../images/weatherboy.png'
import { ArrowCircleRight } from '@mui/icons-material'

const Works = () => {
  const [appImage, setAppImage] = useState(cryptomatics)

  return (
    <div className='pt-20 w-screen flex flex-col items-center text-white font-bold'>
      <div className='flex my-20'>
        <div className='flex flex-col items-center mr-20'>
          <a href={`https://mikemedina22800.github.io/${appImage == cryptomatics ? 'Cryptomatics' : 'Weatherboy'}/`}>
            <img src={appImage} className='w-[48rem] border-black border-[10px]'  style={{boxShadow: '0 0 100px 0 white'}}/>
          </a>
          <div className='w-32 bg-gray-600 h-16'/>
          <div className='h-[10px] w-[24rem] bg-gray-400 rounded-t-lg'/>
        </div>
        {appImage == cryptomatics &&
          <div className='rounded-xl p-5 bg-black h-fit bg-opacity-50 w-[36rem] animate__animated animate__slideInRight'>
            <div className='flex justify-between'>
              <h1 className='text-3xl mb-5'>Cryptomatics</h1>
              <div className='cursor-pointer' onClick={() => {setAppImage(weatherboy)}}>
                <ArrowCircleRight className='!text-4xl rounded-full'/>
              </div>
            </div>
            <p className='text-lg'>
              A React app that displays real time crypto stats and trends. 
              Data is fetched from <a href="https://rapidapi.com/Coinranking/api/coinranking1" className='underline text-[aqua]'>Coinranking API</a>.
            </p>
          </div>
        }
        {appImage == weatherboy &&
          <div className='rounded-xl p-5 bg-black h-fit bg-opacity-50 w-[36rem] animate__animated animate__slideInRight'>
            <div className='flex justify-between'>
              <h1 className='text-3xl mb-5'>Weatherboy</h1>
              <div  className='cursor-pointer' onClick={() => {setAppImage(cryptomatics)}}>
                <ArrowCircleRight className='!text-4xl rounded-full'/>
              </div>
            </div>
            <p className='text-lg'>
              A React app that displays real time weather conditions and forecasts from NWS stations across the United States.
              The app includes a simple hurricane tracker that displays both active and historical hurricane data across the Atlantic and Pacific Oceans.
              Data is fetched from <a href="https://www.weather.gov/documentation/services-web-api" className='underline text-[aqua]'>NWS API</a> and <a href="https://www.aerisweather.com/support/docs/api/" className='underline text-[aqua]'>AerisWeather API</a>.
            </p>
          </div>
        }
      </div>
    </div>
  )
}

export default Works