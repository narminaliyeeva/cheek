import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Admin() {

    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/data')
            .then(res => setdata(res.data))
    }, [])

    const deleteData = function (id) {
        axios.delete('http://localhost:3000/data/' + id)

    }

    return (
        <div>

            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>img</th>
                        <th>content</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.img}</td>
                                    <td>{item.content}</td>
                                    <td className="deleteBtn"><button onClick={() => deleteData(item.id)}>delete </button></td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
            <Link to={'/add'}><button>Add new item</button></Link>
        </div>
    )
}

export default Admin