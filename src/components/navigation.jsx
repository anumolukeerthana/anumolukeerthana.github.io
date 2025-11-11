import React from "react";
import { Link, withRouter } from "react-router-dom";

export const Navigation = withRouter((props) => {
  const { location } = props;

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();

    // If we're not on the home page, navigate to home page first
    if (location.pathname !== '/') {
      props.history.push(`/#${sectionId}`);
    } else {
      // If we're on the home page, just scroll to the section
      const anchor = document.querySelector(`#${sectionId}`);
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Link to="/" className="navbar-brand">
            Dietello
          </Link>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">

            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="page-scroll">
                Explore
              </a>
            </li>
            <li>
              <Link to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <a href="#team" onClick={(e) => handleNavClick(e, 'team')} className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
});
