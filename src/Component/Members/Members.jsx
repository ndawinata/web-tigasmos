import React, { Fragment } from 'react'

const Members = () => {
    return (
        <Fragment>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                        <div className="widget widget-card-two">
                            <div className="widget-content">

                                <div className="media">
                                    <div className="w-img">
                                        <img src="assets/img/90x90.jpg" alt="avatar" />
                                    </div>
                                    <div className="media-body">
                                        <h6>Dev Summit - New York</h6>
                                        <p className="meta-date-time">Bronx, NY</p>
                                    </div>
                                </div>

                                <div className="card-bottom-section">
                                    <h5>4 Members Going</h5>
                                    <div className="img-group">
                                        <img src="assets/img/90x90.jpg" alt="avatar" />
                                        <img src="assets/img/90x90.jpg" alt="avatar" />
                                        <img src="assets/img/90x90.jpg" alt="avatar" />
                                        <img src="assets/img/90x90.jpg" alt="avatar" />
                                    </div>
                                    <a href="/dada" style={{cursor:"pointer"}} className="btn">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
        </Fragment>
    )
}

export default Members
