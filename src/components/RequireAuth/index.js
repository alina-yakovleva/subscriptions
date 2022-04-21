import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const isAuth = useSelector((state) => Boolean(state.user));

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};
export default RequireAuth;
