import React, { FC } from 'react'

import { WeatherData } from '../redux/types'





const Weather = ({ data, loading }: { data: WeatherData, loading: boolean }) => {
    console.log(data)
    console.log(loading)
    // let des = ''
    // if(data.weather){
    //     des = data.weather[0].description
    // }
    // let temp_min = (data.main.temp_min - 273.15).toFixed(2)
    // let temp_max = (data.main.temp_max - 273.15).toFixed(2)
   

    if (loading) return <></>
    return (
        <div className='weather-section'>
            <div className='container'>
                <div className=''>
                    <h3>Today</h3>
                </div>
                <div className='row justify-content-beetwen'>
                    <div className='weather-container shadow-lg p-2 mb-2 d-flex justify-content-center'>
                        <div className='weather-content-con'>
                            <div className='weather-content-title'>
                                Weather Status
                            </div>
                            <div className='container-flex'>
                                {data?.wind?.speed} m/s
                            </div>
                        </div>
                    </div>
                    <div className='weather-container shadow-lg p-2 mb-2 text-align-center'>
                        <div className='weather-title d-flex justify-content-center'>
                            Weather Situation
                        </div>
                        <div className='d-flex justify-content-center'>
                            {data.weather && data.weather[0].description}
                        </div>
                        <div className="weather-icon d-flex justify-content-center" >
                            {data.weather && <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} className="" alt="" />}
                        </div>

                    </div>
                    <div className='weather-container shadow-lg p-2 mb-2'>
                        <div className='weather-title d-flex justify-content-center'>
                            Temp max-min
                        </div>
                        <div className='d-flex justify-content-center'>
                            <p>min {data.main && (data?.main?.temp_min - 273.15).toFixed(2)} <sup className='celcy_min'>&#8451;</sup></p>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <p>max {data.main && (data?.main?.temp_max - 273.15).toFixed(2)} <sup className='celcy_min'>&#8451;</sup></p>
                        </div>
                    </div>
                    <div className='weather-container shadow-lg p-2 mb-2'>
                        <div className='weather-title d-flex justify-content-center'>
                            Humidity
                        </div>
                        <div className='d-flex justify-content-center'>
                            {data.main && data.main.humidity}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Weather