/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Chevron from './SVG/Chevron';
import { bios } from './team-bios';

import './layout.css'

const styles = {
  white: 'white', // h4
  lighterGreen: `#002e2b`,
  lightestGreen: '#62D6FB', // hover, link color
  biosBColor: '#242529', // `#E4C2B3`, // team bios bg-color #e6e6e6
  redCode: '#ff6569', // hover, link color
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

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  @media (max-width: 800px) {
    grid-template-columns:  400px;
  }
`;

const StyledPersonExpander = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  svg {
    width: 10px;
  }
  svg.rotated {
    transform: rotate(90deg);
  }
`;

const StyledExpanderHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  a {
    font-size: 1.15rem;
    font-weight: normal;
    padding: 10.5px;
    margin: 0 8px 0 8px;
    color: ${styles.lightestGreen}
  }
  .name {
    transition: 0.3s;
  }
  &:hover .name {
    color: ${styles.white}
  }
`;

const StyledExpanderBio = styled.div`
  color: white;
  font-family: sans-serif;
`;

const ContributeLink = styled.span`
  a {
    text-decoration: none;
    color: ${styles.redCode};
    transition: 0.3s;
  }
  &:hover .contribute {
    color: #a64245; 
  }
`;

const PersonExpander = ({ name, handle, bio }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <StyledPersonExpander>
      <StyledExpanderHeader onClick={() => setIsExpanded(!isExpanded)}>
        <div className={isExpanded ? 'rotated' : ''} />
        <a className="name" style = {{ textDecoration: 'none' }} href={`https://github.com/${handle}`} target="_blank">{name}</a>
      </StyledExpanderHeader>
      {isExpanded && (
        <StyledExpanderBio>
          {bios[bio]}
        </StyledExpanderBio>
      )}
    </StyledPersonExpander>
  );
}


const Layout = ({ children }) => {
  return (
    <>
      <StyledWrapper>
        <StyledDiv>
          <StyledMain>
            {children}
            <StyledGrid>
              <PersonExpander 
                name="Abaas Khorrami"
                handle="dubalol"
                // bio="abaas"
              />
              <PersonExpander
                name="Alexander Landeros"
                handle="AlexanderLanderos"
                // bio="alexander"
              />
              <PersonExpander
                name="Ali Rahman"
                handle="CourageWolf"
                // bio="ali"
              />
              <PersonExpander
                name="Andy Tsou"
                handle="andytsou19"
                // bio="andy"
              />
              <PersonExpander
                name="Andy Wong"
                handle="andywongdev"
                // bio="andy"
              />
              <PersonExpander
                name="Becca Viner"
                handle="rtviner"
                // bio="becca"
              />
              <PersonExpander
                name="Bryan Lee"
                handle="mylee1995"
                // bio="bryan"
              />
              <PersonExpander
                name="Caitlin Chan"
                handle="caitlinchan23"
                // bio="caitlin"
              />
              <PersonExpander
                name="Caner Demir"
                handle="demircaner"
                // bio="caner"
              />
              <PersonExpander
                name="Carlos Perez"
                handle="crperezt"
                // bio="carlos"
              />
              <PersonExpander
                name="Chris Flannery"
                handle="chriswillsflannery"
                // bio="chris"
              />
              <PersonExpander
                name="Chris Guizzetti"
                handle="guizzettic"
                // bio="chrisG"
              />
              <PersonExpander
                name="Cole Styron"
                handle="c-styr"
                // bio="cole"
              />
              <PersonExpander
                name="David Bernstein"
                handle="dangitbobbeh"
                // bio="davidB"
              />
              <PersonExpander
                name="David Chai"
                handle="davidchai717"
                // bio="david"
              />
              <PersonExpander
                name="Dennis Lopez"
                handle="DennisLpz"
                // bio="dennis"
              />
              <PersonExpander
                name="Edwin Menendez"
                handle="edwinjmenendez"
                // bio="edwin"
              />
              <PersonExpander
                name="Ergi Shehu"
                handle="Ergi516"
                // bio="ergi"
              />
              <PersonExpander
                name="Feiyi Wu"
                handle="FreyaWu"
                // bio="freya"
              />
              <PersonExpander
                name="Gabriela Aquino"
                handle="aquinojardim"
                // bio="gabriela"
              />
              <PersonExpander
                name="Greg Panciera"
                handle="gpanciera"
                // bio="greg"
              />
              <PersonExpander
                name="Haejin Jo"
                handle="haejinjo"
                // bio="haejin"
              />
              <PersonExpander
                name="Harry Fox"
                handle="StackOverFlowWhereArtThou"
                // bio="harry"
              />
              <PersonExpander
                name="Hien Nguyen"
                handle="hienqn"
                // bio="hien"
              />
              <PersonExpander
                name="Jack Crish"
                handle="JackC27"
                // bio="jack"
              />
              <PersonExpander
                name="Jason Victor"
                handle="Theqwertypusher"
                // bio="jason"
              />
              <PersonExpander
                name="Joshua Howard"
                handle="Joshua-Howard"
                // bio="joshua"
              />
              <PersonExpander
                name="Joseph Stern"
                handle="josephiswhere"
                // bio="joe"
              />
              <PersonExpander
                name="Josh Kim"
                handle="joshua0308"
                // bio="josh"
              />
              <PersonExpander
                name="Kevin Fey"
                handle="kevinfey"
                // bio="kevin"
              />
              <PersonExpander
                name="Kevin Ngo"
                handle="kevin-ngo"
                // bio="kevinN"
              />
              <PersonExpander
                name="Kim Mai Nguyen"
                handle="Nkmai"
                // bio="kim"
              />
              <PersonExpander
                name="Lina Shin"
                handle="rxlina"
                // bio="lina"
              />
              <PersonExpander
                name="Nate Wa Mwenze"
                handle="nmwenz90"
                // bio="nate"
              />
              <PersonExpander
                name="Nathan Richardson"
                handle="BagelEnthusiast"
                // bio="nathan"
              />
              <PersonExpander
                name="Prasanna Malla"
                handle="prasmalla"
                // bio="pras"
              />
              <PersonExpander
                name="Rajeeb Banstola"
                handle="rajeebthegreat"
                // bio="rajeeb"
              />
              <PersonExpander
                name="Raymond Kwan"
                handle="rkwn"
                // bio="raymond"
              />
              <PersonExpander
                name="Rocky Lin"
                handle="rocky9413"
                // bio="rocky"
              />
              <PersonExpander
                name="Ruth Anam"
                handle="peachiecodes"
                // bio="ruth"
              />
              <PersonExpander
                name="Ryan Dang"
                handle="rydang"
                // bio="ryan"
              />
              <PersonExpander
                name="Sanjay Lavingia"
                handle="sanjaylavingia"
                // bio="sanjay"
              />
              <PersonExpander
                name="Sierra Swaby"
                handle="starkspark"
                // bio="sierra"
              />
              <PersonExpander
                name="Tania Lind"
                handle="lind-tania"
                // bio="tania"
              />
              <PersonExpander
                name="Viet Nguyen"
                handle="vnguyen95"
                // bio="viet"
              />
              <PersonExpander
                name="Vincent Nguyen"
                handle="VNguyenCode"
                // bio="vincent"
              />
              <PersonExpander
                name="Yujin Kang"
                handle="yujinkay"
                // bio="yujin"
              />
            </StyledGrid>
          </StyledMain>
        </StyledDiv>
      </StyledWrapper>

      <p
        style={{
          fontFamily: 'Raleway',
          color: styles.white,
          textAlign: 'center',
          marginBottom: '18px'
        }}
      >
        Interested in{' '}
        <ContributeLink>
          <a
            className="contribute"
            href="https://github.com/open-source-labs/reactime"
            target="_blank"
            rel="noopener noreferrer"
          >
            contributing
            </a>
        </ContributeLink>
          ? Reactime is an open-source product. Help make debugging React state easier!
        </p>
    </>

    
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
