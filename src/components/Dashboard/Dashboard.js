import React from 'react'
import styles from './styles.module.css'
import GoTrue from 'gotrue-js';

const Dashboard = () => {
  const func = () => {
    console.log('eff')
    let auth = new GoTrue({
      APIUrl: 'https://optimistic-elion-dd9b7a.netlify.app/.netlify/identity/token',
      audience: '',
      setCookie: false,
    });
      
      auth
        .signup('allprt89@gmail.com', 'pass123')
        .then((response) => console.log('Confirmation email sent', response))
        .catch((error) => console.log("It's an error", error));
  }
  return (
     
     <div>Dashboard <button onClick={func}>funcy</button> </div>
)}

export default Dashboard