import { Divider } from "@mui/material";

import Chart from "../Chart";
import Sum from "../Sum";

import { Container } from "./styles";

const Sidebar = () => {
  return (
    <Container>
      <Sum label="Доход" value={378} />
      <Divider />
      <Sum label="Расход" value={240} />
      <Divider />
      <Chart value={[100, 30]} />
    </Container>
  );
};

export default Sidebar;
