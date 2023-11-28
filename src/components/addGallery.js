import React, { useState } from "react";
import axios from "axios";
import "../css/modal.css";

const AddGallery = ({ isOpen, onClose }) => {
  // Add Image Button

  const [package_type, setPackageType] = useState("");
  const [event_type, setEventType] = useState("");
  const [theme, setTheme] = useState("");
  const [celebrant_gender, setCelebrantGender] = useState("");
  const [celebrant_age, setCelebrantAge] = useState("");
  const [image_file, setImageFile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:9000/api/add/gallery",
        {
          package_type: package_type,
          event_type: event_type,
          theme: theme,
          celebrant_gender: celebrant_gender,
          celebrant_age: celebrant_age,
          image: image_file,
        }
      );

      if (response.data) {
        alert("Image Uploaded Successfully");
        setPackageType("");
        setEventType("");
        setTheme("");
        setCelebrantGender("");
        setCelebrantAge("");
        setImageFile("");
        window.location.reload();

        // onClose();
      } else {
        alert("Error Uploading image");
      }
    } catch (error) {
      console.log(error);
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
          <h1 className="font-heading font-semibold text-heading25 text-white text-center">
            Add Image
          </h1>
        </div>

        <div className="flex flex-col w-fit gap-5 p-5">
          <div className="flex gap-10 w-fit">
            {/* Set Package Type */}
            <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
              <label htmlFor="dish">Package Type:</label>
              <input
                type="text"
                placeholder="Enter Package Type"
                onChange={(e) => {
                  setPackageType(e.target.value);
                }}
                className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                required
              />
            </div>

            {/* Set Event Type */}
            <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
              <label htmlFor="dish">Event Type:</label>
              <select
                name="employee"
                id="classic"
                onChange={(e) => {
                  setEventType(e.target.value);
                }}
                className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                required
              >
                <option disabled selected hidden>
                  Select Event Type
                </option>
                <option value="Kids Party">Kids Party</option>
                <option value="Adult Party">Adult Party</option>
                <option value="Religious Ceremony">Religious Ceremony</option>
                <option value="Corporate Event">Corporate Event</option>
                <option value="Debut">Debut</option>
              </select>
            </div>
          </div>

          {/* Set Theme */}
          <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
            <label htmlFor="dish">Theme:</label>
            <input
              type="text"
              onChange={(e) => {
                setTheme(e.target.value);
              }}
              className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
              required
            />
          </div>

          {/* Set Celebrant Gender */}
          <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
            <label htmlFor="dish">Celebrant Gender:</label>
            <select
              name="employee"
              id="classic"
              onChange={(e) => {
                setCelebrantGender(e.target.value);
              }}
              className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
              required
            >
              <option disabled selected hidden>
                Select Gender
              </option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>

          {/* Set Celebrant Age */}
          <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
            <label htmlFor="dish">Celebrant Age:</label>
            <input
              type="number"
              placeholder="Enter Celebrant Age"
              onChange={(e) => {
                setCelebrantAge(e.target.value);
              }}
              className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
              required
            />
          </div>

          {/* Set Image na mismo */}
          <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
            <label htmlFor="dish">Insert Image Source Link:</label>
            <input
              type="text"
              placeholder="Insert Image Source Link"
              onChange={(e) => {
                setImageFile(e.target.value);
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
            onClick={handleSubmit}
          >
            Upload Image
          </button>
          <button
            type="button"
            className="border rounded-xl font-semibold text-primary500 hover:text-white hover:bg-primary500 px-5 py-3 w-fit h-fit"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddGallery;
