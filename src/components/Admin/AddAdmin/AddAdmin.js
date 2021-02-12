import { Box, Card, Container, Grid, Paper, TextField } from '@material-ui/core';
import React from 'react';
import DrawerComp from '../dashboard/DrawerComp';
import Orders from '../dashboard/Orders';

const AddAdmin = () => {
    return (
      <div className="d-flex">
            <DrawerComp/>
            <Card className="w-50 m-3 p-3">
                <h1 className="text-center mb-3">Make a New Admin</h1> 
                <TextField className="w-100 mt-3" id="outlined-basic" label="Name" variant="outlined" />
                <TextField className="w-100 mt-3" id="outlined-basic" label="Email address" variant="outlined" />
                <TextField className="w-100 mt-3" id="outlined-basic" label="Contact Number" variant="outlined" />
                <div className="text-right">
                    <button className="btn btn-primary mt-3">Submit</button>
                </div>
            </Card>
        </div>
    );
};

export default AddAdmin;