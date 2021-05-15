import React, { useState } from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import About from './components/About';
import Hero from './components/Hero';
import ContactForm from './components/Contact';
import './App.css';

function App() {

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <>
      <Header contactSelected={contactSelected} setContactSelected={setContactSelected}>
      </Header>
      <Hero></Hero>
      <main className="main-body">
        <About></About>
        {
          !contactSelected ? (
            <Project></Project>
          ) : (
            <ContactForm></ContactForm>
          )
        }
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;