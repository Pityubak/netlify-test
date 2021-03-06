import * as React from "react"

import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface SeoProps {
  description?: string
  lang?: string
  meta?: Array<{ name: string; content: string }>
  title: string
}

function Seo({
  description = "Awesome portfolio of Pityubak",
  lang = "en",
  meta = [],
  title
}: SeoProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      link={[{ rel: "canonical", href: "https://pityubak.ml" }]}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
  
    </Helmet>
  )
}

export default Seo
