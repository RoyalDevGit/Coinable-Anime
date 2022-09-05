import React, { useState, useEffect } from "react";
import Header from "src/layout/Header";
import { styled, alpha } from "@mui/material/styles";
import Footer from "./../src/layout/Footer";
import { AppBar, Grid, Paper, Slide, useScrollTrigger } from "@mui/material";
import Image from "next/image";
import SearchDialog from "src/SearchDialog";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const ImageContainer = styled(Paper)(({ theme }) => ({
  height: "250px",
  position: "relative",
  [theme.breakpoints.only("md")]: {
    height: "250px",
  },
  [theme.breakpoints.only("sm")]: {
    height: "350px",
  },
  [theme.breakpoints.only("xs")]: {
    height: "450px",
  },
}));

const ImageGrid = styled(Grid)(({ theme }) => ({
  padding: "30px 10px 130px",
  [theme.breakpoints.only("xs")]: {
    margin: "auto",
    maxWidth: "350px",
    padding: "0px 10px",
  },
}));

export default function Index(props: Props) {
  const [anime, setAnime] = useState<Array<any>>([]);

  const getData = async () => {
    const data = await (await fetch("https://api.jikan.moe/v4/anime")).json();
    setAnime(data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar sx={{ backgroundColor: "white" }}>
          <Header />
        </AppBar>
      </HideOnScroll>
      <Header id="back-to-top-anchor" />
      <SearchDialog />
      <div className="container">
        <ImageGrid
          container
          spacing={{ xs: 1.5, sm: 2, md: 3 }}
          columnSpacing={{ xs: 0, sm: 2, md: 3 }}
        >
          {anime.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.mal_id}>
              <ImageContainer>
                <Image
                  style={{ borderRadius: "10px" }}
                  src={anime[1].images.jpg.image_url}
                  layout="fill"
                />
              </ImageContainer>
            </Grid>
          ))}
        </ImageGrid>
      </div>
      <Footer />
    </>
  );
}
