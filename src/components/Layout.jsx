import React from "react";
import "./Layout.css";
import { IoLogoWhatsapp } from "react-icons/io";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="w-full  h-[10vh] w- flex items-center justify-around  border fixed z-40 bg-slate-200">
        <div className="p-2 flex items-center">
          <h1 className="text-4xl font-semibold  ml-5 fuente">BodyTherapy</h1>
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
        <a
          href="https://wa.me/18493409960"
          className="flex px-4 py-2 ml-10 items-center border border-black font-bold"
        >
          Escribenos
          <IoLogoWhatsapp className="ml-2" />
        </a>
      </div>
      <main className="w-full ">{children}</main>
    </div>
  );
};

export default Layout;
