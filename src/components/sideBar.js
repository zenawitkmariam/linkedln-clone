import { Avatar } from '@mui/material'
import React from 'react'
import './sideBar.css'
import user from '../logo/userinage.jpeg'
import back from '../logo/background.jpeg'

function SideBar() {

const reviewList = (topic) =>{
    <div className="review_list">
         <span>#</span>
         <p>{topic}</p>
    </div>
}

  return (
    <div className='side_bar'>
           <div className='sidebar_top'>
                <img src={back} alt='' />
                <Avatar alt="Z" src={user}
                   className='sidebar_image' />
                <div className='sidebar_description'>
                    <h3>zenawit k/mariam </h3>
                    <p>software developer at Marakisoft Company plc</p>
                </div>
           </div>
           <div className='sidebar_numbers'>
             <div className='sidebar_number'>
                <h5>Who's viewed your profile</h5>
                <p>55</p>
             </div>
             <div className='sidebar_number'>
                <h5>Connections</h5>
                <p>22</p>
             </div>
           </div>
           <div className='sidebar_bottom'>
             <h3> Review </h3>
             <div className="review_list">
                  <span>#</span>
                  <p>developers</p>
             </div>
             <div className="review_list">
                  <span>#</span>
                  <p>Golang developers</p>
             </div>
             <div className="review_list">
                  <span>#</span>
                  <p>ALX</p>
             </div>
             <div className="review_list">
                  <span>#</span>
                  <p>Laravel developers</p>
             </div>
             <div className="review_list">
                  <span>#</span>
                  <p>test</p>
             </div>
                {/* {reviewList('Developers')}
                {reviewList('Golang Developer')}
                {reviewList('ALX')}
                {reviewList('Laravel Developer')}
                {reviewList('Test')} */}
           </div>


        {/* <div className='sidebar_bottom'>
            
        </div> */}
    </div>
  )
}

export default SideBar
