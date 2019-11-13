import React from "react";
// import { Link } from "gatsby";
import styled from 'styled-components';

import Splash from "../components/splash";
import VisualState from '../components/visualState';
import Features from '../components/features';
import Installation from '../components/installation';
import Team from '../components/team';
import Image from "../components/image";
import SEO from "../components/seo";


const styles = {
  whiteNew: '#ffffff',
  reactGreen: '#012d2b',
}

const IndexPage = () => (
  <>
    <Splash>
      <SEO title="Home" />
      <h1 style={{ color: styles.reactGreen }}>STATE DEBUGGER FOR REACT</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <p style={{ color: styles.reactGreen }}>The only time-travel debugging tool you need to develop your React application by tracking, visualizing, and reverting state changes.</p>
      <p style={{ color: styles.reactGreen }}>Interested in contributing? Reactime is open-source: help make React state debugging easier!</p>
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Splash>
    <VisualState>
      <h1>STATE: TRACK, REVERT, VISUALIZE</h1>
      <h1>GIF</h1>
    </VisualState>
    <Features>
      <h1>FEATURES</h1>
      <h4>VISUALIZING, RECORDING, AND TRACKING STATE HAS NEVER BEEN SIMPLER.</h4>
    </Features>
    <Installation>
      <h1>SIMPLE INSTALLATION</h1>
      <h2>YOUTUBE TUTORIAL</h2>
    </Installation>
    <Team>
      <h1>MEET THE TEAM</h1>
    </Team>
  </>
)

export default IndexPage
