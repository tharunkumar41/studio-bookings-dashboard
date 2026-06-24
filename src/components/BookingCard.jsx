function BookingCard({ booking }) {
  return (
    <div className="booking-card">
      <h3>{booking.clientName}</h3>

      <p>
        <strong>Session:</strong> {booking.sessionType}
      </p>

      <p>
        <strong>Date:</strong>{" "}
        {new Date(booking.date).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "short",
            day: "numeric",
          }
  )}
</p>

      <span className={`status-badge ${booking.status}`}>
        {booking.status.charAt(0).toUpperCase() +
            booking.status.slice(1)}
      </span>
    </div>
  );
}

export default BookingCard;