const API_KEY = '780441a9c4800cceba01283f606bcc74'



export function getWeather() {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${API_KEY}`)
}


export async function currentWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},US&appid=${API_KEY}&units=imperial`)
    const data = await response.json()
    return data
}