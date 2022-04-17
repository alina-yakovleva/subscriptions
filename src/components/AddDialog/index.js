import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";

const AddDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Добавление подписки</DialogTitle>
      <DialogContent>
        <Stack pt={1} gap={2}>
          <TextField label="Название" size="small" />
          <TextField label="Стоимость" size="small" />
          <TextField label="День оплаты" size="small" />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Отменить</Button>
        <Button>Добавить</Button>
      </DialogActions>
    </Dialog>
  );
};
export default AddDialog;
