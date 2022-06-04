import React from 'react'
import {db, auth} from '../../firebase-config';

function Poster() {

  const localdb = collection(db, "");
  const [user, setUser] = useState({title:"",subheading:"",content:"",img:""});
  

  const getPosterData = async () =>{
    const data = await getDocs(localdb);
    setUserData({...userData, title:data.docs.img[length(data)-1], subheading:data.docs.img[length(data)-1], content:data.docs.img[length(data)-1] ,img:data.docs.img[length(data)-1]})
  }

  useEffect(() =>{
    getPosterData();
  }, []);

  return (
    <>
      <div className='poster-wrapper container card' id='post'>
        <div class="post">
          <div className='title'>
            <h2>{user.title}</h2>
          </div>
          <div class="date">
              <span>{user.subheading}</span>
          </div>
          
          <div className='image'>
            <img src={user.img} className="image" alt="poster-image"/>
          </div>
          <div className='content'>
            <p className='text'>{user.content}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Poster
