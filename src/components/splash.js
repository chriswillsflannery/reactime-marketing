/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import Header from "./header";
import '../styles/layout.scss';

// Background-color LOGO
const StyledWrapper = styled.div`
  padding-bottom: 2em;
`

const StyledDiv = styled.div`
  margin: auto;
  padding-bottom: 2em;
  max-width: 1024px;
  white-space: normal;
  align-items: center;
  height: 70vh;
  @media only screen and (max-width: 700px) {
    height: 70vh;
  }
  /* IPAD PORTRAIT MODE */
  @media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) { 
    height: 70vh;
  }
  display: flex;
  align-items: center;
  ${'' /* padding: 0px 1.0875rem 1.45rem; */}
  padding-top: 0;
  line-height: 1.2rem;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <StyledWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledDiv
          data-sal="fade"
          data-sal-delay="100"
          data-sal-duration="1200"
          data-sal-easing="ease-out"
        >
          {children}
        </StyledDiv>
      </StyledWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
