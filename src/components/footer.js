import React from "react"

const Footer = () => {
  return (
    <footer style={{marginTop: '2rem'}}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a 
      style={{ textDecoration: `none`, color: `#99A93A`, }}
      href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}

export default Footer
