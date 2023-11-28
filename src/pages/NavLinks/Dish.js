import React, { useEffect } from "react";
import { useState } from "react";
import AddDishModal from "../../components/addDishModal";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";

const DishTable = ({ data }) => {
  const handleDelete = async (id) => {
    try {
      // Send a DELETE request to the API to delete the dish
      await axios.post(`https://3.27.163.46/api/delete/dish/?dishId=${id}`);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting dish:", error);
    }
  };
  return (
    <TableContainer
      component={Paper}
      style={{ maxWidth: "600px", margin: "20px auto" }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Dish Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((dish, index) => {
            if (
              ["Veggie", "Pasta", "Dessert", "Rice", "Beverage"].includes(
                dish.dish_type
              )
            ) {
              return null; // Skip this row
            }

            return (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {dish.dish_name}
                </TableCell>
                <TableCell>{dish.dish_type}</TableCell>
                <TableCell>{dish.dish_price}</TableCell>
                <TableCell style={{ width: "20px" }}>
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(dish.id)}
                    style={{ width: "20px" }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const PastaTable = ({ data }) => {
  const handleDelete = async (id) => {
    try {
      // Send a DELETE request to the API to delete the dish
      await axios.post(`https://3.27.163.46/api/delete/dish/?dishId=${id}`);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting dish:", error);
    }
  };

  return (
    <TableContainer
      component={Paper}
      style={{ maxWidth: "600px", margin: "20px auto" }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Pasta Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((dish, index) => {
            if (dish.dish_type !== "Pasta") {
              return null; // Skip this row if dish_type is not Pasta
            }

            return (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {dish.dish_name}
                </TableCell>
                <TableCell>{dish.dish_type}</TableCell>
                <TableCell>{dish.dish_price}</TableCell>
                <TableCell style={{ width: "20px" }}>
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(dish.id)}
                    style={{ width: "20px" }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const DessertTable = ({ data }) => {
  const handleDelete = async (id) => {
    try {
      // Send a DELETE request to the API to delete the dish
      await axios.post(`https://3.27.163.46/api/delete/dish/?dishId=${id}`);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting dish:", error);
    }
  };

  return (
    <TableContainer
      component={Paper}
      style={{ maxWidth: "600px", margin: "20px auto" }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Dessert Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((dish, index) => {
            if (dish.dish_type !== "Dessert") {
              return null; // Skip this row if dish_type is not Pasta
            }

            return (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {dish.dish_name}
                </TableCell>
                <TableCell>{dish.dish_type}</TableCell>
                <TableCell>{dish.dish_price}</TableCell>
                <TableCell style={{ width: "20px" }}>
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(dish.id)}
                    style={{ width: "20px" }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

function Dish() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);

  const API_ENDPOINT = "https://3.27.163.46/api/all/dishes";
  // const today = new Date();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        // console.log("response:", response)
        const result = await response.json();
        // console.log(result.AllDishes)
        setData(result.AllDishes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  return (
    <div className="p-8">
      {/** Dish List - Toggle 1 */}
      <div className="show-content">
        {/** Header of the appointment tab */}
        <div className="flex justify-between items-center gap-5 w-full h-fit">
          <div className="flex w-full gap-10 p-0.5 rounded-2xl border border-gray border-opacity-30 font-tbc text-title24 bg-white">
            <div className="toggleon">
              <p
                className="w-fit h-fit text-title24"
                onClick={() => updateToggle(1)}
              >
                Menu List
              </p>
            </div>
          </div>

          {/*Filter Icon*/}
          {/*<div className="flex rounded-lg p-3 items-center bg-secondary100">
            <h1 className="font-bold">Filter</h1>
          </div>

          {/** Add Dish */}
          <div className="flex justify-end items-center gap-5 w-1/6 h-full">
            <button
              className="flex justify-center items-center w-full h-fit px-4 py-3 rounded-xl font-heading font-semibold text-white bg-secondary300 border hover:bg-gray hover:bg-opacity-10 hover:text-secondary300 hover:border hover:border-secondary300"
              onClick={openModal}
            >
              Add Dish +
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="w-[30%] mr-8">
            <Typography variant="h4" align="center" gutterBottom>
              <p
                className="border-2 p-4 rounded-md font-bold"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  backgroundColor: "#F8B9CF",
                }}
              >
                Dish List
              </p>
            </Typography>
            <DishTable data={data} />
          </div>
          <div className="w-[30%] mr-8">
            <Typography variant="h4" align="center" gutterBottom>
              <p
                className="border-2 p-4 rounded-md font-bold"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  backgroundColor: "#F8B9CF",
                }}
              >
                Pasta List
              </p>
            </Typography>
            <PastaTable data={data} />
          </div>
          <div className="w-[30%]">
            <Typography variant="h4" align="center" gutterBottom>
              <p
                className="border-2 p-4 rounded-md font-bold"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  backgroundColor: "#F8B9CF",
                }}
              >
                Dessert List
              </p>
            </Typography>
            <DessertTable data={data} />
          </div>
        </div>

        <AddDishModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
}

export default Dish;
