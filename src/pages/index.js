import React from 'react'
import { Button } from 'material-ui'
import withRoot from '../enhancers/withRoot'
import Layout from '../components/Layout'

const Index = () => (
  <Layout>
    <Button variant="raised" color="primary">
      test
    </Button>
  </Layout>
)

export default withRoot(Index)
