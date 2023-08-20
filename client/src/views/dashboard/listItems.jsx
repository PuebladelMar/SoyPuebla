import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { NavLink } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

export const mainListItems = (
  <>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <NavLink to="/info">
      <ListItemText primary='Informacion' />
      </NavLink>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <NavLink to="/dashboard/history">
      <ListItemText primary='Historial de compras' />
      </NavLink>
       </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <NavLink to="/dashboard/users">
        <ListItemText primary="Usuarios" />
      </NavLink>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary='Reportes' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary='Integración' />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CheckroomOutlinedIcon />
      </ListItemIcon>
      <NavLink to='/all-data'>
        <ListItemText primary='Products' />
      </NavLink>
    </ListItemButton>
    
    <ListItemButton>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <NavLink to='/create'>
        <ListItemText primary='Crear' />
      </NavLink>
    </ListItemButton>
  </>
);

export const secondaryListItems = (
  <>
    {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton> */}
  </>
);
