import React from "react"
import HeroSection from "../components/HeroSection"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Accueil" />

    <HeroSection />
  </Layout>
)

export default IndexPage
