import React, { useState } from "react";
import { Link } from "react-router-dom";
import { List, XLg } from "react-bootstrap-icons";

import styles from "./common.module.css";

const MILVIS = 'Milvis';

const Header = () => {
  const [isOpen, setIsopen] = useState(false);

  const openSideBar = () => {
    setIsopen(current => {
      current = true;
      return current;
    })
  }

  const closeSideBar = () => {
    setIsopen(current => {
      current = false;
      return current;
    })
  }
  
  // * components
  const NavIcon = () => {
    return (
      <div className={styles.navIcon}>
        <List
        onClick={_ => openSideBar()}
        size="50px"
        cursor="pointer"
        /> 
      </div>
    )
  }

  const NavBarList = ({content, page}) => {
    return (
      <div className={styles.list_item}>
        <Link
        onClick={_ => closeSideBar()}
        to={page}
        style={{
        textDecoration: "none",
        color: "white"
        }}
        >
        <span>{content}</span>
        </Link>
      </div>
    )
  }
  

  const NavBar = () => {
    return (
      <nav className={styles.full}>
        <div className={`${styles.list_item}`}>
          <XLg
            onClick={_ => closeSideBar()}
            size="40px"
            cursor="pointer"
          />
        </div>
        <NavBarList
          content={"기차-버스 조회"}
          page={"/train"}
        />
        <NavBarList
          content={"버스 정류장 찾기"}
          page={"/map"}
        />
        <NavBarList
          content={"버스 시간표 조회"}
          page={"/bus"}
        />
      </nav>
    )
  }

  // * render
  return (
    <header>
      <div className={styles.middle}>
        <Link
          to="/"
          style={{
          textDecoration: "none",
          color: "white"
        }}>
          <h1>{MILVIS}</h1>
        </Link>
      </div>
      <NavIcon />
      {isOpen ? <NavBar /> : ""}
    </header>
  );
};
export default Header;
