import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Blog } from "./components/blog";
import { BlogDetail } from "./components/blog-detail";
// import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const HomePage = ({ landingPageData }) => {
  React.useEffect(() => {
    // Handle hash scrolling when component mounts
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          const scroll = new SmoothScroll('a[href*="#"]', {
            speed: 1000,
            speedAsDuration: true,
          });
          scroll.animateScroll(element);
        }
      }, 500); // Small delay to ensure component is fully rendered
    }
  }, []);

  return (
    <div>
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Features data={landingPageData.Features} />
      {/* <Services data={landingPageData.Services} /> */}
      {/* <Gallery data={landingPageData.Gallery} /> */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" render={() => <HomePage landingPageData={landingPageData} />} />
          <Route exact path="/blog" render={() => <Blog data={landingPageData.Blog} />} />
          <Route path="/blog/:slug" render={() => <BlogDetail data={landingPageData.Blog} />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
