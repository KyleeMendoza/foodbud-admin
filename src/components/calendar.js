import React, { useState, useEffect } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

const CalendarComponent = ({ onDataClick }) => {
  const [apiData, setApiData] = useState([]);

  const handleDateClick = async (date) => {
    // Add one day to the clicked date
    const formattedDate = moment(date).format('YYYY-MM-DD');    

    try {
        const response = await axios.post("http://3.27.163.46:9001/api/occupied/date", {
          date: formattedDate,
        });
  
        console.log(response.data.invalidTimeSlots);
        onDataClick(response.data.invalidTimeSlots)
      } catch (error) {
        console.error("Error fetching occupied date and time:", error);
      }
  }

  return (
    // <div className="border-2 border-red-500 w-full h-[70vh]">
      <Calendar
        className="w-full"
        onClickDay={(date) => handleDateClick(date)}
      />
    // </div>
  );
};

export default CalendarComponent;
