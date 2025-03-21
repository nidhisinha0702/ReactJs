import { useState } from "react"

const User= () => {
    // const [firstName, setFirstName] = useState('Nidhi')
    // const [lastName, setLastName] = useState('Kumari')
    // const [email, setEmail] = useState('nk@gmail.com')

    const [user, setUser] = useState({
        firstName: 'Nidhi',
        lastName: 'Kumari',
        email: 'nk@gmail.com'
    })
    function updateUser(){
        // setFirstName('Akash')
        // setLastName('Sinha')
        // setEmail('aks@gmail.com')
        setUser({
            firstName: 'Akash',
            lastName: 'Sinha',
            email: 'aks@gmail.com'
        })
    }
    return (
        <div>
            <h1>User Details</h1>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.email}</p>
            <button onClick={updateUser}>Update User</button>
        </div>
    )
}

export default User;