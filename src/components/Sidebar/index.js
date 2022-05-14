import { Button, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";

import { editIncomeAsync, setUser } from "../../store/actions";

import Chart from "../Chart";
import Sum from "../Sum";

import { Container } from "./styles";

const Sidebar = () => {
  const income = useSelector((state) => state.user.income);
  const subs = useSelector((state) => state.subscriptions);

  const dispatch = useDispatch();

  const sumPrice = subs.reduce((sum, sub) => (sum += sub.price), 0);

  return (
    <Container>
      <Sum
        onChange={(income) => dispatch(editIncomeAsync(income))}
        label="Доход"
        value={income}
      />
      <Divider />
      <Sum label="Расход" value={sumPrice} />
      <Divider />
      <Chart value={[income, sumPrice]} />
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
