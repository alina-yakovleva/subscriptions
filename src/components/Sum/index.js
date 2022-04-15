import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Sum = ({ label, value }) => {
  return (
    <Box textAlign="center" p={3}>
      <Typography variant="subtitle1">{label}</Typography>
      <Typography variant="h4">
        <b>{value}</b>
      </Typography>
      <Typography variant="subtitle1">рублей в месяц</Typography>
    </Box>
  );
};
export default Sum;
