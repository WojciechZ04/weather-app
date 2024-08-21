import React from "react";
import { TextField, Button } from "@mui/material";

function SearchBar({ value, onChange, onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
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
        type="submit"
        style={{ height: "50px", width: "150px" }}
        disabled={!value.trim()}
      >
        Check
      </Button>
    </form>
  );
}

export default SearchBar;
