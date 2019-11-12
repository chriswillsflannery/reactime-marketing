import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const styles = {
  whiteNew: '#ffffff',
  reactGreen: '#012d2b',

}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 style={{ color: styles.reactGreen }}>STATE DEBUGGER FOR REACT</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p style={{ color: styles.reactGreen }}>The only time-travel debugging tool you need to develop your React application by tracking, visualizing, and reverting state changes.</p>
    <p style={{ color: styles.reactGreen }}>Interested in contributing? Reactime is open-source: help make React state debugging easier!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
