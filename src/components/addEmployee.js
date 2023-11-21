import React, { useState } from "react";
import axios from "axios";
import "../css/modal.css";

const AddEmployee = ({ isOpen, onClose }) => {
    {/* Palit nalang rin po neto di ko po alam hahaha alam ko pangtextbox pero ung naming convention baka magkaerror sa db */}
  const [dishtype, setDishtype] = useState("");
  const [dishname, setDishname] = useState("");
  const [dishprice, setPrice] = useState("");

  

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
                <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
                    <label for="dish">Employee Name:</label>
                    <input
                    type="text"
                    /*onChange={(e) => {
                        setUsername(e.target.value);
                    }}*/
                    className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    required
                    />
                </div>

                <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
                    <label for="dish">Contact Number:</label>
                    <input
                    type="text"
                    /*onChange={(e) => {
                        setContact(e.target.value);
                    }*/
                    className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    required
                    />
                </div>
            </div>

          <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
            <label for="dish">Employee Email:</label>
            <input
                type="text"
                /*onChange={(e) => {
                    setContact(e.target.value);
                }*/
                className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                required
                />
          </div>

          <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
            <label for="dish">Address:</label>
            <textarea
              type="text"
              /*onChange={(e) => {
                setContact(e.target.value);
              }*/
              className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
              required
            />
          </div>

          <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
            <label for="dish">Select Role:</label>
            <select name="employee" 
                    id="classic"
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
            
            {/*<input
              type="text"
              /*onChange={(e) => {
                setContact(e.target.value);
              }*/}
              {/*className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
              required
            />*/}
          </div>
        </div>

        {/** Register and Cancel Button */}
        <div className="flex justify-between p-5 w-full h-fit font-tbc font-semibold">
          <button
            type="submit"
            className="border rounded-xl text-secondary500 hover:text-white hover:bg-secondary500 px-5 py-3 w-fit h-fit"
            /*onClick={handleSubmit}*/
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
