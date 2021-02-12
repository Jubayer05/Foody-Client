import { Card, TextField } from '@material-ui/core';
import React from 'react';
import DrawerComp from '../dashboard/DrawerComp';
import "./AddFoodItem.css";
import uploadLogo from "../../../image/logos/upload.png";

const AddFoodItem = () => {
    return (
        <div className="d-flex">
            <DrawerComp/>
            <Card className="w-50 m-3 p-3">
                <h1 className="text-center mb-3">Add a New Food</h1> 
                <TextField className="w-100 mt-3" id="outlined-basic" label="Food Title" variant="outlined" />
                <TextField className="w-100 mt-3" id="outlined-basic" label="Food Details" variant="outlined" />
                <TextField className="w-100 mt-3" id="outlined-basic" label="Food Prize" variant="outlined" />
                <label className="upload-btn d-flex align-items-center mt-3 p-2">
                    <input type="file" className="form-control w-100"/>
                    <img className="upload-img mx-3" src={uploadLogo} alt=""/>
                    <span className="upload-text">Enter food image</span>
                </label>
                <div className="text-right">
                    <button className="btn btn-primary mt-3">Submit</button>
                </div>
            </Card>
        </div>
    );
};

export default AddFoodItem;