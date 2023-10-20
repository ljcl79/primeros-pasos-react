import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Banner from './components/Banner/Banner.jsx';
import Gallery from './components/Gallery/Gallery.jsx';

function App() {
  
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Banner></Banner>
      <Gallery></Gallery>
    </>
  )
}

export default App
