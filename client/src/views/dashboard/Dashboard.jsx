import { useState, useLayoutEffect } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import Information from "./Information";
import AllProducts from "../productsInfo/AllProducts";
import HistoryData  from "./purchaseHistory/purchaseHistory";
import UsersData from "../usersData/dataUserAdmin";
import AllData from "../productsInfo/AllData";
import Create from "../create/Create"


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: -1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    marginTop: "5rem",
    position: "inherit",
    height: "auto",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const [currentSection, setCurrentSection] = useState("Ventas");

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleSectionChange = (sectionName) => {
    setCurrentSection(sectionName);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        // sx={{ display: "flex" }}
        width="100%"
        height="100%"
        backgroundColor="#E9E9E9"
        justifyContent="left"
        position="relative"
        display="flex"
       
      >
        <Box
        // position='fixed'
          left="0"
          
        >
          <AppBar position="absolute"  open={open}>
            <Toolbar
              sx={{
                pr: "24px",
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: "36px",
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                Dashboard
              </Typography>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer  variant="permanent" open={open}>
            <Toolbar
            
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider  />

            <List component="nav">
              {mainListItems({ onSelectSection: handleSectionChange })}
              <Divider sx={{ my: 1 }} />
      
            </List>
          </Drawer>
        </Box>

        {currentSection === "Ventas" && (
          <Box
            name="Ventas"
            display="flex"
            flexWrap="wrap"
            marginTop="8rem"
            marginBottom="5rem"
            height="100%"
            width="100%"
            marginLeft="1rem"
            marginRight="1rem"
          >
            <Container display="flex" flexWrap="wrap" width="100%">
              <Container>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: "300px",
                    marginBottom: "2rem",
                    maxWidth: "80rem",
                  }}
                >
                  <Chart />
                </Paper>

                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "300px",
                    marginBottom: "2rem",
                    maxWidth: "80rem",
                  }}
                >
                  <Deposits />
                </Paper>

                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "80rem",
                  }}
                >
                  <Orders />
                </Paper>
              </Container>
            </Container>
          </Box>
        )}

        {currentSection === "Informacion" && (
          <Box 
          name="Informacion"
          display="flex"
            flexWrap="wrap"
            marginTop="8rem"
            marginBottom="5rem"
            height="100%"
            width="100%"
            marginLeft="1rem"
            marginRight="1rem">
            <Box
              width="100%"
              height="100%"
              marginLeft="auto"
              marginRight="auto"
            >
              <Information />
            </Box>
          </Box>
        )}


{currentSection === "Historial de compras" && (
          <Box 
          name="Informacion"
          display="flex"
            flexWrap="wrap"
            marginTop="8rem"
            marginBottom="5rem"
            height="100%"
            width="100%"
            marginLeft="1rem"
            marginRight="1rem">
            <Box
              width="100%"
              height="100%"
              marginLeft="auto"
              marginRight="auto"
            >
              <HistoryData  />
            </Box>
          </Box>
        )}


{currentSection === "Usuarios" && (
          <Box 
          name="Informacion"
          display="flex"
            flexWrap="wrap"
            marginTop="8rem"
            marginBottom="5rem"
            height="100%"
            width="100%"
            marginLeft="1rem"
            marginRight="1rem">
            <Box
              width="100%"
              height="100%"
              marginLeft="auto"
              marginRight="auto"
            >
              <UsersData   />
            </Box>
          </Box>
        )}


{currentSection === "Products" && (
          <Box 
          name="Informacion"
          display="flex"
            flexWrap="wrap"
            marginTop="8rem"
            marginBottom="5rem"
            height="100%"
            width="100%"
            marginLeft="1rem"
            marginRight="1rem">
            <Box
              width="100%"
              height="100%"
              marginLeft="auto"
              marginRight="auto"
            >
              <AllData  />
            </Box>
          </Box>
        )}


{currentSection === "Crear" && (
          <Box 
          name="Informacion"
          display="flex"
            flexWrap="wrap"
            marginTop="8rem"
            marginBottom="5rem"
            height="100%"
            width="100%"
            marginLeft="1rem"
            marginRight="1rem">
            <Box
              width="100%"
              height="100%"
              marginLeft="auto"
              marginRight="auto"
            >
              <Create />
            </Box>
          </Box>
        )}




      </Box>
    </ThemeProvider>
  );
}
