/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components";

import "./layout.css";

const styles = {
  reactGreen: `#072D2B`,
  lighterGreen: `#002e2b`,
  lightestGreen: `#0c4c41`,
  reactGold: `#ECCB98`,
  lighterGold: `#E4C2B3`,
  redCode: `#a83a32`,
  blueCode: `#265a87`
};

const StyledWrapper = styled.div`
  background: ${styles.reactGold};
`;

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

const StyledOL = styled.ol`
  @media (max-width: 700px) {
    max-width: 400px;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <StyledWrapper>
        <StyledDiv>
          <StyledMain>
            {children}
            <StyledOL>
              <li>Download the extension from Chrome's Web Store.</li>
              <li>
                Install the npm package into your terminal/code editor inside of
                your application folder. <br />
                <pre>
                  <code>
                    <p>npm i <span style={{ color: styles.redCode }}>reactime</span></p>
                  </code>
                </pre>
              </li>
              <li>
                Call the library method on your root container after rendering
                your App.
                <br />
                <pre>
                  <code>
                    {/* <!-- react treats app /> as a react components and tries to render it --> */}
                    <p>
                      import <span style={{ color: styles.redCode }}>reactime</span> from 'reactime'; <br />
                      const rootContainer = document.getElementById('root'); <br />
                      ReactDOM.<span style={{ color: styles.blueCode }}>render</span>({`<App />`}, rootContainer); <br />
                      <span style={{ color: styles.redCode }}>reactime</span>(rootContainer);
                    </p>
                  </code>
                </pre>

                If you are using Concurrent mode, call the library like below:
                <br />
                <pre>
                  <code>
                    {/* <!-- react treats app /> as a react components and tries to render it --> */}
                    <p>
                      import <span style={{ color: styles.redCode }}>reactime</span> from 'reactime'; <br />
                      const rootContainer = document.getElementById('root');<br />
                      ReactDOM.<span style={{ color: styles.blueCode }}>createRoot</span>(rootContainer).render({`<App />`});<br />
                      <span style={{ color: styles.redCode }}>reactime</span>(rootContainer);
                    </p>
                  </code>
                </pre>
              </li>
            </StyledOL>
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
