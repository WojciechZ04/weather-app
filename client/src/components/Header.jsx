import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import SearchBar from "./SearchBar";
import { WeatherContext } from "../WeatherContext"; // Import the context

const pages = ["About", "More projects"];

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const { city, setCity, fetchWeather } = React.useContext(WeatherContext); // Use the context
  const location = useLocation(); // Get the current path

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleButtonClick = () => {
    fetchWeather(city);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <WbSunnyIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Weather App
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {location.pathname === "/" && (
              <SearchBar
                value={city}
                onChange={handleInputChange}
                onSubmit={handleButtonClick}
              />
            )}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                key={page}
                to={`/${page}`}
                onClick={handleCloseNavMenu}
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <WbSunnyIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Weather App
            </Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>

        {isMobile && location.pathname === "/" && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
            <SearchBar
              value={city}
              onChange={handleInputChange}
              onSubmit={handleButtonClick}
            />
          </Box>
        )}

        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <Link
              to={`/${page}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </Container>
    </AppBar>
  );
}

export default Header;
