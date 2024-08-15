import { useOutletContext } from "react-router-dom"
import Flight from "./Flight"


function FlightList(){
    
    const {flights} = useOutletContext()

    const flightComponents = flights.map( flight => {
        return <Flight key={flight.id} flight={flight}/>
    }
    )

    return (
        <ul>{flightComponents}</ul>
    )

}

export default FlightList