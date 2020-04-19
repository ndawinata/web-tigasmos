import React, {Fragment} from 'react'


const Header = () => {
    return (
        <Fragment>
            <div className="header">
                <div className="header-body">
                    <h6>Pending Tasks</h6>
                    <p className="meta-date">Nov 2019</p>
                </div>
                <div className="task-action">
                    <div className="dropdown  custom-dropdown">
                        <a className="dropdown-toggle" href="localhost" role="button" id="pendingTask" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" className="feather feather-more-horizontal">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                            </svg>
                        </a>

                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="pendingTask">
                            <a className="dropdown-item" href="localhost">Add</a>
                            <a className="dropdown-item" href="localhost">View</a>
                            <a className="dropdown-item" href="localhost">Update</a>
                            <a className="dropdown-item" href="localhost">Clear All</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Header
