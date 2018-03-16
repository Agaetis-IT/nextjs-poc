import React from 'react'
import { Drawer, List, ListItem, ListItemText, withStyles } from 'material-ui'
import Link from 'next/link'

const styles = theme => ({
  drawerPaper: {
    width: 240,
  },
})

const MenuLink = ({ href, prefetch, children }) => (
  <Link href={href} prefetch={prefetch}>
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
      <MenuLink href="/" prefetch>
        Home
      </MenuLink>
      <MenuLink href="/about" prefetch>
        About
      </MenuLink>
    </List>
  </Drawer>
)

export default withStyles(styles)(CustomDrawer)
