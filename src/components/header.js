import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';

const Header1 = styled.header`
  background: white;
  margin-bottom: 1.45rem;
`;

const Div1 = styled.div`
  color: red;
  margin: 0 auto;
  max-width: 960;
  padding: .5rem 1.0875rem;
`;

const H1 = styled.h1`
  font-size: 1.2rem;
  letter-spacing: 5px;
  margin: 0;
`;

const Header = ({ siteTitle }) => (
  <Header1>
    <Div1>
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
    </Div1>
  </Header1>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
