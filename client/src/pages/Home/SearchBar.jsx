import React from "react";
import { TextField, Button } from "@mui/material";

function SearchBar({ value, onChange, onSubmit }) {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="City Name"
        variant="outlined"
        type="text"
        value={value}
        onChange={onChange}
        fullWidth
      />
      <Button
        variant="contained"
        onClick={onSubmit}
        style={{ height: "50px", width: "150px" }}
      >
        Check
      </Button>
    </div>
  );
}

export default SearchBar;
