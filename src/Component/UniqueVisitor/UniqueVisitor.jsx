import React, { Fragment } from 'react'

const UniqueVisitor = () => {
    return (
        <Fragment>
            <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                <div className="widget widget-chart-three">
                    <div className="widget-heading">
                        <div className="">
                            <h5 className="">Unique Visitors</h5>
                        </div>

                        <div className="dropdown  custom-dropdown">
                            <a className="dropdown-toggle" href="/dada" style={{cursor:"pointer"}} role="button"
                                id="uniqueVisitors" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="feather feather-more-horizontal">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                </svg>
                            </a>

                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="uniqueVisitors">
                                <a className="dropdown-item" href="/dada" style={{cursor:"pointer"}}>View</a>
                                <a className="dropdown-item" href="/dada" style={{cursor:"pointer"}}>Update</a>
                                <a className="dropdown-item" href="/dada" style={{cursor:"pointer"}}>Download</a>
                            </div>
                        </div>
                    </div>

                    <div className="widget-content">
                        <div id="uniqueVisits"></div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default UniqueVisitor
