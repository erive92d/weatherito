import { useEffect, useState } from "react"
import SlideSave from "../pages/SlideSave"
import { grabSaves, saveToLocal } from "../utils/localStorage"

export default function SaveLocation({ name }) {
    const [save, setSave] = useState(grabSaves() || [])


    useEffect(() => {
        saveToLocal(save)
    })

    const handleSave = () => {
        setSave([...save, name])
    }
    console.log(save)

    return (
        <div className="text-right p-2 flex justify-between items-center">
            {/* <Saved save={save} /> */}
            <div>
                {save.length >= 1 ? <SlideSave save={save} /> : null}

            </div>
            <div>
                <i class="fa-regular fa-bookmark text-2xl text-white" onClick={handleSave}></i>
            </div>
        </div>
    )
}