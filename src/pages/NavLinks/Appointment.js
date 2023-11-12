import React from "react";

//hello world!
function Appointment() {
  return <div className="flex flex-col gap-3 w-full h-fit px-5">
      {/** Header of the appointment tab */}
      <div className="flex justify-between items-center gap-5 w-full h-fit">
       {/*Navigation Bar*/} 
        <div className="flex w-full gap-10 p-0.5 rounded-2xl border-y border-gray border-opacity-20 font-tbc text-title24">
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
        <div className=" bg-zinc-400">
          <h1 className="p-2">Filter</h1>
        </div>

        {/*Set Availibility Date*/} 
        <div className="flex justify-center items-center w-1/4 h-full">
          <button className="flex justify-center items-center w-full h-fit px-4 py-3 rounded-xl font-heading font-semibold text-white bg-secondary300">Set Availibility +</button>
        </div>
      </div>

      {/** Secondary Header of appointment Tab */}
      <div className="flex justify-end items-center gap-5 w-full ">
        <div className="flex py-5 gap-5 font-tbc text-caption">
          <h1 className="text-gray">Unavailable</h1>
          <h1 className=" text-secondary300">Food Tasting</h1>
          <h1 className=" text-primary200">Online Meeting</h1>
        </div>

        <div className="flex gap-5 text-white font-tbc font-semibold text-title24">
          <form className="flex w-fit bg-primary200 p-2 rounded">
            <select className="bg-primary200 px-5" id="Month" name="Month">
              <option value="January">Jan</option>
              <option value="February">Feb</option>
              <option value="March">Mar</option>
              <option value="April">Apr</option>
              <option value="May">May</option>
              <option value="June">Jun</option>
              <option value="July">Jul</option>
              <option value="August">Aug</option>
              <option value="September">Sep</option>
              <option value="October">Oct</option>
              <option value="November">Nov</option>
              <option value="December">Dec</option>
            </select>
        </form>

        <form className="flex w-fit bg-primary200 p-2 rounded">
            <select className=" bg-primary200 px-5" id="Year" name="Year">
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
        </form>
      </div>
        
    </div>

    {/** Calendar of Appointment Tab */}
    <div className="flex w-full h-full">
      <table className="w-full h-full font-tbc">
        {/** Days of the Week */}
        <tr className="flex justify-between w-full rounded-t-xl border border-gray bg-secondary200">
          <th className="border-x border-gray w-full p-3 rounded-tl-xl">Sunday</th>
          <th className="border-x border-gray w-full p-3">Monday</th>
          <th className="border-x border-gray w-full p-3">Tuesday</th>
          <th className="border-x border-gray w-full p-3">Wednesday</th>
          <th className="border-x border-gray w-full p-3">Thursday</th>
          <th className="border-x border-gray w-full p-3">Friday</th>
          <th className="border-x border-gray w-full p-3 rounded-tr-xl">Saturday</th>
        </tr>

        {/** 1st Week */}
        <tr className=" flex justify-between w-full h-[90px] border-y border-gray text-right">
          <td className="border-x border-l-2 border-gray w-full p-3 text-primary300 ">1</td>
          <td className="border-x border-gray w-full p-3 text-primary300 ">2</td>
          <td className="border-x border-gray w-full p-3 text-primary300 ">3</td>
          <td className="border-x border-gray w-full p-3 text-primary300 ">4</td>
          <td className="border-x border-gray w-full p-3 text-primary300 ">5</td>
          <td className="border-x border-gray w-full p-3 text-primary300 ">6 </td>
          <td className="border-x border-r-2 border-gray w-full p-3 text-primary300 ">7</td>
        </tr>

        {/** 2nd Week */}
        <tr className=" flex justify-between w-full h-[90px] border-y border-gray text-right">
          <td className="border-x border-l-2 border-gray w-full p-3 text-primary300 ">1</td>
          <td className="border-x border-gray w-full p-3 text-primary300 ">2</td>
          <td className="border-x border-gray w-full p-3 text-primary300 ">3</td>
          <td className="border-x border-gray w-full p-3 text-primary300 ">4</td>
          <td className="border-x border-gray w-full p-3 text-primary300 ">5</td>
          <td className="border-x border-gray w-full p-3 text-primary300 ">6 </td>
          <td className="border-x border-r-2 border-gray w-full p-3 text-primary300 ">7</td>
        </tr>

        {/** 3rd Week */}
        <tr className=" flex justify-between w-full h-[90px] border-y border-gray text-right">
          <td className="border-x border-l-2 border-gray w-full p-3 text-primary300 ">1</td>
          <td className="border-x border-gray w-full p-3 text-primary300 ">2</td>
          <td className="border-x border-gray w-full p-3 text-primary300 ">3</td>
          <td className="border-x border-gray w-full p-3 text-primary300 ">4</td>
          <td className="border-x border-gray w-full p-3 text-primary300 ">5</td>
          <td className="border-x border-gray w-full p-3 text-primary300 ">6 </td>
          <td className="border-x border-r-2 border-gray w-full p-3 text-primary300 ">7</td>
        </tr>

        {/** 4th Week */}
        <tr className=" flex justify-between w-full h-[90px] border-y border-gray text-right">
          <td className="border-x border-l-2 border-gray w-full p-3 text-primary300 ">1</td>
          <td className="border-x border-gray w-full p-3 text-primary300 ">2</td>
          <td className="border-x border-gray w-full p-3 text-primary300 ">3</td>
          <td className="border-x border-gray w-full p-3 text-primary300 ">4</td>
          <td className="border-x border-gray w-full p-3 text-primary300 ">5</td>
          <td className="border-x border-gray w-full p-3 text-primary300 ">6 </td>
          <td className="border-x border-r-2 border-gray w-full p-3 text-primary300 ">7</td>
        </tr>

        {/** 5th Week */}
        <tr className=" flex justify-between w-full h-[90px] border-y border-gray text-right">
          <td className="border-x border-l-2 border-gray w-full p-3 text-primary300 ">1</td>
          <td className="border-x border-gray w-full p-3 text-primary300 ">2</td>
          <td className="border-x border-gray w-full p-3 text-primary300 ">3</td>
          <td className="border-x border-gray w-full p-3 text-primary300 ">4</td>
          <td className="border-x border-gray w-full p-3 text-primary300 ">5</td>
          <td className="border-x border-gray w-full p-3 text-primary300 ">6 </td>
          <td className="border-x border-r-2 border-gray w-full p-3 text-primary300 ">7</td>
        </tr>
      </table>
    </div>
  </div>
  {/** End of Main Readable Div */}
}

export default Appointment;
