import React, { useState } from 'react'
import "../LeftSide/Left.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineSearch} from "react-icons/ai"
import {FiTrendingUp} from "react-icons/fi"
import { Link } from 'react-router-dom';
import {BsBookmark} from "react-icons/bs"
import {RiFileListLine} from "react-icons/ri"
import {FiSettings} from "react-icons/fi"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


import {IoNotificationsOutline} from "react-icons/io5"
import Profile from "../../assets/profile.jpg"


const Left = ({profileImg,
               modelDetails
              }) => {

  const [btnActive,setBtnActive] =useState("#")
  const [logOutExit,setLogOutExit] =useState(false)


  return (
    <div className="L-features">
      <Link to="/home" style={{textDecoration:"none",color:"black"}}>
        <div onClick={()=>setBtnActive("#")} id='L-box' className={btnActive === "#" ? "active" : ""} >
          <AiOutlineHome className='margin'/>
          <span>Стена</span>
        </div>
      </Link>
      <Link to="/explore" style={{textDecoration:"none",color:"black"}}>
      <div id='L-box' onClick={()=>setBtnActive("#explore")} className={btnActive === "#explore" ? "active" : ""}>
        <AiOutlineSearch
          className='margin'/>
         <span>Профиль</span>
      </div>
      </Link>
          
      {/* <div id='L-box'  onClick={()=>setBtnActive("#trending")} className={btnActive === "#trending" ? "active" : ""}>
       <h1 className='notifi'>
          <FiTrendingUp 
           className='margin'/>
        </h1> 
        <span>Trending</span>
      </div>

      <div id='L-box' onClick={()=>setBtnActive("#lists")} className={btnActive === "#lists" ? "active" : ""}>
        <RiFileListLine
        className='margin'/>
        <span>Lists</span>
      </div>

      <div id='L-box' onClick={()=>setBtnActive("#saved")} className={btnActive === "#saved" ? "active" : ""}>
        <BsBookmark
         className='margin'/>
        <span>Saved</span>
      </div> */}

      <div id='L-box' onClick={()=>setBtnActive("#settings")} className={btnActive === "#settings" ? "active" : ""}>
        <FiSettings 
        className='margin'/>
        <span>Настройки</span>
      </div>

      <Link to="/notification"style={{textDecoration:"none",color:"black"}}>
      <div id='L-box' onClick={()=>setBtnActive("#notification")} className={btnActive === "#notification" ? "active" : ""}>
        
        <IoNotificationsOutline className='margin'/>
        <span>Уведомления</span>
      </div>
      </Link>

      
      

      <div className="left-user">
        <Link to="/profile" style={{textDecoration:"none",color:"black"}}>
          <div className="user-name-userid">
            <img src={profileImg ? (profileImg) : Profile} alt="" />
              <div className='L-user'>
                <h1>{modelDetails ? (modelDetails.ModelName) : "Дмитрий"}</h1>
                <span>{modelDetails ? (modelDetails.ModelUserName) : "@Lomakin98"}</span>
            </div>
          </div>
        </Link>
        <MoreHorizIcon onClick={()=>setLogOutExit(!logOutExit)} className='vert'/>
          
          {logOutExit && (
            <div className="logOutExitContainer">
              <button>Добавить дополнительный аккаунт</button>
              <Link to="/" style={{width:"100%"}}><button>Выйти из @Lomakin98</button></Link>
            </div>
          )}
      </div>

    </div>
  )
}

export default Left