import React from 'react'

function Poster({props}) {
  return (
    <>
      <div className='poster-wrapper container card' id='post'>
        <div class="post">
          <div className='title'>
            <h2>{props.heading}</h2>
          </div>
          <div class="date">
              <span>{props.date} | {props.subheading}</span>
          </div>
          
          <div className='image'>
            <img src={props.img} className="image" alt="poster-image"/>
          </div>
          <div className='content'>
            <p className='text'>{props.content}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Poster
