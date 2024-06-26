import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Formik, Field, Form } from "formik";
import "../../styles/form.css";

const drawerWidth = 540;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
  position: "relative",
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

// Define interface for props
interface PersistentDrawerRightProps {
  // Added interface for props
  open: boolean;
  handleDrawerClose: () => void;
}

// Accept props in the component function
const PersistentDrawerRight: React.FC<PersistentDrawerRightProps> = ({
  open,
  handleDrawerClose,
}) => {
  // Updated function signature to accept props
  const theme = useTheme();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        },
      }}
      variant="persistent"
      anchor="right"
      open={open} // Use open prop for drawer state
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Box>
        <div>
          <h1>Add Partner Details</h1>
          <Formik>
            <Form className="form-content">
              <div className="form-section">
                <Typography variant="h6">Basic Information</Typography>
                <div className="form-fields">
                  <Field
                    name="companyName"
                    placeholder="Company Name"
                    className="form-field"
                  />
                  <Field
                    name="companyWebsite"
                    placeholder="Company Website"
                    className="form-field"
                  />
                  <Field
                    name="ecommerce"
                    placeholder="Ecommerce"
                    className="form-field"
                  />
                  <Field
                    name="brandIds"
                    placeholder="Brand Rights"
                    className="form-field"
                  />
                  <Field
                    name="hoAddressLine1"
                    placeholder="Address 1*"
                    className="form-field"
                  />
                  <Field
                    name="hoAddressLine2"
                    placeholder="Address 2"
                    className="form-field"
                  />
                  <Field
                    name="hoCity"
                    placeholder="City"
                    className="form-field"
                  />
                  <Field
                    as="select"
                    id="dropdown"
                    name="hoCountryId"
                    className="form-field"
                  >
                    <option value="" label="Select Country" />
                    <option value="US" label="US" />
                    <option value="IND" label="IND" />
                    <option value="SA" label="SA" />
                  </Field>
                  <Field
                    as="select"
                    id="dropdown"
                    name="hoStateId"
                    className="form-field"
                  >
                    <option value="" label="Select State" />
                    <option value="CA" label="CA" />
                    <option value="NY" label="NY" />
                    <option value="AZ" label="AZ" />
                  </Field>
                  <Field
                    name="hoZip"
                    placeholder="Zip"
                    className="form-field"
                  />
                </div>
              </div>
              <div className="form-buttons">
                <button type="submit" color="primary">
                  Submit
                </button>
                <button
                  type="button"
                  color="secondary"
                  onClick={handleDrawerClose}
                >
                  Cancel
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </Box>
    </Drawer>
  );
};

export default PersistentDrawerRight;
