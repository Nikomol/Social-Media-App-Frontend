import React from 'react'
import { Link } from 'react-router-dom';

const OnlineList = ({value}) => {
  return (
    <Link to="/FriendsId" style={{textDecoration:"none"}}>
    <div className='online-people'>
        <img src={value.profilepicture} alt="" />
        <p>{value.username}</p>
    </div>
    </Link>
  )
}

export default OnlineList