import React from 'react';
import profilephoto from '../../assets/profilepic/linkedinprof.jpeg';

function About() {
    return (
        <section>
            <div className="flex-row">
                <h2 id="about-me">About Me</h2>


                <p className=" left-margin-line">
                    I learned to code because of my long standing interest in internet law and policy. 
                    
                    After law school, nonprofits gave me a chance to cut my teeth on 4th amendment questions in the digital sphere, fair use questions, and trademark enforcement. 
                    
                    This led to positions in intellectual property policy teams at social media companies.

                    Advising on open source licenses, compliance, and strategic collaborations combines my love of negotiation, copyright law, and understanding product needs. 
                    
                    Providing good open source compliance advice also requires technical understanding.
                    
                    To continue my education I enrolled in the UC Berkeley Extension javascript full stack engineering bootcamp (2020-2021).

                    Check out my work on GitHub.
                </p>
                <img src={profilephoto} alt="hilary" />
            </div>
        </section>
    );
}

export default About;