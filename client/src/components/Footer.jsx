import React from "react";
import { Box, Container, Grid, Typography, Toolbar } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

function Footer() {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Toolbar disableGutters>
              <WbSunnyIcon />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
              >
                Weather App
              </Typography>
            </Toolbar>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()}`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
