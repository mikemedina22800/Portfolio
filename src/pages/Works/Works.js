import { useState } from 'react'
import cryptomatics from '../../images/cryptomatics.png' 
import weatherboy from '../../images/weatherboy.png'
import { ArrowCircleRight } from '@mui/icons-material'
import Background from './components/Background'
import { CircularProgress } from '@mui/material'

const Works = () => {
  const [appImage, setAppImage] = useState(cryptomatics)
  const [loading, setLoading] = useState(true)

  return (
    <>
      <div className='pt-20 w-screen h-screen flex flex-col items-center text-white overflow-hidden'  style={{fontFamily:'Poppins'}}>
        <div className='flex flex-col sm:flex-row items-center my-20'>
          <div className='flex flex-col items-center sm:mr-20 sm:mb-0 mb-5'>
            <a 
              className='screen flex justify-center items-center bg-gray-200 sm:w-[48rem] w-80 sm:h-[24rem] h-40 border-gray-600 sm:border-[10px] border-[5px] !border-b-0 border-box' 
              href={`https://mikemedina22800.github.io/${appImage === cryptomatics ? 'Cryptomatics' : 'Weatherboy'}/`}
            >
              {loading === true && <CircularProgress className='sm:!w-20 sm:!h-20 !h-10 !w-10'/>}
              <img src={appImage} onLoad={() => {setLoading(false)}} className={`h-full w-full ${loading === true && 'hidden'}`}/>
            </a>
            <div className='w-80 flex justify-center items-center sm:w-[48rem] bg-gray-600 h-2.5 sm:h-5'>
              <div className='bg-gray-800 h-1.5 w-1.5 sm:w-3 sm:h-3 rounded-full'/>
            </div>
            <div className='sm:w-32 w-16 -z-10 bg-gray-600 sm:h-16 h-8'/>
            <div className='sm:h-[10px] h-[5px] sm:w-96 w-48 bg-gray-400 rounded-t-lg'/>
          </div>
          {appImage === cryptomatics &&
            <div className='rounded-xl p-5 sm:p-10 bg-purple-900 h-fit sm:w-[36rem] w-80 animate__animated animate__slideInRight'>
              <div className='flex justify-between'>
                <h1 className='sm:text-3xl text-xl sm:mb-4 mb-2 font-extrabold'>Cryptomatics</h1>
                <div className='cursor-pointer' onClick={() => {setAppImage(weatherboy); setLoading(true)}}>
                  <ArrowCircleRight className='rounded-full !text-2xl sm:!text-4xl'/>
                </div>
              </div>
              <p className='sm:text-lg text-sm'>
                A fully responsive React app that displays real time crypto stats and trends.
                This app is stylized with Tailwind CSS and Material UI.
                Data is fetched with Axios from <a href="https://rapidapi.com/Coinranking/api/coinranking1" className='underline text-[aqua]'>Coinranking API</a>.
              </p>
            </div>
          }
          {appImage === weatherboy &&
            <div className='rounded-xl p-5 sm:p-10 bg-purple-900 h-fit sm:w-[36rem] w-80 animate__animated animate__slideInRight'>
              <div className='flex justify-between'>
                <h1 className='sm:text-3xl text-xl sm:mb-4 mb-2  font-extrabold'>Weatherboy</h1>
                <div className='cursor-pointer' onClick={() => {setAppImage(cryptomatics); setLoading(true)}}>
                  <ArrowCircleRight className='rounded-full !text-2xl sm:!text-4xl' fontSize='large'/>
                </div>
              </div>
              <p className='sm:text-lg text-sm'>
                A fully responsive React app that displays real time weather conditions and forecasts from NWS stations across the United States.
                A searchbar with autocomplete functionality for US cities is provided with the use of Google Maps Platform.
                Included is a hurricane tracker that displays both active and historical hurricane data across the Atlantic and Pacific Ocean.
                This app is stylized with Tailwind CSS and Material UI.
                Data is fetched with Axios from <a href="https://www.weather.gov/documentation/services-web-api" className='underline text-[aqua]'>NWS API</a>, <a href="https://openweathermap.org/api" className='underline text-[aqua]'>OpenWeather API</a>, and <a href="https://www.aerisweather.com/support/docs/api/" className='underline text-[aqua]'>AerisWeather API</a>.
              </p>
            </div>
          }
        </div>
      </div>
      <Background/>
    </>
  )
}

export default Works