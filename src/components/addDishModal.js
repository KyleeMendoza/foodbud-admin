import React, { useState } from "react";
import axios from "axios";
import "../css/modal.css";

const AddDishModal = ({ isOpen, onClose }) => {
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
        className="modal-container relative border border-gray-300 rounded-lg bg-white w-1/4"
        data-te-modal-body-ref
      >
        <div className="w-full h-fit p-5 bg-primary200 rounded-t-lg">
            <h1 className="font-heading font-semibold text-heading25 text-white text-center">New Dish</h1>
        </div>

        <div className="flex flex-col gap-5 p-5">
          <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
            <label for="dish">Dish Type:</label>
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
            <label for="dish">Dish Name:</label>
            <textarea
              /*onChange={(e) => {
                setAdress(e.target.value);
              }}*/
              className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
              required
            />
          </div>
          <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
            <label for="dish">Price:</label>
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

        {/** Register and Cancel Button */}
        <div className="flex justify-between p-5 w-full h-fit font-tbc">
          <button
            type="submit"
            className="h-fit w-fit bg-white hover:text-white border hover:bg-secondary500 text-secondary500 font-semibold px-5 py-3 rounded-xl"
            /*onClick={handleSubmit}*/
          >
            Save Package
          </button>
          <button
            type="button"
            className="flex h-fit w-fit text-primary500 bg-white hover:text-white hover:bg-primary500 font-semibold px-5 py-3 rounded-xl border "
            onClick={onClose}
          >
            Cancel Package
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDishModal;
