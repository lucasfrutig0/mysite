import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
/* import Blogs from "../components/Blogs" */
import SEO from "../components/SEO"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    /*     allStrapiBlogs: { nodes: blogs }, */
  } = data
  return (
    <>
      <Layout>
        <SEO
          title="Home - Desenvolvimento Web"
          description="Bem vindo ao meu site, conheça meus trabalhos com desenvolvimento web. Algum projeto, ideia? Vamos conversar"
        />
        <Hero />
        <Services />
        <Jobs />
        <Projects projects={projects} title="Projetos Recentes" showLink />
        {/* <Blogs blogs={blogs} title="últimos artigos" showLink /> */}
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`
