import { useEffect, useState } from 'react'
import './App.css'
// import { currentWeather } from './utils/api.js'
import Navigation from './components/Navigation'
import DisplayWeather from './pages/Display'
import { grabRecent, recentSearch } from './utils/localStorage'

function App() {

  const [weather, setWeather] = useState(null)
  const [input, setInput] = useState("")

  useEffect(() => {

    const recent = async () => {
      const initial = grabRecent() || "San Francisco, CA"
      if (!weather) {
        const API_KEY = import.meta.env.VITE_APIKEY

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${initial},US&appid=${API_KEY}&units=imperial`)
        // const response = await currentWeather(initial)
        const data = await response.json()
        setWeather(data)
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

      <DisplayWeather weather={weather} />
      <Navigation handleSearch={handleSearch} handleInput={handleInput} />

    </div>
  )

}

export default App
