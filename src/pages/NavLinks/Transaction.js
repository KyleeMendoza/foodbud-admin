import React from "react";
import "../../css/switchtabs.css";
import { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import AddInvoice from "../../components/addInvoiceitem";
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

const VISIBLE_FIELDS2 = [
  "event_id",
  "payment_description",
  "payment_availed",
  "createdAt",
];

const COLUMN_LABELS2 = {
  event_id: "Event ID",
  payment_description: "Payment Description",
  payment_availed: "Payment Availed",
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
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [rowData, setRowData] = useState([]);
  const [modal, setModal] = useState(false);

  function updateToggle(id) {
    setToggle(id);
  }

  // Add Invoice Modal
  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  // Get all the payment
  const API_ENDPOINT = "http://localhost:9000/api/all/payments";

  // Transaction tab
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        const result = await response.json();
        const filteredData = result.payments.filter(
          (row) => row.payment_paid !== null
        );
        // setData(result.clients)

        console.log(filteredData);

        setData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Transaction Invoice tab
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        const result = await response.json();
        const filteredData = result.payments.filter(
          (row) => row.payment_availed !== null
        );
        // setData(result.clients)

        console.log(filteredData);

        setData2(filteredData);
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

  const columns2 = [
    ...VISIBLE_FIELDS2.map((field) => ({
      field,
      headerClassName:
        "bg-secondary200 font-heading font-semibold text-title13",
      cellClassName: "text-title24",
      headerName: COLUMN_LABELS2[field],
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

          {/*Add Invoice Item*/}
          <div className="flex justify-end items-center gap-5 w-1/6 h-full">
            <button
              className="flex justify-center items-center w-full h-fit px-4 py-3 rounded-xl font-heading font-semibold text-white bg-secondary300 border hover:bg-gray hover:bg-opacity-10 hover:text-secondary300 hover:border hover:border-secondary300"
              onClick={openModal}
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
          rows={data2} // Pass the API data as rows
          columns={columns2}
          getRowId={(row) => row.id}
          component={{ Toolbar: GridToolbar }}
        />

        <AddInvoice isOpen={modal} onClose={closeModal} />
      </div>
    </div>
  );
}

export default Transaction;
