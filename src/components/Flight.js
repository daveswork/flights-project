function Flight({flight}){
    console.log(flight)

    return(
        <li>
            <h1>Flight # {flight.id}</h1>
            <h2> Airline {flight.airline}</h2>
        </li>
    )
}

export default Flight