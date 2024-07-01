import React from 'react';
import "../Notification/Notification.css";
import img1 from "../../assets/Following/img-1.jpg";
import img2 from "../../assets/Following/img-2.jpg";
import img3 from "../../assets/Following/img-3.jpg";
import img4 from "../../assets/Following/img-5.jpg";
import { AiOutlineHome } from "react-icons/ai";
import ProfileImg from "../../assets/profile.jpg";
import { Link } from 'react-router-dom';

const Notification = () => {
  return (
    <div className="noti-overall">
      <div className='nav-section'>
        <Link to="/home" style={{textDecoration:"none"}} className='noti-div'><AiOutlineHome className='noti-Home-Icon'/></Link>
        <Link to="/profile" style={{textDecoration:"none"}}><img src={ProfileImg} alt="" /></Link>
      </div>

      <div className="notification-group">
        <h1>Уведомления</h1>
        <div className="notification-section">
          <Link to="/FriendsId" style={{textDecoration:"none"}}>
          <div className="notification-msg">
            <img src={img1} alt="" />
            <p>Майк Тайсон поставил лайк <span className='noti-like'>вашему фото профиля</span><small><br />10 минут назад</small></p>
          </div>
          </Link>

          <Link to="/FriendsId" style={{textDecoration:"none"}}>
          <div className="notification-msg">
            <img src={img2} alt="" />
            <p>Виолетта поставила лайк <span className='noti-like'>вашему фото профиля</span><br /><small>1 день назад</small></p>
          </div>
          </Link>
          
          <Link to="/FriendsId" style={{textDecoration:"none"}}>
          <div className="notification-msg">
            <img src={img2} alt="" />
            <p>Виолетта поставила лайк <span className='noti-like'>вашей обложке</span><br /><small>20 секунд назад</small></p>
          </div>
          </Link>

          <Link to="/FriendsId" style={{textDecoration:"none"}}>
          <div className="notification-msg">
            <img src={img3} alt="" />
            <p>Виталий поставил лайк <span className='noti-like'>вашему фото профиля</span><br /><small>5 часов назад</small></p>
          </div>
          </Link>

          <Link to="/FriendsId" style={{textDecoration:"none"}}>
          <div className="notification-msg">
            <img src={img4} alt="" />
            <p>Камилла поставила лайк <span className='noti-like'>вашему фото профиля</span><br /><small>1 минуту назад</small></p>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notification;
