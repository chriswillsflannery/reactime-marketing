import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"; 
import styled from "styled-components";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const StyledImage = styled(Img)`
  min-width: 1024px;
  max-width: 2400px;
  border-radius: 10px;
  margin: 0em;
  @media only screen and (max-width: 700px) {
    min-width: 400px;
  }
`

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ReactimeIO.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="splash-logo">
    <StyledImage fluid={data.file.childImageSharp.fluid} />
    </div>
  );
}

export default Image;
