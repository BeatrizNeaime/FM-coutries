import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Infos from '../components/Infos'

const Detail = () => {

  const { cod } = useParams()
  const [show, setShow] = useState([]);

  const getCountry = async () => {
    const a = await fetch(`https://restcountries.com/v3.1/alpha/${cod}`)
    const b = await a.json()
    setShow(b[0])
    console.log(show);
  }

  useEffect(() => {
    getCountry()
  }, []);

  return (
    <div className='dark:bg-very-dark-blue bg-very-light-gray md:h-screen flex flex-col' >
      <div className="p-5 md:mx-5 mx-2">
        <button className='flex items-center justify-center gap-2 p-2 px-5 rounded-md text-sm
          dark:bg-dark-blue dark:text-white
        ' >
          <ion-icon name="arrow-back-outline"/>
          <span>BACK</span>
        </button>
      </div>
      <div className="bg-pink-200">
        <div className="">
          <img src={show.flags.png} alt={show.flags?.alt} />
        </div>
        <div className="">
          <h3>{show.name.common}</h3>
          <div className="flex">
            <div className="flex flex-col">
              <Infos name="Native Name" content={show.name.nativeName.} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail