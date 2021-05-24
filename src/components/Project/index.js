import React from 'react';

function Project() {


    return (

        <section>
            <div className="flex-row">
                <h2 id="port">Work</h2>
                <div className="projects-grid-container left-margin-line">

                    <div id="run-buddy">
                        <a href="https://hlry.github.io/run-buddy/">
                            <div className="project-name">Run Buddy</div>
                        </a>
                    </div>

                    <a href="https://hlry.github.io/horiseon/">
                        <div className="project-grid-item" id="horiseon">
                            <div className="project-name">Horiseon</div>
                        </div>
                    </a>

                    <a href="https://hlry.github.io/robot-gladiators/">
                        <div className="project-grid-item" id="robot-gladiator">
                            <div className="project-name">Robot
                            Gladiators</div>
                        </div>
                    </a>

                    <a href="https://hlry.github.io/taskinator/">
                        <div className="project-grid-item" id="taskinator">
                            <div className="project-name">Taskinator</div>
                        </div>
                    </a>

                    <a href="https://hlry.github.io/friendly-parakeet/">
                        <div className="project-grid-item" id="pw-generator">
                            <div className="project-name">Password
                            Generator</div>
                        </div>
                    </a>

                    <a href="https://hlry.github.io/california-camping-planner/">
                        <div className="project-grid-item" id="cal-parks">
                            <div className="project-name">California Parks Planner</div>
                        </div>
                    </a>

                    <a href="https://polar-lowlands-05168.herokuapp.com/">
                        <div className="project-grid-item" id="pet-adopter">
                            <div className="project-name">Pets R Us</div>
                        </div>
                    </a>

                    <a href="https://tranquil-falls-18471.herokuapp.com/">
                        <div className="project-grid-item" id="green-thumbs">
                            <div className="project-name">Green Thumbs</div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Project;