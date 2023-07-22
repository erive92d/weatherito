import { useEffect, useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import DisplayWeather from './pages/Display'
import { grabRecent, recentSearch } from './utils/localStorage'
import SaveLocation from './components/SaveLocation'


export async function currentWeather(city) {
  const API_KEY = import.meta.env.VITE_APIKEY
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},US&appid=${API_KEY}&units=imperial`)
  const data = await response.json()
  return data
}

function App() {

  const [weather, setWeather] = useState(null)
  const [input, setInput] = useState("")

  useEffect(() => {

    const recent = async () => {
      const initial = grabRecent() || "San Francisco, CA"
      if (!weather) {
        const response = await currentWeather(initial)
        setWeather(response)
      }
    }

    recent()

  }, [])

  const handleSearch = async (e) => {
    e.preventDefault()

    try {
      const response = await currentWeather(input)
      // console.log(response)
      if (response.cod === "404") {
        alert("City not found")
        return
        // return false
      }

      recentSearch(input)
      setWeather(response)
    } catch (error) {
      console.log(error)
    }

    setInput("")

  }

  const handleInput = (e) => {
    setInput(e.target.value)

  }

  console.log(weather)





  return (
    <div className='min-h-screen relative flex flex-col bg-blue-400' >
      <SaveLocation name={weather?.name} />
      <DisplayWeather weather={weather} />
      <Navigation handleSearch={handleSearch} handleInput={handleInput} />

    </div>
  )

}

export default App
