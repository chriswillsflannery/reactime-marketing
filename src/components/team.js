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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import "./layout.css"

const styles = {
  reactGreen: `#072D2B`,
  lighterGreen: `#002e2b`,
  lightestGreen: `#0c4c41`,
  reactGold: `#ECCB98`,
  lighterGold: `#E4C2B3`,
  redCode: `#a83a32`,
}

const StyledWrapper = styled.div`
  background: ${styles.lighterGold};
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
`

const StyledGridElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  background: ${styles.reactGold};
  width: 200px;
  height: 400px;
  margin: 10px;
  border-radius: 10px;
  h4 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  p {
    text-align: justify-left;
    font-family: sans-serif;
    font-size: 12px;
    line-height: 15px;
    margin-left: 8px;
  }
  a:hover {
    color: ${styles.redCode};
  }
`;



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
    return <Img style={{ borderRadius: `100px`, marginTop: `10px`, width: `100px`, height: `100px` }} alt={personName} sizes={imageSizes} />
  }

  return (
    <>
      <StyledWrapper>
        <StyledDiv>
          <StyledMain>
            {children}
            <Grid>
              <StyledGridElement>{getImage("andy")}
                <h4>Andy Wong</h4>
                <p>Andy is an experienced software engineer based in New York. At JPMorgan Chase, he previously specialized in robotics process automation and enterprise cloud software. His interests include running marathons all over the globe, Rube Goldberg Machines, and animals with opposable thumbs. Andy recently gave a talk about WebAssembly and another one about GoLang with Ruth.</p>
                <a href="https://github.com" title="Github">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </StyledGridElement>
              <StyledGridElement>{getImage("bryan")}
                <h4>Bryan Lee</h4>
                <p>Andy is an experienced software engineer based in New York. At JPMorgan Chase, he previously specialized in robotics process automation and enterprise cloud software. His interests include running marathons all over the globe, Rube Goldberg Machines, and animals with opposable thumbs. Andy recently gave a talk about WebAssembly and another one about GoLang with Ruth.</p>
                <a href="https://github.com" title="Github">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </StyledGridElement>
              <StyledGridElement>{getImage("chris")}
                <h4>Chris Flannery</h4>
                <p>Andy is an experienced software engineer based in New York. At JPMorgan Chase, he previously specialized in robotics process automation and enterprise cloud software. His interests include running marathons all over the globe, Rube Goldberg Machines, and animals with opposable thumbs. Andy recently gave a talk about WebAssembly and another one about GoLang with Ruth.</p>
                <a href="https://github.com" title="Github">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </StyledGridElement>
              <StyledGridElement>{getImage("david")}
                <h4>David Chai</h4>
                <p>Andy is an experienced software engineer based in New York. At JPMorgan Chase, he previously specialized in robotics process automation and enterprise cloud software. His interests include running marathons all over the globe, Rube Goldberg Machines, and animals with opposable thumbs. Andy recently gave a talk about WebAssembly and another one about GoLang with Ruth.</p>
                <a href="https://github.com" title="Github">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </StyledGridElement>
              <StyledGridElement>{getImage("josh")}
                <h4>Josh Kim</h4>
                <p>Andy is an experienced software engineer based in New York. At JPMorgan Chase, he previously specialized in robotics process automation and enterprise cloud software. His interests include running marathons all over the globe, Rube Goldberg Machines, and animals with opposable thumbs. Andy recently gave a talk about WebAssembly and another one about GoLang with Ruth.</p>
                <a href="https://github.com" title="Github">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </StyledGridElement>
              <StyledGridElement>{getImage("pras")}
                <h4>Prasanna Malla</h4>
                <p>Andy is an experienced software engineer based in New York. At JPMorgan Chase, he previously specialized in robotics process automation and enterprise cloud software. His interests include running marathons all over the globe, Rube Goldberg Machines, and animals with opposable thumbs. Andy recently gave a talk about WebAssembly and another one about GoLang with Ruth.</p>
                <a href="https://github.com" title="Github">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </StyledGridElement>
              <StyledGridElement>{getImage("rajeeb")}
                <h4>Rajeeb Banstola</h4>
                <p>Andy is an experienced software engineer based in New York. At JPMorgan Chase, he previously specialized in robotics process automation and enterprise cloud software. His interests include running marathons all over the globe, Rube Goldberg Machines, and animals with opposable thumbs. Andy recently gave a talk about WebAssembly and another one about GoLang with Ruth.</p>
                <a href="https://github.com" title="Github">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </StyledGridElement>
              <StyledGridElement>{getImage("rocky")}
                <h4>Rocky Lin</h4>
                <p>Andy is an experienced software engineer based in New York. At JPMorgan Chase, he previously specialized in robotics process automation and enterprise cloud software. His interests include running marathons all over the globe, Rube Goldberg Machines, and animals with opposable thumbs. Andy recently gave a talk about WebAssembly and another one about GoLang with Ruth.</p>
                <a href="https://github.com" title="Github">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </StyledGridElement>
              <StyledGridElement>{getImage("ruth")}
                <h4>Ruth Anam</h4>
                <p>Andy is an experienced software engineer based in New York. At JPMorgan Chase, he previously specialized in robotics process automation and enterprise cloud software. His interests include running marathons all over the globe, Rube Goldberg Machines, and animals with opposable thumbs. Andy recently gave a talk about WebAssembly and another one about GoLang with Ruth.</p>
                <a href="https://github.com" title="Github">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </StyledGridElement>
              <StyledGridElement>{getImage("ryan")}
                <h4>Ryan Dang</h4>
                <p>Andy is an experienced software engineer based in New York. At JPMorgan Chase, he previously specialized in robotics process automation and enterprise cloud software. His interests include running marathons all over the globe, Rube Goldberg Machines, and animals with opposable thumbs. Andy recently gave a talk about WebAssembly and another one about GoLang with Ruth.</p>
                <a href="https://github.com" title="Github">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </StyledGridElement>
              <StyledGridElement>{getImage("sierra")}
                <h4>Sierra Swaby</h4>
                <p>Andy is an experienced software engineer based in New York. At JPMorgan Chase, he previously specialized in robotics process automation and enterprise cloud software. His interests include running marathons all over the globe, Rube Goldberg Machines, and animals with opposable thumbs. Andy recently gave a talk about WebAssembly and another one about GoLang with Ruth.</p>
                <a href="https://github.com" title="Github">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </StyledGridElement>
              <StyledGridElement>{getImage("yujin")}
                <h4>Yujin Kang</h4>
                <p>Andy is an experienced software engineer based in New York. At JPMorgan Chase, he previously specialized in robotics process automation and enterprise cloud software. His interests include running marathons all over the globe, Rube Goldberg Machines, and animals with opposable thumbs. Andy recently gave a talk about WebAssembly and another one about GoLang with Ruth.</p>
                <a href="https://github.com" title="Github">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
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
