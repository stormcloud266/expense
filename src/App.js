import {useEffect} from 'react'
import GoTrue from 'gotrue-js';
import './App.css'

function App() {

  const func = () => {
    console.log('eff')
  }

  useEffect(() => {
    console.log('eff')
    // let auth = new GoTrue({
    //   APIUrl: 'https://optimistic-elion-dd9b7a/.netlify/identity',
    //   audience: '',
    //   setCookie: false,
    // },[]);
    
    // auth
    //   .signup('allprt89@gmail.com', 'pass123')
    //   .then((response) => console.log('Confirmation email sent', response))
    //   .catch((error) => console.log("It's an error", error));
  })

  return (
    <div className="App">
     page 1
     <button onClick={func}>funcy</button>
    </div>
  );
}

export default App;
