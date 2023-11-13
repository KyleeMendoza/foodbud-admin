import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
import "../../css/table.css";

const VISIBLE_FIELDS = [
  "event_id",
  "celebrant_name",
  "client_email",
  "event_type",
  "event_date",
];

const COLUMN_LABELS = {
  event_id: "Event ID",
  celebrant_name: "Celebrant Name",
  client_email: "Client Email",
  event_type: "Event Type",
  event_date: "Event Date",
};

function MyEvents() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [rowData, setRowData] = useState([]);
  const [rowData2, setRowData2] = useState([]);
  const API_ENDPOINT = "http://3.27.163.46:9001/api/get/event/all";

  const handleSeeMoreClick = async (event_id) => {
    try {
      const response = await axios.get(
        `http://3.27.163.46:9001/api/get/event/?event_id=${event_id}`
      );
      // console.log(response.data.fetchEvent)
      setRowData(response.data.fetchEvent);
      setRowData2(response.data.additionals);
      setModal(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleCloseModal = () => {
    setModal(false);
  };

  const classNamedefault =
    "flex font-sans font-semibold text-xl text-gray-800 mb-1";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        const result = await response.json();
        setData(result.events);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    ...VISIBLE_FIELDS.map((field) => ({
      field,
      headerClassName: "text-xl bg-red-300 text-center",
      cellClassName: "my-cell text-lg",
      headerName: COLUMN_LABELS[field],
      flex: 1,
    })),
    {
      field: "actions",
      headerName: "Actions",
      headerClassName: "text-xl bg-red-300",
      sortable: false,
      renderCell: (params) => (
        <IconButton
          onClick={() => handleSeeMoreClick(params.row.event_id)}
          style={{ color: "gray", width: "auto", alignItems: "center" }}
        >
          <VisibilityIcon />
        </IconButton>
      ),
    },
  ];
  return (
    <div>
      <DataGrid
        className="text-lg bg-white shadow-md"
        slots={{
          toolbar: GridToolbar,
        }}
        pageSize={10}
        rows={data}
        columns={columns}
        rowsPerPageOptions={[5, 10, 15]} // Set the available options
        slotProps={{ toolbar: { showQuickFilter: true } }}
        component={{ Toolbar: GridToolbar }}
      />
      {/* Modal, YOU CAN EXPERIMENT HERE THE CHANGES FOR DESIGN*/}
      <Dialog open={modal} onClose={handleCloseModal} className="w-full">
        <DialogTitle className=" w-[35rem] bg-red-300 overflow-hidden text-center rounded-md">
          <h1 className="font-bold text-3xl">Event Details</h1>
        </DialogTitle>
        <DialogContent className=" w-[35rem]">
          <div className={classNamedefault}>
            <strong>Event ID:</strong>{" "}
            <p className="ml-2 text-lg">{rowData.event_id}</p>
          </div>
          <div className={classNamedefault}>
            <strong>Celebrant Name:</strong>{" "}
            <p className="ml-2 text-lg">{rowData.celebrant_name}</p>
          </div>
          <div className={classNamedefault}>
            <strong>Celebrant Age:</strong>{" "}
            <p
              className={`ml-2 text-lg ${
                rowData.celebrant_age ? "" : "text-red-500"
              }`}
            >
              {rowData.celebrant_age || "Not specified"}
            </p>
          </div>
          <div className={classNamedefault}>
            <strong>Event Date:</strong>{" "}
            <p className="ml-2 text-lg">{rowData.event_date}</p>
          </div>
          <div className={classNamedefault}>
            <strong>Event Type:</strong>{" "}
            <p className="ml-2 text-lg">{rowData.event_type}</p>
          </div>
          <div className={`${classNamedefault} mb-4`}>
            <strong>Color Theme:</strong>{" "}
            <p
              className={`ml-2 text-lg ${
                rowData.color_theme ? "" : "text-red-500"
              }`}
            >
              {rowData.color_theme || "Not specified"}
            </p>
          </div>
          <div className={`${classNamedefault} mb-4`}>
            <strong>Venue Type:</strong>{" "}
            <p
              className={`ml-2 text-lg ${
                rowData.venue_type ? "" : "text-red-500"
              }`}
            >
              {rowData.venue_type || "Not specified"}
            </p>
          </div>
          <div className={`${classNamedefault} mb-4`}>
            <strong>Venue Floor:</strong>{" "}
            <p
              className={`ml-2 text-lg ${
                rowData.venue_floor ? "" : "text-red-500"
              }`}
            >
              {rowData.venue_floor || "Not specified"}
            </p>
          </div>
          <div className={`${classNamedefault} mb-4`}>
            <strong>Venue Address:</strong>{" "}
            <p
              className={`ml-2 text-lg ${
                rowData.venue_address ? "" : "text-red-500"
              }`}
            >
              {rowData.venue_address || "Not specified"}
            </p>
          </div>
          <div className={`${classNamedefault} mb-4`}>
            <strong>First Dish:</strong>{" "}
            <p
              className={`ml-2 text-lg ${rowData.dish_1 ? "" : "text-red-500"}`}
            >
              {rowData.dish_1 || "Not specified"}
            </p>
          </div>
          <div className={`${classNamedefault} mb-4`}>
            <strong>Second Dish:</strong>{" "}
            <p
              className={`ml-2 text-lg ${rowData.dish_2 ? "" : "text-red-500"}`}
            >
              {rowData.dish_2 || "Not specified"}
            </p>
          </div>
          <div className={`${classNamedefault} mb-4`}>
            <strong>Pasta:</strong>{" "}
            <p
              className={`ml-2 text-lg ${rowData.pasta ? "" : "text-red-500"}`}
            >
              {rowData.pasta || "Not specified"}
            </p>
          </div>
          <div className={`${classNamedefault} mb-4`}>
            <strong>Dessert:</strong>{" "}
            <p
              className={`ml-2 text-lg ${
                rowData.dessert ? "" : "text-red-500"
              }`}
            >
              {rowData.dessert || "Not specified"}
            </p>
          </div>
          <div className={classNamedefault}>
            {rowData2 && (
              <div>
                <strong>Additionals:</strong>{" "}
                <p className="ml-16 text-lg">
                  {Array.isArray(rowData2)
                    ? rowData2.map((additional, index) => (
                        <div key={index}>{additional}</div>
                      ))
                    : "Not specified"}
                </p>
              </div>
            )}
          </div>
        </DialogContent>
        <DialogActions className=" w-[35rem] bg-red-300 rounded-md">
          <Button onClick={handleCloseModal}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MyEvents;
