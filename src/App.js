import React from 'react';
import Gallery from './Gallery/Gallery.js'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container"> 
          <h1>Sample Gallery in react</h1>
        </div>
        <div className="container">
          <Gallery />
        </div>
      </div>
    );
  }
}

export default App;
