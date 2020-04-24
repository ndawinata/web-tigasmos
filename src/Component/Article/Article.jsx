import React, { Fragment } from 'react'

function Article() {
    return (
        <Fragment>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
                <div className="widget widget-card-one">
                    <div className="widget-content">

                        <div className="media">
                            <div className="w-img">
                                <img src="assets/img/90x90.jpg" alt="avatar" />
                            </div>
                            <div className="media-body">
                                <h6>Jimmy Turner</h6>
                                <p className="meta-date-time">Monday, Nov 18</p>
                            </div>
                        </div>

                        <p>"Duis aute irure dolor" in reprehenderit in voluptate velit esse cillum "dolore eu
                            fugiat" nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

                        <div className="w-action">
                            <div className="card-like">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="feather feather-thumbs-up">
                                    <path
                                        d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3">
                                    </path>
                                </svg>
                                <span>551 Likes</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Article
