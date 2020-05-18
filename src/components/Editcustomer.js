import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';

export default function Editcustomer(props) {

    const [open, setOpen] = React.useState(false);
    const [cust, setCust] = useState({
        firstname: '', 
        lastname: '', 
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone: ''
    });

    const handleClickOpen = () => {
      setCust({
        firstname: props.cust.firstname,
        lastname: props.cust.lastname,
        streetaddress: props.cust.streetaddress,
        postcode: props.cust.postcode,
        city: props.cust.city,
        email: props.cust.email,
        phone: props.cust.phone
      })
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleInputChange = (event) => {
        setCust({...cust, [event.target.name]: event.target.value})
    }

    const updateCustomer = () => {
      props.updateCustomer(cust, props.cust.links[0].href);
      handleClose();
    }

    return (
        <div>
      <Button variant='outlined' size='small' color="primary" startIcon={<EditIcon />} onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit customer</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="firstname"
            value={cust.firstname}
            onChange = {e => handleInputChange(e)}
            label="First name"
            fullWidth
          />
          <TextField
            margin="dense"
            name="lastname"
            value={cust.lastname}
            onChange = {e => handleInputChange(e)}
            label="Last name"
            fullWidth
          />
          <TextField
            margin="dense"
            name="streetaddress"
            value={cust.streetaddress}
            onChange = {e => handleInputChange(e)}
            label="Street address"
            fullWidth
          />
          <TextField
            margin="dense"
            name="postcode"
            value={cust.postcode}
            onChange = {e => handleInputChange(e)}
            label="Post code"
            fullWidth
          />
          <TextField
            margin="dense"
            name="city"
            value={cust.city}
            onChange = {e => handleInputChange(e)}
            label="City"
            fullWidth
          />
          <TextField
            margin="dense"
            name="email"
            value={cust.email}
            onChange = {e => handleInputChange(e)}
            label="Email"
            fullWidth
          />
          <TextField
            margin="dense"
            name="phone"
            value={cust.phone}
            onChange = {e => handleInputChange(e)}
            label="Phone"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={updateCustomer} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}