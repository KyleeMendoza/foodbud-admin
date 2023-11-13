import React from "react";

function Transaction() {
  return <div className="flex flex-col gap-8 p-8">
    {/** Header of the appointment tab */}
    <div className="flex justify-between items-center gap-5 w-full h-fit">
       {/*Navigation Bar*/} 
        <div className="flex w-full gap-10 p-0.5 rounded-2xl border border-gray border-opacity-30 font-tbc text-title24">
          <div className="flex bg-primary200 text-white100 px-4 py-3 rounded-2xl">
            <p>Transaction</p>
          </div>
          <div className="flex px-4 py-3 rounded-2xl">
            <p>Invoice</p>
          </div>
        </div>

        {/*Filter Icon*/} 
        <div className=" bg-zinc-400">
          <h1 className="p-2">Filter</h1>
        </div>

        {/*Set Availibility Date*/} 
        <div className="flex justify-center items-center gap-5 w-1/3 h-full">
          <button className="flex justify-center items-center w-fit h-fit px-4 py-3 rounded-xl font-heading font-semibold text-white bg-secondary300">Add Transaction +</button>
          <button className="flex justify-center items-center w-fit h-fit px-5 py-3 rounded-xl font-heading font-semibold text-white bg-primary200">Export</button>
        </div>
      </div>

      {/** Body - Transaction Table */}
      <div className="flex w-full h-screen">
        <table className="w-full h-fit rounded font-tbc text-black">
          {/** Table Header */}
          <tr className="flex justify-between w-full rounded-t  bg-secondary200">
            <th className="  w-full p-3 rounded-tl-xl">Payment ID</th>
            <th className="  w-full p-3">Client Name</th>
            <th className="  w-full p-3">Amount Paid</th>
            <th className="  w-full p-3">Payment Date</th>
            <th className="  w-full p-3">Action</th>
          </tr>

          {/** Table Row */}
          <tr className="flex justify-between w-full h-fit border-b font-tbc font-medium text-title24 text-center">
            <td className="w-full p-3 text-black ">23242</td>
            <td className="  w-full p-3 text-black ">Juan Dela Cruz</td>
            <td className="  w-full p-3 text-black ">36,000</td>
            <td className="  w-full p-3 text-black ">November 13, 2023</td>
            <td className="  w-full p-3 text-secondary300 underline font-bold ">Edit</td>
          </tr>

           {/** Table Row */}
           <tr className="flex justify-between w-full h-fit border-b font-tbc font-medium text-title24 text-center">
            <td className="  w-full p-3 text-black ">23243</td>
            <td className="  w-full p-3 text-black ">Juan Dela Cruz</td>
            <td className="  w-full p-3 text-black ">39,000</td>
            <td className="  w-full p-3 text-black ">November 16, 2023</td>
            <td className="  w-full p-3 text-secondary300 underline font-bold ">Edit</td>
          </tr>

           {/** Table Row */}
           <tr className="flex justify-between w-full h-fit border-b font-tbc font-medium text-title24 text-center">
            <td className="w-full p-3 text-black ">23244</td>
            <td className="  w-full p-3 text-black ">Juan Dela Cruz</td>
            <td className="  w-full p-3 text-black ">23,000</td>
            <td className="  w-full p-3 text-black ">November 20, 2023</td>
            <td className="  w-full p-3 text-secondary300 underline font-bold ">Edit</td>
          </tr>
        </table>
      </div>
  </div>;
}

export default Transaction;
 