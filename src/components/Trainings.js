import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';

export default function Trainings() {

    useEffect(() => fetchData(), []);
    useEffect(() => fetchData2(), []);

    const [training, setTraining] = useState([]);
    const [person, setPerson] = useState([]);

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => setTraining(data.content))
        .catch(err => console.error(err))
    }

    const fetchData2 = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => setPerson(data.content.links[2].href))
        .catch(err => console.error(err))
    }

    const columns = [
        {
            Header: 'Date',
            accessor: 'date',
            Cell: row => moment(row.value).format('MMMM Do YYYY')
        },
        {
            Header: 'Duration',
            accessor: 'duration'
        },
        {
            Header: 'Activity',
            accessor: 'activity'
        },
        {
            Header: 'Customer',
            accessor: 'links[2].href'
        }
    ]


    return (
        <ReactTable filterable={true} data={training} data={person} columns={columns} />
    )
}