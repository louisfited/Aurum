"use client"
import React, { useState } from 'react'
import { QuestionMark } from '@mui/icons-material'
import { Box, Container, MenuItem, Select, Typography } from '@mui/material'
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TableContainer,
    Paper,
  } from "@mui/material";
import BuySellWizard from '@/components/BuySellWizard';

const Page = () => {
    const [value, setValue] = useState("last 30 days");
    const rows = [
        { id: 1, name: "Ade", age: 23, country: "Nigeria" },
        { id: 2, name: "John", age: 30, country: "USA" },
        { id: 3, name: "Fatima", age: 27, country: "Ghana" },
      ];
  return (
    <Container className='text-sm'>
<section className=' pt-2 bg-white dark:bg-darkOne rounded-lg'>
    <div className='flex justify-between text-xl font-semibold py-3 lg:px-4 px-2'>
        <h1 className=''>Orders</h1>
        <span className='text-2xl'><QuestionMark/></span>
    </div>
    <div className='dark:bg-gray-500 bg-gray-300 py-2 px-2 rounded-t-lg lg:px-4 px-2 text-sm'>Trading History</div>
</section>




{/* container */}
<section className='mt-10 py-4     flex lg:flex-row flex-col lg:gap-x-4 lg:gap-y-0 gap-y-6'>

<div className='bg-white dark:bg-darkOne rounded-lg lg:w-[70%] '>

<Box className={"px-2"}>
    <h1
    className='font-bold py-4  text-lg'
    >Closed Orders</h1>
</Box>


<div className='flex items-center gap-x-4 border-y-2 px-2 py-2 border-grayOne dark:border-darkGrayOne'>
<Typography component={"p"}>Show orders from</Typography>
    <Select
      className="min-w-[120px] h-[30px] !text-black dark:!text-white"
      MenuProps={{
        classes: {
          paper: "dark:bg-darkOne dark:text-white  rounded-lg shadow-lg",
        },
      }}
      value={value}
      onChange={(e) => {
          setValue(e.target.value);
          console.log("selected:", e.target.value);
      }}
      >
      <MenuItem value={"last 30 days"}>Last thirty days</MenuItem>
      <MenuItem value={"this week"}>This week</MenuItem>
      <MenuItem value={"today"}>Today</MenuItem>
    </Select>
</div>


{/* table */}

<TableContainer
      component={Paper}
      className="rounded-xl shadow dark:bg-darkOne"
    >
      <Table>
        <TableHead>
          <TableRow className="bg-gray-100 dark:bg-gray-800">
            <TableCell className="font-bold dark:text-white">Order date</TableCell>
            <TableCell className="font-bold dark:text-white">Status</TableCell>
            <TableCell className="font-bold dark:text-white">Action</TableCell>
            <TableCell className="font-bold dark:text-white">Bullion</TableCell>
            <TableCell className="font-bold dark:text-white">Currency</TableCell>
            <TableCell className="font-bold dark:text-white">Price/kg</TableCell>
            <TableCell className="font-bold dark:text-white">Quantity</TableCell>
            <TableCell className="font-bold dark:text-white">Value</TableCell>
            <TableCell className="font-bold dark:text-white">Matched</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {/* {rows.map((row) => (
            <TableRow
              key={row.id}
              className="hover:bg-gray-100 dark:hover:bg-gray-700"
              >
              <TableCell className="dark:text-white">{row.name}</TableCell>
              <TableCell className="dark:text-white">{row.age}</TableCell>
              <TableCell className="dark:text-white">{row.country}</TableCell>
              </TableRow>
              ))} */}
        </TableBody>
      </Table>
    </TableContainer>

<Typography className='px-2'>No orders to show</Typography>
              </div>

{/* buy sell wizard */}
<>
<div className='lg:w-[30%] h-[200px]  lg:sticky top-6'>
 <BuySellWizard/>
</div>
</>
</section>




    </Container>
  )
}

export default Page