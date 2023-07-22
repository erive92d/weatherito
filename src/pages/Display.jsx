import { useEffect, useState } from "react";
import SaveLocation from "../components/SaveLocation";
export default function DisplayWeather({ weather }) {
    console.log(weather)
    if (!weather) return <h1>Loading..</h1>


    const climate = () => {
        const climDetails = weather.weather[0].main
        // console.log(climDetails)
        if (climDetails === "Clouds") {
            return (
                <i class="fa-solid fa-cloud text-6xl"></i>
            )
        } else if (climDetails === "Clear") {
            return (
                <i class="fa-regular fa-sun text-6xl"></i>
            )
        } else if (climDetails === "Rain") {
            return (
                <i class="fa-solid fa-cloud-showers-heavy text-6xl"></i>
            )
        } else {
            return (
                <i class="fa-regular fa-sun text-6xl"></i>

            )
        }

    }


    return (
        <div className=" p-2 space-y-10 bg-blue-400">

            <div className="flex flex-col items-center text-white font-thin p-2">

                <div className="">
                    <h1 className="text-3xl">{weather?.name}</h1>
                </div>
                <div>
                    <p className="">{weather.weather[0].main}</p>
                </div>
            </div>

            {/* TEMPERATURE */}
            <div className="space-y-10 text-white font-thin">

                <div className="text-center space-y-5">

                    {climate()}
                    <p className="text-4xl">{weather.main.temp} °F</p>
                    {/* <p className="italic text-sm">feels like.. {weather.main.feels_like}</p> */}
                </div>
                <div className="flex justify-around space-x-5">
                    <p><i class="fa-solid fa-up-long"></i> {weather.main.temp_max} °F</p>
                    <p><i class="fa-solid fa-down-long"></i> {weather.main.temp_min} °F</p>
                </div>

            </div>
            {/* HUMIDITY */}
            <div className="text-white font-thin p-2">
                <ul className="flex justify-around">
                    <li><p><i class="fa-solid fa-wind"></i> Wind Speed {weather.wind.speed}MPH</p>
                    </li>
                    <li><p><i class="fa-solid fa-temperature-half"></i> Humidity {weather.main.humidity}</p>
                    </li>

                </ul>
            </div>
        </div>
    )

}