import React from "react";

//hello world!
function Appointment() {
  return <div className="flex flex-col bg-green-200 w-full h-screen">
      <div className="flex justify-between items-center gap- border border-black w-full h-fit">
       {/*Navigation Bar*/} 
        <div className="flex w-full gap-10 p-0.5 rounded-2xl border border-gray font-tbc">
          <div className="flex bg-primary200 text-white100 px-4 py-3 rounded-2xl">
            <p>Calendar</p>
          </div>
          <div className="flex px-4 py-3 rounded-2xl">
            <p>Food Tasting</p>
          </div>
          <div className="flex px-4 py-3 rounded-2xl">
            <p>Online Meeting</p>
          </div>
        </div>

        {/*Filter Icon*/} 
        <div className="">
          Filter
        </div>

        {/*Set Availibility Date*/} 
        <div className="flex justify-center items-center w-full h-fit">
          <button className="flex justify-center items-center w-fit h-fit px-4 py-3 rounded-xl text-white bg-secondary300">Set Available Date +</button>
        </div>
      </div>
  </div>


}

export default Appointment;
