import React from 'react';

function Resume() {

    return (
        <section>
            <div className="flex-row">
                <h2 id="resume">Resume</h2>
                <p>
                    Please download my{" "}
                    <a
                        href="https://www.nytimes.com/2021/04/17/opinion/resume-advice.html"
                        target="_blank"
                        rel="noreferrer"
                        download
                    >resume</a> for more details. Skills include: <br></br>
                    * Front-end (HTML, CSS, React, bootstrap, bulma, etc.) <br></br>
                    * Server-side <br></br>
                    * Database management (SQL and NoSQL)
            </p>
            </div>
        </section>
    );
}

export default Resume;