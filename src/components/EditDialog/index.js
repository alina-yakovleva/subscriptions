import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

const EditDialog = ({ open, onClose, onSubmit, data }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [day, setDay] = useState("");

  const [isTouched, setTouched] = useState(false);

  const hasNameError = !name;
  const hasPriceError = !price || !Number(price) || price < 1;
  const hasDayError = !day || !Number(day) || day > 31 || day < 1;

  const hasErrors = hasNameError || hasPriceError || hasDayError;

  useEffect(() => {
    if (data) {
      setName(data.name);
      setPrice(data.price);
      setDay(data.day);
    }
  }, [data]);

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

  const onEditSub = () => {
    setTouched(true);

    if (hasErrors) {
      return;
    }

    const sub = { name, price: Number(price), day: Number(day) };

    onSubmit(data.id, sub);

    handleClose();
  };
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Редактирование подписки</DialogTitle>
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
        <Button onClick={onEditSub} disabled={isTouched && hasErrors}>
          Сохранить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default EditDialog;
