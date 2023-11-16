import React from "react";
import { useState } from "react";
import AddPackageModal from "../../components/addPackagemodal";

function Package() {

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
   
    {/** Body - Package List - Toggle 1 */}
    <div className={toggle === 1 ? "show-content" : "content"}>
      {/** Header of the appointment tab */}
      <div className="flex justify-between items-center gap-5 w-full h-fit">
        {/*Navigation Bar*/} 
        <div className="flex w-full gap-10 p-0.5 rounded-xl border border-gray border-opacity-30 font-tbc text-title24">
          <div className={toggle === 1 ? "toggleon" : "toggleoff"}>
            <p onClick={()=>updateToggle(1)}>Packages</p>
          </div>
        </div>

        {/*Set Availibility Date*/} 
        <div className="flex justify-end items-center gap-5 w-1/6 h-full">
          <button className="flex justify-center items-center w-full h-fit px-4 py-3 rounded-xl font-heading font-semibold text-white bg-secondary300 border hover:bg-gray hover:bg-opacity-10 hover:text-secondary300 hover:border hover:border-secondary300" onClick={openModal}>Add Package +</button>
        </div>
      </div>
        
      <div className="flex flex-col">
        <table className="w-full h-fit rounded font-tbc text-black">

          {/** Table Header */}
          <tr className="flex justify-between w-full rounded-t  bg-secondary200">
            <th className="  w-full p-3 rounded-tl-xl">Package ID</th>
            <th className="  w-full p-3 ">Package Name</th>
            <th className="  w-full p-3">Package Type</th>
            <th className="  w-full p-3">Description</th>
            <th className="  w-full p-3">Pax</th>
            <th className="  w-full p-3">Price</th>
            <th className="  w-full p-3">Action</th>
          </tr>

          {/** Table Row */}
          <tr className="flex justify-between w-full h-fit border-b font-tbc font-medium text-title24 text-center">
            <td className=  "w-full p-3 text-black ">#13245</td>
            <td className=  "w-full p-3 text-black ">Budget Package</td>
            <td className="  w-full p-3 text-black ">Styling</td>
            <td className="  w-full p-3 text-black ">Mermaid Theme, not too much light</td>
            <td className="  w-full p-3 text-black ">100</td>
            <td className="  w-full p-3 text-black ">20,000</td>
            <td className="  w-full p-3 text-secondary300 underline font-bold cursor-pointer" onClick={()=>updateToggle(4)}>
              <button>View</button>
            </td>
          </tr>

          <tr className="flex justify-between w-full h-fit border-b font-tbc font-medium text-title24 text-center">
            <td className=  "w-full p-3 text-black ">#13245</td>
            <td className=  "w-full p-3 text-black ">Budget Package</td>
            <td className="  w-full p-3 text-black ">Styling</td>
            <td className="  w-full p-3 text-black ">Mermaid Theme, not too much light</td>
            <td className="  w-full p-3 text-black ">100</td>
            <td className="  w-full p-3 text-black ">20,000</td>
            <td className="  w-full p-3 text-secondary300 underline font-bold cursor-pointer" onClick={()=>updateToggle(4)}>
              <button>View</button>
            </td>
          </tr>
        </table>
      </div>
      <AddPackageModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
</div>;

  
}


export default Package;
