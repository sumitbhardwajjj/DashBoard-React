import React from 'react'
import '../styles/Table.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tab = () => {

    const rows = [
        {
          id: 1143155,
          product: "Acer Nitro 5",
          img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "John Smith",
          date: "1 March",
          amount: 785,
          method: "Cash on Delivery",
          status: "Approved",
        },
        {
          id: 2235235,
          product: "Playstation 5",
          img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Michael Doe",
          date: "1 March",
          amount: 900,
          method: "Online Payment",
          status: "Pending",
        },
        {
          id: 2342353,
          product: "Redragon S101",
          img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "John Smith",
          date: "1 March",
          amount: 35,
          method: "Cash on Delivery",
          status: "Pending",
        },
        {
          id: 2357741,
          product: "Razer Blade 15",
          img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Jane Smith",
          date: "1 March",
          amount: 920,
          method: "Online",
          status: "Approved",
        },
        {
          id: 2342355,
          product: "ASUS ROG Strix",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Harold Carol",
          date: "1 March",
          amount: 2000,
          method: "Online",
          status: "Pending",
        },
      ];

  return (
    <TableContainer id='table' component={Paper} >
    <Table sx={{ minWidth: 700 }} aria-label="simple table">
      <TableHead>
        <TableRow>
        <TableCell id="tableCell">Tracking ID</TableCell>
            <TableCell id="tableCell">Product</TableCell>
            <TableCell id="tableCell">Customer</TableCell>
            <TableCell id="tableCell">Date</TableCell>
            <TableCell id="tableCell">Amount</TableCell>
            <TableCell id="tableCell">Payment Method</TableCell>
            <TableCell id="tableCell">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
          >
            <TableCell id="tableCell" >{row.id}</TableCell>
            <TableCell id="Cell">
                <img className='image' src={row.img} alt="" />
                {row.product}
            </TableCell>
            <TableCell id="tableCell">{row.customer}</TableCell>
            <TableCell id="tableCell">{row.date}</TableCell>
            <TableCell id="tableCell">{row.amount}</TableCell>
            <TableCell id="tableCell">{row.method}</TableCell>
            <TableCell id="tableCell"><span className={`${row.status}`}>{row.status}</span></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Tab
