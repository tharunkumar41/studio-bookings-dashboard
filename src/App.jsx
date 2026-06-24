import { useState } from "react";
import bookingsData from "./data/bookings";

import BookingList from "./components/BookingList";
import FilterBar from "./components/FilterBar";
import AddBookingForm from "./components/AddBookingForm";

import CalendlyWidget from "./components/CalendlyWidget";

import "./App.css";

function App() {
  const [bookings, setBookings] = useState(bookingsData);
  const [filter, setFilter] = useState("all");

  const filteredBookings =
    filter === "all"
      ? bookings
      : bookings.filter(
          (booking) => booking.status === filter
        );

  return (
    <div className="header">
        <h1>Studio Bookings</h1>

        <p className="subtitle">
            Manage and track studio reservations
        </p>


      <FilterBar
        filter={filter}
        setFilter={setFilter}
      />

      <AddBookingForm
        bookings={bookings}
        setBookings={setBookings}
      />

      <BookingList bookings={filteredBookings} />

      <CalendlyWidget />
    </div>
  );
      
}

export default App;