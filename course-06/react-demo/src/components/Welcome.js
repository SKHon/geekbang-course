import React, { useState, useEffect } from 'react';
export default function Welcome() {
  const [message, setMessage] = useState('init str');
  const showMessage = () => {
    // 这里有个异常
    // throw new Error('this is error');
    console.log('this is msg');
    return 'this is msg';
  }; 
  useEffect(() => {
    setMessage('this welcome page')
  }, [message]);
  return <div onClick={ showMessage }>{ message }</div>;
}