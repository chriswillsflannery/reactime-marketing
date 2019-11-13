/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';

import "./layout.css"

const StyledWrapper = styled.div`
  background: #F7FBF9;
`;

const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const StyledGridElement = styled.div`
  background: white;
  width: 200px;
  height: 100px;
  margin: 10px;
  border-radius: 10px;
`;

const Layout = ({ children }) => {

  return (
    <>
      <StyledWrapper>
        <StyledDiv>
          <StyledMain>
            {children}
            <Grid>
              <StyledGridElement />
              <StyledGridElement />
              <StyledGridElement />
              <StyledGridElement />
              <StyledGridElement />
              <StyledGridElement />
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
