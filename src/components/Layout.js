import React, { Fragment } from 'react'
import { AppBar, Toolbar, Typography, withStyles } from 'material-ui'

const styles = ({ theme }) => ({
  root: {
    padding: [30, 15],
  },
})

const Layout = ({ classes, children }) => (
  <Fragment>
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Next POC
        </Typography>
      </Toolbar>
    </AppBar>
    <div className={classes.root}>{children}</div>
  </Fragment>
)

export default withStyles(styles)(Layout)
