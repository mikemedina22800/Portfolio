import { useState } from 'react'
import cryptomatics from '../images/cryptomatics.png' 
import weatherboy from '../images/weatherboy.png'
import { CircularProgress } from '@mui/material'
import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material'

const Works = () => {
  const [appImage, setAppImage] = useState(weatherboy)
  const [loading, setLoading] = useState(true)

  const appImages = [weatherboy, cryptomatics]

  const index = appImages.indexOf(appImage)

  const next = () => {
    if (index != 0) {
      setAppImage(appImages[index - 1])
    } else {
      setAppImage(appImages[appImages.length - 1])
    }
  }

  const last = () => {
    if (index != appImages.length - 1) {
      setAppImage(appImages[index + 1])
    } else {
      setAppImage(appImages[0])
    }
  }

  return (
    <>
      <div className='flex items-center justify-center'>
        <div onClick={last} className='sm:block hidden'>
          <ArrowCircleLeft className='!text-6xl cursor-pointer !text-gray-800 !bg-white rounded-full'/>
        </div>
        <div className='flex flex-col items-center'>
          <a 
            className='flex justify-center items-center sm:mx-10 mx-0 bg-gray-200 sm:w-[48rem] w-80 sm:h-[24rem] h-40 border-gray-600 rounded-t-sm sm:border-[10px] border-[5px] !border-b-0' 
            href={`https://mikemedina22800.github.io/${appImage === cryptomatics && 'Cryptomatics', appImage === weatherboy && 'Weatherboy'}/`}
          >
            {loading === true && <CircularProgress className='sm:!w-20 sm:!h-20 !h-10 !w-10'/>}
            <img src={appImage} onLoad={() => {setLoading(false)}} className={`h-full w-full ${loading === true && 'hidden'}`}/>
          </a>
          <div className='w-80 flex justify-center items-center sm:w-[48rem] bg-gray-600 h-2.5 sm:h-5 rounded-b-sm'>
            <div className='bg-gray-800 h-1.5 w-1.5 sm:w-3 sm:h-3 rounded-full'/>
          </div>
          <div className='sm:w-32 w-16  bg-gray-800 sm:h-16 h-8'/>
          <div className='sm:h-[10px] h-[5px] sm:w-96 w-48 bg-gray-600 rounded-t-lg'/>
        </div>
        <div onClick={next} className='sm:block hidden'>
          <ArrowCircleRight className='!text-6xl cursor-pointer !text-gray-800 !bg-white rounded-full'/>
        </div>
        </div>
        <div className='w-full flex justify-between sm:hidden mt-5'>
          <div onClick={last}>
            <ArrowCircleLeft className='!text-4xl cursor-pointer !text-gray-800 !bg-white rounded-full'/>
          </div>    
          <div onClick={next}>
            <ArrowCircleRight className='!text-4xl cursor-pointer !text-gray-800 !bg-white rounded-full'/>
          </div>
      </div>
    </>
  )
}

export default Works