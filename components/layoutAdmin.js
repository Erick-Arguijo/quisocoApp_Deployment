import Head from "next/head";
import Image from "next/image";
import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const LayoutAdmin = ({children, pagina}) => {
  return (
    <div>
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content="Administración Quiosco Cafetería" />
      </Head>
      <div className="md:flex gap-4">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5  bg-slate-200">
          <Image
            className="mx-auto mt-2"
            src="assets/img/logo.svg"
            alt={"logo"}
            width={200}
            height={100}
          />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:4/5 h-screen overflow-y-scroll">
          <div className="p-10">
            <ToastContainer />
            {children}
        </div>
        </main>
      </div>
    </div>
  );
};

export default LayoutAdmin;
