import React from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/header.css"
function Header({ data }) {

    return (
        <div id="navbar">
            <h2>Ramazon</h2>
            <div id="searchInput">
                <input></input>
                <button><FaSearch /></button>
            </div>
            <h2>{!data ? "0" : data.length} Cart</h2>
        </div>
    );
}

export default Header;