import React, {useState, useEffect} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faCcMastercard, faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faPlus, faCode, faAngleRight, faStar, faSearch, faDesktop, faMinus, faArrowRight, faArrowLeft, faWindowClose, faCoffee, faUser, faBars, faSquare, faMedal, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose as reg, faStar as star, faEye as eye,  faEyeSlash, faComment } from '@fortawesome/free-regular-svg-icons'
import './App.css';
import Form from './components/Form'
import Header from './components/Header'


library.add(fab, star, faSearch, faDesktop, faCode, faEyeSlash, faComment, faCcMastercard, eye, faAngleRight, faSquare, faStar, faPlus, faMinus, faArrowRight, faArrowLeft, faWindowClose, reg, faMedal, faBars, faShoppingBag, faCheckSquare, faUser, faCoffee, faFacebookF, faTwitter, faLinkedinIn, faInstagram)

function App() {
  const [loading, setLoading] = useState(!false);

  

  useEffect( () => {
    demoAsyncCall().then(() => setLoading(false));
  }, [loading])

  

  

    

  return(
    loading ? <div className='loader'></div> : (<div className='full-container'>
      <Form />
      <Header />
    </div>)
  );

  
    
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

export default App;
