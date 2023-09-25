import { Button, TextField, Typography } from "@mui/material";

export const MaterialUI = () => {
  return (
    <div>
      <Typography color={"primary"} variant="h2">
        Aprendiendo Mui
      </Typography>

      <TextField id="outlined-basic" label="Email" variant="outlined" />

      <Button variant="contained">Ingresar</Button>
    </div>
  );
};
