import React from "react";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="w-full  h-28 w- flex items-center justify-around  border ">
        <div className="p-2 flex items-center">
          <img src="../../Logo rita.png" alt="" className="logo mt-2" />

          <h1 className="text-4xl  ml-5 fuente">BodyTherapyRD</h1>
        </div>

        <ul className="flex w-1/2 justify-between items-center">
          <li className="nav-items">
            <a href="" className="text-md px-2 py-2">
              Inicio
            </a>
          </li>
          <li className="nav-items">
            <a href="" className="text-md px-2 py-2">
              Servicios
            </a>
          </li>

          <li className="nav-items">
            <a href="" className="text-md  py-2">
              Quienes Somos?
            </a>
          </li>

          <li className="nav-items">
            <a href="" className="text-md px-2 py-2">
              Ofertas
            </a>
          </li>
          <li className="nav-items">
            <a href="" className="text-md px-2 py-2">
              Contacto
            </a>
          </li>
        </ul>
      </div>
      <main className="w-full h-[88vh] lg:h-[83vh] bg-red-400 lg:px-10 lg:py-5 px-32 py-20 ">
        {children}
      </main>
    </div>
  );
};

export default Layout;
