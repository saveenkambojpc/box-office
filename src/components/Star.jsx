import { render } from '@testing-library/react'
import React from 'react'

const Star = ({howmany}) => {
 
    const renderStar =()=>{
        let html = '';
        for(let i = 1 ; i < Math.floor(howmany)/2 ; i++){
            html += '⭐ ';
        }
        for(let i = Math.floor(howmany)/2 ; i < 5;i++){
            html += '⚪ '
        }
        return html;
        
    }
  return (
    <div>{renderStar()}</div>
  )
}

export default Star