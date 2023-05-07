import React from "react";
import { Link, NavLink } from "react-router-dom";
import { TbPlanet } from "react-icons/tb";
import { MdOutlineHolidayVillage } from "react-icons/md";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { BiMessageDots } from "react-icons/bi";

export const Aside = () => {
  const date = new Date();
  return (
    <aside className="c-aside">
      <nav>
        <ul className="list_aside">
          <li>
            <NavLink to="discagem">
              <TbPlanet className="icon" />
              Discagem direta
            </NavLink>
          </li>
          <li>
            <NavLink to="feriados">
              <MdOutlineHolidayVillage className="icon" />
              Datas de Feriados
            </NavLink>
          </li>
          <li>
            <NavLink to="cep">
              <HiOutlineRocketLaunch className="icon" />
              Detalhes de cep
            </NavLink>
          </li>
          <li>
            <NavLink to="contato">
              <BiMessageDots className="icon" />
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="inline-items">
        <p>{`${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`}</p>
        <p>{`©${date.getFullYear()} Gardion.vercel.app`}</p>
      </div>
    </aside>
  );
};
