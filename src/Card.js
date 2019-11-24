import React from 'react';
import 'tachyons';

const Card = ({id, name, email}) => {
  return(
    <div className='tc bg-light-green dib br3 pa3 ma2 grow'>
      <img alt='photo' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}
export default Card