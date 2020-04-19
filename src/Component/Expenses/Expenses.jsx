import React, { Fragment } from 'react'

const Expenses = () => {
    return (
        <Fragment>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
                <div className="widget widget-card-four">
                    <div className="widget-content">
                        <div className="w-content">
                            <div className="w-info">
                                <h6 className="value">$ 45,141</h6>
                                <p className="">Expenses</p>
                            </div>
                            <div className="">
                                <div className="w-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" className="feather feather-home">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-gradient-secondary" role="progressbar"
                                style={{width: "57%"}} aria-valuenow="57" aria-valuemin="0" aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Expenses
