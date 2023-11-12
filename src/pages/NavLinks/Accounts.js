import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import UserRegistrationModal from "../../components/userRegistrationModal";

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

function Accounts() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const API_ENDPOINT = "http://3.27.163.46:9001/api/clients";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        const result = await response.json();
        setData(result.clients);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    ...VISIBLE_FIELDS.map((field) => ({
      field,
      headerName: COLUMN_LABELS[field],
      flex: 1,
    })),
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      width: 300,
      renderCell: (params) => (
        <div className="">
          <button
            className="hover:underline mr-2 text-base bg-red-400 rounded-md mr-2 w-24 text-white"
            // onClick={() => handleEdit(params.row.id)}
          >
            Edit
          </button>
          <button
            className="hover:underline mr-2 text-base w-32 bg-blue-500 rounded-md text-white"
            // onClick={() => handleEdit(params.row.id)}
          >
            Add Package
          </button>
        </div>
      ),
    },
  ];

  return (
    <div style={{ height: 800, width: "100%" }} className="bg-white shadow-md">
      <div className="flex p-2">
        <p
          className="w-full cursor-pointer hover:opacity-75 mx-8 font-bold text-2xl text-red-400"
          onClick={openModal}
        >
          +     Add client information
        </p>
   
      </div>
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
      
    </div>
  );
}

export default Accounts;
