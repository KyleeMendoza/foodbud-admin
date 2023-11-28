import React, { useState } from "react";
import "../../css/switchtabs.css";

function Transaction() {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  return (
    <div className="flex flex-col gap-8 p-8">
      {/** Transaction toggle 1 */}
      <div className={toggle === 1 ? "show-content" : "content"}>
        {/** Header of the appointment tab */}
        <div className="flex justify-between items-center gap-5 w-full h-fit">
          {/*Navigation Bar*/}
          <div className="flex w-full gap-10 p-0.5 rounded-2xl border border-gray border-opacity-30 font-tbc text-title24">
            <div className={toggle === 1 ? "toggleon" : "toggleoff"}>
              <p onClick={() => updateToggle(1)}>Transaction</p>
            </div>
            <div className={toggle === 2 ? "toggleon" : "toggleoff"}>
              <p onClick={() => updateToggle(2)}>Invoice</p>
            </div>
          </div>

          {/*Filter Icon*/}
          {/*<div className=" bg-zinc-400">
          <h1 className="p-2">Filter</h1>
        </div>*/}

          {/*Set Availibility Date*/}
          <div className="flex justify-end items-center gap-5 w-1/6 h-full">
            <button
              className="flex justify-center items-center w-full h-fit px-4 py-3 rounded-xl font-heading font-semibold text-white bg-secondary300 border hover:bg-gray hover:bg-opacity-10 hover:text-secondary300 hover:border hover:border-secondary300"
              onClick={() => updateToggle(3)}
            >
              Add Transaction +
            </button>
            {/*<button className="flex justify-center items-center w-fit h-fit px-5 py-3 rounded-xl font-heading font-semibold text-white bg-primary200">Export</button>*/}
          </div>
        </div>

        <div className="flex flex-col">
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
              <td
                className="  w-full p-3 text-secondary300 underline font-bold cursor-pointer"
                onClick={() => updateToggle(4)}
              >
                View
              </td>
            </tr>

            {/** Table Row */}
            <tr className="flex justify-between w-full h-fit border-b font-tbc font-medium text-title24 text-center">
              <td className="  w-full p-3 text-black ">23243</td>
              <td className="  w-full p-3 text-black ">Juan Dela Cruz</td>
              <td className="  w-full p-3 text-black ">39,000</td>
              <td className="  w-full p-3 text-black ">November 16, 2023</td>
              <td
                className="  w-full p-3 text-secondary300 underline font-bold  cursor-pointer"
                onClick={() => updateToggle(4)}
              >
                View
              </td>
            </tr>

            {/** Table Row */}
            <tr className="flex justify-between w-full h-fit border-b font-tbc font-medium text-title24 text-center">
              <td className="w-full p-3 text-black ">23244</td>
              <td className="  w-full p-3 text-black ">Juan Dela Cruz</td>
              <td className="  w-full p-3 text-black ">23,000</td>
              <td className="  w-full p-3 text-black ">November 20, 2023</td>
              <td
                className="w-full p-3 text-secondary300 underline font-bold cursor-pointer"
                onClick={() => updateToggle(4)}
              >
                View
              </td>
            </tr>
          </table>
        </div>
      </div>

      {/** Body - Invoice Table Toggle 2 */}
      <div className={toggle === 2 ? "show-content" : "content"}>
        {/** Header of the appointment tab */}
        <div className="flex justify-between items-center gap-5 w-full h-fit">
          {/*Navigation Bar*/}
          <div className="flex w-full gap-10 p-0.5 rounded-2xl border border-gray border-opacity-30 font-tbc text-title24">
            <div className={toggle === 1 ? "toggleon" : "toggleoff"}>
              <p onClick={() => updateToggle(1)}>Transaction</p>
            </div>
            <div className={toggle === 2 ? "toggleon" : "toggleoff"}>
              <p onClick={() => updateToggle(2)}>Invoice</p>
            </div>
          </div>

          {/*Filter Icon*/}
          {/*<div className=" bg-zinc-400">
              <h1 className="p-2">Filter</h1>
            </div>*/}

          {/*Set Availibility Date*/}
          <div className="flex justify-end items-center w-1/6 h-full">
            <button
              className="flex justify-center items-center w-full h-fit px-4 py-3 rounded-xl font-heading font-semibold text-white bg-secondary300 border hover:bg-gray hover:bg-opacity-10 hover:text-secondary300 hover:border hover:border-secondary300"
              onClick={() => updateToggle(5)}
            >
              Add Invoice +
            </button>
            {/*<button className="flex justify-center items-center w-fit h-fit px-5 py-3 rounded-xl font-heading font-semibold text-white bg-primary200">Export</button>*/}
          </div>
        </div>

        <div className={toggle === 2 ? "show-content" : "content"}>
          <table className="w-full h-fit rounded font-tbc text-black">
            {/** Table Header */}
            <tr className="flex justify-between w-full rounded-t  bg-secondary200">
              <th className="  w-full p-3 rounded-tl-xl">Invoice ID</th>
              <th className="  w-full p-3">Client Name</th>
              <th className="  w-full p-3">Amount Paid</th>
              <th className="  w-full p-3">Payment Date</th>
              <th className="  w-full p-3">Action</th>
            </tr>

            {/** Table Row */}
            <tr className="flex justify-between w-full h-fit border-b font-tbc font-medium text-title24 text-center">
              <td className="w-full p-3 text-black ">20001</td>
              <td className="  w-full p-3 text-black ">Juan Dela Cruz</td>
              <td className="  w-full p-3 text-black ">98,000</td>
              <td className="  w-full p-3 text-black ">November 13, 2023</td>
              <td
                onClick={() => updateToggle(6)}
                className="  w-full p-3 text-secondary300 underline font-bold cursor-pointer"
              >
                View
              </td>
            </tr>

            {/** Table Row */}
            <tr className="flex justify-between w-full h-fit border-b font-tbc font-medium text-title24 text-center">
              <td className="  w-full p-3 text-black ">20002</td>
              <td className="  w-full p-3 text-black ">Gabby Garcia</td>
              <td className="  w-full p-3 text-black ">102,000</td>
              <td className="  w-full p-3 text-black ">November 16, 2023</td>
              <td
                onClick={() => updateToggle(6)}
                className="  w-full p-3 text-secondary300 underline font-bold cursor-pointer"
              >
                View
              </td>
            </tr>

            {/** Table Row */}
            <tr className="flex justify-between w-full h-fit border-b font-tbc font-medium text-title24 text-center">
              <td className="w-full p-3 text-black ">20003</td>
              <td className="  w-full p-3 text-black ">Kylie Versoza</td>
              <td className="  w-full p-3 text-black ">80,000</td>
              <td className="  w-full p-3 text-black ">November 20, 2023</td>
              <td
                onClick={() => updateToggle(6)}
                className="  w-full p-3 text-secondary300 underline font-bold cursor-pointer"
              >
                View
              </td>
            </tr>
          </table>
        </div>
      </div>

      {/** Add Transaction Toggle 3 */}
      <div className={toggle === 3 ? "show-content" : "content"}>
        {/** Header of the appointment tab */}
        <div className="flex justify-between items-center gap-5 w-full h-fit">
          {/*Navigation Bar*/}
          <div className="flex w-full gap-10 p-0.5 rounded-2xl border border-gray border-opacity-30 font-tbc text-title24">
            <div className={toggle === 3 ? "toggleon" : "toggleoff"}>
              <p onClick={() => updateToggle(1)}>Transaction</p>
            </div>
            <div className={toggle === 2 ? "toggleon" : "toggleoff"}>
              <p onClick={() => updateToggle(2)}>Invoice</p>
            </div>
          </div>

          {/*Set Availibility Date*/}
          <div className="flex justify-end items-center gap-5 w-1/5 h-full">
            <button
              className="flex justify-center items-center w-full h-fit px-4 py-3 rounded-xl font-heading font-semibold text-white bg-secondary300 border hover:bg-gray hover:bg-opacity-10 hover:text-secondary300 hover:border hover:border-secondary300"
              onClick={() => updateToggle(1)}
            >
              Cancel Transaction +
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex items-center w-full h-fit">
            <h1 className=" font-heading font-bold text-heading14 text-secondary500">
              New Transaction:
            </h1>
          </div>

          {/** Main Body */}
          <div className="flex flex-col gap-5 w-full h-fit">
            {/** Form*/}
            <form className="flex flex-col gap-10 w-fit h-fit">
              {/** per line inputs */}
              <div className="flex flex-col gap-5">
                <div className="flex gap-11 w-fit ">
                  <div className="flex items-center w-[300px]">
                    <h1 className=" font-tbc font-bold text-title13 text-black">
                      Client ID:
                    </h1>
                  </div>
                  <input
                    type="type"
                    placeholder="Client Name na dropdown "
                    className="w-[350px] border border-gray border-opacity-30 rounded px-5 py-3 font-tbc font-bold text-title13 text-black"
                  />
                </div>

                {/** per line inputs */}
                <div className="flex gap-11 w-fit ">
                  <div className="flex items-center w-[300px]">
                    <h1 className=" font-tbc font-bold text-title13 text-black">
                      Client Name:
                    </h1>
                  </div>
                  <input
                    type="text"
                    placeholder="tapos auto client id"
                    className="w-[350px] border border-gray border-opacity-30 rounded px-5 py-3 font-tbc font-bold text-title13 text-black"
                  />
                </div>

                {/** per line inputs */}
                <div className="flex gap-11 w-fit ">
                  <div className="flex items-center w-[300px]">
                    <h1 className=" font-tbc font-bold text-title13 text-black">
                      Payment Description:
                    </h1>
                  </div>
                  <input
                    type="text"
                    placeholder="Input Payment Description"
                    className="w-[350px] border border-gray border-opacity-30 rounded px-5 py-3 font-tbc font-bold text-title13 text-black"
                  />
                </div>

                {/** per line inputs */}
                <div className="flex gap-11 w-fit ">
                  <div className="flex items-center w-[300px]">
                    <h1 className=" font-tbc font-bold text-title13 text-black">
                      Amount Paid:
                    </h1>
                  </div>
                  <input
                    type="text"
                    placeholder="Input Amount"
                    className="w-[350px] border border-gray border-opacity-30 rounded px-5 py-3 font-tbc font-bold text-title13 text-black"
                  />
                </div>

                {/** per line inputs */}
                <div className="flex gap-11 w-fit ">
                  <div className="flex items-center w-[300px]">
                    <h1 className=" font-tbc font-bold text-title13 text-black">
                      Date of Payment:
                    </h1>
                  </div>
                  <input
                    type="date"
                    className="w-[350px] border border-gray border-opacity-30 rounded px-5 py-3 font-tbc font-bold text-title13 text-black"
                  />
                </div>

                {/** per line inputs */}
                <div className="flex gap-11 w-fit ">
                  <div className="flex items-center w-[300px]">
                    <h1 className=" font-tbc font-bold text-title13 text-black">
                      Mode of Payment:
                    </h1>
                  </div>
                  <select className="w-[350px] border border-gray border-opacity-30 rounded px-5 py-3 font-tbc font-bold text-title13 text-black">
                    <option>Select Mode of Payment</option>
                    <option>Gcash</option>
                    <option>EastWest Bank</option>
                    <option>BDO</option>
                  </select>
                </div>

                {/** per line inputs */}
                <div className="flex gap-11 w-fit ">
                  <div className="flex items-center w-[300px]">
                    <h1 className=" font-tbc font-bold text-title13 text-black">
                      Proof of Payment:
                    </h1>
                  </div>
                  <input
                    type="file"
                    className="w-[350px] bg-white border border-gray border-opacity-30 rounded px-5 py-3 font-tbc font-bold text-title13 text-black"
                  />
                </div>
              </div>

              {/** Button Save */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className=" border-2 rounded-lg text-secondary500 hover:bg-secondary500 hover:text-white"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/** Add Transaction Toggle 4 */}
      <div className={toggle === 4 ? "show-content" : "content"}>
        {/** Header of the appointment tab */}
        <div className="flex justify-between items-center gap-5 w-full h-fit">
          {/*Navigation Bar*/}
          <div className="flex w-full gap-10 p-0.5 rounded-2xl border border-gray border-opacity-30 font-tbc text-title24">
            <div className={toggle === 4 ? "toggleon" : "toggleoff"}>
              <p onClick={() => updateToggle(1)}>Transaction</p>
            </div>
            <div className={toggle === 2 ? "toggleon" : "toggleoff"}>
              <p onClick={() => updateToggle(2)}>Invoice</p>
            </div>
          </div>

          {/*Set Availibility Date*/}
          <div className="flex justify-end items-center gap-5 w-1/6 h-full">
            <button
              className="flex justify-center items-center w-full h-fit px-4 py-3 rounded-xl font-heading font-semibold text-white bg-secondary300 border hover:bg-gray hover:bg-opacity-10 hover:text-secondary300 hover:border hover:border-secondary300"
              onClick={() => updateToggle(3)}
            >
              Add Transaction +
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex items-center w-full h-fit">
            <h1 className=" font-heading font-bold text-heading14 text-secondary500">
              View Transaction:
            </h1>
            <h2>
              Filled na sana ung data kapag viniew ung isang row from
              transaction
            </h2>
          </div>

          {/** Main Body */}
          <div className="flex flex-col gap-10 w-full h-fit">
            {/** Form*/}
            <form className="flex flex-col gap-10 w-fit h-fit">
              {/** per line inputs */}
              <div className="flex flex-col gap-5">
                <div className="flex gap-11 w-fit ">
                  <div className="flex items-center w-[300px]">
                    <h1 className=" font-tbc font-bold text-title13 text-black">
                      Client ID:
                    </h1>
                  </div>
                  <input
                    type="type"
                    placeholder="Client Name na dropdown "
                    className="w-[350px] border border-gray border-opacity-30 rounded px-5 py-3 font-tbc font-bold text-title13 text-black"
                  />
                </div>

                {/** per line inputs */}
                <div className="flex gap-11 w-fit ">
                  <div className="flex items-center w-[300px]">
                    <h1 className=" font-tbc font-bold text-title13 text-black">
                      Client Name:
                    </h1>
                  </div>
                  <input
                    type="text"
                    placeholder="tapos auto client id"
                    className="w-[350px] border border-gray border-opacity-30 rounded px-5 py-3 font-tbc font-bold text-title13 text-black"
                  />
                </div>

                {/** per line inputs */}
                <div className="flex gap-11 w-fit ">
                  <div className="flex items-center w-[300px]">
                    <h1 className=" font-tbc font-bold text-title13 text-black">
                      Payment Description:
                    </h1>
                  </div>
                  <input
                    type="text"
                    placeholder="Input Payment Description"
                    className="w-[350px] border border-gray border-opacity-30 rounded px-5 py-3 font-tbc font-bold text-title13 text-black"
                  />
                </div>

                {/** per line inputs */}
                <div className="flex gap-11 w-fit ">
                  <div className="flex items-center w-[300px]">
                    <h1 className=" font-tbc font-bold text-title13 text-black">
                      Amount Paid:
                    </h1>
                  </div>
                  <input
                    type="text"
                    placeholder="Input Amount"
                    className="w-[350px] border border-gray border-opacity-30 rounded px-5 py-3 font-tbc font-bold text-title13 text-black"
                  />
                </div>

                {/** per line inputs */}
                <div className="flex gap-11 w-fit ">
                  <div className="flex items-center w-[300px]">
                    <h1 className=" font-tbc font-bold text-title13 text-black">
                      Date of Payment:
                    </h1>
                  </div>
                  <input
                    type="date"
                    className="w-[350px] border border-gray border-opacity-30 rounded px-5 py-3 font-tbc font-bold text-title13 text-black"
                  />
                </div>

                {/** per line inputs */}
                <div className="flex gap-11 w-fit ">
                  <div className="flex items-center w-[300px]">
                    <h1 className=" font-tbc font-bold text-title13 text-black">
                      Mode of Payment:
                    </h1>
                  </div>
                  <select className="w-[350px] border border-gray border-opacity-30 rounded px-5 py-3 font-tbc font-bold text-title13 text-black">
                    <option>Select Mode of Payment</option>
                    <option>Gcash</option>
                    <option>EastWest Bank</option>
                    <option>BDO</option>
                  </select>
                </div>

                {/** per line inputs */}
                <div className="flex gap-11 w-fit ">
                  <div className="flex items-center w-[300px]">
                    <h1 className=" font-tbc font-bold text-title13 text-black">
                      Proof of Payment:
                    </h1>
                  </div>
                  <input
                    type="file"
                    className="w-[350px] bg-white border border-gray border-opacity-30 rounded px-5 py-3 font-tbc font-bold text-title13 text-black"
                  />
                </div>
              </div>
            </form>

            {/** Edit Save */}
            <div className="flex justify-start">
              <button
                onClick={() => updateToggle(3)}
                className=" border-2 rounded-xl text-primary500 hover:bg-primary500 hover:text-white"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/** Add Invoice Toggle 5 */}
      <div className={toggle === 5 ? "show-content" : "content"}>
        {/** Header of the appointment tab */}
        <div className="flex justify-between items-center gap-5 w-full h-fit">
          {/*Navigation Bar*/}
          <div className="flex w-full gap-10 p-0.5 rounded-2xl border border-gray border-opacity-30 font-tbc text-title24">
            <div className={toggle === 1 ? "toggleon" : "toggleoff"}>
              <p onClick={() => updateToggle(1)}>Transaction</p>
            </div>
            <div className={toggle === 5 ? "toggleon" : "toggleoff"}>
              <p onClick={() => updateToggle(2)}>Invoice</p>
            </div>
          </div>

          {/*Set Availibility Date*/}
          <div className="flex justify-end items-center gap-5 w-1/6 h-full">
            <button
              className="flex justify-center items-center w-full h-fit px-4 py-3 rounded-xl font-heading font-semibold text-white bg-secondary300 border hover:bg-gray hover:bg-opacity-10 hover:text-secondary300 hover:border hover:border-secondary300"
              onClick={() => updateToggle(2)}
            >
              Cancel Invoice +
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex items-center w-full h-fit">
            <h1 className=" font-heading font-bold text-heading14 text-secondary500">
              Invoice Form
            </h1>
          </div>

          {/** Main Body */}
          <div className="flex flex-col gap-5 w-full h-fit">
            {/** Form*/}
            <form className="flex flex-col gap-10 w-full h-fit">
              {/** per line inputs */}
              <div className="flex flex-col gap-5">
                <div className="flex gap-11 w-fit ">
                  <div className="flex items-center w-[300px]">
                    <h1 className=" font-tbc font-bold text-title13 text-black">
                      Invoice ID:
                    </h1>
                  </div>
                  <input
                    type="type"
                    placeholder="Autocreate sana"
                    className="w-[350px] border border-gray border-opacity-30 rounded px-5 py-3 font-tbc font-bold text-title13 text-black"
                  />
                </div>

                <div className="flex gap-11 w-fit ">
                  <div className="flex items-center w-[300px]">
                    <h1 className=" font-tbc font-bold text-title13 text-black">
                      Client ID:
                    </h1>
                  </div>
                  <input
                    type="type"
                    placeholder="Client Name na dropdown "
                    className="w-[350px] border border-gray border-opacity-30 rounded px-5 py-3 font-tbc font-bold text-title13 text-black"
                  />
                </div>

                {/** per line inputs */}
                <div className="flex gap-11 w-fit ">
                  <div className="flex items-center w-[300px]">
                    <h1 className=" font-tbc font-bold text-title13 text-black">
                      Client Name:
                    </h1>
                  </div>
                  <input
                    type="text"
                    placeholder="tapos auto client id"
                    className="w-[350px] border border-gray border-opacity-30 rounded px-5 py-3 font-tbc font-bold text-title13 text-black"
                  />
                </div>

                {/** per line inputs */}
                <div className="flex gap-11 w-fit ">
                  <div className="flex items-center w-[300px]">
                    <h1 className=" font-tbc font-bold text-title13 text-black">
                      Select Event
                    </h1>
                  </div>
                  <select className="w-[350px] border border-gray border-opacity-30 rounded px-5 py-3 font-tbc font-bold text-title13 text-black">
                    <option>Event sana na meron si client</option>
                    <option>Event 1 - Budget</option>
                    <option>Event 2 - Deluxe</option>
                    <option>Event 3 - Styling</option>
                  </select>
                </div>
              </div>

              <div className="flex w-full h-full justify-between items-center">
                <h1 className=" font-heading font-bold text-heading25">
                  Transaction Breakdown
                </h1>
                <button className="w-fit font-semibold px-5 rounded-lg text-white bg-primary500 font-tbc hover:text-primary500 hover:bg-gray hover:bg-opacity-10">
                  Add Transaction Row +
                </button>
              </div>

              <div>
                <table className="w-full h-fit rounded font-tbc text-black">
                  {/** Table Header */}
                  <tr className="flex justify-between w-full rounded-t  bg-secondary200">
                    <th className="  w-full p-3 rounded-tl-xl">Payment ID</th>
                    <th className="  w-full p-3">Description</th>
                    <th className="  w-full p-3">Amount</th>
                    <th className="  w-full p-3">Delete Row</th>
                  </tr>

                  {/** Table Row */}
                  <tr className="flex justify-between items-center w-full h-fit border-b font-tbc font-medium text-title24 text-center">
                    <td className="w-full p-3 text-black ">21212</td>
                    <td className="  w-full p-3 text-black ">
                      Input Description
                    </td>
                    <td className="  w-full p-3 text-black ">xx,000</td>
                    <td className="  w-full p-3 text-secondary300 underline font-bold ">
                      <button className=" text-center bg-gray bg-opacity-40 rounded-3xl text-white">
                        Delete
                      </button>
                    </td>
                  </tr>

                  {/** Table Row */}
                  <tr className="flex justify-between items-center w-full h-fit border-b font-tbc font-medium text-title24 text-center">
                    <td className="w-full p-3 text-black ">21212</td>
                    <td className="  w-full p-3 text-black ">
                      Input Description
                    </td>
                    <td className="  w-full p-3 text-black ">xx,000</td>
                    <td className="  w-full p-3 text-secondary300 underline font-bold ">
                      <button className=" text-center bg-gray bg-opacity-40 rounded-3xl text-white">
                        Delete
                      </button>
                    </td>
                  </tr>

                  {/** Table Row */}
                  <tr className="flex justify-between items-center w-full h-fit border-b font-tbc font-medium text-title24 text-center">
                    <td className="w-full p-3 text-black ">21212</td>
                    <td className="  w-full p-3 text-black ">
                      Input Description
                    </td>
                    <td className="  w-full p-3 text-black ">xx,000</td>
                    <td className="  w-full p-3 text-secondary300 underline font-bold ">
                      <button className=" text-center bg-gray bg-opacity-40 rounded-3xl text-white">
                        Delete
                      </button>
                    </td>
                  </tr>
                </table>
              </div>

              {/** Edit Save */}
              <div className="flex justify-end gap-10 font-tbc font-medium text-title13 ">
                <button
                  type="submit"
                  className="w-fit px-5 border-2 rounded-lg text-secondary500 hover:bg-secondary500 hover:text-white"
                >
                  Save Invoice
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/** Body - Invoice Table Toggle 6 */}
      <div className={toggle === 6 ? "show-content" : "content"}>
        {/** Header of the appointment tab */}
        <div className="flex justify-between items-center gap-5 w-full h-fit">
          {/*Navigation Bar*/}
          <div className="flex w-full gap-10 p-0.5 rounded-2xl border border-gray border-opacity-30 font-tbc text-title24">
            <div className={toggle === 1 ? "toggleon" : "toggleoff"}>
              <p onClick={() => updateToggle(1)}>Transaction</p>
            </div>
            <div className={toggle === 6 ? "toggleon" : "toggleoff"}>
              <p onClick={() => updateToggle(2)}>Invoice</p>
            </div>
          </div>

          {/*Set Availibility Date*/}
          <div className="flex justify-end items-center gap-5 w-1/6 h-full">
            <button
              className="flex justify-center items-center w-full h-fit px-4 py-3 rounded-xl font-heading font-semibold text-white bg-secondary300 border hover:bg-gray hover:bg-opacity-10 hover:text-secondary300 hover:border hover:border-secondary300"
              onClick={() => updateToggle(2)}
            >
              Cancel Invoice +
            </button>
          </div>
        </div>

        <div className={toggle === 6 ? "show-content" : "content"}>
          <div className="flex items-center w-full h-fit">
            <h1 className=" font-heading font-bold text-heading14 text-secondary500">
              invoice #####
            </h1>
          </div>

          <div className="flex items-center w-full h-fit">
            <h1 className="font-heading font-bold text-title13 text-black">
              Package Type
            </h1>
          </div>

          {/** Center Breakdown */}
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center border-b border-opacity-30 w-full h-fit">
              <h1 className="font-tbc font-bold text-title24 text-black">
                Reservation Fee
              </h1>
              <h1 className="font-tbc text-title24 text-black">5,000</h1>
            </div>

            <div className="flex justify-between items-center border-b border-opacity-30 w-full h-fit">
              <h1 className="font-tbc font-bold text-title24 text-black">
                150 Pax
              </h1>
              <h1 className="font-tbc text-title24 text-black">67,000</h1>
            </div>

            <div className="flex justify-between items-center border-b border-opacity-30 w-full h-fit">
              <h1 className="font-tbc font-bold text-title24 text-black">
                Photobooth
              </h1>
              <h1 className="font-tbc text-title24 text-black">3,500</h1>
            </div>

            <div className="flex justify-between items-center border-b border-opacity-30 w-full h-fit">
              <h1 className="font-tbc font-bold text-title24 text-black">
                Lights and Sounds
              </h1>
              <h1 className="font-tbc text-title24 text-black">5,000</h1>
            </div>

            <div className="flex justify-between items-center border-b border-opacity-30 w-full h-fit">
              <h1 className="font-tbc font-bold text-title24 text-black">
                Host Mafician
              </h1>
              <h1 className="font-tbc text-title24 text-black">5,500</h1>
            </div>

            {/** Total computation */}
            <div className="flex justify-between items-center border-b border-opacity-30 w-full h-fit">
              <h1 className="font-tbc font-bold text-title24 text-black">
                Total
              </h1>
              <h1 className="font-tbc font-bold text-title24 text-black">
                PHP 86,000
              </h1>
            </div>
          </div>

          <div className="flex justify-end items-center gap-10 font-tbc font-medium">
            <button
              onClick={() => updateToggle(7)}
              className=" text-secondary500 border-2 rounded-xl hover:bg-secondary500 hover:text-white"
            >
              Edit Invoice
            </button>
          </div>
        </div>
      </div>

      {/** Add Transaction Toggle 7 */}
      <div className={toggle === 7 ? "show-content" : "content"}>
        {/** Header of the appointment tab */}
        <div className="flex justify-between items-center gap-5 w-full h-fit">
          {/*Navigation Bar*/}
          <div className="flex w-full gap-10 p-0.5 rounded-2xl border border-gray border-opacity-30 font-tbc text-title24">
            <div className={toggle === 1 ? "toggleon" : "toggleoff"}>
              <p onClick={() => updateToggle(1)}>Transaction</p>
            </div>
            <div className={toggle === 5 ? "toggleon" : "toggleoff"}>
              <p onClick={() => updateToggle(2)}>Invoice</p>
            </div>
          </div>

          {/*Set Availibility Date*/}
          <div className="flex justify-end items-center gap-5 w-1/6 h-full">
            <button
              className="flex justify-center items-center w-full h-fit px-4 py-3 rounded-xl font-heading font-semibold text-white bg-secondary300 border hover:bg-gray hover:bg-opacity-10 hover:text-secondary300 hover:border hover:border-secondary300"
              onClick={() => updateToggle(2)}
            >
              Cancel Invoice +
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex items-center w-full h-fit">
            <h1 className=" font-heading font-bold text-heading14 text-secondary500">
              Edit Invoice Form
            </h1>
          </div>

          {/** Main Body */}
          <div className="flex flex-col gap-5 w-full h-fit">
            {/** Form*/}
            <form className="flex flex-col gap-10 w-full h-fit">
              {/** per line inputs */}
              <div className="flex flex-col gap-5">
                <div className="flex gap-11 w-fit ">
                  <div className="flex items-center w-[300px]">
                    <h1 className=" font-tbc font-bold text-title13 text-black">
                      Invoice ID:
                    </h1>
                  </div>
                  <input
                    type="type"
                    placeholder="Auto call kung ano ung eedit"
                    className="w-[350px] border border-gray border-opacity-30 rounded px-5 py-3 font-tbc font-bold text-title13 text-black"
                  />
                </div>

                <div className="flex gap-11 w-fit ">
                  <div className="flex items-center w-[300px]">
                    <h1 className=" font-tbc font-bold text-title13 text-black">
                      Client ID:
                    </h1>
                  </div>
                  <input
                    type="type"
                    placeholder="Auto call kung ano ung eedit"
                    className="w-[350px] border border-gray border-opacity-30 rounded px-5 py-3 font-tbc font-bold text-title13 text-black"
                  />
                </div>

                {/** per line inputs */}
                <div className="flex gap-11 w-fit ">
                  <div className="flex items-center w-[300px]">
                    <h1 className=" font-tbc font-bold text-title13 text-black">
                      Client Name:
                    </h1>
                  </div>
                  <input
                    type="text"
                    placeholder="Auto call kung ano ung eedit"
                    className="w-[350px] border border-gray border-opacity-30 rounded px-5 py-3 font-tbc font-bold text-title13 text-black"
                  />
                </div>

                {/** per line inputs */}
                <div className="flex gap-11 w-fit ">
                  <div className="flex items-center w-[300px]">
                    <h1 className=" font-tbc font-bold text-title13 text-black">
                      Select Event
                    </h1>
                  </div>
                  <select className="w-[350px] border border-gray border-opacity-30 rounded px-5 py-3 font-tbc font-bold text-title13 text-black">
                    <option>Event sana na meron si client</option>
                    <option>Event 1 - Budget</option>
                    <option>Event 2 - Deluxe</option>
                    <option>Event 3 - Styling</option>
                  </select>
                </div>
              </div>

              <div className="flex w-full h-full justify-between items-center">
                <h1 className=" font-heading font-bold text-heading25">
                  Transaction Breakdown
                </h1>
                <button className="w-fit px-5 rounded-xl text-white bg-primary500 font-tbc hover:bg-gray hover:bg-opacity-10 hover:text-primary500">
                  Add Transaction Row +
                </button>
              </div>

              <div>
                <table className="w-full h-fit rounded font-tbc text-black">
                  {/** Table Header */}
                  <tr className="flex justify-between w-full rounded-t  bg-secondary200">
                    <th className="  w-full p-3 rounded-tl-xl">Payment ID</th>
                    <th className="  w-full p-3">Description</th>
                    <th className="  w-full p-3">Amount</th>
                    <th className="  w-full p-3">Delete Row</th>
                  </tr>

                  {/** Table Row */}
                  <tr className="flex justify-between items-center w-full h-fit border-b font-tbc font-medium text-title24 text-center">
                    <td className="w-full p-3 text-black ">21212</td>
                    <td className="  w-full p-3 text-black ">
                      Input Description
                    </td>
                    <td className="  w-full p-3 text-black ">xx,000</td>
                    <td className="  w-full p-3 text-secondary300 underline font-bold ">
                      <button className=" text-center bg-gray bg-opacity-40 rounded-3xl text-white">
                        Delete
                      </button>
                    </td>
                  </tr>

                  {/** Table Row */}
                  <tr className="flex justify-between items-center w-full h-fit border-b font-tbc font-medium text-title24 text-center">
                    <td className="w-full p-3 text-black ">21212</td>
                    <td className="  w-full p-3 text-black ">
                      Input Description
                    </td>
                    <td className="  w-full p-3 text-black ">xx,000</td>
                    <td className="  w-full p-3 text-secondary300 underline font-bold ">
                      <button className=" text-center bg-gray bg-opacity-40 rounded-3xl text-white">
                        Delete
                      </button>
                    </td>
                  </tr>

                  {/** Table Row */}
                  <tr className="flex justify-between items-center w-full h-fit border-b font-tbc font-medium text-title24 text-center">
                    <td className="w-full p-3 text-black ">21212</td>
                    <td className="  w-full p-3 text-black ">
                      Input Description
                    </td>
                    <td className="  w-full p-3 text-black ">xx,000</td>
                    <td className="  w-full p-3 text-secondary300 underline font-bold ">
                      <button className=" text-center bg-gray bg-opacity-40 rounded-3xl text-white">
                        Delete
                      </button>
                    </td>
                  </tr>
                </table>
              </div>

              {/** Edit Save */}
              <div className="flex justify-end gap-10 font-tbc font-medium text-title13 ">
                <button className="w-fit px-5 border-2 rounded-xl text-secondary500 hover:bg-secondary500 hover:text-white">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
