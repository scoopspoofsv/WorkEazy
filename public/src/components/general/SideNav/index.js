import React from "react";
import { Link } from "react-router-dom";
import './style.scss';

const SideNav = () => {
    return(
        <div className="side-nav">
            <div class="logo">
                <img src="../../../../assets/images/logo-svg.png" alt="logo" />
            </div>
            <div className="links">
                {/* <Link to="dashboard"><i class="fa-solid fa-table-columns"></i> Dashboard</Link> */}
                <Link to="requests" className="active"><i class="fa-solid fa-check-to-slot"></i> Requests</Link>
            </div>
            <div className="footer">
                <div className="admin">
                    <div className="icon">
                        <img src="../../../../assets/images/admin-icon.jpeg" alt="" />
                    </div>
                    <div className="details">
                        <div className="name">Kautilya Sundriyal</div>
                        <div className="designation">Admin</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SideNav;