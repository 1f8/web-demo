import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Emoji from './Emoji'

export default () => (
  <AppBar>
    <Toolbar>
      <IconButton aria-label='menu'>
        <MenuIcon />
      </IconButton>
      <Typography variant='h6' style={{flexGrow:1}}>
        <Emoji emoji='🔥' label='fire' />
        1F8 Demo
        <Emoji emoji='🔥' label='fire' />
      </Typography>
      <IconButton aria-label='account'>
        <AccountCircle />
      </IconButton>
    </Toolbar>
  </AppBar>
)