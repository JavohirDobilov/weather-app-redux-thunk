import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";
import { WeatherAction,WeatherData,WeatherError,GET_WEATHER,SET_LOADING,SET_ERROR, } from "../types";



export const getWeather = (city:string):ThunkAction<void,RootState,null,WeatherAction> =>{
    return async dispatch => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e493e412384ac28ddeae3357d6059c2a`)


            if(!res.ok){
                const resData:WeatherError = await res.json();
                throw new Error(resData.message)
            }
            const resData:WeatherData = await res.json();
            dispatch({ 
                type:GET_WEATHER,
                payload:resData
            })
        }
        catch(err){
            dispatch({
                type:SET_ERROR,
                payload:""
            })
        }
    }

}

export const setLoading = ():WeatherAction =>{
    return {
        type:SET_LOADING
    }
}

export const setError = ():WeatherAction =>{
    return {
        type:SET_ERROR,
        payload:""
    }
}