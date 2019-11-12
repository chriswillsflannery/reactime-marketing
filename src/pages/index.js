import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>STATE DEBUGGER FOR REACT</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>The only time-travel debugging tool you need to develop your React application by tracking, visualizing, and reverting state changes.</p>
    <p>Interested in contributing? Reactime is open-source: help make React state debugging easier!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
