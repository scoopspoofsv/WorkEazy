import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
    return(
        <div className="side-nav">
            <div class="logo">
                <img src="../../../../assets/images/logo.svg" alt="logo" />
            </div>
            <div className="links">
                <Link to="dashboard"><i class="fa-solid fa-table-columns"></i> Dashboard</Link>
                <Link to="requests" className="active"><i class="fa-solid fa-check-to-slot"></i> Requests</Link>
            </div>
        </div>
    );
}
export default SideNav;