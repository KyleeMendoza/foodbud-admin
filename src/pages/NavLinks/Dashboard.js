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
  const [cityData, setCityData] = useState([]);
  const [NumberofEvent, setNumberofEvent] = useState(0);
  const [numberOfClients, setNumberOfClients] = useState(0);
  const [numberofEmployees, setNumberOfEmployees] = useState(0);
  const [netSales, setNetSales] = useState(0);

  //Net sales na square
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://3.27.163.46/api/net/sales");
        const data = await response.json();
        console.log(data.net);
        setNetSales(data.net);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //Top Package
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://3.27.163.46/api/top/packages");
        const data = await response.json();
        setDataPackage(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //Top City
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9000/api/cities");
        const data = await response.json();
        setCityData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const categories = dataPackage.map((item) => item.package_type);
  const counts = dataPackage.map((item) => item.count);

  const citycategories = cityData.map((item) => item.client_address);
  const citycounts = cityData.map((item) => item.count);

  // Top Availed
  const options = {
    plotOptions: {
      bar: {
        barHeight: "80%",
        distributed: true,
        horizontal: true,
      },
    },
    xaxis: {
      categories: categories,
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  };

  const series = [
    {
      data: counts,
    },
  ];

  // Top City
  const cityoptions = {
    plotOptions: {
      bar: {
        barHeight: "80%",
        distributed: true,
        horizontal: true,
      },
    },
    xaxis: {
      categories: citycategories,
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  };

  const cityseries = [
    {
      data: citycounts,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://3.27.163.46/api/get/event/all"
        );
        const events = response.data.events;

        setNumberofEvent(events.length);

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
        const sortedDates = Array.from(allDates).sort(
          (a, b) => new Date(b) - new Date(a)
        );

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

  // Client Count
  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await axios.get("https://3.27.163.46/api/count");
        const { numberOfClients } = response.data;
        setNumberOfClients(numberOfClients);
        console.log(numberOfClients);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchClient();
  }, []);

  // Employee Count
  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/api/employee/count"
        );
        const { numberOfEmployees } = response.data;
        setNumberOfEmployees(numberOfEmployees);
        console.log(numberOfEmployees);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchClient();
  }, []);

  const formattedNetSales = netSales.toLocaleString("en-US", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="flex flex-col gap-8 p-8">
      {/* Admin Dashboard Header */}
      <div className="w-full p-5 rounded-xl font-heading font-semibold bg-primary200">
        <h2 className="text-heading25 text-white">
          Welcome Admin! Here's your Dashboard
        </h2>
      </div>

      {/* Main Body */}
      <div className="flex gap-10">
        {/* Left part of the Dashboard */}
        <div className="w-1/2">
          {/* Boxes Statistics */}
          <div className="flex flex-col justify-between items-center border w-full p-4 gap-5">
            <div className="flex justify-between items-center w-full">
              {/* Event Stats */}
              <div className="flex flex-row items-center justify-center w-fit gap-5 p-5 border-2 rounded-md bg-secondary200 shadow-md">
                <div className="">
                  <img src={calendar} alt="Calendar" className="w-20"></img>
                </div>
                <div className="text-black font-tbc font-bold w-full">
                  <h1 className="text-heading36">{NumberofEvent}</h1>
                  <p className="font-semibold">Events</p>
                </div>
              </div>

              {/* Client Stats */}
              <div className="flex flex-row items-center justify-center w-fit gap-5 p-5 border-2 rounded-md bg-secondary200 shadow-md">
                <div className="">
                  <img src={user} alt="Client" className="w-20"></img>
                </div>
                <div className="text-black font-tbc font-bold w-full">
                  <h1 className="text-heading36">{numberOfClients}</h1>
                  <p className="font-semibold">Clients</p>
                </div>
              </div>

              {/* Employee Stats */}
              <div className="flex flex-row items-center justify-center w-fit gap-5 p-5 border-2 rounded-md bg-secondary200 shadow-md">
                <div className="">
                  <img alt="Employee" className="w-20"></img>
                </div>
                <div className="text-black font-tbc font-bold w-full">
                  <h1 className="text-heading36">{numberofEmployees}</h1>
                  <p className="font-semibold">Employee</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center w-full bg-greenl">
              {/* Net Sales Stats */}
              <div className="flex flex-row items-center justify-center w-fit gap-5 p-5 border-2 rounded-md bg-secondary200 shadow-md">
                <div className="">
                  <img src={wallet} alt="#" className="w-20"></img>
                </div>
                <div className="text-black font-tbc font-bold w-full">
                  <h1 className="text-heading36">{formattedNetSales}</h1>
                  <p className="font-semibold">Net Sales</p>
                </div>
              </div>
            </div>
          </div>

          <div className="my-4 p-4 w-full shadow-lg border-2 border-blue-400 bg-blue-500 bg-opacity-10">
            <h2 className="font-bold">Daily Event Creation Report</h2>
            <Chart
              options={chartData.options}
              series={chartData.series}
              type="area"
              height={400}
            />
          </div>
        </div>

        {/* Right Side of the Dashboard */}
        <div className="w-1/2 flex flex-col justify-end">
          <div className="border-2 border-secondary400 w-[90%] mb-4 rounded-md">
            <h1 className="font-bold p-4 text-title24 bg-blue-500 bg-opacity-10">
              Top Packages Avail by Users
            </h1>
            <Chart
              options={options}
              series={series}
              type="bar"
              height={600}
              className="bg-blue-500 bg-opacity-10"
            />
          </div>

          <div className="border-2 border-secondary400 w-[90%] mb-4 rounded-md">
            <h1 className="font-bold p-4 text-title24 bg-blue-500 bg-opacity-10">
              Most Client based on City
            </h1>
            <Chart
              options={cityoptions}
              series={cityseries}
              type="bar"
              height={600}
              className="bg-blue-500 bg-opacity-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
