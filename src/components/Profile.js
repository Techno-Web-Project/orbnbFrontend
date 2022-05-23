import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Profile() {
  const [person, setPerson] = useState('')
  const id = 1

    useEffect(() => {
        axios.get(`http://localhost:8081/personApi/getPersonById/${id}`)
        .then(res => {
            console.log(res)
            setPerson(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, '')

    return (
        <div className='profile-div'>
            <h1 align="center">Profile</h1>
            <img className='profile-pic' src="images/profile-pic-test.png" alt="Profile" />
            <div className="profileTextDiv">
                <h2 className='profileText'>{person.firstName}</h2>
                <h2 className='profileText'>{person.lastName}</h2>
                <h2 className='profileText'>{person.login}</h2>
                <h2 className='profileText'>{person.phoneNumber}</h2>
                <h2 className='profileText'>{person.email}</h2>
                <h2 className='profileText'>{person.password}</h2>
            </div>
        </div>
    )
}

export default Profile