
import { use, useState } from 'react'
import './App.css'
import User from '../components/User'

function App() {
  const [users, setUsers] = useState([])

  return (
    <div className="main-container">
      <h1>Full Stack Demo</h1>
      
    <div className="users-container">
      {users.map( (user) => {
        return <User user = {user} key={user.id} />
      })}
    </div>
    </div>
  )
}

export default App
