import React from "react";
import { useState } from "react";
import AddDishModal from "../../components/addDishModal";
import AddSetModal from "../../components/addSetModal";

function Dish() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [issetdishModalOpen, setdishIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };

  const opensetDishModal = () => {
    setdishIsModalOpen(true);
  };

  const closesetdishModal = () => {
    setdishIsModalOpen(false);
  };

  const [toggle, setToggle] = useState(2);

  function updateToggle(id) {
    setToggle(id);
  }

  return <div className="p-8">
    {/** Dish Set Toggle 1 */}
    <div className={toggle === 1 ? "show-content" : "content"}>
      <div className="flex justify-between items-center gap-5 w-full h-fit">
        <div className="flex w-full gap-10 p-0.5 rounded-2xl border border-gray border-opacity-30 font-tbc text-title24">
          <div className={toggle === 1 ? "toggleon" : "toggleoff"}>
            <p className="w-fit h-fit" onClick={() => updateToggle(1)}>
              Dish Set
            </p>
          </div>
          <div className={toggle === 2 ? "toggleon" : "toggleoff"}>
            <p className="w-fit h-fit" onClick={() => updateToggle(2)}>
              Dish List
            </p>
          </div>
        </div>

        {/*Filter Icon*/}
        {/*<div className="flex rounded-lg p-3 items-center bg-secondary100">
          <h1 className="font-bold">Filter</h1>
        </div>*/}

        {/** Add Dish Set*/}
        <div className="flex justify-end items-center gap-5 w-1/6 h-full">
        <button className="flex justify-center items-center w-fit h-fit px-4 py-3 rounded-xl font-heading font-semibold text-white bg-secondary300 border hover:bg-gray hover:bg-opacity-10 hover:text-secondary300 hover:border hover:border-secondary300" onClick={opensetDishModal}>
            Add Dish Set +
          </button>
        </div>
      </div>

      <h1>Hello, Admin! Dish Set ito.</h1>

      <div className="flex flex-col">
          <table className="w-full h-fit rounded font-tbc text-black">
            {/** Table Header */}
            <tr className="flex justify-between w-full rounded-t  bg-secondary200">
              <th className="  w-full p-3 rounded-tl-xl">Meeting ID</th>
              <th className="  w-full p-3">Client Name</th>
              <th className="  w-full p-3">Date</th>
              <th className="  w-full p-3">Time</th>
              <th className="  w-full p-3">Platform</th>
              <th className="  w-full p-3">Action</th>
            </tr>

            {/** Table Row */}
            <tr className="flex justify-between items-center w-full h-fit border-b font-tbc font-medium text-title24 text-center">
              <td className="  w-full p-3 text-black ">OM001</td>
              <td className="w-full p-3 text-black ">Juan Dela Cruz</td>
              <td className="w-full p-3 text-black ">November 16, 2023</td>
              <td className="w-full p-3 text-black ">4:00 PM</td>
              <td className="  w-full p-3 text-black ">Google Meet</td>
              <td className="flex justify-evenly items-center w-full p-3 text-secondary300 underline font-bold cursor-pointer">
                <button className="w-fit h-fit">
                  View
                </button>
                <button className="w-fit h-fit" onClick={() => updateToggle(4)}>
                  Edit
                </button>
              </td>
            </tr>

            {/** Table Row */}
            <tr className="flex justify-between items-center w-full h-fit border-b font-tbc font-medium text-title24 text-center">
              <td className="  w-full p-3 text-black ">OM002</td>
              <td className="w-full p-3 text-black ">Gabby Garcia</td>
              <td className="w-full p-3 text-black ">November 16, 2023</td>
              <td className="w-full p-3 text-black ">5:00 PM</td>
              <td className="  w-full p-3 text-black ">Zoom Meeting</td>
              <td className="flex justify-evenly items-center w-full p-3 text-secondary300 underline font-bold cursor-pointer">
                <button className="w-fit h-fit">
                  View
                </button>
                <button className="w-fit h-fit" onClick={() => updateToggle(4)}>
                  Edit
                </button>
              </td>
            </tr>

            {/** Table Row */}
            <tr className="flex justify-between items-center w-full h-fit border-b font-tbc font-medium text-title24 text-center">
              <td className="  w-full p-3 text-black ">OM003</td>
              <td className="w-full p-3 text-black ">Manny Pacquiao</td>
              <td className="w-full p-3 text-black ">November 16, 2023</td>
              <td className="w-full p-3 text-black ">1:00 PM</td>
              <td className="  w-full p-3 text-black ">Google Meet</td>
              <td className="flex justify-evenly items-center w-full p-3 text-secondary300 underline font-bold cursor-pointer">
                <button className="w-fit h-fit">
                  View
                </button>
                <button className="w-fit h-fit" onClick={() => updateToggle(4)}>
                  Edit
                </button>
              </td>
            </tr>
          </table>
        </div>
        <AddSetModal isOpen={issetdishModalOpen} onClose={closesetdishModal} />
    </div>

    {/** Dish List - Toggle 2 */}
    <div className={toggle === 2 ? "show-content" : "content"}>
        {/** Header of the appointment tab */}
        <div className="flex justify-between items-center gap-5 w-full h-fit">
          <div className="flex w-full gap-10 p-0.5 rounded-2xl border border-gray border-opacity-30 font-tbc text-title24">
            <div className={toggle === 1 ? "toggleon" : "toggleoff"}>
              <p className="w-fit h-fit" onClick={() => updateToggle(1)}>
                Dish Set
              </p>
            </div>
            <div className={toggle === 2 ? "toggleon" : "toggleoff"}>
              <p className="w-fit h-fit" onClick={() => updateToggle(2)}>
                Dish List
              </p>
            </div>
          </div>

          {/*Filter Icon*/}
          {/*<div className="flex rounded-lg p-3 items-center bg-secondary100">
            <h1 className="font-bold">Filter</h1>
          </div>

          {/** Add Dish */}
          <div className="flex justify-end items-center gap-5 w-1/6 h-full">
          <button className="flex justify-center items-center w-fit h-fit px-4 py-3 rounded-xl font-heading font-semibold text-white bg-secondary300 border hover:bg-gray hover:bg-opacity-10 hover:text-secondary300 hover:border hover:border-secondary300" onClick={openModal}>
              Add Dish +
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <table className="w-full h-fit rounded font-tbc text-black">
            {/** Table Header */}
            <tr className="flex justify-between w-full rounded-t  bg-secondary200">
              <th className="  w-full p-3 rounded-tl-xl">Meeting ID</th>
              <th className="  w-full p-3">Client Name</th>
              <th className="  w-full p-3">Date</th>
              <th className="  w-full p-3">Time</th>
              <th className="  w-full p-3">Platform</th>
              <th className="  w-full p-3">Action</th>
            </tr>

            {/** Table Row */}
            <tr className="flex justify-between items-center w-full h-fit border-b font-tbc font-medium text-title24 text-center">
              <td className="  w-full p-3 text-black ">OM001</td>
              <td className="w-full p-3 text-black ">Juan Dela Cruz</td>
              <td className="w-full p-3 text-black ">November 16, 2023</td>
              <td className="w-full p-3 text-black ">4:00 PM</td>
              <td className="  w-full p-3 text-black ">Google Meet</td>
              <td className="flex justify-evenly items-center w-full p-3 text-secondary300 underline font-bold cursor-pointer">
                <button className="w-fit h-fit">
                  View
                </button>
                <button className="w-fit h-fit" onClick={() => updateToggle(4)}>
                  Edit
                </button>
              </td>
            </tr>

            {/** Table Row */}
            <tr className="flex justify-between items-center w-full h-fit border-b font-tbc font-medium text-title24 text-center">
              <td className="  w-full p-3 text-black ">OM002</td>
              <td className="w-full p-3 text-black ">Gabby Garcia</td>
              <td className="w-full p-3 text-black ">November 16, 2023</td>
              <td className="w-full p-3 text-black ">5:00 PM</td>
              <td className="  w-full p-3 text-black ">Zoom Meeting</td>
              <td className="flex justify-evenly items-center w-full p-3 text-secondary300 underline font-bold cursor-pointer">
                <button className="w-fit h-fit">
                  View
                </button>
                <button className="w-fit h-fit" onClick={() => updateToggle(4)}>
                  Edit
                </button>
              </td>
            </tr>

            {/** Table Row */}
            <tr className="flex justify-between items-center w-full h-fit border-b font-tbc font-medium text-title24 text-center">
              <td className="  w-full p-3 text-black ">OM003</td>
              <td className="w-full p-3 text-black ">Manny Pacquiao</td>
              <td className="w-full p-3 text-black ">November 16, 2023</td>
              <td className="w-full p-3 text-black ">1:00 PM</td>
              <td className="  w-full p-3 text-black ">Google Meet</td>
              <td className="flex justify-evenly items-center w-full p-3 text-secondary300 underline font-bold cursor-pointer">
                <button className="w-fit h-fit">
                  View
                </button>
                <button className="w-fit h-fit" onClick={() => updateToggle(4)}>
                  Edit
                </button>
              </td>
            </tr>
          </table>
        </div>

        <AddDishModal isOpen={isModalOpen} onClose={closeModal} />
      </div>

      
  </div>;
}

export default Dish;
