import axios from 'axios';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js';


const getCoord = async (city) => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]');
    };
 
    const { data } = await axios.get('http://api.openweathermap.org/geo/1.0/direct', {
        params: {
            q: city,
            appid: token,
        }
    });
 
    getWeather(data[0]['lat'], data[0]['lon']);
 
}

const getWeather = async (lat, lon) => {
    const token = await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error('Не задан ключ API, задайте его через команду -t [API_KEY]');
    };
    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            lat: lat,
            lon: lon,
            appid: token,
            units: 'metric',
            lang: 'ru'
        }
    });
 
    return data;
}

export { getCoord };