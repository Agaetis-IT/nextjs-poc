import React from 'react'
import { Button } from 'material-ui'
import withRoot from '../enhancers/withRoot'

const Index = () => (
  <div>
    <Button variant="raised" color="primary">
      test
    </Button>
  </div>
)

export default withRoot(Index)
