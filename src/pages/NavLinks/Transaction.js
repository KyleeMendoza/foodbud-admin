import React from "react";
import "../../css/switchtabs.css";
import { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

const VISIBLE_FIELDS = [
  "event_id",
  "payment_description",
  "payment_paid",
  "payment_receipt",
  "createdAt",
];

const COLUMN_LABELS = {
  event_id: "Event ID",
  payment_description: "Payment Description",
  payment_paid: "Payment Paid",
  payment_receipt: "Payment Receipt",
  createdAt: "Date & Time",
};

// {
//   field: "actions",
//   headerName: "Actions",
//   headerClassName: "font-heading text-title13 bg-secondary200",
//   sortable: false,
//   renderCell: (params) => (
//     <IconButton
//       onClick={() => handleSeeMoreClick(params.row.event_id)}
//       style={{ color: "gray", width: "auto", alignItems: "center" }}
//     >
//       <VisibilityIcon />
//     </IconButton>
//   ),
// },

function Transaction() {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  const [data, setData] = useState([]);
  const [rowData, setRowData] = useState([]);

  // Get all the payment
  const API_ENDPOINT = "http://localhost:9000/api/all/payments";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        const result = await response.json();
        // setData(result.clients)

        console.log(result);

        setData(result.payments);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    ...VISIBLE_FIELDS.map((field) => ({
      field,
      headerClassName:
        "bg-secondary200 font-heading font-semibold text-title13",
      cellClassName: "text-title24",
      headerName: COLUMN_LABELS[field],
      flex: 1,
    })),
  ];

  return (
    <div className="flex flex-col gap-8 p-8">
      {/** Transaction toggle 1 */}
      <div className={toggle === 1 ? "show-content" : "content"}>
        {/** Header of the appointment tab */}
        <div className="flex justify-between items-center gap-5 w-full h-fit">
          {/*Navigation Bar*/}
          <div className="flex w-full gap-10 p-0.5 rounded-2xl border border-gray border-opacity-30 font-tbc text-title24">
            <div className={toggle === 1 ? "toggleon" : "toggleoff"}>
              <p onClick={() => updateToggle(1)}>Transaction</p>
            </div>
            <div className={toggle === 2 ? "toggleon" : "toggleoff"}>
              <p onClick={() => updateToggle(2)}>Invoice</p>
            </div>
          </div>

          {/*Filter Icon*/}
          {/*<div className=" bg-zinc-400">
          <h1 className="p-2">Filter</h1>
         </ div>*/}

          {/*Set Availibility Date*/}
          <div className="flex justify-end items-center gap-5 w-1/6 h-full">
            <button
              className="flex justify-center items-center w-full h-fit px-4 py-3 rounded-xl font-heading font-semibold text-white bg-secondary300 border hover:bg-gray hover:bg-opacity-10 hover:text-secondary300 hover:border hover:border-secondary300"
              onClick={() => updateToggle(3)}
            >
              Add Invoice Item +
            </button>
            {/*<button className="flex justify-center items-center w-fit h-fit px-5 py-3 rounded-xl font-heading font-semibold text-white bg-primary200">Export</button>*/}
          </div>
        </div>

        {/* Client Table */}
        <DataGrid
          className="text-lg"
          slots={{
            toolbar: GridToolbar,
          }}
          rows={data} // Pass the API data as rows
          columns={columns}
          getRowId={(row) => row.id}
          component={{ Toolbar: GridToolbar }}
        />
      </div>

      {/** Body - Invoice Table Toggle 2 */}
      <div className={toggle === 2 ? "show-content" : "content"}>
        {/** Header of the appointment tab */}
        <div className="flex justify-between items-center gap-5 w-full h-fit">
          {/*Navigation Bar*/}
          <div className="flex w-full gap-10 p-0.5 rounded-2xl border border-gray border-opacity-30 font-tbc text-title24">
            <div className={toggle === 1 ? "toggleon" : "toggleoff"}>
              <p onClick={() => updateToggle(1)}>Transaction</p>
            </div>
            <div className={toggle === 2 ? "toggleon" : "toggleoff"}>
              <p onClick={() => updateToggle(2)}>Invoice</p>
            </div>
          </div>
        </div>

        <div className={toggle === 2 ? "show-content" : "content"}>
          <table className="w-full h-fit rounded font-tbc text-black">
            {/** Table Header */}
            <tr className="flex justify-between w-full rounded-t  bg-secondary200">
              <th className="  w-full p-3 rounded-tl-xl">Invoice ID</th>
              <th className="  w-full p-3">Client Name</th>
              <th className="  w-full p-3">Amount Paid</th>
              <th className="  w-full p-3">Payment Date</th>
              <th className="  w-full p-3">Action</th>
            </tr>

            {/** Table Row */}
            <tr className="flex justify-between w-full h-fit border-b font-tbc font-medium text-title24 text-center">
              <td className="w-full p-3 text-black ">20001</td>
              <td className="  w-full p-3 text-black ">Juan Dela Cruz</td>
              <td className="  w-full p-3 text-black ">98,000</td>
              <td className="  w-full p-3 text-black ">November 13, 2023</td>
              <td
                onClick={() => updateToggle(6)}
                className="  w-full p-3 text-secondary300 underline font-bold cursor-pointer"
              >
                View
              </td>
            </tr>

            {/** Table Row */}
            <tr className="flex justify-between w-full h-fit border-b font-tbc font-medium text-title24 text-center">
              <td className="  w-full p-3 text-black ">20002</td>
              <td className="  w-full p-3 text-black ">Gabby Garcia</td>
              <td className="  w-full p-3 text-black ">102,000</td>
              <td className="  w-full p-3 text-black ">November 16, 2023</td>
              <td
                onClick={() => updateToggle(6)}
                className="  w-full p-3 text-secondary300 underline font-bold cursor-pointer"
              >
                View
              </td>
            </tr>

            {/** Table Row */}
            <tr className="flex justify-between w-full h-fit border-b font-tbc font-medium text-title24 text-center">
              <td className="w-full p-3 text-black ">20003</td>
              <td className="  w-full p-3 text-black ">Kylie Versoza</td>
              <td className="  w-full p-3 text-black ">80,000</td>
              <td className="  w-full p-3 text-black ">November 20, 2023</td>
              <td
                onClick={() => updateToggle(6)}
                className="  w-full p-3 text-secondary300 underline font-bold cursor-pointer"
              >
                View
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
