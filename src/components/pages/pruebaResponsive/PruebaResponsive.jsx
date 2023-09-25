import { Box, Button, Grid, TextField } from "@mui/material";

export const PruebaResponsive = () => {
  return (
    <Box sx={{ padding: "20px", backgroundColor: { xs: "red", md: "blue" } }}>
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center" }}
        spacing={2}
      >
        <Grid item xs={12} md={6}>
          <TextField label="email" fullWidth></TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="password" fullWidth></TextField>
        </Grid>
        <Grid item md={12}>
          <Button variant="contained">Ingresar</Button>
        </Grid>
      </Grid>
    </Box>
  );
};
