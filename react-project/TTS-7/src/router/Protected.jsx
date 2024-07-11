import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const AuthRoute = ({ Component }) => {
  const navigate = useNavigate();
  const [{ token }] = useCookies(["token"]);
  useEffect(() => {
    if (!token) navigate("/login");
  });
  return Component;
};
