import React from 'react'
import { Button } from 'material-ui'
import withRedux from 'next-redux-wrapper'
import withRoot from '../enhancers/withRoot'
import Layout from '../components/Layout'
import * as counterActions from '../actions/counterActions'
import configureStore from '../configureStore'

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

export default withRedux(configureStore, mapStateToProps, counterActions)(
  withRoot(Index)
)
