import { useState } from "react"

const GuestList: React.FC = ()=>{
    const [name, setName ]= useState('')
    const [guests,setGuests] = useState<string[]>([])

    const handleName = (e: any)=>{
        setName(e.target.value)
    }

    const handleClick = ()=>{
        setName('')
        setGuests([...guests, name])
    }
    return <div>
        <h3> Gusest List</h3>
        <ul>

            {
                guests.map((guest) => (
                    <li key={guest}>{guest}</li>
                ))
            }
        </ul>
        <input value={name} onChange={handleName}/>
        <button onClick={handleClick}>Add Guest</button>
    </div>
}

export default GuestList