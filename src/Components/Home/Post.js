import React from 'react'
import "../Home/Post.css"
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import SentimentSatisfiedRoundedIcon from '@mui/icons-material/SentimentSatisfiedRounded';

import {PiSmileySad} from "react-icons/pi"
import {IoVolumeMuteOutline} from "react-icons/io5"
import {MdBlockFlipped} from "react-icons/md"
import {AiOutlineDelete} from "react-icons/ai"
import {MdReportGmailerrorred} from "react-icons/md"

import {LiaFacebookF} from "react-icons/lia"
import {FiInstagram} from "react-icons/fi"
import {BiLogoLinkedin} from "react-icons/bi"
import {AiFillYoutube} from "react-icons/ai"
import {RxTwitterLogo} from "react-icons/rx"
import {FiGithub} from "react-icons/fi"

import img1 from "../../assets/Following/img-2.jpg"
import img2 from  "../../assets/Following/img-3.jpg"
import img3 from  "../../assets/Following/img-4.jpg"

import Profile from "../../assets/profile.jpg"

import { useState } from 'react';
import Comments from '../Comments/Comments';
import moment from 'moment';
import { Link } from 'react-router-dom';



const Post = ({post,posts,setPosts,setFriendsProfile,images}) => {

  const [comments,setComments] =useState([
    {
        id:1,
        profilePic:img1,
        likes:23,
        username:"Виолетта",
        time:"3 Часа назад",
        comment:"Классный пост продолжай в том же духе!!"
    },
    {
        id:2,
        profilePic:img2,
        likes:5,
        username:"Виталий",
        time:"1 Час назад",
        comment:"Крутой пост!! Я подписался!!"
    },
    {
        id:3,
        profilePic:img3,
        likes:50,
        username:"Лилия",
        time:"30 Минут назад",
        comment:"Так держать! Вперед!"
    }
])



  const [like,setLike] =useState(post.like)
  const [unlike,setUnlike] =useState(false)

  const [filledLike,setFilledLike] =useState(<FavoriteBorderOutlinedIcon />)
  const [unFilledLike,setUnFilledLike] =useState(false)

  const handlelikes=()=>{
    setLike(unlike ? like -1 :like +1)
    setUnlike(!unlike)

    setFilledLike(unFilledLike ?   <FavoriteBorderOutlinedIcon /> : <FavoriteRoundedIcon />)
    setUnFilledLike(!unFilledLike)
  }
 

  const [showDelete,setShowDelete] = useState(false)
  const [showComment,setShowComment] = useState(false)

const handleDelete=(id)=>{
  const deleteFilter =posts.filter(val=> val.id !== id)
    setPosts(deleteFilter)
    setShowDelete(false)
  }
 
  const [commentInput,setCommentInput] =useState("")

  const handleCommentInput=(e)=>{
     e.preventDefault()

    const id=comments.length ? comments[comments.length -1].id +1 : 1
    const profilePic =Profile
    const username="Дмитрий"
    const comment =commentInput
    const time= moment.utc(new Date(), 'yyyy/MM/dd kk:mm:ss').local().startOf('seconds').fromNow()

    const commentObj ={
      id:id,
      profilePic:profilePic,
      likes:0,
      username:username,
      comment:comment,
      time:time
    }
    const insert =[...comments,commentObj]
    setComments(insert)
    setCommentInput("")
  }

   const handleFriendsId=(id)=>{
      const friendsIdFilter = posts.filter(val => val.id === id)
      setFriendsProfile(friendsIdFilter)
   }

   const [socialIcons,setSocialIcons] = useState(false)




  return (
    <div className='post'>
      <div className='post-header'>
        <Link to="/FriendsId" style={{textDecoration:"none"}}>
        <div className='post-user' onClick={()=>handleFriendsId(post.id)} style={{cursor:"pointer"}}>
            <img src={post.profilepicture} className='p-img' alt="" />
            <h2>{post.username}</h2>
            <p className='datePara'>{post.datetime}</p>
        </div>
        </Link>
         
         <div className='delete'>
         {showDelete && (<div className="options">
            <button><PiSmileySad />Не интересен этот пост</button>
            <button><IoVolumeMuteOutline />Выключить звук</button>
            <button><MdBlockFlipped />Заблокировать пользователя</button>
            <button onClick={()=>handleDelete(post.id)}><AiOutlineDelete />Удалить</button>
            <button><MdReportGmailerrorred />Пожаловаться</button>
         </div>
        
         )}
          <MoreVertRoundedIcon className='post-vertical-icon' onClick={()=>setShowDelete(!showDelete)}/>
         </div>
       </div>

        <p className='body'>{
        (post.body).length <=300 ?
        post.body : `${(post.body).slice(0,300)}...`
        }</p>

       {post.img && (<img src={post.img} alt="" className="post-img" />)}
  


      <div className="post-foot">
       <div className="post-footer">
        <div className="like-icons">
          <p className='heart' 
            onClick={handlelikes}
            style={{marginTop:"5px"}}
          >
              {filledLike}
          </p>

          <MessageRoundedIcon 
            onClick= {()=>setShowComment(!showComment)}
            className='msg'  
          />

          <ShareOutlinedIcon 
            onClick={()=>setSocialIcons(!socialIcons)}
            className='share'  
          />
          {socialIcons && (
          
              <div className="social-buttons">        
        
                <a href="http://www.facebook.com" target="blank" className="social-margin"> 
                  <div className="social-icon facebook">
                    <LiaFacebookF className='social-links'/>
                  </div>
                </a>
                
                <a href="https://www.instagram.com/" target="blank"  className="social-margin">
                  <div className="social-icon instagram">
                    <FiInstagram className='social-links'/>
                  </div>
                </a>
                
                <a href="http://linkedin.com/" className="social-margin" target="blank">
                  <div className="social-icon linkedin">
                    <BiLogoLinkedin className='social-links'/>
                  </div> 
                </a>
             
                <a href="https://github.com/"  target="blank"  className="social-margin">
                  <div className="social-icon github">
                    <FiGithub className='social-links'/>
                  </div>
                </a>
                
                <a href="http://youtube.com/" target="blank"  className="social-margin">
                  <div className="social-icon youtube">
                  <AiFillYoutube className='social-links'/>
                  </div> 
                </a>
          
                <a href="http://twitter.com/" target="blank" className="social-margin">
                  <div className="social-icon twitter">
                  <RxTwitterLogo className='social-links'/>
                  </div> 
                </a>
           </div>
          )}
        </div>
        

        <div className="like-comment-details">
          <span className='post-like'>{like} человек понравилось это,</span>
          <span className='post-comment'>{comments.length} комментария</span>
        </div>
        
       {showComment && (<div className="commentSection">
        <form onSubmit={handleCommentInput}>
          <div className="cmtGroup">
              <SentimentSatisfiedRoundedIcon className='emoji'
              />
              
              <input 
              type="text" 
              id="commentInput"
              required
              placeholder='Add a comment...'
              onChange={(e)=>setCommentInput(e.target.value)}
              value={commentInput}
               />
              
              <button type='submit'><SendRoundedIcon className='send' /></button> 
          
          </div>
        </form>

        <div className="sticky">
          {comments.map((cmt)=>(
            <Comments 
            className="classComment"
            cmt={cmt}
            key={cmt.id}
            />
          ))}
          </div>
        </div>
        )}

      </div>     
    </div>
  </div>
  )
}

export default Post