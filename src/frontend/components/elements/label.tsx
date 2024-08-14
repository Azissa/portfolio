import { NavLink } from "react-router-dom";

export const Label = () => {
  return (
    <div className="text-untuk-label flex space-x-12  text-lg font-semibold transition duration-300 ease-in-out">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "underline text-untuk-label-hover"
            : "hover:text-untuk-label-hover transition duration-300 ease-in-out"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "underline text-untuk-label-hover"
            : "hover:text-untuk-label-hover transition duration-300 ease-in-out"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/project"
        className={({ isActive }) =>
          isActive
            ? "underline text-untuk-label-hover"
            : "hover:text-untuk-label-hover transition duration-300 ease-in-out"
        }
      >
        Project
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "underline text-untuk-label-hover"
            : "hover:text-untuk-label-hover transition duration-300 ease-in-out"
        }
      >
        Contact
      </NavLink>
    </div>
  );
};
