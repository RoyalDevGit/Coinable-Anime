import React, { useContext, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import AppContext from "./../context";

const HeaderDiv = styled("div")(({ theme }) => ({
  padding: "0px 10px",
  display: "flex",
  verticalAlign: "center",
  height: "50px",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.up("xs")]: {
    margin: "0px",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.1),
  minWidth: "152px",
  maxWidth: "332px",
  height: "65%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(4),
  },
  [theme.breakpoints.up("xs")]: {
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
    paddingLeft: `calc(1em + ${theme.spacing(2.8)})`,
    transition: theme.transitions.create("width"),
    width: "200%",
    height: "100%",
  },
}));

const DateLabel = styled(Typography)({
  color: "black",
  whiteSpace: "nowrap",
  overflow: "inherit",
  width: "auto",
  fontFamily: "Inter",
  fontSize: "0.7em",
});

const LogoLabel = styled(Typography)({
  fontFamily: "Inter",
  fontWeight: "bolder",
  fontSize: "1.3em",
  color: "black",
});

type HeaderProps = {
  id?: string;
};

export default function Header(props: HeaderProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  const context = useContext(AppContext);

  const getOrdinalDay = (dt: Date) => {
    return (
      dt.getDate() +
      (dt.getDate() % 10 == 1 && dt.getDate() != 11
        ? "st"
        : dt.getDate() % 10 == 2 && dt.getDate() != 12
        ? "nd"
        : dt.getDate() % 10 == 3 && dt.getDate() != 13
        ? "rd"
        : "th")
    );
  };

  const getDateLabel = () => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = monthNames[new Date().getMonth()];
    const day = getOrdinalDay(new Date());
    if (width > 500) return `Today is the ${day} of the ${month}`;
    else return `${month.substring(0, 3)} ${day}`;
  };

  return (
    <div id={props.id} className="container">
      <HeaderDiv>
        <LogoLabel>Anime</LogoLabel>
        <Search
          onClick={() => {
            context.controlSearchOpen(true);
          }}
        >
          <SearchIconWrapper>
            <SearchIcon color="disabled" fontSize="inherit" />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <DateLabel>{getDateLabel()}</DateLabel>
      </HeaderDiv>
    </div>
  );
}
