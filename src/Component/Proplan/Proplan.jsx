import React, { Fragment } from 'react'

const Proplan = () => {
    return (
        <Fragment>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
                <div className="widget widget-account-invoice-two">
                    <div className="widget-content">
                        <div className="account-box">
                            <div className="info">
                                <h5 className="">Pro Plan</h5>
                                <p className="inv-balance">$10,344</p>
                            </div>
                            <div className="acc-action">
                                <div className="">
                                    <a href="/dada" style={{cursor:"pointer"}}><svg xmlns="http://www.w3.org/2000/svg"
                                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                            className="feather feather-plus">
                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                        </svg></a>
                                    <a href="/data" style={{cursor:"pointer"}}><svg xmlns="http://www.w3.org/2000/svg"
                                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                            className="feather feather-credit-card">
                                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                            <line x1="1" y1="10" x2="23" y2="10"></line>
                                        </svg></a>
                                </div>
                                <a href="/dada" style={{cursor:"pointer"}}>Upgrade</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Proplan
