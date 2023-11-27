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
import AddEmployee from "../../components/addEmployee";

const VISIBLE_FIELDS = [
  "emp_name",
  "emp_position",
  "emp_email",
  "emp_contactnum",
];

const COLUMN_LABELS = {
  emp_name: "EMPLOYEE NAME",
  emp_position: "EMPLOYEE POSITION",
  emp_email: "EMPLOYEE EMAIL",
  emp_contactnum: "EMPLOYEE CONTACT NO.",
};

function Employees() {
  const [data, setData] = useState([]);
  // Add Employee Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Edit Employee Modal
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(0);
  const [employeeData, setEmployeeData] = useState({
    emp_name: "",
    emp_position: "",
    emp_email: "",
    emp_contactnum: "",
    emp_address: "",
  });

  // Open Add Employee Pop-up modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close Add Employee Pop-up modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  const API_ENDPOINT = "https://3.27.163.46/api/all/employee";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        const result = await response.json();
        // setData(result.clients)
        const filteredData = result.employee.filter(
          (row) => row.emp_name.toLowerCase() !== "admin"
        );

        console.log(filteredData);

        setData(filteredData);
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
            onClick={() => handleEdit(params.row.emp_id)}
          >
            Edit
          </p>
          <p
            className="hover:text-secondary500 w-fit px-5 py-2 font-bold underline text-secondary300 rounded-lg text-title24 cursor-pointer"
            onClick={() => handleDelete(params.row.emp_id)}
          >
            Delete
          </p>
        </div>
      ),
    },
  ];

  // Edit Employee Record
  const handleEdit = (id) => {
    setId(id);
    setModal(true);
  };

  const close = () => {
    setModal(false);
  };

  useEffect(() => {
    // Fetch Employee data using the Employee ID when the Dialog opens
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch(
          `https://3.27.163.46/api/employee/?empID=${id}`
        );
        const result = await response.json();
        console.log(result.employee);
        setEmployeeData(result.employee);
      } catch (error) {
        console.error("Error fetching Employee Record:", error);
      }
    };

    if (modal && id) {
      fetchEmployeeData();
    }
  }, [modal, id]);

  const handleFormChange = (event) => {
    // Update the form state as the user types
    setEmployeeData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `https://3.27.163.46/api/employee/update?empID=${id}`,
        employeeData
      );

      // console.log("Employee data updated successfully:", response.data);
      alert("Employee Record Updated Successfully");
      window.location.reload();
      close();
    } catch (error) {
      console.error("Error updating Employee data:", error);
    }
  };

  // Delete Employee Record
  const handleDelete = async (id) => {
    try {
      // Send a DELETE request to the API to delete the dish
      await axios.post(`https://3.27.163.46/api/employee/delete/?empID=${id}`);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting Employee Record:", error);
    }
  };

  return (
    <div className="flex flex-col gap-8 p-8">
      {/** Body - User Management Tab - Toggle 1 */}
      <div className={toggle === 1 ? "show-content" : "content"}>
        {/** Header of the appointment tab */}
        <div className="flex justify-between items-center gap-5 w-full h-fit">
          {/*Navigation Bar*/}
          <div className="flex w-full gap-10 p-0.5 rounded-xl border border-gray border-opacity-30 font-tbc text-title24">
            <div className={toggle === 1 ? "toggleon" : "toggleoff"}>
              <p onClick={() => updateToggle(1)}>User Management</p>
            </div>
          </div>

          {/* Add Employee */}
          <div className="flex justify-end items-center gap-5 w-1/6 h-full">
            <button
              className="flex justify-center items-center w-full h-fit px-4 py-3 rounded-xl font-heading font-semibold text-white bg-secondary300 border hover:bg-gray hover:bg-opacity-10 hover:text-secondary300 hover:border hover:border-secondary300"
              onClick={openModal}
            >
              Add Employee +
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

        <AddEmployee isOpen={isModalOpen} onClose={closeModal} />
      </div>

      {/* MODAL FOR EDITING EMPLOYEE DETAILS */}
      <Dialog open={modal} onClose={close}>
        <DialogTitle>Edit Client</DialogTitle>
        <DialogContent>
          <form onSubmit={handleFormSubmit}>
            <TextField
              label="Employee Name"
              name="employee_name"
              value={employeeData.emp_name}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Employee Position"
              name="employee_position"
              value={employeeData.emp_position}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Employee Email"
              name="employee_email"
              value={employeeData.emp_email}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Employee Contact No."
              name="employee_contact"
              value={employeeData.emp_contactnum}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="EmployeeAddress"
              name="employee_address"
              value={employeeData.emp_address}
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
    </div>
  );
}

export default Employees;
