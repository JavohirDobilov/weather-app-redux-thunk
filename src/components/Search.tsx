import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeather, setLoading } from '../redux/actions/weatherActions'


import { RootStore } from '../redux/store'
import { WeatherData } from '../redux/types'

const Search = ({data}:{data:WeatherData}) => {


console.log(data)

const dispatch = useDispatch()

const [city,setCity] = useState('')



const handchange = (e:React.FormEvent<HTMLInputElement>) =>{

    e.preventDefault();
    setCity(e.currentTarget.value);
}


const handleSubmit = (e:React.FormEvent) =>{

    e.preventDefault();
    if(city.trim()===""){
        alert("Shaharni kiriting iltimos")
    }
    dispatch(setLoading())
    dispatch(getWeather(city))
    setCity("")     
    
}

const celcy =(data?.main?.temp-273.15).toFixed(2)

  return (
    <div className='search'>
        <div className='container'>
            <div className='row'>
                <div className='search-title'>
                    
                </div>
                <form className='py-5' onSubmit={handleSubmit}>
                    <input type="text" className="input"  placeholder='Enter city name' value={city} onChange={handchange}/>
                    <button type="button"  className='button btn-primary m-3'>Search</button>
                </form>
                
            </div>
            <div className='name-country'>
                {data.name}
            </div>
            <div className='tempratura'>
                {celcy} <sup className='celcy'>&#8451;</sup>
            </div>
        </div>
    </div>
  )
}

export default Search