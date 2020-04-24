import React, { Fragment } from 'react'

const Notifications = () => {
    return (
        <Fragment>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
                <div className="widget widget-activity-three">
                    <div className="widget-heading">
                        <h5 className="">Notifications</h5>
                    </div>

                    <div className="widget-content">

                        <div className="mt-container mx-auto">
                            <div className="timeline-line">

                                <div className="item-timeline timeline-new">
                                    <div className="t-dot">
                                        <div className="t-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg></div>
                                    </div>
                                    <div className="t-content">
                                        <div className="t-uppercontent">
                                            <h5>Logs</h5>
                                            <span className="">27 Feb, 2020</span>
                                        </div>
                                        <p><span>Updated</span> Server Logs</p>
                                        <div className="tags">
                                            <div className="badge badge-primary">Logs</div>
                                            <div className="badge badge-success">CPanel</div>
                                            <div className="badge badge-warning">Update</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item-timeline timeline-new">
                                    <div className="t-dot">
                                        <div className="t-success"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                className="feather feather-mail">
                                                <path
                                                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                                </path>
                                                <polyline points="22,6 12,13 2,6"></polyline>
                                            </svg></div>
                                    </div>
                                    <div className="t-content">
                                        <div className="t-uppercontent">
                                            <h5>Mail</h5>
                                            <span className="">28 Feb, 2020</span>
                                        </div>
                                        <p>Send Mail to <a href="/dada" style={{cursor:"pointer"}}>HR</a> and <a href="/dada"
                                                style={{cursor:"pointer"}}>Admin</a></p>
                                        <div className="tags">
                                            <div className="badge badge-primary">Admin</div>
                                            <div className="badge badge-success">HR</div>
                                            <div className="badge badge-warning">Mail</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item-timeline timeline-new">
                                    <div className="t-dot">
                                        <div className="t-danger"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                className="feather feather-check">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg></div>
                                    </div>
                                    <div className="t-content">
                                        <div className="t-uppercontent">
                                            <h5>Task Completed</h5>
                                            <span className="">01 Mar, 2020</span>
                                        </div>
                                        <p>Backup <span>Files EOD</span></p>
                                        <div className="tags">
                                            <div className="badge badge-primary">Backup</div>
                                            <div className="badge badge-success">EOD</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item-timeline timeline-new">
                                    <div className="t-dot">
                                        <div className="t-warning"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                className="feather feather-file">
                                                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z">
                                                </path>
                                                <polyline points="13 2 13 9 20 9"></polyline>
                                            </svg></div>
                                    </div>
                                    <div className="t-content">
                                        <div className="t-uppercontent">
                                            <h5>Collect Docs</h5>
                                            <span className="">10 Mar, 2020</span>
                                        </div>
                                        <p>Collected documents from <a href="/dada" style={{cursor:"pointer"}}>Sara</a></p>
                                        <div className="tags">
                                            <div className="badge badge-success">Collect</div>
                                            <div className="badge badge-warning">Docs</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="item-timeline timeline-new">
                                    <div className="t-dot">
                                        <div className="t-dark"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                className="feather feather-server">
                                                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                                                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                                                <line x1="6" y1="6" x2="6" y2="6"></line>
                                                <line x1="6" y1="18" x2="6" y2="18"></line>
                                            </svg></div>
                                    </div>
                                    <div className="t-content">
                                        <div className="t-uppercontent">
                                            <h5>Reboot</h5>
                                            <span className="">06 Apr, 2020</span>
                                        </div>
                                        <p>Server rebooted successfully</p>
                                        <div className="tags">
                                            <div className="badge badge-warning">Reboot</div>
                                            <div className="badge badge-primary">Server</div>
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

export default Notifications
