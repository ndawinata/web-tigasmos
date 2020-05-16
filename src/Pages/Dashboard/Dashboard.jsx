import React, {Fragment} from 'react'
import Header from '../../Component/Header/Header'
import Container from '../../Component/Container/Container'
import Footer from '../../Component/Footer/Footer'
import GlobalProvider from '../../Component/context/context'

const Dashboard = () => {
    return (
        <Fragment>
            <Header />
            <Container />
            <Footer />
        </Fragment>
    )
}

export default GlobalProvider(Dashboard)
