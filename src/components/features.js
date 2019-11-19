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
  reactGreen: `#072D2B`,
  lighterGreen: `#002e2b`,
  lightestGreen: `#0c4c41`,
  reactGold: `#ECCB98`,
  lighterGold: `#E4C2B3`
}

const StyledWrapper = styled.div`
  background: ${styles.lighterGreen};
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
  background: ${styles.lighterGold};
  width: 295px;
  height: 100px;
  margin: 10px;
  font-family: 'Raleway', sans-serif;
  border-radius: 10px;
  h4 {
    color: ${styles.reactGreen};
    margin: 0;
  }
  p {
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
              <StyledGridElement>
                <h4>React Hooks</h4>
                <p>State tracking for useState, useEffect & more.</p>
              </StyledGridElement>
              <StyledGridElement>
                <h4>Context API</h4>
                <p>Additional Support for Context + useContext.</p>
              </StyledGridElement>
              <StyledGridElement>
                <h4>React Router</h4>
                <p>View page state and previous URLs.</p>
              </StyledGridElement>
              <StyledGridElement>
                <h4>Stateful Components</h4>
                <p>Prop-drilling? Track your state easily.</p>
              </StyledGridElement>
              <StyledGridElement>
                <h4>Concurrent Mode</h4>
                <p>Experiment with new features like Suspense and useTransition.</p>
              </StyledGridElement>
              <StyledGridElement>
                <h4>TRY REACTIME WITH OUR DEMOS</h4>
                <p>
                  <a href="http://reactime-demo1.us-east-1.elasticbeanstalk.com/">
                    Calculator
                  </a>{" "}
                  &amp;{" "}
                  <a href="http://reactime-demo2.us-east-1.elasticbeanstalk.com/">
                    Bitcoin Price
                  </a>
                  .
                </p>
              </StyledGridElement>
            </Grid>
            <h4 style={{ fontWeight: `400`, fontSize: `13px`, color: styles.lighterGold, textAlign: `center` }}>Read more about what's new in version 3.0 <a style={{ textDecoration: `none`, color: `white` }} href="https://tinyurl.com/reactimeMedium">here</a></h4>
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
