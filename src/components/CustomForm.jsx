import { FormControl, OutlinedInput, InputLabel } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/joy/IconButton";
import "../App.css";

const CustomForm = ({ addTask }) => {
  //   console.log(addTask);
  //   console.log(text.label);
  const [textValue, setTextValue] = useState("");
  const onTextChange = (el) => {
    // console.log(el.target.value);
    setTextValue(el.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({ name: textValue, id: Date.now() });
    setTextValue("");
  };
  return (
    <div className="wrapper flex justify-center align-middle">
      <FormControl>
        <InputLabel>ENTER TASK</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={textValue}
          label="ENTER TASK"
          onChange={onTextChange}
        />
      </FormControl>
      <IconButton
        sx={{ height: 55, width: 25, marginLeft: 4 }}
        variant="outlined"
        onClick={(e) => {
          handleFormSubmit(e);
        }}
      >
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default CustomForm;
