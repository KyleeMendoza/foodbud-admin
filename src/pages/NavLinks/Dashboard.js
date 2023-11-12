import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

function Dashboard() {
  const [chartData, setChartData] = useState({
    options: {
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        title: {
          text: "Event Count",
        },
      },
    },
    series: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9001/api/get/event/all"
        );
        const events = response.data.events;

        // Process data for ApexCharts
        const seriesData = {};
        const allDates = new Set();

        events.forEach((event) => {
          const createdAt = new Date(event.createdAt)
            .toISOString()
            .slice(0, 10);
          const eventType = event.event_type;

          allDates.add(createdAt); // Add the date to the set of all dates

          if (!seriesData[eventType]) {
            seriesData[eventType] = {};
          }

          if (!seriesData[eventType][createdAt]) {
            seriesData[eventType][createdAt] = 1;
          } else {
            seriesData[eventType][createdAt] += 1;
          }
        });

        // Fill in missing dates with count 0
        Object.keys(seriesData).forEach((eventType) => {
          allDates.forEach((date) => {
            if (!seriesData[eventType][date]) {
              seriesData[eventType][date] = 0;
            }
          });
        });

        const series = Object.entries(seriesData).map(([eventType, data]) => ({
          name: eventType,
          data: Array.from(allDates).map((date) => [date, data[date] || 0]),
        }));

        console.log(series);

        setChartData({
          options: {
            xaxis: {
              type: "datetime",
            },
            yaxis: {
              title: {
                text: "Event Count",
              },
            },
          },
          series,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex space-between m-4 w-full">
        <div className="flex">
          <div className="mr-10">
            <div className="flex flex-col items-center border-2 p-4 rounded-md mb-4 bg-white shadow-md">
              <h1 className="text-green-600 text-3xl font-bold mb-2">
                New Events
              </h1>
              <p className="text-justify text-xl">
                There are 20 New Events since yesterday
              </p>
            </div>
            <div className="flex flex-col items-center border-2 p-4 rounded-md mb-4 bg-white shadow-md">
              <h1 className="text-3xl font-bold mb-2">Finished Events</h1>
              <p className="text-justify text-xl">
                There are 50 finished events
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center border-2 p-4 rounded-md mb-4 bg-white shadow-md">
              <h1 className="text-yellow-600 text-3xl font-bold mb-2">
                Clients
              </h1>
              <p className="text-justify text-xl">A total of 100 clients</p>
            </div>

            <div className="flex flex-col items-center border-2 p-4 rounded-md mb-4 bg-white shadow-md">
              <h1 className="text-orange-600 text-3xl font-bold mb-2">
                Total Earnings
              </h1>
              <p className="text-justify text-xl">PHP 100,000</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-2 border-gray-500 p-4 rounded-md w-[40rem] ml-[10%] bg-white shadow-md">
          <h1 className="text-green-600 text-3xl font-bold mb-2">
            Up coming Events
          </h1>
          <p className="text-justify text-xl"></p>
        </div>
      </div>

      <div className="my-4 mx-4 bg-white p-8 border-2 w-[95%] shadow-lg border-2 border-blue-400">
        <h2>Daily Event Creation Report</h2>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={400}
        />
      </div>
    </div>
  );
}

export default Dashboard;
