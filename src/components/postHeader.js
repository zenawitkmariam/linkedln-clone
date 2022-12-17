import React from 'react'
import { Avatar, Button } from '@mui/material';
import './postHeader.css'

function PostHeader({feed}) {
  return (
    <div className='post_header'>
        <div className='header'>
            <Avatar src='user' alt="" style={{height:35,width:35}} />
            <div className='header_content'>
                <p className='header_content_name'>Zenawit K/mariam</p>
                <p className='header_content_title'>Software Developer at Maraki</p>
                {!feed && <p className='header_content_time'>1 hour</p>}
                {feed && 
                  // <form> <input placeholder=' + Follow ' /> <button type='submit'> </button> </form>
                    <Button  variant="outlined" color="secondary" size="small" className='button_class'> + Follow </Button>
                }
            </div>
        </div>
    </div>
  )
}

export default PostHeader
