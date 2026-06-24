import BookingCard from "./BookingCard";
import EmptyState from "./EmptyState";

function BookingList({ bookings }) {
  if (bookings.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="bookings-section">
      <h2>Current Bookings</h2>

      <div className="bookings-grid">
        {bookings.map((booking) => (
          <BookingCard
            key={booking.id}
            booking={booking}
          />
        ))}
      </div>
    </div>
  );
}

export default BookingList;