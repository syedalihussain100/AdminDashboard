import {
  Box,
  Grid,
  IconButton,
  MenuItem,
  Typography,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { getDocs, updateDoc, doc,collection } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../../firebaseConfig";
import { useAppStore } from "../../appStore";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const event = [
  {
    value: "Soccer",
    label: "Soccer",
  },
  {
    value: "Tennis",
    label: "Tennis",
  },
  {
    value: "Basket Ball",
    label: "Basket Ball",
  },
  {
    value: "Ice Hockey",
    label: "Ice Hockey",
  },
  {
    value: "Zoom Soccer",
    label: "Zoom Soccer",
  },
  {
    value: "Volley Ball",
    label: "Volley Ball",
  },
  {
    value: "Base Ball",
    label: "Base Ball",
  },
  {
    value: "Hand Ball",
    label: "Hand Ball",
  },
  {
    value: "Table Tenis",
    label: "Table Tenis",
  },
];

export default function EditProduct({ closeEvent, fid }) {
  const [input, setInput] = useState("");
  const [option, setOption] = useState("");
  const [check, setCheck] = useState(false);
  // const [rows, setRows] = useState([]);
  const setRows = useAppStore((state) => state.setRows);
  const eveCollectionget = collection(db, "events");


  useEffect(() => {
    console.log("fid", fid?.id);
    setInput(fid?.input);
    setOption(fid?.options);
  },[]);


  const handleSubmit = async (e) => {
    const eveCollectionDoc = doc(db, "events", fid.id);

    const newFields = {
      input: input,
      options: option,
      date: String(new Date().toDateString()),
    };

    await updateDoc(eveCollectionDoc, newFields);
    getUsers();
    closeEvent();
    Swal.fire("Updated", "Your Leauge has been Updated", "success");
  };

  const getUsers = async () => {
    const data = await getDocs(eveCollectionget);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleCheck = () => {
    setCheck(!check);
  };



  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Edit League
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            value={option}
            onChange={(e) => setOption(e.target.value)}
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="Soccer"
            helperText="Please select your Option"
            size="small"
            sx={{ minWidth: "100%" }}
          >
            {event.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            id="outlined-basic"
            label="Edit Your Leauge"
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex" }}>
          <Checkbox {...label} value={check} onChange={handleCheck} />
          <p>{check ? "On" : "Off"}</p>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button variant="contained" onClick={handleSubmit}>
            Update
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ m: 4 }} />
    </>
  );
}
