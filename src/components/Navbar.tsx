import React from "react";
import { NavLink } from "react-router-dom";
import { TabIndexes } from "../constants/tabIndexes";

const Navbar: React.FC = () => (
  <div className="navbar mb-2 shadow-lg text-neutral-content glass absolute w-full z-10 justify-center">
    <div className="flex items-stretch w-1/2 justify-evenly">
      <NavLink
        className={({ isActive }) =>
          `btn btn-ghost btn-sm rounded-btn ${isActive ? "glass" : ""}`
        }
        to="/"
        tabIndex={TabIndexes.quizNavLink}
        end
      >
        Simword
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `btn btn-ghost btn-sm rounded-btn ${isActive ? "glass" : ""}`
        }
        to="/gaps"
        tabIndex={TabIndexes.gapFillNavLink}
        end
      >
        CAE&apos;f
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `btn btn-ghost btn-sm rounded-btn ${isActive ? "glass" : ""}`
        }
        to="/grammar"
        tabIndex={TabIndexes.quizNavLink}
        end
      >
        Grammar
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `btn btn-ghost btn-sm rounded-btn ${isActive ? "glass" : ""}`
        }
        to="/revise"
        tabIndex={TabIndexes.reviserNavLink}
        end
      >
        Reviser
      </NavLink>
    </div>
  </div>
);

export default Navbar;
