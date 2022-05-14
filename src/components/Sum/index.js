import { IconButton, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

import CheckIcon from "@mui/icons-material/Check";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";

const Sum = ({ label, value: defaultValue, onChange }) => {
  const [value, setValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const onEditIncome = () => {
    onChange(value);
    setOpen(false);
  };

  const cancelIncome = () => {
    setValue(defaultValue);
    setOpen(false);
  };
  return (
    <Box textAlign="center" p={3}>
      <Typography variant="subtitle1">{label}</Typography>
      <Typography variant="h4">
        {!open && (
          <Box display="flex" justifyContent="center" alignItems="center">
            <b>{value}</b>
            {onChange && (
              <IconButton onClick={() => setOpen(true)}>
                <EditIcon />
              </IconButton>
            )}
          </Box>
        )}
        {open && (
          <Box display="flex" alignItems="center">
            <TextField
              value={value}
              variant="outlined"
              size="small"
              onChange={(e) => setValue(Number(e.target.value))}
            />
            <IconButton onClick={onEditIncome}>
              <CheckIcon />
            </IconButton>
            <IconButton onClick={cancelIncome}>
              <CloseIcon />
            </IconButton>
          </Box>
        )}
      </Typography>
      <Typography variant="subtitle1">рублей в месяц</Typography>
    </Box>
  );
};
export default Sum;
