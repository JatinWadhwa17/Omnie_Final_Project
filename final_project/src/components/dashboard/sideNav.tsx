"use client";
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Box,
  Container,
  TextField,
  IconButton,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/loginSlice";

const drawerWidth = 180;

const theme = createTheme({
  palette: {
    primary: {
      main: "#3949ab",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

const Dashboard = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    router.push("/");
  };
  const handleNavigation = () => {
    router.push("/routes");
  };

  const handlePartnerNavigation = () => {
    router.push("/partners");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="primary"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1 }}
              >
                Dashboard
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexGrow: 2,
                  justifyContent: "center",
                }}
              >
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Search…"
                  sx={{
                    width: "60%",
                    marginRight: 1,
                    backgroundColor: "secondary.main",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "primary.main",
                      },
                      "&:hover fieldset": {
                        borderColor: "primary.light",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "primary.dark",
                      },
                    },
                  }}
                />
                <IconButton
                  type="submit"
                  sx={{ p: "10px", color: "secondary.main" }}
                >
                  <SearchIcon />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexGrow: 1,
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  variant="body1"
                  component="div"
                  sx={{ marginRight: 2 }}
                ></Typography>
                <IconButton color="inherit">
                  <LogoutIcon onClick={handleLogout} />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {["Dashboard", "Partner", "Associate", "Utilities"].map(
                (text, index) => (
                  <ListItem
                    button
                    key={text}
                    onClick={() => {
                      if (text === "Dashboard") {
                        handleNavigation();
                      } else if (text === "Partner") {
                        handlePartnerNavigation();
                      }
                    }}
                  >
                    <ListItemIcon>
                      {index % 2 === 0 ? <DashboardIcon /> : <PeopleIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
          </Box>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <Container>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            ></Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
