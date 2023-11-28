import React from "react";
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
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const PackageTable = ({ data, packageName, handleDelete }) => {
  const sortedData = [...data].sort((a, b) => a.rate - b.rate);
  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        <p
          className="border-2 p-4 rounded-md font-bold text-white border-black"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            backgroundColor: "#F8B9CF",
          }}
        >
          {packageName}
        </p>
      </Typography>
      <TableContainer
        component={Paper}
        style={{ maxWidth: "600px", margin: "20px auto" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Package Name</TableCell>
              <TableCell>Pax Count</TableCell>
              <TableCell>Price</TableCell>
              <TableCell style={{ width: "20px" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData
              .filter((pkg) => pkg.package_name === packageName)
              .map((pkg, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {pkg.package_name}
                  </TableCell>
                  <TableCell>{pkg.pax_count}</TableCell>
                  <TableCell>{pkg.rate}</TableCell>
                  <TableCell style={{ width: "20px" }}>
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(pkg.id)}
                      style={{ width: "20px" }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PackageTable;
