import React, { useState, useContext } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import AppContext from "src/context";

const ResultDialog = styled("div")({
  position: "fixed",
  zIndex: 99999,
  margin: "auto",
  width: "100%",
  maxWidth: "600px",
});

const SearchDialogBg = styled("div")({
  position: "fixed",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: 999,
  background: "#00000080",
});

export default function SearchDialog() {
  const [searchAnime, setSearchAnime] = useState<Array<any>>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const context = useContext(AppContext);
  console.log(context.searchOpen);

  const handleClose = () => {
    context.controlSearchOpen(false);
  };

  const onChangeInput = async (e: any) => {
    setSearchInput(e.target.value);
    const { data } = await (
      await fetch(
        `https://api.jikan.moe/v4/anime?letter=${e.target.value}&sfw=true&limit=5`
      )
    ).json();
    console.log(data);

    if (data) setSearchAnime(data);
  };

  return (
    <div style={{ margin: "0 auto", width: "100%", maxWidth: "600px" }}>
      <SearchDialogBg
        style={{
          display: `${context.searchOpen ? "block" : "none"}`,
        }}
        onClick={handleClose}
      />
      <ResultDialog
        style={{
          display: `${context.searchOpen ? "block" : "none"}`,
        }}
      >
        <InputBase
          style={{
            padding: "15px 30px",
            background: "white",
            width: "100%",
            maxWidth: "580px",
            borderRadius: "30px",
            fontWeight: "bold",
            margin: "120px 10px 0px",
          }}
          placeholder={`You can search for 'Kanata no Kyoukai' for example`}
          onChange={onChangeInput}
        />
        <List
          dense
          sx={{
            margin: "20px 10px 0px",
            padding: "15px 0px",
            maxWidth: "580px",
            borderRadius: "30px",
            bgcolor: "background.paper",
            display: `${searchInput ? "block" : "none"}`,
          }}
        >
          {searchAnime.length ? (
            searchAnime.map((item) => {
              const labelId = `checkbox-list-secondary-label-${item.mal_id}`;
              return (
                <ListItem
                  key={item.mal_id}
                  secondaryAction={
                    <IconButton
                      style={{ marginRight: "10px", color: "gray" }}
                      edge="end"
                      aria-label="comments"
                    >
                      <ChevronRightIcon color="disabled" />
                    </IconButton>
                  }
                  disablePadding
                >
                  <ListItemButton style={{ padding: "8px 30px" }}>
                    <ListItemAvatar style={{ marginTop: "5px" }}>
                      <Image
                        style={{ borderRadius: "10px" }}
                        src={item.images.jpg.small_image_url}
                        width="50px"
                        height="50px"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      id={labelId}
                      style={{ marginLeft: "15px" }}
                      primary={
                        <Typography
                          fontWeight="bold"
                          style={{ color: "black" }}
                        >
                          {item.title}
                        </Typography>
                      }
                      secondary={`${item.type} • ${
                        item.episodes ? item.episodes : 0
                      } Episode • ${item.status}`}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })
          ) : (
            <Typography
              style={{
                color: "black",
                margin: "auto",
                textAlign: "center",
                padding: "30px",
                fontWeight: "bold",
              }}
            >
              {`Oops it seems there is nothing for '${searchInput}'`}
            </Typography>
          )}
        </List>
      </ResultDialog>
    </div>
  );
}
