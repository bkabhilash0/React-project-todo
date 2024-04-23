import { Outlet } from "react-router-dom";
import QueryProvider from "../providers/QueryProvider";
import { CookiesProvider } from "react-cookie";
import AuthProvider from "../providers/AuthProvider";
import Header from "./Header";

const Layout = () => {
  // Component code here
  return (
    <>
      {/* Header */}
      <CookiesProvider>
        <QueryProvider>
          <AuthProvider />
          <Header />
          <main className="px-3 py-3 md:py-5 md:container md:mx-auto">
            <Outlet />
          </main>
          <footer className="px-3 py-1 bg-zinc-900 h-6 fixed bottom-0 w-full"></footer>
        </QueryProvider>
      </CookiesProvider>
      {/* Footer */}
    </>
  );
};

export default Layout;
