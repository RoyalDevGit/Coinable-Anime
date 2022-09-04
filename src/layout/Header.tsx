import React from "react";
import {
  CssBaseline,
  Slide,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";

const HeaderDiv = styled("div")(({ theme }) => ({
  display: "flex",
  verticalAlign: "center",
  height: "50px",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    margin: "0px 10px",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.1),
  marginRight: theme.spacing(4),
  marginLeft: 0,
  width: "auto",
  minWidth: "202px",
  maxWidth: "352px",
  height: "65%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(4),
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: "100%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1.5),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  fontSize: "1.2em",
  color: "black",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  fontSize: "0.8em",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2.8)})`,
    transition: theme.transitions.create("width"),
    width: "200%",
    height: "100%",
  },
}));

const DateLabel = styled(Typography)({
  color: "black",
  whiteSpace1: "nowrap",
  overflow: "hidden",
  fontFamily: "Inter",
  fontSize: "0.8em",
});

const LogoLabel = styled(Typography)({
  fontFamily: "Inter",
  fontWeight: "bolder",
  fontSize: "1.3em",
  color: "black",
});

export default function Header() {
  return (
    <>
      <div className="container">
        <HeaderDiv>
          <LogoLabel>Anime</LogoLabel>
          <Search>
            <SearchIconWrapper>
              <SearchIcon color="disabled" fontSize="inherit" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <DateLabel>Today is 3th of September</DateLabel>
        </HeaderDiv>
      </div>
    </>
  );
}
