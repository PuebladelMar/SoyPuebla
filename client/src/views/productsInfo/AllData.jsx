import './AllData.css';
import { NavLink } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FolderIcon from '@mui/icons-material/Folder';

const AllData = () => {
  return (
    <div className='alldata-btn-container'>
      <NavLink to='all-products'>
        <ListItemButton>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary='Productos' />
        </ListItemButton>
      </NavLink>
      <NavLink to='all-colecciones'>
        <ListItemButton>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary='Series' />
        </ListItemButton>
      </NavLink>
      <NavLink to='all-sizes'>
        <ListItemButton>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary='Talles' />
        </ListItemButton>
      </NavLink>
      <NavLink to='all-colors'>
        <ListItemButton>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary='Colores' />
        </ListItemButton>
      </NavLink>
      <NavLink to='all-categories'>
        <ListItemButton>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary='Categorias' />
        </ListItemButton>
      </NavLink>
    </div>
  );
};

export default AllData;

// // <NavLink to="/info">
// <ListItemButton>
// <ListItemIcon>
//   <DashboardIcon />
// </ListItemIcon>
// <ListItemText primary="Informacion" />
// </ListItemButton>
// </NavLink>
// <NavLink to="/dashboard/history">
