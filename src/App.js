import React from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import './App.css';

{/* // <div>
    //   <main>
        <Header>
        </Header>
    //     <Project></Project>
    //     <Footer></Footer>
    //   </main>
    // </div> */}


function App() {

  return (
    <>
      <Header></Header>

      <section class="hero">
        <div>
          <h3>Connect for your website needs!</h3>
        </div>
      </section>

      <div class="main-body">

        <section>
          <div class="flex-row">
            <h2 id="about-me">About Me</h2>
            <p class=" left-margin-line">
              Drinking vinegar trust fund prism kogi actually blue bottle, ramps seitan aesthetic dreamcatcher
              church-key live-edge hot chicken. Drinking vinegar beard master cleanse, poke man braid blog
              fingerstache food truck hoodie hot chicken snackwave asymmetrical banh mi lo-fi cloud bread. Kitsch
              photo booth selvage, raw denim copper mug kickstarter chicharrones. Church-key tousled squid blog
              subway tile, yr flannel meggings trust fund 90's iPhone. PBR&B vegan raw denim, 3 wolf moon
              wayfarers cold-pressed pug gochujang tumeric tumblr flannel cardigan live-edge microdosing
              gastropub. Trust fund lomo fingerstache taxidermy tacos palo santo shabby chic hoodie. Activated
                        charcoal heirloom four loko stumptown, gluten-free fixie gochujang affogato. <br /><br />

                        Succulents offal chia etsy squid ramps 3 wolf moon godard. Literally kickstarter four loko locavore
                        flexitarian plaid snackwave hoodie yuccie man braid. Whatever migas VHS fanny pack pop-up activated
                        charcoal jean shorts, 90's shoreditch succulents tilde pitchfork. Pinterest af shoreditch, ethical
                        8-bit listicle live-edge hella ugh.
                    </p>
          </div>
        </section>

        <Project></Project>

        <Footer></Footer>

      </div>



    </>
  );
}

export default App;