import { useEffect, useState } from "react"
import SlideSave from "../pages/SlideSave"
import { grabSaves, saveToLocal } from "../utils/localStorage"
import SaveButton from "./SaveButton"

export default function SaveLocation({ name }) {
    const [items, setItems] = useState([])
    useEffect(() => {
        const localItems = grabSaves()
        if(localItems) {
            setItems(localItems)
        }

    },[])

    const handleSave = () => {
        const updatedItem = [...items, name]
        setItems(updatedItem)
        localStorage.setItem("save_location", JSON.stringify(updatedItem))
    }

    return (
        <div>
                     <div className="text-right p-2 flex justify-between items-center">
             {/* <Saved save={save} /> */}
             <div>
                 {items.length >= 1 ? <SlideSave save={items} /> : null}

             </div>
             <div>
                 <SaveButton handleSave={handleSave} items={items} name={name}/>
                 {/* <i class="fa-regular fa-bookmark text-2xl text-white" onClick={handleSave}></i> */}
             </div>
            
         </div>
        </div>
    )
}

