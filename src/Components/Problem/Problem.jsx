import React from 'react'
import "./Problem.css";
import {Icon} from "@iconify/react";

const Problem = () => {
    return (
        <>
            <section id="about" className="about">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-1 px-lg-5">
                            <h2>The Problem</h2>
                            <p>
                                An Electronic Oil Record is an electronic version of oil ledgers that includes transactions, payments etc. But it consists of some major security and privacy flaws.
                            </p>
                            <div className="icon-box">
                                <div className="icon">
                                    <Icon icon="dashicons:database-remove" className="pro-sol"/>
                                </div>
                                <h4 className="title">
                                    Cost and Time
                                </h4>
                                <p className="description">Complex transactions involve wide range of orders and documents, such as, purchase invoice, shipping documents, bank release funds etc. which increase the complexity of project.</p>
                            </div>
                            <div className="icon-box">
                                <div className="icon">
                                <Icon icon="ri:git-repository-private-fill" className="pro-sol"/>
                                </div>
                                <h4 className="title">
                                    Transparency
                                </h4>
                                <p className="description">Companies invest time and effort to ensure all documents are in place and accessible to all stakeholders. It includes compliance documents, audits and associated paperwork.</p>
                            </div>
                            <div className="icon-box">
                                <div className="icon">
                                <Icon icon="bpmn:data-output"  className="pro-sol"/>
                                </div>
                                <h4 className="title">
                                    Supply Chains
                                </h4>
                                <p className="description">Oil and gas supply chain are complex, involving shippers, suppliers, and customers. It demands large administrative overheads and create potential flaws for error.</p>
                            </div>
                            <div className="icon-box">
                                <div className="icon">
                                <Icon icon="emojione-monotone:money-mouth-face" className="pro-sol"/>
                                </div>
                                <h4 className="title">
                                    Payments
                                </h4>
                                <p className="description">Typically, oil and gas contracts involve complex payment structures. They also involve cross-bordre transcations, which require intermediaries and additional costs.</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Problem;
