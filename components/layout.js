import Head from "next/head";
import React from "react";
import Sidebard from "./sidebar";
import ModalApp from "./modalApp";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import { useRouter } from "next/router";

const Layout = ({ children, pagina }) => {
  const {pathname} = useRouter()

  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content="Quiosco Cafetería" />
      </Head>
      <div className="md:flex gap-4">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5  bg-slate-200">
          <Sidebard />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:4/5 h-screen overflow-y-scroll">
          <div className="p-10">
            <div className="flex justify-between">
              <Link href='/' className="font-bold text-xl">menú</Link>
              <Link href='/resumen' className="font-bold text-xl">Resumen</Link>
              <Link href='/pedido' className="font-bold text-xl">Datos y Total</Link>
            </div>
            <div className="grid">
              <div className="h-2 bg-slate-300 rounded-lg mt-2 relative">
                <div className={`h-2 bg-amber-300 rounded-lg absolute ${pathname === '/' ? 'w-8' : pathname === '/resumen' ? 'w-2/4' :'w-full'}`}></div>
              </div>
            </div>
            
            <ToastContainer />
            {children}
          </div>
        </main>
      </div>
      <ModalApp />
    </>
  );
};

export default Layout;
