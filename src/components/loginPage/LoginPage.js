import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { login } from "../../api/users";

const LoginPage = () => {
  const [values, setValues] = useState({
    password: "",
    username: "",
    showPassword: false,
  });

  const [isTouched, setTouched] = useState(false);

  const hasUserNameError = !values.username || values.username.length > 8;
  const hasPasswordError = !values.password || values.password.length > 8;
  const hasErrors = hasUserNameError || hasPasswordError;

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onEditSub = () => {
    setTouched(true);

    if (hasErrors) {
      return;
    }
    login(values.username, values.password).then((data) => console.log(data));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      width={400}
      m="15% auto 0"
    >
      <Typography variant="h4">Авторизация</Typography>
      <TextField
        value={values.username}
        onChange={handleChange("username")}
        label="Логин"
        margin="normal"
        size="normal"
        error={isTouched && hasUserNameError}
        helperText={isTouched && hasUserNameError ? "Введите логин" : " "}
        fullWidth
      />
      <TextField
        variant="outlined"
        label="Пароль"
        type={values.showPassword ? "text" : "password"}
        value={values.password}
        onChange={handleChange("password")}
        error={isTouched && hasPasswordError}
        helperText={isTouched && hasPasswordError ? "Введите пароль" : " "}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
      />
      <Button
        onClick={onEditSub}
        disabled={isTouched && hasErrors}
        size="large"
        variant="contained"
      >
        Войти
      </Button>

      <Button size="large" variant="contained">
        Зарегистрироваться
      </Button>
    </Box>
  );
};

export default LoginPage;
