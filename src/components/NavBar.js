import React from 'react';

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
          </a>
        </li>
        <li>
          <a 
            href="https://twitter.com/reactime"
            title="ReacTime Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/company/reactime"
            title="ReacTime LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
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