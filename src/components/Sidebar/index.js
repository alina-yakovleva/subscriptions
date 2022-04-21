import { Button, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";

import { setUser } from "../../store/actions";

import Chart from "../Chart";
import Sum from "../Sum";

import { Container } from "./styles";

const Sidebar = () => {
  const dispatch = useDispatch();
  const subs = useSelector((state) => state.subscriptions);

  const sumPrice = subs.reduce((sum, sub) => (sum += sub.price), 0);

  return (
    <Container>
      <Sum label="Доход" value={30000} />
      <Divider />
      <Sum label="Расход" value={sumPrice} />
      <Divider />
      <Chart value={[30000, sumPrice]} />
      <Box padding={5}>
        <Button
          onClick={() => dispatch(setUser(null))}
          size="normal"
          variant="contained"
          fullWidth
        >
          Выйти
        </Button>
      </Box>
    </Container>
  );
};

export default Sidebar;
