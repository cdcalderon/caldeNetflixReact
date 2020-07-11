import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7d-speqVtYJY-1qllNMuqLnKsNf5JNH7y6w&usqp=CAU"
        alt="Netflix Logo"
      />

      <img
        className="nav_avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzfWu5P3XRq40XTOquHgtUR_TZ63XAu2hvQQ&usqp=CAU"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
