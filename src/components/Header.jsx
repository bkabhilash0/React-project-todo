import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/store";
import { useCookies } from "react-cookie";

const Header = () => {
  const isLoggedIn = useAuth((state) => state.user);
  const logout = useAuth((state) => state.logout);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  return (
    <header className="px-3 py-3 bg-zinc-900 flex justify-end">
      {!isLoggedIn && (
        <Link
          to={"/auth/login"}
          className="block py-1 text-lg bg-white rounded px-5"
        >
          Login
        </Link>
      )}
      {isLoggedIn && (
        <div className="w-10 h-10 rounded-full bg-green-400 mr-5 cursor-pointer"></div>
      )}
      {isLoggedIn && (
        <div
          onClick={() => {
            removeCookie("user");
            logout();
          }}
          className="block py-1 text-lg bg-white rounded px-5 cursor-pointer"
        >
          Logout
        </div>
      )}
    </header>
  );
};

export default Header;
