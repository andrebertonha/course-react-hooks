import React from 'react';
import '../App.scss'

function Input({ placeholder, type }){
  return <input placeholder={placeholder} type={type}></input>
}

export default Input