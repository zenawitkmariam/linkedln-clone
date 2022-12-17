import React from 'react'
import './postOption.css'

function PostOption({title, color , Icon}) {
  return (
    <div className='postOptions'>
        <Icon style={{color:color}} />
        <p>{title}</p>
    </div>
  )
}

export default PostOption
