/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';

import Header from "./header"
import "./layout.css"

const Wrapper = styled.div`
  background: linear-gradient(354deg, rgba(156,216,199,1) 0%, rgba(226,192,187,1) 100%);
`;

const Div1 = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Wrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Div1>
          <StyledMain>
            {children}
          </StyledMain>
        </Div1>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
