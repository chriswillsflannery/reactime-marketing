import React from "react"
// import { Link } from "gatsby";
import styled from "styled-components"

import Splash from "../components/splash"
import VisualState from "../components/visualState"
import Features from "../components/features"
import Installation from "../components/installation"
import Team from "../components/team"
import Image from "../components/image"
import SEO from "../components/seo"
// import DemoImage from "../components/DemoImage"
import demogif from "../images/demo.gif"

const styles = {
  whiteNew: "#ffffff",
  reactGreen: "#012d2b",
}

const IndexPage = () => (
  <>
    <Splash>
      <SEO title="Home" />
      <h1 style={{ fontWeight: 400, color: styles.reactGreen }}>STATE DEBUGGER FOR REACT</h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <p style={{ color: styles.reactGreen }}>
        The only time-travel debugging tool you need to develop your React
        application by tracking, visualizing, and reverting state changes.
      </p>
      <p style={{ color: styles.reactGreen }}>
        Interested in contributing? Reactime is open-source: help make React
        state debugging easier!
      </p>
    </Splash>
    <VisualState>
      <h2>STATE: TRACK, REVERT, VISUALIZE</h2>
      <img src={demogif} alt="ReacTime Demo" />
    </VisualState>
    <Features>
      <h2>FEATURES</h2>
      <h4>
        VISUALIZING, RECORDING, AND TRACKING STATE HAS NEVER BEEN SIMPLER.
      </h4>
    </Features>
    <Installation>
      <h2>SIMPLE INSTALLATION</h2>
      <h6>YOUTUBE TUTORIAL</h6>
    </Installation>
    <Team>
      <h2>MEET THE TEAM</h2>
    </Team>
  </>
)

export default IndexPage
