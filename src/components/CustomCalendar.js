import { Scheduler } from "@aldabil/react-scheduler";
import { useEffect, useState } from "react";

export default function CustomCalendar({
  filteredMeetingData,
  filteredEventData,
  filteredFoodData,
}) {
  const [combinedData, setCombinedData] = useState([]);
  const [meetingData, setMeetingData] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [foodData, setFoodData] = useState([]);

  const dummyData = [
    {
      event_id: 1,
      title: "Event 1",
      start: new Date("2023/12/2 09:30"),
      end: new Date("2023/12/2 10:30"),
      editable: false,
      deletable: false,
      draggable: false,
    },
    {
      event_id: 2,
      title: "Event 2",
      start: new Date("2023/12/2 11:30"),
      end: new Date("2023/12/2 12:30"),
      editable: false,
      deletable: false,
      draggable: false,
    },
    {
      event_id: 3,
      title: "Event 3",
      start: new Date("2023/12/2 13:30"),
      end: new Date("2023/12/2 14:30"),
      editable: false,
      deletable: false,
      draggable: false,
    },
    {
      event_id: 4,
      title: "Event 4",
      start: new Date("2023/12/2 15:30"),
      end: new Date("2023/12/2 16:30"),
      editable: false,
      deletable: false,
      draggable: false,
    },
    {
      event_id: 5,
      title: "Event 5",
      start: new Date("2023/12/2 17:30"),
      end: new Date("2023/12/2 18:30"),
      editable: false,
      deletable: false,
      draggable: false,
    },
  ];

  useEffect(() => {
    //MEETING
    const transformedMeetingData = filteredMeetingData.map((data) => ({
      event_id: data.id,
      title: `Meeting ${data.id}`,
      start: new Date(`${data.date} `),
      end: new Date(`${data.date} `),
      color: "#F598B7",
      editable: false,
      deletable: false,
      draggable: false,
    }));
    setMeetingData(transformedMeetingData);

    //EVENTS
    const transformedEventData = filteredEventData.map((data) => ({
      event_id: data.id,
      title: `Event ${data.id}`,
      start: new Date(`${data.event_date}`),
      end: new Date(`${data.event_date}`),
      color: "green",
      editable: false,
      deletable: false,
      draggable: false,
    }));
    setEventData(transformedEventData);

    //FOOD TASTING
    const transformedFoodData = filteredFoodData.map((data) => ({
      event_id: data.id,
      title: `Food ${data.id}`,
      start: new Date(`${data.date}`),
      end: new Date(`${data.date}`),
      color: "#6ab9f7",
      editable: false,
      deletable: false,
      draggable: false,
    }));
    setFoodData(transformedFoodData);
  }, [filteredMeetingData, filteredEventData, filteredFoodData]);

  useEffect(() => {
    setCombinedData([...meetingData, ...eventData, ...foodData]);
  }, [meetingData, eventData, foodData]);

  return (
    <div className="w-full rounded-lg">
      <Scheduler
        view="month"
        // this is the data to be put in the calendar. fetch it from db. its already in json form
        // events={dummyData}
        events={combinedData}
        editable={false}
        deletable={false}
        draggable={false}
      />
    </div>
  );
}
