import React from 'react'
import withRoot from '../enhancers/withRoot'
import Layout from '../components/Layout'

const Index = ({ counter, increment }) => (
  <Layout>Made with love by Agaetis</Layout>
)

export default withRoot()(Index)
