import React from "react";
import { Typography } from "@mui/material";
import { makeStyles, createStyles } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ExpandLess";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const Comment = styled("div")({
  maxWidth: "280px",
});

const FooterContent = styled("div")(({ theme }) => ({
  position: "fixed",
  bottom: 0,
  right: 0,
  left: 0,
  width: "100%",
  padding: "20px 10px",
  maxWidth: "655px",
  margin: "auto",
  backgroundColor: "white",
  zIndex: "4",
}));

type Props = {
  onClick: any;
};

const ExpandButton = styled(Button)<Props>(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.black, 0.1),
  minWidth: "20px",
  width: "30px",
  height: "30px",
  borderRadius: "4px",
  color: "black",
}));

const FooterDiv = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export default function Footer() {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");
    if (anchor) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <FooterDiv>
      <Divider style={{ position: "fixed", bottom: "100px", width: "100%" }} />
      <FooterContent>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            height: "60px",
          }}
        >
          <Comment>
            <Typography sx={{ fontWeight: "bold" }}> Your name </Typography>
            <Typography sx={{ fontSize: "12px", color: "gray" }}>
              {" "}
              A few words about how you found Coinable and how did you fell
              about this task{" "}
            </Typography>
          </Comment>
          <ExpandButton onClick={handleClick}>
            <ArrowDropDownIcon />
          </ExpandButton>
        </div>
      </FooterContent>
    </FooterDiv>
  );
}
