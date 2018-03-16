import React from 'react'
import { Button } from 'material-ui'
import withRoot from '../enhancers/withRoot'
import Layout from '../components/Layout'
import * as counterActions from '../actions/counterActions'
import withRedux from '../enhancers/withRedux'

const Index = ({ counter, increment }) => (
  <Layout>
    <Button variant="raised" color="primary" onClick={increment}>
      counter: {counter}
    </Button>
  </Layout>
)

const mapStateToProps = state => ({
  counter: state.counter.value,
})

export default withRedux(mapStateToProps, counterActions)(withRoot(Index))
