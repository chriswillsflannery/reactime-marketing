/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import "./layout.css"

const StyledWrapper = styled.div`
  background: #ffffff;
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

const Layout = ({ children }) => {
  return (
    <>
      <StyledWrapper>
        <StyledDiv>
          <StyledMain>
            {children}
            <ol>
              <li>Download the extension from Chrome's Web Store.</li>
              <li>
                Install the npm package into your terminal/code editor inside of
                your application folder. <br />
                <pre>
                  <code>
                  <p>npm i reactime</p>
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
                    import reactime from 'reactime'; <br />
                    const rootContainer = document.getElementById('root'); <br />
                    ReactDOM.render({`<App />`}, rootContainer); <br />         
                    reactime(rootContainer);
                    </p>
                  </code>
                </pre>

                If you are using Concurrent mode, call the library like below:
                <br />
                <pre>
                  <code>
                    {/* <!-- react treats app /> as a react components and tries to render it --> */}
                    <p>
                    import reactime from 'reactime'; <br />
                    const rootContainer = document.getElementById('root');<br />
                    ReactDOM.createRoot(rootContainer).render({`<App />`});<br />         
                    reactime(rootContainer);
                    </p>
                  </code>
                </pre>
              </li>
            </ol>
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
