import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import styled from "styled-components";
import GitHubButton from "react-github-btn";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChrome,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
config.autoAddCss = false;

const handleScroll = () => {
  if (
    window.innerWidth < 600 &&
    (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
  ) {
    document.getElementById("header").style.padding = "50px"
  } else if (
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50
  ) {
    document.getElementById("header").style.padding = "30px"
  } else {
    document.getElementById("header").style.padding = "50px"
  }
};

const styles = {
  headFontColor: `white`, // #BDD4DB
};

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 30px;
  padding: 50px;
  z-index: 2;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;

  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  background: -webkit-gradient(linear, left top, left bottom, color-stop(75%, rgb(28,29,31)), to(rgb(28,29,31, 0)));
  background: -o-linear-gradient(rgb(28,29,31) 75%, rgb(28,29,31, 0));
  background: linear-gradient(rgb(28,29,31) 75%, rgb(28,29,31, 0));

  -webkit-transition: 0.2s;
  -o-transition: 0.2s;
  transition: 0.2s;

  @media (max-width: 600px) {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;

    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`

const HeaderTitle = styled.div`
  @media (max-width: 375px) {
    h1 {
      font-size: 1.1rem;
    }
  }
`

const HeaderRight = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  li {
    margin: 0;
    padding: 0;
    display: inline-block;
    padding-left: 15px;
  }
  ul li a {
    color: ${styles.headFontColor};
    text-decoration: none;
    font-size: 15px;
    font-family: sans-serif;
  }
  ul li a:hover {
    color: white;
  }
  @media (max-width: 600px) {
    // padding-top: 20px;
  }
`
const H1 = styled.h1`
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 1.4rem;
  letter-spacing: 3px;
  margin: 0;
  font-weight: 400;
`

const Header = props => {
  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll());
    return window.removeEventListener("scroll", () => handleScroll());
  }, []);

  return (
    <HeaderContainer id="header">
      <HeaderTitle>
        <H1>
          <Link
            to="/"
            style={{
              color: styles.headFontColor,
              textDecoration: `none`,
              fontWeight: 'bold',
            }}
          >
            {props.siteTitle}
          </Link>
        </H1>
      </HeaderTitle>
      <HeaderRight>
        <ul>
          <li style={{ marginBottom: `2px` }}>
            <a
              href="https://chrome.google.com/webstore/detail/reactime/cgibknllccemdnfhfpmjhffpjfeidjga?hl=en-US"
              title="ReacTime Chrome"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faChrome} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/reactime"
              title="ReacTime Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/company/reactime"
              title="ReacTime LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li style={{ marginTop: `7px` }}>
            <GitHubButton
              href="https://github.com/open-source-labs/reactime"
              data-color-scheme="dark"
              data-size="medium"
              data-show-count="true"
              aria-label="Star open-source-labs/reactime on GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              Star
            </GitHubButton>
          </li>
        </ul>
      </HeaderRight>
    </HeaderContainer>
  )
}
// }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
