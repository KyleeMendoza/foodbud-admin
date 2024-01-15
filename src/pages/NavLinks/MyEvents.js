import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { format, compareAsc } from 'date-fns';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';
import VisibilityIcon from "@mui/icons-material/Visibility";
import { CloudUpload } from "@mui/icons-material";
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
  const [selectedOption, setSelectedOption] = useState("")
  const [eventId, setEventId] = useState("")
  const [link, setLink] = useState("")
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const API_ENDPOINT = "https://3.27.163.46/api/get/event/all";
  // const today = new Date();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        console.log("response:", response)
        const result = await response.json();
        // console.log(result)
        setData(result.events);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSeeMoreClick = async (event_id) => {
    try {
      const response = await axios.get(
        `https://3.27.163.46/api/get/event/?event_id=${event_id}`
      );
      console.log(response.data.fetchEvent)
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

  const handleUploadClick = (event_id) => {
    setUploadDialogOpen(true)
    setEventId(event_id);
  }

  const handleUpload = async () => {
    try {
      // Validate form data (optional, based on your requirements)
      // if (!eventId || !link || !selectedOption) {
      //   console.log(link)
      //   // Handle form validation error, if necessary
      //   console.error('Form data is incomplete');
      //   return;
      // }

      // Make the API request to upload photo coverage
      const response = await axios.post('https://3.27.163.46/api/upload/coverage', {
        event_id: eventId,
        link,
        coverage_type: selectedOption,
      });

      if (response.status === 201) {
        toast.success("Link Uploaded")
      } else if (response.status === 200) {
        toast.error("Documentation for Coverage Type Already exist")
      }

      setUploadDialogOpen(false);
      setEventId('');
    } catch (error) {
      // Handle the error (optional, based on your requirements)
      console.error('Error uploading photo coverage:', error);
      toast.error("An error occured during upload")
      // Close the upload dialog
      setUploadDialogOpen(false);
    }
  };

  const handleDialogClose = () => {
    // Close the upload dialog
    setUploadDialogOpen(false);
  };
  // const classNamedefault =
  //   "flex font-sans font-semibold text-xl text-gray-800 mb-1";



  const columns = [
    {
      field: "event_id",
      headerName: "Event ID",
      headerClassName: "bg-secondary200 font-heading font-semibold text-title13 text-underline",
      flex: 0,
      renderCell: (params) => (
        <Link to={`/admin/transaction?event_id=${params.value}`} className="font-medium" style={{ textDecoration: 'underline' }}>
          {params.value}
        </Link>
      ),
    },
    {
      field: "celebrant_name",
      headerName: "Celebrant Name",
      headerClassName: "bg-secondary200 font-heading font-semibold text-title13",
      cellClassName: "text-title24",
      flex: 1,
    },
    {
      field: "client_email",
      headerName: "Client Email",
      headerClassName: "bg-secondary200 font-heading font-semibold text-title13",
      cellClassName: "text-title24",
      flex: 1,
    },
    {
      field: "event_type",
      headerName: "Event Type",
      headerClassName: "bg-secondary200 font-heading font-semibold text-title13",
      cellClassName: "text-title24",
      flex: 1,
    },
    {
      field: "event_date",
      headerName: "Event Date",
      headerClassName: "bg-secondary200 font-heading font-semibold text-title13",
      cellClassName: "text-title24",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      headerClassName: "font-heading text-title13 bg-secondary200",
      sortable: false,
      flex: 1,
      renderCell: (params) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* See More Icon */}
          <IconButton
            onClick={() => handleSeeMoreClick(params.row.event_id)}
            style={{ color: "gray", width: "50px" }}
          >
            <VisibilityIcon />
          </IconButton>

          {/* Upload Icon */}
          <IconButton
            onClick={() => handleUploadClick(params.row.event_id)}
            style={{ color: "gray", width: "50px" }}
          >
            <CloudUpload />
          </IconButton>
        </div>
      ),
    },
  ];


  return (<div className="p-8">
    {/** Header of the Event Navigation */}
    <div className="flex flex-col w-full h-fit gap-10">
      {/** Header of the Event Navigation */}
      <div className="flex justify-betweenitems-center gap-5 w-full h-fit">
        <div className="flex w-full gap-10 p-0.5 rounded-2xl border border-gray border-opacity-30 font-tbc text-title24">
          <p className="w-fit font-heading text-white text-title24 rounded-xl bg-primary200 px-5 py-3 cursor-pointer">Events</p>
        </div>
      </div>
      <Dialog open={uploadDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Select and Link</DialogTitle>
        <DialogContent>
          <TextField
            value={link}
            onChange={(e) => setLink(e.target.value)}
            label="Link"
            fullWidth
          />
          <Select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            label="Select Option"
            style={{ width: "100%", marginTop: "10px" }}
          >
            <MenuItem value="Photo Coverage">Photo Coverage</MenuItem>
            <MenuItem value="Video Coverage">Video Coverage</MenuItem>
            <MenuItem value="Photobooth">Photobooth</MenuItem>
          </Select>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleUpload} color="primary">
            Upload
          </Button>
        </DialogActions>
      </Dialog>


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
        <div className="flex flex-col gap-5 rounded-xl ">
          <DialogTitle className="flex justify-center w-full overflow-hidden text-white bg-primary200">
            <h1 className="font-heading font-bold text-heading14">Event Details</h1>
          </DialogTitle>

          <div className="flex flex-col p-5">
            <DialogContent className="flex flex-col gap-3 w-full ">
              <div className="flex font-tbc text-title13 ">
                <strong className="w-[200px]">Event ID:</strong>{" "}
                <p className="font-medium">{rowData.event_id}</p>
              </div>
              <div className="flex font-tbc text-title13 ">
                <strong className="w-[200px]">Celebrant Name:</strong>{" "}
                <p className="font-medium">{rowData.celebrant_name}</p>
              </div>
              <div className="flex font-tbc text-title13 ">
                <strong className="w-[200px]">Celebrant Age:</strong>{" "}
                <p
                  className={`font-medium ${rowData.celebrant_age ? "" : "text-red-500"
                    }`}
                >
                  {rowData.celebrant_age || "Not specified"}
                </p>
              </div>
              <div className="flex font-tbc text-title13 ">
                <strong className="w-[200px]">Event Date:</strong>{" "}
                <p className="font-medium">{rowData.event_date}</p>
              </div>
              <div className="flex font-tbc text-title13 ">
                <strong className="w-[200px]">Event Type:</strong>{" "}
                <p className="font-medium">{rowData.event_type}</p>
              </div>
              <div className="flex font-tbc text-title13 ">
                <strong className="w-[200px]">Color Theme:</strong>{" "}
                <p
                  className={`font-medium ${rowData.color_theme ? "" : "text-red-500"
                    }`}
                >
                  {rowData.color_theme || "Not specified"}
                </p>
              </div>
              <div className="flex font-tbc text-title13 ">
                <strong className="w-[200px]">Venue Type:</strong>{" "}
                <p
                  className={`font-medium ${rowData.venue_type ? "" : "text-red-500"
                    }`}
                >
                  {rowData.venue_type || "Not specified"}
                </p>
              </div>
              <div className="flex font-tbc text-title13 ">
                <strong className="w-[200px]">Venue Floor:</strong>{" "}
                <p
                  className={`font-medium ${rowData.venue_floor ? "" : "text-red-500"
                    }`}
                >
                  {rowData.venue_floor || "Not specified"}
                </p>
              </div>
              <div className="flex font-tbc text-title13 ">
                <strong className="w-[200px]">Venue Address:</strong>{" "}
                <p
                  className={`font-medium ${rowData.venue_address ? "" : "text-red-500"
                    }`}
                >
                  {rowData.venue_address || "Not specified"}
                </p>
              </div>
              <div className="flex font-tbc text-title13 ">
                <strong className="w-[200px]">First Dish:</strong>{" "}
                <p
                  className={`font-medium ${rowData.dish_1 ? "" : "text-red-500"}`}
                >
                  {rowData.dish_1 || "Not specified"}
                </p>
              </div>
              <div className="flex font-tbc text-title13 ">
                <strong className="w-[200px]">Second Dish:</strong>{" "}
                <p
                  className={`font-medium ${rowData.dish_2 ? "" : "text-red-500"}`}
                >
                  {rowData.dish_2 || "Not specified"}
                </p>
              </div>
              <div className="flex font-tbc text-title13 ">
                <strong className="w-[200px]">Pasta:</strong>{" "}
                <p
                  className={`font-medium ${rowData.pasta ? "" : "text-red-500"}`}
                >
                  {rowData.pasta || "Not specified"}
                </p>
              </div>
              <div className="flex font-tbc text-title13 ">
                <strong className="w-[200px]">Dessert:</strong>{" "}
                <p
                  className={`font-medium ${rowData.dessert ? "" : "text-red-500"
                    }`}
                >
                  {rowData.dessert || "Not specified"}
                </p>
              </div>
              <div className="flex font-tbc text-title13 ">
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
            <DialogActions className="font-tbc">
              <button className="border rounded-xl font-semibold text-primary500 hover:text-white hover:bg-primary500 px-5 py-3 w-fit h-fit" onClick={handleCloseModal}>Close</button>
            </DialogActions>
          </div>
        </div>
      </Dialog>
    </div>
  </div>
  );
}

export default MyEvents;
