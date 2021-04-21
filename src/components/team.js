/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Chevron from './SVG/Chevron';

import './layout.css'

const styles = {
  reactGreen: 'white', // h4
  lighterGreen: `#002e2b`,
  lightestGreen: '#62D6FB', // hover, link color
  biosBColor: '#242529', // `#E4C2B3`, // team bios bg-color #e6e6e6
  redCode: '#62D6FB', // hover, link color
}

const StyledWrapper = styled.div``

const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledPersonExpander = styled.div`
  display: flex;
  svg {
    width: 10px;
  }
`;

const StyledExpanderHeader = styled.div`
  display: flex;
`;

const PersonExpander = ({ name, handle }) => (
  <StyledPersonExpander>
    <StyledExpanderHeader>
      <Chevron />
      <h4>{name}</h4>
      <a
        href={`https://github.com/${handle}`}
        title="Github"
        target="_blank"
        rel="noopener noreferrer"
      >{`@${handle}`}</a>
    </StyledExpanderHeader>
  </StyledPersonExpander>
);

const Layout = ({ children }) => {
  return (
    <>
      <StyledWrapper>
        <StyledDiv>
          <StyledMain>
            {children}
            <PersonExpander name="Abaas Khorrami" handle="dubalol"/>
            <PersonExpander name="Alexander Landeros" handle="AlexanderLanderos" />
            <PersonExpander name="Ali Rahman" handle="CourageWolf" />
            <PersonExpander name="AndyWong" handle="andywongdev" />
            <PersonExpander name="Becca Viner" handle="rtviner" />
            <PersonExpander name="Bryan Lee" handle="mylee1995" />
            <PersonExpander name="Caitlyn Chan" handle="caitlinchan23" />
            <PersonExpander name="Caner Demir" handle="demircaner" />
            <PersonExpander name="Carlos Perez" handle="crperezt" />
            <PersonExpander name="Chris Flannery" handle="chriswillsflannery" />
            <PersonExpander name="Chris Guizzetti" handle="guizzettic" />
            <PersonExpander name="Cole Styron" handle="c-styr" />
            <PersonExpander name="David Chai" handle="davidchai717" />
            <PersonExpander name="Dennis Lopez" handle="DennisLpz" />
            <PersonExpander name="Edwin Menendez" handle="edwinjmenendez" />
            <PersonExpander name="Ergi Shehu" handle="Ergi516" />
            <PersonExpander name="Gabriela Aquino" handle="aquinojardim" />
            <PersonExpander name="Greg Panciera" handle="gpanciera" />
            <PersonExpander name="Haejin Jo" handle="haejinjo" />
            <PersonExpander name="Hien Nguyen" handle="hienqn" />
            <PersonExpander name="Jack Crish" handle="JackC27" />
            <PersonExpander name="Jason Victor" handle="Theqwertypusher" />
            <PersonExpander name="Joshua Howard" handle="Joshua-Howard" />
            <PersonExpander name="Josh Kim" handle="joshua0308" />
            <PersonExpander name="Kevin Fey" handle="kevinfey" />
            <PersonExpander name="Kevin Ngo" handle="kevin-ngo" />
            <PersonExpander name="Kim Mai Nguyen" handle="Nkmai" />
            {/* <Grid>
              <StyledGridElement
                className="teamStyle"
                onClick={e => handleClick('Nat', e)}
              >
                <h4>Nate Wa Mwenze</h4>
                <a
                  href="https://github.com/nmwenz90"
                  title="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} /> nmwenz90
                </a>
              </StyledGridElement>
              <StyledGridElement
                className="teamStyle"
                onClick={e => handleClick('Pras', e)}
              >
                <h4>Prasanna Malla</h4>
                <a
                  href="https://github.com/prasmalla"
                  title="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} /> prasmalla
                </a>
              </StyledGridElement>
              <StyledGridElement
                className="teamStyle"
                onClick={e => handleClick('Rajeeb', e)}
              >
                <h4>Rajeeb Banstola</h4>
                <a
                  href="https://github.com/rajeebthegreat"
                  title="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} /> rajeebthegreat
                </a>
              </StyledGridElement>
              <StyledGridElement
                className="teamStyle"
                onClick={e => handleClick('Raymond', e)}
              >
                <h4>Raymond Kwan</h4>
                <a
                  href="https://github.com/rkwn"
                  title="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} /> rkwn
                </a>
              </StyledGridElement>
              <StyledGridElement
                className="teamStyle"
                onClick={e => handleClick('Rocky', e)}
              >
                <h4>Rocky Lin</h4>
                <a
                  href="https://github.com/rocky9413"
                  title="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} /> rocky9413
                </a>
              </StyledGridElement>
              <StyledGridElement
                className="teamStyle"
                onClick={e => handleClick('Ruth', e)}
              >
                <h4>Ruth Anam</h4>
                <a
                  href="https://github.com/peachiecodes"
                  title="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} /> peachiecodes
                </a>
              </StyledGridElement>
              <StyledGridElement
                className="teamStyle"
                onClick={e => handleClick('Ryan', e)}
              >
                <h4>Ryan Dang</h4>
                <a
                  href="https://github.com/rydang"
                  title="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} /> rydang
                </a>
              </StyledGridElement>

              <StyledGridElement
                className="teamStyle"
                onClick={e => handleClick('Sanjay', e)}
              >
                <h4>Sanjay Lavingia</h4>
                <a
                  href="https://github.com/sanjaylavingia"
                  title="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} /> sanjaylavingia
                </a>
              </StyledGridElement>

              <StyledGridElement
                className="teamStyle"
                onClick={e => handleClick('Sierra', e)}
              >
                <h4>Sierra Swaby</h4>
                <a
                  href="https://github.com/starkspark"
                  title="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} /> starkspark
                </a>
              </StyledGridElement>

              <StyledGridElement
                className="teamStyle"
                onClick={e => handleClick('Tania', e)}
              >
                <h4>Tania Lind</h4>
                <a
                  href="https://github.com/lind-tania"
                  title="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} /> lind-tania
                </a>
              </StyledGridElement>

              <StyledGridElement
                className="teamStyle"
                onClick={e => handleClick('Vincent', e)}
              >
                <h4>Vincent Nguyen</h4>
                <a
                  href="https://github.com/VNguyenCode"
                  title="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} /> VNguyenCode
                </a>
              </StyledGridElement>

              <StyledGridElement
                className="teamStyle"
                onClick={e => handleClick('Yujin', e)}
              >
                <h4>Yujin Kang</h4>
                <a
                  href="https://github.com/yujinkay"
                  title="Github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} /> yujinkay
                </a>
              </StyledGridElement>
            </Grid> */}
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
