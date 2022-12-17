import React from 'react'
import user from '../logo/userinage.jpeg'
import PostOption from '../components/postOption.js'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import './post.css'
import { Avatar } from '@mui/material';
import PostHeader from '../components/postHeader.js'

function Post() {
  return (
    <div className='post'>
        <PostHeader />
        <div className='body'>
           <p> Consider now provided laughter boy landlord dashwood. Often voice and the spoke. No shewing fertile village equally prepare up females as an. That do an case an what plan hour of paid. Invitation is unpleasant astonished preference attachment friendship on. Did sentiments increasing particular nay. Mr he recurred received prospect in. Wishing cheered parlors adapted am at amongst matters.
           </p>
        </div>
        <div className='comment'>
           <PostOption title='Like' Icon={ThumbUpAltOutlinedIcon} color='' />
           <PostOption title='Comment' Icon={ChatRoundedIcon} color='' />
           <PostOption title='Post' Icon={LoopOutlinedIcon} color='' />
           <PostOption title='Send' Icon={SendRoundedIcon} color='' />
        </div>
    </div>
  )
}

export default Post
