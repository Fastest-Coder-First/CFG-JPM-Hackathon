import React from 'react'

function HistoryItems({items}) {
  
  
  
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, desc, price } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h6 className='price'>Upvotes{price}</h6>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  )
}

export default HistoryItems