import LayoutAdmin from "@/components/layoutAdmin";
import Orden from "@/components/orden";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
const admin = () => {

  const fetcher = async () => {
    const { data } = await axios("/api/ordenes");
    return data;
  };

  const options = {
    refreshInterval: 1000
  }

  const { data, error, isLoading } = useSWR("/api/ordenes", {fetcher,refreshInterval: 100});

  useEffect(() => {
    setTimeout(() => {}, 2000);
  }, [isLoading]);

  //console.log(data)
  //console.log(error)
  //console.log(isLoading)
  return (
    <LayoutAdmin pagina={"Administración"}>
      <main>
        <h1 className="text-4xl font-black">Panel de Administración</h1>
        <p className="text-2xl my-10">Administra tus Ordenes</p>
        {isLoading ? (
          <div className="spinner">
            <div className="dot1"></div>
            <div className="dot2"></div>
          </div>
        ) : (
          <>
            {data.length > 0 ? (
              <div className="flex flex-col gap-8">
                {data.map((ordenes) => (
                  <Orden key={ordenes.id} orden={ordenes} />
                ))}
              </div>
            ) : (
              <div>
                <p className="text-lg">No hay Ordenes Pendientes</p>
              </div>
            )}
          </>
        )}
      </main>
    </LayoutAdmin>
  );
};

export default admin;
