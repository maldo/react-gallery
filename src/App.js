import React from 'react';
import Gallery from './Gallery/Gallery.js'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Sample Gallery in react </h1>
        <Gallery />
      </div>
    );
  }
}

export default App;