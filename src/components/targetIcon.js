import { Avatar } from '@mui/material'
import React from 'react'
import './targetIcon.css'

function TargetIcon({Icon,name,avatar}) {
  return (
    <div className='target'>
      {Icon &&  <Icon className='target_icon' /> }
      {avatar && <Avatar alt="Z" className='target_image_icon' src={avatar} sx={{height:25,width:25}} /> }
      <h2>{name}</h2>
    </div>
  )
}

export default TargetIcon
