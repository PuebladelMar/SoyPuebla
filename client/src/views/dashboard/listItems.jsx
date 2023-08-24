import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BrushIcon from "@mui/icons-material/Brush";
import StraightenIcon from '@mui/icons-material/Straighten';
import CategoryIcon from '@mui/icons-material/Category';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
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

    <ListItemButton onClick={() => onSelectSection("Productos")}>
      <ListItemIcon>
        <CheckroomOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Productos" />
    </ListItemButton>

    <ListItemButton onClick={() => onSelectSection("Colores")}>
      <ListItemIcon>
        <BrushIcon />
      </ListItemIcon>
      <ListItemText primary="Colores" />
    </ListItemButton>

    <ListItemButton onClick={() => onSelectSection("Talles")}>
      <ListItemIcon>
        <StraightenIcon />
      </ListItemIcon>
      <ListItemText primary="Talles" />
    </ListItemButton>

    <ListItemButton onClick={() => onSelectSection("Categorías")}>
      <ListItemIcon>
        <CategoryIcon />
      </ListItemIcon>
      <ListItemText primary="Categorías" />
    </ListItemButton>

    <ListItemButton onClick={() => onSelectSection("Colecciónes")}>
      <ListItemIcon>
        <DryCleaningIcon />
      </ListItemIcon>
      <ListItemText primary="Colecciónes" />
    </ListItemButton>

    <ListItemButton onClick={() => onSelectSection("Crear")}>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="Crear" />
    </ListItemButton>
  </>
);
