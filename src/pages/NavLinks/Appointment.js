import React from "react";
import { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CalendarComponent from "../../components/calendar";
import axios from "axios";
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import "../../css/pop.css";

const VISIBLE_FIELDS = ["name", "dishes", "date", "status"];

const COLUMN_LABELS = {
  name: "NAME",
  dishes: "DISHES",
  date: "DATE",
  status: "STATUS",
};

const VISIBLE_FIELDS2 = ["id", "email", "date", "time", "meeting_link"];

const COLUMN_LABELS2 = {
  id: "MEETING ID",
  email: "EMAIL",
  date: "DATE",
  time: "TIME",
  meeting_link: "LINK",
};

//hello world!
function Appointment() {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(1);
  const [modal, setModal] = useState(false);
  const [rowData, setRowData] = useState([]);
  const [rowData2, setRowData2] = useState([]);
  const [occupied, setOccupied] = useState([]);
  const [meetingData, setMeetingData] = useState([]);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [meeting_link, setMeeting_Link] = useState("");
  const [ids, setId] = useState(0);
  const [note, setNote] = useState("");
  const API_ENDPOINT = "http://3.27.163.46:9001/api/foodtasting/data";
  const API_ENDPOINT2 = "http://3.27.163.46:9001/api/meeting/events";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT2);
        // console.log("response:", response);
        const meeting = await response.json();
        //console.log(meeting);
        setMeetingData(meeting);
        // setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleNoteClick = async (id) => {
    try {
      const response = await axios.get(
        `http://3.27.163.46:9001/api/meeting/specific?id=${id}`
      );
      // console.log(response.data.fetchMeetings.notes)
      setNote(response.data.fetchMeetings.notes);
      setModal2(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUploadLink = async () => {
    try {
      const response = await axios.post(
        `http://3.27.163.46:9001/api/meeting/update?id=${ids}`,
        {
          meeting_link: meeting_link,
        }
      );
      if (response.status === 200) {
        alert("Meeting Link Inserted!");
        setModal3(false);
      } else {
        alert("Failed to Insert Link !");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        console.log("response:", response);
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSeeMoreClick = async (event_id) => {
    try {
      const response = await axios.get(
        `http://3.27.163.46:9001/api/foodtasting/data-get?eventId=${event_id}`
      );
      console.log(response.data[0]);
      setRowData(response.data[0]);
      setModal(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleCloseModal = () => {
    setModal(false);
    setModal2(false);
    setModal3(false);
  };

  const handleOpenModal = (id) => {
    setModal3(true);
    setId(id);
  };

  // FOR MEETING FETCH DATA
  const columns2 = [
    ...VISIBLE_FIELDS2.map((field) => ({
      field,
      headerClassName:
        "bg-secondary200 font-heading font-semibold text-title13",
      cellClassName: "text-title24",
      headerName: COLUMN_LABELS2[field],
      flex: 1,

      renderCell: (params) => {
        if (field === "date") {
          if (params.value == null) {
            return null;
          }

          // Format the date
          const formattedDate = new Date(params.value).toLocaleDateString();

          return formattedDate;
        }
      },
    })),

    {
      field: "actions",
      headerName: "Actions",
      headerClassName:
        "bg-secondary200 font-heading border font-semibold text-title13",
      cellClassName: "text-title24 font-tbc border",
      sortable: false,
      width: 250,
      renderCell: (params) => (
        <div className="flex gap-4 font-tbc">
          <p
            className="hover:text-secondary500 w-fit px-5 border-2 py-2 font-bold underline text-secondary300 rounded-lg text-title24 cursor-pointer"
            onClick={() => handleNoteClick(params.row.id)}
          >
            Note
          </p>
          <p
            className="hover:text-secondary500 w-fit px-5 py-2 font-bold underline text-secondary300 rounded-lg text-title24 border-2 cursor-pointer"
            onClick={() => handleOpenModal(params.row.id)}
          >
            Insert Link
          </p>
        </div>
      ),
    },
  ];

  // FOR FOOD TASTING FETCH DATA
  const columns = [
    ...VISIBLE_FIELDS.map((field) => ({
      field,
      headerClassName:
        "bg-secondary200 font-heading font-semibold text-title13",
      cellClassName: "text-title24",
      headerName: COLUMN_LABELS[field],
      flex: 1,
      renderCell: (params) => {
        if (field === "dishes") {
          const dishes = params.row[field];

          // Add null check to ensure dishes is not null or undefined
          // if(!dishes) {
          // return null}

          return (
            <div style={{ whiteSpace: "pre-line" }}>
              {Object.keys(dishes).map(
                (dishKey, index) =>
                  dishKey !== "event_id" &&
                  dishes[dishKey] && (
                    <React.Fragment key={index}>
                      {dishes[dishKey]}
                      {index < Object.keys(dishes).length - 1 && " "}
                    </React.Fragment>
                  )
              )}
            </div>
          );
        } else if (field === "date") {
          // Check if the date is null or undefined
          if (params.value == null) {
            return null;
          }

          // Convert input date to a JavaScript Date object
          const inputDate = new Date(params.value);

          // Format the date
          const formattedDate = inputDate.toLocaleDateString();

          // Check if the date is less than the current date
          const isPastDate = inputDate < new Date();

          return (
            <span style={{ color: isPastDate ? "red" : "inherit" }}>
              {formattedDate}
            </span>
          );
        } else if (field === "status") {
          // Check if the date is null or undefined
          if (params.row.date == null) {
            return "Up Coming";
          }

          // Convert input date to a JavaScript Date object
          const inputDate = new Date(params.row.date);

          // Check if the date is less than the current date
          const isPastDate = inputDate < new Date();

          // Set the status based on the date
          const status = isPastDate
            ? "DONE"
            : inputDate.toDateString() === new Date().toDateString()
            ? "TODAY"
            : "Up Coming";

          return status;
        } else {
          return params.value;
        }
      },
    })),

    {
      field: "actions",
      headerName: "Actions",
      headerClassName: "font-heading text-title13 bg-secondary200",
      sortable: false,
      renderCell: (params) => (
        <IconButton
          onClick={() => handleSeeMoreClick(params.row.event_Id)}
          style={{ color: "gray", width: "auto", alignItems: "center" }}
        >
          <VisibilityIcon />
        </IconButton>
      ),
    },
  ];

  function updateToggle(id) {
    setToggle(id);
  }

  const handleDataClick = (data) => {
    setOccupied(data);
  };

  const getItemColorClass = (type) => {
    switch (type) {
      case "Event Day":
        return "text-green text-xl";
      case "Food Tasting":
        return "text-secondary300 text-xl";
      case "Online Meeting":
        return "text-primary200 text-xl";
      default:
        return "text-black text-xl"; // You can set a default color or adjust as needed
    }
  };

  return (
    <div className="flex flex-col gap-8 p-8">
      {/** Calendar - Toggle 1 */}
      <div className={toggle === 1 ? "show-content" : "content"}>
        {/** Header of the appointment tab */}
        <div className="flex justify-between items-center gap-5 w-full h-fit">
          <div className="flex w-full gap-10 p-0.5 rounded-2xl border border-gray border-opacity-30 font-tbc text-title24">
            <div className={toggle === 1 ? "toggleon" : "toggleoff"}>
              <p className="w-fit h-fit" onClick={() => updateToggle(1)}>
                Calendar
              </p>
            </div>
            <div className={toggle === 2 ? "toggleon" : "toggleoff"}>
              <p className="w-fit h-fit" onClick={() => updateToggle(2)}>
                Food Tasting
              </p>
            </div>
            <div className={toggle === 3 ? "toggleon" : "toggleoff"}>
              <p className="w-fit h-fit" onClick={() => updateToggle(3)}>
                Online Meetting
              </p>
            </div>
          </div>

          {/*Filter Icon*/}
          {/*<div className="flex rounded-lg p-3 items-center bg-secondary100">
            <h1 className="font-bold">Filter</h1>
            </div>

          {/*Set Availibility Date*/}
          <div className="flex justify-end items-center gap-5 w-1/5 h-full">
            <button className="flex justify-center items-center w-full h-fit px-4 py-3 rounded-xl font-heading font-semibold text-white bg-secondary300 border hover:bg-gray hover:bg-opacity-10 hover:text-secondary300 hover:border hover:border-secondary300">
              Set Available Date +
            </button>
          </div>
        </div>
        {/* EDIT FROM THIS!! */}
        {/** Secondary Header of appointment Tab */}
        <div className="flex">
          <div className="flex flex-col items-center gap-5 w-full w-[40%]">
            <div className="flex p-3 gap-5 font-tbc text-caption border border-opacity-30 rounded-lg">
              <h1 className="text-gray text-lg">Unavailable</h1>
              <h1 className="text-green text-lg">Event Day</h1>
              <h1 className="text-secondary300 text-lg">Food Tasting</h1>
              <h1 className="text-primary200 text-lg">Online Meeting</h1>
            </div>
            {/** Calendar of Appointment Tab */}
            <div className="flex items-center justify-center">
              <CalendarComponent onDataClick={handleDataClick} />
            </div>
          </div>
          <div className="border-2 w-[60%] h-[40rem]">
            <h2>APPOINTMENTS TODO! </h2>
            <ul>
              {occupied.map((item, index) => (
                <li key={index} className={getItemColorClass(item.type)}>
                  {item.type}
                  <br />
                  Occupied Time: {item.time}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* UP TO THIS!! */}
      </div>

      {/** Food Tasting - Toggle 2 */}
      <div className={toggle === 2 ? "show-content" : "content"}>
        {/** Header of the appointment tab */}
        <div className="flex justify-between items-center gap-5 w-full h-fit">
          <div className="flex w-full gap-10 p-0.5 rounded-2xl border border-gray border-opacity-30 font-tbc text-title24">
            <div className={toggle === 1 ? "toggleon" : "toggleoff"}>
              <p className="w-fit h-fit" onClick={() => updateToggle(1)}>
                Calendar
              </p>
            </div>
            <div className={toggle === 2 ? "toggleon" : "toggleoff"}>
              <p className="w-fit h-fit" onClick={() => updateToggle(2)}>
                Food Tasting
              </p>
            </div>
            <div className={toggle === 3 ? "toggleon" : "toggleoff"}>
              <p className="w-fit h-fit" onClick={() => updateToggle(3)}>
                Online Meetting
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <DataGrid
            className="text-lg bg-white shadow-md"
            slots={{
              toolbar: GridToolbar,
            }}
            pageSize={10}
            rows={data}
            height={500}
            columns={columns}
            rowsPerPageOptions={[5, 10, 15]} // Set the available options
            slotProps={{ toolbar: { showQuickFilter: true } }}
            component={{ Toolbar: GridToolbar }}
          />
        </div>

        <Dialog open={modal} onClose={handleCloseModal} className="w-full">
          <div className="flex flex-col gap-5 w-fit">
            <DialogTitle className="w-full overflow-hidden bg-primary200">
              <h1 className="font-heading font-bold text-heading14">
                Food Tasting Details
              </h1>
            </DialogTitle>
            <DialogContent className="flex flex-col gap-3 w-fit ">
              <div className=" flex flex-col gap-3 w-fit">
                <div className="flex gap-5 font-tbc text-title13 border-b">
                  <strong className="w-[200px]">Event ID:</strong>{" "}
                  <p className="w-fit font-medium ">{rowData.event_Id}</p>
                </div>

                <div className="flex gap-5 font-tbc text-title13 border-b">
                  <strong className="w-[200px]">Client Name:</strong>{" "}
                  <p className="w-fit font-medium ">{rowData.name}</p>
                </div>

                <div className="flex gap-5 font-tbc text-title13 border-b">
                  <strong className="w-[200px]">Address:</strong>{" "}
                  <p className="w-fit font-medium ">{rowData.address}</p>
                </div>

                <div className="flex gap-5 font-tbc text-title13 border-b">
                  <strong className="w-[250px]">Address:</strong>{" "}
                  <p className="w-fit font-medium ">{rowData.google_pin}</p>
                </div>

                <div className="flex gap-5 font-tbc text-title13 border-b">
                  <strong className="w-[200px]">Contact:</strong>{" "}
                  <p className="w-fit font-medium ">{rowData.contact}</p>
                </div>

                <div className="flex gap-5 font-tbc text-title13 border-b">
                  <strong className="w-[200px]">FT Date:</strong>{" "}
                  <p className="w-fit font-medium ">
                    {rowData.date != null
                      ? new Date(rowData.date).toLocaleDateString()
                      : "N/A"}
                  </p>
                </div>

                <div className="flex gap-5 font-tbc text-title13 border-b">
                  <strong className="w-[200px]">Status:</strong>{" "}
                  <p className="w-fit font-medium ">{rowData.status}</p>
                </div>
              </div>
            </DialogContent>
            <DialogActions className="">
              <button
                onClick={handleCloseModal}
                className="bg-primary500 rounded-xl font-tbc font-bold text-white"
              >
                Close
              </button>
            </DialogActions>
          </div>
        </Dialog>
      </div>

      {/** Online Meeting - Toggle 3 */}
      <div className={toggle === 3 ? "show-content" : "content"}>
        {/** Header of the appointment tab */}
        <div className="flex justify-between items-center gap-5 w-full h-fit">
          <div className="flex w-full gap-10 p-0.5 rounded-2xl border border-gray border-opacity-30 font-tbc text-title24">
            <div className={toggle === 1 ? "toggleon" : "toggleoff"}>
              <p className="w-fit h-fit" onClick={() => updateToggle(1)}>
                Calendar
              </p>
            </div>
            <div className={toggle === 2 ? "toggleon" : "toggleoff"}>
              <p className="w-fit h-fit" onClick={() => updateToggle(2)}>
                Food Tasting
              </p>
            </div>
            <div className={toggle === 3 ? "toggleon" : "toggleoff"}>
              <p className="w-fit h-fit" onClick={() => updateToggle(3)}>
                Online Meeting
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <DataGrid
            className="text-lg"
            slots={{
              toolbar: GridToolbar,
            }}
            rows={meetingData}
            columns={columns2}
            component={{ Toolbar: GridToolbar }}
          />
        </div>

        <Dialog open={modal2} onClose={handleCloseModal} className="w-full">
          <div className="flex flex-col gap-5 w-fit">
            <DialogTitle className="flex justify-between gap-10 w-full overflow-hidden bg-primary200">
              <h1 className="font-heading font-bold text-heading14 text-white">
                Client Note
              </h1>
            </DialogTitle>
            <DialogContent className="flex flex-col gap-5 w-full">
              <div className=" flex flex-col gap-3 w-full">
                <div className="flex justify-center gap-5 font-tbc text-title13 border-b">
                  <p className="w-full font-bold ">{note}</p>
                </div>
              </div>

              <div className="flex justify-between gap-5 font-tbc font-semibold">
                <button
                  className="border rounded-xl text-primary500 hover:text-white hover:bg-primary500"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </DialogContent>
          </div>
        </Dialog>

        {/* MODAL FOR UPLOADING LINK, PADESIGN NALANG PO */}

        <Dialog open={modal3} onClose={handleCloseModal} className="w-full">
          <div className="flex flex-col w-full">
            <div className="flex justify-center p-5 w-full bg-primary200">
              <h1 className="font-heading font-bold text-heading14 text-white">
                Meeting Link
              </h1>
            </div>
          </div>

          <DialogContent className="flex flex-col gap-5 w-full">
            <input
              className="border w-full p-5 font-tbc font-medium text-title1 rounded-lg"
              type="text"
              placeholder="Meeting Link here"
              required
              onChange={(e) => setMeeting_Link(e.target.value)}
            />

            <Dialog open={modal3} onClose={handleCloseModal} className="w-full">
              <div className="flex flex-col w-full">
                <div className="flex justify-center p-5 w-full bg-primary200">
                  <h1 className="font-heading font-bold text-heading14 text-white">
                    Meeting Link
                  </h1>
                </div>

                <DialogContent className="flex flex-col gap-5 w-full">
                  <input
                    className="border w-full p-5 font-tbc font-medium text-title1 rounded-lg"
                    type="text"
                    placeholder="Meeting Link here"
                    required
                    onChange={(e) => setMeeting_Link(e.target.value)}
                  />

                  <div className="flex justify-between p-5 w-full h-fit font-tbc font-semibold">
                    <button
                      className="border rounded-xl text-secondary500 hover:text-white hover:bg-secondary500 px-5 py-3 w-fit h-fit"
                      onClick={handleUploadLink}
                    >
                      Upload Link
                    </button>
                    <button
                      className="border rounded-xl text-primary500 hover:text-white hover:bg-primary500 px-5 py-3 w-fit h-fit"
                      onClick={handleCloseModal}
                    >
                      Close
                    </button>
                  </div>
                </DialogContent>
              </div>
            </Dialog>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
  {
    /** End of Main Readable Div */
  }
}

export default Appointment;
