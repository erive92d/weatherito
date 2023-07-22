

export async function currentWeather(city) {
    const API_KEY = import.meta.env.VITE_APIKEY
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},US&appid=${API_KEY}&units=imperial`)
    const data = await response.json()
    return data
}