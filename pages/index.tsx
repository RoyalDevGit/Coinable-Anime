import * as React from "react";
import Header from "src/layout/Header";
import Footer from "./../src/layout/Footer";
import {
  AppBar,
  CssBaseline,
  Grid,
  Paper,
  Slide,
  useScrollTrigger,
} from "@mui/material";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Index(props: Props) {
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar sx={{ backgroundColor: "white" }}>
          <Header />
        </AppBar>
      </HideOnScroll>
      <Header />
      <div className="container">
        <Grid container sx={{ paddingTop: "20px" }} spacing={{ xs: 2, md: 3 }}>
          {Array.from(Array(12)).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper style={{ height: "200px", backgroundColor: "gray" }}>
                xs=2
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer />
    </>
  );
}
