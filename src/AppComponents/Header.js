import React from 'react';

export const Header = () => {
  return (
    <div>
      <nav id="nav-bar" style={{ backgroundColor: "rgb(0, 123, 191)" }} className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a style={{ color: "white", fontSize: "x-large" }} className="navbar-brand" href="#"><h1 style={{ fontSize: "x-large" }}>Yashasvi</h1></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" style={{ backgroundColor: "rgb(0, 123, 191)" }} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul style={{ fontSize: "large" }} className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a id="nav-home" style={{ color: "white" }} className="nav-link active btn" aria-current="page">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#experiences-section" id="nav-exp" style={{ color: "white" }} className="nav-link active btn" aria-current="page">
                    Experience
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#whole-certifications" id="nav-cert" style={{ color: "white" }} className="nav-link active btn" aria-current="page">
                    Certifications
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#all-educations" id="nav-edu" style={{ color: "white" }} className="nav-link active btn" aria-current="page">
                    Education
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#project-section" id="nav-project" style={{ color: "white" }} className="nav-link active btn" aria-current="page">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#a-resume" id="nav-resume" style={{ color: "white" }} className="nav-link active btn" aria-current="page">
                    Resume
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#connect" id="nav-contact" style={{ color: "white" }} className="nav-link active btn" aria-current="page">
                    Connect With Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
