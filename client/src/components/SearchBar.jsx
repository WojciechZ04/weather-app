import React from "react";
import { TextField, Button } from "@mui/material";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 10px;
  width: 100%;

  @media (min-width: 600px) {
    max-width: 500px;
    margin-bottom: 0;
    margin-right: 10px;
  }
`;

const StyledButton = styled(Button)`
  height: 56px; /* Match the height of the TextField */
  width: 100%;
  max-width: 150px;

  @media (min-width: 600px) {
    width: 150px;
  }
`;

function SearchBar({ value, onChange, onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledTextField
        id="outlined-basic"
        label="Enter city Name"
        variant="outlined"
        type="search"
        value={value}
        onChange={onChange}
        fullWidth
      />
      <StyledButton
        variant="contained"
        type="submit"
        disabled={!value.trim()}
      >
        Check
      </StyledButton>
    </Form>
  );
}

export default SearchBar;
