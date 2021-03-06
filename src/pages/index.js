import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const BlogLink = styled(Link)`
text-decoration: none;
`

const BlogTitle = styled.h3`
margin-bottom: 20px;
color: blue;
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>Simar says...</h1>
        <h4>{data.allMarkdownRemark.totalCount}</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <BlogTitle>
                {node.frontmatter.title} - {node.frontmatter.date}
              </BlogTitle>
            </BlogLink>
            <p>{node.excerpt}</p>
          </div>
  ))}
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

// export default IndexPage
export const query = graphql`
  query {
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        id
        frontmatter {
          date
          description
          title
        }
        excerpt
        fields {
          slug
        }
      }
    }
    totalCount
  }
}
`
