import React from 'react';
import { Box, Container, Grid, Paper } from '@material-ui/core';
import Orders from '../dashboard/Orders';
import "./OrderList.css";
import DrawerComp from '../dashboard/DrawerComp';

const OrderList = () => {

    return (
        <div className="d-flex">
        {<DrawerComp colors="red" />}
        <div />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
};

export default OrderList;