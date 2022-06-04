import React, { useState, useEffect } from 'react';
export default function Welcome() {
  const [message, setMessage] = useState('init str');
  const showMessage = () => {
    return 'this is msg'
  } 
  useEffect(() => {
    setMessage('this welcome page')
  }, [message])
  return <div onClick={ showMessage }>{ message }</div>
}