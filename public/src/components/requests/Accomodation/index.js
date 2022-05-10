import React from "react";

const Accomodation = () => {
    return (
        <div className="requests-main-window">
            <div className="header">
                <h3>Requests</h3>
            </div>
            <div className="seat-requests">
                <div className="title">
                    <a href="javascript:history.back()">
                        <i className="fa-solid fa-arrow-left back"></i>
                    </a>
                    Seat Booking Requests
                </div>
                <div className="date-pickers">
                    <p>Select Date:</p>
                    <div className="date-container">
                        <div className="from">
                            <p>From :</p>
                            <input type="date" data-role="calendarpicker"  data-calendar-wide-point="md" value="2022/04/10" />
                        </div>
                        <div className="from">
                            <p>To :</p>
                            <input type="date" data-role="calendarpicker"  data-calendar-wide-point="md" value="2022/05/10" />
                        </div>
                    </div>
                </div>
                <div className="table seats">
                    <div className="heading row">
                        <p>Name</p>
                        <p>Email Address</p>
                        <p>Contact Number</p>
                        <p>Pickup Location</p>
                        <p>Drop Point</p>
                        <p>Returning Journey</p>
                    </div>
                    <div className="row">
                        <p>Kautilya Sundriyal</p>
                        <p>kautilya.sundriyal@tothenew.com</p>
                        <p>9899989998</p>
                        <p>B12, Noida, Sector 70, 230131</p>
                        <p>Noida Office</p>
                        <p>Yes</p>
                    </div>
                    <div className="row">
                        <p>Kautilya Sundriyal</p>
                        <p>kautilya.sundriyal@tothenew.com</p>
                        <p>9899989998</p>
                        <p>B12, Noida, Sector 70, 230131</p>
                        <p>Noida Office</p>
                        <p>Yes</p>
                    </div>
                    <div className="row">
                        <p>Kautilya Sundriyal</p>
                        <p>kautilya.sundriyal@tothenew.com</p>
                        <p>9899989998</p>
                        <p>B12, Noida, Sector 70, 230131</p>
                        <p>Noida Office</p>
                        <p>Yes</p>
                    </div>
                    <div className="row">
                        <p>Kautilya Sundriyal</p>
                        <p>kautilya.sundriyal@tothenew.com</p>
                        <p>9899989998</p>
                        <p>B12, Noida, Sector 70, 230131</p>
                        <p>Noida Office</p>
                        <p>Yes</p>
                    </div>
                    <div className="row">
                        <p>Kautilya Sundriyal</p>
                        <p>kautilya.sundriyal@tothenew.com</p>
                        <p>9899989998</p>
                        <p>B12, Noida, Sector 70, 230131</p>
                        <p>Noida Office</p>
                        <p>Yes</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accomodation;