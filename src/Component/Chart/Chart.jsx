import React, { Fragment, useState, useEffect} from 'react'
import TimeSeries from './TimeSeries/TimeSeries'
import Axios from 'axios'
import datajson from '../../data.json'

const Chart = () => {

    let [datas, setDatas] = useState(
        ''
    )

    function fungsi(num) {
        return [num.date, num.pasut_sensor_tekanan]
    }
    
    useEffect(() => {
        Axios.get('http://localhost:5000/api/site-1')
            .then((data)=>{
                var a = data.data.datas.map(fungsi)
                setDatas(a)
            })
    },[]);

    

    return (
        <Fragment>
            <TimeSeries data={datas} nama={'Site 1'}/>
        </Fragment>
    )
}

export default Chart
