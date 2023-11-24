import React, { useState } from "react";
import axios from "axios";
import "../css/modal.css";

const AddEmployee = ({ isOpen, onClose }) => {
  {/* Palit nalang rin po neto di ko po alam hahaha alam ko pangtextbox pero ung naming convention baka magkaerror sa db */}
  const [employee_name, setEmpname] = useState("");
  const [employee_position, setEmpposition] = useState("");
  const [employee_email, setEmpemail] = useState("");
  const [employee_contactnum, setEmpcontact] = useState("");
  const [employee_address, setEmpaddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await axios.post(
        "http://localhost:9000/api/employee/register",
        {
          emp_name: employee_name,
          emp_position: employee_position,
          emp_email: employee_email,
          emp_contactnum: employee_contactnum,
          emp_address: employee_address,
        }
      );

      if (response.data) {
        alert("Employee Record Created Successfully");
        setEmpname("");
        setEmpposition("");
        setEmpemail("");
        setEmpcontact("");
        setEmpaddress("");
        window.location.reload();

        // onClose();
      } else {
        alert("Error creating Employee");
      }

    }
    catch(error) {
      console.error("Error creating User:", error);
    }
  };

  
  return (
    <div
      className={`modal fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      {/* <div className="fixed inset-0 bg-black opacity-50"></div> */}
      <div
        className="modal-container relative rounded-lg bg-white w-fit"
        data-te-modal-body-ref
      >
        <div className="w-full h-fit p-5 bg-primary200 rounded-t-lg">
            <h1 className="font-heading font-semibold text-heading25 text-white text-center">New Employee</h1>
        </div>

        <div className="flex flex-col w-fit gap-5 p-5">
          <div className="flex gap-10 w-fit">
             {/* Set Employee Name */}
            <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
                <label for="dish">Employee Name:</label>
                <input
                type="text"
                onChange={(e) => {
                    setEmpname(e.target.value);
                }}
                className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                required
                />
            </div>
            
             {/* Set Employee Contact Number */}
            <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
                <label for="dish">Contact Number:</label>
                <input
                type="text"
                onChange={(e) => {
                    setEmpcontact(e.target.value);
                }}
                className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                required
                />
            </div>
          </div>
          
           {/* Set Employee Email */}
          <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
            <label for="dish">Employee Email:</label>
            <input
                type="text"
                onChange={(e) => {
                    setEmpemail(e.target.value);
                }}
                className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                required
                />
          </div>

          {/* Set Employee Address */}
          <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
            <label for="dish">Address:</label>
            <textarea
              type="text"
              onChange={(e) => {
                setEmpaddress(e.target.value);
              }}
              className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
              required
            />
          </div>

          {/* Set Employee Position */}
          <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
            <label for="dish">Select Role:</label>
            <select name="employee" 
                    id="classic"
                    onChange={(e) => {
                      setEmpposition(e.target.value);
                    }}
                    className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    required>
                <option disabled selected hidden>Select Role</option>
                <option value="Headwaiter">Headwaiter</option>
                <option value="Waiter">Waiter</option>
                <option value="On-call waiter">On-call waiter</option>
                <option value="Coordinato">Coordinator</option>
                <option value="Warehouse Staff">Warehouse Staff</option>
                <option value="Driver">Driver</option>
                <option value="Chat Supporti">Chat Support</option>
                <option value="System Administrator">System Administrator</option>
                </select>
          </div>
        </div>

        {/** Register and Cancel Button */}
        <div className="flex justify-between p-5 w-full h-fit font-tbc font-semibold">
          <button
            type="submit"
            className="border rounded-xl text-secondary500 hover:text-white hover:bg-secondary500 px-5 py-3 w-fit h-fit"
            onClick={handleSubmit}
          >
            Register Employee
          </button>
          <button
            type="button"
            className="border rounded-xl font-semibold text-primary500 hover:text-white hover:bg-primary500 px-5 py-3 w-fit h-fit" 
            onClick={onClose}
          >
            Cancel Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
