import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/modal.css";
import { toast } from "react-toastify";

const AddPackageModal = ({ isOpen, onClose }) => {
  const [packageName, setPackageName] = useState("");
  const [paxCount, setPaxCount] = useState("");
  const [packageRate, setPackageRate] = useState("");

  const handleAddDish = async () => {
    try {
      const response = await axios.post("https://3.27.163.46/api/add/package", {
        package_name: packageName,
        pax_count: paxCount,
        rate: packageRate,
      });

      console.log(response);

      if (response.data) {
        toast.success("Successfully added!");
        onClose();
      }
    } catch (error) {
      console.error("Error adding dish:", error);
      toast.warning("Package already exist");
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
        className="modal-container relative border border-gray-300 rounded-lg bg-white w-1/4"
        data-te-modal-body-ref
      >
        <div className="w-full h-fit p-5 bg-primary200 rounded-t-lg">
          <h1 className="font-heading font-semibold text-heading25 text-white text-center">
            Create Package
          </h1>
        </div>

        <div className="flex flex-col gap-5 p-5">
          <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
            <label for="dish">Package Name:</label>
            <input
              type="text"
              onChange={(e) => {
                setPackageName(e.target.value);
                console.log(e.target.value);
              }}
              className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
              required
            />
          </div>
          <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
            <label for="dish">Number of Pax:</label>
            <textarea
              onChange={(e) => {
                setPaxCount(e.target.value);
              }}
              className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
              required
            />
          </div>
          <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
            <label for="dish">Package Rate:</label>
            <input
              type="text"
              onChange={(e) => {
                setPackageRate(e.target.value);
              }}
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
            onClick={handleAddDish}
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

export default AddPackageModal;
