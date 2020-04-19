import React, { Fragment } from 'react'

const Visitors = () => {
    return (
        <Fragment>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                <div className="widget-four">
                    <div className="widget-heading">
                        <h5 className="">Visitors by Browser</h5>
                    </div>
                    <div className="widget-content">
                        <div className="vistorsBrowser">
                            <div className="browser-list">
                                <div className="w-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" className="feather feather-chrome">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <circle cx="12" cy="12" r="4"></circle>
                                        <line x1="21.17" y1="8" x2="12" y2="8"></line>
                                        <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
                                        <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
                                    </svg>
                                </div>
                                <div className="w-browser-details">
                                    <div className="w-browser-info">
                                        <h6>Chrome</h6>
                                        <p className="browser-count">65%</p>
                                    </div>
                                    <div className="w-browser-stats">
                                        <div className="progress">
                                            <div className="progress-bar bg-gradient-primary" role="progressbar"
                                                style={{width: "65%"}} aria-valuenow="90" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="browser-list">
                                <div className="w-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" className="feather feather-compass">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76">
                                        </polygon>
                                    </svg>
                                </div>
                                <div className="w-browser-details">

                                    <div className="w-browser-info">
                                        <h6>Safari</h6>
                                        <p className="browser-count">25%</p>
                                    </div>

                                    <div className="w-browser-stats">
                                        <div className="progress">
                                            <div className="progress-bar bg-gradient-danger" role="progressbar"
                                                style={{width: "35%"}} aria-valuenow="65" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className="browser-list">
                                <div className="w-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" className="feather feather-globe">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                        <path
                                            d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="w-browser-details">

                                    <div className="w-browser-info">
                                        <h6>Others</h6>
                                        <p className="browser-count">15%</p>
                                    </div>

                                    <div className="w-browser-stats">
                                        <div className="progress">
                                            <div className="progress-bar bg-gradient-warning" role="progressbar"
                                                style={{width: "15%"}} aria-valuenow="15" aria-valuemin="0"
                                                aria-valuemax="100"></div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Visitors
