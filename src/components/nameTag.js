import React from "react";

function nameTag(props) {
  if (!props.firstName && !props.lastName) {
    return (
      <div className="name">
        <h3>Invalid name</h3>
      </div> 
    );    
  }  

  return (
    <div className="name">
      <h3>First name: {props.firstName}</h3>
      <h3>Last name: {props.lastName}</h3>
      {
        (props.firstName === 'john' && <div style={{color:'green'}}>VIP</div>)
      }
    </div>
  );

}

export default nameTag;
