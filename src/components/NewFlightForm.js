import { useOutletContext, useNavigate } from "react-router-dom"
import { useState } from "react"


function NewFlightForm(){

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        airline: "", 
        flight_number:""
    })
    const {addFlight} = useOutletContext()

    function handleSubmit(event){
        event.preventDefault()
        addFlight(formData)
        navigate('/')
    }

    function updateFormData(event){
        setFormData({...formData, [event.target.name]:event.target.value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add new flight</h2>
            <label htmlFor="airlineInput">Airline</label>
            <input onChange={updateFormData} type="text" id="airlineInput" name="airline" value={formData.airline}/>
            <br></br>
            <label htmlFor="flightNumberInput">Flight Number</label>
            <input onChange={updateFormData} type="text" id="flightNumberInput" name="flight_number" value={formData.flight_number}/>
            <br></br>
            <input onSubmit={handleSubmit} type="submit" value="add a flight"/>
        </form>
    )
}

export default NewFlightForm