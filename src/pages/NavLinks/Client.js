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

function Client() {
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
      headerClassName: 'bg-secondary200 font-heading border font-semibold text-title13',
      cellClassName: 'text-title24 font-tbc border',
      headerName: COLUMN_LABELS[field],
      flex: 1,
    })),
    {
      field: 'actions',
      headerName: 'Actions',
      headerClassName: 'bg-secondary200 font-heading border font-semibold text-title13',
      cellClassName: 'text-title24 font-tbc border',
      sortable: false,
      width: 300,
      renderCell: (params) => (
        <div className="flex gap-14 font-tbc">
          <p
            className="hover:text-secondary500 w-fit px-5 py-2 font-bold underline text-secondary300 rounded-lg text-title24"
            // onClick={() => handleEdit(params.row.id)}
          >
            Edit
          </p>
          <p
            className="hover:text-secondary500 w-fit px-5 py-2 font-bold underline text-secondary300 rounded-lg text-title24"
            // onClick={() => handleEdit(params.row.id)}
          >
            Add Package
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-8 p-8 shadow-md">
      <div className="flex p-2">
        {/** Header of the Event Navigation */}
        <div className="flex justify-between items-center gap-5 w-full h-fit">
          <div className="flex w-full gap-10 p-0.5 rounded-lg border border-gray border-opacity-30 font-tbc text-title24">
            <input className="w-full px-5 py-3 rounded-lg" type="search" placeholder="Name Search"/>
          </div>

          {/*Filter Icon*/} 
          <div className="flex rounded-lg p-3 items-center bg-secondary100">
            <h1 className="font-bold">Filter</h1>
          </div>

          {/*Export*/} 
          <div className="flex justify-between items-center w-1/4 h-full">
            <button
              className="font-heading font-semibold text-white text-title13 rounded-lg px-5 py-3 bg-secondary500 w-fit h-full cursor-pointer hover:opacity-75 "
              onClick={openModal}>
                Add Client +
            </button>
            <button className="flex justify-center items-center w-fit h-fit px-5 py-3 rounded-xl font-heading font-semibold text-white bg-primary200">Export</button>
          </div>
        </div>
   
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

export default Client;
