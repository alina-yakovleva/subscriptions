import { ThemeProvider, createTheme, Divider } from "@mui/material";
import Sidebar from "../Sidebar";
import { Content, Container } from "./styles";

const theme = createTheme({});

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container elevation={8}>
        <Content>{children}</Content>
        <Divider orientation="vertical" flexItem />
        <Sidebar />
      </Container>
    </ThemeProvider>
  );
};
export default Layout;
