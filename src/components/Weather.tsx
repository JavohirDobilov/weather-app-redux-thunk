import React, { FC } from 'react'

import { WeatherData } from '../redux/types'





const Weather = ({ data, loading }: { data: WeatherData, loading: boolean }) => {

    // if (loading) return <></>
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
                    <div className='weather-container shadow-lg p-2 mb-2 d-flex justify-content-center'>
                        <div className=''>
                            {/* {data?.weather[0]?.description} */}
                        </div>
                        {/* <img src={`http://openweathermap.org/img/wn/${data.weather[0].icons}.png`} alt=""/> */}

                    </div>
                    <div className='weather-container shadow-lg p-2 mb-2 d-flex justify-content-center'>
                        <div className=''>
                            
                        </div>
                    </div>
                    <div className='weather-container shadow-lg p-2 mb-2 d-flex justify-content-center'>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Weather