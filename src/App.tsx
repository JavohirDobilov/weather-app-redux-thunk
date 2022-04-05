import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { WeatherData } from './redux/types';
import './App.css';
import Search from './components/Search';
import Weather from './components/Weather';
import { RootState } from './redux/reducers';
import { SwapSpinner } from "react-spinners-kit";


const App: FC = () => {


  let weatherData = {} as WeatherData
  const weaData = useSelector((state: RootState) => state.weather.data)
  const loading = useSelector((state: RootState) => state.weather.loading)
  const error = useSelector((state: RootState) => state.weather.error)

  if (weaData) {
    weatherData = weaData
  }

  return (
    <div className="App">
      <div className="row">
        <div className='col-4'>
          <Search data={weatherData}/>
        </div>
        <div className='col-8'>
          {loading ? <div className='loader'><SwapSpinner size={60} color="#686769" /></div> :
            <Weather loading={loading} data={weatherData} />}
        </div>
      </div>
    </div>
  );
}

export default App;
