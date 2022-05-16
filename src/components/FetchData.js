import React, {useState,useEffect} from 'react'
import axios from 'axios';

function FetchData() {
    const [houses, setHouses] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/SpringMVC/housing/retrieve-all-housings')
        .then(res => {
            console.log(res)
            setHouses(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <h1 align="center">React-App</h1>
            <ul>
                {houses.map(house=> (
                <div>
                    <li key={house.id}>{house.description}</li>
                </div>
                ))}
            </ul>
        </div>
    )
}

export default FetchData