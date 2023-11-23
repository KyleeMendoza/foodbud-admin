import React, { useState } from "react";
import axios from "axios";
import "../css/modal.css";

const AddSetModal = ({ isOpen, onClose }) => {
    /** di ko pa naedit to, di ko alam paano */
  const [dishtype, setDishtype] = useState("");
  const [dishname, setDishname] = useState("");
  const [dishprice, setPrice] = useState("");

  

  return (
    <div
      className={`modal fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      
      <div
        className="modalset-container relative border border-gray-300 rounded-lg bg-white h-fit w-1/3"
        data-te-modal-body-ref
      >
        <div className="w-full h-fit p-5 bg-primary200 rounded-t-lg">
            <h1 className="font-heading font-semibold text-heading25 text-white text-center">New Dish Set</h1>
        </div>

        <div className="flex flex-col gap-5 p-5">
          <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
            <label for="dish-set">Set Name:</label>
            <input
              type="text"
              placeholder="Ex. Set J"
              /*onChange={(e) => {
                setUsername(e.target.value);
              }}*/
              className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)]"
              required
            />
          </div>
          <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
            <label for="dish-set">Package Type:</label>
            <select name="package" 
                      className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                      required>
            <option disabled selected hidden>Select Package Type for the Set</option>
            <option value="Budget">Budget</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Diamond">Diamond</option>
            <option value="Luxury">Luxury</option>
            <option value="DeluxeDebut">Deluxe Debut</option>
            </select>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex font-tbc font-medium text-title13">
                <button
                type="button"
                className="flex h-fit w-fit text-primary500 bg-white hover:text-white hover:bg-primary500 font-semibold px-5 py-3 rounded-xl border "
                >Add Dish</button>
            </div>

            <div className="flex gap-2 font-tbc font-medium text-title13">
              <input
                type="text"
                placeholder="Select Dish"
                /*onChange={(e) => {
                  setContact(e.target.value);
                }*/
                className="w-full border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)]"
                required
              />

              <button
                type="button"
                className="h-full w-1/3 text-primary500 bg-white hover:text-white hover:bg-gray hover:bg-opacity-30 font-semibold p-5 rounded-xl border ">
                  Delete Dish
              </button>
            </div>
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

export default AddSetModal;
