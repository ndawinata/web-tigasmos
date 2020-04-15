import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const TopNav = () => {
    return (
        <Fragment>
            <Link to='/'>Dasboard</Link>
            <Link to='/weather'>Weather</Link>
            Topnav
        </Fragment>
    )
}

export default TopNav
