import "./Header.css";
import { List } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import SideBar from "./SideBar";
const Header = () => {
    const [isOpen, setIsopen] = useState(false);
    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    };

    return (
        <header>
            <div className="title-container">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                    <h1>Milvis</h1>
                </Link>
            </div>
            <div className="navbar-container">
                <Link
                    to="/sidebar"
                    style={{ textDecoration: "none", color: "white" }}
                >
                    <List width={"2rem"} height={"2rem"} />
                </Link>
            </div>
            <div className="navbar-container">
                <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
                    <List
                        onClick={ToggleSidebar}
                        width={"2rem"}
                        height={"2rem"}
                    />
                    {console.log(isOpen)}
                    <div className="sidebar-position">
                        <span>기차-버스 조회</span>
                    </div>
                    <div className="sidebar-position">
                        <span>버스 정류장 찾기</span>
                    </div>
                    <div className="sidebar-position">
                        <span>버스 시간표</span>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;
