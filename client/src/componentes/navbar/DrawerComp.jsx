import React, { useState } from 'react'
import { Drawer, IconButton, ListItemButton, ListItemIcon, ListItemText, List } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-router-dom';


function DrawerComp({links}) {
const [open, setOpen] = useState(false)

  return (
    <>
      <Drawer PaperProps={{
        sx:{backgroundColor: '#b2cebf'}
      }} open={open} onClose={()=> setOpen(false)}>
        <List>
            {links.map((link, index) =>(
                <ListItemButton key={index} component={Link} to={`/${link.toLowerCase()}`} >
                <ListItemIcon>
                    <ListItemText sx={{color: 'white'}}>{link}</ListItemText>
                </ListItemIcon>
            </ListItemButton>
            ))}
        </List>
        </Drawer>
      <IconButton sx={{marginRight:'auto', color: 'white'}} onClick={()=>setOpen(!open)}>
        <MenuRoundedIcon/>
      </IconButton>
    </>
  )
}

export default DrawerComp
