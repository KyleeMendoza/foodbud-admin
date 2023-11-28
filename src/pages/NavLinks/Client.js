import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import UserRegistrationModal from "../../components/userRegistrationModal";
import axios from "axios";

const VISIBLE_FIELDS = [
  "client_name",
  "client_email",
  "client_contact",
  "client_address",
];

const COLUMN_LABELS = {
  client_name: "CLIENT NAME",
  client_email: " EMAIL",
  client_contact: "CONTACT",
  client_address: "ADDRESS",
};

function Client() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalPackage, setModalPackage] = useState(false);
  const [id, setId] = useState(0);
  const [client_package_email, setClientEmail] = useState("");
  const [clientData, setClientData] = useState({
    client_name: "",
    client_email: "",
    client_contact: "",
    client_address: "",
  });

  const [packageData, setPackageData] = useState({
    package_type: "",
    hc_kids: 0,
    hc_adults: 0,
    celebrant_name: "",
    event_date: "",
    event_type: "",
  });

  const handlePackageFormChange = (event) => {
    setPackageData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closePackageModal = () => {
    setModalPackage(false);
  };

  const handlePackageFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const dataWithClientEmail = {
        ...packageData,
        client_email: client_package_email,
      };
      // Send a POST request to create a package
      const response = await axios.post(
        "https://3.27.163.46/api/package/create",
        dataWithClientEmail
      );

      console.log("Package added successfully:", response.data);
      alert("Package Added Successfully");

      window.location.reload();
    } catch (error) {
      console.error("Error adding package:", error);
    }
  };

  const API_ENDPOINT = "https://3.27.163.46/api/clients";

  const handleEdit = (id) => {
    setId(id);
    setModal(true);
  };

  const close = () => {
    setModal(false);
  };

  useEffect(() => {
    // Fetch client data using the client ID when the Dialog opens
    const fetchClientData = async () => {
      try {
        const response = await fetch(
          `https://3.27.163.46/api/client/?id=${id}`
        );
        const result = await response.json();
        console.log(result.client);
        setClientData(result.client);
      } catch (error) {
        console.error("Error fetching client data:", error);
      }
    };

    if (modal && id) {
      fetchClientData();
    }
  }, [modal, id]);

  const handleFormChange = (event) => {
    // Update the form state as the user types
    setClientData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `https://3.27.163.46/api/user/update?id=${id}`,
        clientData
      );

      // console.log("Client data updated successfully:", response.data);
      alert("Client Updated Successfully");
      window.location.reload();
      close();
    } catch (error) {
      console.error("Error updating client data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        const result = await response.json();
        // setData(result.clients)
        const filteredData = result.clients.filter(
          (row) => row.client_name.toLowerCase() !== "admin"
        );

        console.log(filteredData);

        setData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddPackage = (client_email) => {
    try {
      setClientEmail(client_email);
      setModalPackage(true);
      console.log(client_email);
    } catch (error) {
      console.error(error);
    }
  };

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
            onClick={() => handleEdit(params.row.id)}
          >
            Edit
          </p>
          <p
            className="hover:text-secondary500 w-fit px-5 py-2 font-bold underline text-secondary300 rounded-lg text-title24 cursor-pointer"
            onClick={() => handleAddPackage(params.row.client_email)}
          >
            Add Package
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-8 p-8 shadow-md">
      <div className="show-content">
        {/** Header of the Event Navigation */}
        <div className="flex justify-between items-center gap-5 w-full h-fit">
          {/*Navigation Bar*/}
          <div className="flex w-full gap-10 p-0.5 rounded-xl border border-gray border-opacity-30 font-tbc text-title24">
            <div className="toggleon">
              <p>Client Management</p>
            </div>
          </div>

          {/*Export*/}
          <div className="flex justify-end items-center w-1/6 h-fit">
            <button
              className="font-heading font-semibold text-white text-title13 rounded-lg px-10  py-3 bg-secondary500 w-full h-fit cursor-pointer hover:opacity-75 "
              onClick={openModal}
            >
              Add Client +
            </button>
            {/*<button className="flex justify-center items-center w-fit h-fit px-5 py-3 rounded-xl font-heading font-semibold text-white bg-primary200">Export</button>*/}
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
        component={{ Toolbar: GridToolbar }}
      />
      <UserRegistrationModal isOpen={isModalOpen} onClose={closeModal} />

      {/* MODAL FOR EDITING CLIENT DETAILS */}
      <Dialog open={modal} onClose={close}>
        <DialogTitle>Edit Client</DialogTitle>
        <DialogContent>
          <form onSubmit={handleFormSubmit}>
            <TextField
              label="Client Name"
              name="client_name"
              value={clientData.client_name}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              name="client_email"
              value={clientData.client_email}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Contact"
              name="client_contact"
              value={clientData.client_contact}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Address"
              name="client_address"
              value={clientData.client_address}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
            <DialogActions>
              <Button type="submit">Save Changes</Button>
              <Button onClick={close}>Cancel</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      {/* MODAL FOR ADD PACKAGES */}
      <Dialog open={modalPackage} onClose={closePackageModal}>
        <DialogTitle>Add Package</DialogTitle>
        <DialogContent>
          <form onSubmit={handlePackageFormSubmit}>
            {/* Package data fields */}
            <TextField
              label="Package Type"
              name="package_type"
              onChange={handlePackageFormChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Client Email"
              name="client_email"
              value={client_package_email}
              // onChange={handlePackageFormChange}
              fullWidth
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              label="Headcount Kids"
              name="hc_kids"
              onChange={handlePackageFormChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Headcount Adults"
              name="hc_adults"
              onChange={handlePackageFormChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Celebrant Name"
              name="celebrant_name"
              onChange={handlePackageFormChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Event Date"
              placeholder="YYYY-MM-DD"
              name="event_date"
              onChange={handlePackageFormChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Event Type"
              name="event_type"
              onChange={handlePackageFormChange}
              fullWidth
              margin="normal"
            />

            <DialogActions>
              <Button type="submit">Add Package</Button>
              <Button onClick={closePackageModal}>Cancel</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Client;
