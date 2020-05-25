import React from "react";
import moment from "moment";
const n = 1
export const columns = [
    {
        name:'Date',
        selector:'date',
        sortable: true,
        cell: d => moment(d.date).format('D MMMM YYYY')
    },
    {
        name:'Time',
        selector:'date',
        sortable: true,
        cell: d => moment(d.date).format('HH:mm:ss')
    },
    {
        name:'Sensor 1',
        selector:'pasut_sensor_tekanan',
        sortable: true
    },
    {
        name:'Sensor 2',
        selector:'pasut_sensor_ultrasonik',
        sortable: true
    }
]

export const data = [{
        "_id": "5ea02f922e5a8d30d01c6470",
        "date": "2020-04-22T13:50:42",
        "pasut_sensor_tekanan": 10,
        "pasut_sensor_ultrasonik": 100,
        "__v": 0
    },
    {
        "_id": "5ea043d179fc6e4c28fa70fa",
        "date": "2020-04-22T13:17:05.207Z",
        "pasut_sensor_tekanan": 100,
        "pasut_sensor_ultrasonik": 23,
        "__v": 0
    },
    {
        "_id": "5ea043d579fc6e4c28fa70fb",
        "date": "2020-04-22T13:17:09.473Z",
        "pasut_sensor_tekanan": 200,
        "pasut_sensor_ultrasonik": 23,
        "__v": 0
    },
    {
        "_id": "5ea0446579fc6e4c28fa70ff",
        "date": "2020-04-22T13:19:32.979Z",
        "pasut_sensor_tekanan": 23,
        "pasut_sensor_ultrasonik": 23,
        "__v": 0
    },
    {
        "_id": "5ea0446979fc6e4c28fa7100",
        "date": "2020-04-22T13:19:37.505Z",
        "pasut_sensor_tekanan": 23,
        "pasut_sensor_ultrasonik": 23,
        "__v": 0
    },
    {
        "_id": "5ebed6dd88b5b844f05d57a1",
        "date": "2020-05-15T17:52:29.541Z",
        "pasut_sensor_tekanan": 2,
        "pasut_sensor_ultrasonik": 80,
        "__v": 0
    },
    {
        "_id": "5ebed6e488b5b844f05d57a2",
        "date": "2020-05-15T17:52:36.790Z",
        "pasut_sensor_tekanan": 2,
        "pasut_sensor_ultrasonik": 80,
        "__v": 0
    },
    {
        "_id": "5ebed6e688b5b844f05d57a3",
        "date": "2020-05-15T17:52:38.955Z",
        "pasut_sensor_tekanan": 2,
        "pasut_sensor_ultrasonik": 80,
        "__v": 0
    },
    {
        "_id": "5ebed6f588b5b844f05d57a4",
        "date": "2020-05-15T17:52:53.375Z",
        "pasut_sensor_tekanan": 2,
        "pasut_sensor_ultrasonik": 80,
        "__v": 0
    },
    {
        "_id": "5ebed73188b5b844f05d57a5",
        "date": "2020-05-15T17:53:53.387Z",
        "pasut_sensor_tekanan": 5,
        "pasut_sensor_ultrasonik": 5,
        "__v": 0
    },
    {
        "_id": "5ebed76b88b5b844f05d57a6",
        "date": "2020-05-15T17:54:51.712Z",
        "pasut_sensor_tekanan": 9,
        "pasut_sensor_ultrasonik": 9,
        "__v": 0
    },
    {
        "_id": "5ebf1560a0ff5e2138b4a015",
        "date": "2020-05-15T22:19:12.698Z",
        "pasut_sensor_tekanan": 50,
        "pasut_sensor_ultrasonik": 2,
        "__v": 0
    },
    {
        "_id": "5ebf157ba0ff5e2138b4a016",
        "date": "2020-05-15T22:19:39.320Z",
        "pasut_sensor_tekanan": 70,
        "pasut_sensor_ultrasonik": 2,
        "__v": 0
    },
    {
        "_id": "5ebf15a4a0ff5e2138b4a017",
        "date": "2020-05-15T22:20:20.747Z",
        "pasut_sensor_tekanan": 70,
        "pasut_sensor_ultrasonik": 2,
        "__v": 0
    },
    {
        "_id": "5ebf15aaa0ff5e2138b4a018",
        "date": "2020-05-15T22:20:26.214Z",
        "pasut_sensor_tekanan": 70,
        "pasut_sensor_ultrasonik": 2,
        "__v": 0
    },
    {
        "_id": "5ebf15ada0ff5e2138b4a019",
        "date": "2020-05-15T22:20:29.962Z",
        "pasut_sensor_tekanan": 70,
        "pasut_sensor_ultrasonik": 2,
        "__v": 0
    },
    {
        "_id": "5ebf15b7a0ff5e2138b4a01a",
        "date": "2020-05-15T22:20:39.954Z",
        "pasut_sensor_tekanan": 70,
        "pasut_sensor_ultrasonik": 2,
        "__v": 0
    },
    {
        "_id": "5ebf15bfa0ff5e2138b4a01b",
        "date": "2020-05-15T22:20:46.992Z",
        "pasut_sensor_tekanan": 70,
        "pasut_sensor_ultrasonik": 2,
        "__v": 0
    },
    {
        "_id": "5ebf15c6a0ff5e2138b4a01c",
        "date": "2020-05-15T22:20:54.030Z",
        "pasut_sensor_tekanan": 70,
        "pasut_sensor_ultrasonik": 2,
        "__v": 0
    },
    {
        "_id": "5ebf15c7a0ff5e2138b4a01d",
        "date": "2020-05-15T22:20:55.376Z",
        "pasut_sensor_tekanan": 70,
        "pasut_sensor_ultrasonik": 2,
        "__v": 0
    },
    {
        "_id": "5ebf1b6da0ff5e2138b4a02d",
        "date": "2020-05-15T22:45:01.845Z",
        "pasut_sensor_tekanan": 2,
        "pasut_sensor_ultrasonik": 2,
        "__v": 0
    },
    {
        "_id": "5ebf1b88a0ff5e2138b4a02e",
        "date": "2020-05-15T22:45:28.196Z",
        "pasut_sensor_tekanan": 3,
        "pasut_sensor_ultrasonik": 3,
        "__v": 0
    },
    {
        "_id": "5ebfd5f8a0ff5e2138b4a07c",
        "date": "2020-05-16T12:00:56.967Z",
        "pasut_sensor_tekanan": 20,
        "pasut_sensor_ultrasonik": 20,
        "__v": 0
    },
    {
        "_id": "5ebfd608a0ff5e2138b4a07d",
        "date": "2020-05-16T12:01:12.050Z",
        "pasut_sensor_tekanan": 60,
        "pasut_sensor_ultrasonik": 60,
        "__v": 0
    },
    {
        "_id": "5ebfd631a0ff5e2138b4a07e",
        "date": "2020-05-16T12:01:53.128Z",
        "pasut_sensor_tekanan": 60,
        "pasut_sensor_ultrasonik": 70,
        "__v": 0
    }
]