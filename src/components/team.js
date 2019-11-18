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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

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
  background: ${styles.reactGold};
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
  background: ${styles.lighterGold};
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
    return (
      <Img
        style={{
          borderRadius: `100px`,
          marginTop: `10px`,
          width: `100px`,
          height: `100px`,
        }}
        alt={personName}
        sizes={imageSizes}
      />
    )
  }

  return (
    <>
      <StyledWrapper>
        <StyledDiv>
          <StyledMain>
            {children}
            <Grid>
              <StyledGridElement>
                {getImage("andy")}
                <h4>Andy Wong</h4>
                <p>
                  Andy is an experienced software engineer based in New York. At
                  JPMorgan Chase, he previously specialized in robotics process
                  automation and enterprise cloud software. His interests
                  include running marathons all over the globe, Rube Goldberg
                  Machines, and animals with opposable thumbs. Andy recently
                  gave a talk about WebAssembly and another one about GoLang
                  with Ruth.
                </p>
                <a href="https://github.com/andywongdev" title="Github">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </StyledGridElement>
              <StyledGridElement>
                {getImage("bryan")}
                <h4>Bryan Lee</h4>
                <p>
                  Bryan is a passionate software engineer with an interest in
                  data analysis, AI, and machine learning. He builds fullstack
                  applications using React and Node.Js with a focus on
                  scalability and usability. When he's not giving a talk about
                  SQL database management, Bryan listens to John Mayer or plays
                  ping pong in his downtime. He is a CS graduate of Boston
                  College.
                </p>
                <a href="https://github.com/MYLEE1995" title="Github">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </StyledGridElement>
              <StyledGridElement>
                {getImage("chris")}
                <h4>Chris Flannery</h4>
                <p>chris</p>
                <a href="https://github.com/chriswillsflannery" title="Github">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </StyledGridElement>
              <StyledGridElement>
                {getImage("david")}
                <h4>David Chai</h4>
                <p>
                  David is a multicultural fullstack developer with a passion
                  for React, SQL, and Express. He has an uncanny ability to
                  explain complex topics, simply. He has a ton of love for
                  j-pop, gadgets, and dad jokes (especially as a proud father to
                  his exuberant dog, Ayumi, named after his favorite j-pop
                  singer). Chai recently gave talks about React Fiber under the
                  hood and an introduction to gRPCs.
                </p>
                <a href="https://github.com/davidchailatte" title="Github">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </StyledGridElement>
              <StyledGridElement>
                {getImage("josh")}
                <h4>Josh Kim</h4>
                <p>
                  Josh is a product-driven software engineer with incredible
                  passion for solving everyday problems. He takes delight in
                  thinking about user experience when building scalable
                  fullstack applications with React, Redux, and Node and giving
                  talks about wrapping Rest API in GraphQL. Besides coding, he
                  enjoys playing soccer, cooking Korean style bbq, and going on
                  spontaneous road trips.
                </p>
                <a href="https://github.com/joshua0308" title="Github">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </StyledGridElement>
              <StyledGridElement>
                {getImage("pras")}
                <h4>Prasanna Malla</h4>
                <p>Pras</p>
                <a href="https://github.com/" title="Github">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </StyledGridElement>
              <StyledGridElement>
                {getImage("rajeeb")}
                <h4>Rajeeb Banstola</h4>
                <p>
                  Rajeeb is an experienced full stack software engineer
                  primarily focused on React, NodeJS with a passion for solving
                  real life problems with scalable and reliable applications. He
                  recently gave a talk on Functional Programming Style and likes
                  to tinker around with Haskell/Elm in his free time. Apart from
                  coding, he likes hiking, cooking and practice mindfulness
                  meditation.
                </p>
                <a href="https://github.com/rajeebthegreat" title="Github">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </StyledGridElement>
              <StyledGridElement>
                {getImage("rocky")}
                <h4>Rocky Lin</h4>
                <p>
                  Rocky is an experienced software engineer based in NY. At CWD,
                  he provided guidance and mentorship to engineers implementing
                  solutions to the core hardware involved in the company’s
                  business model. He’s passionate about React Hooks, concurrent
                  mode, D3, and GraphQL. His interests include basketball,
                  snowboarding, and road trips. He recently gave a talk about
                  WebSockets.
                </p>
                <a href="https://github.com/rocky9413" title="Github">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </StyledGridElement>
              <StyledGridElement>
                {getImage("ruth")}
                <h4>Ruth Anam</h4>
                <p>
                  Ruth is a creative developer who loves simplicity in design
                  and scalable, maintainable applications. She's passionate
                  about Docker, Kubernetes, React Hooks, gRPC-web, Envy, and
                  Twirp. In her spare time she can be found at Boston Celtics
                  games, dabbling in art, or playing Blokus Trigon. She recently
                  gave an intro talk about Kubernetes and another one about
                  Golang with Andy.
                </p>
                <a href="https://github.com/peachiecodes" title="Github">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </StyledGridElement>
              <StyledGridElement>
                {getImage("ryan")}
                <h4>Ryan Dang</h4>
                <p>
                  Ryan is an experienced fullstack developer with an expertise
                  in React and Node. He loves contributing to open-source
                  developer tools, tinkering with minecraft modpacks, and
                  watching Scrubs. But above all else, Ryan adores algorithms,
                  the more complex the better. Ryan recently gave a talk on
                  dependency injection in JS. He is a CS graduate of uMich, Ann
                  Arbor.
                </p>
                <a href="https://github.com/rydang" title="Github">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </StyledGridElement>
              <StyledGridElement>
                {getImage("sierra")}
                <h4>Sierra Swaby</h4>
                <p>
                  Sierra is a fullstack software engineer who enjoys creating
                  amazing, interactive projects. She leverages her ux/ui
                  engineering experience from higher education institutions
                  towards specializing in client-facing applications. In her
                  free time, Sierra gives public talks about Docker &
                  Kubernetes, walks around the Brooklyn Bridge, and can be found
                  traveling and trying new food.
                </p>
                <a href="https://github.com/starkspark" title="Github">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </StyledGridElement>
              <StyledGridElement>
                {getImage("yujin")}
                <h4>Yujin Kang</h4>
                <p>
                  Yujin is a methodical software developer passionate about
                  product design, user experience, utilizing effective project
                  management methods, refactoring code to a few lines, and using
                  the right tools for the job. When she's not coding, Yujin
                  enjoys rollerblading in Domino park, making Korean fusion
                  food, ninja curling, and giving talks on either Angular or
                  system design.
                </p>
                <a href="https://github.com/yujinkay" title="Github">
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
