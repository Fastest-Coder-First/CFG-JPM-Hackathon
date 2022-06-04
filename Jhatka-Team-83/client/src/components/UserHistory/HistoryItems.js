import React, { useState, useEffect } from 'react'
import { getDocs, addDoc, collection } from "firebase/firestore";
import {db,auth} from '../../firebase-config';
import { onAuthStateChanged} from "firebase/auth";

function HistoryItems({items}) {
  
  
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, desc, upvotes } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h6 className='price'>Upvotes: {upvotes}</h6>
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