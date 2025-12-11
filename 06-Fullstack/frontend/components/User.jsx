import { use } from 'react'
import './User.css'
function User(user) {
    return (
        <div className="user-container">
            <div className="name">
                <p>{user.user.name}</p>
            </div>

            <div className="email">
                <p>{user.user.email}</p>
            </div>

            <div className="role">
                <p>{user.user.role}</p>
            </div>

            <div className="age">
                <p>{user.user.age}</p>
            </div>

            <div className="created-at">
                <p>{user.user.createdAt}</p>
            </div>
        </div>
    )
}

export default User