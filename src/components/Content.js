import React from "react";
import vector from "../assets/vector.png";
import arrow from "../assets/arrow.png";

const Content = () => {
    return (
        <div className="content_container">
            {/* Header */}
            <div className="header">
                {/* Heading */}
                <div className="heading">
                    {/* Vector */}
                    <div className="vector">
                        <img src={vector} alt="Top Vector" />
                    </div>

                    {/* Description 1 */}
                    <div className="des_1">
                        <p>It’s a delight to have you onboard</p>
                    </div>
                </div>

                {/* Description 2 */}
                <div className="des_2">
                    <p>
                        Help us know you better. (This is how we optimize Wobot
                        as per your business needs)
                    </p>
                </div>
            </div>

            {/* Form Fields */}
            <div className="form">
                {/* Company Name */}
                <div className="com_name">
                    <label>Company Name</label>
                    <input type="text" placeholder="e.g. Example Inc" />
                </div>

                {/* Industry */}
                <div className="industry">
                    <label>Industry</label>
                    <div className="select">
                        <input type="text" placeholder="Select" />
                        <img src={arrow} alt="Arrow" />
                    </div>
                </div>

                {/* Company Size */}
                <div className="com_size">
                    <label>Compmay Size</label>
                    <div className="options">
                        <div className="tag">1-20</div>
                        <div className="tag">21-50</div>
                        <div className="tag">51-200</div>
                        <div className="tag">201-500</div>
                        <div className="tag">500+</div>
                    </div>
                </div>
            </div>

            {/* Button */}
            <div className="button">
                <button>Get Started</button>
            </div>
        </div>
    );
};

export default Content;
