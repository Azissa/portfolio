import { NavLink } from "react-router-dom";

export const Label = () => {
  return (
    <div className="text-untuk-label flex justify-end space-x-12 mr-6 text-lg font-semibold transition duration-300 ease-in-out">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "underline text-untuk-label-hover"
            : "hover:text-untuk-label-hover"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "underline text-untuk-label-hover"
            : "hover:text-untuk-label-hover"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/project"
        className={({ isActive }) =>
          isActive
            ? "underline text-untuk-label-hover"
            : "hover:text-untuk-label-hover"
        }
      >
        Project
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "underline text-untuk-label-hover"
            : "hover:text-untuk-label-hover"
        }
      >
        Contact
      </NavLink>
    </div>
  );
};
