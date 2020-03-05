/* eslint-disable no-unused-vars */
import React from "react"
// import { Link } from "gatsby";
// import styled from "styled-components"

import Splash from "../components/splash"
import VisualState from "../components/visualState"
import Features from "../components/features"
import Installation from "../components/installation"
import Team from "../components/team"
import Image from "../components/image"
import SEO from "../components/seo"
// import DemoImage from "../components/DemoImage"
import demogif from "../images/demo.gif"
import css from "../components/layout.css"

const styles = {
  reactGreen: `#072D2B`, // h1-h2-h4 font-color
  lighterGreen: `#002e2b`,
  lightestGreen: `#0c4c41`,
  redCode: `#a83a32`,
}

const IndexPage = () => (
  <>
    <Splash>
      <SEO title="Home" />
      <h1
        style={{
          fontFamily: `Raleway`,
          fontSize: `1.5rem`,
          fontWeight: `500`,
          letterSpacing: `2px`,
          color: styles.reactGreen,
          margin: `160px 0 50px 0`,
          textAlign: `center`,
        }}
      >
        STATE DEBUGGER FOR <strong>REACT</strong>
      </h1>
      <div style={{ maxWidth: `300px`, marginBottom: `50px` }}>
        <Image />
      </div>
      <p
        style={{
          fontFamily: `Raleway`,
          textAlign: `center`,
          color: styles.reactGreen,
        }}
      >
        The <strong>only</strong> time-travel debugging tool you need to develop
        your React application by tracking, visualizing, and reverting state
        changes.
      </p>
      <p
        style={{
          fontFamily: `Raleway`,
          fontSize: `16px`,
          color: styles.reactGreen,
          textAlign: `center`,
          marginBottom: `50px`,
        }}
      >
        Interested in{" "}
        <span>
          <a
            style={{ textDecoration: `none`, color: styles.redCode }}
            href="https://github.com/open-source-labs/reactime"
          >
            contributing?
          </a>
        </span>{" "}
        Reactime is open-source: help make React state debugging easier!
      </p>
    </Splash>
    <VisualState>
      <h2 style={{ textAlign: `center` }}>
        <strong>STATE:</strong> Track, Revert, Visualize
      </h2>
      <img src={demogif} alt="ReacTime Demo" />
    </VisualState>
    <Features>
      <h2>
        <strong>Features</strong>
      </h2>
      <h4
        style={{
          fontWeight: `400`,
          fontSize: `13px`,
          color: styles.reactGreen,
          textAlign: `center`,
        }}
      >
        Visualizing, Recording, and Tracking <strong>STATE</strong> has never
        been simpler.
      </h4>
    </Features>
    <Installation>
      <h2 style={{ color: styles.reactGreen }}>
        <strong>Simple Installation</strong>
      </h2>
      <h6>
        <a
          style={{ textDecoration: `none`, color: styles.redCode }}
          href="https://www.youtube.com/watch?v=lmG1X7Kf6zo&t="
        >
          Youtube Tutorial
        </a>
      </h6>
    </Installation>
    <Team>
      <h2 style={{ color: styles.reactGreen }}>
        <strong>Meet the Team</strong>
      </h2>
    </Team>
  </>
)

export default IndexPage
