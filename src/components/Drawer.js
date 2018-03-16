import React from 'react'
import { Drawer, List, ListItem, ListItemText, withStyles } from 'material-ui'
import Link from 'next/link'

const styles = theme => ({
  drawerPaper: {
    width: 240,
  },
})

const MenuLink = ({ href, children }) => (
  <Link href={href}>
    <ListItem button>
      <ListItemText primary={children} />
    </ListItem>
  </Link>
)

const CustomDrawer = ({ classes, ...props }) => (
  <Drawer
    classes={{
      paper: classes.drawerPaper,
    }}
    {...props}
  >
    <List>
      <MenuLink href="/">Home</MenuLink>
      <MenuLink href="/about">About</MenuLink>
    </List>
  </Drawer>
)

export default withStyles(styles)(CustomDrawer)
