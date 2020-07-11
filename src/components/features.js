/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import "./layout.css"

const styles = {
  reactGreen: `#487783`, //h4 font-color #072D2B
  lightestGreen: `#BDD4DB`,
  iconBColor: `#353C44`, // feature icon bg #E4C2B3
}

const StyledWrapper = styled.div`
  background: radial-gradient(circle, rgba(53,60,68,1) 0%, rgba(0,0,0,1) 100%);
`

const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 40px;
`

const StyledGridElement = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  background: ${styles.iconBColor};
  width: 295px;
  height: 100px;
  margin: 10px;
  font-family: "Raleway", sans-serif;
  border-radius: 5px;
  border: 1px solid rgba(184, 196, 194, 0.25);
  box-shadow: 2px 3px 4px 2px rgba(0, 0, 0, 0.2);
  h4 {
    color: ${styles.reactGreen};
    margin: 0;
  }
  p {
    color: white;
    text-align: center;
    margin-bottom: -5px;
    line-height: 20px;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <StyledWrapper>
        <StyledDiv>
          <StyledMain>
            {children}
            <Grid>
              <StyledGridElement className="feaStyle">
                <h4>React Hooks</h4>
                <p>State tracking for useState, useEffect & more.</p>
              </StyledGridElement>
              <StyledGridElement className="feaStyle">
                <h4>Context API</h4>
                <p>Additional Support for Context + useContext.</p>
              </StyledGridElement>
              <StyledGridElement className="feaStyle">
                <h4>React Router</h4>
                <p>View page state and previous URLs.</p>
              </StyledGridElement>
              <StyledGridElement className="feaStyle">
                <h4>TypeScript Support</h4>
                <p>Prop-drilling in TypeScript? Track all state changes easily.</p>
              </StyledGridElement>
              <StyledGridElement className="feaStyle">
                <h4>Concurrent Mode</h4>
                <p>
                  Experiment with new features like Suspense and useTransition.
                </p>
              </StyledGridElement>
              <StyledGridElement className="feaStyle">
                <h4>TRY REACTIME WITH OUR DEMOS</h4>
                <p>
                  <a 
                  style={{ textDecoration: `none`, color: `#99A93A`, }}
                  href="https://joshua0308.github.io/calculator/">
                    Calculator
                  </a>{" "}
                  &amp;{" "}
                  <a 
                  style={{ textDecoration: `none`, color: `#99A93A`, }}
                  href="http://reactime-demo2.us-east-1.elasticbeanstalk.com/">
                    Bitcoin Price
                  </a>
                  .
                </p>
              </StyledGridElement>
            </Grid>
            <h4
              style={{
                fontWeight: `400`,
                fontSize: `13px`,
                color: styles.lightestGreen,
                textAlign: `center`,
              }}
            >
              Read more about what's new in Reactime{" "}
              <a
                style={{ textDecoration: `none`, color: `#62D6FB`, }}
                href="https://tinyurl.com/reactimeMedium"
              >
                here
              </a>
            </h4>
            <h4
              style={{
                fontWeight: `400`,
                fontSize: `13px`,
                color: styles.lightestGreen,
                textAlign: `center`,
              }}
            >
              See the latest Reactime release notes {" "}
              <a
                style={{ textDecoration: `none`, color: `#62D6FB`, }}
                href="https://github.com/open-source-labs/reactime/releases/tag/3.1.1"
              >
                here
              </a>
            </h4>
          </StyledMain>
        </StyledDiv>
      </StyledWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
