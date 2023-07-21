import { useEffect, useState } from 'react'
import './App.css'
import { currentWeather } from './utils/API.JS'
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

      <DisplayWeather weather={weather} />
      <Navigation handleSearch={handleSearch} handleInput={handleInput} />

    </div>
  )

}

export default App
