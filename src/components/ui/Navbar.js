import React from "react";
// import {  useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import appland from "./appland.png";

export const Navbar = () => {
  const { name } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const hanleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <>
      <nav
        className="flex items-center justify-between flex-wrap bg-neutral-300
         p-6"
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src={appland} alt="imagen" />

          <span className="font-semibold text-xl tracking-tight"> </span>
        </div>
        <div className="block lg:hidden"></div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow"></div>
          <label className=" text-gray-500">Usuario :</label>
          <label className=" text-2/1 m-4 mr-20 text-white"> {name}</label>
          <div>
            <button
              href="#"
              className=" text-sm px-3 py-1  border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white "
              onClick={hanleLogout}
            >
              logout
            </button>
          </div>
        </div>
        <div></div>
      </nav>
    </>
  );
};
