import React from "react";
import { useState, useEffect } from "react";
import AddPackageModal from "../../components/addPackagemodal";
import DeleteIcon from "@mui/icons-material/Delete";
import PackageTable from "../../components/packageTable";
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

const handleDelete = async (id) => {
  try {
    await axios.post(`https://3.27.163.46/api/delete/package/?packageId=${id}`);
    window.location.reload();
  } catch (error) {
    console.error("Error deleting package:", error);
  }
};

// const BudgetTable = ({ data }) => {
//   const handleDelete = async (id) => {
//     try {
//       // Send a DELETE request to the API to delete the package
//       await axios.post(
//         `https://3.27.163.46/api/delete/package/?packageId=${id}`
//       );
//       window.location.reload();
//     } catch (error) {
//       console.error("Error deleting package:", error);
//     }
//   };
//   const deluxeDebutPackage = data.find(
//     (pkg) => pkg.package_name === "Budget Package"
//   );
//   const packageName = deluxeDebutPackage ? deluxeDebutPackage.package_name : "";

//   return (
//     <div>
//       <Typography variant="h4" align="center" gutterBottom>
//         <p
//           className="border-2 p-4 rounded-md font-bold"
//           style={{
//             boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
//             backgroundColor: "#F8B9CF",
//           }}
//         >
//           {packageName}
//         </p>
//       </Typography>
//       <TableContainer
//         component={Paper}
//         style={{ maxWidth: "600px", margin: "20px auto" }}
//       >
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Package Name</TableCell>
//               <TableCell>Pax Count</TableCell>
//               <TableCell>Price</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.map((pkg, index) => {
//               if (pkg.package_name !== "Budget Package") {
//                 return null;
//               }

//               return (
//                 <TableRow key={index}>
//                   <TableCell component="th" scope="row">
//                     {pkg.package_name}
//                   </TableCell>
//                   <TableCell>{pkg.pax_count}</TableCell>
//                   <TableCell>{pkg.rate}</TableCell>
//                   <TableCell style={{ width: "20px" }}>
//                     <IconButton
//                       color="error"
//                       onClick={() => handleDelete(pkg.id)}
//                       style={{ width: "20px" }}
//                     >
//                       <DeleteIcon />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// const DeluxeTable = ({ data }) => {
//   const handleDelete = async (id) => {
//     try {
//       // Send a DELETE request to the API to delete the package
//       await axios.post(
//         `https://3.27.163.46/api/delete/package/?packageId=${id}`
//       );
//       window.location.reload();
//     } catch (error) {
//       console.error("Error deleting package:", error);
//     }
//   };

//   return (
//     <TableContainer
//       component={Paper}
//       style={{ maxWidth: "600px", margin: "20px auto" }}
//     >
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Package Name</TableCell>
//             <TableCell>Pax Count</TableCell>
//             <TableCell>Price</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((pkg, index) => {
//             if (pkg.package_name !== "Deluxe Package") {
//               return null;
//             }

//             return (
//               <TableRow key={index}>
//                 <TableCell component="th" scope="row">
//                   {pkg.package_name}
//                 </TableCell>
//                 <TableCell>{pkg.pax_count}</TableCell>
//                 <TableCell>{pkg.rate}</TableCell>
//                 <TableCell style={{ width: "20px" }}>
//                   <IconButton
//                     color="error"
//                     onClick={() => handleDelete(pkg.id)}
//                     style={{ width: "20px" }}
//                   >
//                     <DeleteIcon />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             );
//           })}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// const DiamondTable = ({ data }) => {
//   const handleDelete = async (id) => {
//     try {
//       // Send a DELETE request to the API to delete the package
//       await axios.post(
//         `https://3.27.163.46/api/delete/package/?packageId=${id}`
//       );
//       window.location.reload();
//     } catch (error) {
//       console.error("Error deleting package:", error);
//     }
//   };

//   return (
//     <div>
//       <Typography variant="h4" align="center" gutterBottom>
//         <p
//           className="border-2 p-4 rounded-md font-bold"
//           style={{
//             boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
//             backgroundColor: "#F8B9CF",
//           }}
//         >
//           Diamond Package
//         </p>
//       </Typography>
//       <TableContainer
//         component={Paper}
//         style={{ maxWidth: "600px", margin: "20px auto" }}
//       >
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Package Name</TableCell>
//               <TableCell>Pax Count</TableCell>
//               <TableCell>Price</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.map((pkg, index) => {
//               if (pkg.package_name !== "Diamond Package") {
//                 return null;
//               }

//               return (
//                 <TableRow key={index}>
//                   <TableCell component="th" scope="row">
//                     {pkg.package_name}
//                   </TableCell>
//                   <TableCell>{pkg.pax_count}</TableCell>
//                   <TableCell>{pkg.rate}</TableCell>
//                   <TableCell style={{ width: "20px" }}>
//                     <IconButton
//                       color="error"
//                       onClick={() => handleDelete(pkg.id)}
//                       style={{ width: "20px" }}
//                     >
//                       <DeleteIcon />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// const LuxuryTable = ({ data }) => {
//   const handleDelete = async (id) => {
//     try {
//       // Send a DELETE request to the API to delete the package
//       await axios.post(
//         `https://3.27.163.46/api/delete/package/?packageId=${id}`
//       );
//       window.location.reload();
//     } catch (error) {
//       console.error("Error deleting package:", error);
//     }
//   };

//   return (
//     <TableContainer
//       component={Paper}
//       style={{ maxWidth: "600px", margin: "20px auto" }}
//     >
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Package Name</TableCell>
//             <TableCell>Pax Count</TableCell>
//             <TableCell>Price</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((pkg, index) => {
//             if (pkg.package_name !== "Luxury Package") {
//               return null;
//             }

//             return (
//               <TableRow key={index}>
//                 <TableCell component="th" scope="row">
//                   {pkg.package_name}
//                 </TableCell>
//                 <TableCell>{pkg.pax_count}</TableCell>
//                 <TableCell>{pkg.rate}</TableCell>
//                 <TableCell style={{ width: "20px" }}>
//                   <IconButton
//                     color="error"
//                     onClick={() => handleDelete(pkg.id)}
//                     style={{ width: "20px" }}
//                   >
//                     <DeleteIcon />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             );
//           })}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// const DeluxeDebutTable = ({ data }) => {
//   const handleDelete = async (id) => {
//     try {
//       // Send a DELETE request to the API to delete the package
//       await axios.post(
//         `https://3.27.163.46/api/delete/package/?packageId=${id}`
//       );
//       window.location.reload();
//     } catch (error) {
//       console.error("Error deleting package:", error);
//     }
//   };

//   return (
//     <TableContainer
//       component={Paper}
//       style={{ maxWidth: "600px", margin: "20px auto" }}
//     >
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Package Name</TableCell>
//             <TableCell>Pax Count</TableCell>
//             <TableCell>Price</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((pkg, index) => {
//             if (pkg.package_name !== "Deluxe Debut") {
//               return null;
//             }

//             return (
//               <TableRow key={index}>
//                 <TableCell component="th" scope="row">
//                   {pkg.package_name}
//                 </TableCell>
//                 <TableCell>{pkg.pax_count}</TableCell>
//                 <TableCell>{pkg.rate}</TableCell>
//                 <TableCell style={{ width: "20px" }}>
//                   <IconButton
//                     color="error"
//                     onClick={() => handleDelete(pkg.id)}
//                     style={{ width: "20px" }}
//                   >
//                     <DeleteIcon />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             );
//           })}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// const DeluxeStyleTable = ({ data }) => {
//   const handleDelete = async (id) => {
//     try {
//       // Send a DELETE request to the API to delete the package
//       await axios.post(
//         `https://3.27.163.46/api/delete/package/?packageId=${id}`
//       );
//       window.location.reload();
//     } catch (error) {
//       console.error("Error deleting package:", error);
//     }
//   };

//   return (
//     <TableContainer
//       component={Paper}
//       style={{ maxWidth: "600px", margin: "20px auto" }}
//     >
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Package Name</TableCell>
//             <TableCell>Pax Count</TableCell>
//             <TableCell>Price</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((pkg, index) => {
//             if (pkg.package_name !== "Deluxe Styling") {
//               return null;
//             }

//             return (
//               <TableRow key={index}>
//                 <TableCell component="th" scope="row">
//                   {pkg.package_name}
//                 </TableCell>
//                 <TableCell>{pkg.pax_count}</TableCell>
//                 <TableCell>{pkg.rate}</TableCell>
//                 <TableCell style={{ width: "20px" }}>
//                   <IconButton
//                     color="error"
//                     onClick={() => handleDelete(pkg.id)}
//                     style={{ width: "20px" }}
//                   >
//                     <DeleteIcon />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             );
//           })}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

function Package() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [packageNames, setPackageNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://3.27.163.46/api/package/names");
        const data = await response.json();
        // console.log(data.package_names);
        setPackageNames(data.package_names);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // const packageNames = [
  //   "Budget Package",
  //   "Deluxe Package",
  //   "Diamond Package",
  //   "Luxury Package",
  //   "Deluxe Debut",
  //   "Deluxe Styling",
  //   "Platinum Package",
  //   "Platinum",
  // ];

  const API_ENDPOINT = "https://3.27.163.46/api/all/packages";
  // const today = new Date();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        const result = await response.json();
        console.log("response:", result.AllPackage);

        setData(result.AllPackage);
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
    <div className="flex flex-col gap-8 p-8">
      {/** Body - Package List - Toggle 1 */}
      <div className={toggle === 1 ? "show-content" : "content"}>
        {/** Header of the appointment tab */}
        <div className="flex justify-between items-center gap-5 w-full h-fit">
          {/*Navigation Bar*/}
          <div className="flex w-full gap-10 p-0.5 rounded-xl border border-gray border-opacity-30 font-tbc text-title24 bg-white">
            <div className={toggle === 1 ? "toggleon" : "toggleoff"}>
              <p onClick={() => updateToggle(1)}>Packages</p>
            </div>
          </div>

          {/*Set Availibility Date*/}
          <div className="flex justify-end items-center gap-5 w-1/6 h-full">
            <button
              className="flex justify-center items-center w-full h-fit px-4 py-3 rounded-xl font-heading font-semibold text-white bg-secondary300 border hover:bg-gray hover:bg-opacity-10 hover:text-secondary300 hover:border hover:border-secondary300"
              onClick={openModal}
            >
              Add Package +
            </button>
          </div>
        </div>

        <div className="flex flex-wrap">
          {packageNames.map((packageName, index) => (
            <div key={index} className="w-[30%] mr-8">
              <PackageTable
                data={data}
                packageName={packageName}
                handleDelete={handleDelete}
              />
            </div>
          ))}
        </div>

        <AddPackageModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
}

export default Package;
