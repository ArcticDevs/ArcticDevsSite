import "aos/dist/aos.css";

import AOS from 'aos';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

AOS.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-quad",
      delay: 100,
    });


ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);


