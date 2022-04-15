import styled from "@emotion/styled";
import { Paper } from "@mui/material";

export const Container = styled(Paper)({
  display: "flex",
  margin: "0 auto",
  maxWidth: 1200,
});

export const Content = styled("div")(({ theme }) => ({
  padding: theme.spacing(5),
  flex: 1,
}));
