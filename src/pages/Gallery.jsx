import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import { Card } from 'antd'

import Forms from '../components/Forms'
import Infos from '../components/Infos'

const Gallery = () => {
    const [countries, setcountries] = useState([]);

    const getAllCountries = () => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(res => setcountries(res))
    }

    useEffect(() => {
        getAllCountries()
    }, []);

    return (
        <div className="flex md:flex-col justify-center h-full dark:bg-very-dark-blue dark:text-white bg-very-light-gray">
            <Forms />
            <div className="flex justify-center">
                <div className="md:w-[95%] flex items-center flex-wrap justify-evenly gap-8">
                    {countries.map(c => (
                        <Link to={`/detail/${c.cca3}`} >
                            <Card key={c.alpha2Code}
                                style={{ width: 240 }}
                                className='dark:bg-dark-blue                        
                                border-none'
                                cover={
                                    <img
                                        alt="example"
                                        src={c.flags.png}
                                        style={{
                                            height: 180
                                        }}
                                    />
                                }
                                value={c.cca3}
                            >
                                <div className="flex flex-col
                            dark:text-white
                        ">
                                    <h4 className='font-bold text-lg' >{c?.name.common}</h4>
                                    <Infos name='Population' content={c.population} />
                                    <Infos name='Region' content={c.region} />
                                    <Infos name='Capital' content={c.capital} />
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gallery