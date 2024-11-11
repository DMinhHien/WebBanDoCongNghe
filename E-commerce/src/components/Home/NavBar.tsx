import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Avatar,
  Button,
} from "@mui/material";
import { Search, ShoppingCart, Person, Menu } from "@mui/icons-material";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);

  const {user, logout} = useAuth();
  const navigate = useNavigate();
  const handleProfileClick = () => {
    navigate('/profile'); // Điều hướng đến trang chỉnh sửa thông tin cá nhân
  };
  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    navigate('/login');
  };
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const menuItems = (
    <List
      style={{
        display: isMobile ? "block" : "flex",
        gap: isMobile ? "0" : "20px",
      }}
    >
      <ListItemButton component = {Link} to ="/">
        <ListItemText
          primary="Trang chủ"
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItemButton>
      <ListItemButton component = {Link} to ="/categories">
        <ListItemText
          primary="Danh mục sản phẩm"
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItemButton>
      <ListItemButton component = {Link} to ="/shops">
        <ListItemText
          primary="Shops"
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItemButton>
      <ListItemButton>
        <ListItemText
          primary="Best Sellers"
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItemButton>
      <ListItemButton>
        <ListItemText
          primary="Reviews"
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItemButton>
      <ListItemButton>
        <ListItemText
          primary="About"
          primaryTypographyProps={{ noWrap: true }}
        />
      </ListItemButton>
      
    </List>
  );
 
  return (
    <AppBar
      position="sticky"
      style={{ backgroundColor: "#FBFAF1", boxShadow: "none", color: "#333" }}
    >
      <Toolbar style={{ justifyContent: "space-between" }}>
        {/* Left section - Logo */}
        {!isMobile && (
          <img src={logo} alt="Brand Logo" style={{ height: "60px" }} />
        )}

        {/* Middle Section - Menu */}
        {isMobile ? (
          <>
            <IconButton onClick={toggleDrawer(true)}>
              <Menu />
            </IconButton>
            {/* Drawer for Mobile View */}
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
                style={{ width: 250 }}
              >
                <List>
                <ListItemButton component = {Link} to ="/">
                    <ListItemText primary="Trang chủ" />
                  </ListItemButton>
                  <ListItemButton component = {Link} to ="/categories">
                    <ListItemText primary="Danh mục sản phẩm" />
                  </ListItemButton>
                  <ListItemButton component = {Link} to ="/shops">
                    <ListItemText primary="Shops" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText primary="Best Sellers" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText primary="Reviews" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemText primary="About" />
                  </ListItemButton>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          menuItems // Render the horizontal list for larger screens
        )}
        {/* Right Section - Search and Cart */}
        <Box style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <InputBase
            placeholder="Search"
            startAdornment={<Search style={{ color: "#999" }} />}
            style={{
              backgroundColor: "#F0ECE1",
              padding: "5px 10px",
              borderRadius: "20px",
            }}
          />
          <Link to="/admin">
            <IconButton>
              <ShoppingCart />
            </IconButton>
          </Link>
          <Link to="/auth">
            {/* icon button */}
            {user ? (
          <>
            <IconButton color="inherit" onClick={handleProfileClick}>
              <Avatar>{user.name.charAt(0)}</Avatar>
            </IconButton>
            <Button color="inherit" onClick={handleLogout}>Đăng Xuất</Button>
          </>
        ) : (
          <Button color="inherit" onClick={() => navigate('/login')}>
            Đăng Nhập
          </Button>
        )}
             {/* icon button */}
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
