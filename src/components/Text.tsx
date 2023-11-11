import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface TextProps {
  label: string;
  defaultValue?: string;
}

export default function Text(props: TextProps) {
  let {label, defaultValue} =props
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "33ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          // error
          //id="standard-error-helper-text"
          label={label}
          defaultValue={defaultValue}
          /* helperText="Incorrect entry." */
          variant="standard"
           rows={5}
           //?multiline={true}
        />
      </div>
    </Box>
  );
}
