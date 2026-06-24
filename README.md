# Studio Bookings Dashboard

## Overview

A simple React-based studio bookings dashboard that allows users to:

* View existing bookings
* Filter bookings by status (Confirmed, Pending, Cancelled)
* Add new bookings
* Validate required fields and booking dates
* View an empty state when no bookings match the selected filter

### Bonus Feature

A Calendly scheduling widget is embedded as a stretch goal to demonstrate integration with a real scheduling platform. The widget operates independently from the local booking list.

---

## Application Preview
Add New Booking
<img width="1901" height="601" alt="image" src="https://github.com/user-attachments/assets/dbd6e66b-6e21-40eb-9a67-67ccab6f3ed9" />

Current Bookings
<img width="1896" height="696" alt="Screenshot 2026-06-24 101549" src="https://github.com/user-attachments/assets/4de941d4-3ada-4076-b491-ba0d41cc4848" />

Filter Bookings
<img width="1897" height="608" alt="Screenshot 2026-06-24 101643" src="https://github.com/user-attachments/assets/864bee0b-f9af-4e31-a78e-2e8a9fd427b5" />

<img width="1896" height="838" alt="Screenshot 2026-06-24 101657" src="https://github.com/user-attachments/assets/620f0736-1adb-47a7-b344-e78b781f55bf" />

Empty Bookings
<img width="1898" height="821" alt="Screenshot 2026-06-24 101850" src="https://github.com/user-attachments/assets/eb90ba7d-081d-4140-9ae4-70abcbfb1b89" />

### Calendly Integration (Bonus)
<img width="1685" height="661" alt="Screenshot 2026-06-24 102413" src="https://github.com/user-attachments/assets/32501a25-4317-4184-9dd8-083a4e068670" />


## Tech Stack

* React
* Vite
* JavaScript
* CSS
* HTML

---

## Project Structure

```
src/
├── components/
│   ├── AddBookingForm.jsx
│   ├── BookingCard.jsx
│   ├── BookingList.jsx
│   ├── CalendlyWidget.jsx
│   ├── EmptyState.jsx
│   └── FilterBar.jsx
│
├── data/
│   └── bookings.js
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/tharunkumar41/studio-bookings-dashboard.git
```

### 2. Navigate to the Project Directory

```bash
cd studio-bookings-dashboard
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open in Browser

Vite will display a local development URL similar to:

```
http://localhost:5173/
```

Open the URL in your browser to view the application.

---

## Features

### Booking List

* Displays all bookings from a local data source.
* Clear visual hierarchy using cards.
* Color-coded status badges.

### Status Filtering

* Filter bookings by:

  * All
  * Confirmed
  * Pending
  * Cancelled

### Add Booking

* Add new bookings through a form.
* Updates the list immediately using React state.

### Validation

* Prevents submission of empty fields.
* Prevents selecting dates in the past.
* Displays clear validation messages.


### Empty State

The application includes an empty state component that is displayed whenever a filter returns zero matching bookings.

The current sample dataset contains at least one booking for each status. The empty state can be observed by modifying the sample data so that a selected status has no matching bookings.


---

## Design Decisions

* Components are separated by responsibility to improve readability and maintainability.
* Each component has a single responsibility, making the code easier to understand, maintain, and extend.
* React state (`useState`) is used for managing bookings and filters.
* Initial booking data is stored in a local JavaScript file to simulate a data source.

---

## Trade-offs

* Booking data is stored in client-side state and does not persist after page refresh.
* A backend/database was intentionally omitted because persistence was not required for the assignment.
* React's built-in state management was used instead of additional libraries due to the application's small scope.
* Plain CSS was used to keep the project lightweight while still providing clear layout and visual hierarchy.

---

## Bonus Feature

A Calendly scheduling widget was integrated as a stretch goal.

* Allows users to schedule a real appointment through Calendly.
* Operates independently from the local booking list.
* No backend integration or synchronization was implemented, as this was outside the assignment scope.
