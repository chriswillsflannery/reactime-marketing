/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useMediaQuery } from 'usehooks-ts';
import Splash from '../components/splash';
import VisualState from '../components/visualState';
import Features from '../components/features';
import Team from '../components/team';
import Image from '../components/image';
import SEO from '../components/seo';
import styled from 'styled-components';
// import demogif from '../images/old/new-reactime.gif';
import ReactimeFullLogo from '../images/ReactimeIO.png';
import Footer from '../components/footer';
import DescriptionContainer from '../containers/DescriptionContainer';
import GifFeatures from  '../containers/GifFeatures';
import TerminalWindow from '../components/TerminalWindow';
import LandingImage from '../images/new-reactime.gif';

const styles = {
  reactGreen: '#2D2D2F',
  lighterGreen: 'white',
  lightestGreen: '#BDD4DB',
  redCode: '#ff6569'
};

// Image AND Text
const SplashContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  @media only screen and (max-width: 800px) {
    font-size: 0.8em;
    flex-direction: column;
  }
  @media only screen and (max-height: 420px) {
    margin-top: 65px;
  }
  transform: translate(0px, 80px);
`;

const DownloadButton = styled.div`
  button {
    font-family: Archivo;
    text-decoration: none;
    color: black;
    background-color: ${styles.reactGreen};
    border: none;
    margin: 5px;
    padding: 0px 1em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 3em;
    width: 10em;
    border-radius: 5px;
    opacity: 75%;
    transition: 0.3s;
  }
  &:hover .download {
    cursor: pointer;
    opacity: 100%;
  }
`;


const IndexPage = () => {
  const width545 = useMediaQuery("(min-width: 545px)");
  return (
    <>
      <Splash>
        <SEO title="Home" />
        <div
          style={{
            margin: '80px 0 80px 0',
          }}
        ></div>
        <SplashContainer>
          <Image />
          <h1 className="main-h1">
            <span>
              State Management and Time Travel Debugging
            </span>
            {/* <span className="reactime-h1">Reactime</span> */}
          </h1>
          <h3>
            <span>Reactime is an open source Chrome developer tool for time travel debugging and performance monitoring in React applications. Reactime enables developers to record snapshots of application state, jump between and inspect state snapshots, and monitor performance metrics such as component render time and render frequency.</span>
          </h3>
          <br/>
          <br/>
        </SplashContainer>
      </Splash>
      
      <DescriptionContainer />
      <TerminalWindow
        command={
          width545
            ? "git clone https://github.com/open-source-labs/reactime.git"
            : "cd reactime"
        }
      >
        <h3>
          Get started easily with npm and instantly start monitoring web
          vitals with each new commit
        </h3>
      </TerminalWindow>
      {/* <TerminalWindow
        command={
          width545
            ? "npm install --force"
            : "npm run build"
        }
      >
        <h3>
          Get started easily with npm and instantly start monitoring web
          vitals with each new commit
        </h3>
      </TerminalWindow> */}
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
