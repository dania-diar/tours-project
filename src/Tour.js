import React, { useState } from 'react';

const Tour = ({id,image,info,price,name,removeTour}) => {
 const [readMore,setReadMore]=useState(false)


  return <article className='single-tour'>

    <img src={image} alt={name}/> 

<footer>

  <div className='tour-info'>
 <h4>{name}</h4>
  <div className='tour-price'>${price}</div>
  </div>

  <p>{readMore?info:`${info.substring(0,200)}...`}</p>
  <button onClick={()=> setReadMore(!readMore)}> {readMore? 'show less':'show more'}</button>
  <button className='delete-btn' onClick={()=>removeTour(id)}> Not interested</button>
</footer>
  </article>
};

export default Tour;
