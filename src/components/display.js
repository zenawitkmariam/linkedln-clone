import { Avatar } from '@mui/material';
import React from 'react'
import './display.css';
import user from '../logo/userinage.jpeg'
import PostOption from './postOption';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './post'

function Display() {
  return (
    <div className='display'>
    <div className='feed_post'>
        <div className='display_top_section'>
            <Avatar src={user} alt="" />
            <form>
                <input placeholder='Start a post' />
                <button type='submit'>Send</button>
            </form>
        </div>
         <div className='display_icons'>
          <PostOption title='Photo' Icon={ImageOutlinedIcon} color='#4287f5' />
          <PostOption title='Video' Icon={ArticleOutlinedIcon} color='green' />
          <PostOption title='Event' Icon={EventIcon} color='orange' />
          <PostOption title='White Article' Icon={ArticleIcon} color='red' />
        </div>
    </div>
      <div className='post_view'>
         <Post />
          <Post />
         <Post />
         <Post />
      </div>
    </div>
  )
}

export default Display
