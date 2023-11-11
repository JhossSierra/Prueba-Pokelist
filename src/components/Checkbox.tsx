import React from "react";
import MuiCheckbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function MyCheckbox() {
  return (
    <div>
      <MuiCheckbox defaultChecked {...label} />
    </div>
  );
}