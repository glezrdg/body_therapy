import React from "react";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="w-full  h-28 w- flex items-center justify-around  border ">
        <div className="p-2 flex items-center">
          <img src="../../Logo rita.png" alt="" className="logo mt-2" />
          <img src="../../Letra.png" alt="" className="letra mt-8" />
          {/* <h1 className="text-4xl  font-bold ml-5 fuente">BodyTherapyRD</h1> */}
        </div>

        <ul className="flex w-1/2 justify-between items-center">
          <li className="nav-items">
            <a href="" className="text-xl  px-4 py-2">
              Inicio
            </a>
          </li>
          <li className="nav-items">
            <a href="" className="text-xl  px-4 py-2">
              Servicios
            </a>
          </li>

          <li className="nav-items">
            <a href="" className="text-xl  px-4 py-2">
              Quienes Somos?
            </a>
          </li>

          <li className="nav-items">
            <a href="" className="text-xl  px-4 py-2">
              Ofertas
            </a>
          </li>
          <li className="nav-items">
            <a href="" className="text-xl  px-4 py-2">
              Contacto
            </a>
          </li>
        </ul>
      </div>
      <main className="w-full h-[88vh]  px-32 py-20 flex justify-center ">
        {children}
      </main>
    </div>
  );
};

export default Layout;
