import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
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
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

//NAV ICONS
import DashboardIcon from "@mui/icons-material/Dashboard"; //dashboard
import PersonIcon from "@mui/icons-material/Person"; //client
import BadgeIcon from "@mui/icons-material/Badge"; //employee
import EventIcon from "@mui/icons-material/Event"; //event
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"; //appot
import DinnerDiningIcon from "@mui/icons-material/DinnerDining"; //dish
import Inventory2Icon from "@mui/icons-material/Inventory2"; // package
import ReceiptIcon from "@mui/icons-material/Receipt"; //trans
import LanguageIcon from "@mui/icons-material/Language"; //Website

import { Link as NavLink } from "react-router-dom";
import { Routes, Route, Outlet } from "react-router-dom";

//NAVLINKS
import Dashboard from "../pages/NavLinks/Dashboard";
import Client from "../pages/NavLinks/Client";
import Employees from "../pages/NavLinks/Employees";
import MyEvents from "../pages/NavLinks/MyEvents";
import Appointment from "../pages/NavLinks/Appointment";
import Transaction from "../pages/NavLinks/Transaction";
import Package from "../pages/NavLinks/Package";
import Dish from "../pages/NavLinks/Dish";
import Website from "../pages/NavLinks/Website";

//NAV LINK NAMES
const linkName = [
  "Dashboard",
  "Client",
  "Employee",
  "MyEvent",
  "Appointment",
  "Dish",
  "Package",
  "Transaction",
  "Website",
];

//NAV LINKS
const links = [
  "/admin/dashboard",
  "/admin/client",
  "/admin/employees",
  "/admin/myevents",
  "/admin/appointment",
  "/admin/dish",
  "/admin/package",
  "/admin/transaction",
  "/admin/website",
];

//NAV ICONS
const linkIcons = [
  DashboardIcon,
  PersonIcon,
  BadgeIcon,
  EventIcon,
  CalendarMonthIcon,
  DinnerDiningIcon,
  Inventory2Icon,
  ReceiptIcon,
  LanguageIcon,
];

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
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
    position: "relative",
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

export default function AdminPage() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        {/* TOP BAR */}
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
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
              Admin Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* SIDE NAV */}
        <Drawer variant="permanent" open={open}>
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
          <Divider />
          {/* ROUTES GOING TO EACH NAVS */}
          {linkName.map((link, key) => (
            <NavLink to={links[key]} key={key}>
              <ListItemButton>
                <ListItemIcon style={{ color: "black", fontSize: "2rem" }}>
                  {React.createElement(linkIcons[key])}
                </ListItemIcon>
                <ListItemText primary={link} />
              </ListItemButton>
            </NavLink>
          ))}
        </Drawer>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          {/* CONTAINER FOR EACH NAV */}
          <Container maxWidth="full" sx={{ mt: 4, mb: 4 }}>
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="client" element={<Client />} />
              <Route path="employees" element={<Employees />} />
              <Route path="myevents" element={<MyEvents />} />
              <Route path="appointment" element={<Appointment />} />
              <Route path="dish" element={<Dish />} />
              <Route path="package" element={<Package />} />
              <Route path="transaction" element={<Transaction />} />
              <Route path="website" element={<Website />} />
            </Routes>
            {/* <Copyright sx={{ pt: 4 }} /> */}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
