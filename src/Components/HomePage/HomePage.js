import React, { Component } from 'react';
import maeglinImageSmall from '../../maeglinImageSmall.png'


export default class HomePage extends Component {
  render() {
  return(
    
        
        <div className='mainImage'>
          {/* this is exactly how a new chapter looks in the official book.  This is also the exact 
          font and font color used */}
        <img src={maeglinImageSmall} alt='alt' id='mImage' />
        </div>
        
   
  )
}
}