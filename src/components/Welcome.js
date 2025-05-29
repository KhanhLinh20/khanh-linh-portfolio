import React from 'react';
import './Welcome.css';

// import jsLogo from '../assets/js.png';
// import reactLogo from '../assets/react.png';
// import figmaLogo from '../assets/figma.png';
// import firebaseLogo from '../assets/firebase.png';
// import mongoLogo from '../assets/mongodb.png';
// import githubLogo from '../assets/github.png';

function Welcome() {
  return (
    <section className="welcome-section text-white d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-md-6">
            <p className="badge bg-gradient">✨ Fullstack Developer Portfolio</p>
            <h1 className="display-4 gradient-text fw-bold">
              Bringing <span>Value</span><br />
              To the <span>Best Projects</span>
            </h1>
            <p className="lead mt-3">
              Hi, I’m Linh – a passionate self-taught developer.<br />
              I love turning ideas into real products, and I truly believe that with enough effort and a willingness to learn, it doesn’t matter where you’re from — city or countryside.
            </p>
            <button className="btn btn-gradient mt-3">Learn More!</button>
          </div>

          {/* Icon Section */}
          {/* <div className="col-md-6 d-flex flex-wrap justify-content-center icon-container">
            <img src={githubLogo} alt="GitHub" />
            <img src={mongoLogo} alt="MongoDB" />
            <img src={figmaLogo} alt="Figma" />
            <img src={firebaseLogo} alt="Firebase" />
            <img src={reactLogo} alt="React" />
            <img src={jsLogo} alt="JavaScript" />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Welcome;
