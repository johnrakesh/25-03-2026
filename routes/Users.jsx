
import { useState } from 'react'
import "./users.css"


export function Users() {

    const [usersData, setFormData] = useState([{

        fullname: "Prakash", email: "prakash@gmail.com", password: "asdwqe!123", role: "Admin"

    }, {
        fullname: "Raj", email: "raj@gmail.com", password: "asd!@213adsQWQ", role: "Editor"
    }, {
        fullname: "Evan", email: "evan@gmail.com", password: "asda@!@#@212AA", role: "Viewer"
    }]);


    return (
        <>
            <h2>Users Page</h2>
            <div className='card-container'>
                {
                    usersData.map((item) => (

                                <div className="card">
                                    <h4>FullName: {item.fullname}</h4>
                                    <hr></hr>
                                    <p>Email: {item.email}</p>
                                    <hr></hr>
                                    <p>Role: {item.role}</p>
                                </div>
                    ))
                }
            </div>

        </>
    )
}