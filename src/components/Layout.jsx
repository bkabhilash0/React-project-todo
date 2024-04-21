import { Outlet } from 'react-router-dom';

const Layout = () => {
  // Component code here
  return (
    <>
      {/* Header */}
      <header className="px-3 py-1 bg-zinc-900 h-12">

      </header>
      <main className="px-3 py-3 md:py-5 md:container md:mx-auto">
        <Outlet/>
      </main>
      {/* Footer */}
      <footer className="px-3 py-1 bg-zinc-900 h-6 fixed bottom-0 w-full">

      </footer>
    </>
  );
};


export default Layout;
