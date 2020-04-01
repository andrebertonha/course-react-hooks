import React from 'react';

function nameTag(props){
  return (
    <div className='name'>
      <h3>First name: {props.firstName}</h3>
      <h3>Last name: {props.lastName}</h3>
    </div>
  )
}

export default nameTag;