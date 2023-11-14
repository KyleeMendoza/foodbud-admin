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
      headerClassName: "bg-secondary200 font-heading font-semibold text-title13",
      cellClassName: "text-title24",
      headerName: COLUMN_LABELS[field],
      flex: 1,
    })),
    {
      field: "actions",
      headerName: "Actions",
      headerClassName: "font-heading text-title13 bg-secondary200",
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
  return (<div className="p-8">
      {/** Header of the Event Navigation */}
      <div className="flex flex-col w-full h-fit gap-10">
        {/** Header of the Event Navigation */}
        <div className="flex justify-betweenitems-center gap-5 w-full h-fit">
          <div className="flex w-full gap-10 p-0.5 rounded-2xl border border-gray border-opacity-30 font-tbc text-title24">
            <p className="w-fit font-heading text-white text-title24 rounded-xl bg-primary200 px-5 py-3">Events</p>
          </div>

          {/*Filter Icon*/} 
          <div className="flex rounded-lg p-3 items-center bg-secondary100">
            <h1 className="font-bold">Filter</h1>
          </div>

          {/*Export*/} 
          <div className="flex justify-end items-center gap-5 w-fit h-full">
            <button className="flex justify-center items-center w-fit h-fit px-5 py-3 rounded-xl font-heading font-semibold text-white bg-primary200">Export</button>
          </div>
        </div>


        <DataGrid
          className="text-lg bg-white shadow-md"
          slots={{
            toolbar: GridToolbar,
          }}
          pageSize={10}
          rows={data}
          height={500}
          columns={columns}
          rowsPerPageOptions={[5, 10, 15]} // Set the available options
          slotProps={{ toolbar: { showQuickFilter: true } }}
          component={{ Toolbar: GridToolbar }}
        />
        {/* Modal, YOU CAN EXPERIMENT HERE THE CHANGES FOR DESIGN*/}
        {/** Pop up when click yung eye button */}
        <Dialog open={modal} onClose={handleCloseModal} className="w-full">
          <DialogTitle className="w-full overflow-hidden text-secondary300">
            <h1 className="font-heading font-bold text-heading14">Event Details</h1>
          </DialogTitle>
          <DialogContent className="flex flex-col gap-3 w-full">
            <div className="flex font-tbc text-title13">
              <strong className="w-[200px]">Event ID:</strong>{" "}
              <p className="ml-2 text-lg">{rowData.event_id}</p>
            </div>
            <div className="flex font-tbc text-title13">
              <strong className="w-[200px]">Celebrant Name:</strong>{" "}
              <p className="ml-2 text-lg">{rowData.celebrant_name}</p>
            </div>
            <div className="flex font-tbc text-title13">
              <strong className="w-[200px]">Celebrant Age:</strong>{" "}
              <p
                className={`ml-2 text-lg ${
                  rowData.celebrant_age ? "" : "text-red-500"
                }`}
              >
                {rowData.celebrant_age || "Not specified"}
              </p>
            </div>
            <div className="flex font-tbc text-title13">
              <strong className="w-[200px]">Event Date:</strong>{" "}
              <p className="ml-2 text-lg">{rowData.event_date}</p>
            </div>
            <div className="flex font-tbc text-title13">
              <strong className="w-[200px]">Event Type:</strong>{" "}
              <p className="ml-2 text-lg">{rowData.event_type}</p>
            </div>
            <div className="flex font-tbc text-title13">
              <strong className="w-[200px]">Color Theme:</strong>{" "}
              <p
                className={`ml-2 text-lg ${
                  rowData.color_theme ? "" : "text-red-500"
                }`}
              >
                {rowData.color_theme || "Not specified"}
              </p>
            </div>
            <div className="flex font-tbc text-title13">
              <strong className="w-[200px]">Venue Type:</strong>{" "}
              <p
                className={`ml-2 text-lg ${
                  rowData.venue_type ? "" : "text-red-500"
                }`}
              >
                {rowData.venue_type || "Not specified"}
              </p>
            </div>
            <div className="flex font-tbc text-title13">
              <strong className="w-[200px]">Venue Floor:</strong>{" "}
              <p
                className={`ml-2 text-lg ${
                  rowData.venue_floor ? "" : "text-red-500"
                }`}
              >
                {rowData.venue_floor || "Not specified"}
              </p>
            </div>
            <div className="flex font-tbc text-title13">
              <strong className="w-[200px]">Venue Address:</strong>{" "}
              <p
                className={`ml-2 text-lg ${
                  rowData.venue_address ? "" : "text-red-500"
                }`}
              >
                {rowData.venue_address || "Not specified"}
              </p>
            </div>
            <div className="flex font-tbc text-title13">
              <strong className="w-[200px]">First Dish:</strong>{" "}
              <p
                className={`ml-2 text-lg ${rowData.dish_1 ? "" : "text-red-500"}`}
              >
                {rowData.dish_1 || "Not specified"}
              </p>
            </div>
            <div className="flex font-tbc text-title13">
              <strong className="w-[200px]">Second Dish:</strong>{" "}
              <p
                className={`ml-2 text-lg ${rowData.dish_2 ? "" : "text-red-500"}`}
              >
                {rowData.dish_2 || "Not specified"}
              </p>
            </div>
            <div className="flex font-tbc text-title13">
              <strong className="w-[200px]">Pasta:</strong>{" "}
              <p
                className={`ml-2 text-lg ${rowData.pasta ? "" : "text-red-500"}`}
              >
                {rowData.pasta || "Not specified"}
              </p>
            </div>
            <div className="flex font-tbc text-title13">
              <strong className="w-[200px]">Dessert:</strong>{" "}
              <p
                className={`ml-2 text-lg ${
                  rowData.dessert ? "" : "text-red-500"
                }`}
              >
                {rowData.dessert || "Not specified"}
              </p>
            </div>
            <div className="flex font-tbc text-title13">
              {rowData2 && (
                <div>
                  <strong className="w-[200px]">Additionals:</strong>{" "}
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
          <DialogActions className="">
            <button 
              onClick={handleCloseModal}
              className="bg-primary500 rounded-xl font-tbc font-bold text-white"
            >
              Close
            </button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default MyEvents;
