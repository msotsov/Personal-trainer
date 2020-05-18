import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Addcustomer from './Addcustomer';
import Editcustomer from './Editcustomer';

export default function Customers() {

    useEffect(() => fetchData(), []);

    const [customer, setCustomer] = useState([]);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomer(data.content))
        .catch(err => console.error(err))
    }

    //delete customer
    const deleteCustomer = (link) => {
        if(window.confirm('Are you sure?')) {
        fetch(link, {method: 'DELETE'})
        .then(res => fetchData())
        .catch(err => console.error(err))
        setOpen(true);
        setMessage('Customer deleted');
        }
    }

    //add new customer
    const saveCustomer = (cust) => {
        fetch('https://customerrest.herokuapp.com/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cust)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
        setOpen(true);
        setMessage('New customer added');
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    }

    //update customer information
    const updateCustomer = (cust, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cust)
        })
        .then(res => fetchData())
        .catch(err => console.error(err))
        setOpen(true);
        setMessage('Customer info updated')
    }
    

    const columns = [
        {
            Header: 'Firstname',
            accessor: 'firstname'
        },
        {
            Header: 'Lastname',
            accessor: 'lastname'
        },
        {
            Header: 'Street address',
            accessor: 'streetaddress'
        },
        {
            Header: 'Postcode',
            accessor: 'postcode'
        },
        {
            Header: 'City',
            accessor: 'city'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Phone',
            accessor: 'phone'
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            Cell: row => <Editcustomer updateCustomer={updateCustomer} cust={row.original} />
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor: 'links[0].href',
            Cell: row => <Button variant='outlined' endIcon={<DeleteIcon />} color='secondary' size='small' onClick={() => deleteCustomer(row.value)} >Delete</Button>
        }
    ]

    return (
        <div>
            <Addcustomer saveCustomer={saveCustomer} />
            <ReactTable filterable={true} data={customer} columns={columns} />
            <Snackbar
                anchorOrigin={{
                    vertical:'bottom',
                    horizontal: 'left'
                }}
                open={open}
                autoHideDuration={6000}
                message={message}
                onClose={handleClose}
                action={
                    <IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>
                        <CloseIcon fontSize='small'/>
                    </IconButton>
                }
                />
        </div> 
    )
}