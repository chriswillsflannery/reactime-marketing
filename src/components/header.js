import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'
import GitHubButton from 'react-github-btn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChrome, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';


const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #F7FBF9;
  height: 70px
  // margin-bottom: 1.45rem;
`;

const HeaderTitle = styled.div`
  // padding: 0 1.0875rem;
`;

const HeaderRight = styled.div`
  ul{
    list-style-type: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  li{
    margin: 0;
    padding: 0;
    display: inline-block;
    padding-left: 15px;
  }
  ul li a{
    color: #006666;
    text-decoration: none;
    font-size: 15px;
  }
`;

const H1 = styled.h1`
  font-size: 1.4rem;
  letter-spacing: 3px;
  margin: 0;
  color: #066355;
  font-weight: 500;
`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderTitle>
      <H1>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </H1>
    </HeaderTitle>
    <HeaderRight>
      <ul>
        <li>
          <a href="https://www.npmjs.com/package/reactime" title="ReacTime NPM Package">npm</a>
        </li>
        <li>
          <a href="https://chrome.google.com/webstore/detail/reactime/cgibknllccemdnfhfpmjhffpjfeidjga?hl=en-US" title="ReacTime Chrome">
            <FontAwesomeIcon icon={faChrome} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/reactime" title="ReacTime Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/company/reactime" title="ReacTime LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
        <GitHubButton href="https://github.com/open-source-labs/reactime" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" data-show-count="true" aria-label="Star open-source-labs/reactime on GitHub">Star</GitHubButton>
        </li>
      </ul>
    </HeaderRight>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
