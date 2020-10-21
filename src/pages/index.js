/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import React from 'react';
import Splash from '../components/splash';
import VisualState from '../components/visualState';
import Features from '../components/features';
import Team from '../components/team';
import Image from '../components/image';
import SEO from '../components/seo';
import styled from 'styled-components';
import demogif from '../images/react-calculator-demo.gif';
import Footer from '../components/footer';

const styles = {
  reactGreen: '#62D6FB',
  lighterGreen: 'white',
  lightestGreen: '#BDD4DB',
  redCode: '#acbf60',
};

// Image AND Text
const SplashContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 700px) {
    font-size: 0.8em;
    flex-direction: column;
  }
  @media only screen and (max-height: 420px) {
    margin-top: 65px;
  }
  transform: translate(0px, 80px);
`;

// Text
const SplashDescription = styled.div`
  @media only screen and (max-width: 700px) {
    margin-top 3em;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 120%;
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
`;

const DemoGifDescription = styled.h2`
  text-align: center;
  padding: 40px;

  @media only screen and (max-width: 700px) {
    padding: 0;
  }
`;

const DemoGif = styled.img`
  @media only screen and (max-width: 700px) {
    max-width: 90%;
  }
  @media only screen and (min-width: 700px) {
    minWidth: 40vw;
    maxWidth: 800px;
    box-shadow: 5px 10px 15px black;
  }
  margin: 30px 0px 30px 0px;
`;

const FeaturesTitle = styled.h2`
  font-weight: 700;
`

const IndexPage = () => (
  <>
    <Splash>
      <SEO title="Home" />
      <div
        style={{
          margin: '80px 0 60px 0',
        }}
      ></div>
      <SplashContainer>
        <Image />
        <SplashDescription>
          <p
            style={{
              fontFamily: 'Raleway',
              lineHeight: '120%',
              fontSize: '1.9rem',
              fontWeight: '900',
              textAlign: 'center',
              color: styles.lighterGreen
            }}
          >
            The only time-travel debugging tool you need
          </p>
          <p
            style={{
              fontFamily: 'Raleway',
              textAlign: 'center',
              color: styles.lighterGreen
            }}
          >
            Nominated for the Productivity Booster award at{' '}
            <a
              style={{
                textDecoration: 'none',
                color: styles.redCode
              }}
              href="https://osawards.com/react/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Open Source Awards 2020
              </a>
              !
            </p>
          <a
            style={{
              fontFamily: 'Raleway',
              textDecoration: 'none',
              color: 'black',
              background: styles.reactGreen,
              margin: '5px',
              padding: '0px 1em',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: '3em',
              width: '10em',
              borderRadius: '5px',
            }}
            href="https://chrome.google.com/webstore/detail/reactime/cgibknllccemdnfhfpmjhffpjfeidjga?hl=en-US"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Download Now</strong>
          </a>
        </SplashDescription>
      </SplashContainer>
    </Splash>
    <div id='demo'>
      <VisualState>
        <DemoGifDescription>
          Track, Revert, <br />and Visualize your State
      </DemoGifDescription>
        <DemoGif style={{ textAlign: 'center' }} src={demogif} alt="ReacTime Demo" />
      </VisualState>
    </div>
    <Features>
      <FeaturesTitle>
        Features
      </FeaturesTitle>
    </Features>

    <Team>
      <h2 style={{ color: styles.reactGreen }}>
        <strong>Meet the Team</strong>
      </h2>
      <p
        style={{
          fontFamily: 'Raleway',
          color: styles.lighterGreen,
          textAlign: 'center',
          marginBottom: '18px'
        }}
      >
        Interested in{' '}
        <span>
          <a
            style={{ textDecoration: 'none', color: styles.redCode }}
            href="https://github.com/open-source-labs/reactime"
            target="_blank"
            rel="noopener noreferrer"
          >
            contributing?
            </a>
        </span>{' '}
          Reactime is open-source. Help make React state debugging easier!
        </p>
    </Team>

    <Footer />
  </>
);

export default IndexPage;
