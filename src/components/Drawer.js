import React from 'react'
import { Drawer, List, ListItem, ListItemText, withStyles } from 'material-ui'

const styles = theme => ({
  drawerPaper: {
    width: 240,
  },
})

const CustomDrawer = ({ classes, ...props }) => (
  <Drawer
    classes={{
      paper: classes.drawerPaper,
    }}
    {...props}
  >
    <List>
      <ListItem button>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="About" />
      </ListItem>
    </List>
  </Drawer>
)

export default withStyles(styles)(CustomDrawer)
