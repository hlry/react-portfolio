import React from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import About from './components/About';
import Hero from './components/Hero';
import './App.css';

function App() {

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <div class="main-body">
        <About></About>
        <Project></Project>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;