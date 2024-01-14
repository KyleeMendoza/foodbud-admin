import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import "../../css/switchtabs.css";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import WmGallery from "../../components/wmGallery";
import AddGallery from "../../components/addGallery";
import wmContactUs from "../../components/wmContactUs";

function Website() {
  // Modal for add image
  const [modal, setModal] = useState(false);
  const [toggle, setToggle] = useState(1);

  // Open Add Gallery Pop-up
  const openModal = () => {
    setModal(true);
  };

  // Close Add Gallery Pop-up
  const closeModal = () => {
    setModal(false);
  };

  // Toggle Tabs
  function updateToggle(id) {
    setToggle(id);
  }

  return (
    <div className="flex flex-col gap-8 p-8">
      <div className={toggle === 1 ? "show-content" : "content"}>
        {/** Header of the appointment tab */}
        <div className="flex justify-between items-center gap-5 w-full h-fit">
          {/*Navigation Bar*/}
          <div className="flex w-full gap-10 p-0.5 rounded-xl border border-gray border-opacity-30 font-tbc text-title24">
            <div className={toggle === 1 ? "toggleon" : "toggleoff"}>
              <p onClick={() => updateToggle(1)}>Gallery Management</p>
            </div>

            <div className={toggle === 2 ? "toggleon" : "toggleoff"}>
              <p onClick={() => updateToggle(2)}>Package Management</p>
            </div>

            <div className={toggle === 3 ? "toggleon" : "toggleoff"}>
              <p onClick={() => updateToggle(3)}>Contact Us Management</p>
            </div>
          </div>

          {/* Add Employee */}
          <div className="flex justify-end items-center gap-5 w-1/6 h-full">
            <button
              className="flex justify-center items-center w-full h-fit px-4 py-3 rounded-xl font-heading font-semibold text-white bg-secondary300 border hover:bg-gray hover:bg-opacity-10 hover:text-secondary300 hover:border hover:border-secondary300"
              onClick={openModal}
            >
              Add Image +
            </button>
          </div>
        </div>

        <WmGallery />
        <AddGallery isOpen={modal} onClose={closeModal} />

        <div className={toggle === 3 ? "show-content" : "content"}></div>
      </div>
    </div>
  );
}

export default Website;
