/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import React from 'react';
import NavBar from '../components/NavBar';
import Features from '../components/features';
import Team from '../components/team';
import Image from '../components/image';
import SEO from '../components/seo';
import Footer from '../components/footer';
import GifFeatures from  '../containers/GifFeatures';
import TerminalWindow from '../components/TerminalWindow';
import { useViewportScroll } from 'framer-motion';

const styles = {
  reactGreen: '#2D2D2F',
  lighterGreen: 'white',
  lightestGreen: '#BDD4DB',
  redCode: '#ff6569'
};

const IndexPage = () => {
  const { scrollYProgress } = useViewportScroll();
  return (
    <>
      <NavBar scrollYProgress={scrollYProgress} />
        <SEO title="Home" />
        <div style={{ margin: '80px 0 80px 0' }}>
        </div>
        <Image />
        <div className="splash-container">
        <h1 className="spash-header">
          <span className="spash-header-text">
            State Management and Time Travel Debugging
          </span>
        </h1>
        <h3>
          <div className="splash-info">
            <p>
              Reactime is an open source Chrome developer tool for time travel debugging and performance monitoring in React applications. Reactime enables developers to record snapshots of application state, jump between and inspect state snapshots, and monitor performance metrics such as component render time and render frequency.
            </p>
          </div>
        </h3>
        <br/>
        <br/>
      </div>
      <div className="terminal-window">
      <TerminalWindow
        command={[
          "git clone https://github.com/open-source-labs/reactime.git",
          "cd reactime",
          "npm install --force",
          "npm run build" 
        ]}
      >
        <div>
          <h3 className="terminal-header">
            Get started easily with npm and instantly start state debugging now!
              <br />
              <br />
              1. Clone repo from Reactime GitHub
              <br />
              2. Install dependencies inside repository
              <br />
              3. Start Reactime's development environment
            </h3>
        </div>
      </TerminalWindow>
      </div>
      <GifFeatures /> 
      <Features>
        <h2 style={{ color: styles.reactGreen }}>
          <strong>Additional Features</strong>
        </h2>
      </Features>
    
      <Team>
      <h2 style={{ color: styles.reactGreen }}>
          <strong>Contributors</strong>
        </h2>
      </Team>
      <Footer />
    </>
  )
};

export default IndexPage;
