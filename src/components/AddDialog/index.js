import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

const AddDialog = ({ open, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [day, setDay] = useState("");

  const [isTouched, setTouched] = useState(false);

  const hasNameError = !name;
  const hasPriceError = !price || !Number(price) || price < 1;
  const hasDayError = !day || !Number(day) || day > 31 || day < 1;

  const hasErrors = hasNameError || hasPriceError || hasDayError;

  const handleReset = () => {
    setName("");
    setPrice("");
    setDay("");
    setTouched(false);
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  const onAddSub = () => {
    setTouched(true);

    if (hasErrors) {
      return;
    }

    const sub = { name, price: Number(price), day: Number(day) };

    onSubmit(sub);

    handleClose();
  };
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Добавление подписки</DialogTitle>
      <DialogContent>
        <Stack pt={1} gap={2}>
          <TextField
            label="Название"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={isTouched && hasNameError}
            helperText={isTouched && hasNameError ? "Введите название" : " "}
          />
          <TextField
            label="Стоимость"
            size="small"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            error={isTouched && hasPriceError}
            helperText={isTouched && hasPriceError ? "Введите стоимость" : " "}
          />
          <TextField
            label="День оплаты"
            size="small"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            error={isTouched && hasDayError}
            helperText={isTouched && hasDayError ? "Введите день оплаты" : " "}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Отменить</Button>
        <Button onClick={onAddSub} disabled={isTouched && hasErrors}>
          Добавить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default AddDialog;
