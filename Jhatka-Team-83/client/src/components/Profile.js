import React from 'react'
import History from './UserHistory/History';

function Profile() {

  const UserDetails = async () =>{
      
  }
  return (
    <>
     <div className='profile-wrapper'>
       
     <div className='profile card '>
       <div className='card-body'>
        <div className='profile-content '>
            <h4 className='card-title'>Name Name</h4>
            <h6 className='card-text'>Gmail</h6>
            <h6 className='card-text'>Phone</h6>
        </div>
          <div className='sidebar'>
            <p>Stars: 4/5</p>
          </div>
        </div>
     </div>
     </div>
     <History/>
    </>
  )
}

export default Profile