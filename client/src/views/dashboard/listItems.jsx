import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import { NavLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

export const mainListItems = ({ onSelectSection }) => (
  <>
   <ListItemButton onClick={() => onSelectSection("Ventas")}>
        <ListItemIcon>
          <AttachMoneyIcon />
        </ListItemIcon>
        <ListItemText primary="Ventas" />
      </ListItemButton>
    
      <ListItemButton onClick={() => onSelectSection("Informacion")}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Informacion" />
      </ListItemButton>

  
    <ListItemButton onClick={() => onSelectSection("Historial de compras")}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Historial de compras" />
      </ListItemButton>
   

 
    <ListItemButton onClick={() => onSelectSection("Usuarios")}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Usuarios" />
      </ListItemButton>

   
    <ListItemButton onClick={() => onSelectSection("Products")}>
        <ListItemIcon>
          <CheckroomOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItemButton>
   

    
    <ListItemButton onClick={() => onSelectSection("Crear")}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Crear" />
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
