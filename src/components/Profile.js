import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Profile() {
  const [personnes, setPersonnes] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/personApi/persons')
        .then(res => {
            console.log(res)
            setPersonnes(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <h1 align="center">React-App</h1>
            <ul>
                {personnes.map(personne=> (
                <div><li key={personne.id}>{personne.firstName} {personne.lastName} {personne.login} {personne.email} {personne.phoneNumber}</li></div>
                ))}
            </ul>
        </div>
    )
}

export default Profile