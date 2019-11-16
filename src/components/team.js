/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
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
  grid-template-columns: repeat(4, 1fr);
`

const StyledGridElement = styled.div`
  background: white;
  width: 200px;
  height: 300px;
  margin: 10px;
  border-radius: 10px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              sizes(maxWidth: 600) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  `)

  const getImage = personName => {
    const image = data.images.edges.find(n => {
      return n.node.name === personName
    })

    if (!image) {
      return null
    }

    const imageSizes = image.node.childImageSharp.sizes
    return <Img alt={personName} sizes={imageSizes} />
  }

  return (
    <>
      <StyledWrapper>
        <StyledDiv>
          <StyledMain>
            {children}
            <Grid>
              <StyledGridElement>{getImage("andy")}</StyledGridElement>
              <StyledGridElement>{getImage("bryan")}</StyledGridElement>
              <StyledGridElement>{getImage("david")}</StyledGridElement>
              <StyledGridElement>{getImage("josh")}</StyledGridElement>
              <StyledGridElement>{getImage("ruth")}</StyledGridElement>
              <StyledGridElement>{getImage("ryan")}</StyledGridElement>
              <StyledGridElement>{getImage("sierra")}</StyledGridElement>
              <StyledGridElement>{getImage("yujin")}</StyledGridElement>
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
