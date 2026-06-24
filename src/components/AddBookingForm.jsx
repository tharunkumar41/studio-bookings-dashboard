import { useState } from "react";

function AddBookingForm({ bookings, setBookings }) {
  const [clientName, setClientName] = useState("");
  const [sessionType, setSessionType] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("confirmed");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !clientName.trim() ||
      !sessionType.trim() ||
      !date ||
      !status
    ) {
      setError("All fields are required.");
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(date);

    if (selectedDate < today) {
      setError("Date cannot be in the past.");
      return;
    }

    const newBooking = {
      id: Date.now(),
      clientName,
      sessionType,
      date,
      status,
    };

    setBookings([...bookings, newBooking]);

    setClientName("");
    setSessionType("");
    setDate("");
    setStatus("confirmed");
    setError("");
  };

  return (
    <div className="form-container">
      <h2>Add New Booking</h2>
      <p>Create a new studio reservation.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Client Name"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Session Type"
          value={sessionType}
          onChange={(e) => setSessionType(e.target.value)}
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="confirmed">Confirmed</option>
          <option value="pending">Pending</option>
          <option value="cancelled">Cancelled</option>
        </select>

        {error && (
          <p className="error-message">
            {error}
          </p>
        )}

        <button type="submit">
          Add Booking
        </button>
      </form>
    </div>
  );
}

export default AddBookingForm;