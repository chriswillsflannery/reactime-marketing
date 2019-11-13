/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby";
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
  grid-template-columns: repeat(4, 1fr);
`;

const StyledGridElement = styled.div`
  background: white;
  width: 200px;
  height: 300px;
  margin: 10px;
  border-radius: 10px;
`;

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: {eq: "yujin.jpeg"}) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            sizes
            src
            srcSet
          }
        }
      }
    }
  `);

  return (
    <>
      <StyledWrapper>
        <StyledDiv>
          <StyledMain>
            {children}
            <Grid>
              <StyledGridElement>
                <Img fluid={data.file.childImageSharp.fluid} alt="yujin kang" />
              </StyledGridElement>
              <StyledGridElement>
                <Img fluid={data.file.childImageSharp.fluid} alt="yujin kang" />
              </StyledGridElement>
              <StyledGridElement>
                <Img fluid={data.file.childImageSharp.fluid} alt="yujin kang" />
              </StyledGridElement>
              <StyledGridElement>
                <Img fluid={data.file.childImageSharp.fluid} alt="yujin kang" />
              </StyledGridElement>
              <StyledGridElement>
                <Img fluid={data.file.childImageSharp.fluid} alt="yujin kang" />
              </StyledGridElement>
              <StyledGridElement>
                <Img fluid={data.file.childImageSharp.fluid} alt="yujin kang" />
              </StyledGridElement>
              <StyledGridElement>
                <Img fluid={data.file.childImageSharp.fluid} alt="yujin kang" />
              </StyledGridElement>
              <StyledGridElement>
                <Img fluid={data.file.childImageSharp.fluid} alt="yujin kang" />
              </StyledGridElement>
              <StyledGridElement>
                <Img fluid={data.file.childImageSharp.fluid} alt="yujin kang" />
              </StyledGridElement>
              <StyledGridElement>
                <Img fluid={data.file.childImageSharp.fluid} alt="yujin kang" />
              </StyledGridElement>
              <StyledGridElement>
                <Img fluid={data.file.childImageSharp.fluid} alt="yujin kang" />
              </StyledGridElement>
              <StyledGridElement>
                <Img fluid={data.file.childImageSharp.fluid} alt="yujin kang" />
              </StyledGridElement>
            </Grid>
            <footer>
              © {new Date().getFullYear()}, Built with
          {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
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
