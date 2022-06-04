import React from 'react'
import { NavLink } from 'react-router-dom';
import History from '../UserHistory/History';

function Profile() {

  const UserDetails = async () =>{

  }
  
  return (
    <>
     <div className='profile-wrapper'>
       
     <div className='profile card '>
       <div className='card-wrapper'>
          <div className='card-body'>
            <div className='profile-content '>
                <h4 className='card-title'>Name Name</h4>
                <h6 className='card-text'>Gmail</h6>
                <h6 className='card-text'>Phone</h6>
            </div>
          </div>
            <div className='sidebar'>
              <p className='stars'>Stars: 4/5</p>
              <NavLink to="/addeducation" className="button-skills btn btn-dark">Add Education</NavLink>
              <NavLink to="/addskills" className="button-skills btn btn-dark">Add Skills</NavLink>
            </div>
          </div>
      
     </div>
     
     </div>
     <History/>
    </>
  )
}

export default Profile