import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDescription: description
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const {
    siteDescription,
    siteTitle,
    siteUrl,
    twitterUsername,
  } = site.siteMetadata
  return (
    <Helmet
      htmlAttributes={{ lang: "pt-BR" }}
      title={`${title} | ${siteTitle}`}
    >
      <meta name="description" content={description || siteDescription} />
      <meta name="image" /> {/** Criar image do site SEO */}
      {/** twitter cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content="summary_large_image" />
    </Helmet>
  )
}

export default SEO
