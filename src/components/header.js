import React from "react";
import Search from "./search";
import Menu from "./menu";

const Header=({forSearch})=>{

    return(
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                     <a className="navbar-brand" href="#">
                    Cineteca
                    </a> 
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon" />
                    </button>
                    <Menu/>
                    <Search funcSearch= {forSearch}/>
                </div>
            </nav>
        </header>

    )
}

export default Header;