
import {useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import User from '../components/User'
const url = '/api/users'

function App() {
  const [users, setUsers] = useState([])

  useEffect( () => {
    axios.get(url)
    .then( (response) => {
      setUsers(response.data)
    })
    .catch ((error) => {
      console.log(error)
      console.error(error)
    })
  }, [])

  return (
    <div className="main-container">
      <h1>Full Stack Demo</h1>

    <div className="users-container">
      {users.map( (user,index) => {
        return <User  key={index}  user = {user} />
      })}
    </div>
    </div>
  )
}

export default App
