import { useEffect } from "react";
import { useAuth } from "../store/store";
import { useCookies } from "react-cookie";

const AuthProvider = () => {
  const setUser = useAuth((state) => state.setUser);
  const [cookies] = useCookies(['user']);

  useEffect(() => {
    if(cookies.user){
        setUser(cookies.user)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
};

export default AuthProvider;
