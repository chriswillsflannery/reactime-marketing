/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useMediaQuery } from 'usehooks-ts';
import NavBar from '../components/NavBar';
import Features from '../components/features';
import Team from '../components/team';
import Image from '../components/image';
import SEO from '../components/seo';
import Footer from '../components/footer';
import DescriptionContainer from '../containers/DescriptionContainer';
import GifFeatures from  '../containers/GifFeatures';
import TerminalWindow from '../components/TerminalWindow';

const styles = {
  reactGreen: '#2D2D2F',
  lighterGreen: 'white',
  lightestGreen: '#BDD4DB',
  redCode: '#ff6569'
};

const IndexPage = () => {
  const width800 = useMediaQuery("(min-width: 800px)");
  return (
    <>
      <NavBar/>
      <div className="splash-container">
        <SEO title="Home" />
        <div
          style={{
            margin: '80px 0 80px 0',
          }}
        ></div>
          <Image />
          <h1 className="main-h1">
            <span>
              State Management and Time Travel Debugging
            </span>
            {/* <span className="reactime-h1">Reactime</span> */}
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
      <DescriptionContainer />
      <TerminalWindow
        command={
          width800
            ? "git clone https://github.com/open-source-labs/reactime.git"
            : "cd reactime"
        }
      >
        <h3>
          Get started easily with npm and instantly start monitoring web
          vitals with each new commit
        </h3>
      </TerminalWindow>
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
