import React from "react";
import { useState } from "react";
import "../../css/pop.css"

//hello world!
function Appointment() {
  const [toggle, setToggle] = useState(1)

  function updateToggle(id){
    setToggle(id)
  }

  const [popup, setPop] = useState(false)

  const togglePop = () => {
    setPop(!popup)
  }

  if(popup){
    document.body.classList.add('active-pop')
  } else {
    document.body.classList.remove('active-pop')
  }

  return <div className="flex flex-col gap-8 p-8">

      {/** Pop-up */}
      {popup && (
        <div className="pop-screen">
          <div onClick={togglePop} className="overlay"></div>
          <div className="w-fit h-fit font-heading bg-white rounded-2xl pop-content">
            <div className="flex justify-between items-center px-10 py-5 font-bold text-heading36 bg-primary200 rounded-t-2xl">
              <h1 className="w-fit h-fit ">Online Meeting Details</h1>
              <button className="w-fit h-fit" onClick={togglePop}>X</button>
            </div>
            <div className="flex flex-col gap-2 px-10 py-5 font-semibold">
              <div className="flex justify-between items-center gap-5 w-full h-fit">
                <h1 className="w-1/3 font-tbc font-bold text-title24 text-black">Client Name:</h1>
                <h1 className="font-tbc text-title24 text-black w-2/3">Juan Dela Cruz</h1>
              </div>

              <div className="flex justify-between items-center gap-5 w-full h-fit">
                <h1 className="w-1/3 font-tbc font-bold text-title24 text-black">Date:</h1>
                <h1 className="font-tbc text-title24 text-black w-2/3">November 16, 2023</h1>
              </div>

              <div className="flex justify-between items-center gap-5 w-full h-fit">
                <h1 className="w-1/3 font-tbc font-bold text-title24 text-black">Time:</h1>
                <h1 className="font-tbc text-title24 text-black w-2/3">4:00 PM</h1>
              </div>

              <div className="flex justify-between items-center gap-5 w-full h-fit">
                <h1 className="w-1/3 font-tbc font-bold text-title24 text-black">Platform:</h1>
                <h1 className="font-tbc text-title24 text-black w-2/3">Google Meet</h1>
              </div>

              <div className="flex justify-between items-center gap-5 w-full h-fit">
                <h1 className="w-1/3 font-tbc font-bold text-title24 text-black">Meeting Link:</h1>
                <h1 className="font-tbc text-title24 text-black w-2/3">https://meet.google.com/dtf-eknt-gby</h1>
              </div>
            </div>
            <div className="w-full h-fit flex justify-end  items-center p-5">
              <button className="w-fit h-fit bg-secondary500 px-5 py-3 rounded-lg font-heading font-medium text-white">Edit Appointment</button>
            </div>
          </div>
        </div>
      )}
      
      {/** Calendar - Toggle 1 */}
      <div className={toggle === 1 ? "show-content" : "content"}>
        {/** Header of the appointment tab */}
        <div className="flex justify-between items-center gap-5 w-full h-fit">
          <div className="flex w-full gap-10 p-0.5 rounded-2xl border border-gray border-opacity-30 font-tbc text-title24">
            <div className={toggle === 1 ? "toggleon" : "toggleoff"}>
              <p className="w-fit h-fit" onClick={()=>updateToggle(1)}>Calendar</p>
            </div>
            <div className={toggle === 2 ? "toggleon" : "toggleoff"}>
              <p className="w-fit h-fit" onClick={()=>updateToggle(2)}>Food Tasting</p>
            </div>
            <div className={toggle === 3 ? "toggleon" : "toggleoff"}>
              <p className="w-fit h-fit" onClick={()=>updateToggle(3)}>Online Meetting</p>
            </div>
            <div className={toggle === 4 ? "toggleon" : "toggleoff"}>
              <p className="w-fit h-fit" onClick={()=>updateToggle(4)}>Event Day</p>
            </div>
          </div>

          {/*Filter Icon*/} 
          <div className="flex rounded-lg p-3 items-center bg-secondary100">
            <h1 className="font-bold">Filter</h1>
          </div>

          {/*Set Availibility Date*/} 
          <div className="flex justify-end items-center gap-5 w-fith-full">
            <button className="flex justify-center items-center w-fit h-fit px-5 py-3 rounded-xl font-heading font-semibold text-white bg-primary200">Export</button>
          </div>
        </div>

        {/** Secondary Header of appointment Tab */}
        <div className="flex justify-end items-center gap-5 w-full ">
          <div className="flex p-3 gap-5 font-tbc text-caption border border-opacity-30 rounded-lg">
            <h1 className="text-gray">Unavailable</h1>
            <h1 className=" text-green">Event Day</h1>
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

      {/** Food Tasting - Toggle 2 */}
      <div className={toggle === 2 ? "show-content" : "content"}>
        {/** Header of the appointment tab */}
        <div className="flex justify-between items-center gap-5 w-full h-fit">
          <div className="flex w-full gap-10 p-0.5 rounded-2xl border border-gray border-opacity-30 font-tbc text-title24">
            <div className={toggle === 1 ? "toggleon" : "toggleoff"}>
              <p className="w-fit h-fit" onClick={()=>updateToggle(1)}>Calendar</p>
            </div>
            <div className={toggle === 2 ? "toggleon" : "toggleoff"}>
              <p className="w-fit h-fit" onClick={()=>updateToggle(2)}>Food Tasting</p>
            </div>
            <div className={toggle === 3 ? "toggleon" : "toggleoff"}>
              <p className="w-fit h-fit" onClick={()=>updateToggle(3)}>Online Meetting</p>
            </div>
            <div className={toggle === 4 ? "toggleon" : "toggleoff"}>
              <p className="w-fit h-fit" onClick={()=>updateToggle(4)}>Event Day</p>
            </div>
          </div>

          {/*Filter Icon*/} 
          <div className="flex rounded-lg p-3 items-center bg-secondary100">
            <h1 className="font-bold">Filter</h1>
          </div>

          {/*Set Availibility Date*/} 
          <div className="flex justify-end items-center gap-5 w-fith-full">
            <button className="flex justify-center items-center w-fit h-fit px-5 py-3 rounded-xl font-heading font-semibold text-white bg-primary200">Export</button>
          </div>
      </div>

          <div className="flex flex-col">
            <table className="w-full h-fit rounded font-tbc text-black">
              {/** Table Header */}
              <tr className="flex justify-between w-full rounded-t  bg-secondary200">
                <th className="  w-full p-3 rounded-tl-xl">Client Name</th>
                <th className="  w-full p-3">Description</th>
                <th className="  w-full p-3">Food Tasting Date</th>
                <th className="  w-full p-3">Status</th>
                <th className="  w-full p-3">Action</th>
              </tr>

              {/** Table Row */}
              <tr className="flex justify-between items-center w-full h-fit border-b font-tbc font-medium text-title24 text-center">
                <td className="w-full p-3 text-black ">Juan Dela Cruz</td>
                <td className="  w-full p-3 text-black ">Carbonara, Chicken Parmessan, Beef Stroganoff</td>
                <td className="  w-full p-3 text-black ">November 14, 2023</td>
                <td className="  w-full p-3 text-black ">Ongoing</td>
                <td className="flex justify-evenly items-center w-full p-3 text-secondary300 underline font-bold cursor-pointer">
                  <button className="w-fit h-fit" onClick={()=>updateToggle(4)}>View</button>
                  <button className="w-fit h-fit" onClick={()=>updateToggle(4)}>Edit</button>
                </td>
              </tr>

              {/** Table Row */}
              <tr className="flex justify-between items-center w-full h-fit border-b font-tbc font-medium text-title24 text-center">
                <td className="w-full p-3 text-black ">Juan Dela Cruz</td>
                <td className="  w-full p-3 text-black ">Carbonara, Chicken Parmessan, Beef Stroganoff</td>
                <td className="  w-full p-3 text-black ">November 15, 2023</td>
                <td className="  w-full p-3 text-black ">Ongoing</td>
                <td className="flex justify-evenly items-center w-full p-3 text-secondary300 underline font-bold cursor-pointer">
                  <button className="w-fit h-fit" onClick={()=>updateToggle(4)}>View</button>
                  <button className="w-fit h-fit" onClick={()=>updateToggle(4)}>Edit</button>
                </td>
              </tr>

              {/** Table Row */}
              <tr className="flex justify-between items-center w-full h-fit border-b font-tbc font-medium text-title24 text-center">
                <td className="w-full p-3 text-black ">Juan Dela Cruz</td>
                <td className="  w-full p-3 text-black ">Carbonara, Chicken Parmessan, Beef Stroganoff</td>
                <td className="  w-full p-3 text-black ">November 15, 2023</td>
                <td className="  w-full p-3 text-black ">Ongoing</td>
                <td className="flex justify-evenly items-center w-full p-3 text-secondary300 underline font-bold cursor-pointer">
                  <button className="w-fit h-fit" onClick={()=>updateToggle(4)}>View</button>
                  <button className="w-fit h-fit" onClick={()=>updateToggle(4)}>Edit</button>
                </td>
              </tr>
            </table>
          </div>
      </div>

      {/** Online Meeting - Toggle 3 */} 
      <div className={toggle === 3 ? "show-content" : "content"}>
        {/** Header of the appointment tab */}
        <div className="flex justify-between items-center gap-5 w-full h-fit">
          <div className="flex w-full gap-10 p-0.5 rounded-2xl border border-gray border-opacity-30 font-tbc text-title24">
            <div className={toggle === 1 ? "toggleon" : "toggleoff"}>
              <p className="w-fit h-fit" onClick={()=>updateToggle(1)}>Calendar</p>
            </div>
            <div className={toggle === 2 ? "toggleon" : "toggleoff"}>
              <p className="w-fit h-fit" onClick={()=>updateToggle(2)}>Food Tasting</p>
            </div>
            <div className={toggle === 3 ? "toggleon" : "toggleoff"}>
              <p className="w-fit h-fit" onClick={()=>updateToggle(3)}>Online Meetting</p>
            </div>
            <div className={toggle === 4 ? "toggleon" : "toggleoff"}>
              <p className="w-fit h-fit" onClick={()=>updateToggle(4)}>Event Day</p>
            </div>
          </div>

          {/*Filter Icon*/} 
          <div className="flex rounded-lg p-3 items-center bg-secondary100">
            <h1 className="font-bold">Filter</h1>
          </div>

          {/*Set Availibility Date*/} 
          <div className="flex justify-end items-center gap-5 w-fith-full">
            <button className="flex justify-center items-center w-fit h-fit px-5 py-3 rounded-xl font-heading font-semibold text-white bg-primary200">Export</button>
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
                <button className="w-fit h-fit" onClick={togglePop}>View</button>
                <button className="w-fit h-fit" onClick={()=>updateToggle(4)}>Edit</button>
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
                <button className="w-fit h-fit" onClick={togglePop}>View</button>
                <button className="w-fit h-fit" onClick={()=>updateToggle(4)}>Edit</button>
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
                <button className="w-fit h-fit" onClick={togglePop}>View</button>
                <button className="w-fit h-fit" onClick={()=>updateToggle(4)}>Edit</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
  </div>
  {/** End of Main Readable Div */}
}

export default Appointment;
