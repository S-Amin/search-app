import React from "react";
import css from "./sidebar.module.css";
const Sidebar: React.FC = () => {
  return (
    <div>
      <ul className={css.menu}>
        <li> Home</li>
        <li> Creating Packages</li>
        <li> API</li>
        <li> Configuration</li>
        <li> Pluggable Resolvers</li>
        <li> Tools</li>
        <li> About</li>
      </ul>
    </div>
  );
};

export default Sidebar;
