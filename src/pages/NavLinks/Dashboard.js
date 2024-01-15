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
  const [dataDishes, setDataDishes] = useState([]);
  const [NumberofEvent, setNumberofEvent] = useState(0);
  const [numberOfClients, setNumberOfClients] = useState(0);
  const [numberofEmployees, setNumberOfEmployees] = useState(0);
  const [netSales, setNetSales] = useState(0);
  const [startDate, setStartDate] = useState(new Date()); // Default to today
  const [endDate, setEndDate] = useState(new Date()); // Default to today

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };


  //Net sales na square
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://3.27.163.46/api/net/sales?startDate=${startDate}&endDate=${endDate}`);
        const data = await response.json();
        // console.log("NET", data.net)
        if(data.net === 809700){
          setNetSales(0)
        }else{
          setNetSales(data.net);
        }
     
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [startDate]);

  //Top Package
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://3.27.163.46/api/top/packages?startDate=${startDate}&endDate=${endDate}`);
        const data = await response.json();
        // console.log(data)
        setDataPackage(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [startDate]);

  //Top City
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://3.27.163.46/api/cities?startDate=${startDate}&endDate=${endDate}`);
        const data = await response.json();
        setCityData(data);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [startDate]);

  //Top Dishes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://3.27.163.46/api/top/dishes?startDate=${startDate}&endDate=${endDate}`);
        const data = await response.json();
        setDataDishes(data);
        console.log("dishes", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [startDate]);

  const categories = dataPackage.map((item) => item.package_type);
  const counts = dataPackage.map((item) => item.count);

  const citycategories = cityData.map((item) => item.client_address);
  const citycounts = cityData.map((item) => item.count);

  const dishescategories = dataDishes.map((item) => item.dishName);
  const dishescounts = dataDishes.map((item) => item.count);

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

  // Top Dishes
  const dishesoptions = {
    plotOptions: {
      bar: {
        barHeight: "80%",
        distributed: true,
        horizontal: false,
      },
    },
    xaxis: {
      categories: dishescategories,
      labels: {
        rotate: 0, // Set rotation angle to 0 degrees
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  };

  const dishesseries = [
    {
      data: dishescounts,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://3.27.163.46/api/get/event/all');
        const events = response.data.events;

        const seriesData = {};
        const allDates = new Set();

        events.forEach((event) => {
          const createdAt = new Date(event.createdAt)
            .toISOString()
            .slice(0, 10);
          const eventType = event.event_type;

          allDates.add(createdAt);

          if (!seriesData[eventType]) {
            seriesData[eventType] = {};
          }

          if (!seriesData[eventType][createdAt]) {
            seriesData[eventType][createdAt] = 1;
          } else {
            seriesData[eventType][createdAt] += 1;
          }
        });

        Object.keys(seriesData).forEach((eventType) => {
          allDates.forEach((date) => {
            if (!seriesData[eventType][date]) {
              seriesData[eventType][date] = 0;
            }
          });
        });

        const sortedDates = Array.from(allDates).sort(
          (a, b) => new Date(b) - new Date(a)
        );

        const latest5Dates = sortedDates.slice(0, 5);

        const filteredSeries = Object.entries(seriesData).map(([eventType, data]) => ({
          name: eventType,
          data: latest5Dates
            .filter((date) => new Date(date) >= startDate && new Date(date) <= endDate)
            .map((date) => [date, data[date] || 0]),
        }));

        const filteredEventCount = filteredSeries.reduce(
          (count, series) => count + series.data.reduce((sum, point) => sum + point[1], 0),
          0
        );
  
        // Set the total number of filtered events
        setNumberofEvent(filteredEventCount);
  

        setChartData({
          options: {
            xaxis: {
              type: 'datetime',
            },
            yaxis: {
              title: {
                text: 'Event Count',
              },
            },
          },
          series: filteredSeries,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [startDate, endDate]);

  // Client Count
  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await axios.get(`https://3.27.163.46/api/count?startDate=${startDate}&endDate=${endDate}`);
        const { numberOfClients } = response.data;
        console.log(response.data)
        setNumberOfClients(numberOfClients);
        console.log("client", numberOfClients);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchClient();
  }, [startDate]);

  // Employee Count
  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await axios.get(
          "https://3.27.163.46/api/employee/count"
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
      <div className="flex space-x-4">
        <div>
          <label className="block text-gray-700">Start Date:</label>
          <input
            type="date"
            value={startDate.toISOString().slice(0, 10)}
            onChange={(e) => handleStartDateChange(new Date(e.target.value))}
            className="border rounded px-2 py-1"
          />
        </div>
        <div>
          <label className="block text-gray-700">End Date:</label>
          <input
            type="date"
            value={endDate.toISOString().slice(0, 10)}
            onChange={(e) => handleEndDateChange(new Date(e.target.value))}
            className="border rounded px-2 py-1"
          />
        </div>
      </div>

      {/* Main Body */}
      <div className="flex flex-col gap-10">
        {/* Body of the Dashboard */}
        
        <div className="flex flex-col gap-10 w-full">
          {/* Daily Reports & Top Packages */}
          <div className="flex gap- 5">
            {/* Daily Report - Chart */}
            <div className="p-5 w-full h-fit shadow-lg border-2 border-blue-400 bg-blue-500 bg-opacity-10">
             
              <h2 className="font-bold">Daily Event Creation Report</h2>
              <Chart
                options={chartData.options}
                series={chartData.series}
                type="area"
                height={400}
              />
            </div>
          </div>

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
                  <img src={user} alt="Employee" className="w-20"></img>
                </div>
                <div className="text-black font-tbc font-bold w-full">
                  <h1 className="text-heading36">{numberofEmployees}</h1>
                  <p className="font-semibold">Employee</p>
                </div>
              </div>

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

          {/* Top Packages availed */}
          <div className="border-2 border-secondary400 w-full p-5 rounded-md">
            <h1 className="font-bold p-4 text-title24 text-center bg-blue-500 bg-opacity-10">
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

          {/* Most Picked Dishes */}
          <div className="border-2 border-secondary400 w-full p-5 rounded-md">
            <h1 className="font-bold p-4 text-title24 text-center bg-blue-500 bg-opacity-10">
              Most Picked Dishes
            </h1>
            <Chart
              options={dishesoptions}
              series={dishesseries}
              type="bar"
              height={600}
              className="bg-blue-500 bg-opacity-10"
            />
          </div>
        </div>

        {/* Most Client based on city */}
        <div className="border-2 border-secondary400 w-full p-5 rounded-md">
          <h1 className="font-bold p-4 text-title24 text-center bg-blue-500 bg-opacity-10">
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
  );
}

export default Dashboard;
