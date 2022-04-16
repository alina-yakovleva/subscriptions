import { Divider } from "@mui/material";
import { useSelector } from "react-redux";

import Chart from "../Chart";
import Sum from "../Sum";

import { Container } from "./styles";

const Sidebar = () => {
  const subs = useSelector((state) => state.subscriptions);

  const sumPrice = subs.reduce((sum, sub) => (sum += sub.price), 0);

  return (
    <Container>
      <Sum label="Доход" value={30000} />
      <Divider />
      <Sum label="Расход" value={sumPrice} />
      <Divider />
      <Chart value={[30000, sumPrice]} />
    </Container>
  );
};

export default Sidebar;
