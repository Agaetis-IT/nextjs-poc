import React from 'react'
import { Button } from 'material-ui'
import withRoot from '../enhancers/withRoot'
import * as counterActions from '../actions/counterActions'
import withRedux from '../enhancers/withRedux'
import { compose } from 'recompose'

const Index = ({ counter, increment }) => (
  <Button variant="raised" color="primary" onClick={increment}>
    counter: {counter}
  </Button>
)

const mapStateToProps = state => ({
  counter: state.counter.value,
})

const enhancer = compose(withRoot(), withRedux(mapStateToProps, counterActions))
export default enhancer(Index)
