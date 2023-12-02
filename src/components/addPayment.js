import React, { useState } from "react";
import axios from "axios";
import "../css/modal.css";
import { useEffect } from "react";

const AddPayment = ({ isOpen, onClose }) => {
  const [invoiceEventid, setInvoiceEventid] = useState();
  const [paymentDescription, setPaymentDescription] = useState("");
  const [paymentPaid, setPaymentPaid] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:9000/api/client/payment",
        {
          event_id: invoiceEventid,
          payment_description: paymentDescription,
          payment_paid: paymentPaid,
        }
      );

      if (response.data) {
        alert("Payment Created Successfully");
        setInvoiceEventid("");
        setPaymentDescription("");
        setPaymentPaid("");
        window.location.reload();

        // onClose();
      } else {
        alert("Error creating payment");
      }
    } catch (error) {
      console.error("Error creating payment:", error);
    }
  };

  // Try Fetch event Id for transaction
  const API_ENDPOINT = "http://localhost:9000/api/all/payments";
  const EVENTAPI_ENDPOINT = "https://3.27.163.46/api/get/event/all";

  const [events, setEvents] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(EVENTAPI_ENDPOINT);
        const result = await response.json();
        setInvoiceEventid(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        const result = await response.json();
        setTransactions(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  });

  const handleEventSelection = (eventId) => {
    setSelectedEventId(eventId);
  };

  return (
    <div
      className={`modal fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      {/* <div className="fixed inset-0 bg-black opacity-50"></div> */}
      <div
        className="modal-container relative rounded-lg bg-white w-fit"
        data-te-modal-body-ref
      >
        <div className="w-full h-fit p-5 bg-primary200 rounded-t-lg">
          <h1 className="font-heading font-semibold text-heading25 text-white text-center">
            New Transaction
          </h1>
        </div>

        <div className="flex flex-col w-full gap-5 p-5">
          <div className="flex gap-10 w-full">
            {/* Set Event Id: */}
            <div className="flex flex-col w-full gap-2 font-tbc font-medium text-title13">
              <select onChange={(e) => setInvoiceEventid(e.target.value)}>
                <option value={null}>Select an Event</option>
                {events.map((event) => (
                  <option key={event.id} value={event.id}>
                    {event.name}
                  </option>
                ))}
              </select>
              {/* <label for="dish">Event Id:</label>
              <input
                type="text"
                onChange={(e) => {
                  setInvoiceEventid(e.target.value);
                }}
                className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                required
              /> */}
            </div>
          </div>

          {/* Payment Description: */}
          <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
            <label for="dish">Payment Description:</label>
            <input
              type="text"
              onChange={(e) => {
                setPaymentDescription(e.target.value);
              }}
              className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
              required
            />
          </div>

          {/* Set Payment Availed: */}
          <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
            <label for="dish">Payment Paid:</label>
            <input
              type="text"
              onChange={(e) => {
                setPaymentPaid(e.target.value);
              }}
              className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
              required
            />
          </div>

          {/* Set Employee Position */}
          {/* <div className="flex flex-col gap-2 font-tbc font-medium text-title13">
              <label for="dish">Select Role:</label>
              <select
                name="employee"
                id="classic"
                onChange={(e) => {
                  // setEmpposition(e.target.value);
                }}
                className="border rounded-lg p-5 text-title13 texttransition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-black dark:placeholder:text-neutral-200 dark:focus:border-primary"
                required
              >
                <option disabled selected hidden>
                  Select Role
                </option>
                <option value="Headwaiter">Headwaiter</option>
                <option value="Waiter">Waiter</option>
                <option value="On-call waiter">On-call waiter</option>
                <option value="Coordinato">Coordinator</option>
                <option value="Warehouse Staff">Warehouse Staff</option>
                <option value="Driver">Driver</option>
                <option value="Chat Supporti">Chat Support</option>
                <option value="System Administrator">
                  System Administrator
                </option>
              </select>
            </div> */}
        </div>

        {/** Register and Cancel Button */}
        <div className="flex justify-between p-5 gap-20 w-full h-fit font-tbc font-semibold">
          <button
            type="submit"
            className="border rounded-xl text-secondary500 hover:text-white hover:bg-secondary500 px-5 py-3 w-fit h-fit"
            onClick={handleSubmit}
          >
            Add Payment
          </button>
          <button
            type="button"
            className="border rounded-xl font-semibold text-primary500 hover:text-white hover:bg-primary500 px-5 py-3 w-fit h-fit"
            onClick={onClose}
          >
            Cancel Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPayment;
