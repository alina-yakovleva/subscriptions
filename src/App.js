import { Route, Routes } from "react-router-dom";

import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <Routes>
      <Route
        index
        path="/"
        element={
          <RequireAuth>
            <MainPage />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />

      <Route path="*" element={<div>Страница не найдена </div>} />
    </Routes>
  );
}

export default App;
