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

function Gallery() {
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
            // onClick={() => handleDelete(params.row.emp_id)}
          >
            Delete
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-8 p-8">
      {/** Body - User Management Tab - Toggle 1 */}
      <div className="show-content">
        {/** Header of the appointment tab */}
        <div className="flex justify-between items-center gap-5 w-full h-fit">
          {/*Navigation Bar*/}
          <div className="flex w-full gap-10 p-0.5 rounded-xl border border-gray border-opacity-30 font-tbc text-title24">
            <div className="toggleon">
              <p>Gallery Management</p>
            </div>
          </div>

          {/* Add Employee */}
          <div className="flex justify-end items-center gap-5 w-1/6 h-full">
            <button
              className="flex justify-center items-center w-full h-fit px-4 py-3 rounded-xl font-heading font-semibold text-white bg-secondary300 border hover:bg-gray hover:bg-opacity-10 hover:text-secondary300 hover:border hover:border-secondary300"
              onClick={openModal}
            >
              Add Image +
            </button>
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
          getRowId={(row) => row.emp_id}
          component={{ Toolbar: GridToolbar }}
        />
      </div>

      <div
        className={`modal fixed inset-0 flex items-center justify-center z-50`}
      >
        {/* <div className="fixed inset-0 bg-black opacity-50"></div> */}
        <div
          className="modal-container relative rounded-lg bg-white w-fit"
          data-te-modal-body-ref
        >
          <div className="w-full h-fit p-5 bg-primary200 rounded-t-lg">
            <h1 className="font-heading font-semibold text-heading25 text-white text-center">
              New Employee
            </h1>
          </div>

          <div className="flex flex-col w-fit gap-5 p-5">
            <div className="flex gap-10 w-fit">
              {/* Set Package Type */}
              <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
                <label for="dish">Package Type:</label>
                <select
                  name="employee"
                  id="classic"
                  onChange={(e) => {
                    // setEmpposition(e.target.value);
                  }}
                  className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  required
                >
                  <option disabled selected hidden>
                    Select Role
                  </option>
                  <option value="Headwaiter">Headwaiter</option>
                  <option value="Waiter">Waiter</option>
                  <option value="On-call waiter">On-call waiter</option>
                  <option value="Coordinato">Coordinator</option>
                  <option value="Warehouse Staff">Warehouse Staff</option>
                  <option value="Driver">Driver</option>
                  <option value="Chat Supporti">Chat Support</option>
                  <option value="System Administrator">
                    System Administrator
                  </option>
                </select>
              </div>

              {/* Set Event Type */}
              <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
                <label for="dish">Event Type:</label>
                <select
                  name="employee"
                  id="classic"
                  onChange={(e) => {
                    // setEmpposition(e.target.value);
                  }}
                  className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  required
                >
                  <option disabled selected hidden>
                    Select Event Type
                  </option>
                  <option value="kidsParty">Kids Party</option>
                  <option value="adultParty">Adult Party</option>
                  <option value="religiousCeremony">Religious Ceremony</option>
                  <option value="corporateEvent">Corporate Event</option>
                  <option value="debut">Debut</option>
                </select>
              </div>
            </div>

            {/* Set Theme */}
            <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
              <label for="dish">Theme:</label>
              <input
                type="text"
                onChange={(e) => {
                  // setEmpaddress(e.target.value);
                }}
                className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                required
              />
            </div>

            {/* Set Celebrant Gender */}
            <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
              <label for="dish">Celebrant Gender:</label>
              <select
                name="employee"
                id="classic"
                onChange={(e) => {
                  // setEmpposition(e.target.value);
                }}
                className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                required
              >
                <option disabled selected hidden>
                  Select Gender
                </option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </div>

            {/* Set Celebrant Age */}
            <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
              <label for="dish">Celebrant Age:</label>
              <input
                type="number"
                placeholder="Enter Celebrant Age"
                onChange={(e) => {
                  // setEmpaddress(e.target.value);
                }}
                className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                required
              />
            </div>
          </div>

          {/** Register and Cancel Button */}
          <div className="flex justify-between p-5 w-full h-fit font-tbc font-semibold">
            <button
              type="submit"
              className="border rounded-xl text-secondary500 hover:text-white hover:bg-secondary500 px-5 py-3 w-fit h-fit"
              // onClick={handleSubmit}
            >
              Register Employee
            </button>
            <button
              type="button"
              className="border rounded-xl font-semibold text-primary500 hover:text-white hover:bg-primary500 px-5 py-3 w-fit h-fit"
              // onClick={onClose}
            >
              Cancel Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
