import React from 'react';
import GitHubButton from "react-github-btn"
import { config } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChrome,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const NavBar = () => {
  return (
    <div className="nav-bar">
      <h4>REACTIME</h4>
      <ul>
        <li>
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
          <a 
            href="https://twitter.com/reactime"
            title="ReacTime Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/company/reactime"
            title="ReacTime LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>  
        <li>
          <a 
            href="https://github.com/open-source-labs/reactime"
            data-color-scheme="dark"
            data-size="medium"
            data-show-count="true"
            aria-label="Star open-source-labs/reactime on GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </li> 
      </ul>
    </div>
  );
};

export default NavBar;