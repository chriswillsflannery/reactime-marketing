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

const StyledWrapper = styled.div`
  background: #f7fbf9;
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const StyledGridElement = styled.div`
  background: white;
  width: 200px;
  height: 100px;
  margin: 10px;
  border-radius: 10px;
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
                <div className="box--title">React Hooks</div>
                <p>State tracking for useState.</p>
              </StyledGridElement>
              <StyledGridElement>
                <div className="box--title">Context API</div>
                <p>Additional Support for Context API.</p>
              </StyledGridElement>
              <StyledGridElement>
                <div className="box--title">React Router</div>
                <p>Support for React Router.</p>
              </StyledGridElement>
              <StyledGridElement>
                <div className="box--title">Stateful Components</div>
                <p>Prop-drilling? Track your state easily.</p>
              </StyledGridElement>
              <StyledGridElement>
                <div className="box--title">React Hooks</div>
                <p>Visualize and track state changes.</p>
              </StyledGridElement>
              <StyledGridElement>
                <div className="box--title">TRY REACTIME WITH OUR DEMOS</div>
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
