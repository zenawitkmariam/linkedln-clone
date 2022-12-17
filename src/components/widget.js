import React from 'react'
import './widget.css';
import { Avatar } from '@mui/material';
import PostHeader from './postHeader';

function Widget() {
  return (
    <div className='widget'>
       <h4> Add to your feed</h4>
       <PostHeader feed={true} />
       <PostHeader feed={true} />
       <PostHeader feed={true} />
    </div>
  )
}

export default Widget
