import React from 'react';
import "./Counts.css";
import { Icon } from '@iconify/react';
const Counts = () => {
    return (
        <section id="counts" className="counts">
            <div className="container">

                <div className="row">

                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <div className="icons">
                                <Icon icon="dashicons:admin-generic" color="white" width="24" height="24"/>
                            </div>
                            <span>8</span>
                            <p>Company</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                        <div className="count-box">
                            <div className="icons">
                                <Icon icon="fa-regular:hospital" color="white" width="24" height="24"/>
                            </div>
                            <span>1183</span>
                            <p>Petrol Pump</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <div className="icons">
                                <Icon icon="si-glyph:man-doctor" color="white" width="24" height="24"/>
                            </div>
                            <span>658734</span>
                            <p>Customers</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <div className="icons">
                                <Icon icon="fa-solid:award" color="white" width="24" height="24"/>
                            </div>
                            <span>44</span>
                            <p>Distributers</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Counts
