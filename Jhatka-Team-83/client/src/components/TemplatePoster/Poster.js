import React from 'react'

function Poster({props}) {
  return (
    <>
      <div className='poster-wrapper'>
        <div className='title'>{props.heading}</div>
        <div className='subheading'>{props.subheading}</div>

     
      </div>
    </>
  )
}

export default Poster
