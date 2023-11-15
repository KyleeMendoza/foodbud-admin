import React from "react";
import { useState } from "react";
import AddEmployee from "../../components/addEmployee";

function Employees() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [toggle, setToggle] = useState(1)

  function updateToggle(id){
    setToggle(id)
  }

  return <div className="flex flex-col gap-8 p-8">
   
    {/** Body - User Management Tab - Toggle 1 */}
    <div className={toggle === 1 ? "show-content" : "content"}>
      {/** Header of the appointment tab */}
      <div className="flex justify-between items-center gap-5 w-full h-fit">
        {/*Navigation Bar*/} 
        <div className="flex w-full gap-10 p-0.5 rounded-xl border border-gray border-opacity-30 font-tbc text-title24">
          <div className={toggle === 1 ? "toggleon" : "toggleoff"}>
            <p onClick={()=>updateToggle(1)}>User Management</p>
          </div>
          <div className={toggle === 2 ? "toggleon" : "toggleoff"}>
            <p onClick={()=>updateToggle(2)}>Access Rights</p>
          </div>
        </div>

        {/* Add Employee */} 
        <div className="flex justify-end items-center gap-5 w-1/6 h-full">
          <button className="flex justify-center items-center w-full h-fit px-4 py-3 rounded-xl font-heading font-semibold text-white bg-secondary300 border hover:bg-gray hover:bg-opacity-10 hover:text-secondary300 hover:border hover:border-secondary300" onClick={openModal}>Add Employee +</button>
        </div>
      </div>
        
      <div className="flex flex-col">
        <table className="w-full h-fit rounded font-tbc text-black">
          {/** Table Header */}
          <tr className="flex justify-between w-full rounded-t  bg-secondary200">
            <th className="  w-full p-3 rounded-tl-xl">Employee Name</th>
            <th className="  w-full p-3">Role / Position</th>
            <th className="  w-full p-3">Email</th>
            <th className="  w-full p-3">Action</th>
          </tr>

          {/** Table Row */}
          <tr className="flex justify-between w-full h-fit border-b font-tbc font-medium text-title24 text-center">
            <td className="w-full p-3 text-black ">John-Erica Florin</td>
            <td className="  w-full p-3 text-black ">Administrator</td>
            <td className="  w-full p-3 text-black ">johnericaf@gmail.com</td>
            <td className="  w-full p-3 text-secondary300 underline font-bold cursor-pointer" onClick={()=>updateToggle(4)}>View</td>
          </tr>

            {/** Table Row */}
            <tr className="flex justify-between w-full h-fit border-b font-tbc font-medium text-title24 text-center">
            <td className="w-full p-3 text-black ">Rocel-Loyd Gaspacho</td>
            <td className="  w-full p-3 text-black ">Chat Support</td>
            <td className="  w-full p-3 text-black ">RLgaspacho@gmail.com</td>
            <td className="  w-full p-3 text-secondary300 underline font-bold cursor-pointer" onClick={()=>updateToggle(4)}>View</td>
          </tr>

            {/** Table Row */}
            <tr className="flex justify-between w-full h-fit border-b font-tbc font-medium text-title24 text-center">
            <td className="w-full p-3 text-black ">Reiner Braun</td>
            <td className="  w-full p-3 text-black ">System Administrator</td>
            <td className="  w-full p-3 text-black ">rbmarley@gmail.com</td>
            <td className="  w-full p-3 text-secondary300 underline font-bold cursor-pointer" onClick={()=>updateToggle(4)}>View</td>
          </tr>
        </table>
      </div>

      <AddEmployee isOpen={isModalOpen} onClose={closeModal} />
    </div>

    {/** Body - Access Right Tab - Toggle 2 */}
    <div className={toggle === 2 ? "show-content" : "content"}>
      {/** Header of the appointment tab */}
      <div className="flex justify-between items-center gap-5 w-full h-fit">
        {/*Navigation Bar*/} 
        <div className="flex w-full gap-10 p-0.5 rounded-xl border border-gray border-opacity-30 font-tbc text-title24">
          <div className={toggle === 1 ? "toggleon" : "toggleoff"}>
            <p onClick={()=>updateToggle(1)}>User Management</p>
          </div>
          <div className={toggle === 2 ? "toggleon" : "toggleoff"}>
            <p onClick={()=>updateToggle(2)}>Access Rights</p>
          </div>
        </div>

        {/*Add Access*/} 
        <div className="flex justify-end items-center gap-5 w-1/6 h-full">
          <button className="flex justify-center items-center w-full h-fit px-4 py-3 rounded-xl font-heading font-semibold text-white bg-secondary300 border hover:bg-gray hover:bg-opacity-10 hover:text-secondary300 hover:border hover:border-secondary300" onClick={()=>updateToggle(3)}>Add Access +</button>
        </div>
      </div>
        
      <div className="flex flex-col">
        <table className="w-full h-fit rounded font-tbc text-black">
          {/** Table Header */}
          <tr className="flex justify-between w-full rounded-t  bg-secondary200">
            <th className="  w-full p-3 rounded-tl-xl">Role</th>
            <th className="  w-full p-3">Access</th>
            <th className="  w-full p-3">Number of Employees</th>
            <th className="  w-full p-3">Action</th>
          </tr>

          {/** Table Row */}
          <tr className="flex justify-between w-full h-fit border-b font-tbc font-medium text-title24 text-center">
            <td className="w-full p-3 text-black ">Admin</td>
            <td className="  w-full p-3 text-black ">All Pages</td>
            <td className="  w-full p-3 text-black ">1</td>
            <td className="flex justify-evenly w-full p-3 text-secondary300 underline font-bold cursor-pointer">
              <p onClick={()=>updateToggle(4)}>Edit</p>
              <p onClick={()=>updateToggle(4)}>Delete</p>
            </td>
          </tr>

          {/** Table Row */}
          <tr className="flex justify-between w-full h-fit border-b font-tbc font-medium text-title24 text-center">
            <td className="w-full p-3 text-black ">Chat Support</td>
            <td className="  w-full p-3 text-black ">Transactions, Appointments, Accounts</td>
            <td className="  w-full p-3 text-black ">1</td>
            <td className="flex justify-evenly w-full p-3 text-secondary300 underline font-bold cursor-pointer">
              <p onClick={()=>updateToggle(4)}>Edit</p>
              <p onClick={()=>updateToggle(4)}>Delete</p>
            </td>
          </tr>

          {/** Table Row */}
          <tr className="flex justify-between w-full h-fit border-b font-tbc font-medium text-title24 text-center">
            <td className="w-full p-3 text-black ">System Administrator</td>
            <td className="  w-full p-3 text-black ">Back-End, Front-End</td>
            <td className="  w-full p-3 text-black ">1</td>
            <td className="flex justify-evenly w-full p-3 text-secondary300 underline font-bold cursor-pointer">
              <p onClick={()=>updateToggle(4)}>Edit</p>
              <p onClick={()=>updateToggle(4)}>Delete</p>
            </td>
          </tr>
        </table>
      </div>
  </div>

    {/** Add Access Right - Toggle 3 */}
    <div className={toggle === 3 ? "show-content" : "content"}>
      {/** Header of the appointment tab */}
      <div className="flex justify-between items-center gap-5 w-full h-fit">
        {/*Navigation Bar*/} 
        <div className="flex w-full gap-10 p-0.5 rounded-xl border border-gray border-opacity-30 font-tbc text-title24">
          <div className={toggle === 1 ? "toggleon" : "toggleoff"}>
            <p onClick={()=>updateToggle(1)}>User Management</p>
          </div>
          <div className={toggle === 3 ? "toggleon" : "toggleoff"}>
            <p onClick={()=>updateToggle(2)}>Access Rights</p>
          </div>
        </div>

        {/*Add Access*/} 
        <div className="flex justify-end items-center gap-5 w-1/6 h-full">
          <button className="flex justify-center items-center w-full h-fit px-4 py-3 rounded-xl font-heading font-semibold text-white bg-secondary300 border hover:bg-gray hover:bg-opacity-10 hover:text-secondary300 hover:border hover:border-secondary300" onClick={()=>updateToggle(2)}>Cancel Access +</button>
        </div>
      </div>
    </div>
  </div>;
}

export default Employees;
