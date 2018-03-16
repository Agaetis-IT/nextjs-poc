import React, { Fragment } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  IconButton,
} from 'material-ui'
import MenuIcon from 'material-ui-icons/Menu'
import Drawer from './Drawer'

const styles = ({ theme }) => ({
  root: {
    padding: [30, 15],
  },
})

const Layout = class extends React.Component {
  state = {
    open: false,
  }

  toggleDrawer = () => {
    this.setState(({ open }) => ({ open: !open }))
  }

  render() {
    const { classes, children } = this.props
    const { open } = this.state

    return (
      <Fragment>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton onClick={this.toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit">
              Next POC
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.root}>{children}</div>
        <Drawer open={open} onClose={this.toggleDrawer} />
      </Fragment>
    )
  }
}

export default withStyles(styles)(Layout)
