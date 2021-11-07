import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => (
  <div className="navbar mb-2 shadow-lg text-neutral-content glass absolute w-full z-10 justify-center">
    <div className="flex items-stretch w-1/2 justify-evenly">
      <NavLink
        className={({ isActive }) =>
          `btn btn-ghost btn-sm rounded-btn ${isActive ? "glass" : ""}`
        }
        to="/"
        end
      >
        Simword
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `btn btn-ghost btn-sm rounded-btn ${isActive ? "glass" : ""}`
        }
        to="/gaps"
        end
      >
        CAE&apos;f
      </NavLink>
    </div>
  </div>
);

export default Navbar;
