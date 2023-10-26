import {Header} from './AppComponents/Header.js'
import {Main} from './AppComponents/Main.js'
import {Footer} from './AppComponents/Footer.js'
import {Loading} from './AppComponents/Loading.js'
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  setTimeout(() => {
    setIsLoading(false);
  }, 3000); // Set the timeout to 2 seconds (adjust as needed)
  return (

        <div className="App">
      {isLoading ? (
        // Show a loading message or component
        <div>
          <Loading/>
        </div>
      ) : (
        // Your content goes here
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
      )}
    </div>

  );
}

export default App;
