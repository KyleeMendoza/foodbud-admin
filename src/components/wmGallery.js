import React from "react";
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
import { useState, useEffect } from "react";
import AddGallery from "./addGallery";

const VISIBLE_FIELDS = [
  "package_type",
  "event_type",
  "theme",
  "celebrant_gender",
  "celebrant_age",
];

const COLUMN_LABELS = {
  package_type: "Package Type",
  event_type: "Event Type",
  theme: "Theme",
  celebrant_gender: "Celebrant Gender",
  celebrant_age: "Celebrant Age",
};

function WmGallery() {
  const [data, setData] = useState([]);
  // Modal for add image
  const [modal, setModal] = useState(false);

  // Open Add Gallery Pop-up
  const openModal = () => {
    setModal(true);
  };

  // Close Add Gallery Pop-up
  const closeModal = () => {
    setModal(false);
  };

  // Show all Employee
  const API_ENDPOINT = "https://3.27.163.46/api/all/gallery";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        const result = await response.json();
        // setData(result.clients)

        console.log(result);

        setData(result.AllPictures);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Table header and column code
  const columns = [
    ...VISIBLE_FIELDS.map((field) => ({
      field,
      headerClassName:
        "bg-secondary200 font-heading border font-semibold text-title13",
      cellClassName: "text-title24 font-tbc border",
      headerName: COLUMN_LABELS[field],
      flex: 1,
    })),
    {
      field: "actions",
      headerName: "Actions",
      headerClassName:
        "bg-secondary200 font-heading border font-semibold text-title13",
      cellClassName: "text-title24 font-tbc border",
      sortable: false,
      width: 300,
      renderCell: (params) => (
        <div className="flex gap-14 font-tbc">
          <p
            className="hover:text-secondary500 w-fit px-5 py-2 font-bold underline text-secondary300 rounded-lg text-title24 cursor-pointer"
            onClick={() => handleDelete(params.row.gallery_id)}
          >
            Delete
          </p>
        </div>
      ),
    },
  ];

  const handleDelete = async (id) => {
    try {
      // Send a DELETE request to the API to delete the dish
      await axios.post(
        `https://3.27.163.46/api/delete/gallery/?galleryId=${id}`
      );
      window.location.reload();
    } catch (error) {
      console.error("Error deleting dish:", error);
    }
  };

  return (
    <div>
      {/* Client Table */}
      <DataGrid
        className="text-lg"
        slots={{
          toolbar: GridToolbar,
        }}
        rows={data} // Pass the API data as rows
        columns={columns}
        getRowId={(row) => row.gallery_id}
        component={{ Toolbar: GridToolbar }}
      />
    </div>
  );
}

export default WmGallery;
