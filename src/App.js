import React from 'react';
import Header from './components/Header';
// import Project from './components/Project';
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

        <section>
          <div class="flex-row">
            <h2 id="work">Work</h2>
            <div class="projects-grid-container left-margin-line">
              {/* <!-- Run Buddy --> */}
              <div id="run-buddy">
                <a href="https://hlry.github.io/run-buddy/">
                  <div class="project-name">Run Buddy</div>
                </a>
              </div>
              {/* <!-- Horiseon --> */}
              <a href="https://hlry.github.io/horiseon/">
                <div class="project-grid-item" id="horiseon">
                  <div class="project-name">Horiseon</div>
                </div>
              </a>
              {/* <!-- Robot Gladiators --> */}
              <a href="https://hlry.github.io/robot-gladiators/">
                <div class="project-grid-item" id="robot-gladiator">
                  <div class="project-name">Robot
                                    Gladiators</div>
                </div>
              </a>
              {/* <!-- Taskinator --> */}
              <a href="https://hlry.github.io/taskinator/">
                <div class="project-grid-item" id="taskinator">
                  <div class="project-name">Taskinator</div>
                </div>
              </a>
              {/* <!-- Password Generator --> */}
              <a href="https://hlry.github.io/friendly-parakeet/">
                <div class="project-grid-item" id="pw-generator">
                  <div class="project-name">Password
                                    Generator</div>
                </div>
              </a>
              {/* <!-- California Park Planner --> */}
              <a href="https://hlry.github.io/california-camping-planner/">
                <div class="project-grid-item" id="cal-parks">
                  <div class="project-name">California Parks Planner</div>
                </div>
              </a>
              {/* <!-- Pets R Us --> */}
              <a href="https://polar-lowlands-05168.herokuapp.com/">
                <div class="project-grid-item" id="pet-adopter">
                  <div class="project-name">Pets R Us</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section class="contact">
          <div class="flex-row">
            <h2 id="contact-me">Contact Me</h2>
            <div class="contact-box  left-margin-line">
              {/* <ul>
                <li>
                  <a>555.555.5555</a>
                </li>
                <li>
                  <a>hlry@website.com</a>
                </li>
                <li>
                  <a href="https://github.com/hlry">GitHub</a>
                </li>
                <li>
                  <a href="https://twitter.com/historiaster">Twitter</a>
                </li>
                <li>
                  <a href="https://spotify.github.io/">Spotify</a>
                </li>
              </ul> */}
              <Footer></Footer>
            </div>
          </div>
        </section>

      </div>



    </>
  );
}

export default App;
