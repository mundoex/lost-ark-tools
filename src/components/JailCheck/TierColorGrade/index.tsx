import { Box, Grid, Typography } from "@mui/material";
import { TIER_COLORS } from "../../../constants/Other";

const letters = ["A", "B", "C", "D", "E"];

export function TierColorGrade() {
  return (
    <Grid
      container
      direction="row"
      spacing={1}
      alignItems="center"
      justifyContent="center"
      marginBottom={"8px"}
    >
      {[...TIER_COLORS].reverse().map((color, index) => (
        <Grid item key={index}>
          <Box
            sx={{
              width: 40,
              height: 40,
              backgroundColor: color,
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "#ffffff", fontWeight: "bold" }}
            >
              {letters[index]}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}