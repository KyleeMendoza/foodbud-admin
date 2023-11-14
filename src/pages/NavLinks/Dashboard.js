import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import calendar from "../../img/admin/calendar.png";
import user from "../../img/admin/user.png"; 
import wallet from "../../img/admin/wallet.png";

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
  const [dataPackage, setDataPackage] = useState([]);
  const [NumberofEvent, setNumberofEvent] = useState(0);
  const [numberOfClients, setNumberOfClients] =useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://3.27.163.46:9001/api/top/packages');
        const data = await response.json();
        setDataPackage(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const categories = dataPackage.map(item => item.package_type);
  const counts = dataPackage.map(item => item.count);

  const options = {
    plotOptions: {
      bar: {
        barHeight: '80%',
        distributed: true,
        horizontal: true,
      }
    },
    xaxis: {
      categories: categories
    },
    yaxis: {
      labels: {
        show: false
      }
    }
  };

  const series = [
    {
      data: counts
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://3.27.163.46:9001/api/get/event/all"
        );
        const events = response.data.events;

        setNumberofEvent(events.length)
  
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
  
        // Convert Set to Array and sort dates in descending order
        const sortedDates = Array.from(allDates).sort((a, b) => new Date(b) - new Date(a));
  
        // Select the latest 5 dates
        const latest5Dates = sortedDates.slice(0, 5);
  
        const series = Object.entries(seriesData).map(([eventType, data]) => ({
          name: eventType,
          data: latest5Dates.map((date) => [date, data[date] || 0]),
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

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await axios.get("http://3.27.163.46:9001/api/count");
        const { numberOfClients } = response.data;
        setNumberOfClients(numberOfClients);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchClient();
  }, []);

  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="w-full border-2 p-4 rounded-md mb-4">
        <h2 className="text-slate-400">Hi, Welcome!</h2>
      </div>
      <div className="flex">
        <div className="w-[50%] ">
          <div className="flex flex-row space-x-12 justify-center items-center  w-full p-4">
            <div className="flex flex-row items-center justify-center border-2 p-8 rounded-md mb-4 bg-blue-500 bg-opacity-10 shadow-md">
              <div className="mr-4">
                <img src={calendar} alt="Calendar" className="w-20"></img>
              </div>
              <div>
                <h1 className="text-green-600 text-2xl font-bold mb-2">{NumberofEvent}</h1>
                <p className="text-justify text-xl font-bold">Events</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center border-2 p-8 rounded-md mb-4 bg-blue-500 bg-opacity-10 shadow-md">
              <div className="mr-4">
                <img src={user} alt="#" className="w-20"></img>
              </div>
              <div>
                <h1 className="text-green-600 text-2xl font-bold mb-2">{numberOfClients}</h1>
                <p className="text-justify text-xl font-bold">Clients</p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center border-2 p-8 rounded-md mb-4 bg-blue-500 bg-opacity-10 shadow-md">
              <div className="mr-4">
                <img src={wallet} alt="#" className="w-20"></img>
              </div>
              <div>
                <h1 className="text-green-600 text-2xl font-bold mb-2">₱100,000</h1>
                <p className="text-justify text-xl font-bold">Net Sales</p>
              </div>
            </div>
          </div>
          <div className="my-4 p-4 w-full shadow-lg border-2 border-blue-400 bg-blue-500 bg-opacity-10">
            <h2 className="font-bold">Daily Event Creation Report</h2>
            <Chart
              options={chartData.options}
              series={chartData.series}
              type="line"
              height={400}
            />
          </div>
        </div>
        <div className="w-[50%] ml-[5%]">
          <div className="border-2 border-blue-400 w-[90%] mb-4 rounded-md">
            <h1 className="font-bold p-4 text-xl bg-blue-500 bg-opacity-10">Top Packages Avail by Users</h1>
            <Chart options={options} series={series} type="bar" height={600} className="bg-blue-500 bg-opacity-10"/>
          </div>
  
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
