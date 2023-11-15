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