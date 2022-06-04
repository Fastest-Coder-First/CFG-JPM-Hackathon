import React, { useState, useEffect } from 'react'
import { getDocs, collection } from "firebase/firestore";
import {db} from '../../firebase-config';

function Poster() {

  const localdb = collection(db, "Poster");
  const [user, setUser] = useState({Title:"",Subheading:"",Content:"",Image:""});
  

  const getPosterData = async () =>{
    const data = await getDocs(localdb);
    setUser({...data, Title:data.docs.Title[(data.length)-1], Subheading:data.docs.Subheading[data.length-1], Content:data.docs.Content[data.length-1] ,Image:data.docs.Image[data.length-1]})
  }

  useEffect(() =>{
    getPosterData();
  }, []);

  return (
    <>
      <div className='poster-wrapper container card' id='post'>
        <div className="post">
          <div className='title'>
            <h2>{user.Title}</h2>
          </div>
          <div className="date">
              <span>{user.Subheading}</span>
          </div>
          
          <div className='image'>
            <img src={user.Image} className="image" alt="poster-image"/>
          </div>
          <div className='content'>
            <p className='text'>{user.Content}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Poster
