import React from "react";
import "../../css/switchtabs.css";
import { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import AddInvoice from "../../components/addInvoiceitem";
import AddPayment from "../../components/addPayment";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";


function Transaction() {
  const [transactions, setTransactions] = useState([])
  const [addsonData, setAddsData] = useState([])
  const [invoiceData, setInvoiceData] = useState([])
  const location = useLocation()
  const event_id = new URLSearchParams(location.search).get('event_id');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleAcceptClick = async (description, status) => {
    try {

      if (status === "Not Paid") {
        window.alert("Please wait for client's payment first")
      } else {
        const response = await axios.post(`https://3.27.163.46/api/accept/transaction?event_id=${event_id}&description=${encodeURIComponent(description)}`, {
          status: 'Accepted'
        });

        window.location.reload()
      }

    } catch (error) {
      // Handle errors
      console.error('Error accepting transaction:', error);
    }
  };

  const handleRejectClick = async (description, status) => {
    try {
      if (status === "Not Paid") {
        window.alert("Please wait for client's payment first")
      } else {
        const response = await axios.post(`https://3.27.163.46/api/accept/transaction?event_id=${event_id}&description=${encodeURIComponent(description)}`, {
          status: 'Rejected'
        });
        window.location.reload()
      }
    } catch (error) {
      // Handle errors
      console.error('Error accepting transaction:', error);
    }
  };

  const columns = [
    { field: 'paymentDescription', headerName: 'Payment Description', width: 200 },
    {
      field: 'paymentAmount', headerName: 'Payment Amount', width: 200,
    },
    {
      field: 'paymentStatus', headerName: 'Payment Status', width: 200,
      renderCell: (params) => (
        <span style={{ color: params.value === 'Accepted' ? 'green' : params.value === 'Rejected' ? 'red' : 'inherit' }}>
          {params.value}
        </span>
      )
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 200,
      renderCell: (params) => (
        params.row.paymentStatus === 'Rejected' ? '' : params.value
      ),
    },
    {
      field: 'action',
      headerName: 'Image',
      width: 150,
      renderCell: (params) => {
        if (params.row.action) {
          // console.log(params.row.action)
          // Display the transaction receipt image if available
          return (
            <img
              src={`https://3.27.163.46/uploads/${params.row.action}`}
              alt="Receipt"
              style={{ width: '100px', height: 'auto' }}
              className="cursor-pointer"
              onClick={() => handleImageClick(`https://3.27.163.46/uploads/${params.row.action}`)}
            />
          );
        }
      }
    },
    {
      field: 'Result',
      headerName: 'Accept/Reject',
      width: 300,
      renderCell: (params) => (
        <div>
          <Button
            variant="contained"
            style={{ backgroundColor: 'green', color: 'white', marginRight: '8px', width: "40%" }}
            onClick={() => handleAcceptClick(params.row.paymentDescription, params.row.paymentStatus)}
          >
            Accept
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: 'red', color: 'white', width: "40%" }}
            onClick={() => handleRejectClick(params.row.paymentDescription, params.row.paymentStatus)}
          >
            Reject
          </Button>
        </div>
      ),
    },


  ];


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://3.27.163.46/api/invoice/receipt?event_id=${event_id}`);
        setAddsData(response.data.addonDetails);

        setInvoiceData(response.data.packageRate);
        // console.log(response.data.packageRate)
      } catch (error) {
        // Handle error, e.g., set error state or log the error
        console.error('Error fetching data:', error);

      }
    };

    fetchData();
  }, [event_id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://3.27.163.46/api/get/transactions?event_id=${event_id}`);
        setTransactions(response.data.transactions);
        // console.log(response.data.transactions)
      } catch (error) {
        // Handle error, e.g., set error state or log the error
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [event_id]);

  const rows = [];

  // Log the total sum
  // console.log("Sum of Payment Amounts:", paymentAmountSum);


  if (invoiceData.package_name && !rows.some(row => row.paymentDescription === invoiceData.package_name)) {
    // Check for a match between invoiceData.package_name and transaction.description
    const matchedTransaction = transactions.find(transaction => transaction.description === invoiceData.package_name);
    // console.log(matchedTransaction)
    if (matchedTransaction) {
      // Parse the date string
      const parsedDate = new Date(matchedTransaction.createdAt);

      // Convert the parsed date to a worded date (e.g., January 6, 2024)
      const wordedDate = parsedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      rows.push({
        id: 'package-name',
        paymentDescription: invoiceData.package_name,
        paymentAmount: invoiceData.rate,
        paymentStatus: matchedTransaction.status,
        date: wordedDate,
        action: matchedTransaction.Receipt
      });
    } else {
      rows.push({
        id: 'package-name',
        paymentDescription: invoiceData.package_name,
        paymentAmount: invoiceData.rate,
        paymentStatus: 'Not Paid',
        date: '',
      });
    }

  }

  const reservationRow = {
    id: 'reservation',
    paymentDescription: 'Reservation Fee',
    paymentAmount: 5000,
    paymentStatus: 'Not Paid',
    date: '',
  };

  const matchedReservationTransaction = transactions.find(transaction => transaction.description === 'Reservation Fee');

  if (matchedReservationTransaction) {
    // Parse the date string from matchedTransaction
    const parsedDate = new Date(matchedReservationTransaction.createdAt);
    const wordedDate = parsedDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Update the paymentStatus and date in the reservationRow
    reservationRow.paymentStatus = matchedReservationTransaction.status;
    reservationRow.date = wordedDate;
    reservationRow.action = matchedReservationTransaction.Receipt
  }

  // Push the updated reservationRow into rows
  rows.push(reservationRow);

  for (let i = 0; i < addsonData.length; i++) {
    const addon = addsonData[i];

    rows.push({
      id: i + 1,
      paymentDescription: `${addon.addons_name}`,
      paymentAmount: `${addon.addons_price}`,
      paymentStatus: 'Not Paid',
      date: ''
    });

  }
  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];

    for (let j = 0; j < addsonData.length; j++) {
      const addon = addsonData[j];

      if (transaction.description === addon.addons_name) {
        // Match found, update the paymentStatus in rows based on the status from transactions
        const matchedRow = rows.find(row => row.paymentDescription === transaction.description);

        if (matchedRow) {
          matchedRow.paymentStatus = transaction.status;
          const parsedDate = new Date(transaction.createdAt);

          // Convert the parsed date to a worded date
          const wordedDate = parsedDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });

          matchedRow.date = wordedDate;
          matchedRow.action = transaction.Receipt
          break;
        }
      }
    }
  }

  const paymentAmountSum = rows.reduce((sum, row) => sum + parseFloat(row.paymentAmount), 0);

  const acceptedPaymentAmountSum = rows.reduce((sum, row) => {
    if (row.paymentStatus === 'Accepted') {
      const amount = parseFloat(row.paymentAmount);
      return sum + amount;
    }
    return sum;
  }, 0);

  const remainingBalance = paymentAmountSum - acceptedPaymentAmountSum




  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="bg-blue-400 p-2 w-fit rounded-lg">
        <h1 className="font-bold text-2xl text-white">Transaction Table For Event</h1>
      </div>

      <DataGrid rows={rows} columns={columns} pageSize={5} style={{ backgroundColor: "white", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} />

      <Dialog open={modalOpen} onClose={handleCloseModal}>
        <DialogContent>
          <img
            src={selectedImage}
            alt="Receipt"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </DialogContent>
      </Dialog>
      <div className="flex flex-row gap-2 border-2 border-blue-500 p-4 bg-white">
        <div className="w-1/3 pl-[10px]">
          <span className="span-text font-bold text-xl">Total Balance: </span> <span className="font-bold">{paymentAmountSum} </span>
        </div>
        <div className="w-1/3 border-left border-gray-600">
          <span className="span-text font-bold text-xl">Paid Balance:</span> <span className="text-[#006400] font-bold">{acceptedPaymentAmountSum}</span>
        </div>
        <div className="w-1/3 border-left">
          <span className="span-text font-bold text-xl">Remaining Balance:</span> <span className="text-red font-bold">{remainingBalance}</span>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
