import { useEffect, useState } from "react"
import { grabSaves } from "../utils/localStorage"
export default function SaveButton({handleSave,  name}) {

    const [currentItems, setCurrentItems] = useState(false)

    useEffect(() => {
        const localItems = grabSaves()
        const exist = localItems?.some((item) => item === name)
        if(exist) {
            setCurrentItems(true)
        }
    })
   

    return (
        <div>
            
{currentItems ? <i class="fa-regular fa-thumbs-up text-2xl text-white"></i> :  <i class="fa-regular fa-bookmark text-2xl text-white" onClick={handleSave}></i>
}
        </div>
    )
}