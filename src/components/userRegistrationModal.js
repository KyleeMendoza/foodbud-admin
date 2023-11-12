import React, { useState } from "react";
import axios from "axios";
import "../css/modal.css";

const UserRegistrationModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [address, setAdress] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:9001/api/user/register",
        {
          client_name: username,
          client_address: address,
          client_contact: contact,
          client_email: email,
        }
      );

      if (response.data) {
        alert("User Created Successfully");
        setUsername("");
        setAdress("");
        setContact("");
        setEmail("");
        window.location.reload();

        // onClose();
      } else {
        alert("Error creating User");
      }
    } catch (error) {
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
        className="modal-container relative p-6 border border-gray-300 rounded-lg bg-white w-1/4"
        data-te-modal-body-ref
      >
        <div>
          <div className="my-4">
            <label for="recipient-name">Client Name:</label>
            <input
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="relative m-0 -mr-0.5 block w-full flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              required
            />
          </div>
          <div className="mb-3">
            <label for="recipient-name">Address:</label>
            <textarea
              onChange={(e) => {
                setAdress(e.target.value);
              }}
              className="relative m-0 -mr-0.5 block w-full flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              required
            />
          </div>
          <div className="mb-3">
            <label for="recipient-name">Contact:</label>
            <input
              type="text"
              onChange={(e) => {
                setContact(e.target.value);
              }}
              className="relative m-0 -mr-0.5 block w-full flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              required
            />
          </div>
          <div className="mb-3">
            <label for="recipient-name">Email:</label>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="relative m-0 -mr-0.5 block w-full flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded border border-blue-600"
          onClick={handleSubmit}
        >
          Register
        </button>
        <button
          type="button"
          className="btn btn-secondary bg-gray-400 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded border border-gray-500 mx-2"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UserRegistrationModal;
