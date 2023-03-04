import React from "react";
import "./darkmode.css";
import { CgDarkMode } from "react-icons/cg";

const DarkMode = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }


  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(darkTheme);
  }

  const switchTheme = (e) => {
    if (theme === lightTheme) {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    } else {
      body.classList.replace(darkTheme , lightTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    }
  };

  return (
    <CgDarkMode
      className={theme === "dark" ? clickedClass : ""}
      id="darkMode"
      onClick={(e) => switchTheme(e)}
    ></CgDarkMode>
  );
};

export default DarkMode;
