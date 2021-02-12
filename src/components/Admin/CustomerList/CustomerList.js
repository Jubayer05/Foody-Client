import * as React from 'react';
import DrawerComp from '../dashboard/DrawerComp';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../dashboard/Title';
import "./CustomerList.css";
import { Card } from '@material-ui/core';

const rows = [
  {     
      id: 1,
      name: "Jubayer Ahmed",
      email: "jubayer0504@gmail.com",
      food: "Domino Pizza",
      date: "23 jan, 2021",
      cellPhone: "01753139834"
  },
  {     
    id: 1,
    name: "Jubayer Ahmed",
    email: "jubayer0504@gmail.com",
    food: "Domino Pizza",
    date: "23 jan, 2021",
    cellPhone: "01753139834"
},
{     
    id: 1,
    name: "Jubayer Ahmed",
    email: "jubayer0504@gmail.com",
    food: "Domino Pizza",
    date: "23 jan, 2021",
    cellPhone: "01753139834"
},
{     
    id: 1,
    name: "Jubayer Ahmed",
    email: "jubayer0504@gmail.com",
    food: "Domino Pizza",
    date: "23 jan, 2021",
    cellPhone: "01753139834"
},
{     
    id: 1,
    name: "Jubayer Ahmed",
    email: "jubayer0504@gmail.com",
    food: "Domino Pizza",
    date: "23 jan, 2021",
    cellPhone: "01753139834"
},
{     
    id: 1,
    name: "Jubayer Ahmed",
    email: "jubayer0504@gmail.com",
    food: "Domino Pizza",
    date: "23 jan, 2021",
    cellPhone: "01753139834"
},
{     
    id: 1,
    name: "Jubayer Ahmed",
    email: "jubayer0504@gmail.com",
    food: "Domino Pizza",
    date: "23 jan, 2021",
    cellPhone: "01753139834"
},
{     
    id: 1,
    name: "Jubayer Ahmed",
    email: "jubayer0504@gmail.com",
    food: "Domino Pizza",
    date: "23 jan, 2021",
    cellPhone: "01753139834"
}
];

function preventDefault(event) {
  event.preventDefault();
}


const CustomerList = () => {
    return (
        <div className="d-flex">
            <DrawerComp/>
            <Card className="mx-3 mb-3 p-3 w-100">
            <Title>Foody Customers List</Title>
            <Table size="small" width="100">
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Cell Phone</TableCell>
                    <TableCell>Ordered</TableCell>
                    <TableCell align="right">Date</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.cellPhone}</TableCell>
                    <TableCell>{row.food}</TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                See more orders
            </Link>
            </Card>
        </div>
    );
};

export default CustomerList;